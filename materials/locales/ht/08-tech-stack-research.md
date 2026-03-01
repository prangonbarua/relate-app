# Hackathon Tech Stack Research: Imigran Parents + Autism App

**Dat:** 2026-02-28 | **Tan konstriksyon:** 10 èdtan (8:30 AM - 6:30 PM)

---

## 1. REZIME PILE REKÒMANDE

| Kouch | Teknoloji | Poukisa |
|-------|-----------|-----|
| **Kad** | Next.js 16 (App Routeur) | SSR pou SEO, wout API, sipò PWA, Vercel deplwaye |
| **Echafodaj** | `create-t3-app` oswa Nextbase starter | Chemen ki pi rapid nan tape plen-pile |
| **Lang** | TypeScript nan tout | Sekirite tip fen-a-fen |
| **Backend API** | tRPC (via pile T3) OSWA wout API Next.js + Supabase kliyan | Kalite-san danje, zewo boilerplate |
| **Baz done** | Supabase (PostgreSQL) | Nivo gratis, otorizasyon, an tan reyèl, pgvector, RLS |
| **ORM** | Prisma | Kalite oto-pwodwi, zouti migrasyon |
| **Otorize** | Supabase Auth | Enskripsyon anonim, telefòn OTP, imèl/modpas, pa gen okenn PII obligatwa |
| **i18n** | pwochen-intl | Entegrasyon natif natal Next.js, sipò RSC, ti pake, sipò RTL |
| **UI** | shadcn/ui + Tailwind CSS | Konpozan kopye-kole, an komen, Radix a11y, RTL pare |
| **AI Chat** | Vercel AI SDK + Claude API (Haiku 4.5) | Difizyon, sèvi ak zenChat, pri-efikas |
| **Vekteur DB** | Supabase pgvector | Menm baz done, pa gen sèvis siplemantè, RLS sou vektè |
| **Embeddings** | OpenAI tèks-embedding-3-ti | $0.02/1M marqueur, 5x pi bon mache pase ada-002 |
| **Tradiksyon API** | API tradiksyon Google Cloud | Gratis 500K karaktè/mwa, 130+ lang, pa gen okenn depo done |
| **PWA** | Serwist (@serwist/next) | Modèn pwochen-pwa siksesè, sipò offline |
| **Deplwaman** | Vercel (niveau gratis) | Zewo-config Next.js deplwaye, 100GB Pleasant |
| **Foròm** | Custom ak Supabase Realtime | Mizajou an tan reyèl, RLS pou modération |

**Total Estimasyon Pri Mansyèl (Hackathon/Demo): $0** -- Tout sèvis ki anwo yo gen nivo gratis ase pou yon Demo Hackathon.

---

## 2. REYJI KAD

### Rekòmandasyon: Next.js 16 (App Router)

**Poukisa Next.js sou Vite+React pou aplikasyon sa a:**
- SSR/SSG pou SEO (enpòtan pou paj resous ki ta dwe dekouvri pa paran imigran k ap chèche Google)
- Wout API entegre yo elimine bezwen pou sèvè backend separe
- App Routeur ak React Server Components = zewo kliyan JS pou kontni tradui
- Sipò pou manifest PWA natif natal atravè `app/manifest.ts`
- Deplwaman Vercel se zewo-config
- next-intl travay natif natal ak RSC (tradiksyon rann sèvè-bò = 0 octets pou kliyan)

**Lè Vite ta pi bon:**
- Pi SPA ki pa gen okenn bezwen SEO
- Pi vit demaraj sèvè dev (benefis majinal pou hackathon 10 èdtan)
- Modèl mantal ki pi senp (pa gen distenksyon sèvè/konpozan kliyan)

**Enstalasyon PWA ak Serwist (pwochen siksesè pwa):**
```bash
npm enstale @serwist/next @serwist/precaching @serwist/sw idb
```

Estrateji kle offline:
- **CacheFirst** pou byen estatik (`/_next/static/`) -- Content-hashed, pa janm chanje
- **NetworkFirst** pou repons API ak kontni dinamik
- **StaleWhileRevalidate** pou fichye tradiksyon ak paj resous yo
- IndexedDB pou depo done offline (pwofil timoun, resous sove)

**ENPÒTAN:** ​​Next.js 16 itilize Turbopack pa default, men Serwist mande pou Webpack. Ou pral bezwen konfigirasyon bati a kòmsadwa.

**PWA Manifest** (sipò Next.js entegre):
```typescript
// app/manifest.ts
enpòte kalite { MetadataRoute } soti nan 'next'

ekspòtasyon fonksyon default manifest(): MetadataRoute.Manifest {
  retounen {
    non: 'ASD Bridge',
    short_name: 'ASD Bridge',
    deskripsyon: 'Sipòte fanmi imigran ki gen timoun otis',
    start_url: '/',
    ekspozisyon: 'otonòm',
    background_color: '#ffffff',
    theme_color: '#4F46E5',
    ikon: [
      { src: '/icon-192.png', gwosè: '192x192', kalite: 'image/png'},
      { src: '/icon-512.png', gwosè: '512x512', kalite: 'image/png'},
    ],
  }
}
```

**Sous:**
- [Vite vs Next.js Konparezon konplè 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Next.js PWA Gid](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Serwist Kòmanse](https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA ak Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Konstwi PWA nan Next.js ak Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)

---

## 3. TYPESCRIPT BACKEND

### Rekòmandasyon: Wout API Next.js + Supabase Kliyan (prensipal) OSWA tRPC (si w ap itilize T3)

**Opsyon A: Wout API Next.js + Supabase (PI SIMPLES pou hackathon)**
- Pa gen sèvè backend separe
- Supabase JS kliyan okipe demann DB, otorizasyon, an tan reyèl
- Wout API pou chat AI, apèl API tradiksyon, ak nenpòt lojik bò sèvè
- Pi rapid yo mete kanpe

**Opsyon B: tRPC atravè T3 Stack (PI bon DX si ekip la konnen li)**
- Sekirite tip fen-a-fen ant frontend ak backend
- Oto-konplete pou apèl API nan entèfas la
- Travay ak Prisma pou kalite pwodwi yo
- `create-t3-app` echafodaj tout bagay

```bash
# Opsyon A: Plain Next.js + Supabase
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir

# Opsyon B: T3 Stack
npx create-t3-app@latest my-app
# Chwazi: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
```

**Poukisa PA Eksprime / Fastifye:**
- Ajoute konpleksite deplwaman (sèvè separe ak lame)
- Pa gen okenn benefis sou wout API Next.js pou ka itilize sa a
- Siplemantè 30-60 minit nan konfigirasyon ou pa genyen

**Poukisa PA san sèvè (Fonksyon Lambda/Netlify):**
- Wout API Next.js sou Vercel ARE san sèvè pa default
- Pa bezwen pou enfrastrikti fonksyon separe

**Sous:**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [T3 Stack 2025 Guide](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Kreye aplikasyon T3] (https://create.t3.gg/)
- [tRPC Ofisyèl](https://trpc.io/)

---

## 4. BAZ DONE

### Rekòmandasyon: Supabase (PostgreSQL)

**Poukisa Supabase genyen pou pwojè sa a:**

| Karakteristik | Supabase | Firebase | PlanetScale |
|---------|----------|----------|-------------|
| Gratis nivo DB depo | 500 MB | 1 GB (Spark) | Sispann nivo gratis |
| Otorite enkli | Wi (50K MAU gratis) | Wi (50K MAU gratis) | Non |
| Tan reyèl | Wi (Chanjman Postgres) | Wi (pi bon nan klas la) | Non |
| Rechèch vektè (pgvector) | Wi, entegre | Non | Non |
| Sipò SQL | PostgreSQL konplè | NoSQL sèlman | MySQL |
| RLS (Sekirite Nivo Ranje) | Wi, ki baze sou SQL | Règ sekirite Firebase | Non |
| Anonim otorizasyon | Wi, entegre | Wi | N/A |
| Sous louvri | Wi | Non | Pasyèlman |
| Transparans done | Plen (se Postgres) | Machann fèmen-nan | MySQL konpatib |

**Supabase Gratis Nivo (2026):**
- 2 pwojè aktif
- 500 MB depo baz done
- 2 GB baz done sòti
- 50,000 MAU (otantifikasyon)
- 1 GB depo dosye
- 500,000 envokasyon fonksyon kwen
- Pa gen kat kredi obligatwa, pa janm ekspire

**Poukisa Supabase sou Firebase pou aplikasyon sa a:**
1. pgvector pou rechèch resous AI (pa gen okenn sèvis siplemantè nesesè)
2. SQL konplè pou demann konplèks (jalons timoun, swiv konpetans)
3. RLS pou aksè fowòm anonim pou konsève vi prive
4. Transparans done (pa fèmen nan ekosistèm Google)
5. Pi bon pou done relasyon (itilizatè -> timoun -> konpetans -> jalons)

**Entegrasyon Prisma:**
```prisma
sous done db {
  founisè = "postgresql"
  url = anv ("DATABASE_URL")
  directUrl = env ("DIRECT_URL")
}
```

**Sous:**
- [Revizyon Supabase vs Firebase 2026] (https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-which-one-actually-scales-with-you-2374)
- [Supabase Pricing 2026](https://uibakery.io/blog/supabase-pricing)
- [Supabase Gratis Nivo Limit] (https://supabase.com/pricing)

---

## 5. ANTIKASYON

### Rekòmandasyon: Supabase Auth ak Anonymous Sign-In + Telefòn OTP + Imèl/Modpas

**PRINSIP KRITIK DESIGN pou odyans sa a:**
Aplikasyon an dwe ka itilize SAN yo pa bay enfòmasyon ki idantifye moun pèsonèlman. Anpil paran imigran (sitou san papye) p ap sèvi ak yon aplikasyon ki mande idantite gouvènman an/SSN, verifikasyon non reyèl, koleksyon adrès, oswa imèl obligatwa.

**Niveau Otantifikasyon (Konfiyans pwogresif):**

| Nivo | Metòd | Ki sa li debloke | PII Obligatwa |
|------|--------|----------------|--------------|
| 1 | Enskripsyon anonim | Browse resous yo, sèvi ak AI chat, gade fowòm | Okenn |
| 2 | Telefòn OTP | Afiche nan fowòm, sove pwofil timoun | Nimewo telefòn sèlman |
| 3 | Imèl + modpas | Kont konplè ak rekiperasyon | Adrès imel |

**Supabase Anonymous Auth:**
```typescript
// Siyen an anonim - pa gen okenn PII nesesè
const { done, error } = tann supabase.auth.signInAnonymously ()

// Apre sa, itilizatè a ka konekte yon nimewo telefòn
const { done, error } = tann supabase.auth.updateUser ({
  telefòn: '+1234567890',
})
```

**Enstalasyon OTP telefòn:**
Supabase sipòte otorizasyon telefòn atravè Twilio, MessageBird, Textlocal, ak Vonage. Itilizatè yo resevwa yon PIN 6 chif atravè SMS, ki valab pou 60 segonn.

**Sekirite pou itilizatè anonim:**
- Pèmèt CAPTCHA (Cloudflare Turnstile rekòmande - gratis) pou anpeche abi
- Limit pousantaj ki baze sou IP: 30 demann / èdtan (reglabl nan tablodbò Supabase)
- Règleman RLS yo ka distenge itilizatè anonim ak itilizatè otantifye atravè reklamasyon JWT `is_anonymous`

**Poukisa PA Grefye pou aplikasyon sa a:**
- Pa gen koneksyon anonim entegre
- $0.02/MAU apre 10K (Supabase: 50K gratis)
- Overkill UI pou ka itilize sa a
- Ajoute depandans ekstèn

**Poukisa PA Auth0:**
- Konfigirasyon konplèks pou hackathon
- Pa gen otorizasyon anonim
- Nivo gratis limite a 7,500 MAU

**Sous:**
- [Supabase Anonymous Sign-Ins] (https://supabase.com/docs/guides/auth/auth-anonymous)
- [Konekte telefòn Supabase] (https://supabase.com/docs/guides/auth/phone-login)
- [Clerk vs Supabase Auth](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [Sekirite enskripsyon anonim] (https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)

---

## 6. ENTERNASYONALIZASYON (i18n)

### Rekòmandasyon: next-intl

**Poukisa next-intl sou reyaksyon-i18next oswa reyaji-intl:**

| Karakteristik | pwochen-intl | reyaji-i18next | reyaji-intl |
|---------|-----------|---------------|-------------|
| Next.js App Router sipò | natif natal | Via wrapper | Via wrapper |
| Sipò konpozan sèvè | Bati-an (0 kliyan JS) | Mande konfigirasyon | Mande konfigirasyon |
| Gwosè pake | ~4KB | ~8KB | ~12KB |
| RTL sipò | Bati-an | Manyèl | Manyèl |
| Fòm pliryèl (Arab: 6 fòm) | ICU otomatik | Manyèl konfigirasyon | ICU otomatik |
| Kalite sekirite | TypeScript-premye | Bon | Bon |

**Enstalasyon:**
```bash
npm enstale pwochen-intl rtl-detekte
npm enstale --save-dev @types/rtl-detect
```

** Enstalasyon RTL pou Arab, Farsi, Oudou:**
```typescript
// kwòk/useTextDirection.ts
enpòte { useLocale } soti nan 'next-intl';
enpòte { isRtlLang } soti nan 'rtl-detect';

fonksyon ekspòtasyon useTextDirection () {
  const lokal = useLocale();
  retounen isRtlLang(lokal)? 'rtl': 'ltr';
}

// app/[lokal]/layout.tsx
ekspòte fonksyon default LocaleLayout ({ timoun, paramèt: { lokalizasyon } }) {
  direksyon konst = isRtlLang (lokal) ? 'rtl': 'ltr';
  retounen (
    <html lang={lokal} dir={direksyon}>
      <body>{children</body>
    </html>
  );
}
```

**Estrikti dosye tradiksyon:**
```
mesaj/
  ht/
    common.json # strings UI pataje (bouton, navigasyon, erè)
    auth.json # Konekte, enskripsyon, pwofil
    resources.json # Bibliyotèk resous
    forum.json # Forum/kominote
    ai-chat.json # AI asistan
    child-profile.json # Suivi timoun
    skills.json # Kat konpetans
  ar/ # arab (RTL)
  es/ # Panyòl
  zh/ # Chinwa (Senplifye)
  fa/ # Farsi/Psian (RTL)
  ur/ # Oudou (RTL)
```

** Lang priyorite pou MVP: ** Angle (default), Panyòl, Arab (RTL pou demontre kapasite teknik), Chinwa (Senplifye).

**CSS pou RTL - sèvi ak pwopriyete lojik Tailwind:**
- `pl-4` -> `ps-4` (padding-inline-start)
- `pr-4` -> `pe-4` (padding-inline-end)
- `tèks-gòch` -> `tèks-kòmanse`
- `tèks-dwa` -> `tèks-fen`
- `ml-oto` -> `ms-oto`
- `mr-auto` -> `me-auto`

**Tradiksyon machin pou kontni fowòm:**

| Sèvis | Gratis Nivo | Pri apre gratis | Lang | Konfidansyalite |
|---------|-----------|-----------------|-----------|---------|
| Tradiksyon Google Cloud | 500K karaktè/mwa (pèmanan) | $20/1M karaktè | 130+ | Pa gen done ki estoke/itilize pou fòmasyon |
| DeepL | 500K karaktè/mwa | $25/1M karaktè + $5.49/mois | 30+ | Done nivo gratis yo ka estoke |
| Amazon Translate | 2M karaktè/mwa (12 mwa sèlman) | $15/1M karaktè | 75+ | Pa gen done ki estoke |

**Rekòmandasyon:** API Google Cloud Translation -- nivo pèmanan gratis, pi gwo pwoteksyon lang (130+ lang ki gen ladan tout lang RTL sib), garanti konfidansyalite solid (pa gen okenn done ki estoke oswa itilize pou fòmasyon).

**Sous:**
- [Next-intl Dokimantasyon] (https://next-intl.dev/)
- [Next-intl Complete Gid 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl vs react-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Next.js RTL Sipò] (https://lingo.dev/en/nextjs-i18n/right-to-left-languages)
- [Prix tradiksyon Google Cloud](https://cloud.google.com/translate/pricing)
- [DeepL vs Google Translate](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)

---

## 7. BIBLIYOTÈK KONPONANT UI

### Rekòmandasyon: shadcn/ui + Tailwind CSS

**Poukisa shadcn/ui:**
- Konpozan yo kopye-kole nan pwojè ou a (plen pwopriyetè, pa gen okenn mizajou depandans enkyete sou)
- Bati sou primitif Radix UI (konfòme WAI-ARIA, navigasyon klavye, sipò lektè ekran)
- Tailwind CSS natif natal (pwopriyete lojik pou RTL)
- Plis pase 40 eleman ki disponib
- RTL sipò atravè modèl
- Mòd nwa / limyè bati-an
- Zewo ègzekutabl anlè

**Enstalasyon:**
```bash
npx shadcn@latest init
npx shadcn@latest ajoute bouton kat dyalòg fòm fòm onglè avatar badj akòdeyon lòd pen griye
```

**Eleman kle pou aplikasyon sa a:**
- `Kat` -- Kat resous, kat konpetans, kat pwofil timoun
- `Dyalòg` / `Fèy` -- Entèaksyon modal, chanje lang
- `Fòm` + `Entre` -- Fòm pwofil timoun, kreyasyon pòs fowòm
- `Tabs` -- Navigasyon ant seksyon yo
- `Avatar` -- Ekspozisyon itilizatè fowòm (ak opsyon anonim)
- `Badge` -- Nivo konpetans, tags lang
- `Akòdeyon` -- FAQ, detay resous
- `Kòmand` -- Palèt rechèch pou resous yo
- `Toast` -- Notifikasyon

** Aksesiblite entegre:**
- Tout eleman ki baze sou Radix gen ladan wòl ARIA ak atribi otomatikman
- Navigasyon klavye travay soti nan bwat la (Tab, Antre, Chape, kle flèch)
- Jesyon konsantre ak pyèj konsantre nan modal
- Anons lektè ekran pou kontni dinamik
- `aria-describedby` lye otomatikman sou erè validation
- `aria-invalid` mete sou erè fòm

**Poukisa PA Chakra UI:** Pi lou ègzekutabl (CSS-in-JS), style ki baze sou prop mwens fleksib pase klas sèvis piblik Tailwind, pi ba momantòm ekosistèm nan 2025-2026.

**Poukisa PA Materyèl UI:** Pakèt trè lou, lang konsepsyon Google a ka santi klinik pou yon aplikasyon kominotè, pi difisil pou personnaliser pwofondman.

**Sous:**
- [shadcn/ui Gid 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Konpozan shadcn/ui aksesib](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [React UI Libraries 2025 Comparaison](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)

---

## 8. FÒM / KOMINOTE FAKTI

### Achitekti: Custom Build with Supabase Realtime

**Modèl done (SQL):**
```sql
-- Kategori fowòm yo
KREYE TABLE forum_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_key TEXT NOT NULL,
  description_key TEXT,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  kreye_a TIMESTAMPTZ DEFAULT NOW()
);

-- Posts fowòm (fil)
KREYE TABLE forum_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kategori_id UUID REFERANS forum_categories(id),
  author_id UUID REFERANS auth.users(id),
  is_anonymous BOOLEAN DEFAULT fo,
  display_name TEXT,
  tit TEXT NOT NULL,
  kontni TEXT PA NULL,
  original_language TEXT DEFAULT 'en',
  upvote_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT fo,
  is_moderated BOOLEAN DEFAULT fo,
  kreye_a TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Kòmantè sou pòs yo
KREYE TABLE forum_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERANS forum_posts(id) SOU EFISYE KASKAD,
  parent_id UUID REFERANS forum_comments(id),
  author_id UUID REFERANS auth.users(id),
  is_anonymous BOOLEAN DEFAULT fo,
  display_name TEXT,
  kontni TEXT PA NULL,
  original_language TEXT DEFAULT 'en',
  upvote_count INTEGER DEFAULT 0,
  kreye_a TIMESTAMPTZ DEFAULT NOW()
);

-- Vote pozitif
KREYE TABLE forum_upvotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERANS auth.users(id),
  post_id UUID REFERANS forum_posts(id),
  comment_id UUID REFERANS forum_comments(id),
  kreye_a TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(id_id_utilisateur, id_post),
  UNIQUE(id_id_utilisateur, id_komantè)
);

-- Cached tradiksyon
CREATE TABLE forum_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_type TEXT NOT NULL,
  source_id UUID PA NULL,
  target_language TEXT NOT NULL,
  translated_title TEXT,
  translated_content TEXT NOT NULL,
  kreye_a TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(source_id, target_language)
);
```

**Mizajou an tan reyèl:**
```typescript
const channel = supabase
  .channel('foròm-pòs')
  .on('postgres_chanjman', {
    evènman: 'INSERT',
    schema: 'piblik',
    tab: 'forum_posts',
    filtre: `category_id=eq.${categoryId}`
  }, (chaj) => {
    // Ajoute nouvo pòs nan UI
  })
  .abònman()
```

**Sekirite afiche anonim:**
- Posts ki soti nan itilizatè anonim (Supabase anonim otorizasyon) ka make yon fason diferan
- Règleman RLS tcheke reklamasyon "is_anonymous" nan JWT
- Montre psedonim (egzanp, "Paran #4827") olye de non vid

**Moderasyon (MVP):** Senp bouton rapò sou chak pòs/kòmantè. Drapo admin pou kache kontni rapòte. Avni: modération kontni AI-powered atravè Claude API.

**Tradiksyon sou demann:** Post ki estoke nan lang orijinal yo. Bouton "Tradwi" deklanche API Google Cloud Translation. Tradiksyon an kach nan tablo `forum_translations`. Demann ki vin apre pou menm lang yo te sèvi nan kachèt.

**Sous:**
- [Supabase Realtime] (https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [Konstwi fowòm kominotè ak Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)

---

## 9. AI INTEGRASYON

### Achitekti: Vercel AI SDK + Claude API + Supabase pgvector RAG

**Flux Done:**
```
Kesyon Itilizatè a (plitiling)
  -> [Google Translate to English] (si se pa angle)
  -> [Jenere Entègrasyon] (tèks-entègrasyon-3-ti)
  -> [Supabase pgvector Rechèch resanblans]
  -> [Retrieved Kontèks Dokiman]
  -> [Claude API ak System Prompt + Kontèks + Kesyon itilizatè]
  -> [Repons nan lang angle]
  -> [Google Translate nan lang itilizatè a] (si se pa angle)
  -> Montre itilizatè a (difize)
```

**Enstalasyon Vercel AI SDK:**
```bash
npm enstale ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```

```typescript
// app/api/chat/route.ts
enpòte { anthropic } soti nan '@ai-sdk/anthropic';
enpòte { streamText } soti nan 'ai';

ekspòtasyon fonksyon async POST (demann: demann) {
  const {mesaj, lokalizasyon} = tann req.json();
  rezilta konstan = streamText ({
    modèl: anthropic ('claude-3-5-haiku-20241022'),
    sistèm: SYSTEM_PROMPT,
    mesaj: augmentedMessages,
  });
  retounen result.toDataStreamResponse();
}
```

```typescript
// Kliyan-bò: konpozan/AiChat.tsx
'itilize kliyan';
enpòte { useChat } soti nan '@ai-sdk/react';

fonksyon ekspòtasyon AiChat () {
  const {mesaj, antre, handleInputChange, handleSubmit, isLoading } = itilizeChat({
    api: '/api/chat',
  });
  // Chat UI ak repons difizyon
}
```

**Seleksyon modèl Claude pou Hackathon:**

| Modèl | Antre/1M marqueur | Sòti/1M marqueur | Pi bon pou |
|-------|----------------|-------------------|----------|
| Claude Haiku 4.5 | $1.00 | $5.00 | **Repons chat (REKÒMANDE)** |
| Claude Sonnet 4.5 | $3.00 | $15.00 | Rezònman konplèks |
| Claude Opus 4.5 | $5.00 | $25.00 | Overkill pou chat |

**Rekòmandasyon:** Claude Haiku 4.5 -- vit (tansi ki ba pou difizyon), bon mache (bon anpil pou bidjè Hackathon), ak ase ki kapab pou resous Q&A ak konsèy jeneral.

**Sistèm èd memwa (Safety-First pou enfòmasyon sou sante):**
```
Ou se yon asistan AI ki bay sipò k ap ede paran imigran timoun yo
ak Twoub Spectrum Otis (ASD). Ou bay enfòmasyon sou:
- Resous ASD, terapi, ak pwogram edikasyon
- Navige sistèm swen sante ak edikasyon Etazini
- Pwosesis IEP (Program Edikasyon Endividyalize).
- Pwogram sipò gouvènman ak san bi likratif ki disponib
- Etap devlopman jeneral yo

GID KRITIKA POU SEKIRITE:
- Ou PA yon doktè. Toujou rekòmande konsilte pwofesyonèl swen sante yo.
- Pa janm fè dyagnostik oswa sijere tretman medikal espesifik.
- Toujou mete yon non responsabilite lè w ap diskite sou sijè medikal/devlopman.
- Si yon itilizatè dekri yon ijans medikal, mande yo pou yo rele 911.
- Fè kiltirèl sansib epi evite sipozisyon sou estrikti fanmi an.
- Sèvi ak langaj ki senp, ki klè.
- Lè ou pa sèten, di "Mwen pa konnen" olye ke devine.
- Pa janm kolekte oswa mande enfòmasyon pèsonèl idantifikasyon.
```

**Supabase pgvector RAG Enstalasyon:**
```sql
KREYE ekstansyon si pa egziste vektè;

KREYE TABLE resous (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tit TEXT NOT NULL,
  kontni TEXT PA NULL,
  kategori TEXT PA NULL,
  source_url TEXT,
  eta TÈKS,
  lang TEXT DEFAULT 'en',
  vektè entegre (1536),
  kreye_a TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

KREYE ENDEX SOU resous LÈVI AK hnsw (embedding vector_cosine_ops);

KREYE OSWA RANplase Fonksyon match_resources(
  vektè query_embedding (1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETOU TABLE (ID UUID, tit TEXT, kontni TEXT, kategori TEXT, resanblans FLOAT)
LANG plpgsql AS $$
KÒMANSE
  RETOUNEN KÈY
  SELECT r.id, r.title, r.content, r.category,
    1 - (r.embedding <=> query_embedding) AS resanblans
  SOTI nan resous r
  KOTE 1 - (r.embedding <=> query_embedding) > match_threshold
  LÒD BY r.embedding <=> query_embedding
  LIMIT match_count;
FEN;
$$;
```

**Embedding Modèl:** Sèvi ak OpenAI `text-embedding-3-small` ($0.02/1M tokens, 1536 dimansyon, 5x pi bon mache pase ada-002 ak pi bon pèfòmans).

**Hackathon Shortcut:** Pre-peple tablo resous la ak 20-50 resous konsène sou otis, IEP, kalite terapi, ak òganizasyon sipò. Jenere embeddings pou sa yo pandan konfigirasyon olye ke bati yon tiyo enjèstyon konplè.

**Sous:**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Next.js Guide](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude pou Swen Sante 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI & Vektè] (https://supabase.com/docs/guides/ai)
- [OpenAI Embeddings] (https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Konstwi RAG ak Claude & pgvector](https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG Chatbot ak Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)

---

## 10. AKSÈ

### WCAG 2.2 AA Konfòmite estrateji

**Pwensip kle pou odyans sa a:**
1. **Aksesibilite kognitif** -- Layout previzib, yerachi vizyèl klè (enpòtan pou paran ki gen estrès / akable AK pou konsiderasyon ki gen rapò ak otis)
2. **Sipò pou alfabetizasyon ki ba** -- Siyal vizyèl, ikon ansanm ak tèks, langaj senp
3. **Aksesibilite plizyè lang** --Lektè ekran yo dwe travay ak lang RTL
4. **Motè aksè** -- Gwo sib manyen (min 44x44px pou chak WCAG 2.2)

**Entègre atravè shadcn/ui + Radix:**
- Tout eleman yo enkli wòl/atribi ARIA otomatikman
- Navigasyon klavye (Tab, Antre, Chape, kle flèch)
- Jesyon konsantre ak pyèj konsantre nan modal
- Anons lektè ekran pou kontni dinamik
- `aria-describedby` lye sou erè validation
- `aria-invalid` mete sou erè fòm

**Bibliyotèk adisyonèl:**
```bash
npm enstale -D @axe-core/react # Logs a11y pwoblèm nan konsole navigatè a
npm enstale -D eslint-plugin-jsx-a11y # Lint pou pwoblèm a11y
```

**Kontrast koulè:** WCAG AA mande pou 4.5:1 pou tèks nòmal, 3:1 pou tèks gwo. Bay gwo kontras mòd baskile.

**Konsiderasyon Konsepsyon Espesifik pou Otis:**
- Polis Sans-serif (egzanp, Inter, system-ui) -- pi fasil pou li pou itilizatè neurodivergent
- Navigasyon ki konsistan, previzib atravè tout paj yo
- Animasyon minimòm (respekte `prefere-redwi-mouvman`)
- Klè fwontyè vizyèl ant seksyon yo
- Evite surcharge sansoryèl (koulè muet, pa flache)
- Senp baskile langaj pou senplifikasyon kontni

```typescript
// Nan eleman, respekte preferans mouvman:
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
```

**Sous:**
- [WCAG 2.2 nan React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Color Contrast WCAG 2025 Guide] (https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [React Accessibility Best Practices] (https://rtcamp.com/handbook/react-best-practices/accessibility/)

---

## 11. DEPPLWA

### Rekòmandasyon: Vercel Free Tier

**Poukisa Vercel:** Konstwi pa créateur Next.js yo -- zewo konfigirasyon nesesè. Jis `git push` pou deplwaye.

**Limit Nivo Gratis:**
- 100 GB Pleasant / mwa
- 100K envokasyon fonksyon san sèvè / mwa
- Deplwaman san limit
- 10 segonn delè fonksyon (ase pou difizyon AI)
- Custom domèn sipò

**Varyab anviwònman yo:**
```bash
# .env.local (pa janm fè sa)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # Sèvè-bò sèlman
ANTHROPIC_API_KEY=sk-ant-... # Sèvè-bò sèlman
OPENAI_API_KEY=sk-... # Sèvè-kòt sèlman (pou embeddings)
GOOGLE_TRANSLATE_API_KEY=... # Bò sèvè sèlman
```

**ENPÒTAN:** ​​Varyab ki gen prefiks ak `NEXT_PUBLIC_` yo ekspoze nan navigatè a. Kle API yo PA dwe gen prefiks sa a.

**Konsèy Demo:** Deplwaye nan Vercel bonè (nan premye èdtan). Sèvi ak URL aperçu pou pataje ak jij yo. Pwoteksyon modpas disponib pou deplwaman preview.

**Sous:**
- [Deplwaye Next.js sou Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Deplwaye Next.js Apps 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-48)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

## 12. KONFIDITE AK SEKIRITE

### Konfidansyalite-pa-Design Achitekti

**PRINSIP GID:** Aplikasyon sa a sèvi yon popilasyon vilnerab. Vyolasyon konfidansyalite yo ka gen konsekans reyèl (risk depòtasyon pou fanmi ki pa gen papye). Sekirite pa opsyonèl.

**Konsiderasyon HIPAA:** Aplikasyon an PA yon antite ki kouvri epi gen anpil chans PA bezwen konfòmite HIPAA konplè. Sepandan, si sere nenpòt enfòmasyon ki gen rapò ak sante sou timoun, trete li kòm sansib. Pi bon apwòch: minimize sa ou estoke bò sèvè.

**Konsiderasyon COPPA (Timoun ki poko gen 13):** Si paran yo se sèl itilizatè yo, COPPA se mwens restriksyon men li toujou enpòtan pou estoke done timoun yo. Mizajou COPPA 2025 la entwodwi kondisyon pi sevè pou minimize done yo. **Rekòmandasyon:** Konsepsyon aplikasyon an pou PARAN sèlman, pa pou timoun yo itilize dirèkteman.

**Achitekti Done - Ki sa pou estoke kote:**

| Kalite Done | Kote Depo | Kripte |
|-----------|-----------------|-------------|
| Non timoun | Kliyan-bò (localStorage/IndexedDB) | Si ou vle kliyan-bò AES-256 |
| Dyagnostik timoun nan | Kliyan-bò | AES-256 chifreman bò kliyan |
| Konpetans timoun/jalons | Supabase (chiffre nan rès) | Supabase default |
| Posts nan fowòm | Supabase | Nan rès (Supabase default) |
| AI chat istwa | Kliyan-bò sèlman (sessionStorage) | Efemèr, pa pèsiste |
| Lang pito itilizatè a | Metadata itilizatè Supabase | Estanda |
| Jeton itilizatè anonim | Supabase otorizasyon | JWT estanda |

**Règleman RLS:**
```sql
-- Itilizatè yo ka sèlman wè pwòp pwofil pitit yo
KREYE POLITÈ "Itilizatè yo ka wè pwòp pitit yo"
  SOU child_profiles POU CHWAZI
  ITILIZE (auth.uid () = paran_id);

-- Itilizatè anonim yo ka li pòs fowòm yo
KREYE POLITÈ "Nenpòt moun ka li pòs yo"
  SOU forum_posts POU CHWAZI
  ITILIZE (se_modere = fo);

-- Se sèlman itilizatè otantifye ki ka poste
KREYE POLITÈ "Itilizatè otantifye yo ka poste"
  SOU forum_posts POU INSERT
  AK CHECK (auth.uid() PA NIL);
```

**Kisa pou w pa fè:**
- PA sere estati imigrasyon nenpòt kote, tout tan
- PA mande pou non reyèl
- PA sere adrès IP nan mòso bwa aplikasyon yo
- PA sèvi ak analiz swivi (pa gen Google Analytics - sèvi ak Plausible oswa pa gen anyen)
- PA sere konvèsasyon AI chat bò sèvè
- PA mande pou sèvis lokal

**Sous:**
- [HIPAA & Health Apps](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [Konfòmite COPPA 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Zero-Knowledge Health App Guide](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Supabase RLS Gid konplè 2026] (https://vibeappscanner.com/supabase-row-level-security)

---

## 13. ESTRATEJI HACKATHON & BIDGÈ TAN

### Plan Konstwi 10 èdtan (8:30 AM - 6:30 PM)

**Priyorite Karakteristik (Metòd MoSCoW):**

| Priyorite | Karakteristik | Estati | Est. Tan |
|----------|---------|--------|-----------|
| **DWE** | Multi-lang UI (EN + ES + AR) | Bati konplètman | 1.5 èdtan |
| **DWE** | AI Chat Asistan (ak RAG) | Bati konplètman | 2h |
| **DWE** | Bibliyotèk Resous (browsable + searchable) | Bati konplètman | 1h |
| **DWE** | Anonim + otorizasyon telefòn | Bati konplètman | 1h |
| **DWE** | Pwofil timoun ak Suivi konpetans | Bati konplètman | 1.5 èdtan |
| **TA DWE** | Fowòm kominotè | Bati debaz (pa gen an tan reyèl) | 1h |
| **TA DWE** | PWA offline aksè | Bati (konfigirasyon Serwist) | 0.5 èdtan |
| ** KA ** | Tradiksyon pòs fowòm | Souch ak mock | 0.5 èdtan |
| ** KA ** | Mòd nwa / gwo kontras | Aktivite rapid | 0.25 èdtan |
| **PAP** | Sistèm modération konplè | Demo mock sèlman | -- |
| **PAP** | Pouse notifikasyon | Sote nèt | -- |
| **PAP** | Kontni videyo | Sote nèt | -- |

### Orè detaye

```
8:30 - 9:00 (30 min) ENFÒMASYON PWOJÈ
  - Echafodaj ak create-t3-app oswa Nextbase starter
  - Supabase kreyasyon pwojè + tab
  - Vercel deplwaman tiyo (deplwaye koki vid)
  - Enstale dep debaz yo
  - Varyab anviwònman configuré

9:00 - 10:00 (60 min) FONDASYON
  - Eleman Layout ak i18n (header, nav, switcher lang)
  - konpozan shadcn/ui enstale
  - Sipò RTL branche
  - Supabase otorizasyon: anonim + imel siyen-nan UI
  - Estrikti dosye tradiksyon (EN + ES + AR)

10:00 - 11:30 (90 min) KARAKTIK DEbaz #1: AI CHAT
  - Vercel AI SDK + konfigirasyon Claude Haiku
  - Wout API pou chat ak difizyon
  - Eleman UI chat ak zen useChat
  - Sistèm rapid ak pwoteksyon sekirite
  - Pre-peple 20 resous nan pgvector
  - RAG tiyo (rekèt entegre -> rechèch -> ogmante èd memwa)

11:30 - 12:00 (30 min) MIDI MATEN DEPLIKE + TÈS
  - Deplwaye nan Vercel
  - Tès sou mobil
  - Ranje pinèz kritik yo

12:00 - 12:30 (30 min) MANJE MANJE

12:30 - 1:30 (60 min) CARACTÉRISTIQUE PRINCIPALE #2: BIBLIYOTÈK RESOUS
  - Kat resous ak filtraj kategori
  - Fonksyonalite rechèch
  - Paj detay resous yo
  - Done pitit pitit: 20-50 resous curated

1:30 - 3:00 (90 min) CARACTÉRISTIQUE PRINCIPALE #3: PROFIL TIMOUN + KONPÈS.
  - Fòm kreyasyon pwofil timoun
  - Konpozan kat konpetans
  - Milestone swiv UI
  - Depo kliyan-bò pou done sansib
  - View tablodbò pwofil

3:00 - 4:00 (60 min) CARACTÉRISTIQUE #4: FÒM KOMINOTE (BAZ)
  - View lis pòs fowòm
  - Kreye fòm pòs
  - Sistèm kòmantè debaz
  - Òganizasyon ki baze sou kategori

4:00 - 4:30 (30 min) PWA + TRADUCTION
  - Konfigirasyon travayè sèvis Serwist
  - Ranpli kle tradiksyon pou ES ak AR
  - Tès layout RTL ak arab

4:30 - 5:30 (60 min) POLISH & DEMO PREP
  - Ranje pinèz UI
  - Ajoute eta chaje ak manyen erè
  - Gwo kontras mòd baskil (si tan)
  - Pran Ekran pou prezantasyon
  - Dosye backup videyo Demo

5:30 - 6:00 (30 min) FINAL DEPLIKE + PREZANTASYON
  - Final Vercel deplwaman
  - Teste tout karakteristik fen-a-fen
  - Prepare script anplasman 3 minit

6:00 - 6:30 (30 min) TAMPON / PREZANTASYON
```

### Ki sa pou moke/souch:
- **Moderasyon fowòm:** Jis kache pòs yo rapòte ak yon drapo, pa gen okenn panèl admin
- **Tradiksyon fowòm:** Bouton "Tradwi" montre chajman tèks orijinal la (oswa Google Translate si lè)
- **Modpas reset koule:** Sèvi ak Imèl Supabase default
- **Avatar itilizatè:** Inisyal oswa icon default, pa gen okenn Upload
- **Dashboard admin:** Sote nèt

### Konsèy Optimizasyon Demo:
1. **Kòmanse ak istwa a** -- "Rankontre ak Fatima, yon manman siryen ki fèk demenaje Ozetazini. Yo fèk dyagnostike pitit gason l ki gen 4 an ak otis. Li pa pale angle. Li pa konnen ki kote pou l kòmanse."
2. **Montre chanjman lang lan** -- Chanje soti angle a arab an dirèk. RTL baskile vizyèlman enpresyonan pou jij yo.
3. **Démo chat AI** -- Poze li yon kesyon an panyòl. Montre li bay resous yo.
4. **Montre kapasite offline** -- Etenn WiFi, montre aplikasyon an toujou ap travay.
5. **Mete aksan sou vi prive** -- "Pa gen okenn non reyèl nesesè. Pa gen imèl obligatwa. Li ka itilize aplikasyon sa a san danje."

**Sous:**
- [Soti nan zewo rive nan Demo nan 36 èdtan](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [Priyorite Karakteristik MVP](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Hackathon Demo Konsèy (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Gid Hackathon Pitch Deck](https://www.inknarrates.com/post/hackathon-pitch-deck)

---

## 14. BOILERPLATE & MODEL

### Opsyon 1: create-t3-app (REKÒMANDE pou ekip ki abitye ak tRPC)
```bash
npx create-t3-app@latest autism-bridge --typescript --tailwind --trpc --prisma
```
- GitHub: https://github.com/t3-oss/create-t3-app
- Gen ladann: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- Ou ajoute: Supabase, next-intl, shadcn/ui, Vercel AI SDK

### Opsyon 2: Nextbase Starter (REKÒMANDE pou konfigirasyon ki pi senp)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Gen ladann: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query
- Ou ajoute: next-intl, shadcn/ui, Vercel AI SDK, Prisma (si ou vle)

### Opsyon 3: Vercel Supabase Starter
- Modèl: https://vercel.com/templates/next.js/supabase
- Modèl ofisyèl Vercel/Supabase ak otorizasyon SSR

### Opsyon 4: supa-next-starter
- GitHub: https://github.com/michaeltroya/supa-next-starter
- Gen ladann: Next.js, Supabase, Tailwind, shadcn/ui (deja entegre)

### Apre echafodaj, ajoute:
```bash
npm enstale pwochen-intl rtl-detekte
npm enstale ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm enstale @serwist/next @serwist/precaching @serwist/sw
npx shadcn@latest init
npx shadcn@latest ajoute bouton kat dyalòg fòm fòm onglè avatar badj akòdeyon lòd pen griye
npm enstale -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
```

### Pwojè referans:
- **supabase-comments-extension** (GitHub: malerba118/supabase-comments-extension) -- Kòmantè, repons, reyaksyon
- **ojasskapre/nextjs-starter-template** -- Next.js + Supabase + LLM chat interfaces
- **shwosner/realtime-chat-supabase-react** -- Chat an tan reyèl ak Supabase

---

## 15. DESIGN SCHEMA

### Ranpli Prisma Schema

```prisma
dèlko kliyan {
  founisè = "prisma-client-js"
}

sous done db {
  founisè = "postgresql"
  url = anv ("DATABASE_URL")
  directUrl = env ("DIRECT_URL")
}

// ITIlizatè ak otantifikasyon
modèl UserProfile {
  id Chèn @id @default(uuid())
  authId String @unique
  displayName chaîne?
  preferredLocale String @default("en")
  kreyeAt DateTime @default(kounye a ())
  updatedAt DateTime @updatedAt
  timoun ChildProfile[]
  forumPosts ForumPost[]
  forumComments ForumComment[]
  vòt monte ForumUpvote[]
}

// PROFIL TIMOUN AK SWIKI KONPANSYON
modèl ChildProfile {
  id Chèn @id @default(uuid())
  parentId Chaîne
  paran UserProfile @relation (jaden: [parentId], referans: [id])
  ti non String
  birthYear Int?
  dyagnostik Dat Dat Lè?
  konpetans SkillCard[]
  jalons Milestone[]
  kreyeAt DateTime @default(kounye a ())
  updatedAt DateTime @updatedAt
  @@index([parentId])
}

model SkillCategory {
  id Chèn @id @default(uuid())
  nameKey String
  icon fisèl?
  sortOrder Int @default(0)
  ladrès SkillCard[]
}

modèl SkillCard {
  id Chèn @id @default(uuid())
  childId chaîne
  pitit ChildProfile @relation(fields: [childId], referans: [id], onDelete: Cascade)
  CategoryId Chaîne
  kategori SkillCategory @relation(fields: [categoryId], referans: [id])
  nameKey String
  nivo Int @default(0)
  nòt fisèl?
  Dènye Evalyasyon DatTime @default (kounye a ())
  kreyeAt DateTime @default(kounye a ())
  updatedAt DateTime @updatedAt
  @@index([childId])
  @@index([kategoryId])
}

modèl Milestone {
  id Chèn @id @default(uuid())
  childId chaîne
  pitit ChildProfile @relation(fields: [childId], referans: [id], onDelete: Cascade)
  titleKey String
  deskripsyon fisèl?
  achievedDate DateTime?
  kategori String
  kreyeAt DateTime @default(kounye a ())
  @@index([childId])
}

// RESOUS (angrasyon vektè jere atravè SQL anvan tout koreksyon / pgvector)
Resous modèl {
  id Chèn @id @default(uuid())
  Tit Chaîne
  kontni String @db.Text
  rezime chaîne?
  kategori String
  soukategori chaîne?
  sourceUrl String?
  eta chaîne?
  lang String @default("en")
  tags chaîne[]
  kreyeAt DateTime @default(kounye a ())
  updatedAt DateTime @updatedAt
  @@index([kategori])
  @@index([eta])
}

// FORUM / KOMINOTE
modèl ForumCategory {
  id Chèn @id @default(uuid())
  nameKey String
  descriptionKey String?
  icon fisèl?
  sortOrder Int @default(0)
  posts ForumPost[]
}

modèl ForumPost {
  id Chèn @id @default(uuid())
  CategoryId Chaîne
  kategori ForumCategory @relation(fields: [categoryId], referans: [id])
  otè chaîne
  otè UserProfile @relation (jaden: [authorId], referans: [id])
  se Anonymous Boolean @default (fo)
  Tit Chaîne
  kontni String @db.Text
  originalLang String @default("en")
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  isPinned Boolean @default (fo)
  isHidden Boolean @default (fo)
  reportCount Int @default(0)
  kòmantè ForumComment[]
  vòt monte ForumUpvote[]
  tradiksyon ForumTradiksyon[]
  kreyeAt DateTime @default(kounye a ())
  updatedAt DateTime @updatedAt
  @@index([kategoryId])
  @@index([authorId])
  @@index([createdAt])
}

modèl ForumComment {
  id Chèn @id @default(uuid())
  postId chaîne
  poste ForumPost @relation(fields: [postId], referans: [id], onDelete: Cascade)
  parentId String?
  paran ForumComment? @relation("Repons kòmantè", jaden: [parentId], referans: [id])
  repons ForumComment[] @relation ("CommentReplies")
  otè chaîne
  otè UserProfile @relation (jaden: [authorId], referans: [id])
  se Anonymous Boolean @default (fo)
  kontni String @db.Text
  originalLang String @default("en")
  upvoteCount Int @default(0)
  isHidden Boolean @default (fo)
  reportCount Int @default(0)
  vòt monte ForumUpvote[]
  tradiksyon ForumTradiksyon[]
  kreyeAt DateTime @default(kounye a ())
  @@index([id post])
  @@index([parentId])
}

modèl ForumUpvote {
  id Chèn @id @default(uuid())
  userId Chaîne
  itilizatè UserProfile @relation (jaden: [id itilizatè], referans: [id])
  postId chaîne?
  poste ForumPost? @relation(fields: [postId], referans: [id], onDelete: Cascade)
  commentId chaîne?
  kòmantè ForumComment? @relation(fields: [commentId], referans: [id], onDelete: Cascade)
  kreyeAt DateTime @default(kounye a ())
  @@unique([id itilizatè, id pòs])
  @@unique([id itilizatè, id kòmantè])
}

tradiksyon fowòm modèl {
  id Chèn @id @default(uuid())
  postId chaîne?
  poste ForumPost? @relation(fields: [postId], referans: [id], onDelete: Cascade)
  commentId chaîne?
  kòmantè ForumComment? @relation(fields: [commentId], referans: [id], onDelete: Cascade)
  targetLang chaîne
  translatedTitle String?
  translatedContent String @db.Text
  kreyeAt DateTime @default(kounye a ())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
```

### Kategori Done Grenn yo

**Kategori konpetans:** Kominikasyon, Konpetans sosyal, Viv chak jou, Konpetans motè, Akademik, Pwosesis sansoryèl, Regilasyon emosyonèl

**Kategori fowòm yo:** Entwodiksyon ak Byenveni, Terapi ak Tretman (ABA/OT/Lapawòl), Èd Lekòl ak IEP, Konsèy Lavi chak jou, Kesyon Legal ak Imigrasyon, Navigasyon Swen Sante, Istwa Siksè & Etap, Sipò jeneral

**Kategori Resous:** Kalite Terapi ak Founisè, Edikasyon ak Resous IEP, Dwa Legal ak Defans, Asistans Finansye, Òganizasyon Kominotè, Zouti ak Aplikasyon sou Entènèt, Liv ak Medya, Resous Espesifik Eta a

---

## PACKAGE.JSON DEPANDANS REZIME

```json
{
  "depandans": {
    "pwochen": "^16.0.0",
    "reaji": "^19.0.0",
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

## REFERANS RAPID: LIEN KLE DOKIMANTASYON

| Zouti | Dokimantasyon |
|------|--------------|
| Next.js 16 | https://nextjs.org/docs |
| Supabase | https://supabase.com/docs |
| Supabase Auth | https://supabase.com/docs/guides/auth |
| Supabase an tan reyèl | https://supabase.com/docs/guides/realtime |
| Supabase pgvector | https://supabase.com/docs/guides/ai |
| pwochen-intl | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| Vercel AI SDK | https://ai-sdk.dev/docs/introduction |
| Claude API | https://platform.claude.com/docs |
| Prisma | https://www.prisma.io/docs |
| Serwist PWA | https://serwist.pages.dev/docs/next/getting-started |
| Tailwind CSS | https://tailwindcss.com/docs |
| Tradiksyon Google Cloud | https://cloud.google.com/translate/docs |
| OpenAI Embeddings | https://platform.openai.com/docs/guides/embeddings |
| Vercel Deplwaman | https://vercel.com/docs |

---

Rechèch sa a kouvri tout 10 domèn ou te mande plis estrateji Hackathon, achitekti vi prive, opsyon boilerplate, ak konsepsyon chema konplè. Pile a fèt pou chak sèvis anfòm nan nivo gratis pou hackaton an, otantifikasyon an konsève vi prive pou itilizatè ki pa gen papye, epi bidjè tan an reyalis pou yon konstriksyon 10 èdtan. Mwen te eseye sove sa a kòm yon dosye nan `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` men yo te refize pèmisyon ekri nan dosye a. Si ou ta renmen mwen sove sa a sou disk, ou ka bay pèmisyon Ekri epi mwen pral kreye dosye a.
---

## Lòt rechèch (Mizajou mas 2026)

### Pi bon bibliyotèk i18n pou plis pase 10 lang (React + TypeScript)

**Rekòmande: react-i18next** — 2.1M telechajman chak semèn, solisyon ki pi popilè React i18n.
- Bati sou ekosistèm i18next ak grefon pou deteksyon lang, chaj asenk, pliryèl konplèks
- Pakèt: 22.2 kB (i18next 15.1kB + reyaji-i18next 7.1kB)
- Sipòte fichye tradiksyon JSON - fasil pou ajoute lang enkreman
- Sous: [Phrase Blog](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)

**Altènatif ki lejè: LinguiJS** — 10.4 kB total (mwatye gwosè a), sentaks mesaj ICU, sipò TypeScript.

**Pou vitès Hackathon**: reyaji-i18next ak dosye tradiksyon JSON. Kòmanse ak angle + panyòl, ajoute lòt lang atravè dosye JSON. Sèvi ak Google Translate API oswa DeepL pou premye tradiksyon.

Sous: [GloryWebs 2026 Gid](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)

### Supabase Free Tier Limits (2026)

- **2 pwojè aktif** (poz apre 1 semèn inaktivite)
- **500 MB** depo baz done (pataje CPU)
- **2 GB** baz done sòti/mwa
- **50,000** itilizatè aktif chak mwa (auth)
- **1 GB** depo dosye
- **2 GB** depo sòti
- **500,000** envokasyon fonksyon kwen / mwa
- Pa gen sovgad, pa gen okenn SLA sou plan gratis

Sous: [Supabase Pricing](https://supabase.com/pricing), [UI Bakery Breakdown](https://uibakery.io/blog/supabase-pricing)

**Pou Hackathon**: 500 MB se plis pase ase. Menm ak 10,000 itilizatè chak estoke pwofil + done timoun + posts fowòm, ou ta itilize <50 MB. Limit la otorizasyon 50K MAU se tou trè jenere pou yon Demo.
