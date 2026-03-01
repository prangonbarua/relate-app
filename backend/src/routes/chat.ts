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
  const trimmed = message.replace(/[^\w\s]/g, "").trim().toLowerCase();
  const greetings = [
    "hi", "hello", "hey", "good morning", "good afternoon", "good evening",
    "thanks", "thank you", "bye", "goodbye", "ok", "okay", "yes", "no", "sure",
  ];
  if (greetings.includes(trimmed)) return false;
  if (trimmed.split(/\s+/).length <= 2) return false;
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

    // Get child profile for context
    const profile = db
      .prepare("SELECT * FROM child_profiles WHERE user_id = ?")
      .get(req.userId!) as any | undefined;

    // Only search the knowledge base for substantive questions — skip for
    // greetings and chitchat so the AI can respond naturally.
    const substantive = isSubstantiveQuery(message);
    const knowledgeChunks = substantive ? searchKnowledge(message, 2) : [];
    const knowledgeContext = knowledgeChunks
      .map((c) => `[${c.heading}]\n${c.content.slice(0, 500)}`)
      .join("\n\n");

    const sources = knowledgeChunks.map((c) => ({
      file: c.file,
      heading: c.heading,
    }));

    // Build system prompt
    let systemPrompt = `You are a friendly, supportive companion for parents of autistic children in the Relate app. Think of yourself as a warm, knowledgeable friend — not a textbook.

Guidelines:
- If the parent greets you or makes small talk, respond naturally and warmly. Only provide educational or resource information when they ask a question.
- Be empathetic, encouraging, and non-judgmental
- When answering questions, be specific and actionable — focus on what was actually asked
- Keep responses concise — under 150 words
- Acknowledge that every child is unique
- Never provide medical diagnoses — encourage professional evaluation
- Use simple, conversational language`;

    if (profile) {
      systemPrompt += `\n\nChild Profile Context:
- Child's name: ${profile.name}
- Age: ${profile.age}
- Communication level: ${profile.communication_level}
- Diagnosis status: ${profile.diagnosis_status}
- Triggers: ${profile.triggers}
- Loves/interests: ${profile.loves}
- Notes: ${profile.notes}

Use this context to personalize your responses. Reference the child by name when appropriate.`;
    }

    if (knowledgeContext) {
      systemPrompt += `\n\nRelevant Knowledge Base Information:
${knowledgeContext}

Use this information to inform your response when relevant. Cite specific resources when applicable.`;
    }

    if (language && language !== "en") {
      systemPrompt += `\n\nIMPORTANT: Respond in the language with code "${language}". The user prefers to communicate in this language.`;
    }

    // Get last 4 messages from chat history for conversation context
    const history = db
      .prepare(
        "SELECT role, content FROM chat_history WHERE user_id = ? ORDER BY created_at DESC LIMIT 4"
      )
      .all(req.userId!) as { role: string; content: string }[];

    // Reverse to chronological order
    history.reverse();

    // Append /no_think to disable qwen3 reasoning mode (much faster responses)
    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      { role: "system", content: systemPrompt },
      ...history.map((h) => ({
        role: h.role as "user" | "assistant",
        content: h.content,
      })),
      { role: "user", content: message + " /no_think" },
    ];

    // Call LM Studio
    const completion = await openai.chat.completions.create({
      model: LM_STUDIO_MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 400,
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
