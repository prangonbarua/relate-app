# हैकथॉन टेक स्टैक रिसर्च: अप्रवासी माता-पिता + ऑटिज्म ऐप
|||सितम्बर|||
**दिनांक:** 2026-02-28 | **निर्माण समय:** 10 घंटे (सुबह 8:30 - शाम 6:30)
|||सितम्बर|||
---
|||सितम्बर|||
## 1. अनुशंसित स्टैक सारांश
|||सितम्बर|||
| परत | प्रौद्योगिकी | क्यों |
|-------|----|-----|
| **ढांचा** | Next.js 16 (ऐप राउटर) | एसईओ के लिए एसएसआर, एपीआई मार्ग, पीडब्ल्यूए समर्थन, वर्सेल परिनियोजन |
| **मचान** | `create-t3-app` या Nextbase स्टार्टर | पूर्ण-स्टैक टाइप करने का सबसे तेज़ पथ |
| **भाषा** | संपूर्ण टाइपस्क्रिप्ट | एंड-टू-एंड प्रकार की सुरक्षा |
| **बैकएंड एपीआई** | टीआरपीसी (टी3 स्टैक के माध्यम से) या नेक्स्ट.जेएस एपीआई रूट + सुपाबेस क्लाइंट | टाइप-सुरक्षित, शून्य बॉयलरप्लेट |
| **डेटाबेस** | सुपाबेस (पोस्टग्रेएसक्यूएल) | फ्री टियर, ऑथ, रियलटाइम, पीजीवेक्टर, आरएलएस |
| **ओआरएम** | प्रिज्मा | स्वतः उत्पन्न प्रकार, माइग्रेशन टूलींग |
| **प्रामाणिक** | सुपाबेस ऑथ | अज्ञात साइन-इन, फ़ोन ओटीपी, ईमेल/पासवर्ड, कोई PII आवश्यक नहीं |
| **i18n** | अगला-अंतर्राष्ट्रीय | नेटिव नेक्स्ट.जेएस इंटीग्रेशन, आरएससी सपोर्ट, टिनी बंडल, आरटीएल सपोर्ट |
| **यूआई** | shadcn/ui + टेलविंड सीएसएस | घटकों को कॉपी-पेस्ट करें, पूर्ण स्वामित्व, मूलांक a11y, RTL तैयार |
| **एआई चैट** | वर्सेल एआई एसडीके + क्लाउड एपीआई (हाइकु 4.5) | स्ट्रीमिंग, यूज़चैट हुक, लागत प्रभावी |
| **वेक्टर डीबी** | सुपाबेस पीजीवेक्टर | वही डेटाबेस, कोई अतिरिक्त सेवा नहीं, वैक्टर पर आरएलएस |
| **एंबेडिंग** | ओपनएआई टेक्स्ट-एम्बेडिंग-3-छोटा | $0.02/1 मिलियन टोकन, ada-002 से 5 गुना सस्ता |
| **अनुवाद एपीआई** | Google क्लाउड अनुवाद एपीआई | मुफ़्त 500K वर्ण/माह, 130+ भाषाएँ, कोई डेटा भंडारण नहीं |
| **PWA** | सर्विस्ट (@सर्विस्ट/नेक्स्ट) | आधुनिक अगला-पीडब्ल्यूए उत्तराधिकारी, ऑफ़लाइन समर्थन |
| **तैनाती** | वर्सेल (फ्री टियर) | ज़ीरो-कॉन्फिग नेक्स्ट.जेएस परिनियोजन, 100 जीबी बैंडविड्थ |
| **फोरम** | सुपरबेस रीयलटाइम के साथ कस्टम | वास्तविक समय अपडेट, मॉडरेशन के लिए आरएलएस |
|||सितम्बर|||
**कुल अनुमानित मासिक लागत (हैकथॉन/डेमो): $0** -- उपरोक्त सभी सेवाओं में हैकथॉन डेमो के लिए पर्याप्त निःशुल्क टियर हैं।
|||सितम्बर|||
---
|||सितम्बर|||
## 2. प्रतिक्रिया ढाँचा

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

### अनुशंसा: Next.js 16 (ऐप राउटर)
|||सितम्बर|||
**इस ऐप के लिए Vite+React पर Next.js क्यों:**
- एसईओ के लिए एसएसआर/एसएसजी (संसाधन पृष्ठों के लिए महत्वपूर्ण जिन्हें Google पर खोज करने वाले आप्रवासी माता-पिता द्वारा खोजा जाना चाहिए)
- अंतर्निहित एपीआई मार्ग अलग बैकएंड सर्वर की आवश्यकता को समाप्त करते हैं
- रिएक्ट सर्वर घटकों के साथ ऐप राउटर = अनुवादित सामग्री के लिए शून्य क्लाइंट जेएस
- `app/manifest.ts` के माध्यम से मूल PWA मेनिफेस्ट समर्थन
- वर्सेल परिनियोजन शून्य-कॉन्फ़िगरेशन है
- नेक्स्ट-इंटल मूल रूप से आरएससी के साथ काम करता है (अनुवाद सर्वर-साइड = क्लाइंट को 0 बाइट्स प्रदान करता है)
|||सितम्बर|||
**विटे कब बेहतर होगा:**
- बिना एसईओ आवश्यकता वाला शुद्ध एसपीए
- तेज़ डेव सर्वर स्टार्टअप (10 घंटे के हैकथॉन के लिए सीमांत लाभ)
- सरल मानसिक मॉडल (कोई सर्वर/क्लाइंट घटक भेद नहीं)
|||सितम्बर|||
**सर्विस्ट के साथ पीडब्ल्यूए सेटअप (अगला-पीडब्ल्यूए उत्तराधिकारी):**
```बैश
एनपीएम इंस्टॉल @सर्विस्ट/नेक्स्ट @सर्विस्ट/प्रीकैचिंग @सर्विस्ट/एसडब्ल्यू आईडीबी
```
|||सितम्बर|||
प्रमुख ऑफ़लाइन रणनीतियाँ:
- स्थिर संपत्तियों के लिए **CacheFirst** (`/_next/static/`) -- सामग्री-हैशेड, कभी नहीं बदलें
- **नेटवर्कफर्स्ट** एपीआई प्रतिक्रियाओं और गतिशील सामग्री के लिए
- अनुवाद फ़ाइलों और संसाधन पृष्ठों के लिए **StaleWhileRevalidate**
- ऑफ़लाइन डेटा भंडारण के लिए IndexedDB (बाल प्रोफ़ाइल, सहेजे गए संसाधन)
|||सितम्बर|||
**महत्वपूर्ण:** Next.js 16 डिफ़ॉल्ट रूप से टर्बोपैक का उपयोग करता है, लेकिन सर्विस्ट को वेबपैक की आवश्यकता होती है। आपको तदनुसार बिल्ड को कॉन्फ़िगर करने की आवश्यकता होगी।
|||सितम्बर|||
**PWA मेनिफेस्ट** (अंतर्निहित Next.js समर्थन):
```टाइपस्क्रिप्ट
//app/manifest.ts
'अगला' से आयात प्रकार {MetadataRoute}
|||सितम्बर|||
डिफ़ॉल्ट फ़ंक्शन मेनिफेस्ट निर्यात करें(): मेटाडेटारूट.मैनिफ़ेस्ट {
  वापसी {
    नाम: 'एएसडी ब्रिज',
    संक्षिप्त_नाम: 'एएसडी ब्रिज',
    विवरण: 'ऑटिस्टिक बच्चों वाले आप्रवासी परिवारों का समर्थन करना',
    प्रारंभ_यूआरएल: '/',
    प्रदर्शन: 'स्टैंडअलोन',
    पृष्ठभूमि_रंग: '#ffffff',
    थीम_रंग: '#4F46E5',
    प्रतीक: [
      {src: '/icon-192.png', आकार: '192x192', प्रकार: 'image/png' },
      {src: '/icon-512.png', आकार: '512x512', प्रकार: 'image/png' },
    ],
  }
}
```

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

**स्रोत:**
- [वाइट बनाम नेक्स्ट.जेएस पूर्ण तुलना 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Next.js PWA गाइड](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [सर्विस्ट प्रारंभ करना](https://serwist.pages.dev/docs/next/getting-started)
- [नेक्स्ट.जेएस 16 पीडब्ल्यूए विद सर्विस्ट](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [सर्विस्ट के साथ Next.js में PWA का निर्माण](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)
|||सितम्बर|||
---
|||सितम्बर|||
## 3. टाइपस्क्रिप्ट बैकेंड
|||सितम्बर|||
### अनुशंसा: नेक्स्ट.जेएस एपीआई रूट + सुपाबेस क्लाइंट (प्राथमिक) या टीआरपीसी (यदि टी3 का उपयोग कर रहे हैं)
|||सितम्बर|||
**विकल्प ए: नेक्स्ट.जेएस एपीआई रूट + सुपाबेस (हैकथॉन के लिए सबसे सरल)**
- कोई अलग बैकएंड सर्वर नहीं
- सुपाबेस जेएस क्लाइंट डीबी क्वेरीज़, ऑथ, रियलटाइम को संभालता है
- एआई चैट, अनुवाद एपीआई कॉल और किसी भी सर्वर-साइड लॉजिक के लिए एपीआई मार्ग
- स्थापित करने में सबसे तेज़
|||सितम्बर|||
**विकल्प बी: टी3 स्टैक के माध्यम से टीआरपीसी (सर्वोत्तम डीएक्स यदि टीम को पता हो)**
- फ्रंटएंड और बैकएंड के बीच एंड-टू-एंड प्रकार की सुरक्षा
- फ्रंटएंड में एपीआई कॉल के लिए स्वत: पूर्णता
- उत्पन्न प्रकारों के लिए प्रिज्मा के साथ काम करता है
- `create-t3-app` सबकुछ तैयार करता है
|||सितम्बर|||
```बैश
# विकल्प ए: प्लेन नेक्स्ट.जेएस + सुपाबेस
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
|||सितम्बर|||
# विकल्प बी: टी3 स्टैक
npx create-t3-app@latest my-app
# चयन करें: नेक्स्ट.जेएस, टाइपस्क्रिप्ट, टेलविंड सीएसएस, टीआरपीसी, प्रिज्मा
```

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

**व्यक्त/फास्टिफाई क्यों नहीं करें:**
- परिनियोजन जटिलता जोड़ता है (होस्ट के लिए अलग सर्वर)
- इस उपयोग के मामले में Next.js एपीआई मार्गों पर कोई लाभ नहीं
- अतिरिक्त 30-60 मिनट का सेटअप आपके पास नहीं है
|||सितम्बर|||
**सर्वर रहित क्यों नहीं (लैम्ब्डा/नेटलिफाई फ़ंक्शंस):**
- वर्सेल पर Next.js एपीआई रूट डिफ़ॉल्ट रूप से सर्वर रहित हैं
- अलग फ़ंक्शन इंफ्रास्ट्रक्चर की कोई आवश्यकता नहीं
|||सितम्बर|||
**स्रोत:**
- [टीआरपीसी + सुपाबेस टाइपस्क्रिप्ट](https://noahflk.com/blog/supabase-typescript-trpc)
- [टी3 स्टैक 2025 गाइड](https://rajeshkhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [T3 ऐप बनाएं](https://create.t3.gg/)
- [टीआरपीसी आधिकारिक](https://trpc.io/)
|||सितम्बर|||
---
|||सितम्बर|||
## 4. डेटाबेस
|||सितम्बर|||
### अनुशंसा: सुपाबेस (पोस्टग्रेएसक्यूएल)
|||सितम्बर|||
**सुपाबेस इस परियोजना के लिए क्यों जीता:**
|||सितम्बर|||
| फ़ीचर | सुपाबेस | फायरबेस | प्लैनेटस्केल |
|--|----------|-------|---|
| निःशुल्क स्तरीय डीबी भंडारण | 500 एमबी | 1 जीबी (स्पार्क) | बंद किया गया फ्री टियर |
| प्रामाणिक शामिल | हाँ (50K MAU निःशुल्क) | हाँ (50K MAU निःशुल्क) | नहीं |
| वास्तविक समय | हाँ (परिवर्तन पोस्ट करें) | हाँ (श्रेणी में सर्वश्रेष्ठ) | नहीं |
| वेक्टर खोज (पीजीवेक्टर) | हाँ, अंतर्निर्मित | नहीं | नहीं |
| एसक्यूएल समर्थन | पूर्ण PostgreSQL | केवल NoSQL | MySQL |
| आरएलएस (पंक्ति स्तर सुरक्षा) | हाँ, SQL-आधारित | फायरबेस सुरक्षा नियम | नहीं |
| अनाम लेख | हाँ, अंतर्निर्मित | हाँ | एन/ए |
| खुला स्रोत | हाँ | नहीं | आंशिक रूप से |
| डेटा पोर्टेबिलिटी | पूर्ण (यह पोस्टग्रेज है) | विक्रेता लॉक-इन | MySQL संगत |

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

**सुपबेस फ्री टियर (2026):**
- 2 सक्रिय परियोजनाएँ
- 500 एमबी डेटाबेस स्टोरेज
- 2 जीबी डेटाबेस निकास
- 50,000 एमएयू (प्रमाणीकरण)
- 1 जीबी फ़ाइल भंडारण
- 500,000 एज फ़ंक्शन आमंत्रण
- किसी क्रेडिट कार्ड की आवश्यकता नहीं, कभी समाप्त नहीं होता
|||सितम्बर|||
**इस ऐप के लिए फायरबेस की जगह सुपाबेस क्यों:**
1. एआई संसाधन खोज के लिए पीजीवेक्टर (कोई अतिरिक्त सेवा की आवश्यकता नहीं)
2. जटिल प्रश्नों के लिए पूर्ण एसक्यूएल (बाल मील के पत्थर, कौशल ट्रैकिंग)
3. गोपनीयता-संरक्षण अनाम फ़ोरम एक्सेस के लिए आरएलएस
4. डेटा पोर्टेबिलिटी (Google इकोसिस्टम में लॉक नहीं)
5. संबंधपरक डेटा के लिए बेहतर (उपयोगकर्ता -> बच्चे -> कौशल -> मील के पत्थर)
|||सितम्बर|||
**प्रिज्मा एकीकरण:**
```प्रिज्मा
डेटासोर्स डीबी {
  प्रदाता = "पोस्टग्रेस्क्ल"
  url = env('DATABASE_URL')
  DirectUrl = env('DIRECT_URL')
}
```
|||सितम्बर|||
**स्रोत:**
- [सुपाबेस बनाम फायरबेस 2026 समीक्षा](https://hackceleration.com/supabase-review/)
- [फायरबेस बनाम सुपाबेस 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025- Which-one-actually-scales-with-you-2374)
- [सुपाबेस मूल्य निर्धारण 2026](https://uibakery.io/blog/supabase-pricing)
- [सुपाबेस फ्री टियर लिमिट्स](https://supabase.com/pricing)
|||सितम्बर|||
---
|||सितम्बर|||
## 5. प्रमाणीकरण
|||सितम्बर|||
### अनुशंसा: अनाम साइन-इन + फ़ोन ओटीपी + ईमेल/पासवर्ड के साथ सुपाबेस प्रमाणीकरण
|||सितम्बर|||
**इस दर्शक वर्ग के लिए महत्वपूर्ण डिज़ाइन सिद्धांत:**
ऐप को व्यक्तिगत पहचान योग्य जानकारी प्रदान किए बिना प्रयोग करने योग्य होना चाहिए। कई आप्रवासी माता-पिता (विशेष रूप से गैर-दस्तावेज) ऐसे ऐप का उपयोग नहीं करेंगे जिसके लिए सरकारी आईडी/एसएसएन, वास्तविक नाम सत्यापन, पता संग्रह, या अनिवार्य ईमेल की आवश्यकता होती है।

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

**प्रमाणीकरण स्तर (प्रगतिशील ट्रस्ट):**
|||सितम्बर|||
| टियर | विधि | यह क्या खोलता है | पीआईआई आवश्यक |
|------|--------|----------------|----|
| 1 | अनाम साइन-इन | संसाधन ब्राउज़ करें, AI चैट का उपयोग करें, फ़ोरम देखें | कोई नहीं |
| 2 | फ़ोन ओटीपी | फ़ोरम में पोस्ट करें, चाइल्ड प्रोफ़ाइल सहेजें | केवल फ़ोन नंबर |
| 3 | ईमेल + पासवर्ड | वसूली सहित पूरा हिसाब | ईमेल पता |
|||सितम्बर|||
**सुपाबेस अनाम प्रामाणिक:**
```टाइपस्क्रिप्ट
// गुमनाम रूप से साइन इन करें - किसी PII की आवश्यकता नहीं है
स्थिरांक { डेटा, त्रुटि } = प्रतीक्षा करें supabase.auth.signInAnonymous()
|||सितम्बर|||
// बाद में, उपयोगकर्ता एक फ़ोन नंबर लिंक कर सकता है
स्थिरांक { डेटा, त्रुटि } = प्रतीक्षा करें supabase.auth.updateUser({
  फ़ोन: '+1234567890',
})
```
|||सितम्बर|||
**फोन ओटीपी सेटअप:**
सुपाबेस ट्विलियो, मैसेजबर्ड, टेक्स्टलोकल और वॉनेज के माध्यम से फोन प्रमाणीकरण का समर्थन करता है। उपयोगकर्ताओं को एसएमएस के माध्यम से 6 अंकों का पिन प्राप्त होता है, जो 60 सेकंड के लिए वैध होता है।
|||सितम्बर|||
**गुमनाम उपयोगकर्ताओं के लिए सुरक्षा:**
- दुरुपयोग को रोकने के लिए कैप्चा सक्षम करें (क्लाउडफ्लेयर टर्नस्टाइल अनुशंसित - निःशुल्क)।
- आईपी-आधारित दर सीमा: 30 अनुरोध/घंटा (सुपाबेस डैशबोर्ड में समायोज्य)
- आरएलएस नीतियां 'is_anonymous' JWT दावे के माध्यम से अज्ञात बनाम प्रमाणित उपयोगकर्ताओं को अलग कर सकती हैं
|||सितम्बर|||
**इस ऐप के लिए क्लर्क क्यों नहीं:**
- कोई अंतर्निहित अनाम लॉगिन नहीं
- 10K के बाद $0.02/MAU (सुपरबेस: 50K निःशुल्क)
- इस उपयोग के मामले के लिए ओवरकिल यूआई
- बाहरी निर्भरता जोड़ता है
|||सितम्बर|||
**Auth0 क्यों नहीं:**
- हैकथॉन के लिए जटिल सेटअप
- कोई गुमनाम लेख नहीं
- फ्री टियर 7,500 एमएयू तक सीमित

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

**स्रोत:**
- [सुपाबेस एनोनिमस साइन-इन](https://supabase.com/docs/guides/auth/auth-anonymous)
- [सुपाबेस फोन लॉगिन](https://supabase.com/docs/guides/auth/phone-login)
- [क्लर्क बनाम सुपाबेस ऑथ](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [गुमनाम साइन-इन की सुरक्षा](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)
|||सितम्बर|||
---
|||सितम्बर|||
## 6. अंतर्राष्ट्रीयकरण (i18n)
|||सितम्बर|||
### सिफ़ारिश: अगला-अंतर्राष्ट्रीय
|||सितम्बर|||
**रिएक्ट-आई18नेक्स्ट या रिएक्ट-इंटल पर नेक्स्ट-इंटल क्यों:**
|||सितम्बर|||
| फ़ीचर | अगला-अंतर्राष्ट्रीय | प्रतिक्रिया-i18next | प्रतिक्रिया-अंतर्राष्ट्रीय |
|---------|--------|------------|----|
| Next.js ऐप राउटर सपोर्ट | मूलनिवासी | रैपर के माध्यम से | रैपर के माध्यम से |
| सर्वर घटक समर्थन | बिल्ट-इन (0 क्लाइंट जेएस) | सेटअप की आवश्यकता है | सेटअप की आवश्यकता है |
| बंडल का आकार | ~4केबी | ~8केबी | ~12केबी |
| आरटीएल समर्थन | अंतर्निर्मित | मैनुअल | मैनुअल |
| बहुवचन रूप (अरबी: 6 रूप) | स्वचालित आईसीयू | मैनुअल कॉन्फ़िगरेशन | स्वचालित आईसीयू |
| प्रकार सुरक्षा | टाइपस्क्रिप्ट-प्रथम | अच्छा | अच्छा |
|||सितम्बर|||
**स्थापना:**
```बैश
एनपीएम नेक्स्ट-इंटल आरटीएल-डिटेक्ट इंस्टॉल करें
एनपीएम इंस्टाल --सेव-देव @टाइप्स/आरटीएल-डिटेक्ट
```
|||सितम्बर|||
**अरबी, फ़ारसी, उर्दू के लिए आरटीएल सेटअप:**
```टाइपस्क्रिप्ट
// हुक/useTextDirection.ts
'नेक्स्ट-इंटल' से आयात { यूज़लोकेल };
'rtl-detect' से आयात { isRtlLang };

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

निर्यात फ़ंक्शन उपयोग टेक्स्टडायरेक्शन() {
  स्थिरांक स्थान = उपयोगस्थान();
  वापसी isRtlLang(locale) ? 'आरटीएल' : 'लीटर';
}
|||सितम्बर|||
// ऐप/[लोकेल]/लेआउट.tsx
निर्यात डिफ़ॉल्ट फ़ंक्शन लोकेललेआउट({ बच्चे, पैरामीटर: { लोकेल }}) {
  स्थिरांक दिशा = isRtlLang(locale) ? 'आरटीएल' : 'लीटर';
  वापसी (
    <html lang={locale} dir={दिशा}>
      <body>{बच्चे}</body>
    </html>
  );
}
```
|||सितम्बर|||
**अनुवाद फ़ाइल संरचना:**
```
संदेश/
  en/
    Common.json # साझा यूआई स्ट्रिंग्स (बटन, नेविगेशन, त्रुटियां)
    auth.json # लॉगिन, साइनअप, प्रोफ़ाइल
    resource.json # संसाधन लाइब्रेरी
    forum.json # फोरम/समुदाय
    ai-chat.json # AI सहायक
    child-profile.json # चाइल्ड ट्रैकिंग
    कौशल.जेसन # कौशल कार्ड
  एआर/ # अरबी (आरटीएल)
  तों/ # स्पेनिश
  zh/ # चीनी (सरलीकृत)
  fa/ # फ़ारसी/फ़ारसी (RTL)
  आपका/ # उर्दू (आरटीएल)
```
|||सितम्बर|||
**एमवीपी के लिए प्राथमिकता वाली भाषाएँ:** अंग्रेजी (डिफ़ॉल्ट), स्पेनिश, अरबी (तकनीकी क्षमता प्रदर्शित करने के लिए आरटीएल), चीनी (सरलीकृत)।
|||सितम्बर|||
**आरटीएल के लिए सीएसएस--टेलविंड तार्किक गुणों का उपयोग करें:**
- `pl-4` -> `ps-4` (पैडिंग-इनलाइन-स्टार्ट)
- `पीआर-4` -> `पीई-4` (पैडिंग-इनलाइन-एंड)
- `टेक्स्ट-लेफ्ट` -> `टेक्स्ट-स्टार्ट`
- `टेक्स्ट-राइट` -> `टेक्स्ट-एंड`
- `एमएल-ऑटो` -> `एमएस-ऑटो`
- `मिस्टर-ऑटो` -> `मी-ऑटो`
|||सितम्बर|||
**फोरम सामग्री के लिए मशीनी अनुवाद:**
|||सितम्बर|||
| सेवा | फ्री टियर | मुफ़्त के बाद कीमत | भाषाएँ | गोपनीयता |
|--|----|---|---|---|---|
| Google क्लाउड अनुवाद | 500K वर्ण/माह (स्थायी) | $20/1M वर्ण | 130+ | प्रशिक्षण के लिए कोई डेटा संग्रहीत/उपयोग नहीं किया गया |
| डीपएल | 500K वर्ण/माह | $25/1 मिलियन वर्ण + $5.49/महीना | 30+ | फ्री टियर डेटा संग्रहीत किया जा सकता है |
| अमेज़न अनुवाद | 2M वर्ण/माह (केवल 12 महीने) | $15/1 मिलियन वर्ण | 75+ | कोई डेटा संग्रहीत नहीं |
|||सितम्बर|||
**सिफारिश:** गूगल क्लाउड ट्रांसलेशन एपीआई - स्थायी फ्री टियर, सबसे बड़ी भाषा कवरेज (सभी लक्षित आरटीएल भाषाओं सहित 130+ भाषाएं), मजबूत गोपनीयता गारंटी (प्रशिक्षण के लिए कोई डेटा संग्रहीत या उपयोग नहीं किया गया)।

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

**स्रोत:**
- [अगला-अंतर्राष्ट्रीय दस्तावेज़ीकरण](https://next-intl.dev/)
- [अगली-अंतर्राष्ट्रीय संपूर्ण गाइड 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [प्रतिक्रिया-intl बनाम प्रतिक्रिया-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [नेक्स्ट.जेएस आरटीएल सपोर्ट](https://lingo.dev/en/nextjs-i18n/right-to-left-भाषाएँ)
- [Google क्लाउड अनुवाद मूल्य निर्धारण](https://cloud.google.com/translate/pricing)
- [डीपएल बनाम गूगल ट्रांसलेट](https://taia.io/blog/technology-and-translation/depl-vs-google-translate-vs-microsoft-translator/)
|||सितम्बर|||
---
|||सितम्बर|||
## 7. यूआई कंपोनेंट लाइब्रेरी
|||सितम्बर|||
### अनुशंसा: shadcn/ui + टेलविंड सीएसएस
|||सितम्बर|||
**shadcn/ui क्यों:**
- घटकों को आपके प्रोजेक्ट में कॉपी-पेस्ट किया जाता है (पूर्ण स्वामित्व, चिंता की कोई निर्भरता अद्यतन नहीं)
- रेडिक्स यूआई प्राइमेटिव्स पर निर्मित (WAI-ARIA अनुरूप, कीबोर्ड नेविगेशन, स्क्रीन रीडर समर्थन)
- टेलविंड सीएसएस मूल (आरटीएल के लिए तार्किक गुण)
- 40+ घटक उपलब्ध हैं
- टेम्पलेट्स के माध्यम से आरटीएल समर्थन
- डार्क/लाइट मोड बिल्ट-इन
- शून्य रनटाइम ओवरहेड
|||सितम्बर|||
**स्थापना:**
```बैश
npx shadcn@latest init
एनपीएक्स shadcn@नवीनतम ऐड बटन कार्ड डायलॉग इनपुट फॉर्म शीट टैब्स अवतार बैज अकॉर्डियन कमांड टोस्ट
```
|||सितम्बर|||
**इस ऐप के मुख्य घटक:**
- `कार्ड` - संसाधन कार्ड, कौशल कार्ड, बाल प्रोफ़ाइल कार्ड
- `डायलॉग` / `शीट` - मोडल इंटरैक्शन, भाषा स्विचर
- 'फॉर्म' + 'इनपुट' - चाइल्ड प्रोफाइल फॉर्म, फोरम पोस्ट निर्माण
- `टैब` - अनुभागों के बीच नेविगेशन
- `अवतार` - फोरम उपयोगकर्ता प्रदर्शन (अनाम विकल्प के साथ)
- `बैज` - कौशल स्तर, भाषा टैग
- `अकॉर्डियन` - अक्सर पूछे जाने वाले प्रश्न, संसाधन विवरण
- `कमांड` - संसाधनों के लिए खोज पैलेट
- `टोस्ट` - सूचनाएं
|||सितम्बर|||
** अंतर्निहित अभिगम्यता:**
- सभी रेडिक्स-आधारित घटकों में ARIA भूमिकाएँ और विशेषताएँ स्वचालित रूप से शामिल होती हैं
- कीबोर्ड नेविगेशन बॉक्स से बाहर काम करता है (टैब, एंटर, एस्केप, एरो कुंजी)
- फोकस प्रबंधन और मोडल्स में फोकस ट्रैपिंग
- गतिशील सामग्री के लिए स्क्रीन रीडर घोषणाएँ
- `aria-describeby` सत्यापन त्रुटियों पर स्वचालित रूप से जुड़ा हुआ है
- फॉर्म त्रुटियों पर `एरिया-अमान्य` सेट

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

**चक्र यूआई क्यों नहीं:** हेवी रनटाइम (सीएसएस-इन-जेएस), प्रोप-आधारित स्टाइल टेलविंड उपयोगिता वर्गों की तुलना में कम लचीला, 2025-2026 में कम पारिस्थितिकी तंत्र गति।
|||सितम्बर|||
**सामग्री यूआई क्यों नहीं:** बहुत भारी बंडल, Google की डिज़ाइन भाषा सामुदायिक ऐप के लिए क्लिनिकल लग सकती है, गहराई से अनुकूलित करना कठिन है।
|||सितम्बर|||
**स्रोत:**
- [shadcn/ui गाइड 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [सुलभ shadcn/ui घटक](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [रिएक्ट यूआई लाइब्रेरीज़ 2025 तुलना](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-चक्र)
- [shadcn/ui बनाम चक्र बनाम MUI](https://asepalazhari.com/blog/shadcn-ui-vs-Chakra-ui-vs-material-ui-component-battle-2025)
|||सितम्बर|||
---
|||सितम्बर|||
## 8. फोरम/सामुदायिक सुविधा
|||सितम्बर|||
### आर्किटेक्चर: सुपरबेस रीयलटाइम के साथ कस्टम बिल्ड
|||सितम्बर|||
**डेटा मॉडल (एसक्यूएल):**
```एसक्यूएल
-- फोरम श्रेणियाँ
तालिका बनाएं forum_श्रेणियाँ (
  आईडी यूयूआईडी प्राथमिक कुंजी डिफ़ॉल्ट gen_random_uuid(),
  name_key पाठ शून्य नहीं है,
  विवरण_कुंजी पाठ,
  आइकन पाठ,
  सॉर्ट_ऑर्डर पूर्णांक डिफ़ॉल्ट 0,
  अभी TIMESTAMPTZ पर बनाया गया डिफ़ॉल्ट()
);
|||सितम्बर|||
- फोरम पोस्ट (थ्रेड्स)
टेबल फोरम_पोस्ट बनाएं (
  आईडी यूयूआईडी प्राथमिक कुंजी डिफ़ॉल्ट gen_random_uuid(),
  श्रेणी_आईडी यूयूआईडी संदर्भ फोरम_श्रेणियां(आईडी),
  लेखक_आईडी यूयूआईडी संदर्भ auth.users(id),
  is_anonymous बूलियन डिफ़ॉल्ट ग़लत,
  डिस्प्ले_नाम टेक्स्ट,
  शीर्षक पाठ शून्य नहीं,
  सामग्री पाठ शून्य नहीं,
  मूल_भाषा पाठ डिफ़ॉल्ट 'एन',
  upvote_count पूर्णांक डिफ़ॉल्ट 0,
  टिप्पणी_गणना पूर्णांक डिफ़ॉल्ट 0,
  is_pinned बूलियन डिफ़ॉल्ट ग़लत,
  is_moderated बूलियन डिफ़ॉल्ट ग़लत,
  अभी TIMESTAMPTZ पर बनाया गया डिफ़ॉल्ट(),
  TIMESTAMPTZ डिफ़ॉल्ट पर अभी अपडेट किया गया()
);

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

-- पोस्ट पर टिप्पणियाँ
तालिका बनाएं forum_comments (
  आईडी यूयूआईडी प्राथमिक कुंजी डिफ़ॉल्ट gen_random_uuid(),
  पोस्ट_आईडी यूयूआईडी संदर्भ फोरम_पोस्ट(आईडी) डिलीट कैस्केड पर,
  पेरेंट_आईडी यूयूआईडी संदर्भ फोरम_टिप्पणियाँ(आईडी),
  लेखक_आईडी यूयूआईडी संदर्भ auth.users(id),
  is_anonymous बूलियन डिफ़ॉल्ट ग़लत,
  डिस्प्ले_नाम टेक्स्ट,
  सामग्री पाठ शून्य नहीं,
  मूल_भाषा पाठ डिफ़ॉल्ट 'एन',
  upvote_count पूर्णांक डिफ़ॉल्ट 0,
  अभी TIMESTAMPTZ पर बनाया गया डिफ़ॉल्ट()
);
|||सितम्बर|||
- अपवोट्स
टेबल बनाएं फोरम_अपवोट्स (
  आईडी यूयूआईडी प्राथमिक कुंजी डिफ़ॉल्ट gen_random_uuid(),
  user_id UUID संदर्भ auth.users(id),
  पोस्ट_आईडी यूयूआईडी संदर्भ फोरम_पोस्ट(आईडी),
  comment_id UUID संदर्भ फोरम_टिप्पणियाँ(id),
  अभी TIMESTAMPTZ पर बनाया गया डिफ़ॉल्ट(),
  अद्वितीय(user_id, post_id),
  अद्वितीय(उपयोगकर्ता_आईडी, टिप्पणी_आईडी)
);
|||सितम्बर|||
-- कैश्ड अनुवाद
तालिका बनाएं forum_translations (
  आईडी यूयूआईडी प्राथमिक कुंजी डिफ़ॉल्ट gen_random_uuid(),
  source_type पाठ शून्य नहीं है,
  source_id UUID शून्य नहीं,
  लक्ष्य_भाषा पाठ शून्य नहीं,
  अनुवादित_शीर्षक पाठ,
  अनुवादित_सामग्री पाठ शून्य नहीं है,
  अभी TIMESTAMPTZ पर बनाया गया डिफ़ॉल्ट(),
  अद्वितीय(स्रोत_आईडी, लक्ष्य_भाषा)
);
```
|||सितम्बर|||
**वास्तविक समय अपडेट:**
```टाइपस्क्रिप्ट
कॉन्स्ट चैनल = सुपरबेस
  .चैनल('फोरम-पोस्ट')
  .on('postgres_changes', {
    घटना: 'सम्मिलित करें',
    स्कीमा: 'सार्वजनिक',
    तालिका: 'फ़ोरम_पोस्ट',
    फ़िल्टर: `category_id=eq.${categoryId}`
  }, (पेलोड) => {
    // यूआई में नई पोस्ट जोड़ें
  })
  .सदस्यता लें()
```
|||सितम्बर|||
**गुमनाम पोस्टिंग सुरक्षा:**
- अनाम उपयोगकर्ताओं (सुपाबेस अनाम प्रमाणीकरण) की पोस्ट को अलग तरीके से चिह्नित किया जा सकता है
- आरएलएस नीति जेडब्ल्यूटी में `is_anonymous` दावे की जांच करती है
- रिक्त नामों के बजाय छद्म शब्द प्रदर्शित करें (उदाहरण के लिए, "पैरेंट #4827")
|||सितम्बर|||
**मॉडरेशन (एमवीपी):** प्रत्येक पोस्ट/टिप्पणी पर सरल रिपोर्ट बटन। रिपोर्ट की गई सामग्री को छिपाने के लिए व्यवस्थापक ध्वज। भविष्य: क्लाउड एपीआई के माध्यम से एआई-संचालित सामग्री मॉडरेशन।
|||सितम्बर|||
**ऑन-डिमांड अनुवाद:** पोस्ट मूल भाषा में संग्रहीत हैं। "अनुवाद" बटन Google क्लाउड अनुवाद एपीआई को ट्रिगर करता है। अनुवाद `फ़ोरम_ट्रांसलेशन` तालिका में कैश किया गया। उसी भाषा के लिए बाद के अनुरोध कैश से दिए गए।
|||सितम्बर|||
**स्रोत:**
- [सुपाबेस रीयलटाइम](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [सुपाबेस के साथ सामुदायिक फोरम बनाएं](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [सुपाबेस आरएलएस](https://supabase.com/docs/guides/database/postgres/row-level-security)

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
|||सितम्बर|||
## 9. एआई एकीकरण
|||सितम्बर|||
### आर्किटेक्चर: वर्सेल एआई एसडीके + क्लाउड एपीआई + सुपाबेस पीजीवेक्टर आरएजी
|||सितम्बर|||
**डेटा प्रवाह:**
```
उपयोगकर्ता प्रश्न (बहुभाषी)
  -> [अंग्रेजी में Google अनुवाद] (यदि अंग्रेजी नहीं है)
  -> [एम्बेडिंग उत्पन्न करें] (पाठ-एम्बेडिंग-3-छोटा)
  -> [सुपबेस पीजीवेक्टर समानता खोज]
  -> [प्राप्त संदर्भ दस्तावेज़]
  -> [सिस्टम प्रॉम्प्ट + संदर्भ + उपयोगकर्ता प्रश्न के साथ क्लाउड एपीआई]
  -> [अंग्रेजी में प्रतिक्रिया]
  -> [उपयोगकर्ता की भाषा में Google अनुवाद] (यदि अंग्रेजी नहीं है)
  -> उपयोगकर्ता को प्रदर्शित (स्ट्रीम किया गया)
```
|||सितम्बर|||
**वर्सेल एआई एसडीके सेटअप:**
```बैश
एनपीएम इंस्टॉल एआई @एआई-एसडीके/एंथ्रोपिक @एआई-एसडीके/ओपनाई @एआई-एसडीके/रिएक्ट
```
|||सितम्बर|||
```टाइपस्क्रिप्ट
// ऐप/एपीआई/चैट/रूट.टीएस
'@ai-sdk/anthropic' से आयात {एंथ्रोपिक };
'एआई' से आयात { स्ट्रीमटेक्स्ट };
|||सितम्बर|||
एसिंक फ़ंक्शन निर्यात करें POST(अनुरोध: अनुरोध) {
  स्थिरांक { संदेश, स्थान } = प्रतीक्षा req.json();
  स्थिरांक परिणाम = स्ट्रीमटेक्स्ट({
    मॉडल: एंथ्रोपिक('क्लाउड-3-5-हाइकु-20241022'),
    सिस्टम: SYSTEM_PROMPT,
    संदेश: संवर्धित संदेश,
  });
  वापसी परिणाम.toDataStreamResponse();
}
```
|||सितम्बर|||
```टाइपस्क्रिप्ट
// क्लाइंट-साइड: घटक/AiChat.tsx
'क्लाइंट का उपयोग करें';
'@ai-sdk/react' से आयात { useChat };

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

निर्यात फ़ंक्शन AiChat() {
  स्थिरांक {संदेश, इनपुट, हैंडलइनपुटचेंज, हैंडलसबमिट, इज़लोडिंग } = यूज़चैट({
    एपीआई: '/एपीआई/चैट',
  });
  // स्ट्रीमिंग प्रतिक्रियाओं के साथ चैट यूआई
}
```
|||सितम्बर|||
**हैकथॉन के लिए क्लाउड मॉडल चयन:**
|||सितम्बर|||
| मॉडल | इनपुट/1एम टोकन | आउटपुट/1एम टोकन | के लिए सर्वश्रेष्ठ |
|-------|----------------|----|---|
| क्लाउड हाइकु 4.5 | $1.00 | $5.00 | **चैट प्रतिक्रियाएँ (अनुशंसित)** |
| क्लाउड सॉनेट 4.5 | $3.00 | $15.00 | जटिल तर्क |
| क्लाउड ओपस 4.5 | $5.00 | $25.00 | चैट के लिए ओवरकिल |
|||सितम्बर|||
**सिफारिश:** क्लाउड हाइकु 4.5 - तेज़ (स्ट्रीमिंग के लिए कम विलंबता), सस्ता (हैकथॉन बजट के लिए बढ़िया), और संसाधन प्रश्नोत्तर और सामान्य मार्गदर्शन के लिए पर्याप्त सक्षम।
|||सितम्बर|||
**सिस्टम प्रॉम्प्ट (स्वास्थ्य जानकारी के लिए सुरक्षा-प्रथम):**
```
आप बच्चों के अप्रवासी माता-पिता की मदद करने वाले एक सहायक एआई सहायक हैं
ऑटिज़्म स्पेक्ट्रम डिसऑर्डर (एएसडी) के साथ। आप इसके बारे में जानकारी प्रदान करते हैं:
- एएसडी संसाधन, उपचार और शैक्षिक कार्यक्रम
- अमेरिकी स्वास्थ्य सेवा और शिक्षा प्रणालियों को नेविगेट करना
- IEP (व्यक्तिगत शिक्षा कार्यक्रम) प्रक्रियाएँ
- उपलब्ध सरकारी और गैर-लाभकारी सहायता कार्यक्रम
- सामान्य विकासात्मक मील के पत्थर
|||सितम्बर|||
महत्वपूर्ण सुरक्षा दिशानिर्देश:
- आप डॉक्टर नहीं हैं. हमेशा स्वास्थ्य देखभाल पेशेवरों से परामर्श लेने की सलाह दें।
- कभी भी निदान न करें या विशिष्ट चिकित्सा उपचार का सुझाव न दें।
- चिकित्सा/विकास संबंधी विषयों पर चर्चा करते समय हमेशा एक अस्वीकरण शामिल करें।
- यदि कोई उपयोगकर्ता किसी चिकित्सीय आपात स्थिति का वर्णन करता है, तो उन्हें 911 पर कॉल करने के लिए निर्देशित करें।
- सांस्कृतिक रूप से संवेदनशील रहें और पारिवारिक संरचना के बारे में धारणाओं से बचें।
- सरल, स्पष्ट भाषा का प्रयोग करें।
- जब अनिश्चित हो, तो अनुमान लगाने के बजाय "मुझे नहीं पता" कहें।
- व्यक्तिगत पहचान संबंधी जानकारी कभी एकत्र न करें या न ही मांगें।
```
|||सितम्बर|||
**सुपबेस पीजीवेक्टर आरएजी सेटअप:**
```एसक्यूएल
यदि वेक्टर मौजूद नहीं है तो एक्सटेंशन बनाएं;
|||सितम्बर|||
तालिका संसाधन बनाएं (
  आईडी यूयूआईडी प्राथमिक कुंजी डिफ़ॉल्ट gen_random_uuid(),
  शीर्षक पाठ शून्य नहीं,
  सामग्री पाठ शून्य नहीं,
  श्रेणी पाठ शून्य नहीं,
  source_url पाठ,
  राज्य पाठ,
  भाषा पाठ डिफ़ॉल्ट 'एन',
  एम्बेडिंग वेक्टर(1536),
  अभी TIMESTAMPTZ पर बनाया गया डिफ़ॉल्ट(),
  TIMESTAMPTZ डिफ़ॉल्ट पर अभी अपडेट किया गया()
);

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

एचएनएसडब्ल्यू (वेक्टर_कोसाइन_ऑप्स को एम्बेड करना) का उपयोग करके संसाधनों पर सूचकांक बनाएं;
|||सितम्बर|||
फ़ंक्शन बनाएं या बदलें मिलान_संसाधन(
  query_embedding वेक्टर(1536),
  मैच_थ्रेसहोल्ड फ़्लोट डिफ़ॉल्ट 0.7,
  मैच_काउंट INT डिफ़ॉल्ट 5
)
रिटर्न टेबल (आईडी यूयूआईडी, शीर्षक टेक्स्ट, सामग्री टेक्स्ट, श्रेणी टेक्स्ट, समानता फ्लोट)
भाषा plpgsql AS $$
शुरू
  वापसी प्रश्न
  आर.आईडी, आर.शीर्षक, आर.सामग्री, आर.श्रेणी चुनें,
    1 - (r.embedding <=> query_embedding) समानता के रूप में
  संसाधनों से आर
  कहां 1 - (आर.एम्बेडिंग <=> क्वेरी_एम्बेडिंग) > मैच_थ्रेसहोल्ड
  r.embedding <=> query_embedding द्वारा आदेश दें
  मैच_गिनती सीमित करें;
अंत;
$$;
```
|||सितम्बर|||
**एम्बेडिंग मॉडल:** OpenAI `टेक्स्ट-एम्बेडिंग-3-स्मॉल` ($0.02/1M टोकन, 1536 आयाम, बेहतर प्रदर्शन के साथ ada-002 से 5x सस्ता) का उपयोग करें।
|||सितम्बर|||
**हैकथॉन शॉर्टकट:** ऑटिज्म, आईईपी, थेरेपी प्रकार और सहायता संगठनों के बारे में 20-50 क्यूरेटेड संसाधनों के साथ संसाधन तालिका को पहले से तैयार करें। पूर्ण अंतर्ग्रहण पाइपलाइन बनाने के बजाय सेटअप के दौरान इनके लिए एम्बेडिंग उत्पन्न करें।
|||सितम्बर|||
**स्रोत:**
- [वर्सेल एआई एसडीके](https://ai-sdk.dev/docs/introduction)
- [एआई एसडीके + नेक्स्ट.जेएस गाइड](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [क्लाउड एपीआई मूल्य निर्धारण](https://platform.claude.com/docs/en/about-claude/pricing)
- [क्लाउड फॉर हेल्थकेयर 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capability-2026)
- [सुपाबेस पीजीवेक्टर](https://supabase.com/docs/guides/database/extensions/pgvector)
- [सुपाबेस एआई और वेक्टर](https://supabase.com/docs/guides/ai)
- [ओपनएआई एंबेडिंग](https://platform.openai.com/docs/guides/embeddings)
- [टेक्स्ट-एम्बेडिंग-3-स्मॉल बनाम एडीए-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [क्लाउड और पीजीवेक्टर के साथ आरएजी बनाएं](https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [सुपाबेस पीजीवेक्टर के साथ आरएजी चैटबॉट](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)
|||सितम्बर|||
---
|||सितम्बर|||
## 10. सुगम्यता
|||सितम्बर|||
### WCAG 2.2 AA अनुपालन रणनीति

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

**इस श्रोतागण के लिए मुख्य सिद्धांत:**
1. **संज्ञानात्मक पहुंच** -- पूर्वानुमेय लेआउट, स्पष्ट दृश्य पदानुक्रम (तनावग्रस्त/अभिभूत माता-पिता और ऑटिज्म से संबंधित विचारों के लिए महत्वपूर्ण)
2. **कम साक्षरता समर्थन** -- दृश्य संकेत, पाठ के साथ चिह्न, सरल भाषा
3. **बहुभाषी पहुंच** -- स्क्रीन रीडर को आरटीएल भाषाओं के साथ काम करना होगा
4. **मोटर पहुंच** -- बड़े स्पर्श लक्ष्य (न्यूनतम 44x44px प्रति WCAG 2.2)
|||सितम्बर|||
**shadcn/ui + रेडिक्स के माध्यम से अंतर्निर्मित:**
- सभी घटकों में ARIA भूमिकाएँ/विशेषताएँ स्वचालित रूप से शामिल होती हैं
- कीबोर्ड नेविगेशन (टैब, एंटर, एस्केप, एरो कुंजी)
- फोकस प्रबंधन और मोडल्स में फोकस ट्रैपिंग
- गतिशील सामग्री के लिए स्क्रीन रीडर घोषणाएँ
- `aria-describeby` सत्यापन त्रुटियों से जुड़ा हुआ है
- फॉर्म त्रुटियों पर `एरिया-अमान्य` सेट
|||सितम्बर|||
**अतिरिक्त पुस्तकालय:**
```बैश
npm install -D @axe-core/react # a11y मुद्दों को ब्राउज़र कंसोल पर लॉग करता है
npm install -D eslint-plugin-jsx-a11y # a11y समस्याओं के लिए लिंट
```
|||सितम्बर|||
**रंग कंट्रास्ट:** WCAG AA को सामान्य टेक्स्ट के लिए 4.5:1, बड़े टेक्स्ट के लिए 3:1 की आवश्यकता होती है। उच्च-कंट्रास्ट मोड टॉगल प्रदान करें।
|||सितम्बर|||
**ऑटिज़्म-विशिष्ट डिज़ाइन संबंधी विचार:**
- सैन्स-सेरिफ़ फ़ॉन्ट्स (उदाहरण के लिए, इंटर, सिस्टम-यूआई) - न्यूरोडाइवर्जेंट उपयोगकर्ताओं के लिए पढ़ना आसान है
- सभी पृष्ठों पर सुसंगत, पूर्वानुमानित नेविगेशन
- न्यूनतम एनिमेशन (सम्मान `पसंद-कम-गति`)
- अनुभागों के बीच स्पष्ट दृश्य सीमाएं
- संवेदी अधिभार से बचें (मौन रंग, कोई चमकती नहीं)
- सामग्री सरलीकरण के लिए सरल भाषा टॉगल
|||सितम्बर|||
```टाइपस्क्रिप्ट
// घटकों में, गति प्राथमिकताओं का सम्मान करें:
// <div className='motion-safe:animate-fadeInmotion-reduce:opacity-100'>
```
|||सितम्बर|||
**स्रोत:**
- [प्रतिक्रिया में WCAG 2.2](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [रिएक्ट आरिया (एडोब)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [कलर कंट्रास्ट WCAG 2025 गाइड](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [रिएक्ट एक्सेसिबिलिटी सर्वोत्तम अभ्यास](https://rtcamp.com/handbook/react-best-practices/accessibility/)
|||सितम्बर|||
---

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

## 11. तैनाती
|||सितम्बर|||
### सिफ़ारिश: वर्सेल फ्री टियर
|||सितम्बर|||
**वर्सेल क्यों:** नेक्स्ट.जेएस के रचनाकारों द्वारा निर्मित - शून्य कॉन्फ़िगरेशन की आवश्यकता है। तैनात करने के लिए बस `गिट पुश`।
|||सितम्बर|||
**निःशुल्क स्तर सीमाएँ:**
- 100 जीबी बैंडविड्थ/माह
- 100K सर्वर रहित फ़ंक्शन इनवोकेशन/माह
- असीमित तैनाती
- 10-सेकंड फ़ंक्शन टाइमआउट (एआई स्ट्रीमिंग के लिए पर्याप्त)
- कस्टम डोमेन समर्थन
|||सितम्बर|||
**पर्यावरण चर:**
```बैश
# .env.local (ऐसा कभी न करें)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # केवल सर्वर-साइड
ANTHROPIC_API_KEY=sk-ant-... # केवल सर्वर-साइड
OPENAI_API_KEY=sk-... # केवल सर्वर-साइड (एम्बेडिंग के लिए)
GOOGLE_TRANSLATE_API_KEY=... # केवल सर्वर-साइड
```
|||सितम्बर|||
**महत्वपूर्ण:** `NEXT_PUBLIC_` से पहले लगाए गए वेरिएबल ब्राउज़र पर प्रदर्शित होते हैं। एपीआई कुंजियों में यह उपसर्ग नहीं होना चाहिए।
|||सितम्बर|||
**डेमो टिप्स:** वर्सेल में जल्दी तैनात करें (पहले घंटे के भीतर)। न्यायाधीशों के साथ साझा करने के लिए पूर्वावलोकन यूआरएल का उपयोग करें। पूर्वावलोकन परिनियोजन के लिए पासवर्ड सुरक्षा उपलब्ध है।
|||सितम्बर|||
**स्रोत:**
- [वर्सेल पर नेक्स्ट.जेएस तैनात करना](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [नेक्स्ट.जेएस ऐप्स 2026 को तैनात करना](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [वर्सेल पर्यावरण चर](https://vercel.com/docs/environment-variables)

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
|||सितम्बर|||
## 12. गोपनीयता और सुरक्षा
|||सितम्बर|||
### गोपनीयता-दर-डिज़ाइन वास्तुकला
|||सितम्बर|||
**मार्गदर्शक सिद्धांत:** यह ऐप कमजोर आबादी की सेवा करता है। गोपनीयता के उल्लंघन के वास्तविक दुनिया के परिणाम हो सकते हैं (अप्रलेखित परिवारों के लिए निर्वासन जोखिम)। सुरक्षा वैकल्पिक नहीं है.
|||सितम्बर|||
**HIPAA विचार:** ऐप एक कवर इकाई नहीं है और संभवतः पूर्ण HIPAA अनुपालन की आवश्यकता नहीं है। हालाँकि, अगर बच्चों के बारे में कोई स्वास्थ्य संबंधी जानकारी संग्रहीत कर रहे हैं, तो इसे संवेदनशील मानें। सर्वोत्तम तरीका: आप सर्वर-साइड पर जो भी संग्रहित करते हैं उसे कम से कम करें।
|||सितम्बर|||
**COPPA विचार (13 वर्ष से कम उम्र के बच्चे):** यदि माता-पिता एकमात्र उपयोगकर्ता हैं, तो COPPA कम प्रतिबंधात्मक है लेकिन फिर भी बच्चों के डेटा को संग्रहीत करने के लिए प्रासंगिक है। 2025 COPPA अद्यतन सख्त डेटा न्यूनतमकरण आवश्यकताओं को प्रस्तुत करता है। **सिफारिश:** ऐप को केवल माता-पिता के लिए डिज़ाइन करें, बच्चों के सीधे उपयोग के लिए नहीं।
|||सितम्बर|||
**डेटा आर्किटेक्चर--कहाँ क्या संग्रहित करें:**
|||सितम्बर|||
| डेटा प्रकार | भंडारण स्थान | एन्क्रिप्शन |
|----|----|---|---|----|
| बच्चे का नाम | क्लाइंट-साइड (localStorage/IndexedDB) | वैकल्पिक क्लाइंट-साइड AES-256 |
| बालक का निदान | ग्राहक-पक्ष | AES-256 क्लाइंट-साइड एन्क्रिप्शन |
| बच्चे के कौशल/मील के पत्थर | सुपाबेस (बाकी स्थिति में एन्क्रिप्टेड) ​​| सुपाबेस डिफ़ॉल्ट |
| फोरम पोस्ट | सुपाबेस | आराम पर (सुपाबेस डिफ़ॉल्ट) |
| एआई चैट इतिहास | केवल क्लाइंट-साइड (सेशनस्टोरेज) | क्षणभंगुर, कायम नहीं |
| उपयोगकर्ता की पसंदीदा भाषा | सुपाबेस उपयोगकर्ता मेटाडेटा | मानक |
| अनाम उपयोगकर्ता टोकन | सुपाबेस ऑथ | जेडब्ल्यूटी मानक |

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

**आरएलएस नीतियां:**
```एसक्यूएल
-- उपयोगकर्ता केवल अपने बच्चे की प्रोफ़ाइल देख सकते हैं
नीति बनाएं "उपयोगकर्ता अपने बच्चों को देख सकते हैं"
  चयन के लिए child_profiles पर
  उपयोग करना (auth.uid() =parent_id);
|||सितम्बर|||
-- अज्ञात उपयोगकर्ता फ़ोरम पोस्ट पढ़ सकते हैं
नीति बनाएं "कोई भी पोस्ट पढ़ सकता है"
  चयन के लिए फ़ोरम_पोस्ट पर
  उपयोग करना (is_moderated = false);
|||सितम्बर|||
-- केवल प्रमाणित उपयोगकर्ता ही पोस्ट कर सकते हैं
नीति बनाएं "प्रमाणीकृत उपयोगकर्ता पोस्ट कर सकते हैं"
  सम्मिलित करने के लिए फ़ोरम_पोस्ट पर
  चेक के साथ (auth.uid() शून्य नहीं है);
```
|||सितम्बर|||
**क्या न करें:**
- आप्रवासन स्थिति को कभी भी, कहीं भी संग्रहित न करें
- वास्तविक नामों की आवश्यकता नहीं है
- एप्लिकेशन लॉग में आईपी पते संग्रहीत न करें
- ट्रैकिंग एनालिटिक्स का उपयोग न करें (कोई Google Analytics नहीं - प्रशंसनीय या कुछ भी नहीं)
- एआई चैट वार्तालापों को सर्वर-साइड संग्रहीत न करें
- स्थान सेवाओं की आवश्यकता नहीं है
|||सितम्बर|||
**स्रोत:**
- [HIPAA और स्वास्थ्य ऐप्स](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [COPPA अनुपालन 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [जीरो-नॉलेज हेल्थ ऐप गाइड](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [सुपाबेस आरएलएस पूर्ण गाइड 2026](https://vibeappscanner.com/supabase-row-level-security)
|||सितम्बर|||
---
|||सितम्बर|||
## 13. हैकथॉन रणनीति और समय बजट
|||सितम्बर|||
### 10-घंटे की निर्माण योजना (सुबह 8:30 - शाम 6:30)

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

**सुविधा प्राथमिकता (MoSCoW विधि):**
|||सितम्बर|||
| प्राथमिकता | फ़ीचर | स्थिति | ईएसटी। समय |
|---|---|--------|----|
| **अवश्य** | बहुभाषी यूआई (EN + ES + AR) | पूरी तरह से निर्माण करें | 1.5 घंटा |
| **अवश्य** | एआई चैट असिस्टेंट (आरएजी के साथ) | पूरी तरह से निर्माण करें | 2 घंटा |
| **अवश्य** | संसाधन लाइब्रेरी (ब्राउज़ करने योग्य + खोजने योग्य) | पूरी तरह से निर्माण करें | 1 घंटा |
| **अवश्य** | अनाम + फ़ोन प्रमाणीकरण | पूरी तरह से निर्माण करें | 1 घंटा |
| **अवश्य** | कौशल ट्रैकिंग के साथ बाल प्रोफ़ाइल | पूरी तरह से निर्माण करें | 1.5 घंटा |
| **चाहिए** | सामुदायिक मंच | बुनियादी निर्माण करें (कोई वास्तविक समय नहीं) | 1 घंटा |
| **चाहिए** | PWA ऑफ़लाइन पहुंच | बिल्ड (सर्विस्ट सेटअप) | 0.5 घंटा |
| **हो सकता है** | फोरम पोस्ट अनुवाद | नकली के साथ ठूंठ | 0.5 घंटा |
| **हो सकता है** | डार्क मोड / हाई कंट्रास्ट | त्वरित टॉगल | 0.25 घंटा |
| **नहीं** | पूर्ण मॉडरेशन प्रणाली | केवल डेमो मॉक | -- |
| **नहीं** | पुश सूचनाएं | पूरी तरह से छोड़ें | -- |
| **नहीं** | वीडियो सामग्री | पूरी तरह से छोड़ें | -- |
|||सितम्बर|||
### विस्तृत कार्यक्रम
|||सितम्बर|||
```
8:30 - 9:00 (30 मिनट) प्रोजेक्ट सेटअप
  - create-t3-app या Nextbase स्टार्टर के साथ मचान
  - सुपाबेस प्रोजेक्ट निर्माण + टेबल
  - वर्सेल परिनियोजन पाइपलाइन (खाली शेल परिनियोजन)
  - कोर डिपो स्थापित करें
  - पर्यावरण चर कॉन्फ़िगर किया गया
|||सितम्बर|||
9:00 - 10:00 (60 मिनट) फाउंडेशन
  - i18n के साथ लेआउट घटक (हेडर, नेविगेशन, भाषा स्विचर)
  - shadcn/ui घटक स्थापित
  - आरटीएल समर्थन तार-तार हो गया
  - सुपाबेस प्रमाणीकरण: अनाम + ईमेल साइन-इन यूआई
  - अनुवाद फ़ाइलें संरचना (EN + ES + AR)
|||सितम्बर|||
10:00 - 11:30 (90 मिनट) मुख्य सुविधा #1: एआई चैट
  - वर्सेल एआई एसडीके + क्लाउड हाइकु सेटअप
  - स्ट्रीमिंग के साथ चैट के लिए एपीआई मार्ग
  - यूज़चैट हुक के साथ चैट यूआई घटक
  - सुरक्षा रेलिंग के साथ सिस्टम प्रॉम्प्ट
  - पीजीवेक्टर में 20 संसाधनों को पहले से भरें
  - RAG पाइपलाइन (एम्बेड क्वेरी -> खोज -> संवर्द्धन संकेत)
|||सितम्बर|||
11:30 - 12:00 (30 मिनट) मध्य-सुबह तैनाती + परीक्षण
  - वर्सेल में तैनात करें
  - मोबाइल पर परीक्षण करें
  - महत्वपूर्ण बग ठीक करें
|||सितम्बर|||
12:00 - 12:30 (30 मिनट) दोपहर का भोजन

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

12:30 - 1:30 (60 मिनट) मुख्य सुविधा #2: संसाधन पुस्तकालय
  - श्रेणी फ़िल्टरिंग के साथ संसाधन कार्ड
  - खोज कार्यक्षमता
  - संसाधन विवरण पृष्ठ
  - बीज डेटा: 20-50 क्यूरेटेड संसाधन
|||सितम्बर|||
1:30 - 3:00 (90 मिनट) मुख्य विशेषता #3: बाल प्रोफ़ाइल + कौशल
  - चाइल्ड प्रोफ़ाइल निर्माण प्रपत्र
  - कौशल कार्ड घटक
  - माइलस्टोन ट्रैकिंग यूआई
  - संवेदनशील डेटा के लिए क्लाइंट-साइड स्टोरेज
  - प्रोफ़ाइल डैशबोर्ड दृश्य
|||सितम्बर|||
3:00 - 4:00 (60 मिनट) सुविधा #4: सामुदायिक मंच (बुनियादी)
  - फोरम पोस्ट सूची दृश्य
  - पोस्ट फॉर्म बनाएं
  - मूल टिप्पणी प्रणाली
  - श्रेणी-आधारित संगठन
|||सितम्बर|||
4:00 - 4:30 (30 मिनट) पीडब्ल्यूए + अनुवाद
  - सर्विस्ट सेवा कार्यकर्ता सेटअप
  - ईएस और एआर के लिए अनुवाद कुंजी भरें
  - अरबी के साथ आरटीएल लेआउट का परीक्षण करें
|||सितम्बर|||
4:30 - 5:30 (60 मिनट) पोलिश और डेमो तैयारी
  - यूआई बग ठीक करें
  - लोडिंग स्थिति और त्रुटि प्रबंधन जोड़ें
  - उच्च कंट्रास्ट मोड टॉगल (यदि समय हो)
  - प्रेजेंटेशन के लिए स्क्रीनशॉट लें
  - डेमो वीडियो बैकअप रिकॉर्ड करें
|||सितम्बर|||
5:30 - 6:00 (30 मिनट) अंतिम परिनियोजन + प्रस्तुति
  - अंतिम वर्सेल परिनियोजन
  - सभी सुविधाओं का शुरू से अंत तक परीक्षण करें
  - 3 मिनट की पिच स्क्रिप्ट तैयार करें
|||सितम्बर|||
6:00 - 6:30 (30 मिनट) बफ़र/प्रस्तुति
```
|||सितम्बर|||
### क्या मॉक/स्टब करें:
- **फोरम मॉडरेशन:** केवल रिपोर्ट की गई पोस्ट को ध्वज के साथ छुपाएं, कोई व्यवस्थापक पैनल नहीं
- **फोरम अनुवाद:** "अनुवाद" बटन मूल पाठ को लोड करना दिखाता है (या यदि समय हो तो Google अनुवाद)
- **पासवर्ड रीसेट प्रवाह:** सुपाबेस डिफ़ॉल्ट ईमेल का उपयोग करें
- **उपयोगकर्ता अवतार:** प्रारंभिक या डिफ़ॉल्ट आइकन, कोई अपलोड नहीं
- **एडमिन डैशबोर्ड:** पूरी तरह से छोड़ें

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

### डेमो अनुकूलन युक्तियाँ:
1. **कहानी से शुरू करें** -- "फातिमा से मिलें, एक सीरियाई मां जो हाल ही में अमेरिका चली गई। उसके 4 साल के बेटे को हाल ही में ऑटिज्म का पता चला था। वह अंग्रेजी नहीं बोलती। वह नहीं जानती कि कहां से शुरू करें।"
2. **भाषा स्विच दिखाएं** -- अंग्रेजी से अरबी में लाइव स्विच करें। आरटीएल फ्लिप न्यायाधीशों के लिए दृष्टिगत रूप से प्रभावशाली है।
3. **एआई चैट का डेमो करें**--स्पेनिश में एक प्रश्न पूछें। संसाधन उपलब्ध कराकर दिखाओ।
4. **ऑफ़लाइन क्षमता दिखाएं** -- वाईफाई बंद करें, दिखाएं कि ऐप अभी भी काम करता है।
5. **गोपनीयता पर जोर दें** -- "किसी वास्तविक नाम की आवश्यकता नहीं है। किसी ईमेल की आवश्यकता नहीं है। वह इस ऐप का सुरक्षित रूप से उपयोग कर सकती है।"
|||सितम्बर|||
**स्रोत:**
- [36 घंटों में शून्य से डेमो तक](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [एमवीपी फ़ीचर प्राथमिकताकरण](https://gainhq.com/blog/mvp-feature-prioritization/)
- [हैकथॉन डेमो टिप्स (डेवपोस्ट)](https://info.devpost.com/blog/how-to-current-a-successful-hackathon-demo)
- [हैकथॉन पिच डेक गाइड](https://www.inknarrate.com/post/hackathon-pitch-deck)
|||सितम्बर|||
---
|||सितम्बर|||
## 14. बॉयलरप्लेट और टेम्पलेट
|||सितम्बर|||
### विकल्प 1: create-t3-app (टीआरपीसी से परिचित टीमों के लिए अनुशंसित)
```बैश
npx create-t3-app@latest ऑटिज्म-ब्रिज --टाइपस्क्रिप्ट --टेलविंड --trpc --प्रिज्मा
```
- GitHub: https://github.com/t3-oss/create-t3-app
- इसमें शामिल हैं: नेक्स्ट.जेएस, टाइपस्क्रिप्ट, टीआरपीसी, प्रिज्मा, टेलविंड सीएसएस
- आप जोड़ें: सुपाबेस, नेक्स्ट-इंटल, shadcn/ui, वर्सेल एआई एसडीके
|||सितम्बर|||
### विकल्प 2: नेक्स्टबेस स्टार्टर (सरल सेटअप के लिए अनुशंसित)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- इसमें शामिल हैं: नेक्स्ट.जेएस 16+, सुपाबेस, टेलविंड सीएसएस 4, टाइपस्क्रिप्ट, रिएक्ट क्वेरी
- आप जोड़ें: नेक्स्ट-इंटल, shadcn/ui, वर्सेल एआई एसडीके, प्रिज्मा (वैकल्पिक)
|||सितम्बर|||
### विकल्प 3: वर्सेल सुपाबेस स्टार्टर
- टेम्पलेट: https://vercel.com/templates/next.js/supabase
- एसएसआर प्रमाणीकरण के साथ आधिकारिक वर्सेल/सुपाबेस टेम्पलेट
|||सितम्बर|||
### विकल्प 4: सुपा-नेक्स्ट-स्टार्टर
- गिटहब: https://github.com/michaeltroya/supa-next-starter
- इसमें शामिल हैं: Next.js, Supabase, Tailwind, shadcn/ui (पहले से ही एकीकृत)

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

### मचान बनाने के बाद, जोड़ें:
```बैश
एनपीएम नेक्स्ट-इंटल आरटीएल-डिटेक्ट इंस्टॉल करें
एनपीएम इंस्टॉल एआई @एआई-एसडीके/एंथ्रोपिक @एआई-एसडीके/ओपनाई @एआई-एसडीके/रिएक्ट
एनपीएम @servist/next @servist/precaching @servist/sw इंस्टॉल करें
npx shadcn@latest init
एनपीएक्स shadcn@नवीनतम ऐड बटन कार्ड डायलॉग इनपुट फॉर्म शीट टैब्स अवतार बैज अकॉर्डियन कमांड टोस्ट
एनपीएम इंस्टाल -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
```
|||सितम्बर|||
### संदर्भ परियोजनाएं:
- **सुपाबेस-टिप्पणियाँ-एक्सटेंशन** (GitHub: Malerba118/supabase-comments-extension) -- टिप्पणियाँ, उत्तर, प्रतिक्रियाएँ
- **ojasskapre/nextjs-starter-template** -- Next.js + Supabase + LLM चैट इंटरफ़ेस
- **shwosner/realtime-chat-supabase-react** -- Supabase के साथ रीयलटाइम चैट
|||सितम्बर|||
---
|||सितम्बर|||
## 15. स्कीमा डिज़ाइन
|||सितम्बर|||
### पूर्ण प्रिज्मा स्कीमा
|||सितम्बर|||
```प्रिज्मा
जेनरेटर क्लाइंट {
  प्रदाता = "प्रिज्मा-क्लाइंट-जेएस"
}
|||सितम्बर|||
डेटासोर्स डीबी {
  प्रदाता = "पोस्टग्रेस्क्ल"
  url = env('DATABASE_URL')
  DirectUrl = env('DIRECT_URL')
}
|||सितम्बर|||
// उपयोगकर्ता और प्रमाणीकरण
मॉडल उपयोगकर्ता प्रोफ़ाइल {
  आईडी स्ट्रिंग @id @default(uuid())
  authId स्ट्रिंग @unique
  डिस्प्लेनाम स्ट्रिंग?
  पसंदीदालोकेल स्ट्रिंग @default("en")
  दिनांक समय पर बनाया गया @default(अब())
  अपडेटेडएट डेटटाइम @अपडेटेडएट
  बच्चे बालप्रोफ़ाइल[]
  फोरमपोस्ट फोरमपोस्ट[]
  फोरमटिप्पणियाँ फोरमटिप्पणी[]
  अपवोट फोरमअपवोट[]
}

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

// बच्चों की प्रोफाइल और कौशल ट्रैकिंग
मॉडल चाइल्डप्रोफ़ाइल {
  आईडी स्ट्रिंग @id @default(uuid())
  पेरेंटआईडी स्ट्रिंग
  मूल उपयोगकर्ता प्रोफ़ाइल @संबंध (फ़ील्ड: [parentId], संदर्भ: [id])
  उपनाम स्ट्रिंग
  जन्मवर्ष पूर्णांक?
  निदान दिनांक दिनांक समय?
  कौशल कौशल कार्ड[]
  मील के पत्थर[]
  दिनांक समय पर बनाया गया @default(अब())
  अपडेटेडएट डेटटाइम @अपडेटेडएट
  @@सूचकांक([parentId])
}
|||सितम्बर|||
मॉडल कौशलश्रेणी {
  आईडी स्ट्रिंग @id @default(uuid())
  नामकुंजी स्ट्रिंग
  आइकन स्ट्रिंग?
  सॉर्टऑर्डर इंट @डिफ़ॉल्ट(0)
  कौशल कौशल कार्ड[]
}
|||सितम्बर|||
मॉडल स्किलकार्ड {
  आईडी स्ट्रिंग @id @default(uuid())
  चाइल्डआईड स्ट्रिंग
  चाइल्ड चाइल्डप्रोफ़ाइल @संबंध (फ़ील्ड: [चाइल्डआईडी], संदर्भ: [आईडी], ऑनडिलीट: कैस्केड)
  श्रेणी आईडी स्ट्रिंग
  श्रेणी कौशलश्रेणी @संबंध(फ़ील्ड: [श्रेणीआईडी], संदर्भ: [आईडी])
  नामकुंजी स्ट्रिंग
  लेवल इंट @डिफ़ॉल्ट(0)
  नोट्स स्ट्रिंग?
  अंतिममूल्यांकित दिनांकसमय @default(अब())
  दिनांक समय पर बनाया गया @default(अब())
  अपडेटेडएट डेटटाइम @अपडेटेडएट
  @@सूचकांक([childId])
  @@सूचकांक([श्रेणीआईडी])
}
|||सितम्बर|||
मॉडल माइलस्टोन {
  आईडी स्ट्रिंग @id @default(uuid())
  चाइल्डआईड स्ट्रिंग
  चाइल्ड चाइल्डप्रोफ़ाइल @संबंध (फ़ील्ड: [चाइल्डआईडी], संदर्भ: [आईडी], ऑनडिलीट: कैस्केड)
  शीर्षककुंजी स्ट्रिंग
  विवरण स्ट्रिंग?
  प्राप्त दिनांक दिनांक समय?
  श्रेणी स्ट्रिंग
  दिनांक समय पर बनाया गया @default(अब())
  @@सूचकांक([childId])
}
|||सितम्बर|||
// संसाधन (वेक्टर एम्बेडिंग को कच्चे SQL / pgvector के माध्यम से नियंत्रित किया जाता है)
मॉडल संसाधन {
  आईडी स्ट्रिंग @id @default(uuid())
  शीर्षक स्ट्रिंग
  सामग्री स्ट्रिंग @db.Text
  सारांश स्ट्रिंग?
  श्रेणी स्ट्रिंग
  उपश्रेणी स्ट्रिंग?
  sourceUrl स्ट्रिंग?
  राज्य स्ट्रिंग?
  भाषा स्ट्रिंग @default("en")
  टैग स्ट्रिंग[]
  दिनांक समय पर बनाया गया @default(अब())
  अपडेटेडएट डेटटाइम @अपडेटेडएट
  @@सूचकांक([श्रेणी])
  @@सूचकांक([राज्य])
}
|||सितम्बर|||
// फोरम / समुदाय
मॉडल फोरमश्रेणी {
  आईडी स्ट्रिंग @id @default(uuid())
  नामकुंजी स्ट्रिंग
  विवरणकुंजी स्ट्रिंग?
  आइकन स्ट्रिंग?
  सॉर्टऑर्डर इंट @डिफ़ॉल्ट(0)
  पोस्ट फोरमपोस्ट[]
}
|||सितम्बर|||
मॉडल फोरमपोस्ट {
  आईडी स्ट्रिंग @id @default(uuid())
  श्रेणी आईडी स्ट्रिंग
  श्रेणी फोरम श्रेणी @संबंध (फ़ील्ड: [श्रेणीआईडी], संदर्भ: [आईडी])
  लेखक आईडी स्ट्रिंग
  लेखक उपयोगकर्ता प्रोफ़ाइल @संबंध (फ़ील्ड: [लेखक आईडी], संदर्भ: [आईडी])
  अज्ञात बूलियन @default(झूठा)
  शीर्षक स्ट्रिंग
  सामग्री स्ट्रिंग @db.Text
  ओरिजिनललैंग स्ट्रिंग @default("en")
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  पिन किया गया बूलियन @डिफ़ॉल्ट(गलत)
  isHidden बूलियन @default(झूठा)
  रिपोर्टकाउंट इंट @डिफ़ॉल्ट(0)
  टिप्पणियाँ फोरमटिप्पणी[]
  अपवोट फोरमअपवोट[]
  अनुवाद फोरमअनुवाद[]
  दिनांक समय पर बनाया गया @default(अब())
  अपडेटेडएट डेटटाइम @अपडेटेडएट
  @@सूचकांक([श्रेणीआईडी])
  @@सूचकांक([लेखकआईडी])
  @@सूचकांक([createdAt])
}
|||सितम्बर|||
मॉडल फोरमटिप्पणी {
  आईडी स्ट्रिंग @id @default(uuid())
  पोस्टआईडी स्ट्रिंग
  पोस्ट फोरमपोस्ट @संबंध (फ़ील्ड: [पोस्टआईडी], संदर्भ: [आईडी], ऑनडिलीट: कैस्केड)
  पेरेंटआईडी स्ट्रिंग?
  मूल मंच टिप्पणी? @संबंध ("टिप्पणी उत्तर", फ़ील्ड: [parentId], संदर्भ: [id])
  उत्तर फोरमटिप्पणी[] @संबंध("टिप्पणीउत्तर")
  लेखक आईडी स्ट्रिंग
  लेखक उपयोगकर्ता प्रोफ़ाइल @संबंध (फ़ील्ड: [लेखक आईडी], संदर्भ: [आईडी])
  अज्ञात बूलियन @default(झूठा)
  सामग्री स्ट्रिंग @db.Text
  ओरिजिनललैंग स्ट्रिंग @default("en")
  upvoteCount Int @default(0)
  isHidden बूलियन @default(झूठा)
  रिपोर्टकाउंट इंट @डिफ़ॉल्ट(0)
  अपवोट फोरमअपवोट[]
  अनुवाद फोरमअनुवाद[]
  दिनांक समय पर बनाया गया @default(अब())
  @@सूचकांक([postId])
  @@सूचकांक([parentId])
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

मॉडल फोरमअपवोट {
  आईडी स्ट्रिंग @id @default(uuid())
  उपयोगकर्ता आईडी स्ट्रिंग
  उपयोगकर्ता उपयोगकर्ता प्रोफ़ाइल @संबंध (फ़ील्ड: [उपयोगकर्ता आईडी], संदर्भ: [आईडी])
  पोस्टआईडी स्ट्रिंग?
  फोरमपोस्ट पोस्ट करें? @संबंध (फ़ील्ड: [पोस्टआईडी], संदर्भ: [आईडी], ऑनडिलीट: कैस्केड)
  टिप्पणी आईडी स्ट्रिंग?
  टिप्पणी मंच टिप्पणी? @संबंध (फ़ील्ड: [टिप्पणी आईडी], संदर्भ: [आईडी], ऑनडिलीट: कैस्केड)
  दिनांक समय पर बनाया गया @default(अब())
  @@अद्वितीय([उपयोगकर्ताआईडी, पोस्टआईडी])
  @@अद्वितीय([उपयोगकर्ता आईडी, टिप्पणी आईडी])
}
|||सितम्बर|||
मॉडल फोरमट्रांसलेशन {
  आईडी स्ट्रिंग @id @default(uuid())
  पोस्टआईडी स्ट्रिंग?
  फोरमपोस्ट पोस्ट करें? @संबंध (फ़ील्ड: [पोस्टआईडी], संदर्भ: [आईडी], ऑनडिलीट: कैस्केड)
  टिप्पणी आईडी स्ट्रिंग?
  टिप्पणी मंच टिप्पणी? @संबंध (फ़ील्ड: [टिप्पणी आईडी], संदर्भ: [आईडी], ऑनडिलीट: कैस्केड)
  लक्ष्यलैंग स्ट्रिंग
  अनुवादितशीर्षक स्ट्रिंग?
  अनुवादित सामग्री स्ट्रिंग @db.Text
  दिनांक समय पर बनाया गया @default(अब())
  @@अद्वितीय([postId, targetLang])
  @@अद्वितीय([टिप्पणीआईडी, लक्ष्यलैंग])
}
```
|||सितम्बर|||
### बीज डेटा श्रेणियाँ
|||सितम्बर|||
**कौशल श्रेणियाँ:** संचार, सामाजिक कौशल, दैनिक जीवन, मोटर कौशल, शैक्षणिक, संवेदी प्रसंस्करण, भावनात्मक विनियमन
|||सितम्बर|||
**फोरम श्रेणियाँ:** परिचय और स्वागत, थेरेपी और उपचार (एबीए/ओटी/भाषण), स्कूल और आईईपी सहायता, दैनिक जीवन युक्तियाँ, कानूनी और आप्रवासन प्रश्न, हेल्थकेयर नेविगेशन, सफलता की कहानियां और मील के पत्थर, सामान्य समर्थन
|||सितम्बर|||
**संसाधन श्रेणियाँ:** थेरेपी प्रकार और प्रदाता, शिक्षा और आईईपी संसाधन, कानूनी अधिकार और वकालत, वित्तीय सहायता, सामुदायिक संगठन, ऑनलाइन उपकरण और ऐप्स, किताबें और मीडिया, राज्य-विशिष्ट संसाधन
|||सितम्बर|||
---
|||सितम्बर|||
## पैकेज.जेएसओएन निर्भरता सारांश

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
  "निर्भरताएं": {
    "अगला": "^16.0.0",
    "प्रतिक्रिया": "^19.0.0",
    "react-dom": "^19.0.0",
    "टाइपस्क्रिप्ट": "^5.7.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "प्रिज्मा": "^6.0.0",
    "@प्रिज्मा/क्लाइंट": "^6.0.0",
    "अगला-intl": "^4.0.0",
    "आरटीएल-डिटेक्ट": "^1.1.2",
    "एआई": "^6.0.0",
    "@ai-sdk/anthropic": "^1.0.0",
    "@ai-sdk/openai": "^1.0.0",
    "@ai-sdk/react": "^1.0.0",
    "टेलविंडसीएसएस": "^4.0.0",
    "वर्ग-विचरण-अधिकार": "^0.7.0",
    "clsx": "^2.1.0",
    "टेलविंड-मर्ज": "^2.5.0",
    "lucide-react": "^0.450.0",
    "@सर्विस्ट/नेक्स्ट": "^9.0.0",
    "@सर्विस्ट/प्रीकैचिंग": "^9.0.0",
    "@servist/sw": "^9.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@रेडिक्स-यूआई/प्रतिक्रिया-अवतार": "^1.1.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "ज़ोड": "^3.23.0",
    "प्रतिक्रिया-हुक-फ़ॉर्म": "^7.53.0",
    "@हुकफॉर्म/रिज़ॉल्वर": "^3.9.0"
  },
  "देवनिर्भरताएं": {
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "@types/rtl-detect": "^1.0.0"
  }
}
```
|||सितम्बर|||
---
|||सितम्बर|||
## त्वरित संदर्भ: प्रमुख दस्तावेज़ीकरण लिंक
|||सितम्बर|||
| उपकरण | दस्तावेज़ीकरण |
|------|----------------------|
| अगला.जेएस 16 | https://nextjs.org/docs |
| सुपाबेस | https://supabase.com/docs |
| सुपाबेस ऑथ | https://supabase.com/docs/guides/auth |
| सुपाबेस रियलटाइम | https://supabase.com/docs/guides/realtime |
| सुपाबेस पीजीवेक्टर | https://supabase.com/docs/guides/ai |
| अगला-अंतर्राष्ट्रीय | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| वर्सेल एआई एसडीके | https://ai-sdk.dev/docs/introduction |
| क्लाउड एपीआई | https://platform.claude.com/docs |
| प्रिज्मा | https://www.prisma.io/docs |
| सर्विस्ट पीडब्लूए | https://serwist.pages.dev/docs/next/getting-started |
| टेलविंड सीएसएस | https://tailwindcss.com/docs |
| Google क्लाउड अनुवाद | https://cloud.google.com/translate/docs |
| ओपनएआई एंबेडिंग्स | https://platform.openai.com/docs/guides/embeddings |
| वर्सेल परिनियोजन | https://vercel.com/docs |
|||सितम्बर|||
---
|||सितम्बर|||
यह शोध आपके द्वारा अनुरोधित सभी 10 क्षेत्रों के अलावा हैकथॉन रणनीति, गोपनीयता वास्तुकला, बॉयलरप्लेट विकल्प और संपूर्ण स्कीमा डिज़ाइन को शामिल करता है। स्टैक को इस तरह डिज़ाइन किया गया है कि प्रत्येक सेवा हैकथॉन के लिए निःशुल्क स्तरों में फिट हो, प्रमाणीकरण गैर-दस्तावेजी उपयोगकर्ताओं के लिए गोपनीयता-संरक्षण है, और समय बजट 10-घंटे के निर्माण के लिए यथार्थवादी है। मैंने इसे `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` पर फ़ाइल के रूप में सहेजने का प्रयास किया लेकिन फ़ाइल लिखने की अनुमति अस्वीकार कर दी गई। यदि आप चाहते हैं कि मैं इसे डिस्क पर सहेजूं, तो आप लिखने की अनुमति दे सकते हैं और मैं फ़ाइल बना दूंगा।
---
|||सितम्बर|||
## अतिरिक्त शोध (अद्यतन मार्च 2026)
|||सितम्बर|||
### 10+ भाषाओं के लिए सर्वश्रेष्ठ i18n लाइब्रेरी (रिएक्ट + टाइपस्क्रिप्ट)

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

**अनुशंसित: रिएक्ट-आई18नेक्स्ट** — 2.1एम साप्ताहिक डाउनलोड, सबसे लोकप्रिय रिएक्ट आई18एन समाधान।
- भाषा पहचान, एसिंक लोडिंग, जटिल बहुवचन के लिए प्लगइन्स के साथ i18next इकोसिस्टम पर निर्मित
- बंडल: 22.2 kB (i18next 15.1kB + प्रतिक्रिया-i18next 7.1kB)
- JSON अनुवाद फ़ाइलों का समर्थन करता है - क्रमिक रूप से भाषाओं को जोड़ना आसान है
- स्रोत: [वाक्यांश ब्लॉग](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)
|||सितम्बर|||
**हल्का विकल्प: लिंगुईजेएस** - कुल 10.4 केबी (आधा आकार), आईसीयू संदेश सिंटैक्स, टाइपस्क्रिप्ट समर्थन।
|||सितम्बर|||
**हैकथॉन गति के लिए**: JSON अनुवाद फ़ाइलों के साथ प्रतिक्रिया-i18next। अंग्रेजी + स्पैनिश से प्रारंभ करें, JSON फ़ाइलों के माध्यम से अन्य भाषाएँ जोड़ें। प्रारंभिक अनुवाद के लिए Google Translate API या DeepL का उपयोग करें।
|||सितम्बर|||
स्रोत: [ग्लोरीवेब्स 2026 गाइड](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)
|||सितम्बर|||
### सुपाबेस फ्री टियर लिमिट्स (2026)
|||सितम्बर|||
- **2 सक्रिय परियोजनाएँ** (1 सप्ताह की निष्क्रियता के बाद रुकी हुई)
- **500 एमबी** डेटाबेस भंडारण (साझा सीपीयू)
- **2 जीबी** डेटाबेस निकास/माह
- **50,000** मासिक सक्रिय उपयोगकर्ता (auth)
- **1 जीबी** फ़ाइल भंडारण
- **2 जीबी** स्टोरेज निकास
- **500,000** एज फ़ंक्शन आमंत्रण/माह
- निःशुल्क योजना पर कोई बैकअप नहीं, कोई SLA नहीं
|||सितम्बर|||
स्रोत: [सुपाबेस प्राइसिंग](https://supabase.com/pricing), [यूआई बेकरी ब्रेकडाउन](https://uibakery.io/blog/supabase-pricing)
|||सितम्बर|||
**हैकथॉन के लिए**: 500 एमबी पर्याप्त से अधिक है। यहां तक ​​​​कि 10,000 उपयोगकर्ताओं के साथ प्रत्येक प्रोफ़ाइल + चाइल्ड डेटा + फ़ोरम पोस्ट संग्रहीत करने पर भी, आप <50 एमबी का उपयोग करेंगे। डेमो के लिए 50K MAU प्रमाणीकरण सीमा भी बहुत उदार है।

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
