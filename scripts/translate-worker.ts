/**
 * Worker script: translates a specific content type for specific languages.
 * Usage: npx tsx scripts/translate-worker.ts <type> <lang1,lang2,...>
 *   type: "skills" | "resources" | "materials"
 */

import fs from "fs";
import path from "path";

const ROOT = path.join(__dirname, "..");
const BACKEND_DATA = path.join(ROOT, "backend/data");
const MATERIALS_EN = path.join(ROOT, "materials");
const MATERIALS_LOCALES = path.join(ROOT, "materials/locales");

const DELAY_MS = 2000;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function gtxTranslate(text: string, to: string): Promise<string> {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(to)}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }
  const data = (await res.json()) as any[][];
  const translated = data[0]
    .filter((s: any[]) => s && s[0])
    .map((s: any[]) => s[0])
    .join("");
  return translated;
}

async function gt(text: string, to: string): Promise<string> {
  if (!text.trim()) return text;
  let attempts = 0;
  while (attempts < 5) {
    try {
      await sleep(DELAY_MS);
      return await gtxTranslate(text, to);
    } catch (err: any) {
      attempts++;
      if (attempts >= 5) throw err;
      const waitMs = 10000 * attempts;
      console.warn(`  Retry ${attempts} for lang=${to}, waiting ${waitMs / 1000}s...`);
      await sleep(waitMs);
    }
  }
  return text;
}

async function translateBatch(items: string[], to: string): Promise<string[]> {
  if (items.length === 0) return [];
  const SEP = "\n|||SEP|||\n";
  const joined = items.join(SEP);
  const translated = await gt(joined, to);
  const parts = translated.split(/\s*\|{2,3}\s*SEP\s*\|{2,3}\s*/i);
  while (parts.length < items.length) parts.push(items[parts.length]);
  return parts.slice(0, items.length).map((s) => s.trim());
}

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

// ── Skills ──────────────────────────────────────────────────────────────────

interface Skill {
  id: string;
  skill: string;
  whyItMatters: string;
  steps: string[];
  category: string;
  ageRange: string;
  sources: string[];
}

async function translateSkills(langs: string[]) {
  const skills: Skill[] = JSON.parse(
    fs.readFileSync(path.join(BACKEND_DATA, "skills.en.json"), "utf-8")
  );

  for (const lang of langs) {
    const outFile = path.join(BACKEND_DATA, `skills.${lang}.json`);
    const partialFile = path.join(BACKEND_DATA, `skills.${lang}.partial.json`);

    if (fs.existsSync(outFile)) {
      console.log(`[skills] ${lang} exists, skipping`);
      continue;
    }

    let translated: Skill[] = [];
    let startIdx = 0;
    if (fs.existsSync(partialFile)) {
      translated = JSON.parse(fs.readFileSync(partialFile, "utf-8"));
      startIdx = translated.length;
      console.log(`[skills] ${lang}: resuming from ${startIdx + 1}/${skills.length}`);
    } else {
      console.log(`[skills] Translating ${skills.length} skills → ${lang}`);
    }

    for (let i = startIdx; i < skills.length; i++) {
      const s = skills[i];
      process.stdout.write(`  [skills/${lang}] ${i + 1}/${skills.length} ${s.id}\n`);

      const texts = [s.skill, s.whyItMatters, ...s.steps, s.category];
      const results = await translateBatch(texts, lang);

      translated.push({
        ...s,
        skill: results[0],
        whyItMatters: results[1],
        steps: results.slice(2, 2 + s.steps.length),
        category: results[2 + s.steps.length],
      });

      if ((i + 1) % 5 === 0) {
        fs.writeFileSync(partialFile, JSON.stringify(translated, null, 2) + "\n");
      }
    }

    fs.writeFileSync(outFile, JSON.stringify(translated, null, 2) + "\n");
    if (fs.existsSync(partialFile)) fs.unlinkSync(partialFile);
    console.log(`[skills] ✓ skills.${lang}.json`);
  }
}

// ── Resources ───────────────────────────────────────────────────────────────

interface Resource {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string;
  steps: string[];
  icon: string;
  sources: string[];
}

async function translateResources(langs: string[]) {
  const resources: Resource[] = JSON.parse(
    fs.readFileSync(path.join(BACKEND_DATA, "resources.en.json"), "utf-8")
  );

  for (const lang of langs) {
    const outFile = path.join(BACKEND_DATA, `resources.${lang}.json`);
    const partialFile = path.join(BACKEND_DATA, `resources.${lang}.partial.json`);

    if (fs.existsSync(outFile)) {
      console.log(`[resources] ${lang} exists, skipping`);
      continue;
    }

    let translated: Resource[] = [];
    let startIdx = 0;
    if (fs.existsSync(partialFile)) {
      translated = JSON.parse(fs.readFileSync(partialFile, "utf-8"));
      startIdx = translated.length;
      console.log(`[resources] ${lang}: resuming from ${startIdx + 1}/${resources.length}`);
    } else {
      console.log(`[resources] Translating ${resources.length} resources → ${lang}`);
    }

    for (let i = startIdx; i < resources.length; i++) {
      const r = resources[i];
      process.stdout.write(`  [resources/${lang}] ${i + 1}/${resources.length} ${r.id}\n`);

      const texts = [r.category, r.title, r.summary, r.details, ...r.steps];
      const results = await translateBatch(texts, lang);

      translated.push({
        ...r,
        category: results[0],
        title: results[1],
        summary: results[2],
        details: results[3],
        steps: results.slice(4),
      });

      if ((i + 1) % 5 === 0) {
        fs.writeFileSync(partialFile, JSON.stringify(translated, null, 2) + "\n");
      }
    }

    fs.writeFileSync(outFile, JSON.stringify(translated, null, 2) + "\n");
    if (fs.existsSync(partialFile)) fs.unlinkSync(partialFile);
    console.log(`[resources] ✓ resources.${lang}.json`);
  }
}

// ── Materials ───────────────────────────────────────────────────────────────

async function translateMaterials(langs: string[]) {
  const mdFiles = fs.readdirSync(MATERIALS_EN).filter((f) => f.endsWith(".md"));

  for (const lang of langs) {
    const langDir = path.join(MATERIALS_LOCALES, lang);
    ensureDir(langDir);

    for (const file of mdFiles) {
      const outFile = path.join(langDir, file);
      if (fs.existsSync(outFile)) {
        console.log(`[materials] ${lang}/${file} exists, skipping`);
        continue;
      }

      console.log(`[materials] Translating ${file} → ${lang}`);
      const content = fs.readFileSync(path.join(MATERIALS_EN, file), "utf-8");

      const chunks = content.split(/\n\n+/).filter((c) => c.trim().length > 0);
      const translatedChunks: string[] = [];
      const BATCH = 8;
      for (let i = 0; i < chunks.length; i += BATCH) {
        const batch = chunks.slice(i, i + BATCH);
        const results = await translateBatch(batch, lang);
        translatedChunks.push(...results);
        console.log(`  [materials/${lang}/${file}] ${Math.min(i + BATCH, chunks.length)}/${chunks.length} paragraphs`);
      }

      fs.writeFileSync(outFile, translatedChunks.join("\n\n") + "\n");
      console.log(`[materials] ✓ ${lang}/${file}`);
    }
  }
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const [type, langsArg] = process.argv.slice(2);
  if (!type || !langsArg) {
    console.error("Usage: npx tsx scripts/translate-worker.ts <skills|resources|materials> <lang1,lang2,...>");
    process.exit(1);
  }

  const langs = langsArg.split(",");
  console.log(`Worker: ${type} for [${langs.join(", ")}]`);

  switch (type) {
    case "skills":
      await translateSkills(langs);
      break;
    case "resources":
      await translateResources(langs);
      break;
    case "materials":
      await translateMaterials(langs);
      break;
    default:
      console.error(`Unknown type: ${type}`);
      process.exit(1);
  }

  console.log(`\n✅ Worker done: ${type} for [${langs.join(", ")}]`);
}

main().catch((err) => {
  console.error("❌ Worker error:", err);
  process.exit(1);
});
