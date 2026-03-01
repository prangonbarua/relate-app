import { Router, Response } from "express";
import bcrypt from "bcryptjs";
import db from "../db";
import { AuthRequest, authMiddleware, createToken } from "../middleware/auth";

const router = Router();

// ── POST /register ──────────────────────────────────────────────────────────
router.post("/register", async (req: AuthRequest, res: Response) => {
  const { name, email, password, language } = req.body;

  // Validate required fields
  if (!name || !email || !password) {
    res.status(400).json({ error: "Name, email, and password are required" });
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "Invalid email format" });
    return;
  }

  // Validate password minimum length
  if (password.length < 8) {
    res.status(400).json({ error: "Password must be at least 8 characters" });
    return;
  }

  // Check for duplicate email
  const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (existing) {
    res.status(409).json({ error: "An account with this email already exists" });
    return;
  }

  // Hash password and create user
  const passwordHash = await bcrypt.hash(password, 10);

  const result = db
    .prepare(
      "INSERT INTO users (name, email, password_hash, language) VALUES (?, ?, ?, ?)"
    )
    .run(name, email, passwordHash, language || "en");

  const userId = result.lastInsertRowid as number;
  const token = createToken(userId);

  const user = db
    .prepare("SELECT id, name, email, language, created_at FROM users WHERE id = ?")
    .get(userId) as { id: number; name: string; email: string; language: string; created_at: string };

  res.status(201).json({ token, user });
});

// ── POST /login ─────────────────────────────────────────────────────────────
router.post("/login", async (req: AuthRequest, res: Response) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    res.status(400).json({ error: "Email and password are required" });
    return;
  }

  // Find user — explicit column list instead of SELECT *
  const user = db
    .prepare("SELECT id, name, email, password_hash, language, created_at FROM users WHERE email = ?")
    .get(email) as
    | { id: number; name: string; email: string; password_hash: string; language: string; created_at: string }
    | undefined;

  if (!user) {
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }

  // Verify password — async bcrypt
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }

  const token = createToken(user.id);

  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      language: user.language,
      created_at: user.created_at,
    },
  });
});

// ── GET /me ─────────────────────────────────────────────────────────────────
router.get("/me", authMiddleware, (req: AuthRequest, res: Response) => {
  const user = db
    .prepare("SELECT id, name, email, language, created_at FROM users WHERE id = ?")
    .get(req.userId!) as
    | { id: number; name: string; email: string; language: string; created_at: string }
    | undefined;

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.json({ user });
});

export default router;
