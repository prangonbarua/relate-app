import fs from "fs";
import path from "path";

export interface Skill {
  id: string;
  skill: string;
  whyItMatters: string;
  steps: string[];
  category: string;
  ageRange: string;
  sources: string[];
}

const VALID_LANG = /^[a-z]{2,3}(-[A-Z]{2})?$/;
const DATA_DIR = path.join(__dirname, "..", "data");

const cache = new Map<string, Skill[]>();

export function getSkills(language = "en"): Skill[] {
  const lang = VALID_LANG.test(language) ? language : "en";
  if (cache.has(lang)) return cache.get(lang)!;

  const langFile = path.join(DATA_DIR, `skills.${lang}.json`);
  const enFile = path.join(DATA_DIR, "skills.en.json");

  try {
    const file = lang !== "en" && !fs.existsSync(langFile) ? enFile : (fs.existsSync(langFile) ? langFile : enFile);
    const skills = JSON.parse(fs.readFileSync(file, "utf-8")) as Skill[];
    cache.set(lang, skills);
    return skills;
  } catch (err) {
    console.error(`Failed to load skills for "${lang}":`, err);
    return [];
  }
}

export function getCategories(language = "en"): string[] {
  return [...new Set(getSkills(language).map((s) => s.category))];
}

export function getSkillsByCategory(category: string, language = "en"): Skill[] {
  return getSkills(language).filter((s) => s.category.toLowerCase() === category.toLowerCase());
}

export function getAllSkills(language = "en"): Skill[] {
  return getSkills(language);
}

export function getWeeklyCards(userId: number, language = "en"): (Skill & { date: string })[] {
  const skills = getSkills(language);
  const now = new Date();
  const weekNum = Math.floor(now.getTime() / (7 * 86400000));
  const today = now.toISOString().slice(0, 10);

  let seed = userId + weekNum * 997;
  function nextRand(): number {
    seed = (seed * 16807 + 0) % 2147483647;
    return seed;
  }

  const indices = new Set<number>();
  while (indices.size < Math.min(3, skills.length)) {
    indices.add(nextRand() % skills.length);
  }

  return [...indices].map((idx) => ({ ...skills[idx], date: today }));
}

export function getDailyCard(userId: number, language = "en"): Skill & { date: string } {
  const cards = getWeeklyCards(userId, language);
  const dayOfWeek = new Date().getDay();
  return cards[dayOfWeek % cards.length];
}

export function loadSkills(): void {
  const skills = getSkills("en");
  console.log(`Skills: Loaded ${skills.length} skills across ${getCategories().length} categories`);
}
