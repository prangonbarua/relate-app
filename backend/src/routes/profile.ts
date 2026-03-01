import { Router, Response } from "express";
import db from "../db";
import { AuthRequest, authMiddleware } from "../middleware/auth";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// ── GET / — Get child profile for authenticated user ─────────────────────────
router.get("/", (req: AuthRequest, res: Response) => {
  const row = db
    .prepare("SELECT * FROM child_profiles WHERE user_id = ?")
    .get(req.userId!) as any | undefined;

  if (!row) {
    res.json({ profile: null });
    return;
  }

  const profile = {
    ...row,
    triggers: JSON.parse(row.triggers || "[]"),
    loves: JSON.parse(row.loves || "[]"),
  };

  res.json({ profile });
});

// ── PUT / — Upsert child profile ─────────────────────────────────────────────
router.put("/", (req: AuthRequest, res: Response) => {
  const { name, age, communicationLevel, diagnosisStatus, triggers, loves, notes } = req.body;

  if (!name || age === undefined) {
    res.status(400).json({ error: "Name and age are required" });
    return;
  }

  // Input length validation
  if (typeof name === "string" && name.length > 100) {
    res.status(400).json({ error: "Name must be 100 characters or fewer" });
    return;
  }

  const triggersJson = JSON.stringify(triggers || []);
  const lovesJson = JSON.stringify(loves || []);

  if (triggersJson.length > 2000) {
    res.status(400).json({ error: "Triggers must be 2000 characters or fewer" });
    return;
  }

  if (lovesJson.length > 2000) {
    res.status(400).json({ error: "Loves must be 2000 characters or fewer" });
    return;
  }

  if (typeof notes === "string" && notes.length > 2000) {
    res.status(400).json({ error: "Notes must be 2000 characters or fewer" });
    return;
  }

  const existing = db
    .prepare("SELECT id FROM child_profiles WHERE user_id = ?")
    .get(req.userId!) as { id: number } | undefined;

  if (existing) {
    db.prepare(
      `UPDATE child_profiles
       SET name = ?, age = ?, communication_level = ?, diagnosis_status = ?,
           triggers = ?, loves = ?, notes = ?
       WHERE user_id = ?`
    ).run(
      name,
      age,
      communicationLevel || "emerging",
      diagnosisStatus || "suspected",
      triggersJson,
      lovesJson,
      notes || "",
      req.userId!
    );
  } else {
    db.prepare(
      `INSERT INTO child_profiles (user_id, name, age, communication_level, diagnosis_status, triggers, loves, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      req.userId!,
      name,
      age,
      communicationLevel || "emerging",
      diagnosisStatus || "suspected",
      triggersJson,
      lovesJson,
      notes || ""
    );
  }

  // Return the updated profile
  const row = db
    .prepare("SELECT * FROM child_profiles WHERE user_id = ?")
    .get(req.userId!) as any;

  const profile = {
    ...row,
    triggers: JSON.parse(row.triggers || "[]"),
    loves: JSON.parse(row.loves || "[]"),
  };

  res.json({ profile });
});

// ── GET /logs — Get activity logs for authenticated user ─────────────────────
router.get("/logs", (req: AuthRequest, res: Response) => {
  const logs = db
    .prepare(
      "SELECT * FROM activity_logs WHERE user_id = ? ORDER BY created_at DESC LIMIT 50"
    )
    .all(req.userId!);

  res.json({ logs });
});

// ── POST /logs — Create an activity log entry ────────────────────────────────
router.post("/logs", (req: AuthRequest, res: Response) => {
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
