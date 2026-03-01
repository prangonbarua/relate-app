import express from "express";
import cors from "cors";
import cardsRouter from "./routes/cards";
import profileRouter from "./routes/profile";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "relate-backend", timestamp: new Date().toISOString() });
});

// Routes
app.use("/api/cards", cardsRouter);
app.use("/api/profile", profileRouter);

app.listen(PORT, () => {
  console.log(`🚀 Relate backend running on http://localhost:${PORT}`);
  console.log(`   GET  /health`);
  console.log(`   GET  /api/cards/today?track=newly-diagnosed`);
  console.log(`   POST /api/cards/generate`);
  console.log(`   POST /api/profile`);
  console.log(`   GET  /api/profile/:id`);
});

export default app;
