import { Router, Response } from "express";
import OpenAI from "openai";
import db from "../db";
import { AuthRequest, authMiddleware } from "../middleware/auth";
import { searchKnowledge } from "../rag";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// ── OpenAI client pointed at LM Studio ───────────────────────────────────────
const LM_STUDIO_URL = process.env.LM_STUDIO_URL || "http://localhost:1234/v1";
const LM_STUDIO_MODEL = process.env.LM_STUDIO_MODEL || "qwen/qwen3-14b";

const openai = new OpenAI({
  baseURL: LM_STUDIO_URL,
  apiKey: "not-needed",
});

// Strip Qwen3 <think>...</think> reasoning blocks from responses
function cleanAIResponse(text: string): string {
  return text.replace(/<think>[\s\S]*?<\/think>\s*/g, "").trim();
}

// Detect whether a message is a substantive question that warrants RAG lookup,
// vs. a simple greeting or chitchat that should get a natural conversational reply.
function isSubstantiveQuery(message: string): boolean {
  const trimmed = message.replace(/[^\w\s\u0600-\u06FF\u0980-\u09FF\u0900-\u097F\u3000-\u9FFF\uAC00-\uD7AF\u0410-\u044F]/g, "").trim().toLowerCase();
  const greetings = [
    // English
    "hi", "hello", "hey", "good morning", "good afternoon", "good evening",
    "thanks", "thank you", "bye", "goodbye", "ok", "okay", "yes", "no", "sure",
    // Spanish
    "hola", "buenos días", "buenas tardes", "buenas noches", "gracias", "adiós", "sí",
    // French
    "bonjour", "bonsoir", "salut", "merci", "au revoir", "oui", "non",
    // Portuguese
    "olá", "oi", "bom dia", "boa tarde", "boa noite", "obrigado", "obrigada", "tchau", "sim", "não",
    // Arabic (transliterated)
    "مرحبا", "شكرا", "نعم", "لا", "مع السلامة",
    // Hindi
    "नमस्ते", "धन्यवाद", "हां", "नहीं", "अलविदा",
    // Bengali
    "নমস্কার", "ধন্যবাদ", "হ্যাঁ", "না",
    // Korean
    "안녕하세요", "안녕", "감사합니다", "네", "아니요",
    // Chinese
    "你好", "谢谢", "再见", "是", "不是",
    // Vietnamese
    "xin chào", "cảm ơn", "tạm biệt",
    // Tagalog
    "kumusta", "salamat", "paalam", "oo", "hindi",
    // Russian
    "привет", "здравствуйте", "спасибо", "да", "нет", "пока",
    // Haitian Creole
    "bonjou", "mèsi", "orevwa", "wi", "non",
    // Somali
    "salaam", "mahadsanid",
  ];
  if (greetings.includes(trimmed)) return false;
  // Short messages (1-2 words) are usually not substantive
  if (trimmed.split(/\s+/).length <= 2 && trimmed.length < 20) return false;
  return true;
}

// ── POST / — Chat with AI assistant ──────────────────────────────────────────
router.post("/", async (req: AuthRequest, res: Response) => {
  try {
    const { message, language } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    if (typeof message !== "string" || message.length > 2000) {
      res.status(400).json({ error: "Message must be a string of 2000 characters or fewer" });
      return;
    }

    // Get parent name and child profile for context
    const parentUser = db
      .prepare("SELECT name FROM users WHERE id = ?")
      .get(req.userId!) as { name: string } | undefined;

    const profile = db
      .prepare("SELECT * FROM child_profiles WHERE user_id = ?")
      .get(req.userId!) as any | undefined;

    // Only search the knowledge base for substantive questions — skip for
    // greetings and chitchat so the AI can respond naturally.
    // For non-English queries, try RAG with original query first (technical
    // terms like IEP, ABA, autism often appear in any language). Only
    // translate if the direct search finds nothing — avoids a ~10s LLM call.
    const substantive = isSubstantiveQuery(message);
    const lang = (req as any).language ?? language ?? "en";
    let knowledgeChunks: ReturnType<typeof searchKnowledge> = [];

    if (substantive) {
      // Search knowledge base with original query. English technical terms
      // (IEP, ABA, autism) match regardless of query language. For pure
      // non-English queries the LLM answers from its own knowledge — this
      // keeps responses fast by avoiding a slow translation LLM call.
      knowledgeChunks = searchKnowledge(message, 2, lang);
    }

    const knowledgeContext = knowledgeChunks
      .map((c) => `[${c.heading}]\n${c.content.slice(0, 500)}`)
      .join("\n\n");

    const sources = knowledgeChunks.map((c) => ({
      file: c.file,
      heading: c.heading,
    }));

    // Build system prompt
    let systemPrompt = `You are a warm, supportive companion for parents of autistic children. Be a knowledgeable friend, not a textbook.

Rules:
- Answer ONLY the current message. Do not recap previous messages.
- For greetings/small talk, respond naturally. Only give advice when asked.
- Be empathetic, specific, actionable. Under 120 words.
- Every child is unique. Never diagnose — recommend professional evaluation.
- Use simple, conversational language.`;

    if (parentUser) {
      systemPrompt += `\n\nParent's name: ${parentUser.name.split(" ")[0]}. Address them by name when natural.`;
    }

    if (profile) {
      systemPrompt += `\n\nChild Profile:
- Child's name: ${profile.name}
- Age: ${profile.age}
- Communication level: ${profile.communication_level}
- Triggers: ${profile.triggers}
- Loves/interests: ${profile.loves}
- Notes: ${profile.notes}

Refer to the child by name. This parent is caring for their child — personalize advice accordingly.`;
    }

    if (knowledgeContext) {
      systemPrompt += `\n\nRelevant Knowledge Base Information:
${knowledgeContext}

Use this information to inform your response when relevant. Cite specific resources when applicable.`;
    }

    if (language && language !== "en") {
      systemPrompt += `\n\nIMPORTANT: Respond in the language with code "${language}". The user prefers to communicate in this language.`;
    }

    // Get last 2 messages from chat history for conversation context.
    // Injected into the system prompt as reference text (not as separate chat turns)
    // so the model answers the current question without continuing previous topics.
    const history = db
      .prepare(
        "SELECT role, content FROM chat_history WHERE user_id = ? ORDER BY created_at DESC LIMIT 2"
      )
      .all(req.userId!) as { role: string; content: string }[];

    history.reverse();

    if (history.length > 0) {
      const historyLines = history
        .map((h) => `${h.role === "user" ? "Parent" : "Assistant"}: ${h.content.slice(0, 100)}`)
        .join("\n");
      systemPrompt += `\n\nRecent conversation (reference only — do not repeat or expand on these topics unless the parent explicitly asks again):\n${historyLines}`;
    }

    // Append /no_think to disable qwen3 reasoning mode (much faster responses)
    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      { role: "system", content: systemPrompt },
      { role: "user", content: message + " /no_think" },
    ];

    // Call LM Studio
    const completion = await openai.chat.completions.create({
      model: LM_STUDIO_MODEL,
      messages,
      temperature: 0.4,
      max_tokens: 300,
    });

    const rawReply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response. Please try again.";
    const reply = cleanAIResponse(rawReply);

    // Save both messages to chat history
    const insertChat = db.prepare(
      "INSERT INTO chat_history (user_id, role, content, sources) VALUES (?, ?, ?, ?)"
    );

    insertChat.run(req.userId!, "user", message, "[]");
    insertChat.run(req.userId!, "assistant", reply, JSON.stringify(sources));

    res.json({ reply, sources });
  } catch (error: any) {
    console.error("Chat error:", error.message);
    res.status(502).json({
      error: "Unable to reach the AI service. Make sure LM Studio is running on localhost:1234 with a model loaded.",
    });
  }
});

// ── POST /translate — Translate text via LLM ─────────────────────────────────
router.post("/translate", async (req: AuthRequest, res: Response) => {
  try {
    const { text, targetLanguage } = req.body;

    if (!text || !targetLanguage) {
      res.status(400).json({ error: "text and targetLanguage are required" });
      return;
    }

    const completion = await openai.chat.completions.create({
      model: LM_STUDIO_MODEL,
      messages: [
        {
          role: "system",
          content: `You are a professional translator. Translate the following text to ${targetLanguage}. Return ONLY the translation, nothing else.`,
        },
        { role: "user", content: text },
      ],
      temperature: 0.3,
      max_tokens: 1024,
    });

    const translation = cleanAIResponse(completion.choices[0]?.message?.content || text);

    res.json({ translation });
  } catch (error: any) {
    console.error("Translation error:", error.message);
    res.status(502).json({
      error: "Unable to reach the AI service. Make sure LM Studio is running on localhost:1234 with a model loaded.",
    });
  }
});

// ── GET /history — Get chat history for authenticated user ───────────────────
router.get("/history", (req: AuthRequest, res: Response) => {
  const rows = db
    .prepare(
      "SELECT * FROM chat_history WHERE user_id = ? ORDER BY created_at ASC LIMIT 100"
    )
    .all(req.userId!) as any[];

  const messages = rows.map((row) => ({
    ...row,
    sources: JSON.parse(row.sources || "[]"),
  }));

  res.json({ messages });
});

export default router;
