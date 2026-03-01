# Hackathon Tech Stack Research: Immigrant Parents + Autism App

**Date:** 2026-02-28 | **Build Time:** 10 Hours (8:30 AM - 6:30 PM)

---

## 1. RECOMMENDED STACK SUMMARY

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Next.js 16 (App Router) | SSR for SEO, API routes, PWA support, Vercel deploy |
| **Scaffold** | `create-t3-app` or Nextbase starter | Fastest path to typed full-stack |
| **Language** | TypeScript throughout | End-to-end type safety |
| **Backend API** | tRPC (via T3 stack) OR Next.js API routes + Supabase client | Type-safe, zero boilerplate |
| **Database** | Supabase (PostgreSQL) | Free tier, auth, realtime, pgvector, RLS |
| **ORM** | Prisma | Auto-generated types, migration tooling |
| **Auth** | Supabase Auth | Anonymous sign-in, phone OTP, email/password, no PII required |
| **i18n** | next-intl | Native Next.js integration, RSC support, tiny bundle, RTL support |
| **UI** | shadcn/ui + Tailwind CSS | Copy-paste components, full ownership, Radix a11y, RTL ready |
| **AI Chat** | Vercel AI SDK + Claude API (Haiku 4.5) | Streaming, useChat hook, cost-effective |
| **Vector DB** | Supabase pgvector | Same database, no extra service, RLS on vectors |
| **Embeddings** | OpenAI text-embedding-3-small | $0.02/1M tokens, 5x cheaper than ada-002 |
| **Translation API** | Google Cloud Translation API | Free 500K chars/month, 130+ languages, no data storage |
| **PWA** | Serwist (@serwist/next) | Modern next-pwa successor, offline support |
| **Deployment** | Vercel (free tier) | Zero-config Next.js deploy, 100GB bandwidth |
| **Forum** | Custom with Supabase Realtime | Real-time updates, RLS for moderation |

**Total Estimated Monthly Cost (Hackathon/Demo): $0** -- All services above have free tiers sufficient for a hackathon demo.

---

## 2. REACT FRAMEWORK

### Recommendation: Next.js 16 (App Router)

**Why Next.js over Vite+React for THIS app:**
- SSR/SSG for SEO (important for resource pages that should be discoverable by immigrant parents searching Google)
- Built-in API routes eliminate need for separate backend server
- App Router with React Server Components = zero client JS for translated content
- Native PWA manifest support via `app/manifest.ts`
- Vercel deployment is zero-config
- next-intl works natively with RSC (translations rendered server-side = 0 bytes to client)

**When Vite would be better:**
- Pure SPA with no SEO needs
- Faster dev server startup (marginal benefit for 10-hour hackathon)
- Simpler mental model (no server/client component distinction)

**PWA Setup with Serwist (next-pwa successor):**
```bash
npm install @serwist/next @serwist/precaching @serwist/sw idb
```

Key offline strategies:
- **CacheFirst** for static assets (`/_next/static/`) -- content-hashed, never change
- **NetworkFirst** for API responses and dynamic content
- **StaleWhileRevalidate** for translation files and resource pages
- IndexedDB for offline data storage (child profiles, saved resources)

**IMPORTANT:** Next.js 16 uses Turbopack by default, but Serwist requires Webpack. You will need to configure the build accordingly.

**PWA Manifest** (built-in Next.js support):
```typescript
// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ASD Bridge',
    short_name: 'ASD Bridge',
    description: 'Supporting immigrant families with autistic children',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4F46E5',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
```

**Sources:**
- [Vite vs Next.js Complete Comparison 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Next.js PWA Guide](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Serwist Getting Started](https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA with Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Building PWA in Next.js with Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)

---

## 3. TYPESCRIPT BACKEND

### Recommendation: Next.js API Routes + Supabase Client (primary) OR tRPC (if using T3)

**Option A: Next.js API Routes + Supabase (SIMPLEST for hackathon)**
- No separate backend server
- Supabase JS client handles DB queries, auth, realtime
- API routes for AI chat, translation API calls, and any server-side logic
- Fastest to set up

**Option B: tRPC via T3 Stack (BEST DX if team knows it)**
- End-to-end type safety between frontend and backend
- Auto-completion for API calls in the frontend
- Works with Prisma for generated types
- `create-t3-app` scaffolds everything

```bash
# Option A: Plain Next.js + Supabase
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir

# Option B: T3 Stack
npx create-t3-app@latest my-app
# Select: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
```

**Why NOT Express/Fastify:**
- Adds deployment complexity (separate server to host)
- No benefit over Next.js API routes for this use case
- Extra 30-60 minutes of setup you do not have

**Why NOT Serverless (Lambda/Netlify Functions):**
- Next.js API routes on Vercel ARE serverless by default
- No need for separate function infrastructure

**Sources:**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [T3 Stack 2025 Guide](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Create T3 App](https://create.t3.gg/)
- [tRPC Official](https://trpc.io/)

---

## 4. DATABASE

### Recommendation: Supabase (PostgreSQL)

**Why Supabase wins for this project:**

| Feature | Supabase | Firebase | PlanetScale |
|---------|----------|----------|-------------|
| Free tier DB storage | 500 MB | 1 GB (Spark) | Discontinued free tier |
| Auth included | Yes (50K MAU free) | Yes (50K MAU free) | No |
| Realtime | Yes (Postgres Changes) | Yes (best-in-class) | No |
| Vector search (pgvector) | Yes, built-in | No | No |
| SQL support | Full PostgreSQL | NoSQL only | MySQL |
| RLS (Row Level Security) | Yes, SQL-based | Firebase Security Rules | No |
| Anonymous auth | Yes, built-in | Yes | N/A |
| Open source | Yes | No | Partially |
| Data portability | Full (it is Postgres) | Vendor lock-in | MySQL compatible |

**Supabase Free Tier (2026):**
- 2 active projects
- 500 MB database storage
- 2 GB database egress
- 50,000 MAU (authentication)
- 1 GB file storage
- 500,000 edge function invocations
- No credit card required, never expires

**Why Supabase over Firebase for THIS app:**
1. pgvector for AI resource search (no extra service needed)
2. Full SQL for complex queries (child milestones, skill tracking)
3. RLS for privacy-preserving anonymous forum access
4. Data portability (not locked into Google ecosystem)
5. Better for relational data (user -> children -> skills -> milestones)

**Prisma Integration:**
```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

**Sources:**
- [Supabase vs Firebase 2026 Review](https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-which-one-actually-scales-with-you-2374)
- [Supabase Pricing 2026](https://uibakery.io/blog/supabase-pricing)
- [Supabase Free Tier Limits](https://supabase.com/pricing)

---

## 5. AUTHENTICATION

### Recommendation: Supabase Auth with Anonymous Sign-In + Phone OTP + Email/Password

**CRITICAL DESIGN PRINCIPLE for this audience:**
The app must be usable WITHOUT providing personally identifiable information. Many immigrant parents (especially undocumented) will not use an app that requires government ID/SSN, real name verification, address collection, or mandatory email.

**Authentication Tiers (Progressive Trust):**

| Tier | Method | What It Unlocks | PII Required |
|------|--------|----------------|--------------|
| 1 | Anonymous sign-in | Browse resources, use AI chat, view forum | None |
| 2 | Phone OTP | Post in forum, save child profiles | Phone number only |
| 3 | Email + password | Full account with recovery | Email address |

**Supabase Anonymous Auth:**
```typescript
// Sign in anonymously -- no PII needed
const { data, error } = await supabase.auth.signInAnonymously()

// Later, user can link a phone number
const { data, error } = await supabase.auth.updateUser({
  phone: '+1234567890',
})
```

**Phone OTP Setup:**
Supabase supports phone auth via Twilio, MessageBird, Textlocal, and Vonage. Users receive a 6-digit PIN via SMS, valid for 60 seconds.

**Security for Anonymous Users:**
- Enable CAPTCHA (Cloudflare Turnstile recommended -- free) to prevent abuse
- IP-based rate limit: 30 requests/hour (adjustable in Supabase dashboard)
- RLS policies can distinguish anonymous vs. authenticated users via `is_anonymous` JWT claim

**Why NOT Clerk for this app:**
- No built-in anonymous login
- $0.02/MAU after 10K (Supabase: 50K free)
- Overkill UI for this use case
- Adds external dependency

**Why NOT Auth0:**
- Complex setup for hackathon
- No anonymous auth
- Free tier limited to 7,500 MAU

**Sources:**
- [Supabase Anonymous Sign-Ins](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Supabase Phone Login](https://supabase.com/docs/guides/auth/phone-login)
- [Clerk vs Supabase Auth](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [Security of Anonymous Sign-Ins](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)

---

## 6. INTERNATIONALIZATION (i18n)

### Recommendation: next-intl

**Why next-intl over react-i18next or react-intl:**

| Feature | next-intl | react-i18next | react-intl |
|---------|-----------|---------------|------------|
| Next.js App Router support | Native | Via wrapper | Via wrapper |
| Server Component support | Built-in (0 client JS) | Requires setup | Requires setup |
| Bundle size | ~4KB | ~8KB | ~12KB |
| RTL support | Built-in | Manual | Manual |
| Plural forms (Arabic: 6 forms) | Automatic ICU | Manual config | Automatic ICU |
| Type safety | TypeScript-first | Good | Good |

**Installation:**
```bash
npm install next-intl rtl-detect
npm install --save-dev @types/rtl-detect
```

**RTL Setup for Arabic, Farsi, Urdu:**
```typescript
// hooks/useTextDirection.ts
import { useLocale } from 'next-intl';
import { isRtlLang } from 'rtl-detect';

export function useTextDirection() {
  const locale = useLocale();
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}

// app/[locale]/layout.tsx
export default function LocaleLayout({ children, params: { locale } }) {
  const direction = isRtlLang(locale) ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={direction}>
      <body>{children}</body>
    </html>
  );
}
```

**Translation File Structure:**
```
messages/
  en/
    common.json       # Shared UI strings (buttons, nav, errors)
    auth.json          # Login, signup, profile
    resources.json     # Resource library
    forum.json         # Forum/community
    ai-chat.json       # AI assistant
    child-profile.json # Child tracking
    skills.json        # Skill cards
  ar/                  # Arabic (RTL)
  es/                  # Spanish
  zh/                  # Chinese (Simplified)
  fa/                  # Farsi/Persian (RTL)
  ur/                  # Urdu (RTL)
```

**Priority Languages for MVP:** English (default), Spanish, Arabic (RTL to demonstrate technical capability), Chinese (Simplified).

**CSS for RTL -- use Tailwind logical properties:**
- `pl-4` -> `ps-4` (padding-inline-start)
- `pr-4` -> `pe-4` (padding-inline-end)
- `text-left` -> `text-start`
- `text-right` -> `text-end`
- `ml-auto` -> `ms-auto`
- `mr-auto` -> `me-auto`

**Machine Translation for Forum Content:**

| Service | Free Tier | Price After Free | Languages | Privacy |
|---------|-----------|-----------------|-----------|---------|
| Google Cloud Translation | 500K chars/month (permanent) | $20/1M chars | 130+ | No data stored/used for training |
| DeepL | 500K chars/month | $25/1M chars + $5.49/mo | 30+ | Free tier data may be stored |
| Amazon Translate | 2M chars/month (12 months only) | $15/1M chars | 75+ | No data stored |

**Recommendation:** Google Cloud Translation API -- permanent free tier, largest language coverage (130+ languages including all target RTL languages), strong privacy guarantees (no data stored or used for training).

**Sources:**
- [next-intl Documentation](https://next-intl.dev/)
- [next-intl Complete Guide 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl vs react-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Next.js RTL Support](https://lingo.dev/en/nextjs-i18n/right-to-left-languages)
- [Google Cloud Translation Pricing](https://cloud.google.com/translate/pricing)
- [DeepL vs Google Translate](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)

---

## 7. UI COMPONENT LIBRARY

### Recommendation: shadcn/ui + Tailwind CSS

**Why shadcn/ui:**
- Components are copy-pasted into your project (full ownership, no dependency updates to worry about)
- Built on Radix UI primitives (WAI-ARIA compliant, keyboard navigation, screen reader support)
- Tailwind CSS native (logical properties for RTL)
- 40+ components available
- RTL support via templates
- Dark/light mode built-in
- Zero runtime overhead

**Installation:**
```bash
npx shadcn@latest init
npx shadcn@latest add button card dialog input form sheet tabs avatar badge accordion command toast
```

**Key Components for This App:**
- `Card` -- Resource cards, skill cards, child profile cards
- `Dialog` / `Sheet` -- Modal interactions, language switcher
- `Form` + `Input` -- Child profile forms, forum post creation
- `Tabs` -- Navigation between sections
- `Avatar` -- Forum user display (with anonymous option)
- `Badge` -- Skill levels, language tags
- `Accordion` -- FAQ, resource details
- `Command` -- Search palette for resources
- `Toast` -- Notifications

**Accessibility Built-In:**
- All Radix-based components include ARIA roles and attributes automatically
- Keyboard navigation works out of the box (Tab, Enter, Escape, Arrow keys)
- Focus management and focus trapping in modals
- Screen reader announcements for dynamic content
- `aria-describedby` linked automatically on validation errors
- `aria-invalid` set on form errors

**Why NOT Chakra UI:** Heavier runtime (CSS-in-JS), prop-based styling less flexible than Tailwind utility classes, lower ecosystem momentum in 2025-2026.

**Why NOT Material UI:** Very heavy bundle, Google's design language may feel clinical for a community app, harder to customize deeply.

**Sources:**
- [shadcn/ui Guide 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Accessible shadcn/ui Components](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [React UI Libraries 2025 Comparison](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)

---

## 8. FORUM / COMMUNITY FEATURE

### Architecture: Custom Build with Supabase Realtime

**Data Model (SQL):**
```sql
-- Forum categories
CREATE TABLE forum_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_key TEXT NOT NULL,
  description_key TEXT,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Forum posts (threads)
CREATE TABLE forum_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES forum_categories(id),
  author_id UUID REFERENCES auth.users(id),
  is_anonymous BOOLEAN DEFAULT false,
  display_name TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  original_language TEXT DEFAULT 'en',
  upvote_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT false,
  is_moderated BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Comments on posts
CREATE TABLE forum_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES forum_comments(id),
  author_id UUID REFERENCES auth.users(id),
  is_anonymous BOOLEAN DEFAULT false,
  display_name TEXT,
  content TEXT NOT NULL,
  original_language TEXT DEFAULT 'en',
  upvote_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Upvotes
CREATE TABLE forum_upvotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  post_id UUID REFERENCES forum_posts(id),
  comment_id UUID REFERENCES forum_comments(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, post_id),
  UNIQUE(user_id, comment_id)
);

-- Cached translations
CREATE TABLE forum_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_type TEXT NOT NULL,
  source_id UUID NOT NULL,
  target_language TEXT NOT NULL,
  translated_title TEXT,
  translated_content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(source_id, target_language)
);
```

**Real-Time Updates:**
```typescript
const channel = supabase
  .channel('forum-posts')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'forum_posts',
    filter: `category_id=eq.${categoryId}`
  }, (payload) => {
    // Add new post to UI
  })
  .subscribe()
```

**Anonymous Posting Safety:**
- Posts from anonymous users (Supabase anonymous auth) can be flagged differently
- RLS policy checks `is_anonymous` claim in JWT
- Display pseudonyms (e.g., "Parent #4827") instead of blank names

**Moderation (MVP):** Simple report button on each post/comment. Admin flag to hide reported content. Future: AI-powered content moderation via Claude API.

**On-Demand Translation:** Posts stored in original language. "Translate" button triggers Google Cloud Translation API. Translation cached in `forum_translations` table. Subsequent requests for same language served from cache.

**Sources:**
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [Build Community Forum with Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)

---

## 9. AI INTEGRATION

### Architecture: Vercel AI SDK + Claude API + Supabase pgvector RAG

**Data Flow:**
```
User Question (multilingual)
  -> [Google Translate to English] (if not English)
  -> [Generate Embedding] (text-embedding-3-small)
  -> [Supabase pgvector Similarity Search]
  -> [Retrieved Context Documents]
  -> [Claude API with System Prompt + Context + User Question]
  -> [Response in English]
  -> [Google Translate to User's Language] (if not English)
  -> Displayed to User (streamed)
```

**Vercel AI SDK Setup:**
```bash
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```

```typescript
// app/api/chat/route.ts
import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages, locale } = await req.json();
  const result = streamText({
    model: anthropic('claude-3-5-haiku-20241022'),
    system: SYSTEM_PROMPT,
    messages: augmentedMessages,
  });
  return result.toDataStreamResponse();
}
```

```typescript
// Client-side: components/AiChat.tsx
'use client';
import { useChat } from '@ai-sdk/react';

export function AiChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });
  // Chat UI with streaming responses
}
```

**Claude Model Selection for Hackathon:**

| Model | Input/1M tokens | Output/1M tokens | Best For |
|-------|----------------|-------------------|----------|
| Claude Haiku 4.5 | $1.00 | $5.00 | **Chat responses (RECOMMENDED)** |
| Claude Sonnet 4.5 | $3.00 | $15.00 | Complex reasoning |
| Claude Opus 4.5 | $5.00 | $25.00 | Overkill for chat |

**Recommendation:** Claude Haiku 4.5 -- fast (low latency for streaming), cheap (great for hackathon budget), and capable enough for resource Q&A and general guidance.

**System Prompt (Safety-First for Health Info):**
```
You are a supportive AI assistant helping immigrant parents of children
with Autism Spectrum Disorder (ASD). You provide information about:
- ASD resources, therapies, and educational programs
- Navigating the US healthcare and education systems
- IEP (Individualized Education Program) processes
- Available government and nonprofit support programs
- General developmental milestones

CRITICAL SAFETY GUIDELINES:
- You are NOT a doctor. Always recommend consulting healthcare professionals.
- Never diagnose or suggest specific medical treatments.
- Always include a disclaimer when discussing medical/developmental topics.
- If a user describes a medical emergency, direct them to call 911.
- Be culturally sensitive and avoid assumptions about family structure.
- Use simple, clear language.
- When unsure, say "I don't know" rather than guessing.
- Never collect or ask for personal identifying information.
```

**Supabase pgvector RAG Setup:**
```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  source_url TEXT,
  state TEXT,
  language TEXT DEFAULT 'en',
  embedding vector(1536),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX ON resources USING hnsw (embedding vector_cosine_ops);

CREATE OR REPLACE FUNCTION match_resources(
  query_embedding vector(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETURNS TABLE (id UUID, title TEXT, content TEXT, category TEXT, similarity FLOAT)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT r.id, r.title, r.content, r.category,
    1 - (r.embedding <=> query_embedding) AS similarity
  FROM resources r
  WHERE 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDER BY r.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
```

**Embedding Model:** Use OpenAI `text-embedding-3-small` ($0.02/1M tokens, 1536 dimensions, 5x cheaper than ada-002 with better performance).

**Hackathon Shortcut:** Pre-populate the resources table with 20-50 curated resources about autism, IEPs, therapy types, and support organizations. Generate embeddings for these during setup rather than building a full ingestion pipeline.

**Sources:**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Next.js Guide](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude for Healthcare 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI & Vectors](https://supabase.com/docs/guides/ai)
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Build RAG with Claude & pgvector](https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG Chatbot with Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)

---

## 10. ACCESSIBILITY

### WCAG 2.2 AA Compliance Strategy

**Key Principles for This Audience:**
1. **Cognitive accessibility** -- Predictable layouts, clear visual hierarchy (important for stressed/overwhelmed parents AND for autism-related considerations)
2. **Low literacy support** -- Visual cues, icons alongside text, simple language
3. **Multilingual accessibility** -- Screen readers must work with RTL languages
4. **Motor accessibility** -- Large touch targets (min 44x44px per WCAG 2.2)

**Built-In via shadcn/ui + Radix:**
- All components include ARIA roles/attributes automatically
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Focus management and focus trapping in modals
- Screen reader announcements for dynamic content
- `aria-describedby` linked on validation errors
- `aria-invalid` set on form errors

**Additional Libraries:**
```bash
npm install -D @axe-core/react          # Logs a11y issues to browser console
npm install -D eslint-plugin-jsx-a11y   # Lint for a11y issues
```

**Color Contrast:** WCAG AA requires 4.5:1 for normal text, 3:1 for large text. Provide high-contrast mode toggle.

**Autism-Specific Design Considerations:**
- Sans-serif fonts (e.g., Inter, system-ui) -- easier to read for neurodivergent users
- Consistent, predictable navigation across all pages
- Minimal animations (respect `prefers-reduced-motion`)
- Clear visual boundaries between sections
- Avoid sensory overload (muted colors, no flashing)
- Simple language toggle for content simplification

```typescript
// In components, respect motion preferences:
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
```

**Sources:**
- [WCAG 2.2 in React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Color Contrast WCAG 2025 Guide](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [React Accessibility Best Practices](https://rtcamp.com/handbook/react-best-practices/accessibility/)

---

## 11. DEPLOYMENT

### Recommendation: Vercel Free Tier

**Why Vercel:** Built by the creators of Next.js -- zero configuration needed. Just `git push` to deploy.

**Free Tier Limits:**
- 100 GB bandwidth/month
- 100K serverless function invocations/month
- Unlimited deployments
- 10-second function timeout (sufficient for AI streaming)
- Custom domain support

**Environment Variables:**
```bash
# .env.local (never commit this)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...       # Server-side only
ANTHROPIC_API_KEY=sk-ant-...           # Server-side only
OPENAI_API_KEY=sk-...                  # Server-side only (for embeddings)
GOOGLE_TRANSLATE_API_KEY=...           # Server-side only
```

**IMPORTANT:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. API keys must NOT have this prefix.

**Demo Tips:** Deploy to Vercel early (within first hour). Use preview URLs for sharing with judges. Password protection available for preview deployments.

**Sources:**
- [Deploying Next.js on Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Deploying Next.js Apps 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

## 12. PRIVACY AND SECURITY

### Privacy-by-Design Architecture

**GUIDING PRINCIPLE:** This app serves a vulnerable population. Privacy violations could have real-world consequences (deportation risk for undocumented families). Security is not optional.

**HIPAA Considerations:** The app is NOT a covered entity and likely does NOT need full HIPAA compliance. However, if storing any health-related information about children, treat it as sensitive. Best approach: minimize what you store server-side.

**COPPA Considerations (Children Under 13):** If parents are the only users, COPPA is less restrictive but still relevant for storing children's data. The 2025 COPPA update introduces stricter data minimization requirements. **Recommendation:** Design the app for PARENTS only, not for children to use directly.

**Data Architecture -- What to Store Where:**

| Data Type | Storage Location | Encryption |
|-----------|-----------------|------------|
| Child's name | Client-side (localStorage/IndexedDB) | Optional client-side AES-256 |
| Child's diagnosis | Client-side | AES-256 client-side encryption |
| Child's skills/milestones | Supabase (encrypted at rest) | Supabase default |
| Forum posts | Supabase | At rest (Supabase default) |
| AI chat history | Client-side only (sessionStorage) | Ephemeral, not persisted |
| User's preferred language | Supabase user metadata | Standard |
| Anonymous user tokens | Supabase auth | JWT standard |

**RLS Policies:**
```sql
-- Users can only see their own child profiles
CREATE POLICY "Users can view own children"
  ON child_profiles FOR SELECT
  USING (auth.uid() = parent_id);

-- Anonymous users can read forum posts
CREATE POLICY "Anyone can read posts"
  ON forum_posts FOR SELECT
  USING (is_moderated = false);

-- Only authenticated users can post
CREATE POLICY "Authenticated users can post"
  ON forum_posts FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);
```

**What NOT to Do:**
- Do NOT store immigration status anywhere, ever
- Do NOT require real names
- Do NOT store IP addresses in application logs
- Do NOT use tracking analytics (no Google Analytics -- use Plausible or nothing)
- Do NOT store AI chat conversations server-side
- Do NOT require location services

**Sources:**
- [HIPAA & Health Apps](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [COPPA Compliance 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Zero-Knowledge Health App Guide](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Supabase RLS Complete Guide 2026](https://vibeappscanner.com/supabase-row-level-security)

---

## 13. HACKATHON STRATEGY & TIME BUDGET

### 10-Hour Build Plan (8:30 AM - 6:30 PM)

**Feature Prioritization (MoSCoW Method):**

| Priority | Feature | Status | Est. Time |
|----------|---------|--------|-----------|
| **MUST** | Multi-language UI (EN + ES + AR) | Build fully | 1.5 hr |
| **MUST** | AI Chat Assistant (with RAG) | Build fully | 2 hr |
| **MUST** | Resource Library (browsable + searchable) | Build fully | 1 hr |
| **MUST** | Anonymous + phone auth | Build fully | 1 hr |
| **MUST** | Child profile with skill tracking | Build fully | 1.5 hr |
| **SHOULD** | Community forum | Build basic (no real-time) | 1 hr |
| **SHOULD** | PWA offline access | Build (Serwist setup) | 0.5 hr |
| **COULD** | Forum post translation | Stub with mock | 0.5 hr |
| **COULD** | Dark mode / high contrast | Quick toggle | 0.25 hr |
| **WON'T** | Full moderation system | Demo mock only | -- |
| **WON'T** | Push notifications | Skip entirely | -- |
| **WON'T** | Video content | Skip entirely | -- |

### Detailed Schedule

```
8:30 - 9:00  (30 min)  PROJECT SETUP
  - Scaffold with create-t3-app or Nextbase starter
  - Supabase project creation + tables
  - Vercel deployment pipeline (deploy empty shell)
  - Install core deps
  - Environment variables configured

9:00 - 10:00  (60 min)  FOUNDATION
  - Layout component with i18n (header, nav, language switcher)
  - shadcn/ui components installed
  - RTL support wired up
  - Supabase auth: anonymous + email sign-in UI
  - Translation files structure (EN + ES + AR)

10:00 - 11:30  (90 min)  CORE FEATURE #1: AI CHAT
  - Vercel AI SDK + Claude Haiku setup
  - API route for chat with streaming
  - Chat UI component with useChat hook
  - System prompt with safety guardrails
  - Pre-populate 20 resources in pgvector
  - RAG pipeline (embed query -> search -> augment prompt)

11:30 - 12:00  (30 min)  MID-MORNING DEPLOY + TEST
  - Deploy to Vercel
  - Test on mobile
  - Fix critical bugs

12:00 - 12:30  (30 min)  LUNCH

12:30 - 1:30  (60 min)  CORE FEATURE #2: RESOURCE LIBRARY
  - Resource cards with category filtering
  - Search functionality
  - Resource detail pages
  - Seed data: 20-50 curated resources

1:30 - 3:00  (90 min)  CORE FEATURE #3: CHILD PROFILE + SKILLS
  - Child profile creation form
  - Skill card components
  - Milestone tracking UI
  - Client-side storage for sensitive data
  - Profile dashboard view

3:00 - 4:00  (60 min)  FEATURE #4: COMMUNITY FORUM (BASIC)
  - Forum post list view
  - Create post form
  - Basic comment system
  - Category-based organization

4:00 - 4:30  (30 min)  PWA + TRANSLATIONS
  - Serwist service worker setup
  - Fill in translation keys for ES and AR
  - Test RTL layout with Arabic

4:30 - 5:30  (60 min)  POLISH & DEMO PREP
  - Fix UI bugs
  - Add loading states and error handling
  - High contrast mode toggle (if time)
  - Take screenshots for presentation
  - Record demo video backup

5:30 - 6:00  (30 min)  FINAL DEPLOY + PRESENTATION
  - Final Vercel deployment
  - Test all features end-to-end
  - Prepare 3-minute pitch script

6:00 - 6:30  (30 min)  BUFFER / PRESENTATION
```

### What to Mock/Stub:
- **Forum moderation:** Just hide reported posts with a flag, no admin panel
- **Forum translation:** "Translate" button shows loading then original text (or Google Translate if time)
- **Password reset flow:** Use Supabase default emails
- **User avatars:** Initials or default icon, no upload
- **Admin dashboard:** Skip entirely

### Demo Optimization Tips:
1. **Start with the story** -- "Meet Fatima, a Syrian mother who just moved to the US. Her 4-year-old son was recently diagnosed with autism. She does not speak English. She does not know where to start."
2. **Show the language switch** -- Switch from English to Arabic live. The RTL flip is visually impressive to judges.
3. **Demo the AI chat** -- Ask it a question in Spanish. Show it providing resources.
4. **Show offline capability** -- Turn off WiFi, show the app still works.
5. **Emphasize privacy** -- "No real name needed. No email required. She can use this app safely."

**Sources:**
- [From Zero to Demo in 36 Hours](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [MVP Feature Prioritization](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Hackathon Demo Tips (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Hackathon Pitch Deck Guide](https://www.inknarrates.com/post/hackathon-pitch-deck)

---

## 14. BOILERPLATE & TEMPLATES

### Option 1: create-t3-app (RECOMMENDED for teams familiar with tRPC)
```bash
npx create-t3-app@latest autism-bridge --typescript --tailwind --trpc --prisma
```
- GitHub: https://github.com/t3-oss/create-t3-app
- Includes: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- You add: Supabase, next-intl, shadcn/ui, Vercel AI SDK

### Option 2: Nextbase Starter (RECOMMENDED for simpler setup)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Includes: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query
- You add: next-intl, shadcn/ui, Vercel AI SDK, Prisma (optional)

### Option 3: Vercel Supabase Starter
- Template: https://vercel.com/templates/next.js/supabase
- Official Vercel/Supabase template with SSR auth

### Option 4: supa-next-starter
- GitHub: https://github.com/michaeltroya/supa-next-starter
- Includes: Next.js, Supabase, Tailwind, shadcn/ui (already integrated)

### After Scaffolding, Add:
```bash
npm install next-intl rtl-detect
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm install @serwist/next @serwist/precaching @serwist/sw
npx shadcn@latest init
npx shadcn@latest add button card dialog input form sheet tabs avatar badge accordion command toast
npm install -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
```

### Reference Projects:
- **supabase-comments-extension** (GitHub: malerba118/supabase-comments-extension) -- Comments, replies, reactions
- **ojasskapre/nextjs-starter-template** -- Next.js + Supabase + LLM chat interfaces
- **shwosner/realtime-chat-supabase-react** -- Realtime chat with Supabase

---

## 15. SCHEMA DESIGN

### Complete Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// USER & AUTHENTICATION
model UserProfile {
  id              String    @id @default(uuid())
  authId          String    @unique
  displayName     String?
  preferredLocale String    @default("en")
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  children        ChildProfile[]
  forumPosts      ForumPost[]
  forumComments   ForumComment[]
  upvotes         ForumUpvote[]
}

// CHILD PROFILES & SKILL TRACKING
model ChildProfile {
  id              String    @id @default(uuid())
  parentId        String
  parent          UserProfile @relation(fields: [parentId], references: [id])
  nickname        String
  birthYear       Int?
  diagnosisDate   DateTime?
  skills          SkillCard[]
  milestones      Milestone[]
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  @@index([parentId])
}

model SkillCategory {
  id          String    @id @default(uuid())
  nameKey     String
  icon        String?
  sortOrder   Int       @default(0)
  skills      SkillCard[]
}

model SkillCard {
  id              String    @id @default(uuid())
  childId         String
  child           ChildProfile @relation(fields: [childId], references: [id], onDelete: Cascade)
  categoryId      String
  category        SkillCategory @relation(fields: [categoryId], references: [id])
  nameKey         String
  level           Int       @default(0)
  notes           String?
  lastAssessed    DateTime  @default(now())
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  @@index([childId])
  @@index([categoryId])
}

model Milestone {
  id              String    @id @default(uuid())
  childId         String
  child           ChildProfile @relation(fields: [childId], references: [id], onDelete: Cascade)
  titleKey        String
  description     String?
  achievedDate    DateTime?
  category        String
  createdAt       DateTime  @default(now())
  @@index([childId])
}

// RESOURCES (vector embedding handled via raw SQL / pgvector)
model Resource {
  id          String    @id @default(uuid())
  title       String
  content     String    @db.Text
  summary     String?
  category    String
  subcategory String?
  sourceUrl   String?
  state       String?
  language    String    @default("en")
  tags        String[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  @@index([category])
  @@index([state])
}

// FORUM / COMMUNITY
model ForumCategory {
  id              String    @id @default(uuid())
  nameKey         String
  descriptionKey  String?
  icon            String?
  sortOrder       Int       @default(0)
  posts           ForumPost[]
}

model ForumPost {
  id              String    @id @default(uuid())
  categoryId      String
  category        ForumCategory @relation(fields: [categoryId], references: [id])
  authorId        String
  author          UserProfile @relation(fields: [authorId], references: [id])
  isAnonymous     Boolean   @default(false)
  title           String
  content         String    @db.Text
  originalLang    String    @default("en")
  upvoteCount     Int       @default(0)
  commentCount    Int       @default(0)
  isPinned        Boolean   @default(false)
  isHidden        Boolean   @default(false)
  reportCount     Int       @default(0)
  comments        ForumComment[]
  upvotes         ForumUpvote[]
  translations    ForumTranslation[]
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  @@index([categoryId])
  @@index([authorId])
  @@index([createdAt])
}

model ForumComment {
  id              String    @id @default(uuid())
  postId          String
  post            ForumPost @relation(fields: [postId], references: [id], onDelete: Cascade)
  parentId        String?
  parent          ForumComment? @relation("CommentReplies", fields: [parentId], references: [id])
  replies         ForumComment[] @relation("CommentReplies")
  authorId        String
  author          UserProfile @relation(fields: [authorId], references: [id])
  isAnonymous     Boolean   @default(false)
  content         String    @db.Text
  originalLang    String    @default("en")
  upvoteCount     Int       @default(0)
  isHidden        Boolean   @default(false)
  reportCount     Int       @default(0)
  upvotes         ForumUpvote[]
  translations    ForumTranslation[]
  createdAt       DateTime  @default(now())
  @@index([postId])
  @@index([parentId])
}

model ForumUpvote {
  id          String    @id @default(uuid())
  userId      String
  user        UserProfile @relation(fields: [userId], references: [id])
  postId      String?
  post        ForumPost? @relation(fields: [postId], references: [id], onDelete: Cascade)
  commentId   String?
  comment     ForumComment? @relation(fields: [commentId], references: [id], onDelete: Cascade)
  createdAt   DateTime  @default(now())
  @@unique([userId, postId])
  @@unique([userId, commentId])
}

model ForumTranslation {
  id                String    @id @default(uuid())
  postId            String?
  post              ForumPost? @relation(fields: [postId], references: [id], onDelete: Cascade)
  commentId         String?
  comment           ForumComment? @relation(fields: [commentId], references: [id], onDelete: Cascade)
  targetLang        String
  translatedTitle   String?
  translatedContent String    @db.Text
  createdAt         DateTime  @default(now())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
```

### Seed Data Categories

**Skill Categories:** Communication, Social Skills, Daily Living, Motor Skills, Academic, Sensory Processing, Emotional Regulation

**Forum Categories:** Introductions & Welcome, Therapy & Treatments (ABA/OT/Speech), School & IEP Help, Daily Life Tips, Legal & Immigration Questions, Healthcare Navigation, Success Stories & Milestones, General Support

**Resource Categories:** Therapy Types & Providers, Education & IEP Resources, Legal Rights & Advocacy, Financial Assistance, Community Organizations, Online Tools & Apps, Books & Media, State-Specific Resources

---

## PACKAGE.JSON DEPENDENCIES SUMMARY

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.7.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "prisma": "^6.0.0",
    "@prisma/client": "^6.0.0",
    "next-intl": "^4.0.0",
    "rtl-detect": "^1.1.2",
    "ai": "^6.0.0",
    "@ai-sdk/anthropic": "^1.0.0",
    "@ai-sdk/openai": "^1.0.0",
    "@ai-sdk/react": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0",
    "lucide-react": "^0.450.0",
    "@serwist/next": "^9.0.0",
    "@serwist/precaching": "^9.0.0",
    "@serwist/sw": "^9.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "zod": "^3.23.0",
    "react-hook-form": "^7.53.0",
    "@hookform/resolvers": "^3.9.0"
  },
  "devDependencies": {
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "@types/rtl-detect": "^1.0.0"
  }
}
```

---

## QUICK REFERENCE: KEY DOCUMENTATION LINKS

| Tool | Documentation |
|------|--------------|
| Next.js 16 | https://nextjs.org/docs |
| Supabase | https://supabase.com/docs |
| Supabase Auth | https://supabase.com/docs/guides/auth |
| Supabase Realtime | https://supabase.com/docs/guides/realtime |
| Supabase pgvector | https://supabase.com/docs/guides/ai |
| next-intl | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| Vercel AI SDK | https://ai-sdk.dev/docs/introduction |
| Claude API | https://platform.claude.com/docs |
| Prisma | https://www.prisma.io/docs |
| Serwist PWA | https://serwist.pages.dev/docs/next/getting-started |
| Tailwind CSS | https://tailwindcss.com/docs |
| Google Cloud Translation | https://cloud.google.com/translate/docs |
| OpenAI Embeddings | https://platform.openai.com/docs/guides/embeddings |
| Vercel Deployment | https://vercel.com/docs |

---

This research covers all 10 areas you requested plus the hackathon strategy, privacy architecture, boilerplate options, and complete schema design. The stack is designed so that every service fits within free tiers for the hackathon, the authentication is privacy-preserving for undocumented users, and the time budget is realistic for a 10-hour build. I attempted to save this as a file to `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` but file write permission was denied. If you would like me to save this to disk, you can grant the Write permission and I will create the file.
---

## Additional Research (Updated March 2026)

### Best i18n Library for 10+ Languages (React + TypeScript)

**Recommended: react-i18next** — 2.1M weekly downloads, most popular React i18n solution.
- Built on i18next ecosystem with plugins for language detection, async loading, complex plurals
- Bundle: 22.2 kB (i18next 15.1kB + react-i18next 7.1kB)
- Supports JSON translation files — easy to add languages incrementally
- Source: [Phrase Blog](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)

**Lightweight alternative: LinguiJS** — 10.4 kB total (half the size), ICU message syntax, TypeScript support.

**For hackathon speed**: react-i18next with JSON translation files. Start with English + Spanish, add other languages via JSON files. Use Google Translate API or DeepL for initial translations.

Source: [GloryWebs 2026 Guide](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)

### Supabase Free Tier Limits (2026)

- **2 active projects** (paused after 1 week inactivity)
- **500 MB** database storage (shared CPU)
- **2 GB** database egress/month
- **50,000** monthly active users (auth)
- **1 GB** file storage
- **2 GB** storage egress
- **500,000** edge function invocations/month
- No backups, no SLA on free plan

Source: [Supabase Pricing](https://supabase.com/pricing), [UI Bakery Breakdown](https://uibakery.io/blog/supabase-pricing)

**For hackathon**: 500 MB is more than enough. Even with 10,000 users each storing profile + child data + forum posts, you'd use <50 MB. The 50K MAU auth limit is also very generous for a demo.
