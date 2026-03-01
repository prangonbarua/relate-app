/**
 * Pre-translation script: translates all static app content into all 13
 * non-English languages using the free Google Translate API.
 *
 * Run with: npm exec tsx scripts/translate-content.ts
 *
 * Output:
 *   backend/data/skills.{lang}.json
 *   backend/data/resources.{lang}.json
 *   materials/locales/{lang}/{filename}.md
 *   i18n/locales/{lang}.json  (new keys appended)
 */

import fs from "fs";
import path from "path";

// ── Config ───────────────────────────────────────────────────────────────────

const ROOT = path.join(__dirname, "..");
const BACKEND_DATA = path.join(ROOT, "backend/data");
const MATERIALS_EN = path.join(ROOT, "materials");
const MATERIALS_LOCALES = path.join(ROOT, "materials/locales");
const I18N_LOCALES = path.join(ROOT, "i18n/locales");

// All 13 non-English language codes
const LANGUAGES = ["es","fr","pt","ar","zh","tl","vi","ko","hi","ht","so","ru","bn"] as const;
type Lang = (typeof LANGUAGES)[number];

// Delay between API calls to avoid rate limiting (ms)
const DELAY_MS = 2000;

// ── Helpers ──────────────────────────────────────────────────────────────────

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Translate text using the public Google Translate gtx endpoint.
 * This endpoint doesn't require an API key and has more lenient rate limits
 * than the client=at Android endpoint.
 */
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
  // Response format: [[["translated","original",...],...],...]
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
  return text; // unreachable but satisfies TS
}

/** Translate an array of strings in one batched call (joined by separator). */
async function translateBatch(items: string[], to: string): Promise<string[]> {
  if (items.length === 0) return [];
  const SEP = "\n|||SEP|||\n";
  const joined = items.join(SEP);
  const translated = await gt(joined, to);
  const parts = translated.split(/\s*\|{2,3}\s*SEP\s*\|{2,3}\s*/i);
  // Pad or trim in case count drifts
  while (parts.length < items.length) parts.push(items[parts.length]);
  return parts.slice(0, items.length).map((s) => s.trim());
}

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

// ── NEW UI STRINGS ────────────────────────────────────────────────────────────
// These are the ~60 hardcoded strings that need to be added to locale files.

const NEW_EN_KEYS: Record<string, string> = {
  "community.categories.all": "All",
  "community.categories.general": "General",
  "community.categories.questions": "Questions",
  "community.categories.tips": "Tips",
  "community.categories.wins": "Wins",
  "community.categories.vent": "Vent",
  "community.new_post": "New Post",
  "community.post_button": "Post",
  "community.category_label": "Category",
  "community.title_label": "Title",
  "community.body_placeholder": "What's on your mind?",
  "community.no_posts": "No posts yet",
  "community.be_first": "Be the first to share something with the community.",
  "community.time.just_now": "just now",
  "community.time.minutes_ago": "{{count}}m ago",
  "community.time.hours_ago": "{{count}}h ago",
  "community.time.days_ago": "{{count}}d ago",
  "community.time.weeks_ago": "{{count}}w ago",
  "assistant.title": "AI Assistant",
  "assistant.subtitle": "Ask questions about autism, therapy, and your rights",
  "assistant.how_can_i_help": "How can I help?",
  "assistant.intro": "I can answer questions about autism, therapies, school rights, and more.",
  "assistant.placeholder": "Type a message...",
  "assistant.thinking": "Thinking...",
  "assistant.error": "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
  "assistant.source": "Source",
  "assistant.prompt_1": "What are early signs of autism?",
  "assistant.prompt_2": "How do I request an IEP?",
  "assistant.prompt_3": "ABA therapy explained",
  "settings.title": "Settings",
  "settings.child_profile": "Child Profile",
  "settings.loves": "Loves",
  "settings.triggers": "Triggers",
  "settings.edit_profile": "Edit Profile",
  "settings.setup_profile": "Set Up Child Profile",
  "settings.section_app": "App",
  "settings.language": "Language",
  "settings.change": "Change",
  "settings.clear_chat": "Clear Chat History",
  "settings.section_account": "Account",
  "settings.logout": "Log Out",
  "settings.version": "Relate v1.0",
  "settings.logout_alert_title": "Log Out",
  "settings.logout_alert_message": "This will reset the app and return to onboarding.",
  "settings.logout_confirm": "Log Out",
  "settings.clear_chat_alert_title": "Clear Chat History",
  "settings.clear_chat_alert_message": "This will delete all your AI assistant conversations.",
  "settings.clear_chat_confirm": "Clear",
  "settings.clear_chat_done_title": "Done",
  "settings.clear_chat_done_message": "Chat history will be cleared on next restart.",
  "home.quick_actions.resources": "Resources",
  "home.quick_actions.community": "Community",
  "home.quick_actions.ask_ai": "Ask AI",
  "navigator.no_resources": "No resources available yet",
  "navigator.disclaimer": "This is general information only. Laws vary by state. For specific advice, consult a special education advocate or attorney.",
  // skills screen
  "skills.title": "Teach Skills",
  "skills.skill_count": "{{count}} skills",
  "skills.skill_count_one": "{{count}} skill",
  // post detail
  "post.title": "Post",
  "post.loading": "Loading post...",
  "post.not_found": "Post not found",
  "post.not_found_detail": "This post may have been removed or is temporarily unavailable.",
  "post.comments": "Comments",
  "post.no_comments": "No comments yet. Start the conversation!",
  "post.comment_placeholder": "Write a comment...",
  "post.comment_count": "{{count}} comments",
  "post.comment_count_one": "{{count}} comment",
  "post.delete_title": "Delete Post",
  "post.delete_message": "Are you sure you want to delete this post? This cannot be undone.",
  "post.delete_comment_title": "Delete Comment",
  "post.delete_comment_message": "Are you sure you want to delete this comment?",
  // shared action labels
  "common.edit": "Edit",
  "common.delete": "Delete",
  "common.go_back": "Go Back",
  "common.categories": "Categories",
  "common.sources": "Sources",
  // resource detail
  "resource.loading": "Loading resource...",
  "resource.not_found": "Resource not found",
  "resource.summary": "Summary",
  "resource.details": "Details",
  "resource.steps": "Steps",
  "resource.count": "{{count}} resources",
  "resource.count_one": "{{count}} resource",
  "resource.no_resources": "No resources available yet",
  "resource.loading_resources": "Loading resources...",
  // skill detail
  "skill.loading": "Loading skill...",
  "skill.not_found": "Skill not found",
  "skill.why_it_matters": "Why It Matters",
  "skill.steps_to_practice": "Steps to Practice",
  "skill.ages": "Ages {{range}}",
  "skill.no_skills": "No skills available yet",
  "skill.loading_skills": "Loading skills...",
  // home screen
  "home.todays_skill": "Today's Skill",
};

// ── TRANSLATE UI STRINGS ─────────────────────────────────────────────────────

function setNestedKey(obj: any, dotKey: string, value: string): void {
  const parts = dotKey.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]] || typeof cur[parts[i]] !== "object") {
      cur[parts[i]] = {};
    }
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
}

async function translateUIStrings() {
  console.log("\n📝 Translating UI strings...");

  const enKeys = Object.keys(NEW_EN_KEYS);
  const enValues = Object.values(NEW_EN_KEYS);

  // First, write English keys to en.json
  const enPath = path.join(I18N_LOCALES, "en.json");
  const enExisting = JSON.parse(fs.readFileSync(enPath, "utf-8"));
  for (let i = 0; i < enKeys.length; i++) {
    setNestedKey(enExisting, enKeys[i], enValues[i]);
  }
  fs.writeFileSync(enPath, JSON.stringify(enExisting, null, 2) + "\n");
  console.log("  ✓ en.json updated");

  // Helper to read nested key
  function getNestedKey(obj: any, dotKey: string): string | undefined {
    const parts = dotKey.split(".");
    let cur = obj;
    for (const p of parts) {
      if (!cur || typeof cur !== "object") return undefined;
      cur = cur[p];
    }
    return typeof cur === "string" ? cur : undefined;
  }

  // Translate into all other languages
  for (const lang of LANGUAGES) {
    const localePath = path.join(I18N_LOCALES, `${lang}.json`);

    let existing: any = {};
    if (fs.existsSync(localePath)) {
      existing = JSON.parse(fs.readFileSync(localePath, "utf-8"));
    }

    // Check if all new keys already exist in this locale
    const missingKeys = enKeys.filter((k) => getNestedKey(existing, k) === undefined);
    if (missingKeys.length === 0) {
      console.log(`  ${lang}... already complete, skipping`);
      continue;
    }

    console.log(`  ${lang}... (${missingKeys.length} keys to translate)`);

    // Translate only missing values in batches of 20
    const missingValues = missingKeys.map((k) => NEW_EN_KEYS[k]);
    const BATCH = 20;
    const translated: string[] = [];
    for (let i = 0; i < missingValues.length; i += BATCH) {
      const batch = missingValues.slice(i, i + BATCH);
      const results = await translateBatch(batch, lang);
      translated.push(...results);
    }

    // Write translated keys, preserving interpolation variables
    for (let i = 0; i < missingKeys.length; i++) {
      let val = translated[i];
      const enVal = missingValues[i];
      // Preserve {{interpolation}} variables from the English original
      const vars = enVal.match(/\{\{[^}]+\}\}/g) || [];
      for (const v of vars) {
        if (!val.includes(v)) {
          val = val.replace(/\s*$/, " " + v);
        }
      }
      setNestedKey(existing, missingKeys[i], val.trim());
    }

    fs.writeFileSync(localePath, JSON.stringify(existing, null, 2) + "\n");
    console.log(`  ✓ ${lang}.json`);
  }

  console.log("  ✓ UI strings done");
}

// ── TRANSLATE SKILLS ─────────────────────────────────────────────────────────

interface Skill {
  id: string;
  skill: string;
  whyItMatters: string;
  steps: string[];
  category: string;
  ageRange: string;
  sources: string[];
}

async function translateSkills() {
  console.log("\n🎓 Translating skills...");
  ensureDir(BACKEND_DATA);

  const skills: Skill[] = JSON.parse(
    fs.readFileSync(path.join(BACKEND_DATA, "skills.en.json"), "utf-8")
  );

  for (const lang of LANGUAGES) {
    const outFile = path.join(BACKEND_DATA, `skills.${lang}.json`);
    const partialFile = path.join(BACKEND_DATA, `skills.${lang}.partial.json`);

    if (fs.existsSync(outFile)) {
      console.log(`  ${lang} already exists, skipping`);
      continue;
    }

    // Resume from partial file if exists
    let translated: Skill[] = [];
    let startIdx = 0;
    if (fs.existsSync(partialFile)) {
      translated = JSON.parse(fs.readFileSync(partialFile, "utf-8"));
      startIdx = translated.length;
      console.log(`  ${lang}: resuming from skill ${startIdx + 1}/${skills.length}...`);
    } else {
      console.log(`  Translating ${skills.length} skills → ${lang}...`);
    }

    for (let i = startIdx; i < skills.length; i++) {
      const s = skills[i];
      process.stdout.write(`    [${i + 1}/${skills.length}] ${s.id}\r`);

      // Batch: skill name + whyItMatters + all steps + category
      const texts = [s.skill, s.whyItMatters, ...s.steps, s.category];
      const results = await translateBatch(texts, lang);

      translated.push({
        ...s,
        skill: results[0],
        whyItMatters: results[1],
        steps: results.slice(2, 2 + s.steps.length),
        category: results[2 + s.steps.length],
        // Keep id, ageRange, sources in English
      });

      // Save partial progress every 5 skills
      if ((i + 1) % 5 === 0) {
        fs.writeFileSync(partialFile, JSON.stringify(translated, null, 2) + "\n");
      }
    }

    fs.writeFileSync(outFile, JSON.stringify(translated, null, 2) + "\n");
    // Clean up partial file
    if (fs.existsSync(partialFile)) fs.unlinkSync(partialFile);
    console.log(`\n  ✓ skills.${lang}.json`);
  }
}

// ── TRANSLATE RESOURCES ──────────────────────────────────────────────────────

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

async function translateResources() {
  console.log("\n📚 Translating resources...");
  ensureDir(BACKEND_DATA);

  const resources: Resource[] = JSON.parse(
    fs.readFileSync(path.join(BACKEND_DATA, "resources.en.json"), "utf-8")
  );

  for (const lang of LANGUAGES) {
    const outFile = path.join(BACKEND_DATA, `resources.${lang}.json`);
    const partialFile = path.join(BACKEND_DATA, `resources.${lang}.partial.json`);

    if (fs.existsSync(outFile)) {
      console.log(`  ${lang} already exists, skipping`);
      continue;
    }

    // Resume from partial file if exists
    let translated: Resource[] = [];
    let startIdx = 0;
    if (fs.existsSync(partialFile)) {
      translated = JSON.parse(fs.readFileSync(partialFile, "utf-8"));
      startIdx = translated.length;
      console.log(`  ${lang}: resuming from resource ${startIdx + 1}/${resources.length}...`);
    } else {
      console.log(`  Translating ${resources.length} resources → ${lang}...`);
    }

    for (let i = startIdx; i < resources.length; i++) {
      const r = resources[i];
      process.stdout.write(`    [${i + 1}/${resources.length}] ${r.id}\r`);

      const texts = [r.category, r.title, r.summary, r.details, ...r.steps];
      const results = await translateBatch(texts, lang);

      translated.push({
        ...r,
        category: results[0],
        title: results[1],
        summary: results[2],
        details: results[3],
        steps: results.slice(4),
        // Keep id, icon, sources in English
      });

      // Save partial progress every 5 resources
      if ((i + 1) % 5 === 0) {
        fs.writeFileSync(partialFile, JSON.stringify(translated, null, 2) + "\n");
      }
    }

    fs.writeFileSync(outFile, JSON.stringify(translated, null, 2) + "\n");
    // Clean up partial file
    if (fs.existsSync(partialFile)) fs.unlinkSync(partialFile);
    console.log(`\n  ✓ resources.${lang}.json`);
  }
}

// ── TRANSLATE MATERIALS ──────────────────────────────────────────────────────

async function translateMaterials() {
  console.log("\n📄 Translating materials...");

  const mdFiles = fs.readdirSync(MATERIALS_EN).filter((f) => f.endsWith(".md"));

  for (const lang of LANGUAGES) {
    const langDir = path.join(MATERIALS_LOCALES, lang);
    ensureDir(langDir);

    for (const file of mdFiles) {
      const outFile = path.join(langDir, file);
      if (fs.existsSync(outFile)) {
        process.stdout.write(`  ${lang}/${file} exists, skipping\n`);
        continue;
      }

      console.log(`  Translating ${file} → ${lang}...`);
      const content = fs.readFileSync(path.join(MATERIALS_EN, file), "utf-8");

      // Split by paragraph/section to stay within API limits
      const chunks = content
        .split(/\n\n+/)
        .filter((c) => c.trim().length > 0);

      const translatedChunks: string[] = [];
      // Process in batches of 8 paragraphs at a time
      const BATCH = 8;
      for (let i = 0; i < chunks.length; i += BATCH) {
        const batch = chunks.slice(i, i + BATCH);
        const results = await translateBatch(batch, lang);
        translatedChunks.push(...results);
        process.stdout.write(`    ${Math.min(i + BATCH, chunks.length)}/${chunks.length} paragraphs\r`);
      }

      fs.writeFileSync(outFile, translatedChunks.join("\n\n") + "\n");
      console.log(`\n  ✓ ${lang}/${file}`);
    }
  }
}

// ── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🌍 Relate — Full content translation");
  console.log("=====================================");
  console.log(`Languages: ${LANGUAGES.join(", ")}`);

  try {
    await translateUIStrings();
    await translateSkills();
    await translateResources();
    await translateMaterials();
    console.log("\n✅ All done!");
  } catch (err) {
    console.error("\n❌ Error:", err);
    process.exit(1);
  }
}

main();
