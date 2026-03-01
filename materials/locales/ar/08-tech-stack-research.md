# Hackathon Tech Stack Research: تطبيق الآباء المهاجرين + التوحد
|||سبتمبر|||
**التاريخ:** 2026-02-28 | **وقت البناء:** 10 ساعات (8:30 صباحًا - 6:30 مساءً)
|||سبتمبر|||
---
|||سبتمبر|||
## 1. ملخص المكدس الموصى به
|||سبتمبر|||
| طبقة | تكنولوجيا | لماذا |
|-------|----------|-----|
| **الإطار** | Next.js 16 (جهاز توجيه التطبيقات) | SSR لتحسين محركات البحث، ومسارات API، ودعم PWA، ونشر Vercel |
| ** سقالة ** | `create-t3-app` أو Nextbase starter | أسرع مسار لكتابة المكدس الكامل |
| **اللغة** | TypeScript في جميع أنحاء | سلامة من النوع الشامل |
| ** واجهة برمجة التطبيقات الخلفية ** | tRPC (عبر مكدس T3) أو مسارات API Next.js + عميل Supabase | نوع آمن، صفر معياري |
| **قاعدة البيانات** | سوباباس (بوستغريسكل) | طبقة مجانية، مصادقة، في الوقت الحقيقي، pgvector، RLS |
| **أورم** | بريزما | الأنواع التي تم إنشاؤها تلقائيًا، وأدوات الترحيل |
| **المصادقة** | مصادقة سوباباس | تسجيل دخول مجهول، OTP للهاتف، بريد إلكتروني/كلمة مرور، لا يلزم تحديد هوية شخصية |
| **i18n** | التالي الدولي | تكامل Next.js الأصلي، دعم RSC، حزمة صغيرة، دعم RTL |
| ** واجهة المستخدم ** | shadcn/ui + Tailwind CSS | نسخ ولصق المكونات، ملكية كاملة، Radix a11y، RTL جاهز |
| ** دردشة الذكاء الاصطناعي ** | Vercel AI SDK + Claude API (هايكو 4.5) | البث المباشر، خطاف useChat، فعال من حيث التكلفة |
| **ناقلات قاعدة البيانات** | Supabase pgvector | نفس قاعدة البيانات، لا توجد خدمة إضافية، RLS على المتجهات |
| **التضمينات** | OpenAI text-embedding-3-small | 0.02 دولار/مليون رمز مميز، 5 مرات أرخص من ada-002 |
| **واجهة برمجة تطبيقات الترجمة** | واجهة برمجة تطبيقات الترجمة السحابية من Google | 500 ألف حرف/شهر مجانًا، وأكثر من 130 لغة، بدون تخزين بيانات |
| **PWA** | سيرويست (@serwist/next) | خليفة PWA الحديث التالي، دعم دون اتصال بالإنترنت |
| **النشر** | فيرسيل (الطبقة المجانية) | نشر Zero-config Next.js، ونطاق ترددي يبلغ 100 جيجابايت |
| **المنتدى** | مخصص مع Supabase Realtime | تحديثات في الوقت الحقيقي، RLS للاعتدال |
|||سبتمبر|||
**إجمالي التكلفة الشهرية المقدرة (Hackathon/Demo): 0 دولار أمريكي** - تحتوي جميع الخدمات المذكورة أعلاه على مستويات مجانية كافية لعرض hackathon التجريبي.
|||سبتمبر|||
---
|||سبتمبر|||
## 2. إطار التفاعل

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

### التوصية: Next.js 16 (جهاز توجيه التطبيق)
|||سبتمبر|||
** لماذا Next.js عبر Vite+React لهذا التطبيق:**
- SSR/SSG لتحسين محركات البحث (مهم لصفحات الموارد التي يجب أن تكون قابلة للاكتشاف من قبل الآباء المهاجرين الذين يبحثون في Google)
- مسارات API المضمنة تلغي الحاجة إلى خادم خلفي منفصل
- جهاز توجيه التطبيق مع مكونات React Server = صفر عميل JS للمحتوى المترجم
- دعم بيان PWA الأصلي عبر "app/manifest.ts".
- نشر Vercel هو تكوين صفري
- يعمل next-intl أصلاً مع RSC (الترجمات المقدمة من جانب الخادم = 0 بايت للعميل)
|||سبتمبر|||
**متى يكون فيت أفضل:**
- منتجع صحي خالص لا يحتاج إلى تحسين محركات البحث
- بدء تشغيل أسرع لخادم التطوير (فائدة هامشية لـ hackathon لمدة 10 ساعات)
- نموذج عقلي أبسط (لا يوجد تمييز بين مكونات الخادم والعميل)
|||سبتمبر|||
**إعداد PWA مع Serwist (الخلف التالي لـ pwa):**
``` باش
تثبيت npm @serwist/التالي @serwist/precaching @serwist/sw idb
```
|||سبتمبر|||
الاستراتيجيات الرئيسية دون اتصال بالإنترنت:
- **CacheFirst** للأصول الثابتة (`/_next/static/`) - محتوى مجزأ، لا يتغير أبدًا
- **NetworkFirst** لاستجابات واجهة برمجة التطبيقات والمحتوى الديناميكي
- **StaleWhileRevalidate** لملفات الترجمة وصفحات الموارد
- IndexedDB لتخزين البيانات دون الاتصال بالإنترنت (ملفات تعريف الأطفال والموارد المحفوظة)
|||سبتمبر|||
**هام:** يستخدم Next.js 16 Turbopack افتراضيًا، لكن Serwist يتطلب Webpack. سوف تحتاج إلى تكوين البناء وفقا لذلك.
|||سبتمبر|||
**بيان PWA** (دعم Next.js المدمج):
```مخطوطة
// التطبيق/البيان.ts
نوع الاستيراد { MetadataRoute } من "التالي"
|||سبتمبر|||
تصدير بيان الوظيفة الافتراضية (): MetadataRoute.Manifest {
  العودة {
    الاسم: "جسر ASD"،
    الاسم القصير: "جسر ASD"،
    الوصف: "دعم الأسر المهاجرة التي لديها أطفال مصابون بالتوحد"،
    start_url: '/'،
    العرض: "مستقل"،
    لون الخلفية: '#ffffff'،
    theme_color: '#4F46E5'،
    الرموز: [
      { src: '/icon-192.png'، الأحجام: '192x192'، النوع: 'image/png' }،
      { src: '/icon-512.png'، الأحجام: '512x512'، النوع: 'image/png' }،
    ]،
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

**المصادر:**
- [المقارنة الكاملة بين Vite وNext.js 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [دليل Next.js PWA](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [بدء استخدام Serwist](https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA مع Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [إنشاء PWA في Next.js باستخدام Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)
|||سبتمبر|||
---
|||سبتمبر|||
## 3. خلفية الكتابة
|||سبتمبر|||
### توصية: مسارات واجهة برمجة تطبيقات Next.js + عميل Supabase (أساسي) أو tRPC (في حالة استخدام T3)
|||سبتمبر|||
**الخيار أ: مسارات واجهة برمجة تطبيقات Next.js + Supabase (الأبسط للهاكاثون)**
- لا يوجد خادم خلفي منفصل
- يتعامل عميل Supabase JS مع استعلامات قاعدة البيانات والمصادقة والوقت الفعلي
- مسارات واجهة برمجة التطبيقات (API) لمحادثات الذكاء الاصطناعي ومكالمات واجهة برمجة تطبيقات الترجمة وأي منطق من جانب الخادم
- الأسرع في الإعداد
|||سبتمبر|||
**الخيار ب: tRPC عبر T3 Stack (أفضل DX إذا كان الفريق يعرف ذلك)**
- أمان من النوع الشامل بين الواجهة الأمامية والخلفية
- الإكمال التلقائي لاستدعاءات API في الواجهة الأمامية
- يعمل مع Prisma للأنواع التي تم إنشاؤها
- `` create-t3-app`' يدعم كل شيء
|||سبتمبر|||
``` باش
# الخيار أ: Next.js العادي + Supabase
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
|||سبتمبر|||
# الخيار ب: مكدس T3
npx create-t3-app@latest my-app
# حدد: Next.js، TypeScript، Tailwind CSS، tRPC، Prisma
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

** لماذا لا تعبر / تسرع: **
- يضيف تعقيد النشر (خادم منفصل للمضيف)
- لا توجد فائدة عبر مسارات Next.js API لحالة الاستخدام هذه
- 30-60 دقيقة إضافية من الإعداد ليس لديك
|||سبتمبر|||
** لماذا لا يكون بدون خادم (وظائف Lambda/Netlify):**
- تكون مسارات واجهة برمجة تطبيقات Next.js على Vercel بدون خادم بشكل افتراضي
- لا حاجة لبنية تحتية وظيفية منفصلة
|||سبتمبر|||
**المصادر:**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [دليل T3 Stack 2025](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [إنشاء تطبيق T3](https://create.t3.gg/)
- [tRPC الرسمي](https://trpc.io/)
|||سبتمبر|||
---
|||سبتمبر|||
## 4. قاعدة البيانات
|||سبتمبر|||
### توصية: Supabase (PostgreSQL)
|||سبتمبر|||
**لماذا يفوز Supabase بهذا المشروع:**
|||سبتمبر|||
| ميزة | سوباباس | فايربيس | مقياس الكوكب |
|---------|---------|---------|-------------|
| تخزين قاعدة بيانات الطبقة المجانية | 500 ميجا | 1 جيجا (سبارك) | تم إيقاف الطبقة المجانية |
| المصادقة متضمنة | نعم (50 ألف مستخدم شهريًا مجانًا) | نعم (50 ألف مستخدم شهريًا مجانًا) | لا |
| الوقت الحقيقي | نعم (تغييرات Postgres) | نعم (الأفضل في فئتها) | لا |
| بحث المتجهات (pgvector) | نعم، مدمج | لا | لا |
| دعم SQL | بوستجرسكل كامل | NoSQL فقط | ماي إس كيو إل |
| RLS (أمان مستوى الصف) | نعم، يعتمد على SQL | قواعد أمان Firebase | لا |
| مصادقة مجهولة | نعم، مدمج | نعم | لا يوجد |
| مفتوح المصدر | نعم | لا | جزئيا |
| إمكانية نقل البيانات | كامل (إنه بوستجرس) | قفل البائع | متوافق مع MySQL |

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

** الطبقة المجانية من Supabase (2026):**
- 2 مشاريع نشطة
- مساحة تخزين قاعدة بيانات 500 ميجابايت
- 2 جيجا بايت لقاعدة البيانات
- 50,000 MAU (المصادقة)
- مساحة تخزين للملفات 1 جيجا بايت
- 500000 استدعاء لوظيفة الحافة
- لا حاجة لبطاقة الائتمان، لا تنتهي صلاحيتها أبدًا
|||سبتمبر|||
** لماذا Supabase عبر Firebase لهذا التطبيق: **
1. pgvector للبحث عن موارد الذكاء الاصطناعي (لا حاجة إلى خدمة إضافية)
2. SQL كامل للاستعلامات المعقدة (معالم الطفل، وتتبع المهارات)
3. RLS للوصول إلى المنتدى المجهول للحفاظ على الخصوصية
4. إمكانية نقل البيانات (غير مقفلة في نظام Google البيئي)
5. أفضل للبيانات العلائقية (المستخدم -> الأطفال -> المهارات -> المعالم)
|||سبتمبر|||
**تكامل بريزما:**
```بريزما
مصدر البيانات ديسيبل {
  المزود = "postgresql"
  URL = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```
|||سبتمبر|||
**المصادر:**
- [مراجعة Supabase vs Firebase 2026](https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-what-one-actually-scales-with-you-2374)
- [تسعير Supabase 2026](https://uibakery.io/blog/supabase-pricing)
- [حدود الطبقة المجانية لـ Supabase](https://supabase.com/pricing)
|||سبتمبر|||
---
|||سبتمبر|||
## 5. المصادقة
|||سبتمبر|||
### توصية: Supabase Auth مع تسجيل دخول مجهول + كلمة المرور لمرة واحدة (OTP) للهاتف + البريد الإلكتروني/كلمة المرور
|||سبتمبر|||
** مبدأ التصميم النقدي لهذا الجمهور: **
يجب أن يكون التطبيق قابلاً للاستخدام دون تقديم معلومات تعريف شخصية. لن يستخدم العديد من الآباء المهاجرين (خاصة غير المسجلين) تطبيقًا يتطلب معرفًا حكوميًا/رقم الضمان الاجتماعي (SSN)، أو التحقق من الاسم الحقيقي، أو جمع العناوين، أو البريد الإلكتروني الإلزامي.

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

**مستويات المصادقة (الثقة التقدمية):**
|||سبتمبر|||
| الطبقة | الطريقة | ما يفتح | معلومات تحديد الهوية الشخصية مطلوبة |
|------|--------|----------------|-------------|
| 1 | تسجيل دخول مجهول | تصفح الموارد، استخدم دردشة الذكاء الاصطناعي، اعرض المنتدى | لا شيء |
| 2 | هاتف OTP | النشر في المنتدى، حفظ ملفات تعريف الأطفال | رقم الهاتف فقط |
| 3 | البريد الإلكتروني + كلمة المرور | الحساب كامل مع الريكفري | عنوان البريد الإلكتروني |
|||سبتمبر|||
** مصادقة مجهولة Supabase: **
```مخطوطة
// قم بتسجيل الدخول بشكل مجهول - لا حاجة لمعلومات تحديد الهوية الشخصية
const {بيانات، خطأ} = في انتظار supabase.auth.signInAnonymously()
|||سبتمبر|||
// لاحقًا، يمكن للمستخدم ربط رقم هاتف
const {بيانات، خطأ} = انتظارsupabase.auth.updateUser({
  الهاتف: "+1234567890"،
})
```
|||سبتمبر|||
** إعداد OTP للهاتف: **
يدعم Supabase مصادقة الهاتف عبر Twilio وMessageBird وTextlocal وVonage. يتلقى المستخدمون رقم التعريف الشخصي (PIN) المكون من 6 أرقام عبر رسالة نصية قصيرة، ويكون صالحًا لمدة 60 ثانية.
|||سبتمبر|||
**الأمن للمستخدمين المجهولين:**
- قم بتمكين اختبار CAPTCHA (يوصى باستخدام Cloudflare Turnstile - مجانًا) لمنع إساءة الاستخدام
- الحد الأقصى للمعدل المستند إلى IP: 30 طلبًا/ساعة (قابل للتعديل في لوحة معلومات Supabase)
- يمكن لسياسات RLS التمييز بين المستخدمين المجهولين والمستخدمين المعتمدين من خلال مطالبة JWT `is_anonymous`
|||سبتمبر|||
** لماذا لا كاتب لهذا التطبيق: **
- لا يوجد تسجيل دخول مجهول مدمج
- 0.02 دولار أمريكي/MAU بعد 10 آلاف (Supabase: 50 ألف مجانًا)
- المبالغة في واجهة المستخدم لحالة الاستخدام هذه
- يضيف التبعية الخارجية
|||سبتمبر|||
**لماذا لا Auth0:**
- الإعداد المعقد للهاكاثون
- لا يوجد مصادقة مجهولة
- الطبقة المجانية تقتصر على 7500 MAU

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

**المصادر:**
- [عمليات تسجيل الدخول المجهولة لـ Supabase](https://supabase.com/docs/guides/auth/auth-anonymous)
- [تسجيل الدخول إلى هاتف Supabase](https://supabase.com/docs/guides/auth/phone-login)
- [كاتب مقابل مصادقة Supabase](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [أمان عمليات تسجيل الدخول المجهولة](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)
|||سبتمبر|||
---
|||سبتمبر|||
## 6. التدويل (i18n)
|||سبتمبر|||
### توصية: next-intl
|||سبتمبر|||
**لماذا التالي-intl عبر رد الفعل i18next أو رد الفعل-intl:**
|||سبتمبر|||
| ميزة | التالي الدولي | رد فعل i18next | رد الفعل الدولي |
|---------|--------------------|-----------|-------|
| دعم جهاز التوجيه التطبيق Next.js | أصلي | عبر المجمع | عبر المجمع |
| دعم مكون الخادم | مدمج (0 عميل JS) | يتطلب الإعداد | يتطلب الإعداد |
| حجم الحزمة | ~4 كيلو بايت | ~8 كيلو بايت | ~12 كيلو بايت |
| دعم RTL | مدمج | دليل | دليل |
| صيغ الجمع (العربية: 6 صيغ) | وحدة العناية المركزة الأوتوماتيكية | التكوين اليدوي | وحدة العناية المركزة الأوتوماتيكية |
| اكتب الأمان | تايب سكريبت-أولاً | جيد | جيد |
|||سبتمبر|||
** التثبيت: **
``` باش
تثبيت npm التالي-intl-rtl-detect
تثبيت npm --save-dev @types/rtl-detect
```
|||سبتمبر|||
**إعداد RTL للغة العربية والفارسية والأردية:**
```مخطوطة
// خطاف/useTextDirection.ts
استيراد { useLocale } من 'next-intl'؛
استيراد {isRtlLang} من 'rtl-detect'؛

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

وظيفة التصدير useTextDirection() {
  لغة ثابتة = useLocale();
  العودة isRtlLang(اللغة المحلية)؟ 'rtl' : 'ltr';
}
|||سبتمبر|||
// التطبيق/[locale]/layout.tsx
تصدير الوظيفة الافتراضية LocaleLayout({ children, params: { locale } }) {
  اتجاه ثابت = isRtlLang(اللغة المحلية)؟ 'rtl' : 'ltr';
  العودة (
    <html lang={locale} dir={direction}>
      <الجسم>{الأطفال</body>
    </html>
  );
}
```
|||سبتمبر|||
**هيكل ملف الترجمة:**
```
الرسائل/
  ar/
    common.json # سلاسل واجهة المستخدم المشتركة (الأزرار، التنقل، الأخطاء)
    auth.json # تسجيل الدخول، الاشتراك، الملف الشخصي
    Resources.json # مكتبة الموارد
    forum.json # المنتدى/المجتمع
    ai-chat.json # مساعد الذكاء الاصطناعي
    Child-profile.json # تتبع الطفل
    Skills.json # بطاقات المهارة
  ar/ # العربية (RTL)
  وفاق / # الاسبانية
  zh/ # الصينية (المبسطة)
  fa/ # فارسي/فارسي (RTL)
  ur/ # الأردية (RTL)
```
|||سبتمبر|||
** اللغات ذات الأولوية لـ MVP: ** الإنجليزية (الافتراضية)، والإسبانية، والعربية (RTL لإثبات القدرة التقنية)، والصينية (المبسطة).
|||سبتمبر|||
**CSS لـ RTL - استخدم خصائص Tailwind المنطقية:**
- `pl-4` -> `ps-4` (الحشوة المضمنة البداية)
- `pr-4` -> `pe-4` (حشوة مضمنة في النهاية)
- `النص على اليسار` -> `بدء النص`
- `نص-يمين` -> `نهاية النص`
- `ml-auto` -> `ms-auto`
- `السيد-أوتو` -> `أنا-أوتو`
|||سبتمبر|||
**الترجمة الآلية لمحتوى المنتدى:**
|||سبتمبر|||
| الخدمة | الطبقة المجانية | السعر بعد الحرة | اللغات | الخصوصية |
|---------|----------|-----------------|-----------|---------|
| ترجمة جوجل السحابية | 500 ألف حرف/شهر (دائم) | 20 دولارًا/1 مليون حرف | 130+ | لا توجد بيانات مخزنة/مستخدمة للتدريب |
| ديب إل | 500 ألف حرف/شهر | 25 دولارًا أمريكيًا/مليون حرف + 5.49 دولارًا أمريكيًا شهريًا | 30+ | قد يتم تخزين بيانات الطبقة المجانية |
| ترجمة أمازون | 2 مليون حرف/شهر (12 شهرًا فقط) | 15 دولارًا/1 مليون حرف | 75+ | لا توجد بيانات مخزنة |
|||سبتمبر|||
**التوصية:** Google Cloud Translation API - طبقة مجانية دائمة، وأكبر تغطية لغوية (أكثر من 130 لغة بما في ذلك جميع لغات RTL المستهدفة)، وضمانات خصوصية قوية (لا توجد بيانات مخزنة أو مستخدمة للتدريب).

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

**المصادر:**
- [وثائق intl التالية](https://next-intl.dev/)
- [الدليل الكامل التالي لعام 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [رد الفعل-intl مقابل رد الفعل-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [دعم Next.js RTL](https://lingo.dev/en/nextjs-i18n/right-to-left-languages)
- [تسعير الترجمة السحابية من Google](https://cloud.google.com/translate/pricing)
- [DeepL مقابل الترجمة من Google](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)
|||سبتمبر|||
---
|||سبتمبر|||
## 7. مكتبة مكونات واجهة المستخدم
|||سبتمبر|||
### التوصية: shadcn/ui + Tailwind CSS
|||سبتمبر|||
** لماذا shadcn/ui:**
- يتم نسخ المكونات ولصقها في مشروعك (الملكية الكاملة، لا توجد تحديثات تبعية تدعو للقلق)
- مبني على أساسيات Radix UI (متوافق مع WAI-ARIA، التنقل عبر لوحة المفاتيح، دعم قارئ الشاشة)
- Tailwind CSS الأصلي (الخصائص المنطقية لـ RTL)
- 40+ المكونات المتاحة
- دعم RTL عبر القوالب
- وضع الظلام / الضوء مدمج
- صفر النفقات العامة في وقت التشغيل
|||سبتمبر|||
** التثبيت: **
``` باش
npx shadcn@latest init
npx shadcn@latest إضافة زر حوار البطاقة نموذج الإدخال ورقة علامات التبويب الصورة الرمزية شارة الأكورديون أمر نخب
```
|||سبتمبر|||
** المكونات الرئيسية لهذا التطبيق: **
- `البطاقة` - بطاقات الموارد، وبطاقات المهارات، وبطاقات ملف تعريف الطفل
- `مربع حوار` / `ورقة` - تفاعلات مشروطة، محوّل اللغة
- `Form` + `Input` - نماذج الملفات الشخصية للأطفال، وإنشاء منشورات المنتدى
- `علامات التبويب` - التنقل بين الأقسام
- `الصورة الرمزية` - عرض مستخدم المنتدى (مع خيار مجهول)
- `الشارة` - مستويات المهارة، وعلامات اللغة
- `الأكورديون` - الأسئلة الشائعة، تفاصيل الموارد
- `الأمر` - لوحة البحث عن الموارد
- `نخب` - الإخطارات
|||سبتمبر|||
**إمكانية الوصول المضمنة:**
- تشتمل جميع المكونات المستندة إلى Radix على أدوار وسمات ARIA تلقائيًا
- التنقل باستخدام لوحة المفاتيح يعمل خارج الصندوق (Tab، Enter، Escape، مفاتيح الأسهم)
- إدارة التركيز ومحاصرة التركيز في الوسائط
- إعلانات قارئ الشاشة للمحتوى الديناميكي
- تم ربط `aria-descriptionedby` تلقائيًا عند حدوث أخطاء في التحقق من الصحة
- تم تعيين ``aria-invalid`` على أخطاء النموذج

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

**لماذا لا تستخدم واجهة Chakra UI:** وقت تشغيل أطول (CSS-in-JS)، وتصميم قائم على الدعامات أقل مرونة من فئات الأدوات المساعدة Tailwind، وزخم أقل للنظام البيئي في 2025-2026.
|||سبتمبر|||
** لماذا لا تكون واجهة المستخدم مادية: ** حزمة ثقيلة جدًا، قد تبدو لغة تصميم Google سريرية بالنسبة لتطبيق المجتمع، ويصعب تخصيصها بعمق.
|||سبتمبر|||
**المصادر:**
- [دليل shadcn/ui 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [مكونات shadcn/ui التي يمكن الوصول إليها](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [مقارنة مكتبات React UI 2025](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)
|||سبتمبر|||
---
|||سبتمبر|||
## 8. ميزات المنتدى / المجتمع
|||سبتمبر|||
### الهندسة المعمارية: إنشاء مخصص باستخدام Supabase Realtime
|||سبتمبر|||
** نموذج البيانات (SQL): **
``` SQL
- فئات المنتدى
إنشاء جدول forum_categories (
  معرف UUID المفتاح الأساسي الافتراضي gen_random_uuid(),
  name_key النص غير فارغ،
  وصف_مفتاح النص،
  رمز النص,
  عدد صحيح ترتيب_الترتيب الافتراضي 0،
  create_at TIMESTAMPTZ DEFAULT NOW()
);
|||سبتمبر|||
-- مشاركات المنتدى (المواضيع)
إنشاء جدول forum_posts (
  معرف UUID المفتاح الأساسي الافتراضي gen_random_uuid(),
  مراجع فئة_ID UUID forum_categories(id),
  Author_id مراجع UUID auth.users(id)،
  is_anonymous BOOLEAN DEFAULT خطأ،
  عرض_اسم النص،
  نص العنوان ليس فارغًا،
  محتوى النص غير فارغ،
  original_language TEXT DEFAULT 'en'،
  upvote_count عدد صحيح افتراضي 0،
  comment_count عدد صحيح افتراضي 0،
  تم تثبيته بشكل منطقي افتراضي خطأ،
  is_moderated BOOLEAN DEFAULT خطأ،
  create_at TIMESTAMPTZ DEFAULT NOW(),
  update_at TIMESTAMPTZ DEFAULT NOW()
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

- التعليقات على المشاركات
إنشاء جدول forum_comments (
  معرف UUID المفتاح الأساسي الافتراضي gen_random_uuid(),
  post_id مراجع UUID forum_posts(id) عند حذف CASCADE،
  مراجع Parent_id UUID forum_comments(id)،
  Author_id مراجع UUID auth.users(id)،
  is_anonymous BOOLEAN DEFAULT خطأ،
  عرض_اسم النص،
  محتوى النص غير فارغ،
  original_language TEXT DEFAULT 'en'،
  upvote_count عدد صحيح افتراضي 0،
  create_at TIMESTAMPTZ DEFAULT NOW()
);
|||سبتمبر|||
- التصويتات المؤيدة
إنشاء جدول forum_upvotes (
  معرف UUID المفتاح الأساسي الافتراضي gen_random_uuid(),
  مراجع معرف المستخدم UUID auth.users(id),
  مراجع post_id UUID forum_posts(id)،
  comment_id مراجع UUID forum_comments(id)،
  create_at TIMESTAMPTZ DEFAULT NOW(),
  فريد (user_id، post_id)،
  فريد (معرف_المستخدم، معرف_التعليق)
);
|||سبتمبر|||
- الترجمات المخزنة مؤقتا
إنشاء جدول forum_translations (
  معرف UUID المفتاح الأساسي الافتراضي gen_random_uuid(),
  source_type نص غير فارغ،
  source_id UUID ليس فارغًا،
  target_language النص غير فارغ،
  ترجمة_عنوان النص،
  ترجمة_المحتوى النص غير فارغ،
  create_at TIMESTAMPTZ DEFAULT NOW(),
  فريد (source_id، target_language)
);
```
|||سبتمبر|||
** التحديثات في الوقت الحقيقي: **
```مخطوطة
قناة ثابتة = Supabase
  .القناة ("مشاركات المنتدى")
  .on('postgres_changes', {
    الحدث: "إدراج"،
    المخطط: "عام"،
    الجدول: "forum_posts"،
    عامل التصفية: `category_id=eq.${categoryId}`
  }, (الحمولة) => {
    // أضف منشورًا جديدًا إلى واجهة المستخدم
  })
  .الاشتراك()
```
|||سبتمبر|||
**سلامة النشر المجهول:**
- يمكن وضع علامة على المشاركات الواردة من مستخدمين مجهولين (Supabaseonymous auth) بشكل مختلف
- تتحقق سياسة RLS من مطالبة `is_anonymous` في JWT
- عرض الأسماء المستعارة (على سبيل المثال، "الأصل #4827") بدلاً من الأسماء الفارغة
|||سبتمبر|||
**الإشراف (MVP):** زر تقرير بسيط في كل مشاركة/تعليق. علامة المسؤول لإخفاء المحتوى المبلغ عنه. المستقبل: الإشراف على المحتوى المدعوم بالذكاء الاصطناعي عبر Claude API.
|||سبتمبر|||
**الترجمة عند الطلب:** المشاركات المخزنة باللغة الأصلية. يؤدي الزر "ترجمة" إلى تشغيل Google Cloud Translation API. تم تخزين الترجمة مؤقتًا في جدول "forum_translations". يتم تقديم الطلبات اللاحقة لنفس اللغة من ذاكرة التخزين المؤقت.
|||سبتمبر|||
**المصادر:**
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [إنشاء منتدى المجتمع باستخدام Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)

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
|||سبتمبر|||
## 9. تكامل الذكاء الاصطناعي
|||سبتمبر|||
### الهندسة المعمارية: Vercel AI SDK + Claude API + Supabase pgvector RAG
|||سبتمبر|||
** تدفق البيانات: **
```
سؤال المستخدم (متعدد اللغات)
  -> [ترجمة جوجل إلى الإنجليزية] (إذا لم تكن الإنجليزية)
  -> [إنشاء التضمين] (تضمين النص-3-صغير)
  -> [بحث التشابه Supabase pgvector]
  -> [مستندات السياق المستردة]
  -> [واجهة برمجة تطبيقات Claude مع موجه النظام + السياق + سؤال المستخدم]
  -> [الرد باللغة الإنجليزية]
  -> [ترجمة جوجل إلى لغة المستخدم] (إذا لم تكن الإنجليزية)
  -> معروض للمستخدم (متدفق)
```
|||سبتمبر|||
**إعداد Vercel AI SDK:**
``` باش
تثبيت npm ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```
|||سبتمبر|||
```مخطوطة
// app/api/chat/route.ts
استيراد {أنثروبيك} من '@ai-sdk/anthropic'؛
استيراد {streamText} من "ai"؛
|||سبتمبر|||
تصدير وظيفة غير متزامنة POST (الطلب: طلب) {
  const { messages, locale } = انتظار req.json();
  نتيجة ثابتة = StreamText({
    النموذج: إنساني ('كلود-3-5-هايكو-20241022')،
    النظام: SYSTEM_PROMPT،
    الرسائل: الرسائل المعززة،
  });
  إرجاع النتيجة.toDataStreamResponse();
}
```
|||سبتمبر|||
```مخطوطة
// جانب العميل: المكونات/AiChat.tsx
"استخدام العميل"؛
استيراد { useChat } من '@ai-sdk/react'؛

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

وظيفة التصدير AiChat() {
  const { الرسائل، الإدخال، HandleInputChange، HandleSubmit، isLoading } = useChat({
    واجهة برمجة التطبيقات: "/ واجهة برمجة التطبيقات/الدردشة"،
  });
  // واجهة مستخدم الدردشة مع الاستجابات المتدفقة
}
```
|||سبتمبر|||
**اختيار نموذج كلود للهاكاثون:**
|||سبتمبر|||
| نموذج | رموز الإدخال/1M | الإخراج/1M الرموز | الأفضل لـ |
|-------|----------------|-------------------|----------|
| كلود هايكو 4.5 | 1.00 دولار | 5.00 دولار | **ردود الدردشة (مستحسن)** |
| كلود سونيت 4.5 | 3.00 دولار | 15.00 دولارًا | الاستدلال المعقد |
| كلود أوبوس 4.5 | 5.00 دولار | 25.00 دولارًا | مبالغة في الدردشة |
|||سبتمبر|||
**التوصية:** كلود هايكو 4.5 - سريع (زمن استجابة منخفض للبث)، ورخيص (رائع لميزانية الهاكاثون)، وقادر بما يكفي لطرح الأسئلة والأجوبة والإرشادات العامة.
|||سبتمبر|||
**موجه النظام (السلامة أولاً للمعلومات الصحية):**
```
أنت مساعد AI داعم لمساعدة الآباء المهاجرين للأطفال
مع اضطراب طيف التوحد (ASD). أنت تقدم معلومات حول:
- موارد ASD والعلاجات والبرامج التعليمية
- التنقل في أنظمة الرعاية الصحية والتعليم في الولايات المتحدة
- عمليات IEP (برنامج التعليم الفردي).
- برامج الدعم الحكومية وغير الربحية المتاحة
- معالم النمو العامة
|||سبتمبر|||
إرشادات السلامة الحرجة:
- أنت لست طبيبا. أوصي دائمًا باستشارة المتخصصين في الرعاية الصحية.
- لا تقم أبدًا بتشخيص أو اقتراح علاجات طبية محددة.
- قم دائمًا بتضمين إخلاء المسؤولية عند مناقشة الموضوعات الطبية/التنموية.
- إذا وصف المستخدم حالة طبية طارئة، قم بتوجيهه للاتصال بالرقم 911.
- كن حساسًا ثقافيًا وتجنب الافتراضات حول بنية الأسرة.
- استخدم لغة بسيطة وواضحة.
- عندما لا تكون متأكداً، قل "لا أعرف" بدلاً من التخمين.
- لا تقوم أبدًا بجمع أو طلب معلومات التعريف الشخصية.
```
|||سبتمبر|||
** إعداد Supabase pgvector RAG: **
``` SQL
إنشاء امتداد إذا لم يكن هناك ناقل؛
|||سبتمبر|||
إنشاء موارد الجدول (
  معرف UUID المفتاح الأساسي الافتراضي gen_random_uuid(),
  نص العنوان ليس فارغًا،
  محتوى النص غير فارغ،
  فئة النص غير فارغة،
  نص source_url،
  نص الحالة,
  لغة النص الافتراضي 'en'،
  ناقل التضمين (1536)،
  create_at TIMESTAMPTZ DEFAULT NOW(),
  update_at TIMESTAMPTZ DEFAULT NOW()
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

إنشاء فهرس على الموارد باستخدام hnsw (تضمين Vector_cosine_ops)؛
|||سبتمبر|||
إنشاء أو استبدال الدالة match_resources(
  ناقل الاستعلام_التضمين (1536)،
  match_threshold FLOAT DEFAULT 0.7،
  match_count إنت الافتراضي 5
)
إرجاع الجدول (معرف UUID، نص العنوان، نص المحتوى، نص الفئة، تعويم التشابه)
اللغة plpgsql كـ $$
ابدأ
  استعلام العودة
  حدد r.id، r.title، r.content، r.category،
    1 - (r.embedding <=> query_embedding) كما التشابه
  من الموارد ص
  حيث 1 - (r.embedding <=> query_embedding) > match_threshold
  الطلب حسب r.embedding <=> query_embedding
  LIMIT match_count؛
نهاية؛
$$;
```
|||سبتمبر|||
**نموذج التضمين:** استخدم OpenAI `text-embedding-3-small` (0.02 دولار/مليون رمز مميز، 1536 بُعدًا، أرخص 5 مرات من ada-002 مع أداء أفضل).
|||سبتمبر|||
**اختصار Hackathon:** قم بملء جدول الموارد مسبقًا بما يتراوح بين 20 إلى 50 موردًا منسقًا حول مرض التوحد وبرامج التعليم الفردي (IEPs) وأنواع العلاج ومنظمات الدعم. أنشئ عمليات تضمين لهذه العناصر أثناء الإعداد بدلاً من إنشاء مسار استيعاب كامل.
|||سبتمبر|||
**المصادر:**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [دليل AI SDK + Next.js](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [تسعير Claude API](https://platform.claude.com/docs/en/about-claude/pricing)
- [كلود للرعاية الصحية 2026](https://intuitionlabs.ai/articles/clude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI & Vectors](https://supabase.com/docs/guides/ai)
- [تضمينات OpenAI](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [إنشاء RAG باستخدام Claude & pgvector](https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG Chatbot مع Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)
|||سبتمبر|||
---
|||سبتمبر|||
## 10. إمكانية الوصول
|||سبتمبر|||
### استراتيجية الامتثال WCAG 2.2 AA

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

**المبادئ الأساسية لهذا الجمهور:**
1. **إمكانية الوصول المعرفي** -- تخطيطات يمكن التنبؤ بها وتسلسل هرمي مرئي واضح (مهم للوالدين المتوترين/المرهقين وللاعتبارات المتعلقة بالتوحد)
2. **دعم منخفض لمحو الأمية** - إشارات مرئية وأيقونات إلى جانب النص ولغة بسيطة
3. **إمكانية الوصول متعدد اللغات** - يجب أن تعمل برامج قراءة الشاشة مع لغات RTL
4. **إمكانية الوصول إلى المحرك** - أهداف لمس كبيرة (44 × 44 بكسل على الأقل لكل WCAG 2.2)
|||سبتمبر|||
**مدمج عبر shadcn/ui + Radix:**
- تشتمل جميع المكونات على أدوار/سمات ARIA تلقائيًا
- التنقل باستخدام لوحة المفاتيح (Tab، Enter، Escape، مفاتيح الأسهم)
- إدارة التركيز ومحاصرة التركيز في الوسائط
- إعلانات قارئ الشاشة للمحتوى الديناميكي
- تم ربط `aria-descriptionedby` بأخطاء التحقق من الصحة
- تم تعيين ``aria-invalid`` على أخطاء النموذج
|||سبتمبر|||
**مكتبات إضافية:**
``` باش
npm install -D @axe-core/react # يسجل مشكلات a11y إلى وحدة تحكم المتصفح
تثبيت npm -D eslint-plugin-jsx-a11y # Lint لمشكلات a11y
```
|||سبتمبر|||
**تباين الألوان:** يتطلب WCAG AA نسبة 4.5:1 للنص العادي، و3:1 للنص الكبير. توفير تبديل وضع التباين العالي.
|||سبتمبر|||
**اعتبارات التصميم الخاصة بالتوحد:**
- خطوط Sans-serif (مثل Inter وsystem-ui) - وهي أسهل في القراءة للمستخدمين المتباينين عصبيًا
- تنقل متسق ويمكن التنبؤ به عبر جميع الصفحات
- الحد الأدنى من الرسوم المتحركة (احترام "يفضل الحركة المخفضة")
- مسح الحدود البصرية بين الأقسام
- تجنب الحمل الزائد الحسي (الألوان الصامتة، بدون وميض)
- تبديل لغة بسيط لتبسيط المحتوى
|||سبتمبر|||
```مخطوطة
// في المكونات، احترم تفضيلات الحركة:
// <div className="motion-safe:animate-fadeInmotion-reduce:opacity-100">
```
|||سبتمبر|||
**المصادر:**
- [WCAG 2.2 في React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [دليل WCAG 2025 لتباين الألوان](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [أفضل ممارسات إمكانية الوصول إلى التفاعل](https://rtcamp.com/handbook/react-best-practices/accessibility/)
|||سبتمبر|||
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

## 11. النشر
|||سبتمبر|||
### توصية: طبقة Vercel المجانية
|||سبتمبر|||
**لماذا Vercel:** تم تصميمه بواسطة منشئي Next.js - لا حاجة لأي تكوين. فقط `git Push` للنشر.
|||سبتمبر|||
**حدود الطبقة المجانية:**
- عرض النطاق الترددي 100 جيجابايت / شهر
- 100 ألف استدعاء وظيفي بدون خادم شهريًا
- عمليات نشر غير محدودة
- مهلة الوظيفة لمدة 10 ثوانٍ (كافية لتدفق الذكاء الاصطناعي)
- دعم المجال المخصص
|||سبتمبر|||
** متغيرات البيئة: **
``` باش
# .env.local (لا ترتكب هذا مطلقًا)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # من جانب الخادم فقط
ANTHROPIC_API_KEY=sk-ant-... # جانب الخادم فقط
OPENAI_API_KEY=sk-... # من جانب الخادم فقط (للتضمين)
GOOGLE_TRANSLATE_API_KEY=... # من جانب الخادم فقط
```
|||سبتمبر|||
**هام:** يتم عرض المتغيرات المسبوقة بـ `NEXT_PUBLIC_` للمتصفح. يجب ألا تحتوي مفاتيح API على هذه البادئة.
|||سبتمبر|||
**نصائح تجريبية:** انشر على Vercel مبكرًا (خلال الساعة الأولى). استخدم عناوين URL للمعاينة للمشاركة مع الحكام. الحماية بكلمة مرور متاحة لعمليات نشر المعاينة.
|||سبتمبر|||
**المصادر:**
- [نشر Next.js على Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [نشر تطبيقات Next.js 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [متغيرات بيئة فيرسيل](https://vercel.com/docs/environment-variables)

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
|||سبتمبر|||
## 12. الخصوصية والأمان
|||سبتمبر|||
### هندسة الخصوصية حسب التصميم
|||سبتمبر|||
** المبدأ التوجيهي: ** يخدم هذا التطبيق السكان الضعفاء. يمكن أن يكون لانتهاكات الخصوصية عواقب حقيقية (خطر الترحيل للعائلات غير الموثقة). الأمن ليس اختياريا.
|||سبتمبر|||
**اعتبارات قانون نقل التأمين الصحي والمسؤولية (HIPAA):** التطبيق ليس كيانًا مغطى ومن المحتمل ألا يحتاج إلى الامتثال الكامل لقانون نقل التأمين الصحي والمسؤولية (HIPAA). ومع ذلك، في حالة تخزين أي معلومات متعلقة بالصحة حول الأطفال، يجب التعامل معها على أنها حساسة. أفضل طريقة: تقليل ما تقوم بتخزينه من جانب الخادم.
|||سبتمبر|||
**اعتبارات قانون حماية خصوصية الأطفال (COPPA) (الأطفال أقل من 13 عامًا):** إذا كان الآباء هم المستخدمون الوحيدون، فإن قانون حماية خصوصية الأطفال (COPPA) أقل تقييدًا ولكنه لا يزال مناسبًا لتخزين بيانات الأطفال. يقدم تحديث COPPA لعام 2025 متطلبات أكثر صرامة لتقليل البيانات. **التوصية:** تصميم التطبيق لأولياء الأمور فقط، وليس ليستخدمه الأطفال مباشرة.
|||سبتمبر|||
**هندسة البيانات--ما الذي يجب تخزينه وأين:**
|||سبتمبر|||
| نوع البيانات | موقع التخزين | التشفير |
|-----------|-----------------|------------|
| اسم الطفل | من جانب العميل (localStorage/IndexedDB) | اختياري من جانب العميل AES-256 |
| تشخيص الطفل | من جانب العميل | تشفير من جانب العميل AES-256 |
| مهارات/معالم الطفل | Supabase (مشفر في حالة الراحة) | سوباباس الافتراضي |
| مشاركات المنتدى | سوباباس | في حالة الراحة (Supabase الافتراضي) |
| سجل الدردشة بالذكاء الاصطناعي | من جانب العميل فقط (تخزين الجلسة) | زائلة، غير مستمرة |
| اللغة المفضلة للمستخدم | البيانات الوصفية للمستخدم Supabase | قياسي |
| رموز المستخدم المجهولة | مصادقة Supabase | معيار JWT |

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

**سياسات RLS:**
``` SQL
- يمكن للمستخدمين رؤية ملفات تعريف الأطفال الخاصة بهم فقط
إنشاء سياسة "يمكن للمستخدمين عرض أطفالهم"
  على ملفات تعريف الطفل للاختيار
  الاستخدام (auth.uid() =parent_id);
|||سبتمبر|||
- يمكن للمستخدمين المجهولين قراءة مشاركات المنتدى
إنشاء سياسة "يمكن لأي شخص قراءة المشاركات"
  على forum_posts للاختيار
  الاستخدام (is_moderated = false)؛
|||سبتمبر|||
- يمكن للمستخدمين المصادق عليهم فقط النشر
إنشاء سياسة "يمكن للمستخدمين المصادقين النشر"
  على forum_posts للإدراج
  مع التحقق (auth.uid() ليس فارغًا)؛
```
|||سبتمبر|||
**ما لا يجب فعله:**
- لا تقم بتخزين حالة الهجرة في أي مكان، على الإطلاق
- لا تطلب أسماء حقيقية
- لا تقم بتخزين عناوين IP في سجلات التطبيق
- لا تستخدم تحليلات التتبع (لا تستخدم Google Analytics - استخدم معقولًا أو لا شيء)
- لا تقم بتخزين محادثات الدردشة AI من جانب الخادم
- لا تحتاج إلى خدمات الموقع
|||سبتمبر|||
**المصادر:**
- [HIPAA والتطبيقات الصحية](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [الامتثال لـ COPPA 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [دليل تطبيق Zero-Knowledge Health App](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [دليل Supabase RLS الكامل 2026](https://vibeappscanner.com/supabase-row-level-security)
|||سبتمبر|||
---
|||سبتمبر|||
## 13. استراتيجية الهاكاثون وميزانية الوقت
|||سبتمبر|||
### خطة البناء لمدة 10 ساعات (8:30 صباحًا - 6:30 مساءً)

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

** تحديد أولويات الميزة (طريقة MoSCoW): **
|||سبتمبر|||
| الأولوية | ميزة | الحالة | EST. الوقت |
|----------|--------|--------|-----------|
| **يجب** | واجهة مستخدم متعددة اللغات (EN + ES + AR) | بناء كامل | 1.5 ساعة |
| **يجب** | مساعد الدردشة بالذكاء الاصطناعي (مع RAG) | بناء كامل | 2 ساعة |
| **يجب** | مكتبة الموارد (قابلة للتصفح + قابلة للبحث) | بناء كامل | 1 ساعة |
| **يجب** | مجهول + مصادقة الهاتف | بناء كامل | 1 ساعة |
| **يجب** | ملف تعريف الطفل مع تتبع المهارات | بناء كامل | 1.5 ساعة |
| **ينبغي** | منتدى المجتمع | بناء أساسي (لا يوجد في الوقت الحقيقي) | 1 ساعة |
| **ينبغي** | وصول PWA دون اتصال | بناء (إعداد Serwist) | 0.5 ساعة |
| **يمكن** | ترجمة مشاركة المنتدى | كعب مع وهمية | 0.5 ساعة |
| **يمكن** | الوضع الداكن / التباين العالي | تبديل سريع | 0.25 ساعة |
| **لن** | نظام الاعتدال الكامل | تجريبي وهمية فقط | -- |
| **لن** | دفع الإخطارات | تخطي بالكامل | -- |
| **لن** | محتوى الفيديو | تخطي بالكامل | -- |
|||سبتمبر|||
### الجدول الزمني التفصيلي
|||سبتمبر|||
```
8:30 - 9:00 (30 دقيقة) إعداد المشروع
  - سقالة مع create-t3-app أو Nextbase starter
  - إنشاء مشروع Supabase + الجداول
  - خط أنابيب نشر Vercel (نشر الصدفة الفارغة)
  - تثبيت عمليات الإقلاع الأساسية
  - تكوين متغيرات البيئة
|||سبتمبر|||
9:00 - 10:00 (60 دقيقة) التأسيس
  - مكون التخطيط مع i18n (الرأس، التنقل، محوّل اللغة)
  - تم تثبيت مكونات shadcn/ui
  - دعم RTL سلكيًا
  - مصادقة Supabase: واجهة المستخدم المجهولة + تسجيل الدخول عبر البريد الإلكتروني
  - بنية ملفات الترجمة (EN + ES + AR)
|||سبتمبر|||
10:00 - 11:30 (90 دقيقة) الميزة الأساسية رقم 1: الدردشة بالذكاء الاصطناعي
  - إعداد Vercel AI SDK + كلود هايكو
  - طريق API للدردشة مع البث المباشر
  - مكون واجهة المستخدم للدردشة مع ربط useChat
  - موجه النظام مع حواجز السلامة
  - تعبئة 20 موردًا مسبقًا في pgvector
  - خط أنابيب RAG (استعلام التضمين -> البحث -> موجه التعزيز)
|||سبتمبر|||
11:30 - 12:00 (30 دقيقة) نشر في منتصف الصباح + اختبار
  - نشر في Vercel
  - اختبار على الهاتف المحمول
  - إصلاح الأخطاء الحرجة
|||سبتمبر|||
12:00 - 12:30 (30 دقيقة) الغداء

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

12:30 - 1:30 (60 دقيقة) الميزة الأساسية رقم 2: مكتبة الموارد
  - بطاقات الموارد مع تصفية الفئات
  - وظيفة البحث
  - صفحات تفاصيل الموارد
  - بيانات البذور: 20-50 من الموارد المنسقة
|||سبتمبر|||
1:30 - 3:00 (90 دقيقة) الميزة الأساسية رقم 3: الملف التعريفي للطفل + المهارات
  - نموذج إنشاء ملف تعريف الطفل
  - مكونات بطاقة المهارة
  - واجهة المستخدم لتتبع المعالم
  - التخزين من جانب العميل للبيانات الحساسة
  - عرض لوحة القيادة الملف الشخصي
|||سبتمبر|||
3:00 - 4:00 (60 دقيقة) الميزة رقم 4: منتدى المجتمع (أساسي)
  - عرض قائمة مشاركات المنتدى
  - إنشاء نموذج المشاركة
  - نظام التعليق الأساسي
  - التنظيم على أساس الفئة
|||سبتمبر|||
4:00 - 4:30 (30 دقيقة) PWA + الترجمات
  - إعداد عامل الخدمة Serwist
  - املأ مفاتيح الترجمة لـ ES و AR
  - اختبار تخطيط RTL باللغة العربية
|||سبتمبر|||
4:30 - 5:30 (60 دقيقة) الإعداد التجريبي والتلميع
  - إصلاح أخطاء واجهة المستخدم
  - إضافة حالات التحميل ومعالجة الأخطاء
  - تبديل وضع التباين العالي (إذا كان الوقت)
  - التقاط لقطات للعرض التقديمي
  - سجل النسخ الاحتياطي للفيديو التجريبي
|||سبتمبر|||
5:30 - 6:00 (30 دقيقة) النشر النهائي + العرض التقديمي
  - نشر Vercel النهائي
  - اختبار جميع الميزات من البداية إلى النهاية
  - إعداد نص عرض تقديمي مدته 3 دقائق
|||سبتمبر|||
6:00 - 6:30 (30 دقيقة) استراحة/عرض تقديمي
```
|||سبتمبر|||
### ما الذي يجب الاستهزاء به/الكعب:
- **الإشراف على المنتدى:** ما عليك سوى إخفاء المشاركات التي تم الإبلاغ عنها بعلامة، وليس لوحة الإدارة
- **ترجمة المنتدى:** يظهر زر "ترجمة" التحميل ثم النص الأصلي (أو ترجمة جوجل إذا كان الوقت)
- **تدفق إعادة تعيين كلمة المرور:** استخدم رسائل البريد الإلكتروني الافتراضية الخاصة بـ Supabase
- **الصور الرمزية للمستخدم:** الأحرف الأولى أو الرمز الافتراضي، لا يوجد تحميل
- ** لوحة تحكم المشرف: ** تخطي بالكامل

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

### نصائح لتحسين العرض التوضيحي:
1. **ابدأ بالقصة** -- "تعرف على فاطمة، وهي أم سورية انتقلت للتو إلى الولايات المتحدة. وقد تم تشخيص إصابة ابنها البالغ من العمر 4 سنوات مؤخرًا بمرض التوحد. وهي لا تتحدث الإنجليزية. ولا تعرف من أين تبدأ."
2. **إظهار مفتاح اللغة** - التبديل من الإنجليزية إلى العربية مباشرة. يعد الوجه RTL مثيرًا للإعجاب بصريًا للحكام.
3. **عرض تجريبي لدردشة الذكاء الاصطناعي** - اطرح سؤالاً باللغة الإسبانية. أظهر أنه يوفر الموارد.
4. **إظهار إمكانية عدم الاتصال بالإنترنت** - قم بإيقاف تشغيل WiFi، وإظهار أن التطبيق لا يزال يعمل.
5. **التأكيد على الخصوصية** -- "لا حاجة إلى اسم حقيقي. لا حاجة إلى بريد إلكتروني. يمكنها استخدام هذا التطبيق بأمان."
|||سبتمبر|||
**المصادر:**
- [من الصفر إلى العرض التجريبي في 36 ساعة](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [تحديد أولويات ميزة MVP](https://gainhq.com/blog/mvp-feature-prioritization/)
- [نصائح حول عرض Hackathon (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [دليل Hackathon Pitch Deck](https://www.inknarrates.com/post/hackathon-pitch-deck)
|||سبتمبر|||
---
|||سبتمبر|||
## 14. النموذج النموذجي والنماذج
|||سبتمبر|||
### الخيار 1: create-t3-app (موصى به للفرق المطلعة على tRPC)
``` باش
npx create-t3-app@latest autism-bridge --typescript --tailwind --trpc --prisma
```
- جيثب: https://github.com/t3-oss/create-t3-app
- يشمل: Next.js، TypeScript، tRPC، Prisma، Tailwind CSS
- يمكنك إضافة: Supabase، next-intl، shadcn/ui، Vercel AI SDK
|||سبتمبر|||
### الخيار 2: Nextbase Starter (موصى به لإعداد أبسط)
- جيثب: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- يشمل: Next.js 16+، Supabase، Tailwind CSS 4، TypeScript، React Query
- يمكنك إضافة: next-intl، shadcn/ui، Vercel AI SDK، Prisma (اختياري)
|||سبتمبر|||
### الخيار 3: Vercel Supabase Starter
- القالب: https://vercel.com/templates/next.js/supabase
- قالب Vercel/Supabase الرسمي مع مصادقة SSR
|||سبتمبر|||
### الخيار 4: سوبا التالي للمبتدئين
- جيثب: https://github.com/michaeltroya/supa-next-starter
- يتضمن: Next.js، وSupabase، وTailwind، وshadcn/ui (مدمج بالفعل)

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

### بعد السقالات، أضف:
``` باش
تثبيت npm التالي-intl-rtl-detect
تثبيت npm ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
تثبيت npm @serwist/next @serwist/precaching @serwist/sw
npx shadcn@latest init
npx shadcn@latest إضافة زر حوار البطاقة نموذج الإدخال ورقة علامات التبويب الصورة الرمزية شارة الأكورديون أمر نخب
تثبيت npm -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
```
|||سبتمبر|||
### المشاريع المرجعية:
- **supabase-comments-extension** (GitHub: Malerba118/supabase-comments-extension) -- التعليقات والردود وردود الفعل
- **ojasskapre/nextjs-starter-template** -- واجهات الدردشة Next.js + Supabase + LLM
- **shwosner/realtime-chat-supabase-react** - الدردشة في الوقت الفعلي مع Supabase
|||سبتمبر|||
---
|||سبتمبر|||
## 15. تصميم المخطط
|||سبتمبر|||
### مخطط بريزما الكامل
|||سبتمبر|||
```بريزما
عميل المولد {
  الموفر = "prisma-client-js"
}
|||سبتمبر|||
مصدر البيانات ديسيبل {
  المزود = "postgresql"
  URL = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
|||سبتمبر|||
// المستخدم والمصادقة
ملف تعريف المستخدم النموذجي {
  سلسلة المعرف @id @default(uuid())
  سلسلة AuthId @unique
  سلسلة اسم العرض؟
  سلسلة الإعدادات المحلية المفضلة @default("ar")
  تم إنشاؤه في DateTime @default(now())
  محدث في DateTime @updatedAt
  ملف تعريف الأطفال[]
  مشاركة المنتدى مشاركة المنتدى[]
  تعليقات المنتدىتعليقات المنتدى[]
  التصويتات المؤيدة للمنتدىالتصويت[]
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

// ملفات تعريف الطفل وتتبع المهارات
نموذج ملف تعريف الطفل {
  سلسلة المعرف @id @default(uuid())
  سلسلة معرف الوالدين
  ملف تعريف المستخدم الأصل @relation (الحقول: [parentId]، المراجع: [id])
  سلسلة اللقب
  سنة الميلاد كثافة العمليات؟
  التشخيص التاريخ التاريخ الوقت؟
  بطاقة المهارات[]
  المعالم الرئيسية[]
  تم إنشاؤه في DateTime @default(now())
  محدث في DateTime @updatedAt
  @@index([معرف الوالدين])
}
|||سبتمبر|||
نموذج SkillCategory {
  سلسلة المعرف @id @default(uuid())
  سلسلة مفتاح الاسم
  سلسلة أيقونة؟
  فرز ترتيب كثافة العمليات @default(0)
  بطاقة المهارات[]
}
|||سبتمبر|||
نموذج بطاقة المهارة {
  سلسلة المعرف @id @default(uuid())
  سلسلة معرف الطفل
  ChildProfile @relation (الحقول: [childId]، المراجع: [id]، onDelete: Cascade)
  سلسلة معرف الفئة
  فئة SkillCategory @relation(الحقول: [categoryId]، المراجع: [id])
  سلسلة مفتاح الاسم
  مستوى كثافة العمليات @ الافتراضي (0)
  سلسلة الملاحظات؟
  lastAssessed DateTime @default(now())
  تم إنشاؤه في DateTime @default(now())
  محدث في DateTime @updatedAt
  @@index([معرف الطفل])
  @@index([معرف الفئة])
}
|||سبتمبر|||
نموذج المعلم {
  سلسلة المعرف @id @default(uuid())
  سلسلة معرف الطفل
  ChildProfile @relation (الحقول: [childId]، المراجع: [id]، onDelete: Cascade)
  سلسلة مفاتيح العنوان
  سلسلة الوصف؟
  تاريخ الإنجازالوقت؟
  سلسلة الفئة
  تم إنشاؤه في DateTime @default(now())
  @@index([معرف الطفل])
}
|||سبتمبر|||
// الموارد (تتم معالجة تضمين المتجهات عبر SQL / pgvector الخام)
نموذج الموارد {
  سلسلة المعرف @id @default(uuid())
  سلسلة العنوان
  سلسلة المحتوى @db.Text
  سلسلة التلخيص؟
  سلسلة الفئة
  سلسلة فئة فرعية؟
  سلسلة sourceUrl؟
  سلسلة الدولة؟
  سلسلة اللغة @default("en")
  سلسلة العلامات[]
  تم إنشاؤه في DateTime @default(now())
  محدث في DateTime @updatedAt
  @@الفهرس([الفئة])
  @@الفهرس([الحالة])
}
|||سبتمبر|||
// المنتدى / المجتمع
نموذج المنتدى الفئة {
  سلسلة المعرف @id @default(uuid())
  سلسلة مفتاح الاسم
  وصف السلسلة الرئيسية؟
  سلسلة أيقونة؟
  فرز ترتيب كثافة العمليات @default(0)
  مشاركات المنتدى[]
}
|||سبتمبر|||
نموذج المنتدى {
  سلسلة المعرف @id @default(uuid())
  سلسلة معرف الفئة
  الفئة ForumCategory @relation(الحقول: [categoryId]، المراجع: [id])
  سلسلة معرف المؤلف
  المؤلف ملف تعريف المستخدم @relation (الحقول: [authorId]، المراجع: [id])
  غير مجهول منطقي @default(false)
  سلسلة العنوان
  سلسلة المحتوى @db.Text
  سلسلة لانج الأصلية @default("ar")
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  isPinned Boolean @default(false)
  منطقية مخفية @default(false)
  عدد التقارير Int @default(0)
  تعليقات المنتدىالتعليق[]
  التصويتات المؤيدة للمنتدىالتصويت[]
  منتدى الترجماتالترجمة[]
  تم إنشاؤه في DateTime @default(now())
  محدث في DateTime @updatedAt
  @@index([معرف الفئة])
  @@index([معرف المؤلف])
  @@index([تم الإنشاء])
}
|||سبتمبر|||
نموذج تعليق المنتدى {
  سلسلة المعرف @id @default(uuid())
  سلسلة ما بعد معرف
  نشر ForumPost @relation (الحقول: [postId]، المراجع: [id]، onDelete: Cascade)
  سلسلة معرف الوالدين؟
  تعليق المنتدى الأصلي؟ @relation("CommentReplies"، الحقول: [parentId]، المراجع: [id])
  الردود ForumComment[] @relation("CommentReplies")
  سلسلة معرف المؤلف
  المؤلف ملف تعريف المستخدم @relation (الحقول: [authorId]، المراجع: [id])
  غير مجهول منطقي @default(false)
  سلسلة المحتوى @db.Text
  سلسلة لانج الأصلية @default("ar")
  upvoteCount Int @default(0)
  منطقية مخفية @default(false)
  عدد التقارير Int @default(0)
  التصويتات المؤيدة للمنتدىالتصويت[]
  منتدى الترجماتالترجمة[]
  تم إنشاؤه في DateTime @default(now())
  @@index([postId])
  @@index([معرف الوالدين])
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

نموذج المنتدى التصويت {
  سلسلة المعرف @id @default(uuid())
  سلسلة معرف المستخدم
  ملف تعريف المستخدم @relation (الحقول: [userId]، المراجع: [id])
  سلسلة ما بعد الهوية؟
  نشر مشاركة المنتدى؟ @relation(الحقول: [postId]، المراجع: [id]، onDelete: Cascade)
  سلسلة معرف التعليق؟
  تعليق المنتدى تعليق؟ @relation(الحقول: [commentId]، المراجع: [id]، onDelete: Cascade)
  تم إنشاؤه في DateTime @default(now())
  @@unique([معرف المستخدم، معرف المشاركة])
  @@unique([معرف المستخدم، معرف التعليق])
}
|||سبتمبر|||
نموذج منتدى الترجمة {
  سلسلة المعرف @id @default(uuid())
  سلسلة ما بعد الهوية؟
  نشر مشاركة المنتدى؟ @relation(الحقول: [postId]، المراجع: [id]، onDelete: Cascade)
  سلسلة معرف التعليق؟
  تعليق المنتدى تعليق؟ @relation(الحقول: [commentId]، المراجع: [id]، onDelete: Cascade)
  سلسلة الهدف لانج
  سلسلة العنوان المترجمة؟
  سلسلة المحتوى المترجمة @db.Text
  تم إنشاؤه في DateTime @default(now())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
```
|||سبتمبر|||
### فئات بيانات البذور
|||سبتمبر|||
**فئات المهارات:** التواصل، المهارات الاجتماعية، الحياة اليومية، المهارات الحركية، الأكاديمية، المعالجة الحسية، التنظيم العاطفي
|||سبتمبر|||
**فئات المنتدى:** المقدمات والترحيب، العلاج والعلاجات (ABA/OT/الكلام)، مساعدة المدرسة وبرنامج التعليم الفردي (IEP)، نصائح الحياة اليومية، الأسئلة القانونية وأسئلة الهجرة، التنقل في الرعاية الصحية، قصص النجاح والمعالم الرئيسية، الدعم العام
|||سبتمبر|||
**فئات الموارد:** أنواع العلاج ومقدموه، موارد التعليم وبرنامج التعليم الفردي (IEP)، الحقوق القانونية والمناصرة، المساعدة المالية، المنظمات المجتمعية، الأدوات والتطبيقات عبر الإنترنت، الكتب والوسائط، الموارد الخاصة بالولاية
|||سبتمبر|||
---
|||سبتمبر|||
## ملخص تبعيات PACKAGE.JSON

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
  "التبعيات": {
    "التالي": "^16.0.0"،
    "رد": "^19.0.0"،
    "رد فعل": "^19.0.0",
    "نسخة مطبوعة": "^5.7.0"،
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "بريزما": "^6.0.0"،
    "@prisma/client": "^6.0.0",
    "التالي الدولي": "^4.0.0",
    "كشف-rtl": "^1.1.2"،
    "منظمة العفو الدولية": "^6.0.0"،
    "@ai-sdk/anthropic": "^1.0.0",
    "@ai-sdk/openai": "^1.0.0",
    "@ai-sdk/react": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "سلطة تباين الفئة": "^0.7.0",
    "clsx": "^2.1.0"،
    "دمج الرياح الخلفية": "^2.5.0",
    "رد فعل واضح": "^0.450.0"،
    "@serwist/next": "^9.0.0",
    "@serwist/precaching": "^9.0.0",
    "@serwist/sw": "^9.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "زود": "^3.23.0",
    "نموذج خطاف التفاعل": "^7.53.0",
    "@hookform/المحللون": "^3.9.0"
  },
  "تبعيات التطوير": {
    "@axe-core/react": "^4.10.0"،
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "@types/rtl-detect": "^1.0.0"
  }
}
```
|||سبتمبر|||
---
|||سبتمبر|||
## مرجع سريع: روابط التوثيق الرئيسية
|||سبتمبر|||
| أداة | التوثيق |
|------|-------------|
| Next.js 16 | https://nextjs.org/docs |
| سوباباس | https://supabase.com/docs |
| مصادقة سوباباس | https://supabase.com/docs/guides/auth |
| سوباباس الحقيقي | https://supabase.com/docs/guides/realtime |
| Supabase pgvector | https://supabase.com/docs/guides/ai |
| التالي الدولي | https://next-intl.dev/ |
| شادن/واجهة المستخدم | https://ui.shadcn.com/ |
| فيرسيل AI SDK | https://ai-sdk.dev/docs/introduction |
| كلود API | https://platform.claude.com/docs |
| بريزما | https://www.prisma.io/docs |
| سيرويست PWA | https://serwist.pages.dev/docs/next/getting-started |
| الريح الخلفية CSS | https://tailwindcss.com/docs |
| ترجمة جوجل السحابية | https://cloud.google.com/translate/docs |
| تضمينات OpenAI | https://platform.openai.com/docs/guides/embeddings |
| نشر فيرسيل | https://vercel.com/docs |
|||سبتمبر|||
---
|||سبتمبر|||
يغطي هذا البحث جميع المجالات العشرة التي طلبتها بالإضافة إلى استراتيجية hackathon وهندسة الخصوصية والخيارات النموذجية وتصميم المخطط الكامل. تم تصميم المكدس بحيث تتناسب كل خدمة مع المستويات المجانية للهاكاثون، وتحافظ المصادقة على الخصوصية للمستخدمين غير الموثقين، وتكون الميزانية الزمنية واقعية لبناء مدته 10 ساعات. لقد حاولت حفظ هذا كملف في `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` ولكن تم رفض إذن كتابة الملف. إذا كنت تريد مني حفظ هذا على القرص، فيمكنك منح إذن الكتابة وسأقوم بإنشاء الملف.
---
|||سبتمبر|||
## بحث إضافي (تم التحديث في مارس 2026)
|||سبتمبر|||
### أفضل مكتبة i18n لأكثر من 10 لغات (React + TypeScript)

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

**موصى به: React-i18next** — 2.1 مليون تنزيل أسبوعيًا، وهو الحل الأكثر شيوعًا لـ React i18n.
- مبني على النظام البيئي i18next مع مكونات إضافية لاكتشاف اللغة والتحميل غير المتزامن وصيغ الجمع المعقدة
- الحزمة: 22.2 كيلو بايت (i18next 15.1 كيلو بايت + React-i18next 7.1 كيلو بايت)
- يدعم ملفات الترجمة JSON - من السهل إضافة اللغات بشكل تدريجي
- المصدر: [مدونة العبارة](https://phrase.com/blog/posts/react-i18n-best-libraries/)، [react.i18next.com](https://react.i18next.com)
|||سبتمبر|||
**بديل خفيف الوزن: LinguiJS** — إجمالي 10.4 كيلو بايت (نصف الحجم)، وبناء جملة رسائل ICU، ودعم TypeScript.
|||سبتمبر|||
**لسرعة الهاكاثون**: React-i18next مع ملفات ترجمة JSON. ابدأ باللغة الإنجليزية + الإسبانية، وأضف لغات أخرى عبر ملفات JSON. استخدم Google Translate API أو DeepL للترجمات الأولية.
|||سبتمبر|||
المصدر: [دليل GloryWebs 2026](https://www.glorywebs.com/blog/internationalization-in-react)، [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)
|||سبتمبر|||
### حدود الطبقة المجانية لـ Supabase (2026)
|||سبتمبر|||
- **مشروعان نشطان** (تم إيقافهما مؤقتًا بعد أسبوع من عدم النشاط)
- **500 ميجابايت** تخزين قاعدة البيانات (وحدة المعالجة المركزية المشتركة)
- **2 جيجابايت** خروج قاعدة البيانات/الشهر
- **50,000** مستخدم نشط شهريًا (مصادقة)
- **1 جيجابايت** تخزين الملفات
- **2 جيجا** مخرج تخزين
- **500,000** استدعاءات وظائف الحافة شهريًا
- لا توجد نسخ احتياطية، ولا توجد اتفاقية مستوى الخدمة (SLA) على الخطة المجانية
|||سبتمبر|||
المصدر: [تسعير Supabase](https://supabase.com/pricing)، [تحليل واجهة المستخدم للمخبوزات](https://uibakery.io/blog/supabase-pricing)
|||سبتمبر|||
**بالنسبة للهاكاثون**: 500 ميجابايت أكثر من كافية. حتى مع وجود 10000 مستخدم يخزن كل منهم الملف الشخصي + بيانات الطفل + منشورات المنتدى، فإنك ستستخدم أقل من 50 ميجابايت. يعد حد المصادقة البالغ 50 ألف MAU أيضًا سخيًا جدًا للعرض التجريبي.

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
