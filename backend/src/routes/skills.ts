import { Router, Response } from "express";
import db from "../db";
import { AuthRequest, authMiddleware } from "../middleware/auth";
import {
  getAllSkills,
  getCategories,
  getSkillsByCategory,
  getDailyCard,
  getWeeklyCards,
} from "../skills";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// ── GET / — All skills grouped with categories ──────────────────────────────
router.get("/", (req: AuthRequest, res: Response) => {
  const lang = (req as any).language ?? "en";
  res.json({
    categories: getCategories(lang),
    skills: getAllSkills(lang),
  });
});

// ── GET /categories — Category list with skill counts ────────────────────────
router.get("/categories", (req: AuthRequest, res: Response) => {
  const lang = (req as any).language ?? "en";
  const categories = getCategories(lang).map((cat) => ({
    name: cat,
    count: getSkillsByCategory(cat, lang).length,
  }));

  res.json({ categories });
});

// ── GET /category/:name — Skills filtered by category ────────────────────────
router.get("/category/:name", (req: AuthRequest, res: Response) => {
  const lang = (req as any).language ?? "en";
  const skills = getSkillsByCategory(req.params.name as string, lang);
  res.json({ category: req.params.name, skills });
});

// ── GET /daily — Today's skill card for the authenticated user ───────────────
router.get("/daily", (req: AuthRequest, res: Response) => {
  const lang = (req as any).language ?? "en";
  const card = getDailyCard(req.userId!, lang);
  res.json({ card });
});

// ── GET /weekly — This week's 3 skill cards ──────────────────────────────────
router.get("/weekly", (req: AuthRequest, res: Response) => {
  const lang = (req as any).language ?? "en";
  const cards = getWeeklyCards(req.userId!, lang);
  res.json({ cards });
});

// ── POST /daily/log — Log outcome for today's card ──────────────────────────
router.post("/daily/log", (req: AuthRequest, res: Response) => {
  const { cardId, outcome, notes } = req.body;

  if (!cardId || !outcome) {
    res.status(400).json({ error: "cardId and outcome are required" });
    return;
  }

  db.prepare(
    "INSERT INTO activity_logs (user_id, card_id, outcome, notes) VALUES (?, ?, ?, ?)"
  ).run(req.userId!, cardId, outcome, notes || "");

  res.json({ success: true });
});

export default router;
