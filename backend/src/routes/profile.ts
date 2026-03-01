import { Router, Request, Response } from "express";
import { ChildProfile } from "../types";

const router = Router();

// In-memory store — replace with a real database
const profiles = new Map<string, ChildProfile>();

// POST /api/profile
router.post("/", (req: Request, res: Response) => {
  const profile = req.body as ChildProfile;
  const id = `profile-${Date.now()}`;
  profiles.set(id, profile);
  res.status(201).json({ id, profile });
});

// GET /api/profile/:id
router.get("/:id", (req: Request, res: Response) => {
  const id = String(req.params.id);
  const profile = profiles.get(id);
  if (!profile) {
    res.status(404).json({ error: "Profile not found" });
    return;
  }
  res.json({ id, profile });
});

// PATCH /api/profile/:id
router.patch("/:id", (req: Request, res: Response) => {
  const id = String(req.params.id);
  const existing = profiles.get(id);
  if (!existing) {
    res.status(404).json({ error: "Profile not found" });
    return;
  }
  const updated = { ...existing, ...req.body };
  profiles.set(id, updated);
  res.json({ id, profile: updated });
});

export default router;
