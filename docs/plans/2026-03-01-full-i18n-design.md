# Full Internationalization Design
**Date:** 2026-03-01
**Status:** Approved

## Problem
14 languages are supported by the app's i18n infrastructure, but ~20% of UI strings are hardcoded in English and all dynamic content (skill cards, resources, research materials) is English-only. Selecting Russian (or any non-English language) leaves most of the app untranslated.

## Scope
- 57 skill cards (`backend/src/skills.ts`)
- ~15 resource articles (`backend/src/routes/resources.ts`)
- 11 research/RAG materials files (`materials/*.md`)
- ~60 hardcoded UI strings across 6 screens
- Language header propagation to all API calls

## Architecture: Script + Files (Option A)

### Translation Strategy
- **Pre-translate:** One-time script using `@vitalets/google-translate-api` (free, no key, all 14 languages)
- **Live fallback:** If a pre-translated file is missing or a key is absent, call Google Translate at runtime and cache result in memory for the session

### Output File Structure
```
backend/data/
  skills.en.json        ← master (extracted from skills.ts)
  skills.es.json        ← pre-translated
  skills.ru.json
  ... (one per language)
  resources.en.json
  resources.es.json
  ...

materials/
  locales/
    es/01-undocumented-family-resources.md
    es/02-autism-screening-tools.md
    ... (13 languages × 11 files)
    ru/...
    ar/...
    ...

i18n/locales/
  en.json  ← ~60 new keys added
  es.json  ← translated
  ru.json
  ... (all 14)
```

### Translation Script (`scripts/translate-content.ts`)
- Reads skills from `skills.ts` source
- Reads resources from `resources.ts` source
- Reads materials from `materials/*.md`
- Collects all new UI string keys
- Translates each item per language via Google Translate (batched)
- Writes output files
- Idempotent: safe to re-run when content is added

## Backend Changes

### Language Detection Middleware
- Reads `Accept-Language` header from every authenticated request
- Attaches `req.language` (defaults to `"en"`)

### Skills Route (`/api/skills`, `/api/skills/daily`)
- Load `backend/data/skills.{lang}.json` if exists
- Fall back to `skills.en.json`
- If specific skill missing: live-translate from English, cache in memory

### Resources Route (`/api/resources`)
- Same pattern: `resources.{lang}.json` → `resources.en.json` fallback → live translate

### RAG / Chat (`/api/chat`)
- `loadMaterialFiles()` now accepts a language param
- Loads from `materials/locales/{lang}/` if exists, else `materials/`
- Language passed from `req.language` (read from `Accept-Language`)
- Query translation for RAG (already implemented) stays

## Frontend Changes

### API Client (`store/apiClient.ts`)
- Single-line change: add `Accept-Language: {language}` header to every request
- Language read from `useUserStore()`

### Hardcoded Strings to Fix
| File | Strings |
|------|---------|
| `(tabs)/community.tsx` | Category labels, post modal, time formatting, empty state |
| `(tabs)/assistant.tsx` | Header, suggested prompts, placeholder, "Thinking…", error, "Source" |
| `app/settings.tsx` | All section labels, alert dialog text |
| `(tabs)/_layout.tsx` | "Assistant", "Materials" tab labels |
| `components/ui/modern-mobile-menu.tsx` | All 5 menu item labels |
| `(tabs)/index.tsx` | Quick action labels (Resources, Community, Ask AI, Today's Skill) |

All replaced with `t("key")`. Keys added to all 14 locale JSON files.

### Dynamic Text Resizing & Overflow Handling
Translations in some languages (e.g., Portuguese, Russian, German) run 30-50% longer than English.
- **Tab labels / nav items:** `numberOfLines={1}` with `adjustsFontSizeToFit` or `ellipsizeMode="tail"`
- **Buttons:** `flexShrink` and `flexWrap` so button text wraps or shrinks gracefully
- **Card titles/headers:** Allow multi-line wrapping; avoid fixed heights
- **Quick actions grid:** `flex-wrap` so items flow to next row for longer labels
- **Settings labels:** `flex-1` on label, `flex-shrink` on value to prevent overlap
- **General:** Replace fixed `width` with `minWidth`/`maxWidth`; ensure all text containers handle overflow

### RTL Support
- When `language === "ar"`: set `I18nManager.allowRTL(true)` and `I18nManager.forceRTL(true)` in root layout
- Requires app reload (standard RN behavior)
- RTL-aware spacing: flip padding/margins for Arabic (NativeWind `rtl:` prefix or manual)

## Implementation Order
1. Fix & run translation script — generate all pre-translated files
2. Backend language middleware + language-aware content loading
3. Frontend: add Accept-Language header to apiClient
4. Frontend: fix hardcoded strings in all 6 screens + add dynamic text resizing
5. RTL support for Arabic
6. End-to-end verification across all languages
