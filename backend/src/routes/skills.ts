import { Router, Response } from "express";
import db from "../db";
import { AuthRequest, authMiddleware } from "../middleware/auth";
import {
  getAllSkills,
  getCategories,
  getSkillsByCategory,
  getDailyCard,
} from "../skills";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// ── GET / — All skills grouped with categories ──────────────────────────────
router.get("/", (req: AuthRequest, res: Response) => {
  res.json({
    categories: getCategories(),
    skills: getAllSkills(),
  });
});

// ── GET /categories — Category list with skill counts ────────────────────────
router.get("/categories", (req: AuthRequest, res: Response) => {
  const categories = getCategories().map((cat) => ({
    name: cat,
    count: getSkillsByCategory(cat).length,
  }));

  res.json({ categories });
});

// ── GET /category/:name — Skills filtered by category ────────────────────────
router.get("/category/:name", (req: AuthRequest, res: Response) => {
  const skills = getSkillsByCategory(req.params.name as string);
  res.json({ category: req.params.name, skills });
});

// ── GET /daily — Today's skill card for the authenticated user ───────────────
router.get("/daily", (req: AuthRequest, res: Response) => {
  const card = getDailyCard(req.userId!);
  res.json({ card });
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
