import { Router, Request, Response } from "express";
import { GenerateCardRequest, DailyCard } from "../types";

const router = Router();

// Seed cards per track — will be replaced by AI generation
const SEED_CARDS: Record<string, DailyCard[]> = {
  "pre-diagnosis": [
    {
      id: "pd-001",
      skill: "Observation Journaling",
      whyItMatters:
        "Detailed observations help clinicians make accurate diagnoses and help you advocate during evaluations.",
      steps: [
        "Set a 10-minute timer and watch your child play without intervening.",
        "Write down exactly what you see: words used, sounds made, body movements.",
        "Note what captures their attention longest.",
        "Bring these notes to your next appointment.",
      ],
      category: "Documentation",
      date: new Date().toISOString(),
      track: "pre-diagnosis",
    },
  ],
  "newly-diagnosed": [
    {
      id: "nd-001",
      skill: "Joint Attention: Follow the Leader",
      whyItMatters:
        "Joint attention is the foundation of language and social connection. Following your child's lead builds the neural pathways for communication.",
      steps: [
        "Watch what your child focuses on right now without redirecting.",
        "Move into their line of sight at eye level. Narrate: 'You're spinning the wheel!'",
        "Pause and wait 5 seconds. See if they look at you.",
        "Repeat 2–3 times, always following their interest.",
      ],
      category: "Communication",
      date: new Date().toISOString(),
      track: "newly-diagnosed",
    },
  ],
  "on-waitlist": [
    {
      id: "ow-001",
      skill: "Visual Schedule Introduction",
      whyItMatters:
        "Visual schedules reduce anxiety by making the unpredictable predictable. They're one of the highest-impact, zero-cost interventions available.",
      steps: [
        "Pick 3 activities in your child's morning routine.",
        "Draw or print simple pictures for each (breakfast, brush teeth, shoes).",
        "Laminate or put in plastic sleeves. Velcro them in order on the wall.",
        "Walk through the schedule together once before the routine begins.",
      ],
      category: "Behavior",
      date: new Date().toISOString(),
      track: "on-waitlist",
    },
  ],
  "older-child": [
    {
      id: "oc-001",
      skill: "Emotion Check-In Cards",
      whyItMatters:
        "Older autistic children often have rich emotional lives but difficulty labeling feelings. Visual tools bridge this gap and reduce meltdowns.",
      steps: [
        "Create 5 cards with emotion words and simple faces (happy, sad, frustrated, excited, overwhelmed).",
        "Offer the cards at natural transition points — after school, before bed.",
        "Accept any answer without correction. 'Frustrated' is valid.",
        "Model your own: 'I'm feeling a little tired today. Which card is me?'",
      ],
      category: "Emotional Regulation",
      date: new Date().toISOString(),
      track: "older-child",
    },
  ],
};

// GET /api/cards/today
router.get("/today", (req: Request, res: Response) => {
  const { track = "newly-diagnosed" } = req.query as GenerateCardRequest;
  const cards = SEED_CARDS[track] ?? SEED_CARDS["newly-diagnosed"];
  const card = cards[Math.floor(Math.random() * cards.length)];
  res.json({ card, generatedAt: new Date().toISOString() });
});

// POST /api/cards/generate
router.post("/generate", (req: Request, res: Response) => {
  const { track = "newly-diagnosed", profile } = req.body as GenerateCardRequest;
  // Placeholder: in production, this calls an AI service
  const cards = SEED_CARDS[track] ?? SEED_CARDS["newly-diagnosed"];
  const card = { ...cards[0], id: `gen-${Date.now()}`, date: new Date().toISOString() };
  res.json({
    card,
    personalized: !!profile,
    generatedAt: new Date().toISOString(),
  });
});

export default router;
