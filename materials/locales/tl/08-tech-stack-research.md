# Hackathon Tech Stack Research: Mga Magulang na Imigrante + Autism App

**Petsa:** 2026-02-28 | **Oras ng Pagbuo:** 10 Oras (8:30 AM - 6:30 PM)

---

## 1. INIREREKOMENDADONG BUOD NG STACK

| Layer | Teknolohiya | Bakit |
|-------|-----------|-----|
| **Framework** | Next.js 16 (App Router) | SSR para sa SEO, mga ruta ng API, suporta sa PWA, pag-deploy ng Vercel |
| **Scaffold** | `create-t3-app` o Nextbase starter | Pinakamabilis na landas sa na-type na full-stack |
| **Wika** | TypeScript sa buong | End-to-end na uri ng kaligtasan |
| **Backend API** | tRPC (sa pamamagitan ng T3 stack) O Next.js API na mga ruta + Supabase client | Ligtas sa uri, zero boilerplate |
| **Database** | Supabase (PostgreSQL) | Libreng tier, auth, realtime, pgvector, RLS |
| **ORM** | Prisma | Awtomatikong nabuong mga uri, migration tooling |
| **Auth** | Supabase Auth | Anonymous na pag-sign in, OTP ng telepono, email/password, walang kinakailangang PII |
| **i18n** | susunod na-intl | Pagsasama ng Native Next.js, suporta sa RSC, maliit na bundle, suporta sa RTL |
| **UI** | shadcn/ui + Tailwind CSS | Copy-paste na mga bahagi, buong pagmamay-ari, Radix a11y, RTL ready |
| **AI Chat** | Vercel AI SDK + Claude API (Haiku 4.5) | Streaming, useChat hook, cost-effective |
| **Vector DB** | Supabase pgvector | Parehong database, walang karagdagang serbisyo, RLS sa mga vector |
| **Mga Pag-embed** | OpenAI text-embedding-3-small | $0.02/1M token, 5x na mas mura kaysa ada-002 |
| **Translation API** | Google Cloud Translation API | Libreng 500K char/buwan, 130+ na wika, walang imbakan ng data |
| **PWA** | Serwist (@serwist/next) | Modernong susunod na pwa na kahalili, offline na suporta |
| **Deployment** | Vercel (libreng baitang) | Zero-config Next.js deploy, 100GB bandwidth |
| **Forum** | Custom sa Supabase Realtime | Mga real-time na update, RLS para sa moderation |

**Kabuuang Tinantyang Buwanang Gastos (Hackathon/Demo): $0** -- Ang lahat ng serbisyo sa itaas ay may mga libreng tier na sapat para sa isang hackathon demo.

---

## 2. REACT FRAMEWORK

### Rekomendasyon: Next.js 16 (App Router)

**Bakit Next.js sa Vite+React para sa app na ITO:**
- SSR/SSG para sa SEO (mahalaga para sa mga pahina ng mapagkukunan na dapat matuklasan ng mga imigranteng magulang na naghahanap sa Google)
- Ang mga built-in na ruta ng API ay nag-aalis ng pangangailangan para sa hiwalay na backend server
- App Router na may React Server Components = zero client JS para sa isinalin na content
- Native PWA manifest support sa pamamagitan ng `app/manifest.ts`
- Ang pag-deploy ng Vercel ay zero-config
- Ang next-intl ay katutubong gumagana sa RSC (translations rendered server-side = 0 bytes to client)

**Kailan magiging mas maganda ang Vite:**
- Purong SPA na walang pangangailangan sa SEO
- Mas mabilis na dev server startup (marginal benefit para sa 10 oras na hackathon)
- Mas simpleng modelo ng pag-iisip (walang pagkakaiba sa bahagi ng server/kliyente)

**PWA Setup na may Serwist (susunod na pwa successor):**
```bash
npm install @serwist/next @serwist/precaching @serwist/sw idb
```

Mga pangunahing diskarte sa offline:
- **CacheFirst** para sa mga static na asset (`/_next/static/`) -- content-hash, hindi kailanman magbabago
- **NetworkFirst** para sa mga tugon ng API at dynamic na nilalaman
- **StaleWhileRevalidate** para sa mga file ng pagsasalin at mga pahina ng mapagkukunan
- IndexedDB para sa offline na imbakan ng data (mga profile ng bata, naka-save na mapagkukunan)

**MAHALAGA:** Ang Next.js 16 ay gumagamit ng Turbopack bilang default, ngunit nangangailangan ang Serwist ng Webpack. Kakailanganin mong i-configure ang build nang naaayon.

**PWA Manifest** (built-in na Suporta sa Next.js):
```typescript
// app/manifest.ts
uri ng pag-import { MetadataRoute } mula sa 'next'

export default function manifest(): MetadataRoute.Manifest {
  ibalik {
    pangalan: 'ASD Bridge',
    short_name: 'ASD Bridge',
    paglalarawan: 'Pagsuporta sa mga pamilyang imigrante na may mga batang autistic',
    start_url: '/',
    display: 'nakapag-iisa',
    background_color: '#ffffff',
    theme_color: '#4F46E5',
    mga icon: [
      { src: '/icon-192.png', mga sukat: '192x192', uri: 'image/png' },
      { src: '/icon-512.png', mga sukat: '512x512', uri: 'image/png' },
    ],
  }
}
```

**Mga Pinagmulan:**
- [Vite vs Next.js Kumpletong Paghahambing 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Next.js PWA Guide](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Pagsisimula ng Serwist](https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA with Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Pagbuo ng PWA sa Next.js gamit ang Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)

---

## 3. TYPESCRIPT BACKEND

### Rekomendasyon: Next.js API Routes + Supabase Client (pangunahin) O tRPC (kung gumagamit ng T3)

**Pagpipilian A: Next.js API Routes + Supabase (PINAKASIMPLE para sa hackathon)**
- Walang hiwalay na backend server
- Ang kliyente ng Supabase JS ay humahawak ng mga query sa DB, auth, realtime
- Mga ruta ng API para sa AI chat, pagsasalin ng mga tawag sa API, at anumang lohika sa gilid ng server
- Pinakamabilis na i-set up

**Pagpipilian B: tRPC sa pamamagitan ng T3 Stack (BEST DX kung alam ito ng team)**
- End-to-end na uri ng kaligtasan sa pagitan ng frontend at backend
- Auto-completion para sa mga API call sa frontend
- Gumagana sa Prisma para sa mga nabuong uri
- `create-t3-app` scaffolds lahat

```bash
# Pagpipilian A: Plain Next.js + Supabase
npx create-next-app@pinakabagong my-app --typescript --tailwind --eslint --app --src-dir

# Pagpipilian B: T3 Stack
npx create-t3-app@pinakabagong my-app
# Piliin: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
```

**Bakit HINDI Ipahayag/Pag-fastify:**
- Nagdaragdag ng pagiging kumplikado ng pag-deploy (hiwalay na server sa host)
- Walang benepisyo sa mga ruta ng Next.js API para sa use case na ito
- Dagdag na 30-60 minuto ng setup na wala ka

**Bakit HINDI Serverless (Lambda/Netlify Functions):**
- Ang mga ruta ng Next.js API sa Vercel AY walang server bilang default
- Hindi na kailangan para sa hiwalay na imprastraktura ng pag-andar

**Mga Pinagmulan:**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [T3 Stack 2025 Guide](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Gumawa ng T3 App](https://create.t3.gg/)
- [tRPC Official](https://trpc.io/)

---

## 4. DATABASE

### Rekomendasyon: Supabase (PostgreSQL)

**Bakit nanalo ang Supabase para sa proyektong ito:**

| Tampok | Supabase | Firebase | PlanetScale |
|---------|----------|----------|-------------|
| Libreng tier DB storage | 500 MB | 1 GB (Spark) | Itinigil ang libreng tier |
| Kasama ang auth | Oo (50K MAU libre) | Oo (50K MAU libre) | Hindi |
| Realtime | Oo (Mga Pagbabago sa Postgres) | Oo (pinakamahusay sa klase) | Hindi |
| Paghahanap ng vector (pgvector) | Oo, built-in | Hindi | Hindi |
| Suporta sa SQL | Buong PostgreSQL | NoSQL lang | MySQL |
| RLS (Row Level Security) | Oo, batay sa SQL | Mga Panuntunan sa Seguridad ng Firebase | Hindi |
| Anonymous na auth | Oo, built-in | Oo | N/A |
| Open source | Oo | Hindi | Bahagyang |
| Pagdadala ng data | Puno (ito ay Postgres) | Lock-in ng vendor | katugmang MySQL |

**Supabase Free Tier (2026):**
- 2 aktibong proyekto
- 500 MB na imbakan ng database
- 2 GB database egress
- 50,000 MAU (authentication)
- 1 GB na imbakan ng file
- 500,000 edge function invocations
- Walang kinakailangang credit card, hindi kailanman mag-e-expire

**Bakit Supabase sa Firebase para sa app na ITO:**
1. pgvector para sa paghahanap ng mapagkukunan ng AI (walang kinakailangang karagdagang serbisyo)
2. Buong SQL para sa mga kumplikadong query (mga milestone ng bata, pagsubaybay sa kasanayan)
3. RLS para sa pag-iingat sa privacy ng anonymous na pag-access sa forum
4. Portability ng data (hindi naka-lock sa Google ecosystem)
5. Mas mahusay para sa relational data (user -> mga bata -> mga kasanayan -> mga milestone)

**Pagsasama ng Prisma:**
```prisma
mapagkukunan ng data db {
  provider = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

**Mga Pinagmulan:**
- [Supabase vs Firebase 2026 Review](https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-which-one-actually-scales-with-you-2374)
- [Pagpepresyo ng Supabase 2026](https://uibakery.io/blog/supabase-pricing)
- [Mga Limitasyon sa Libreng Tier ng Supabase](https://supabase.com/pricing)

---

## 5. PAGPAPATUNAY

### Rekomendasyon: Supabase Auth na may Anonymous Sign-In + Phone OTP + Email/Password

**PRINSIPYO NG KRITIKAL NA DESIGN para sa madlang ito:**
Ang app ay dapat na magagamit nang WALANG nagbibigay ng personal na pagkakakilanlan ng impormasyon. Maraming mga magulang na imigrante (lalo na ang hindi dokumentado) ay hindi gagamit ng app na nangangailangan ng ID/SSN ng gobyerno, pag-verify ng tunay na pangalan, pangongolekta ng address, o mandatoryong email.

**Mga Tier ng Authentication (Progressive Trust):**

| Tier | Paraan | Ano Ang Na-unlock Nito | Kinakailangan ang PII |
|------|--------|----------------|--------------|
| 1 | Anonymous na pag-sign-in | Mag-browse ng mga mapagkukunan, gumamit ng AI chat, tingnan ang forum | Wala |
| 2 | Telepono OTP | Mag-post sa forum, i-save ang mga profile ng bata | Numero ng telepono lamang |
| 3 | Email + password | Buong account na may pagbawi | Email address |

**Supabase Anonymous Auth:**
```typescript
// Mag-sign in nang hindi nagpapakilala -- hindi kailangan ng PII
const { data, error } = maghintay ng supabase.auth.signInAnonymously()

// Sa ibang pagkakataon, maaaring mag-link ang user ng numero ng telepono
const { data, error } = hintayin ang supabase.auth.updateUser({
  telepono: '+1234567890',
})
```

**Setup ng OTP ng Telepono:**
Sinusuportahan ng Supabase ang pagpapatunay ng telepono sa pamamagitan ng Twilio, MessageBird, Textlocal, at Vonage. Makakatanggap ang mga user ng 6 na digit na PIN sa pamamagitan ng SMS, valid sa loob ng 60 segundo.

**Seguridad para sa Mga Anonymous na User:**
- Paganahin ang CAPTCHA (Inirerekomenda ng Cloudflare Turnstile -- libre) upang maiwasan ang pang-aabuso
- IP-based na limitasyon sa rate: 30 kahilingan/oras (adjustable sa Supabase dashboard)
- Maaaring makilala ng mga patakaran ng RLS ang anonymous vs. authenticated na mga user sa pamamagitan ng `is_anonymous` na JWT claim

**Bakit HINDI Clerk para sa app na ito:**
- Walang built-in na anonymous na pag-login
- $0.02/MAU pagkatapos ng 10K (Supabase: 50K libre)
- Overkill UI para sa use case na ito
- Nagdaragdag ng panlabas na dependency

**Bakit HINDI Auth0:**
- Kumplikadong setup para sa hackathon
- Walang anonymous na auth
- Limitado ang libreng tier sa 7,500 MAU

**Mga Pinagmulan:**
- [Supabase Anonymous Sign-Ins](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Supabase Phone Login](https://supabase.com/docs/guides/auth/phone-login)
- [Clerk vs Supabase Auth](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [Security of Anonymous Sign-Ins](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)

---

## 6. INTERNASYONALISASYON (i18n)

### Rekomendasyon: next-intl

**Bakit next-intl over react-i18next o react-intl:**

| Tampok | susunod na-intl | react-i18next | react-intl |
|---------|-----------|----------------|------------|
| Suporta sa Next.js App Router | Katutubo | Sa pamamagitan ng wrapper | Sa pamamagitan ng wrapper |
| Suporta sa Component ng Server | Built-in (0 client JS) | Nangangailangan ng setup | Nangangailangan ng setup |
| Laki ng bundle | ~4KB | ~8KB | ~12KB |
| Suporta sa RTL | Built-in | Manwal | Manwal |
| Pangmaramihang anyo (Arabic: 6 na anyo) | Awtomatikong ICU | Manu-manong config | Awtomatikong ICU |
| Uri ng kaligtasan | TypeScript-una | Mabuti | Mabuti |

**Pag-install:**
```bash
npm install next-intl rtl-detect
npm install --save-dev @types/rtl-detect
```

**RTL Setup para sa Arabic, Farsi, Urdu:**
```typescript
// hooks/useTextDirection.ts
import {useLocale } mula sa 'next-intl';
import { isRtlLang } mula sa 'rtl-detect';

export function useTextDirection() {
  const locale = useLocale();
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}

// app/[locale]/layout.tsx
i-export ang default na function na LocaleLayout({ mga bata, params: { locale } }) {
  const direction = isRtlLang(locale) ? 'rtl' : 'ltr';
  bumalik (
    <html lang={locale} dir={direction}>
      <katawan>{mga bata}</body>
    </html>
  );
}
```

**Istruktura ng File ng Pagsasalin:**
```
mga mensahe/
  en/
    common.json # Mga nakabahaging string ng UI (mga button, nav, mga error)
    auth.json # Login, signup, profile
    resources.json # Resource library
    forum.json # Forum/komunidad
    ai-chat.json # AI assistant
    child-profile.json # Pagsubaybay sa bata
    skills.json # Skill card
  ar/ # Arabic (RTL)
  es/ # Espanyol
  zh/ # Chinese (Pinasimple)
  fa/ # Farsi/Persian (RTL)
  ur/ # Urdu (RTL)
```

**Priority Languages ​​para sa MVP:** English (default), Spanish, Arabic (RTL to demonstrate technical capability), Chinese (Simplified).

**CSS para sa RTL -- gumamit ng mga lohikal na katangian ng Tailwind:**
- `pl-4` -> `ps-4` (padding-inline-start)
- `pr-4` -> `pe-4` (padding-inline-end)
- `text-left` -> `text-start`
- `text-right` -> `text-end`
- `ml-auto` -> `ms-auto`
- `mr-auto` -> `me-auto`

**Pagsasalin ng Machine para sa Nilalaman ng Forum:**

| Serbisyo | Libreng Tier | Presyo Pagkatapos ng Libre | Mga Wika | Privacy |
|---------|-----------|----------------|-----------|---------|
| Google Cloud Translation | 500K chars/buwan (permanente) | $20/1M chars | 130+ | Walang data na nakaimbak/ginamit para sa pagsasanay |
| DeepL | 500K chars/buwan | $25/1M char + $5.49/buwan | 30+ | Maaaring maimbak ang libreng data ng tier |
| Pagsasalin ng Amazon | 2M chars/month (12 months lang) | $15/1M chars | 75+ | Walang data na nakaimbak |

**Rekomendasyon:** Google Cloud Translation API -- permanenteng libreng tier, pinakamalaking saklaw ng wika (130+ na wika kasama ang lahat ng target na RTL na wika), matibay na garantiya sa privacy (walang data na nakaimbak o ginagamit para sa pagsasanay).

**Mga Pinagmulan:**
- [next-intl Documentation](https://next-intl.dev/)
- [next-intl Kumpletong Gabay 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl vs react-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Next.js RTL Support](https://lingo.dev/en/nextjs-i18n/right-to-left-languages)
- [Pagpepresyo ng Google Cloud Translation](https://cloud.google.com/translate/pricing)
- [DeepL vs Google Translate](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)

---

## 7. UI COMPONENT LIBRARY

### Rekomendasyon: shadcn/ui + Tailwind CSS

**Bakit shadcn/ui:**
- Ang mga bahagi ay kinopya-paste sa iyong proyekto (buong pagmamay-ari, walang mga update sa dependency na dapat ipag-alala)
- Binuo sa Radix UI primitives (WAI-ARIA compliant, keyboard navigation, screen reader support)
- Tailwind CSS native (logical properties para sa RTL)
- Available ang 40+ na bahagi
- Suporta sa RTL sa pamamagitan ng mga template
- Built-in na dark/light mode
- Zero runtime overhead

**Pag-install:**
```bash
npx shadcn@pinakabagong init
npx shadcn@pinakabagong add button card dialog input form sheet tabs avatar badge accordion command toast
```

**Mga Pangunahing Bahagi para sa App na Ito:**
- `Card` -- Mga resource card, skill card, child profile card
- `Dialog` / `Sheet` -- Modal na pakikipag-ugnayan, language switcher
- `Form` + `Input` -- Mga form ng child profile, paggawa ng post sa forum
- `Mga Tab` -- Navigation sa pagitan ng mga seksyon
- `Avatar` -- Pagpapakita ng user ng forum (na may hindi kilalang opsyon)
- `Badge` -- Mga antas ng kasanayan, mga tag ng wika
- `Accordion` -- FAQ, mga detalye ng mapagkukunan
- `Command` -- Maghanap ng palette para sa mga mapagkukunan
- `Toast` -- Mga Notification

**Built-In na Accessibility:**
- Lahat ng mga bahagi na nakabatay sa Radix ay awtomatikong kasama ang mga tungkulin at katangian ng ARIA
- Gumagana ang pag-navigate sa keyboard sa labas ng kahon (Tab, Enter, Escape, Arrow key)
- Tumuon sa pamamahala at tumuon sa pag-trap sa mga modal
- Mga anunsyo ng screen reader para sa dynamic na nilalaman
- Awtomatikong naka-link ang `aria-describedby` sa mga error sa pagpapatunay
- Itinakda ang `aria-invalid` sa mga error sa form

**Why NOT Chakra UI:** Mas mabigat na runtime (CSS-in-JS), hindi gaanong flexible ang pag-istilo na nakabatay sa prop kaysa sa mga klase ng utility ng Tailwind, mas mababang momentum ng ecosystem sa 2025-2026.

**Bakit HINDI Material UI:** Napakabigat na bundle, ang wika ng disenyo ng Google ay maaaring maging klinikal para sa isang app ng komunidad, mas mahirap i-customize nang malalim.

**Mga Pinagmulan:**
- [shadcn/ui Guide 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Accessible shadcn/ui Components](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [React UI Libraries 2025 Comparison](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)

---

## 8. FORUM / COMMUNITY FEATURE

### Arkitektura: Custom na Pagbuo gamit ang Supabase Realtime

**Modelo ng Data (SQL):**
```sql
-- Mga kategorya ng forum
GUMAWA NG TABLE forum_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_key TEXT HINDI NULL,
  description_key TEXT,
  icon na TEXT,
  sort_order INTEGER DEFAULT 0,
  ginawa_sa TIMESTAMPTZ DEFAULT NGAYON()
);

-- Mga post sa forum (mga thread)
GUMAWA NG TABLE forum_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES forum_categories(id),
  author_id UUID REFERENCES auth.users(id),
  is_anonymous BOOLEAN DEFAULT false,
  display_name TEXT,
  pamagat TEXT NOT NULL,
  nilalaman TEXT NOT NULL,
  original_language TEXT DEFAULT 'en',
  upvote_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT false,
  is_moderated BOOLEAN DEFAULT false,
  nilikha_sa TIMESTAMPTZ DEFAULT NGAYON(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Mga komento sa mga post
GUMAWA NG TABLE forum_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES forum_comments(id),
  author_id UUID REFERENCES auth.users(id),
  is_anonymous BOOLEAN DEFAULT false,
  display_name TEXT,
  nilalaman TEXT NOT NULL,
  original_language TEXT DEFAULT 'en',
  upvote_count INTEGER DEFAULT 0,
  ginawa_sa TIMESTAMPTZ DEFAULT NGAYON()
);

-- Mga upvote
GUMAWA NG TABLE forum_upvotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  post_id UUID REFERENCES forum_posts(id),
  comment_id UUID REFERENCES forum_comments(id),
  nilikha_sa TIMESTAMPTZ DEFAULT NGAYON(),
  UNIQUE(user_id, post_id),
  UNIQUE(user_id, comment_id)
);

-- Mga naka-cache na pagsasalin
GUMAWA NG TABLE forum_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_type TEXT NOT NULL,
  source_id UUID NOT NULL,
  target_language TEXT HINDI NULL,
  isinalin_pamagat TEXT,
  isinalin_nilalaman TEXT NOT NULL,
  nilikha_sa TIMESTAMPTZ DEFAULT NGAYON(),
  UNIQUE(source_id, target_language)
);
```

**Mga Real-Time na Update:**
```typescript
const channel = supabase
  .channel('forum-posts')
  .on('postgres_changes', {
    kaganapan: 'INSERT',
    schema: 'pampubliko',
    talahanayan: 'forum_posts',
    filter: `category_id=eq.${categoryId}`
  }, (payload) => {
    // Magdagdag ng bagong post sa UI
  })
  .subscribe()
```

**Anonymous na Kaligtasan sa Pag-post:**
- Maaaring ma-flag nang iba ang mga post mula sa mga hindi kilalang user (Supabase anonymous auth).
- Sinusuri ng patakaran ng RLS ang claim na `is_anonymous` sa JWT
- Ipakita ang mga pseudonym (hal., "Magulang #4827") sa halip na mga blangkong pangalan

**Moderation (MVP):** Button ng simpleng ulat sa bawat post/komento. I-flag ng admin upang itago ang naiulat na nilalaman. Hinaharap: AI-powered content moderation sa pamamagitan ng Claude API.

**On-Demand na Pagsasalin:** Mga post na nakaimbak sa orihinal na wika. Na-trigger ng button na "Translate" ang Google Cloud Translation API. Naka-cache ang pagsasalin sa talahanayan ng `forum_translations`. Ang mga kasunod na kahilingan para sa parehong wika ay inihatid mula sa cache.

**Mga Pinagmulan:**
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [Bumuo ng Forum ng Komunidad sa Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)

---

## 9. AI INTEGRATION

### Arkitektura: Vercel AI SDK + Claude API + Supabase pgvector RAG

**Daloy ng Data:**
```
Tanong ng User (multilingual)
  -> [Google Translate to English] (kung hindi English)
  -> [Bumuo ng Pag-embed] (text-embedding-3-small)
  -> [Supabase pgvector Similarity Search]
  -> [Mga Nakuhang Dokumento ng Konteksto]
  -> [Claude API na may System Prompt + Context + User Question]
  -> [Tugon sa Ingles]
  -> [Google Translate to User's Language] (kung hindi English)
  -> Ipinapakita sa User (na-stream)
```

**Vercel AI SDK Setup:**
```bash
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```

```typescript
// app/api/chat/route.ts
mag-import ng { anthropic } mula sa '@ai-sdk/anthropic';
mag-import ng { streamText } mula sa 'ai';

i-export ang async function na POST(req: Request) {
  const { messages, locale } = naghihintay ng req.json();
  const result = streamText({
    modelo: anthropic('claude-3-5-haiku-20241022'),
    system: SYSTEM_PROMPT,
    mga mensahe: augmentedMessages,
  });
  ibalik ang resulta.toDataStreamResponse();
}
```

```typescript
// Client-side: mga bahagi/AiChat.tsx
'gamitin ang kliyente';
mag-import ng { useChat } mula sa '@ai-sdk/react';

export function AiChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });
  // Chat UI na may mga streaming na tugon
}
```

**Pagpili ng Modelo ni Claude para sa Hackathon:**

| Modelo | Input/1M token | Output/1M token | Pinakamahusay Para sa |
|---------------------|----------------|-------------------|----------|
| Claude Haiku 4.5 | $1.00 | $5.00 | **Mga tugon sa chat (INIREREKOMENDASYON)** |
| Claude Soneto 4.5 | $3.00 | $15.00 | Masalimuot na pangangatwiran |
| Claude Opus 4.5 | $5.00 | $25.00 | Overkill para sa chat |

**Rekomendasyon:** Claude Haiku 4.5 -- mabilis (mababang latency para sa streaming), mura (mahusay para sa badyet ng hackathon), at may sapat na kakayahan para sa resource Q&A at pangkalahatang gabay.

**System Prompt (Safety-First para sa Health Info):**
```
Isa kang supportive AI assistant na tumutulong sa mga imigranteng magulang ng mga bata
may Autism Spectrum Disorder (ASD). Nagbibigay ka ng impormasyon tungkol sa:
- Mga mapagkukunan ng ASD, mga therapy, at mga programang pang-edukasyon
- Pag-navigate sa US healthcare at education system
- Mga proseso ng IEP (Individualized Education Program).
- Mga available na programa ng suporta ng gobyerno at nonprofit
- Pangkalahatang mga milestone sa pag-unlad

KRITIKAL NA MGA GABAY SA KALIGTASAN:
- HINDI ka doktor. Laging inirerekomenda ang pagkonsulta sa mga propesyonal sa pangangalagang pangkalusugan.
- Huwag kailanman mag-diagnose o magmungkahi ng mga partikular na medikal na paggamot.
- Palaging magsama ng disclaimer kapag tinatalakay ang mga paksang medikal/development.
- Kung ang isang gumagamit ay naglalarawan ng isang medikal na emerhensiya, idirekta sa kanila na tumawag sa 911.
- Maging sensitibo sa kultura at iwasan ang mga pagpapalagay tungkol sa istruktura ng pamilya.
- Gumamit ng simple, malinaw na wika.
- Kapag hindi sigurado, sabihin ang "Hindi ko alam" sa halip na manghula.
- Huwag kailanman mangolekta o humingi ng personal na impormasyon sa pagkakakilanlan.
```

**Supabase pgvector RAG Setup:**
```sql
GUMAWA NG EXTENSION KUNG WALA NA vector;

GUMAWA NG TALAAN ng mga mapagkukunan (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pamagat TEXT NOT NULL,
  nilalaman TEXT NOT NULL,
  kategorya TEXT NOT NULL,
  source_url TEXT,
  estado TEXT,
  wika TEXT DEFAULT 'en',
  pag-embed ng vector(1536),
  nilikha_sa TIMESTAMPTZ DEFAULT NGAYON(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

GUMAWA NG INDEX SA mga mapagkukunan GAMIT ang hnsw (pag-embed ng vector_cosine_ops);

GUMAWA O PALITAN ANG FUNCTION match_resources(
  query_embedding vector(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETURNS TABLE (id UUID, title TEXT, content TEXT, category TEXT, similarity FLOAT)
WIKA plpgsql BILANG $$
MAGSIMULA
  RETURN QUERY
  PUMILI r.id, r.title, r.content, r.category,
    1 - (r.embedding <=> query_embedding) BILANG pagkakatulad
  MULA sa mga mapagkukunan r
  WHERE 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDER BY r.embedding <=> query_embedding
  LIMIT match_count;
WAKAS;
$$;
```

**Modelo ng Pag-embed:** Gamitin ang OpenAI `text-embedding-3-small` ($0.02/1M token, 1536 na dimensyon, 5x na mas mura kaysa ada-002 na may mas mahusay na performance).

**Hackathon Shortcut:** Paunang i-populate ang talahanayan ng mga mapagkukunan ng 20-50 na-curate na mapagkukunan tungkol sa autism, IEP, mga uri ng therapy, at mga organisasyon ng suporta. Bumuo ng mga pag-embed para sa mga ito sa panahon ng pag-setup sa halip na bumuo ng isang buong pipeline ng pag-ingest.

**Mga Pinagmulan:**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Next.js Guide](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude for Healthcare 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI at Vectors](https://supabase.com/docs/guides/ai)
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Bumuo ng RAG kasama si Claude at pgvector](https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG Chatbot na may Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)

---

## 10. ACCESSIBILITY

### WCAG 2.2 Diskarte sa Pagsunod ng AA

**Mga Pangunahing Prinsipyo para sa Audience na Ito:**
1. **Cognitive accessibility** -- Mga nahuhulaang layout, malinaw na visual hierarchy (mahalaga para sa stressed/sobrang mga magulang AT para sa mga pagsasaalang-alang na nauugnay sa autism)
2. **Suporta sa mababang literacy** -- Mga visual na pahiwatig, mga icon sa tabi ng teksto, simpleng wika
3. **Multilingual accessibility** -- Dapat gumana ang mga screen reader sa mga RTL na wika
4. **Accessibility ng motor** -- Malalaking touch target (min 44x44px bawat WCAG 2.2)

**Built-In sa pamamagitan ng shadcn/ui + Radix:**
- Lahat ng mga bahagi ay awtomatikong kasama ang mga tungkulin/attribute ng ARIA
- Pag-navigate sa keyboard (Tab, Enter, Escape, Arrow key)
- Tumuon sa pamamahala at tumuon sa pag-trap sa mga modal
- Mga anunsyo ng screen reader para sa dynamic na nilalaman
- `aria-describedby` na naka-link sa mga error sa pagpapatunay
- Itinakda ang `aria-invalid` sa mga error sa form

**Mga Karagdagang Aklatan:**
```bash
npm install -D @axe-core/react # Nag-log a11y ng mga isyu sa browser console
npm install -D eslint-plugin-jsx-a11y # Lint para sa mga isyu sa a11y
```

**Color Contrast:** Ang WCAG AA ay nangangailangan ng 4.5:1 para sa normal na text, 3:1 para sa malaking text. Magbigay ng high-contrast mode toggle.

**Mga Pagsasaalang-alang sa Disenyo na Partikular sa Autism:**
- Mga Sans-serif na font (hal., Inter, system-ui) -- mas madaling basahin para sa mga neurodivergent na user
- Pare-pareho, predictable nabigasyon sa lahat ng mga pahina
- Minimal na mga animation (paggalang `prefers-reduced-motion`)
- I-clear ang visual na mga hangganan sa pagitan ng mga seksyon
- Iwasan ang sensory overload (naka-mute na mga kulay, walang flashing)
- Simpleng wika toggle para sa pagpapasimple ng nilalaman

```typescript
// Sa mga bahagi, igalang ang mga kagustuhan sa paggalaw:
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
```

**Mga Pinagmulan:**
- [WCAG 2.2 sa React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Color Contrast WCAG 2025 Guide](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [React Accessibility Pinakamahuhusay na Kagawian](https://rtcamp.com/handbook/react-best-practices/accessibility/)

---

## 11. DEPLOYMENT

### Rekomendasyon: Vercel Free Tier

**Bakit Vercel:** Binuo ng mga tagalikha ng Next.js -- kailangan ng zero na configuration. `git push` lang para i-deploy.

**Mga Limitasyon ng Libreng Tier:**
- 100 GB bandwidth/buwan
- 100K serverless function invocations/buwan
- Walang limitasyong pag-deploy
- 10 segundong function timeout (sapat para sa AI streaming)
- Suporta sa custom na domain

**Mga Variable ng Kapaligiran:**
```bash
# .env.local (huwag gawin ito)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # Server-side lang
ANTHROPIC_API_KEY=sk-ant-... # Server-side lang
OPENAI_API_KEY=sk-... # Server-side lang (para sa mga pag-embed)
GOOGLE_TRANSLATE_API_KEY=... # Server-side lang
```

**MAHALAGA:** Ang mga variable na may prefix na `NEXT_PUBLIC_` ay nakalantad sa browser. HINDI dapat may ganitong prefix ang mga API key.

**Mga Tip sa Demo:** I-deploy sa Vercel nang maaga (sa loob ng unang oras). Gumamit ng mga URL ng preview para sa pagbabahagi sa mga hukom. Available ang proteksyon ng password para sa mga deployment ng preview.

**Mga Pinagmulan:**
- [Deploying Next.js sa Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Deploying Next.js Apps 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-4in-between)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

## 12. PRIVACY AT SEGURIDAD

### Privacy-by-Design Architecture

**GUIDING PRINCIPLE:** Ang app na ito ay nagsisilbi sa isang mahinang populasyon. Ang mga paglabag sa privacy ay maaaring magkaroon ng mga tunay na kahihinatnan (panganib sa deportasyon para sa mga hindi dokumentadong pamilya). Ang seguridad ay hindi opsyonal.

**Mga Pagsasaalang-alang sa HIPAA:** Ang app ay HINDI isang sakop na entity at malamang na HINDI kailangan ng ganap na pagsunod sa HIPAA. Gayunpaman, kung nag-iimbak ng anumang impormasyong nauugnay sa kalusugan tungkol sa mga bata, ituring ito bilang sensitibo. Pinakamahusay na diskarte: i-minimize kung ano ang iniimbak mo sa server-side.

**Mga Pagsasaalang-alang sa COPPA (Mga Batang Wala pang 13 taong gulang):** Kung ang mga magulang lang ang gumagamit, hindi gaanong mahigpit ang COPPA ngunit may kaugnayan pa rin sa pag-iimbak ng data ng mga bata. Ang 2025 COPPA update ay nagpapakilala ng mas mahigpit na mga kinakailangan sa pag-minimize ng data. **Rekomendasyon:** Idisenyo ang app para sa MAGULANG lamang, hindi para sa mga bata na direktang gamitin.

**Arkitektura ng Data -- Ano ang Iimbak Kung Saan:**

| Uri ng Data | Lokasyon ng Storage | Pag-encrypt |
|-----------|-----------------|------------|
| Pangalan ng bata | Client-side (localStorage/IndexedDB) | Opsyonal na panig ng kliyente AES-256 |
| Diagnosis ng bata | Client-side | AES-256 client-side encryption |
| Mga kasanayan ng bata / milestones | Supabase (naka-encrypt sa pahinga) | Supabase default |
| Mga post sa forum | Supabase | Sa pahinga (Supabase default) |
| Kasaysayan ng chat ng AI | Client-side lang (sessionStorage) | Pansamantala, hindi natuloy |
| Ang gustong wika ng user | Metadata ng user ng Supabase | Pamantayan |
| Mga anonymous na token ng user | Supabase auth | Pamantayan ng JWT |

**Mga Patakaran ng RLS:**
```sql
-- Makakakita lang ang mga user ng sarili nilang profile ng anak
GUMAWA NG PATAKARAN "Maaaring tingnan ng mga user ang sariling mga anak"
  SA child_profiles PARA PUMILI
  PAGGAMIT (auth.uid() = parent_id);

-- Ang mga hindi kilalang user ay makakabasa ng mga post sa forum
GUMAWA NG PATAKARAN "Makakabasa ng mga post ang sinuman"
  SA forum_posts PARA PUMILI
  PAGGAMIT (is_moderated = false);

-- Tanging mga authenticated na user lang ang makakapag-post
GUMAWA NG PATAKARAN "Maaaring mag-post ang mga authenticated na user"
  SA forum_posts PARA SA INSERT
  WITH CHECK (auth.uid() IS NOT NULL);
```

**Ano ang HINDI Dapat Gawin:**
- HUWAG mag-imbak ng katayuan sa imigrasyon kahit saan, kailanman
- HUWAG nangangailangan ng mga tunay na pangalan
- HUWAG mag-imbak ng mga IP address sa mga log ng application
- HUWAG gumamit ng tracking analytics (walang Google Analytics -- gumamit ng Plausible o wala)
- HUWAG mag-imbak ng AI chat na mga pag-uusap sa server-side
- HUWAG nangangailangan ng mga serbisyo sa lokasyon

**Mga Pinagmulan:**
- [HIPAA at Health Apps](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [Pagsunod sa COPPA 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Zero-Knowledge Health App Guide](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Supabase RLS Complete Guide 2026](https://vibeappscanner.com/supabase-row-level-security)

---

## 13. HACKATHON STRATEGY & TIME BUDGET

### 10-Oras na Plano sa Pagbuo (8:30 AM - 6:30 PM)

**Pag-prioritize ng Feature (MoSCoW Method):**

| Priyoridad | Tampok | Katayuan | Est. Oras |
|----------|---------|--------|-----------|
| **DAPAT** | Multi-language UI (EN + ES + AR) | Buuin nang buo | 1.5 oras |
| **DAPAT** | AI Chat Assistant (na may RAG) | Buuin nang buo | 2 oras |
| **DAPAT** | Resource Library (naba-browse + nahahanap) | Buuin nang buo | 1 oras |
| **DAPAT** | Anonymous + phone auth | Buuin nang buo | 1 oras |
| **DAPAT** | Profile ng bata na may pagsubaybay sa kasanayan | Buuin nang buo | 1.5 oras |
| **Dapat** | Forum ng komunidad | Bumuo ng basic (walang real-time) | 1 oras |
| **Dapat** | PWA offline na pag-access | Build (Serwist setup) | 0.5 oras |
| **PWEDE** | Pagsasalin ng post ng forum | Stub na may kunwaring | 0.5 oras |
| **PWEDE** | Dark mode / mataas na contrast | Mabilis na toggle | 0.25 oras |
| **HINDI** | Full moderation system | Demo mock lang | -- |
| **HINDI** | Mga push notification | Laktawan nang buo | -- |
| **HINDI** | Nilalaman ng video | Laktawan nang buo | -- |

### Detalyadong Iskedyul

```
8:30 - 9:00 (30 min) PROJECT SETUP
  - Scaffold na may create-t3-app o Nextbase starter
  - Paglikha ng proyekto ng Supabase + mga talahanayan
  - Vercel deployment pipeline (i-deploy ang walang laman na shell)
  - I-install ang mga core deps
  - Na-configure ang mga variable ng kapaligiran

9:00 - 10:00 (60 min) PUNDASYON
  - Layout component na may i18n (header, nav, language switcher)
  - naka-install na mga bahagi ng shadcn/ui
  - Naka-wire ang suporta sa RTL
  - Supabase auth: anonymous + email sign-in UI
  - Istruktura ng mga file ng pagsasalin (EN + ES + AR)

10:00 - 11:30 (90 min) CORE FEATURE #1: AI CHAT
  - Pag-setup ng Vercel AI SDK + Claude Haiku
  - ruta ng API para sa pakikipag-chat sa streaming
  - Bahagi ng Chat UI na may useChat hook
  - System prompt na may mga guardrail sa kaligtasan
  - Pre-populate 20 mapagkukunan sa pgvector
  - RAG pipeline (naka-embed na query -> paghahanap -> augment prompt)

11:30 - 12:00 (30 min) MID-MORNING DEPLOY + TEST
  - I-deploy sa Vercel
  - Pagsubok sa mobile
  - Ayusin ang mga kritikal na bug

12:00 - 12:30 (30 min) LUNCH

12:30 - 1:30 (60 min) CORE FEATURE #2: RESOURCE LIBRARY
  - Mga resource card na may pag-filter ng kategorya
  - Pag-andar ng paghahanap
  - Mga pahina ng detalye ng mapagkukunan
  - Data ng binhi: 20-50 na na-curate na mapagkukunan

1:30 - 3:00 (90 min) PANGUNAHING FEATURE #3: PROFILE NG BATA + MGA KASANAYAN
  - Form ng paglikha ng profile ng bata
  - Mga bahagi ng skill card
  - Milestone tracking UI
  - Imbakan sa panig ng kliyente para sa sensitibong data
  - View ng dashboard ng profile

3:00 - 4:00 (60 min) FEATURE #4: COMMUNITY FORUM (BASIC)
  - Forum post list view
  - Lumikha ng post form
  - Pangunahing sistema ng komento
  - Organisasyong nakabatay sa kategorya

4:00 - 4:30 (30 min) PWA + MGA PAGSASALIN
  - Setup ng manggagawa sa serbisyo ng Serwist
  - Punan ang mga translation key para sa ES at AR
  - Subukan ang layout ng RTL gamit ang Arabic

4:30 - 5:30 (60 min) POLISH & DEMO PREP
  - Ayusin ang mga bug sa UI
  - Magdagdag ng mga estado ng paglo-load at paghawak ng error
  - Toggle ng high contrast mode (kung oras)
  - Kumuha ng mga screenshot para sa pagtatanghal
  - Record demo video backup

5:30 - 6:00 (30 min) FINAL DEPLOY + PRESENTATION
  - Panghuling pag-deploy ng Vercel
  - Subukan ang lahat ng mga tampok end-to-end
  - Maghanda ng 3 minutong pitch script

6:00 - 6:30 (30 min) BUFFER / PRESENTATION
```

### Ano ang Kutyain/Stub:
- **Forum moderation:** Itago lang ang mga naiulat na post na may flag, walang admin panel
- **Pagsasalin ng forum:** Ang button na "Isalin" ay nagpapakita ng paglo-load pagkatapos ay orihinal na teksto (o Google Translate kung oras)
- **Daloy ng pag-reset ng password:** Gumamit ng mga default na email ng Supabase
- **Mga avatar ng user:** Mga inisyal o default na icon, walang pag-upload
- **Admin dashboard:** Laktawan nang buo

### Mga Tip sa Demo Optimization:
1. **Start with the story** -- "Kilalanin si Fatima, isang Syrian na ina na kakalipat lang sa US. Ang kanyang 4 na taong gulang na anak ay kamakailang na-diagnose na may autism. Hindi siya nagsasalita ng Ingles. Hindi niya alam kung saan magsisimula."
2. **Ipakita ang switch ng wika** -- Lumipat mula sa English papuntang Arabic nang live. Ang RTL flip ay biswal na kahanga-hanga sa mga hukom.
3. **I-demo ang AI chat** -- Itanong ito sa Spanish. Ipakita ito sa pagbibigay ng mga mapagkukunan.
4. **Ipakita ang offline na kakayahan** -- I-off ang WiFi, ipakita na gumagana pa rin ang app.
5. **Bigyang-diin ang privacy** -- "Walang tunay na pangalan ang kailangan. Walang kinakailangang email. Magagamit niya ang app na ito nang ligtas."

**Mga Pinagmulan:**
- [From Zero to Demo in 36 Oras](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [MVP Feature Prioritization](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Mga Tip sa Demo ng Hackathon (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Gabay sa Hackathon Pitch Deck](https://www.inknarrates.com/post/hackathon-pitch-deck)

---

## 14. BOILERPLATE & TEMPLATES

### Opsyon 1: create-t3-app (INIREREKOMENDA para sa mga team na pamilyar sa tRPC)
```bash
npx create-t3-app@pinakabagong autism-bridge --typescript --tailwind --trpc --prisma
```
- GitHub: https://github.com/t3-oss/create-t3-app
- Kasama ang: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- Idagdag mo ang: Supabase, next-intl, shadcn/ui, Vercel AI SDK

### Opsyon 2: Nextbase Starter (INIREREKOMENDA para sa mas simpleng setup)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Kasama ang: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query
- Idagdag mo ang: next-intl, shadcn/ui, Vercel AI SDK, Prisma (opsyonal)

### Opsyon 3: Vercel Supabase Starter
- Template: https://vercel.com/templates/next.js/supabase
- Opisyal na template ng Vercel/Supabase na may SSR auth

### Opsyon 4: supa-next-starter
- GitHub: https://github.com/michaeltroya/supa-next-starter
- Kasama ang: Next.js, Supabase, Tailwind, shadcn/ui (nakasama na)

### Pagkatapos ng Scaffolding, Magdagdag ng:
```bash
npm install next-intl rtl-detect
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm install @serwist/next @serwist/precaching @serwist/sw
npx shadcn@pinakabagong init
npx shadcn@pinakabagong add button card dialog input form sheet tabs avatar badge accordion command toast
npm install -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
```

### Mga Sanggunian na Proyekto:
- **supabase-comments-extension** (GitHub: malerba118/supabase-comments-extension) -- Mga komento, tugon, reaksyon
- **ojasskapre/nextjs-starter-template** -- Next.js + Supabase + LLM chat interface
- **shwosner/realtime-chat-supabase-react** -- Realtime chat sa Supabase

---

## 15. DISENYO NG SCHEMA

### Kumpletuhin ang Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

mapagkukunan ng data db {
  provider = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// USER & Authentication
modelong UserProfile {
  id String @id @default(uuid())
  authId String @natatangi
  DisplayName String?
  preferredLocale String @default("en")
  nilikhaAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  mga bata ChildProfile[]
  forumPosts ForumPost[]
  forumComments ForumComment[]
  upvote ForumUpvote[]
}

// CHILD PROFILES & SKILL TRACKING
modelong ChildProfile {
  id String @id @default(uuid())
  parentId String
  parent UserProfile @relation(fields: [parentId], references: [id])
  palayaw na String
  birthYear Int?
  diagnosisPetsa PetsaOras?
  kasanayan SkillCard[]
  milestone Milestone[]
  nilikhaAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  @@index([parentId])
}

modelo SkillCategory {
  id String @id @default(uuid())
  nameKey String
  icon String?
  sortOrder Int @default(0)
  kasanayan SkillCard[]
}

modelo ng SkillCard {
  id String @id @default(uuid())
  childId String
  child ChildProfile @relation(mga field: [childId], mga sanggunian: [id], onDelete: Cascade)
  categoryId String
  kategorya SkillCategory @relasyon(mga field: [categoryId], mga sanggunian: [id])
  nameKey String
  level Int @default(0)
  mga tala String?
  lastAssessed DateTime @default(now())
  nilikhaAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  @@index([childId])
  @@index([categoryId])
}

modelong Milestone {
  id String @id @default(uuid())
  childId String
  child ChildProfile @relation(mga field: [childId], mga sanggunian: [id], onDelete: Cascade)
  titleKey String
  String ng paglalarawan?
  achievedDate DateTime?
  kategorya String
  nilikhaAt DateTime @default(now())
  @@index([childId])
}

// RESOURCES (vector embedding na pinangangasiwaan sa pamamagitan ng raw SQL / pgvector)
Model Resource {
  id String @id @default(uuid())
  String ng pamagat
  nilalaman String @db.Text
  buod String?
  kategorya String
  subcategory String?
  sourceUrl String?
  estado String?
  wika String @default("en")
  mga tag String[]
  nilikhaAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  @@index([kategorya])
  @@index([estado])
}

// FORUM / KOMUNIDAD
modelo ForumCategory {
  id String @id @default(uuid())
  nameKey String
  paglalarawanKey String?
  icon String?
  sortOrder Int @default(0)
  mga post ForumPost[]
}

modelo ForumPost {
  id String @id @default(uuid())
  categoryId String
  kategorya ForumCategory @relasyon(mga patlang: [categoryId], mga sanggunian: [id])
  authorId String
  may-akda UserProfile @relation(fields: [authorId], references: [id])
  isAnonymous Boolean @default(false)
  String ng pamagat
  nilalaman String @db.Text
  originalLang String @default("en")
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  isPinned Boolean @default(false)
  isHidden Boolean @default(false)
  reportCount Int @default(0)
  mga komento ForumKomento[]
  upvote ForumUpvote[]
  mga pagsasalin ForumTranslation[]
  nilikhaAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  @@index([categoryId])
  @@index([authorId])
  @@index([createdAt])
}

modelo ForumComment {
  id String @id @default(uuid())
  postId String
  post ForumPost @relation(fields: [postId], references: [id], onDelete: Cascade)
  parentId String?
  parent ForumComment? @relation("CommentReplies", fields: [parentId], references: [id])
  tumugon ForumComment[] @relation("CommentReplies")
  authorId String
  may-akda UserProfile @relation(fields: [authorId], references: [id])
  isAnonymous Boolean @default(false)
  nilalaman String @db.Text
  originalLang String @default("en")
  upvoteCount Int @default(0)
  isHidden Boolean @default(false)
  reportCount Int @default(0)
  upvote ForumUpvote[]
  mga pagsasalin ForumTranslation[]
  nilikhaAt DateTime @default(now())
  @@index([postId])
  @@index([parentId])
}

modelo ForumUpvote {
  id String @id @default(uuid())
  String ng userId
  user UserProfile @relation(fields: [userId], references: [id])
  postId String?
  mag-post ng ForumPost? @relation(fields: [postId], references: [id], onDelete: Cascade)
  commentId String?
  komento ForumKomento? @relation(fields: [commentId], references: [id], onDelete: Cascade)
  nilikhaAt DateTime @default(now())
  @@unique([userId, postId])
  @@unique([userId, commentId])
}

modelong ForumTranslation {
  id String @id @default(uuid())
  postId String?
  mag-post ng ForumPost? @relation(fields: [postId], references: [id], onDelete: Cascade)
  commentId String?
  komento ForumKomento? @relation(fields: [commentId], references: [id], onDelete: Cascade)
  targetLang String
  isinalin na String ng Pamagat?
  isinalinContent String @db.Text
  nilikhaAt DateTime @default(now())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
```

### Mga Kategorya ng Data ng Binhi

**Mga Kategorya ng Kasanayan:** Komunikasyon, Mga Kasanayang Panlipunan, Pang-araw-araw na Pamumuhay, Mga Kasanayan sa Motor, Akademiko, Pagproseso ng Sensory, Regulasyon ng Emosyonal

**Mga Kategorya ng Forum:** Mga Introduction at Welcome, Therapy & Treatments (ABA/OT/Speech), Tulong sa Paaralan at IEP, Mga Tip sa Pang-araw-araw na Buhay, Mga Tanong sa Legal at Imigrasyon, Navigation sa Pangangalaga sa Kalusugan, Mga Kwento ng Tagumpay at Milestone, Pangkalahatang Suporta

**Mga Kategorya ng Resource:** Mga Uri at Provider ng Therapy, Edukasyon at IEP Resources, Mga Legal na Karapatan at Adbokasiya, Tulong Pinansyal, Mga Organisasyon ng Komunidad, Mga Online na Tool at App, Mga Aklat at Media, Mga Mapagkukunan na Partikular sa Estado

---

## PACKAGE.JSON DEPENDENCY SUMMARY

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

## MABILIS NA SANGGUNIAN: MGA PANGUNAHING LINK NG DOKUMENTASYON

| Tool | Dokumentasyon |
|------|--------------|
| Susunod.js 16 | https://nextjs.org/docs |
| Supabase | https://supabase.com/docs |
| Supabase Auth | https://supabase.com/docs/guides/auth |
| Supabase Realtime | https://supabase.com/docs/guides/realtime |
| Supabase pgvector | https://supabase.com/docs/guides/ai |
| susunod na-intl | https://next-intl.dev/ |
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

Sinasaklaw ng pananaliksik na ito ang lahat ng 10 lugar na iyong hiniling at ang diskarte sa hackathon, arkitektura ng privacy, mga opsyon sa boilerplate, at kumpletong disenyo ng schema. Ang stack ay idinisenyo upang ang bawat serbisyo ay magkasya sa loob ng mga libreng tier para sa hackathon, ang pagpapatotoo ay nagpapanatili ng privacy para sa mga hindi dokumentadong user, at ang badyet sa oras ay makatotohanan para sa isang 10-oras na build. Sinubukan kong i-save ito bilang isang file sa `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` ngunit tinanggihan ang pahintulot sa pagsulat ng file. Kung gusto mong i-save ko ito sa disk, maaari mong ibigay ang pahintulot na Sumulat at gagawa ako ng file.
---

## Karagdagang Pananaliksik (Na-update noong Marso 2026)

### Pinakamahusay na i18n Library para sa 10+ Wika (React + TypeScript)

**Inirerekomenda: react-i18next** — 2.1M lingguhang pag-download, pinakasikat na React i18n solution.
- Binuo sa i18next ecosystem na may mga plugin para sa pagtuklas ng wika, pag-load ng async, mga kumplikadong plural
- Bundle: 22.2 kB (i18next 15.1kB + react-i18next 7.1kB)
- Sinusuportahan ang mga file ng pagsasalin ng JSON - madaling magdagdag ng mga wika nang paunti-unti
- Pinagmulan: [Blog ng Parirala](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)

**Magaan na alternatibo: LinguiJS** — 10.4 kB sa kabuuan (kalahati ng laki), ICU message syntax, TypeScript support.

**Para sa bilis ng hackathon**: react-i18next with JSON translation file. Magsimula sa English + Spanish, magdagdag ng iba pang mga wika sa pamamagitan ng JSON file. Gamitin ang Google Translate API o DeepL para sa mga paunang pagsasalin.

Pinagmulan: [GloryWebs 2026 Guide](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)

### Mga Limitasyon sa Libreng Tier ng Supabase (2026)

- **2 aktibong proyekto** (naka-pause pagkatapos ng 1 linggong hindi aktibo)
- **500 MB** imbakan ng database (nakabahaging CPU)
- **2 GB** paglabas ng database/buwan
- **50,000** buwanang aktibong user (auth)
- **1 GB** imbakan ng file
- **2 GB** paglabas ng storage
- **500,000** edge function invocations/month
- Walang mga backup, walang SLA sa libreng plano

Source: [Supabase Pricing](https://supabase.com/pricing), [UI Bakery Breakdown](https://uibakery.io/blog/supabase-pricing)

**Para sa hackathon**: 500 MB ay higit pa sa sapat. Kahit na may 10,000 user ang bawat isa na nag-iimbak ng profile + data ng bata + mga post sa forum, gagamit ka ng <50 MB. Napakabigay din ng 50K MAU na limitasyon sa pagpapatotoo para sa isang demo.
