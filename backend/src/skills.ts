import fs from "fs";
import path from "path";

// ── Types ────────────────────────────────────────────────────────────────────
export interface Skill {
  id: string;
  skill: string;
  whyItMatters: string;
  steps: string[];
  category: string;
  ageRange: string;
  sources: string[];
}

// ── Module state ─────────────────────────────────────────────────────────────
let skills: Skill[] = [];

// ── loadSkills ───────────────────────────────────────────────────────────────
export function loadSkills(language = "en"): void {
  const dataDir = path.join(__dirname, "..", "data");
  const langFile = path.join(dataDir, `skills.${language}.json`);
  const enFile = path.join(dataDir, "skills.en.json");

  try {
    const file = fs.existsSync(langFile) ? langFile : enFile;
    skills = JSON.parse(fs.readFileSync(file, "utf-8")) as Skill[];
  } catch (err) {
    console.error("Failed to load skills:", err);
    skills = [];
  }

  console.log(`Skills: Loaded ${skills.length} skills across ${getCategories().length} categories`);
}

// ── getCategories ────────────────────────────────────────────────────────────
export function getCategories(): string[] {
  const cats = new Set(skills.map((s) => s.category));
  return [...cats];
}

// ── getSkillsByCategory ──────────────────────────────────────────────────────
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter(
    (s) => s.category.toLowerCase() === category.toLowerCase()
  );
}

// ── getAllSkills ──────────────────────────────────────────────────────────────
export function getAllSkills(): Skill[] {
  return skills;
}

// ── getWeeklyCards — 3 deterministic skills per week + userId ─────────────────
export function getWeeklyCards(userId: number): (Skill & { date: string })[] {
  const now = new Date();
  // Week number: days since epoch / 7, floored
  const weekNum = Math.floor(now.getTime() / (7 * 86400000));
  const today = now.toISOString().slice(0, 10);

  // Deterministic seed from week + userId
  let seed = userId + weekNum * 997;
  function nextRand(): number {
    seed = (seed * 16807 + 0) % 2147483647;
    return seed;
  }

  // Pick 3 unique skills for this week
  const indices = new Set<number>();
  while (indices.size < Math.min(3, skills.length)) {
    indices.add(nextRand() % skills.length);
  }

  return [...indices].map((idx) => ({
    ...skills[idx],
    date: today,
  }));
}

// ── getDailyCard — picks one of the weekly cards by day of week ──────────────
export function getDailyCard(userId: number): Skill & { date: string } {
  const cards = getWeeklyCards(userId);
  const dayOfWeek = new Date().getDay(); // 0-6
  return cards[dayOfWeek % cards.length];
}
