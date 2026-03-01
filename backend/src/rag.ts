import fs from "fs";
import path from "path";

// ── Types ────────────────────────────────────────────────────────────────────
export interface MdChunk {
  file: string;
  heading: string;
  content: string; // capped at 2000 chars
  keywords: string[];
}

// ── Module state ─────────────────────────────────────────────────────────────
let chunks: MdChunk[] = [];

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
export function loadMaterialFiles(): void {
  const materialsDir = path.join(__dirname, "..", "..", "materials");

  if (!fs.existsSync(materialsDir)) {
    console.warn(`Materials directory not found at ${materialsDir} — RAG will have no knowledge base.`);
    return;
  }

  const files = fs.readdirSync(materialsDir).filter((f) => f.endsWith(".md"));

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
      const keywords = extractKeywords(heading + " " + cappedContent);

      chunks.push({
        file,
        heading,
        content: cappedContent,
        keywords,
      });
    }
  }

  console.log(`RAG: Loaded ${chunks.length} chunks from ${files.length} files`);
}

// ── searchKnowledge ──────────────────────────────────────────────────────────
export function searchKnowledge(query: string, topK: number = 5): MdChunk[] {
  const queryKeywords = extractKeywords(query);

  if (queryKeywords.length === 0 || chunks.length === 0) {
    return chunks.slice(0, topK);
  }

  const scored = chunks.map((chunk) => {
    let score = 0;

    for (const qk of queryKeywords) {
      for (const ck of chunk.keywords) {
        if (ck === qk) {
          score += 3; // exact match
        } else if (ck.includes(qk) || qk.includes(ck)) {
          score += 1; // partial match
        }
      }
    }

    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, topK).map((s) => s.chunk);
}
