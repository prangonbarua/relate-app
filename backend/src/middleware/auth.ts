import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "relate-hackathon-demo-2026";

/**
 * Extends Express Request with an optional userId property
 * set by the auth middleware after JWT verification.
 */
export interface AuthRequest extends Request {
  userId?: number;
}

/**
 * Express middleware that verifies a JWT from the Authorization header.
 * Expects: Authorization: Bearer <token>
 * Sets req.userId on success, returns 401 on failure.
 */
export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    res.status(401).json({ error: "Missing or invalid Authorization header" });
    return;
  }

  const token = header.slice(7); // strip "Bearer "

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: number };
    req.userId = payload.userId;
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

/**
 * Creates a signed JWT for the given user ID.
 * Token expires in 7 days.
 */
export function createToken(userId: number): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}
