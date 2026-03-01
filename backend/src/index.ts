import "dotenv/config";
import express from "express";
import cors from "cors";

import { loadMaterialFiles } from "./rag";
import { loadSkills } from "./skills";
import { seedDatabase } from "./seed";

import authRouter from "./routes/auth";
import profileRouter from "./routes/profile";
import chatRouter from "./routes/chat";
import skillsRouter from "./routes/skills";
import communityRouter from "./routes/community";
import resourcesRouter from "./routes/resources";
import questionnaireRouter from "./routes/questionnaire";

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Startup initialization ───────────────────────────────────────────────────
loadMaterialFiles();
loadSkills();
seedDatabase();

// ── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/chat", chatRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/community", communityRouter);
app.use("/api/resources", resourcesRouter);
app.use("/api/questionnaire", questionnaireRouter);

// ── Health check ─────────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "relate-backend",
    timestamp: new Date().toISOString(),
  });
});

// ── Start server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Relate backend running on http://localhost:${PORT}`);
  console.log(`  GET  /api/health`);
  console.log(`  POST /api/auth/register`);
  console.log(`  POST /api/auth/login`);
  console.log(`  GET  /api/auth/me`);
  console.log(`  GET  /api/profile`);
  console.log(`  PUT  /api/profile`);
  console.log(`  GET  /api/profile/logs`);
  console.log(`  POST /api/profile/logs`);
  console.log(`  POST /api/chat`);
  console.log(`  POST /api/chat/translate`);
  console.log(`  GET  /api/chat/history`);
  console.log(`  GET  /api/skills`);
  console.log(`  GET  /api/skills/categories`);
  console.log(`  GET  /api/skills/category/:name`);
  console.log(`  GET  /api/skills/daily`);
  console.log(`  POST /api/skills/daily/log`);
  console.log(`  GET  /api/community/posts`);
  console.log(`  POST /api/community/posts`);
  console.log(`  GET  /api/community/posts/:id`);
  console.log(`  POST /api/community/posts/:id/comments`);
  console.log(`  POST /api/community/posts/:id/vote`);
  console.log(`  GET  /api/resources`);
  console.log(`  GET  /api/resources/category/:name`);
  console.log(`  GET  /api/resources/:id`);
  console.log(`  GET  /api/questionnaire`);
  console.log(`  POST /api/questionnaire/submit`);
});

export default app;
