# Hackathon Tech Stack Research: Waalidiinta Soogalootiga ah + App-ka Ootiisamka

**Taariikhda:** 2026-02-28 | **Waqtiga Dhisidda:** 10 Saacadood (8:30 Subaxnimo - 6:30 Galabnimo)

---

## 1. KOOBAN XIDHIIDHA LAGU SOO TALIYEY

| Lakabka | Farsamada | Sababta |
|---
| **Qaabka** | Xiga.js 16 (App Router) | SSR ee SEO, wadooyinka API, taageerada PWA, Vercel geyn |
| **Safool** | 'create-t3-app' ama bilawga Nextbase | Dariiqa ugu dhaqsiyaha badan ee loo teeb-buuxa |
| **Luuqad** | Nooca Qoraalka oo dhan | Dhammaadka ilaa-dhamaadka nooca badbaadada |
| **Backend API** | tRPC (iyada oo loo sii marayo xirmooyinka T3) AMA Next.js API wadooyin + macmiilka Supabase | Nooca-ammaan, kululeeyaha eber |
| **Database** | Supabase (PostgreSQL) | Heerarka bilaashka ah, auth, waqtiga dhabta ah, pgvector, RLS |
| **ORM** | Prisma | Noocyada si toos ah loo soo saaray, qalabaynta socdaalka |
| **Auth** | Supabase Auth | Soo gelid qarsoodi ah, taleefanka OTP, iimaylka/password, PII looma baahna |
| **i18n** | xiga-intl | Dhaladka Next.js is dhexgalka, taageerada RSC, xidhmo yar, taageerada RTL |
| **UI** | shadcn/ui + Tailwind CSS | Qaybaha koobi-koobidda, lahaanshaha buuxa, Radix a11y, RTL diyaar ah |
| ** AI Chat** | Vercel AI SDK + Claude API (Haiku 4.5) | Daawashada, isticmaalka Chat jillaab, kharash-ool ah |
| **Vector DB** | Supabase pgvector | Xog isku mid ah, ma jirto adeeg dheeraad ah, RLS on vectors |
| **Ku-xidhka** | Fur AI qoraalka-ku-xidhka-3-yar | $0.02/1M calaamado, 5x ka jaban ada-002 |
| **Turjumi API** | Google Cloud Translation API | 500k chars bilaash ah bishii, 130+ luqadood, ma jirto xog kaydin ah |
| **PWA** | Serwist (@serwist/xiga) | Ku-xigeen-pwa casriga ah, taageerada offline |
| ** Hawlgelinta** | Vercel (heerka xorta ah) | Zero-config Next.js geyn, 100GB bandwidth |
| **Madasha** | Gaar ahaan leh Supabase Realtime | Cusbooneysiinta waqtiga-dhabta ah, RLS ee dhexdhexaadinta |

** Wadarta Kharashka Bisha ee La Qiyaasay (Hackathon/Demo): $0** -- Dhammaan adeegyada kor ku xusan waxay leeyihiin heerar bilaash ah oo ku filan demo hackathon.

---

## 2. FIICAN DHISMAHA

### Talo soo jeedin: Next.js 16 (App Router)

**Sababta Xigta
- SSR/SSG ee SEO (muhiim u ah boggaga kheyraadka ee ay tahay in ay ogaadaan waalidiinta muhaajiriinta ah ee raadinaya Google)
- Waddooyinka API-ku-dhisan waxay meesha ka saarayaan baahida server-ka dambeedka ee goonida ah
- App Router oo leh Qaybaha React Server = eber macmiil JS wixii la turjumay
- Dhaladka PWA muujinta taageerada 'app/manifest.ts'
- Gelitaanka Vercel waa eber-config
Next-intl waxay si dhalasho ah ula shaqeysaa RSC (tarjumaada loo turjumay server-side = 0 bytes ee macmiilka)

** Goorma Vite ka fiicnaan lahayd:**
- SPA saafi ah oo aan lahayn baahi SEO ah
- Xawaaladaha server-ka degdega ah (faa'iidada yar ee 10-saac hackathon)
- Qaab maskaxeed fudud (ma kala soocaan adeegaha/macaamilka)

** Dejinta PWA oo leh Serwist (ku-xigeenka ku xiga ee pwa):**
`` bash
npm rakib @serwist/ku xiga @serwist/precaching @serwist/sw idb
``

Xeeladaha khadka tooska ah ee furaha ah:
- **CacheFirst** ee hantida ma guurtada ah (`/_xiga/static/`) -- content-hashed, waligiis isbeddel
- **NetworkFirst** ee jawaabaha API iyo nuxurka firfircoon
- **StaleWhileRevalidate** ee faylalka tarjumaadda iyo boggaga kheyraadka
- IndexedDB ee kaydinta xogta qadla'aanta (muuqaalka ilmaha, agab kaydsan)

** MUHIIM:** Next.js 16 waxa ay isticmaashaa Turbopack si caadi ah, laakiin Serwist waxa ay u baahantahay xidhmo shabakadeed. Waxaad u baahan doontaa inaad u habayso dhismaha si waafaqsan.

** Muujinta PWA** (ku-dhismay Taageerada Next.js):
Qoraal-qoraalka
// app/manifest.ts
ka soo deji nooca {MetadataRoute} ee 'xiga'

Muujinta shaqada caadiga ah ee dhoofinta (): MetadataRoute.Manifest {
  soo noqo {
    Magaca: 'ASD Bridge',
    short_name: 'ASD Bridge',
    tilmaanta: 'Taageeridda qoysaska soogalootiga ah ee qaba carruurta autism-ka',
    start_url: '/',
    bandhigay: 'Sida kali ah',
    midabka asalka ah: '#ffffff',
    mawduuca_midabka: '#4F46E5',
    Astaamaha: [
      {src: '/icon-192.png', cabbirrada: '192x192', nooca: 'image/png'},
      {src: '/icon-512.png', cabbirrada: '512x512', nooca: 'image/png'},
    ],
  }
}
``

**Ilaha:**
- [Vite vs Next.js Isbarbardhigga Dhameystiran 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Next.js PWA Guide](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Serwist Bilaabida](https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA oo leh Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Dhismaha PWA ee Next.js oo leh Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)

---

## 3. NOOCYADA DIB U DHACDAY

### Talo soo jeedin: Next.js API Routes + Supabase Client (primary) AMA tRPC (haddii la isticmaalayo T3)

**Doorashada A: Xiga.js API Waddooyinka + Supabase (UGU FUDUD ee hackathon)**
- Ma jiro server dambe oo gooni ah
- Supabase JS macmiilku wuxuu wax ka qabtaa weydiimaha DB, auth, waqtiga dhabta ah
- Wadooyinka API ee wada sheekeysiga AI, wicitaanada API tarjumaad, iyo caqli kasta oo dhinaca server-ka ah
- Sida ugu dhakhsaha badan ee loo dejiyo

**Ikhtiyaarka B: tRPC iyada oo loo marayo T3 Stack (DX ugu fiican haddii ay kooxdu garanayso)**
- Dhamaadka-ilaa-dhamaadka nooca badbaadada inta u dhaxaysa geesaha hore iyo kan dambe
- Si otomaatig ah u dhammaystirka wicitaannada API ee xagga hore
- Waxay la shaqeysaa Prisma ee noocyada la soo saaray
- 'create-t3-app' ayaa wax walba isku rogaya

`` bash
# Ikhtiyaarka A: Plain Next.js + Supabase
npx create-next-app @ my-app-ka ugu dambeeyay --typescript --tailwind --eslint --app --src-dir

# Ikhtiyaarka B: T3 Stack
npx create-t3-app@app my-cusub
# Dooro: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
``

**Waa maxay sababta eysan u cadeynin/soomi karin:**
- Waxay ku daraysaa kakanaanta geynta (server gaar ah oo martigelinaya)
- Wax faa'iido ah kama jiraan waddooyinka Next.js API ee kiiskan isticmaalka
- 30-60 daqiiqo oo dheeri ah oo aadan haysan

**Waa maxay sababta aan Server-la'aanta loogu samayn (Lambda/Netlify Functions):**
- Xiga.js API dariiqyada Vercel ARE server-la'aan si caadi ah
- Looma baahna kaabayaal shaqo oo gaar ah

**Ilaha:**
- [tRPC + Supabase TypeScript] (https://noahflk.com/blog/supabase-typescript-trpc)
- [T3 Stack 2025 Guide](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Abuur T3 App] (https://create.t3.gg/)
- [tRPC Official] (https://trpc.io/)

---

## 4. DATABASE

### Talo soo jeedin: Supabase (PostgreSQL)

**Waa maxay sababta Supabase ugu guulaysato mashruucan:**

| Muuqaalka | Supabase | Firebase | PlanetScale |
|----
| kaydinta heerka DB bilaashka ah | 500 MB | 1 GB (Spark) | Heerarka bilaashka ah ee la joojiyay |
| Auth ka mid ahaa | Haa (50k MAU bilaash ah) | Haa (50k MAU bilaash ah) | Maya |
| Waqtiga dhabta ah | Haa (Isbeddelada Postgres) | Haa (fasalka ugu fiican) | Maya |
| Raadinta Vector (pgvector) | Haa, ku dhex dhisan | Maya | Maya |
| Taageerada SQL | Full PostgreSQL | NoSQL kaliya | MySQL |
| RLS (Amniga Heerka Safka) | Haa, SQL ku salaysan | Xeerarka Amniga Firebase | Maya |
| Anonymous auth | Haa, ku dhex dhisan | Haa | N/A |
| Isha furan | Haa | Maya | Qayb ahaan |
| Qaadashada xogta | Buuxa (waa Postgres) | Qufulka iibiyaha | MySQL waafaqsan |

**Supabase Free Tier (2026):**
- 2 mashruuc oo firfircoon
- 500 MB kaydinta xogta
- 2 GB database baxay
- 50,000 MAU (xaqiijin)
- 1 GB kaydinta faylka
- 500,000 codad shaqo gees ah
- Looma baahna kaarka deynta, waligiis ma dhacayo

**Waa maxay sababta Supabase dulsaar Firebase ee abkan:**
1. pgvector ee raadinta ilaha AI (adeeg dheeraad ah looma baahna)
2. SQL buuxa ee su'aalaha kakan
3. RLS ee sirta-ilaalinta gelitaanka golaha qarsoodiga ah
4. Qaadashada xogta (kuma xidhna nidaamka deegaanka Google)
5. U roon xogta xiriirka (isticmaal -> carruurta -> xirfadaha -> marxaladaha muhiimka ah)

** Is dhexgalka Prisma:**
``prisma
ilaha xogta db {
  bixiye = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
``

**Ilaha:**
- [Supabase vs Firebase 2026 Review](https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025]
- [Qiimaha Supabase 2026] (https://uibakery.io/blog/supabase-pricing)
- [Xaddooyinka Heerarka Bilaashka ah ee Supabase](https://supabase.com/pricing)

---

## 5. Xaqiijinta

### Talo soo jeedin: Supabase Auth oo si qarsoodi ah u soo gelid + Telefoonka OTP + iimaylka/passwordka

**Mabaadi'da Naqshadeynta Muhiimka ah ee dhagaystayaashan:**
Abka waa in uu ahaado mid la isticmaali karo IYADOO aan la bixin macluumaadka shaqsiga lagu aqoonsan karo. Waalidiin badan oo muhaajiriin ah (gaar ahaan kuwa aan sharciyeysnayn) ma isticmaali doonaan app u baahan aqoonsiga dawladda/SSN, xaqiijinta magaca dhabta ah, ururinta ciwaanka, ama iimaylka qasabka ah.

** Heerarka Xaqiijinta (Horumar Kalsoonida):**

| Heerarka | Habka | Maxaa Furay | PII Loo Baahan Yahay |
|------------|
| 1 | Soo gelid qarsoodi ah | Eeg agabka, adeegso sheekeysiga AI, arag madasha | Midna |
| 2 | Telefoonka OTP | Ku dheji golaha, kaydi profiles ilmaha | Nambarka telefoonka kaliya |
| 3 | Email + password | Akoonka buuxa ee soo kabashada | Ciwaanka emailka |

** Xaqiijinta Supabase Anonymous:**
Qoraal-qoraalka
// Soo gal si qarsoodi ah -- looma baahna PII
const {data, error} = sug supabase.auth.signInAnonymously()

// Ka dib, isticmaaluhu wuxuu isku xiri karaa lambarka taleefanka
const {data, error } = sug supabase.auth.updateUser ({
  telefoonka: '+1234567890',
})
``

** Dejinta OTP Taleefan:**
Supabase waxay taageertaa aqoonsiga taleefanka iyada oo loo sii marayo Twilio, MessageBird, Textlocal, iyo Vonage. Isticmaalayaashu waxay SMS-ka ku helaan 6-god PIN, oo shaqaynaya 60 ilbiriqsi.

**Ammaanka Isticmaalayaasha Aan La Aqoonsan:**
-Daar CAPTCHA (Cloudflare Turnstile lagu taliyay -- bilaash ah) si looga hortago xadgudubka
- Xadka heerka IP-ku salaysan: 30 codsi/saacadood (lagu hagaajin karo dashboardka Supabase)
- Xeerarka RLS waxay kala saari karaan kuwa aan la aqoonsan iyo isticmaalayaasha la xaqiijiyay iyada oo loo marayo sheegasho 'is_anonymous' JWT

**Waa maxay sababta aan ugu xidhi karin app-kan:**
- Ma jiro gudaha gudaha gal qarsoodi ah
- $0.02/MAU kadib 10K (Supabase: 50k bilaash ah)
- Xad dhaafka UI ee kiiskan isticmaalka
- Waxay ku daraysaa ku tiirsanaanta dibadda

**Waa maxay sababta aan loo aqoonsanayn0:**
- Qalab adag oo loogu talagalay hackathon
- Ma jiro aqoonsi qarsoodi ah
- Heerarka bilaashka ah oo ku xaddidan 7,500 MAU

**Ilaha:**
- [Supabase Anonymous Sign-Ins](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Supabase Phone Login](https://supabase.com/docs/guides/auth/phone-login)
- [Karraaniga vs Supabase Auth](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [Security of Anonymous Sign-Ins](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)

---

## 6. INTERNATIONALIZATION (i18n)

### Talo soo jeedin: next-intl

** Waa maxay sababta xigta-intl uga fal-celin-i18-xiga ama uga fal-celisa-intl:**

| Muuqaalka | xiga-intl | falcelin-i18xiga | falcelin-intl |
|--------|------------|-----------
| Next.js App Router taageero | Dhaladka | Via duubo | Via duubo |
| Taageerada Qaybaha Serverka | Ku dhex dhisan (0 macmiil JS) | Waxay u baahan tahay habayn | Waxay u baahan tahay habayn |
| Cabbirka xidhmada | ~4KB | ~8KB | ~12KB |
| Taageerada RTL | Lagu dhex dhisay | Buugga | Buugga |
| Qaabab jamac ah (Carabi: 6 foom) | Si toos ah ICU | Habaynta gacanta | Si toos ah ICU |
| Nooca badbaadada | TypeScript-ka hore | Wanaagsan | Wanaagsan |

**Rakibaadda:**
`` bash
npm rakib next-intl rtl-detect
npm rakib --save-dev @types/rtl-detect
``

** RTL u habaynta Carabiga, Farsi, Urdu:**
Qoraal-qoraalka
// hooks/useTextDirection.ts
ka soo dejiso {useLocale} oo ka yimid 'ext-intl';
ka soo deji {isRtlLang} 'rtl-detect';

shaqada dhoofinta isticmaalkaTextDirection() {
  const locale = useLocale ();
  soo celi isRtlLang(maxali) ? 'rtl': 'ltr';
}

// app/[locale]/layout.tsx
shaqada caadiga ah dhoofinta LocaleLayout ({carruurta, params: { locale} }) {
  const jihada = isRtlLang(goob) ? 'rtl': 'ltr';
  soo noqo (
    <html lang={maxali} dir={jihada}>
      <body>{carruur}</body>
    </html>
  ;
}
``

** Qaab dhismeedka faylka Turjumaada:**
``
fariimaha/
  en/
    Common.json # Xadhkaha UI La Wadaago (badhamada, nav, khaladaadka)
    auth.json # Soo gal, saxiix, astaanta
    Resources.json # Maktabadda Kheyraadka
    forum.json # Madasha/bulshada
    ai-chat.json # AI kaaliyaha
    child-profile.json # Dabagalka ilmaha
    skills.json # Skill cards
  ar/ # Carabi (RTL)
  es/ # Isbaanish
  zh/ # Shiine (La fududeeyay)
  fa/ # Farsi/Faarsi (RTL)
  ur/ # Urduu (RTL)
``

**Luqadaha mudnaanta leh ee MVP:** Ingiriisi (default), Isbaanish, Carabi (RTL si loo muujiyo kartida farsamada), Shiinees (La fududeeyay).

**CSS ee RTL -- isticmaal guryaha macquulka ah ee Tailwind:**
- `pl-4` -> `ps-4` (bilawga-inline-bilawga)
- `pr-4` -> `pe-4` (padding-inline-end)
- 'qoraalka-bidix' -> 'qoraal-bilow'
- 'qoraalka-right' -> 'dhamaadka qoraalka'
- `ml-auto` -> `ms-auto`
- `mr-auto` -> `me-auto`

** Turjumaada Mashiinka ee nuxurka Madasha:**

| Adeegga | Heerarka Bilaashka ah | Qiimaha Bilaashka Kadib | Luuqadaha | Qarsoodinimada |
|--------|----
| Turjumaada Google Cloud | 500k chars/bishii (joogto ah) | $20/1M oo sahay ah | 130+ | Wax xog ah looma kaydin/loo isticmaalo tababarka |
| DeepL | 500k chars/bishii | $25/1M chars + $5.49/bishii | 30+ | Xogta heerka bilaashka ah waa la kaydin karaa |
| Amazon Translate | 2M chars/bishii (12 bilood oo kaliya) | $15/1M oo sahay ah | 75+ | Wax xog ah lama kaydin |

**Talo soo jeedin:** Google Cloud Translation API -- heerka bilaashka ah ee joogtada ah, daboolida luqadda ugu weyn (130+ luqadood oo ay ku jiraan dhammaan luqadaha RTL) dammaanad gaar ah oo xooggan (ma jiraan xog la kaydiyay ama loo isticmaalay tababarka).

**Ilaha:**
- [Next-intl Documentation](https://next-intl.dev/)
- [Next-intl Buuxda Hagaha 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl vs react-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Next.js RTL Support](https://lingo.dev/en/nextjs-i18n/right-to-left-languages)
- [Qiimaha Turjumaada Google Cloud](https://cloud.google.com/translate/pricing)
- [DeepL vs Google Translate](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)

---

## 7. Maktabadaha Qaybaha UI

### Talo soo jeedin: shadcn/ui + Tailwind CSS

**Waa maxay sababta shadcn/ui:**
- Qaybaha waa nuqul-ku dhejiyay mashruucaaga (lahaanshaha buuxa, ma jiraan wax cusboonaysiin ku tiirsanaan ah oo laga walwalo)
- Lagu dhisay Radix UI primitives (waafaqsan WAI-ARIA, keyboard navigation, taageerada akhristaha shaashadda)
- Tailwind CSS u dhashay ( guryaha macquulka ah ee RTL)
- 40+ qaybood oo la heli karo
- Taageerada RTL iyada oo loo marayo moodallo
- Habka mugdiga / iftiinka lagu dhex dhisay
-Wakhtiga orodka ee eber ka sarreeya

**Rakibaadda:**
`` bash
npx shadcn@init ugu dambeeyay
npx shadcn@ugudambeeyey dar badhan kaarka wada hadal galinta foomka xaashida avatar calaamad amarka toast
``

**Qaybaha muhiimka ah ee Appkan:**
- `Kaarka` -- Kaararka agabka, kaadhadhka xirfada, kaadhadhka xogta ilmaha
- 'Wadahadal' / 'Sheet' -- Isdhexgalka Modal, beddelka luqadda
- 'Foom' + 'Input' -- Foomamka astaanta u gaarka ah carruurta, abuuritaanka golaha
- `Tabs` -- U dhex mara qaybaha
- `Avatar` -- Bandhig isticmaalayaasha madasha (oo leh ikhtiyaar qarsoodi ah)
- `Badge` -- Heerarka xirfadda, calaamadaha luqadda
'Accordion' -- FAQ, faahfaahinta kheyraadka
- `Amar' -- Ka raadi palette-ka agabka
- `Toast` -- Ogeysiisyada

** Helitaanka Lagu Dhex-Meelan Yahay:**
- Dhammaan qaybaha ku salaysan Radix waxaa ka mid ah doorarka ARIA iyo sifooyinka si toos ah
- Keyboard navigation wuxuu ka shaqeeyaa meel ka baxsan sanduuqa (Tab, Geli, Escape, furayaasha fallaadha)
- Maareynta diiradda iyo dabinnada diiradda saaraya qaababka
- Ogaysiisyada akhristaha shaashadda ee nuxurka firfircoon
- 'aria-describedby' waxay si toos ah ugu xidhan tahay khaladaadka ansaxinta
- 'aria-invalid' oo lagu dejiyay khaladaadka qaabka

**Waa maxay sababta aan Chakra UI:** Runtime ka culus (CSS-in-JS), habayn ku salaysan prop oo ka dabacsan fasalada tamarta Tailwind, xawaaraha deegaanka hoose ee 2025-2026.

**Waa maxay sababta UI Material:** Xidhmo aad u culus, luqadda naqshadaynta Google ayaa laga yaabaa inay u dareemaan caafimaad abka bulshada, way adagtahay in si qoto dheer loo habeeyo.

**Ilaha:**
- [shadcn/ui Hagaha 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Shadcn/ui Qaybaha la heli karo](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [React UI Libraries 2025 Comparison](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)

---

## 8. MADASHA / MIDKA BULSHADA

### Dhisme: Ku dhis gaar ah oo leh Supabase Realtime

** Qaabka Xogta (SQL):**
``sql
-- Qaybaha madasha
ABUUR TABLE golaha_qaybaha (
  id UUID KEY DEFAULT gen_random_uuid(),
  Magaca_furaha TEXT MA JIRTO,
  description_key TEXT,
  sumadda TEXT,
  kala-soocida INTEGER DEFAULT 0,
  la sameeyay TIMESTAMPTZ DEFAULT NOW ()
;

-- Qoraalada madasha (threads)
ABUUR TABLE golayaasha_boogaha (
  id UUID KEY DEFAULT gen_random_uuid(),
  category_id UUID TIXRAACA forum_categories(id),
  author_id UUID TIXRAACAA auth.users(id),
  waa_qarsoon BOOLEAN DEFAULT been ah,
  bandhigay_name TEXT,
  ciwaanka qoraalka MA BILAAB,
  Qoraalka ka kooban NOLL,
  assal_language TEXT DEFAULT 'en',
  upvote_count INTEGER DEFAULT 0,
  faallo_count INTEGER DEFAULT 0,
  waa_ku-xidhan yahay BOOLEAN DEFAULT been ah,
  waa_loo dhexdhexaadiyay BOOLEAN DEFAULT been ah,
  la sameeyay TIMESTAMPTZ DEFAULT NOW (),
  la cusboonaysiiyay TIMESTAMPTZ DEFAULT NOW ()
;

-- Faallooyinka qoraallada
ABUUR TABLE madal_faallo (
  id UUID KEY DEFAULT gen_random_uuid(),
  post_id UUID TIXRAACA forum_posts(id) KU SAABSAN CASCADE,
  parent_id UUID TIXRAACA forum_comments(id),
  author_id UUID TIXRAACAA auth.users(id),
  waa_qarsoon BOOLEAN DEFAULT been ah,
  bandhigay_name TEXT,
  Qoraalka ka kooban NOLL,
  assal_language TEXT DEFAULT 'en',
  upvote_count INTEGER DEFAULT 0,
  la sameeyay TIMESTAMPTZ DEFAULT NOW ()
;

-- Cod bixin
Abuur TABLE madasha_cod bixinta (
  id UUID KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  post_id UUID TIXRAACA golaha_posts(id),
  faallo_id UUID TIXRAACA forum_faallo(id),
  la sameeyay TIMESTAMPTZ DEFAULT NOW (),
  UNIQUE (user_id, post_id),
  UNIQUE (user_id, faallo_id)
;

-- Turjumaada kaydsan
ABUUR TABLE madasha_turjumaad
  id UUID KEY DEFAULT gen_random_uuid(),
  source_type TEXT MA JIRTO,
  source_id UUID MA BILAAB,
  Bartilmaameed_Luuqad TEXT MA JIRTO,
  tarjumay_ciwaanka TEXT,
  tarjumaad_content TEXT MA JIRTO,
  la sameeyay TIMESTAMPTZ DEFAULT NOW (),
  UNIQUE(source_id, luqadda bartilmaameedka)
;
``

** Cusbooneysii-Waqtiga Dhabta Ah:**
Qoraal-qoraalka
const channel = supabase
  kanaalka ('forum-posts')
  .on ('isbeddelka_boostada', {
    dhacdo: 'geli',
    schema: 'dadweynaha',
    miiska: 'posts_posts',
    filter: `category_id=eq.${categoryId}`
  }, (lacag saar) => {
    // Ku dar qoraal cusub UI
  })
  .subscribe()
``

** Badbaadada soo dhejinta qarsoodiga ah:**
- Qoraalada isticmaalayaasha qarsoodiga ah (Supabase anonymous auth) si kala duwan ayaa loo calaamadin karaa
- Siyaasada RLS waxay hubisaa in 'ay tahay_qarsoon' sheegashada JWT
- Muuji magacyo been abuur ah (tusaale, "Waalid #4827") halkii aad ka ahaan lahayd magacyo madhan

** Dhexdhexaadin (MVP):** Badhan warbixin fudud oo ku taal boostada/faallo kasta. Calanka maamulka si uu u qariyo waxa la sheegay. Mustaqbalka: dhexdhexaadinta nuxurka ku shaqeeya AI iyada oo loo sii marayo Claude API.

** Turjumaada Dalbashada:** Qoraalada lagu kaydiyo luqadda asalka ah. Badhanka "Turjumi" waxa uu kiciyaa Google Cloud Translation API. Turjumaada waxa lagu kaydiyay shaxda `forum_translations` Codsiyada xiga ee isla luqadda ayaa laga keenay kayd.

**Ilaha:**
- [Supabase Realtime] (https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [Dhis Forum Community with Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [Supabase RLS] (https://supabase.com/docs/guides/database/postgres/row-level-security)

---

## 9. IS dhexgalka AI

### Dhismaha: Vercel AI SDK + Claude API + Supabase pgvector RAG

** Socodka Xogta:**
``
Su'aasha isticmaalaha (luqado badan)
  -> [Google U Tarjumi Ingiriisiga] (haddii aysan Ingiriisi ahayn)
  -> [Samee Ku-xidhka] (qoraalka-ku-xidhka-3-yar)
  -> [Supabase pgvector la mid ah raadinta]
  -> [Dukumentiyada Macnaha Guud Oo La Soo Saaray]
  -> [Claude API oo leh System Prompt + Context + Su'aasha isticmaalaha]
  -> [Jawaab Ingiriisi]
  -> [Google U Tarjumi Luuqadda Isticmaalaha] (haddii aysan Ingiriisi ahayn)
  -> Waxaa loo soo bandhigay isticmaale (la sii daayay)
``

** Dejinta Vercel AI SDK:**
`` bash
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
``

Qoraal-qoraalka
// app/api/chat/route.ts
ka soo deji {anthropic} '@ai-sdk/anthropic';
ka soo deji {streamText} 'ai';

shaqada async dhoofinta POST (codsi: Codsi) {
  const {farriimaha, locale} = sug req.json ();
  natiijo la'aan = streamText ({
    model: anthropic ('claude-3-5-haiku-20241022'),
    nidaamka: SYSTEM_PROMPT,
    fariimaha: Farriimaha la kordhiyay,
  }
  u soo celi natiijada.toDataStreamResponse();
}
``

Qoraal-qoraalka
// Dhinaca macmiilka: qaybaha/AiChat.tsx
'isticmaal macmiilka';
ka soo deji {useChat} '@ai-sdk/react';

shaqada dhoofinta AiChat () {
  const {farimaha, gelida, gacan InputChange, handleSubmit, isLoading} = isticmaalChat ({
    api: '/api/chat',
  }
  // Kala hadal UI oo leh jawaabaha qulqulka
}
``

** Xulashada Model Claude ee Hackathon:**

| Qaabka | Gelida/1M calaamadaha | Wax soo saarka/1M calaamadaha | Ugu Wanaagsan |
|---
| Claude Haiku 4.5 | $1.00 | $5.00 | **Jawaabta wada sheekaysigu (lagu talinayaa)** |
| Claude Sonnet 4.5 | $3.00 | $15.00 | Sababo murugsan |
| Claude Opus 4.5 | $5.00 | $25.00 | xad dhaafka ah ee sheekeysiga |

**Talo soo jeedin:** Claude Haiku 4.5 -- degdeg ah (daahitaan hoose oo loogu talagalay baahinta), raqiis (ku weyn miisaaniyada hackathon), oo awood ku filan u leh Q&A iyo hagida guud.

** Degdeg ah Nidaamka (Badbaadada-Ugu Horayn ee Macluumaadka Caafimaadka):**
``
Waxaad tahay caawiye AI taageera oo caawiya waalidiinta soogalootiga ah ee carruurta leh
oo qaba Xanuunka Autism Spectrum Disorder (ASD). Waxaad bixisa macluumaad ku saabsan:
- Ilaha ASD, daawaynta, iyo barnaamijyada waxbarashada
-In la maro nidaamka daryeelka caafimaadka iyo waxbarashada ee Maraykanka
- IEP (Barnaamijka Waxbarashada Shakhsi ahaaneed) hababka
- Barnaamijyada taageerada dawladda iyo kuwa aan macaash doonka ahayn ee la heli karo
- Horumarka guud ee horumarka

XEERARKA BADBAADADA EE MUHIIMKA AH:
-Ma tihid dhakhtar. Had iyo jeer ku tali la talinta xirfadlayaasha daryeelka caafimaadka.
- Weligaa ha baarin ama ha soo jeedin daaweyn caafimaad oo gaar ah.
- Had iyo jeer ku dar afeef marka aad ka hadlayso mowduucyo caafimaad/horumar.
- Haddii isticmaaluhu uu sharaxo xaalad caafimaad oo degdeg ah, u sheeg inay wacaan 911.
- Dhaqan ahaan u nugul kana fogow fikradaha ku saabsan qaabka qoyska.
- Isticmaal luqad fudud oo cad.
- Marka aanad hubin, waxaad tidhaahdaa "Ma garanayo" intii aad qiyaasi lahayd.
- Weligaa ha ururin hana waydiin macluumaadka aqoonsiga shakhsi ahaaneed.
``

** Habaynta pgvector RAG Supabase:**
``sql
ABUUR BADBAADIN HADDII UUSAN JIRIN

Abuur kheyraadka Miiska (
  id UUID KEY DEFAULT gen_random_uuid(),
  ciwaanka qoraalka MA BILAAB,
  Qoraalka ka kooban NOLL,
  Qaybta TEXT MA NOQO,
  source_url TEXT,
  TEXT state,
  qoraalka luqadda DEFAULT 'en',
  isku dhejinta vector(1536),
  la sameeyay TIMESTAMPTZ DEFAULT NOW (),
  la cusboonaysiiyay TIMESTAMPTZ DEFAULT NOW ()
;

KU SAMEY tusmada agabka ADEEGSIGA hnsw (ku dhejinta vector_cosine_ops);

ABUUR AMA BEDEL FICTION_ kheyraad isku mid ah (
  su'aal_ku-daba-gal ah vector(1536),
  heerka ciyaarta FLOAT DEFAULT 0.7,
  ciyaarta_count INT DEFAULT 5
)
SOO NOQOSHADA MIISKA (ID UUID, TEXT title, TEXT content, category TEXT, u ekaanshaha FLOAT)
LANGUAGE plpgsql AS $$
BILAAB
  SOO CELI SU'AAL
  Xulo r.id, r.ciwaanka, r.content, r.category,
    1 - (r.embedding <=> su'aal_ku-xidhid) SIDA isku midka ah
  Laga soo bilaabo ilaha r
  HALKEE 1 - (r.embeding <=> su'aal_ku-xidhid) >-xadka ciyaarta
  Dalabka r. dhejinta <=> su'aal-gelinta
  LIMIT ciyaarta_count;
DHAMAAD;
$$;
``

** Qaabka Isku-xidhka:** Isticmaal OpenAI `text-embedding-3-small` ($0.02/1M calaamado, 1536 cabbir, 5x ka jaban ada-002 oo leh waxqabad wanaagsan).

**Hackathon Shortcut:** Ku sii shub miiska agabka oo leh 20-50 khayraad oo la diyaariyey oo ku saabsan autismka, IEP-yada, noocyada daawaynta, iyo ururada taageerada. U samee waxyaabaha ku dhex-xidha inta lagu jiro habaynta halkii aad ka dhisi lahayd dhuumo si buuxda u qaada.

**Ilaha:**
- [Vercel AI SDK] (https://ai-sdk.dev/docs/introduction)
- [AI SDK + Next.js Guide](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude for Healthcare 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector] (https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI & Vectors] (https://supabase.com/docs/guides/ai)
- [OpenAI Embeddings] (https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [RAG ku dhis Claude & pgvector] (https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG Chatbot oo leh Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)

---

## 10. Helitaanka

### WCAG 2.2 AA Istaraatiijiyada U Hogaansanaanta

**Mabaadi'da Muhiimka ah ee Dhagaystayaashan:**
1. ** Helitaanka garashada *** -- Qaabab la saadaalin karo, kala sareyn muuqaal oo cad (muhiim u ah waalidiinta walaacsan/ka batay iyo tixgalinta la xiriirta ootiisamka)
2. **Taageerada akhris-qoraalka hooseeya** -- Tilmaamaha muuqaalka, calaamadaha ay weheliyaan qoraalka, luqad fudud
3. ** Helitaanka luqadaha badan *** -- Akhristayaasha shaashadda waa inay ku shaqeeyaan luqadaha RTL
4. ** Helitaanka Mootada *** -- Bartilmaameedyada taabashada waaweyn (min 44x44px halkii WCAG 2.2)

** Lagu dhex dhisay shadcn/ui + Radix:**
- Dhammaan qaybaha waxaa ka mid ah doorarka ARIA si toos ah
- Keyboard navigation (Tab, Geli, Escape, furayaasha fallaadha)
- Maareynta diiradda iyo dabinnada diiradda saaraya qaababka
- Ogaysiisyada akhristaha shaashadda ee nuxurka firfircoon
- 'aria-describedby' oo ku xidhan khaladaadka ansaxinta
- 'aria-invalid' oo lagu dejiyay khaladaadka qaabka

**Maktabado Dheeraad ah:**
`` bash
npm install -D @axe-core/react # Logs a11y arrimaha qunsuliyada browserka
npm install -D eslint-plugin-jsx-a11y # Lint ee arimaha 11y
``

** Isbarbardhigga Midabka:** WCAG AA waxay u baahan tahay 4.5:1 qoraalka caadiga ah, 3:1 qoraalka weyn. Bixi qaabka isbarbardhiga sare leh.

**Tixgelinta Nakhshad Gaarka ah Oo Ootiisamka:**
- Sans-serif fonts (tusaale, Inter, system-ui) -- ay fududahay in loo akhriyo isticmaalayaasha kala duwanaanta neerfayaasha
- Socod joogto ah, oo la saadaalin karo dhammaan bogagga
- animations ugu yar (ixtiraamka 'doorbiday-dhaqdhaqaaq la dhimay')
- Nadiifi soohdimaha muuqaalka u dhexeeya qaybaha
- Iska ilaali culeyska dareenka (midabada aamusan, wax biligleynaya)
- Luqadda fudud ee fududaynta nuxurka

Qoraal-qoraalka
// Qaybaha, ixtiraam dookhyada mooshin:
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
``

**Ilaha:**
- [WCAG 2.2 gudaha React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-iyo-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Tilmaanta Midabka WCAG 2025](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [React Helitaanka Hababka Ugu Fiican](https://rtcamp.com/handbook/react-best-practices/accessibility/)

---

## 11. GUURIDDA

### Talo soo jeedin: Vercel Heerarka Xorta ah

**Waa maxay sababta Vercel:** Waxaa dhisay hal-abuurayaasha Next.js -- qaabeynta eber ayaa loo baahan yahay. Kaliya 'git riix' si loo diro

** Xadka Heerarka Xorta ah:**
- 100 GB bandwidth / bishii
- 100k codsi shaqo la'aan bishii
- Gelin aan xadidnayn
- 10-ilbiriqsi wakhtiga shaqada (ku filan socodka AI)
- Taageerada domain gaarka ah

**Isbeddelka Deegaanka:**
`` bash
# .env.local (weligaa tan ha samayn)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # Server-side kaliya
ANTHROPIC_API_KEY=sk-ant-... # Server-side kaliya
OPENAI_API_KEY=sk-... # Adeegaha-dhinaca kaliya
GOOGLE_TRANSLATE_API_KEY=... # Adeegaha-dhinaca kaliya
``

** MUHIIM:** Kala duwanaanshiyaha hore loogu sii hagaajiyay `NEXT_PUBLIC_` ayaa soo bandhigay browserka. Furayaasha API waa inaysan lahaan horgalayaashan.

** Talooyin muujinta:** Geli Vercel goor hore (saacadaha ugu horreeya gudahooda). Isticmaal URL-yada hore si aad ula wadaagto garsoorayaasha. Ilaalinta erayga sirta ah ayaa diyaar u ah dirida horudhaca.

**Ilaha:**
- [Diiridda Next.js ee Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [ Dirista Next.js Apps 2026]
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

## 12. SIRTA IYO AMNIGA

### Qarsoodi-Naqshadda Naqshadeynta

**MABADA HAGAYSA:** Appkan waxa uu u adeegaa dadka nugul Xadgudubyada sirta ah waxay yeelan karaan cawaaqib adduun dhab ah (khatarta masaafurinta qoysaska aan sharciga lahayn). Nabadgelyadu maaha mid ikhtiyaari ah.

** Tixgelinta HIPAA:** Appku maaha wax la daboolay oo ay u badan tahay uma baahna u hoggaansanaan buuxda HIPAA. Si kastaba ha ahaatee, haddii aad kaydinayso wax macluumaad la xidhiidha caafimaadka oo ku saabsan carruurta, ula dhaqan si xasaasi ah. Habka ugu fiican: yaree waxa aad ku kaydiso dhinaca server-ka.

**Tixgelinta COPPA (Carruurta Kayar 13):** Haddii waalidku yihiin kuwa kaliya ee isticmaala, COPPA aad ayey u xaddidan tahay laakiin wali way ku habboon tahay kaydinta xogta carruurta. Cusboonaysiinta 2025 COPPA waxay soo bandhigaysaa shuruudaha yaraynta xogta adag. **Talo soo jeedin:** U naqshadee app-ka WAALIDKA oo keliya, ma aha inay carruurtu si toos ah u isticmaalaan.

** Dhismaha Xogta -- Waxa lagu kaydiyo Halka:**

| Nooca Xogta | Goobta Kaydinta | Sireed |
|---
| Magaca ilmaha | Dhinaca macmiilka (LocalStorage/IndexedDB) | Ikhtiyaarka dhinaca macmiilka AES-256 |
| Ogaanshaha ilmaha | Dhinaca macmiilka | AES-256 sirta dhinac macmiilka |
| Xirfadaha ubadka/muhiimooyinkiisa | Supabase (oo lagu sireeyay nasashada) | Supabase default |
| Qoraalada madasha | Supabase | Waqtiga nasashada (Supabase default) |
| Taariikhda chat AI | Dhinaca macmiilka oo kaliya (fadhiStorage) | Ephemeral, aan sii socon |
| Luqada uu doorbido isticmaaluhu | Supabase isticmaalaha metadata | Heerka |
| Calaamadaha isticmaalaha qarsoodiga ah | Supabase auth | Halbeegga JWT |

** Xeerarka RLS: ***
``sql
-- Isticmaalayaashu waxay arki karaan oo keliya profile-yada ilmahooda
SIYAASADDA ABUUR "Isticmaalayaashu waxay arki karaan carruurtooda"
  ON Child_profiles ee xulashada
  ISTICMAALKA (auth.uid () = parent_id);

Isticmaalayaasha qarsoodiga ah waxay akhrin karaan qoraallada golaha
SIYAASADDA ABUUR "Qof walba wuu akhriyi karaa qoraallada"
  ON forum_posts ee doorashada
  ISTICMAALKA (is_dhexdhexaadin = been);

-- Kaliya isticmaalayaasha la xaqiijiyay ayaa soo dhejin kara
SIYAASADDA ABUUR " Isticmaalayaasha la xaqiijiyay ayaa soo dhejin kara"
  ON forum_posts FOR INSERT
  JEEGAANKA (auth.uid() MA JIRTO;
``

**Waxa Aan La Samayn:**
- Ha ku kaydin xaaladda socdaalka meel kasta, weligaa
- Uma baahnid magacyo dhab ah
- Ha ku kaydin ciwaannada IP-ga diiwaanka codsiga
- Ha isticmaalin falanqaynta dabagalka (ma jiro Google Analytics - isticmaal macquul ah ama waxba)
- Ha kaydin wada sheekaysiga AI-dhinaca server-ka
- Uma baahnid adeegyada goobta

**Ilaha:**
- [HIPAA & Apps-ka Caafimaadka](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [Coppa Compliance 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Hagaha App-ka Caafimaadka Zero-Knowledge](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Hagaha dhameystiran ee Supabase RLS 2026] (https://vibeappscanner.com/supabase-row-level-security)

---

## 13. XEERKA HACKATHON & MIISAANIYADDA WAQTIGA

### Qorshaha Dhisida 10-Saacadood (8:30 subaxnimo - 6:30 galabnimo)

**Mudnaanta Sifada (Habka MoSCoW):**

| Mudnaanta | Muuqaalka | Xaalada | Est. Waqtiga |
|---------|----
| ** waa waajib** | UI-luqado badan (EN + ES + AR) | Si buuxda u dhis | 1.5 saac |
| ** waa waajib** | Caawiyaha Chat AI (oo leh RAG) | Si buuxda u dhis | 2 saac |
| ** waa waajib** | Maktabadda Kheyraadka (la daalacan karo + la raadin karo) | Si buuxda u dhis | 1 saac |
| ** waa waajib** | Anonymous + phone auth | Si buuxda u dhis | 1 saac |
| ** waa waajib** | Muuqaalka ilmaha oo leh xirfad raadraaca | Si buuxda u dhis | 1.5 saac |
| ** WAA INAY **** | Madasha bulshada | Dhis aasaasiga ah (ma jiro-waqtiga dhabta ah) | 1 saac |
| ** WAA INAY **** | PWA khadka tooska ah | Dhis (habaynta Serwist) | 0.5 saac |
| ** KARTA** | Forum post tarjumaad | Dhagar ku jeesjees ah | 0.5 saac |
| ** KARTA** | Habka mugdiga ah / farqiga sare | Dhaqso u rogmado | 0.25 saac |
| **MAYA** | Nidaamka dhexdhexaadinta buuxa | demo qosol kaliya | -- |
| **MAYA** | Riix ogeysiisyada | Gebi ahaanba ka bood | -- |
| **MAYA** | Muqaal Video | Gebi ahaanba ka bood | -- |

### Jadwalka oo faahfaahsan

``
8:30 - 9:00 (30 daqiiqo) DEJINTA MASHRUUCA
  - Saffold with create-t3-app ama Nextbase starter
  - Abuurista mashruuca Supabase + miisaska
  - Dhuumaha geynta Vercel (dhig qolof madhan)
  - Ku rakib deps core
  - doorsoomayaasha deegaanka habaysan

9:00 - 10:00 (60 daqiiqo) Aasaaska
  - Qaybta qaabaynta oo leh i18n (madaxa, nav, beddelka luqadda)
  - qaybaha shadcn/ui rakibay
  - Taageerada RTL waa la xidhay
  - Supabase auth: qarsoodi + iimaylka UI
  - Qaab dhismeedka faylasha tarjumaada (EN + ES + AR)

10:00 - 11:30 (90 daqiiqo) MUUQAALKA ugu muhiimsan #1: AI CHAT
  - Vercel AI SDK + Claude Haiku dejinta
  - Jidka API ee la sheekeysiga qulqulka
  - Qaybta UI kala hadal oo leh jillaab isticmaal
  - Degdeg ah nidaamka oo leh ilaalin badbaado
  - Horay u dajin 20 agab ee pgvector
  - Dhuumaha RAG ( su'aal ku lifaaqan -> raadi -> degdeg ah)

11:30 - 12:00 (30 daqiqo) Duulimaadka subaxnimada
  - U geyn Vercel
  - Ku tijaabi mobilka
  - Hagaaji cayayaanka halista ah

12:00 - 12:30 (30 daqiiqo) QADA

12:30 - 1:30 (60 daqiiqo) MUUQAALKA MUHIIMKA AH #2: LAYBRARYIGA ISHA
  - Kaararka kheyraadka leh shaandhaynta qaybta
  - Waxqabadka raadinta
  - Bogagga faahfaahinta kheyraadka
  - Xogta abuur: 20-50 kheyraad la dajiyay

1:30 - 3:00 (90 daqiiqo) MUUQAALKA MUHIIMKA AH #3: ARAGTIDA ILMAHA + Xirfadaha
  - Foomka abuurista astaanta ilmaha
  - Qaybaha kaadhka xirfadda
  - Dabagalka meeraha UI
  - Kaydinta dhinaca macmiilka ee xogta xasaasiga ah
  - Muuqaalka dashboardka profile

3:00 - 4:00 (60 daqiiqo) MUUQAALKA #4: MADASHA BULSHADA (AASAASIGA AH)
  - Aragtida liiska boostada Forum
  - Samee foomka boostada
  - Nidaamka faallooyinka aasaasiga ah
  - Ururka ku salaysan qaybta

4:00 - 4:30 (30 daqiiqo) PWA + TARJUMADDA
  - Habaynta shaqaalaha adeegga Serwist
  - Buuxi furayaasha turjumaada ES iyo AR
  - Ku tijaabi qaabka RTL adigoo isticmaalaya Carabi

4:30 - 5:30 (60 daqiiqo) PREP & DEMO POLISH
  - Hagaaji dhiqlaha UI
  - Ku dar gobolada rarka iyo khaladka maaraynta
  - Qaabka isbarbardhigga sare ee beddelka (haddii waqtiga)
  - Qaado sawirro si aad u soo bandhigto
  - Record demo video gurmad

5:30 - 6:00 (30 daqiqo) Keenista U Dambeeya + Soo Bandhigida
  - Gelintii ugu dambaysay ee Vercel
  - Tijaabi dhammaan sifooyinka dhamaadka-ilaa-dhamaadka
  - Diyaari qoraal 3-daqiiqo ah

6:00 - 6:30 (30 daqiqo) BUFFER/PRESENTATION
``

### Maxaa lagu jeesjeesayaa/Sub:
- ** Dhexdhexaadinta madasha: *** Kaliya qari fariimaha la soo sheegay ee calan leh, ma jiro guddi maamul
- **Turjumaada madasha:**"Turjumi" badhanka wuxuu muujinayaa rarida ka dibna qoraalka asalka ah (ama Google Translate haddii wakhti)
- ** socodka dib u habeynta erayga sirta ah:** Adeegso iimaylada caadiga ah ee Supabase
* *Avatars-ka isticmaalaha:** Astaanta bilawga ah ama astaanta caadiga ah, wax la soo geliyo ma jiro
- ** dashboardka maamulka:** Gebi ahaanba u bood

### Tilmaamaha Hagaajinta Demo:
1. **Ka bilow sheekada *** -- "La kulan Faadumo, hooyo Suuriyaan ah oo hadda u guurtay Mareykanka. Wiilkeeda oo 4 jir ah ayaa dhawaan laga helay cudurka Autism-ka, kuma hadasho Ingiriisiga
2. ** Tus beddelka luqadda *** -- Ingriiska uga beddel Carabi si toos ah. Jeexitaanka RTL muuqaal ahaan waa mid soo jiidasho leh garsoorayaasha.
3. **Demo the AI ​​chat** -- Ku weydii su'aal Isbaanish ah. Tus in ay bixinayso agab.
4. ** Tus karti offline *** -- Dami WiFi, tus appku wali wuu shaqaynayaa.
5. ** xooga saar sirta *** -- "Magac dhab ah looma baahna. iimayl uma baahna. Waxay u isticmaali kartaa abkan si badbaado leh."

**Ilaha:**
- [Laga bilaabo eber ilaa demo gudaha 36 saacadood](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [Mudnaanta Sifada MVP](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Hackathon Demo Tips (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Hackathon Pitch Deck Guide] (https://www.inknarrates.com/post/hackathon-pitch-deck)

---

## 14. BOILERPLATE & TEMPLATES

### Xulashada 1: abuuro-t3-app (waxaa lagu talinayaa kooxaha yaqaan tRPC)
`` bash
npx create-t3-app@buundada ugu dambeysay ee autism --typescript --tailwind --trpc --prisma
``
- GitHub: https://github.com/t3-oss/create-t3-app
- Waxaa ku jira: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- Waxaad ku dari: Supabase, next-intl, shadcn/ui, Vercel AI SDK

### Xulashada 2: Nextbase Starter (waxaa lagu talinayaa habayn fudud)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Waxaa ku jira: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, Weydiinta React
- Waxaad ku dari: xiga-intl, shadcn/ui, Vercel AI SDK, Prisma (ikhtiyaar)

### Xulashada 3: Vercel Supabase Starter
- Template: https://vercel.com/templates/next.js/supabase
- Qaabka rasmiga ah ee Vercel/Supabase oo wata aqoonsiga SSR

### Xulashada 4: supa-ku-xiga-bilowga
- GitHub: https://github.com/michaeltroya/supa-next-starter
- Waxaa ku jira: Next.js, Supabase, Tailwind, shadcn/ui (horey u dhexeeyey)

### Ka dib marka la sawiro, ku dar:
`` bash
npm rakib next-intl rtl-detect
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm rakib @serwist/ku xiga @serwist/precaching @serwist/sw
npx shadcn@init ugu dambeeyay
npx shadcn@ugudambeeyey dar badhan kaarka wada hadal galinta foomka xaashida avatar calaamad amarka toast
npm rakib -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
``

### Mashaariicda Tixraaca:
- ** supabase-faallooyinka-kordhinta** (GitHub: malerba118/supabase-faallooyinka-kordhinta) -- Faallo, jawaabo, falcelin
- ** ojasskapre/template-ka xiga-bilowga-ku-xiga** -- Next.js + Supabase + interfaces wada sheekaysiga LLM
- ** shwosner/waqtiga-waqtiga-sheekeysiga-supabase-ka falcelis** -----waqtiga dhabta ah kula sheekayso Supabase

---

## 15. Nashqada SHAQADA

### Qorshaha Prisma oo Dhamaystiran

``prisma
macmiilka koronto-dhaliyaha {
  bixiye = "prisma-client-js"
}

ilaha xogta db {
  bixiye = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// Isticmaalaha & Xaqiijinta
Qaabka Isticmaalaha Profile {
  id String @id @default(uuid())
  authId String @unique
  Bandhig Magaca String?
  liidoLocale String @default("en")
  la sameeyay At DateTime @default(hadda())
  updatedAt DateTime @updatedAt
  profile Child[]
  forumPosts ForumPost[]
  forumFaalloFaallo[]
  u codeeyay ForumUpvote[]
}

// PROFILES ILMAHA & RAADINTA XIRFADA
model ChildProfile {
  id String @id @default(uuid())
  String parentId
  waalidka UserProfile @relation (goobaha: [parentId], tixraacyo: [id])
  naaneesta String
  Sannad-dhalasho Int?
  cudurka Date DateTime?
  xirfadaha SkillCard[]
  Guulaha Muhiimka ah[]
  la sameeyay At DateTime @default(hadda())
  updatedAt DateTime @updatedAt
  @@index([parentId])
}

nooca SkillCategory {
  id String @id @default(uuid())
  Magaca String Key
  sumadda String?
  sortOrder Int @default(0)
  xirfadaha SkillCard[]
}

Moodeelka SkillCard {
  id String @id @default(uuid())
  ChildId String
  Child ChildProfile @relation (goobaha: [childId], tixraacyo: [id], onDelete: Cascade)
  categoryId String
  qaybta SkillCategory @relation (goobaha: [categoryId], tixraacyo: [id])
  Magaca String Key
  heerka Int @default(0)
  xusuus qor String?
  lastAssessed DateTime @default(hadda())
  la sameeyay At DateTime @default(hadda())
  updatedAt DateTime @updatedAt
  @@index([childId])
  @@index([categoryId])
}

Model Milestone {
  id String @id @default(uuid())
  ChildId String
  Child ChildProfile @relation (goobaha: [childId], tixraacyo: [id], onDelete: Cascade)
  Cinwaanka furaha String
  sharaxaad String?
  la gaarayTaariikhda DateTime?
  qaybta Xargaha
  la sameeyay At DateTime @default(hadda())
  @@index([childId])
}

// Ilaha (wax-ku-soo-saarka vector waxaa lagu maamulaa SQL/pgvector cayriin)
Ilaha model {
  id String @id @default(uuid())
  cinwaanka String
  Waxyaabaha ay ka kooban tahay String @db.Text
  Soo koobid Xarig?
  qaybta Xargaha
  Xarig-hoosaadka?
  ishaUrl String?
  String state?
  luqadda String @default("en")
  Tags String[]
  la sameeyay At DateTime @default(hadda())
  updatedAt DateTime @updatedAt
  @@index([qeybta])
  @@index([state])
}

// MADASHA / BULSHADA
Qaabka Madasha Qaybta {
  id String @id @default(uuid())
  Magaca String Key
  Sharaxaada Furaha?
  sumadda String?
  sortOrder Int @default(0)
  dhajinta ForumPost[]
}

qaabka ForumPost {
  id String @id @default(uuid())
  categoryId String
  qaybta ForumCategory @relation (goobaha: [categoryId], tixraacyo: [id])
  AuthorId String
  qoraaga UserProfile @relation (goobaha: [authorId], tixraacyo: [id])
  isAnonymous Boolean @default(been)
  cinwaanka String
  Waxyaabaha ay ka kooban tahay String @db.Text
  originalLang String @default("en")
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  isPinned Boolean @default(been)
  isHidden Boolean @default(been)
  reportCount Int @default(0)
  Faallooyinka ForumFaallo[]
  u codeeyay ForumUpvote[]
  Turjumaada ForumTranslation[]
  la sameeyay At DateTime @default(hadda())
  updatedAt DateTime @updatedAt
  @@index([categoryId])
  @@index([authorId])
  @@index([createdAt])
}

Model ForumComment {
  id String @id @default(uuid())
  Xariga postId
  boostada ForumPost @relation (goobaha: [postId], tixraacyo: [id], onDelete: Cascade)
  String parentId?
  Faallo waalidka? @relation ("FaalloReplies", fields: [parentId], tixraacyo: [id])
  jawaabaha ForumComment[] @relation ("FaalloReplies")
  AuthorId String
  qoraaga UserProfile @relation (goobaha: [authorId], tixraacyo: [id])
  isAnonymous Boolean @default(been)
  Waxyaabaha ay ka kooban tahay String @db.Text
  originalLang String @default("en")
  upvoteCount Int @default(0)
  isHidden Boolean @default(been)
  reportCount Int @default(0)
  u codeeyay ForumUpvote[]
  Turjumaada ForumTranslation[]
  la sameeyay At DateTime @default(hadda())
  @@index([postId])
  @@index([parentId])
}

qaabka ForumUpvote {
  id String @id @default(uuid())
  userId String
  user UserProfile @relation (goobaha: [userId], tixraacyo: [id])
  Xariga postId?
  post ForumPost? @relation (goobaha: [postId], tixraacyo: [id], onDelete: Cascade)
  FaalloId String?
  Faallo ForumFaallo? @relation (goobaha: [commentId], tixraacyo: [id], onDelete: Cascade)
  la sameeyay At DateTime @default(hadda())
  @@unique ([userId, postId])
  @@unique ([userId, commentId])
}

qaabka ForumTranslation {
  id String @id @default(uuid())
  Xariga postId?
  post ForumPost? @relation (goobaha: [postId], tixraacyo: [id], onDelete: Cascade)
  FaalloId String?
  Faallo ForumFaallo? @relation (goobaha: [commentId], tixraacyo: [id], onDelete: Cascade)
  Bartilmaameedka Lang String
  Xariggii Ciwaanka oo la turjumay?
  Turjumay Xadhiga Content @db.Text
  la sameeyay At DateTime @default(hadda())
  @@unique ([postId, targetLang])
  @@unique ([commentId, targetLang])
}
``

Qeybaha Xogta Abuurka

**Qaybaha Xirfadeed:** Isgaadhsiinta, Xirfadaha Bulshada, Nolol maalmeedka, Xirfadaha Mootooyinka, Waxbarashada, Habaynta Dareenka, Xeerarka Dareenka

**Qaybaha Madasha:** Hordhac & Soo Dhawayn, Daawaynta & Daawaynta (ABA/OT/Hadal), Caawinta Dugsiga & IEP, Talooyinka Nolol maalmeedka, Su'aalaha Sharciga & Socdaalka, Navigation Daryeelka Caafimaadka, Sheekooyinka Guusha & Horumarka, Taageerada Guud

**Qaybaha Kheyraadka:** Noocyada Daawaynta & Bixiyeyaasha, Waxbarashada & IEP Ilaha, Xuquuqda Sharciga & U doodista, Kaalmada Maaliyadda, Ururada Bulshada, Aaladaha khadka & Apps-ka, Buugaag & Warbaahineed, Ilaha Gobolka Gaarka ah

---

## Xidhmada

``json
{
  "ku tiirsanaanta": {
    "xiga": "^ 16.0.0",
    "react": "^ 19.0.0",
    "react-dom": "^ 19.0.0",
    "typescript": "^5.7.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "prisma": "^6.0.0",
    "@prisma/client": "^6.0.0",
    "next-intl": "^4.0.0",
    "rtl-detect": "^1.1.2",
    "ai": "^ 6.0.0",
    "@ai-sdk/anthropic": "^1.0.0",
    "@ai-sdk/openai": "^1.0.0",
    "@ai-sdk/react": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "Dabi-dabaylaha-mirge": "^2.5.0",
    "lucide-react": "^ 0.450.0",
    "@serwist/xiga": "^9.0.0",
    "@serwist/precaching": "^9.0.0",
    "@serwist/sw": "^9.0.0",
    "@radix-ui/react-dialog": "^ 1.1.0",
    "@radix-ui/react-tabs": "^ 1.1.0",
    "@radix-ui/react-avatar": "^ 1.1.0",
    "@radix-ui/react-accordion": "^ 1.2.0",
    "zod": "^3.23.0",
    "react-hook-form": "^7.53.0",
    "@hookform/ xallintayaal": "^3.9.0"
  },
  "DevDependencies": {
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^ 6.10.0",
    "@types/rtl-detect": "^1.0.0"
  }
}
``

---

## Tixraac Degdeg ah: Xidhiidhada Dukumeentiyada Muhiimka ah

| Qalabka | Documentation |
|----------|
| Xiga.js 16 | https://nextjs.org/docs |
| Supabase | https://supabase.com/docs |
| Supabase Auth | https://supabase.com/docs/guides/auth |
| Supabase Realtime | https://supabase.com/docs/guides/realtime |
| Supabase pgvector | https://supabase.com/docs/guides/ai |
| xiga-intl | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| Vercel AI SDK | https://ai-sdk.dev/docs/hordhac |
| Claude API | https://platform.claude.com/docs |
| Prisma | https://www.prisma.io/docs |
| Serwist PWA | https://serwist.pages.dev/docs/next/getting-started |
| Dabayl CSS | https://tailwindcss.com/docs |
| Turjumaada Google Cloud | https://cloud.google.com/translate/docs |
| Isku-xidhka AI ee furan | https://platform.openai.com/docs/guides/embeddings |
| Dejinta Vercel | https://vercel.com/docs |

---

Cilmi-baadhistani waxay dabooshaa dhammaan 10ka goobood ee aad codsatay oo ay weheliso istaraatiijiyadda hackathon, qaab-dhismeedka qarsoodiga ah, dookhyada kululeeyaha, iyo naqshadaynta schema oo dhammaystiran. Xirmada waxaa loogu talagalay in adeeg kasta uu ku habboonaado heerarka bilaashka ah ee hackathon, xaqiijintu waa ilaalin gaar ah oo loogu talagalay isticmaaleyaasha aan sharciyeysneyn, iyo waqtiga miisaaniyaddu waa mid macquul ah dhisme 10-saac ah. Waxa aan isku dayay in aan tan fayl ahaan u kaydiyo `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` laakiin fayl qoraal ah waa la diiday. Haddii aad jeclaan lahayd inaan tan ku kaydiyo diskka, waxaad siin kartaa ogolaanshaha Qor anna waxaan abuuri doonaa faylka.
---

## Cilmi-baaris Dheeraad ah (La cusbooneysiiyay Maarso 2026)

Maktabada i18n ee ugu fiican 10+ luuqadood (React + TypeScript)

** Lagu taliyay: react-i18xiga *** — 2.1M soo dejineed usbuucle ah, xalka ugu caansan React i18n.
- Waxaa lagu dhisay nidaamka deegaanka ee soo socda ee i18 oo leh plugins loogu talagalay ogaanshaha luqadda, dejinta async, jamacyo adag
- Xidhmada: 22.2kB (i18xiga 15.1kB + falcelis-i18xiga 7.1kB)
- Waxay taageertaa faylalka tarjumaadda JSON - fududahay in luqadaha lagu daro si kordheysa
- Isha: [Bloog kelmad](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)

** Beddelka fudud: LinguiJS *** - 10.4 kB wadarta (cabir kala badh), fariinta ICU, taageerada TypeScript.

** Xawaaraha hackathon ***: react-i18 ku xiga oo wata faylasha tarjumaadda JSON. Ku bilow Ingiriis + Isbaanish, ku dar luqado kale adigoo isticmaalaya faylasha JSON. U isticmaal Google Translate API ama DeepL turjumaada bilowga ah.

Isha: [GloryWebs 2026 Guide](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)

### Xadka Heerka Bilaashka ah ee Supabase (2026)

**2 mashruuc oo firfircoon** (la hakiyay 1 usbuuc ka dib dhaqdhaqaaq la'aan)
- ** 500 MB *** kaydinta xogta (CPU la wadaago)
- **2 GB** xogta kaydinta ka baxa/bishii
- **50,000** isticmaalayaasha firfircoon ee bishiiba
- ** 1 GB ** kaydinta faylka
- ** 2 GB ** kaydinta goosashada
- **500,000** baryootanka shaqada geesaha/bishii
- Ma jiraan wax kayd ah, ma SLA on qorshaha free

Isha: [Supabase Pricing](https://supabase.com/pricing), [UI Rootiga Breakdown](https://uibakery.io/blog/supabase-pricing)

** Waayo, hackathon ***: 500 MB ayaa ka badan ku filan. Xitaa iyadoo 10,000 isticmaale kasta uu kaydinayo astaanta + xogta ilmaha + qoraallada golaha, waxaad isticmaali doontaa <50 MB. Xadka 50K MAU auth sidoo kale waa deeqsinimo demo.
