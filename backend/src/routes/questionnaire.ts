import { Router, Response } from "express";
import db from "../db";
import { AuthRequest, authMiddleware } from "../middleware/auth";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// ── Question interface ───────────────────────────────────────────────────────
interface Question {
  id: number;
  text: string;
  category: string;
  /** Which answer indicates a concern — "yes" or "no" */
  concernAnswer: "yes" | "no";
}

// ── M-CHAT-R style screening questions ───────────────────────────────────────
const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Does your child look at you when you call their name?",
    category: "social-attention",
    concernAnswer: "no",
  },
  {
    id: 2,
    text: "Does your child point to ask for something or to get help (e.g., pointing to a snack or toy that is out of reach)?",
    category: "joint-attention",
    concernAnswer: "no",
  },
  {
    id: 3,
    text: "Does your child play pretend or make-believe (e.g., pretend to drink from a toy cup, feed a doll, talk on a toy phone)?",
    category: "imagination",
    concernAnswer: "no",
  },
  {
    id: 4,
    text: "Does your child seem oversensitive to noise (e.g., covering ears or becoming upset by everyday sounds)?",
    category: "sensory",
    concernAnswer: "yes",
  },
  {
    id: 5,
    text: "Does your child point to show you something interesting (not to ask for it, but just to share)?",
    category: "joint-attention",
    concernAnswer: "no",
  },
  {
    id: 6,
    text: "Does your child make eye contact with you during play or conversation?",
    category: "social-attention",
    concernAnswer: "no",
  },
  {
    id: 7,
    text: "Does your child follow your gaze when you look at something across the room?",
    category: "joint-attention",
    concernAnswer: "no",
  },
  {
    id: 8,
    text: "Does your child show interest in other children their age?",
    category: "social-interaction",
    concernAnswer: "no",
  },
  {
    id: 9,
    text: "Does your child use several words together in phrases (e.g., 'want milk', 'go park')?",
    category: "communication",
    concernAnswer: "no",
  },
  {
    id: 10,
    text: "Does your child have repetitive movements like hand flapping, spinning, or rocking?",
    category: "restricted-behaviors",
    concernAnswer: "yes",
  },
  {
    id: 11,
    text: "Does your child bring objects to you to share their interest (e.g., showing you a flower or a toy)?",
    category: "social-interaction",
    concernAnswer: "no",
  },
  {
    id: 12,
    text: "Does your child respond to their name being called by turning to look at you within a few seconds?",
    category: "social-attention",
    concernAnswer: "no",
  },
];

// ── Category explanations ────────────────────────────────────────────────────
const CATEGORY_EXPLANATIONS: Record<string, string> = {
  "social-attention":
    "Social attention refers to how a child notices and responds to people around them. Difficulty with social attention can be an early indicator of autism and may affect how a child learns from social interactions.",
  "joint-attention":
    "Joint attention is the ability to share focus with another person on the same object or event. It is one of the strongest early predictors of language development and social learning.",
  imagination:
    "Pretend play and imagination help children develop symbolic thinking, which is the foundation for language, empathy, and flexible problem-solving.",
  sensory:
    "Sensory processing differences are very common in autism. Children may be over-sensitive or under-sensitive to sounds, textures, lights, or other sensory input.",
  communication:
    "Communication includes both understanding language and using language to express needs. Delays in combining words or using language functionally can be an area of concern.",
  "restricted-behaviors":
    "Repetitive movements or restricted interests are core features of autism. While these behaviors serve a purpose (often self-regulation), they can sometimes interfere with daily activities.",
  "social-interaction":
    "Social interaction includes interest in peers, sharing enjoyment, and engaging in back-and-forth social exchanges. Differences in social interaction are a hallmark of autism.",
};

// ── GET / — Return questionnaire questions ───────────────────────────────────
router.get("/", (req: AuthRequest, res: Response) => {
  // Return questions without the concernAnswer field (don't reveal scoring logic)
  const questions = QUESTIONS.map(({ id, text, category }) => ({
    id,
    text,
    category,
  }));

  res.json({ questions });
});

// ── POST /submit — Score questionnaire and return results ────────────────────
router.post("/submit", (req: AuthRequest, res: Response) => {
  const { answers } = req.body;

  if (!answers || typeof answers !== "object") {
    res.status(400).json({ error: "Answers object is required" });
    return;
  }

  // Score: count how many answers match the concern answer
  let totalConcerns = 0;
  const categoryScores: Record<string, { concerns: number; total: number }> = {};

  for (const question of QUESTIONS) {
    const answer = answers[question.id];

    if (!categoryScores[question.category]) {
      categoryScores[question.category] = { concerns: 0, total: 0 };
    }
    categoryScores[question.category].total++;

    if (answer === question.concernAnswer) {
      totalConcerns++;
      categoryScores[question.category].concerns++;
    }
  }

  // Determine risk level
  let riskLevel: string;
  let recommendation: string;

  if (totalConcerns <= 2) {
    riskLevel = "low";
    recommendation =
      "Based on your responses, your child's development appears to be on track in most areas. Continue monitoring their development and bring up any concerns at your next well-child visit. Remember that every child develops at their own pace.";
  } else if (totalConcerns <= 5) {
    riskLevel = "moderate";
    recommendation =
      "Your responses suggest some areas where your child's development may benefit from a closer look. We recommend discussing these results with your pediatrician and requesting a developmental screening. Early support can make a significant difference — this is not a diagnosis, but an indication that further evaluation would be helpful.";
  } else {
    riskLevel = "elevated";
    recommendation =
      "Your responses indicate several areas of concern for your child's development. We strongly recommend requesting a comprehensive developmental evaluation from your pediatrician or a developmental specialist as soon as possible. Early intervention services can begin even before a formal diagnosis and can significantly improve outcomes. Remember: seeking evaluation is an act of love and advocacy.";
  }

  // Build category breakdown
  const categoryBreakdown = Object.entries(categoryScores).map(
    ([category, scores]) => ({
      category,
      concerns: scores.concerns,
      total: scores.total,
      explanation: CATEGORY_EXPLANATIONS[category] || "",
    })
  );

  // Save to database
  db.prepare(
    "INSERT INTO questionnaire_responses (user_id, answers, score) VALUES (?, ?, ?)"
  ).run(req.userId!, JSON.stringify(answers), totalConcerns);

  res.json({
    score: totalConcerns,
    totalQuestions: QUESTIONS.length,
    riskLevel,
    recommendation,
    categoryBreakdown,
    disclaimer:
      "This screening tool is for informational purposes only and is NOT a diagnostic instrument. It is based on common developmental indicators and should not replace a professional evaluation. Only qualified healthcare professionals can diagnose autism spectrum disorder. If you have concerns about your child's development, please consult your pediatrician or a developmental specialist.",
  });
});

export default router;
