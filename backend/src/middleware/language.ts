import { Request, Response, NextFunction } from "express";

const VALID_LANG = /^[a-z]{2,3}$/;
const SUPPORTED = new Set(["en","es","fr","pt","ar","zh","tl","vi","ko","hi","ht","so","ru","bn"]);

/**
 * Reads Accept-Language header and attaches req.language.
 * Falls back to "en" if missing or unsupported.
 */
export function languageMiddleware(req: Request, _res: Response, next: NextFunction): void {
  const header = req.headers["accept-language"] ?? "";
  const primary = header.split(",")[0]?.split("-")[0]?.trim().toLowerCase() ?? "";
  (req as any).language = VALID_LANG.test(primary) && SUPPORTED.has(primary) ? primary : "en";
  next();
}
