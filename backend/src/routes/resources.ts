import fs from "fs";
import path from "path";
import { Router, Response } from "express";
import { AuthRequest, authMiddleware } from "../middleware/auth";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// ── Resource interface ───────────────────────────────────────────────────────
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

// ── Load resources from JSON file ─────────────────────────────────────────────
const VALID_LANG_RE = /^[a-z]{2,3}(-[A-Z]{2})?$/;

function loadResources(language = "en"): Resource[] {
  const safeLang = VALID_LANG_RE.test(language) ? language : "en";
  const dataDir = path.join(__dirname, "..", "..", "data");
  const langFile = path.join(dataDir, `resources.${safeLang}.json`);
  const enFile = path.join(dataDir, "resources.en.json");
  try {
    if (safeLang !== "en" && !fs.existsSync(langFile)) {
      return JSON.parse(fs.readFileSync(enFile, "utf-8")) as Resource[];
    }
    const file = fs.existsSync(langFile) ? langFile : enFile;
    return JSON.parse(fs.readFileSync(file, "utf-8")) as Resource[];
  } catch {
    return [];
  }
}


// ── GET / — All resources grouped by category ────────────────────────────────
router.get("/", (req: AuthRequest, res: Response) => {
  const resources = loadResources((req as any).language ?? "en");
  const grouped: Record<string, Resource[]> = {};

  for (const resource of resources) {
    if (!grouped[resource.category]) {
      grouped[resource.category] = [];
    }
    grouped[resource.category].push(resource);
  }

  res.json({ resources: grouped });
});

// ── GET /category/:name — Resources filtered by category ────────────────────
router.get("/category/:name", (req: AuthRequest, res: Response) => {
  const resources = loadResources((req as any).language ?? "en");
  const filtered = resources.filter(
    (r) => r.category.toLowerCase() === (req.params.name as string).toLowerCase()
  );
  res.json({ category: req.params.name, resources: filtered });
});

// ── GET /:id — Single resource by ID ─────────────────────────────────────────
router.get("/:id", (req: AuthRequest, res: Response) => {
  const resources = loadResources((req as any).language ?? "en");
  const resource = resources.find((r) => r.id === req.params.id);

  if (!resource) {
    res.status(404).json({ error: "Resource not found" });
    return;
  }

  res.json({ resource });
});

export default router;
