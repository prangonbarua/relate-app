import fs from "fs";
import path from "path";

// ── Types ────────────────────────────────────────────────────────────────────
export interface MdChunk {
  file: string;
  heading: string;
  content: string; // capped at 2000 chars
  keywords: string[];
  headingKeywords: string[]; // keywords from heading only, for relevance gating
}

// ── Module state ─────────────────────────────────────────────────────────────
const chunksByLang = new Map<string, MdChunk[]>();

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "it", "as", "be", "was", "are",
  "been", "being", "have", "has", "had", "do", "does", "did", "will",
  "would", "could", "should", "may", "might", "shall", "can", "this",
  "that", "these", "those", "i", "you", "he", "she", "we", "they",
  "me", "him", "her", "us", "them", "my", "your", "his", "its", "our",
  "their", "what", "which", "who", "whom", "when", "where", "why", "how",
  "not", "no", "nor", "if", "then", "than", "so", "up", "out", "about",
  "into", "over", "after", "before", "between", "under", "again", "just",
  "also", "more", "most", "other", "some", "such", "only", "same", "too",
  "very", "each", "every", "all", "both", "few", "many", "much", "own",
]);

// ── extractKeywords ──────────────────────────────────────────────────────────
export function extractKeywords(text: string): string[] {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));

  return [...new Set(words)];
}

// ── loadMaterialFiles ────────────────────────────────────────────────────────
export function loadMaterialFiles(language: string = "en"): void {
  const baseDir = path.join(__dirname, "..", "..", "materials");
  const materialsDir = language === "en"
    ? baseDir
    : path.join(baseDir, "locales", language);

  if (!fs.existsSync(materialsDir)) {
    if (language === "en") {
      console.warn(`Materials directory not found at ${materialsDir} — RAG will have no knowledge base.`);
    }
    return;
  }

  const files = fs.readdirSync(materialsDir).filter((f) => f.endsWith(".md"));
  const chunks: MdChunk[] = [];

  for (const file of files) {
    const filePath = path.join(materialsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    // Split by ## headings
    const sections = content.split(/^## /gm);

    for (const section of sections) {
      const trimmed = section.trim();
      if (!trimmed) continue;

      // First line is the heading (or fallback to filename)
      const newlineIdx = trimmed.indexOf("\n");
      const heading = newlineIdx > -1 ? trimmed.slice(0, newlineIdx).trim() : trimmed.slice(0, 80).trim();
      const body = newlineIdx > -1 ? trimmed.slice(newlineIdx + 1).trim() : "";

      if (!body) continue;

      const cappedContent = body.length > 2000 ? body.slice(0, 2000) : body;

      chunks.push({
        file,
        heading,
        content: cappedContent,
        keywords: extractKeywords(heading + " " + cappedContent),
        headingKeywords: extractKeywords(heading),
      });
    }
  }

  chunksByLang.set(language, chunks);
  console.log(`RAG: Loaded ${chunks.length} chunks from ${files.length} files for language "${language}"`);
}

// ── getChunks ───────────────────────────────────────────────────────────────
function getChunks(language: string): MdChunk[] {
  if (!chunksByLang.has(language)) {
    loadMaterialFiles(language);
  }
  return chunksByLang.get(language) ?? chunksByLang.get("en") ?? [];
}

// ── searchKnowledge ──────────────────────────────────────────────────────────
export function searchKnowledge(query: string, topK: number = 5, language: string = "en"): MdChunk[] {
  const queryKeywords = extractKeywords(query);
  const chunks = getChunks(language);

  if (queryKeywords.length === 0 || chunks.length === 0) {
    return [];
  }

  const scored = chunks.map((chunk) => {
    let totalScore = 0;
    let headingScore = 0;

    for (const qk of queryKeywords) {
      // Score against all keywords (heading + body)
      for (const ck of chunk.keywords) {
        if (ck === qk) {
          totalScore += 3;
        } else if (ck.includes(qk) || qk.includes(ck)) {
          totalScore += 1;
        }
      }
      // Score against heading keywords only
      for (const hk of chunk.headingKeywords) {
        if (hk === qk) {
          headingScore += 3;
        } else if (hk.includes(qk) || qk.includes(hk)) {
          headingScore += 1;
        }
      }
    }

    return { chunk, totalScore, headingScore };
  });

  scored.sort((a, b) => b.totalScore - a.totalScore);

  // A chunk qualifies only if its heading is relevant (headingScore >= 3) AND
  // the full content also scores well (totalScore >= 9). This prevents a
  // single generic word in a heading (e.g. "need") from matching an
  // unrelated document.
  return scored
    .filter((s) => s.headingScore >= 3 && s.totalScore >= 9)
    .slice(0, topK)
    .map((s) => s.chunk);
}
