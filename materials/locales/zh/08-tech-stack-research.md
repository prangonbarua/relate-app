# 黑客马拉松技术堆栈研究：移民父母 + 自闭症应用程序
|||九月|||
**日期：** 2026-02-28 | **构建时间：** 10 小时（上午 8:30 - 下午 6:30）
|||九月|||
---
|||九月|||
## 1. 推荐堆栈摘要
|||九月|||
|层 |技术 |为什么 |
|--------|------------|-----|
| **框架** | Next.js 16（应用程序路由器）|用于 SEO、API 路由、PWA 支持、Vercel 部署的 SSR |
| **脚手架** | `create-t3-app` 或 Nextbase 入门 |通往类型化全栈的最快路径 |
| **语言** | TypeScript 通篇 |端到端类型安全 |
| **后端API** | tRPC（通过 T3 堆栈）或 Next.js API 路由 + Supabase 客户端 |类型安全、零样板 |
| **数据库** | Supabase (PostgreSQL) |免费层、身份验证、实时、pgvector、RLS |
| **ORM** |棱镜|自动生成的类型、迁移工具 |
| **授权** | Supabase 授权 |匿名登录、电话 OTP、电子邮件/密码，无需 PII |
| **国际化** |下一个国际 |原生 Next.js 集成、RSC 支持、小型捆绑包、RTL 支持 |
| **用户界面** | shadcn/ui + Tailwind CSS | shadcn/ui + Tailwind CSS |复制粘贴组件，完全所有权，Radix a11y，RTL 就绪 |
| **人工智能聊天** | Vercel AI SDK + Claude API (Haiku 4.5) |串流，使用聊天钩子，性价比高|
| **矢量数据库** | Supabase pg向量 |相同的数据库，无额外服务，向量上的 RLS |
| **嵌入** | OpenAI 文本嵌入-3-小 | $0.02/1M 代币，比 ada-002 便宜 5 倍 |
| **翻译API** |谷歌云翻译 API |每月免费 500K 字符，130 多种语言，无数据存储 |
| **渐进式应用** | Serwist (@serwist/next) |现代next-pwa后继者，离线支持|
| **部署** | Vercel（免费套餐）|零配置 Next.js 部署，100GB 带宽 |
| **论坛** |使用 Supabase Realtime 进行定制 |实时更新，RLS 进行审核 |
|||九月|||
**预计每月总成本（黑客马拉松/演示）：0 美元** -- 上述所有服务都有足以进行黑客马拉松演示的免费套餐。
|||九月|||
---
|||九月|||
## 2.反应框架

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

### 推荐：Next.js 16（应用程序路由器）
|||九月|||
**为什么这个应用程序使用 Next.js 而不是 Vite+React：**
- 用于 SEO 的 SSR/SSG（对于移民父母搜索 Google 应该可以发现的资源页面很重要）
- 内置 API 路由消除了对单独后端服务器的需求
- 带有 React Server 组件的 App Router = 翻译内容的客户端 JS 为零
- 通过 `app/manifest.ts` 原生 PWA 清单支持
- Vercel 部署是零配置的
- next-intl 与 RSC 一起本地工作（服务器端呈现的翻译 = 0 字节到客户端）
|||九月|||
**什么时候Vite会更好：**
- 纯SPA，无需SEO
- 更快的开发服务器启动（10 小时黑客马拉松的边际效益）
- 更简单的心理模型（没有服务器/客户端组件的区别）
|||九月|||
**使用 Serwist 设置 PWA（下一个 PWA 后继者）：**
````bash
npm install @serwist/next @serwist/precaching @serwist/sw idb
````
|||九月|||
主要线下策略：
- **CacheFirst** 用于静态资源 (`/_next/static/`) -- 内容散列，永不更改
- **NetworkFirst** 用于 API 响应和动态内容
- **StaleWhileRevalidate** 用于翻译文件和资源页面
- IndexedDB 用于离线数据存储（子配置文件、保存的资源）
|||九月|||
**重要提示：** Next.js 16 默认使用 Turbopack，但 Serwist 需要 Webpack。您将需要相应地配置构建。
|||九月|||
**PWA 清单**（内置 Next.js 支持）：
``打字稿
// 应用程序/manifest.ts
从“下一个”导入类型 { MetadataRoute }
|||九月|||
导出默认函数manifest(): MetadataRoute.Manifest {
  返回{
    名称：“ASD 桥”，
    Short_name: 'ASD 桥',
    描述：“支持有自闭症儿童的移民家庭”，
    开始网址：'/'，
    显示：“独立”，
    背景颜色: '#ffffff',
    主题颜色: '#4F46E5',
    图标：[
      { src: '/icon-192.png', 尺寸: '192x192', 类型: 'image/png' },
      { src: '/icon-512.png', 尺寸: '512x512', 类型: 'image/png' },
    ],
  }
}
````

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

**来源：**
- [Vite 与 Next.js 完整比较 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Next.js PWA 指南](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Serwist 入门](https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA 与 Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [使用 Serwist 在 Next.js 中构建 PWA](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)
|||九月|||
---
|||九月|||
## 3. 打字稿后端
|||九月|||
### 建议：Next.js API 路由 + Supabase 客户端（主要）或 tRPC（如果使用 T3）
|||九月|||
**选项 A：Next.js API 路由 + Supabase（对于黑客马拉松来说最简单）**
- 没有单独的后端服务器
- Supabase JS 客户端处理数据库查询、身份验证、实时
- 用于 AI 聊天、翻译 API 调用和任何服务器端逻辑的 API 路由
- 最快设置
|||九月|||
**选项 B：通过 T3 Stack 的 tRPC（如果团队知道，则为最佳 DX）**
- 前端和后端之间的端到端类型安全
- 前端API调用自动完成
- 与 Prisma 一起使用生成类型
- `create-t3-app` 支撑一切
|||九月|||
````bash
# 选项 A：纯 Next.js + Supabase
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
|||九月|||
# 选项 B：T3 堆栈
npx create-t3-app@latest my-app
# 选择：Next.js、TypeScript、Tailwind CSS、tRPC、Prisma
````

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

**为什么不表达/快速：**
- 增加了部署复杂性（独立的服务器到主机）
- 对于此用例，没有比 Next.js API 路由有任何优势
- 您没有的额外 30-60 分钟设置时间
|||九月|||
**为什么不使用无服务器（Lambda/Netlify 函数）：**
- Vercel 上的 Next.js API 默认路由是无服务器的
- 无需单独的功能基础设施
|||九月|||
**来源：**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [T3 Stack 2025 指南](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [创建T3应用程序](https://create.t3.gg/)
- [tRPC 官方](https://trpc.io/)
|||九月|||
---
|||九月|||
## 4. 数据库
|||九月|||
### 推荐：Supabase (PostgreSQL)
|||九月|||
**为什么 Supabase 赢得这个项目：**
|||九月|||
|特色 |苏帕巴斯|火力基地 |星球规模 |
|---------|----------|----------|----------|
|免费层数据库存储 | 500 MB | 1 GB（火花）|停止免费套餐 |
|包含授权 |是（免费 5 万月活跃用户）|是（免费 5 万月活跃用户）|没有 |
|实时 |是（Postgres 更改）|是（同类最佳）|没有 |
|矢量搜索 (pgvector) |是的，内置 |没有 |没有 |
| SQL 支持 |完整的 PostgreSQL |仅限 NoSQL | MySQL |
| RLS（行级安全性）|是的，基于 SQL | Firebase 安全规则 |没有 |
|匿名身份验证 |是的，内置 |是的 |不适用 |
|开源 |是的 |没有 |部分|
|数据便携性|完整（这是 Postgres）|供应商锁定 | MySQL 兼容 |

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

**Supabase 免费套餐 (2026)：**
- 2个活跃项目
- 500 MB 数据库存储
- 2 GB 数据库出口
- 50,000 MAU（认证）
- 1 GB 文件存储空间
- 500,000 次边缘函数调用
- 无需信用卡，永不过期
|||九月|||
**为什么选择 Supabase 而不是 Firebase 来开发此应用：**
1. pgvector用于AI资源搜索（无需额外服务）
2.复杂查询的完整SQL（子里程碑、技能跟踪）
3. 用于保护隐私的匿名论坛访问的 RLS
4. 数据可移植性（不锁定在Google生态系统中）
5. 更适合关系数据（用户 -> 儿童 -> 技能 -> 里程碑）
|||九月|||
**棱镜集成：**
````棱镜
数据源数据库{
  提供者=“postgresql”
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
````
|||九月|||
**来源：**
- [Supabase 与 Firebase 2026 评测](https://hackceleration.com/supabase-review/)
- [Firebase 与 Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-which-one-actually-scales-with-you-2374)
- [Supabase 定价 2026](https://uibakery.io/blog/supabase-pricing)
- [Supabase 免费套餐限制](https://supabase.com/pricing)
|||九月|||
---
|||九月|||
## 5. 身份验证
|||九月|||
### 建议：Supabase Auth 匿名登录 + 电话 OTP + 电子邮件/密码
|||九月|||
**针对该受众的关键设计原则：**
该应用程序必须可以在不提供个人身份信息的情况下使用。许多移民父母（尤其是无证父母）不会使用需要政府 ID/SSN、实名验证、地址收集或强制电子邮件的应用程序。

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

**身份验证层（渐进式信任）：**
|||九月|||
|等级 |方法|它解锁了什么 |需要 PII |
|------|--------|----------------|--------------|
| 1 |匿名登录 |浏览资源、使用AI聊天、查看论坛|无 |
| 2 |电话一次性密码 |在论坛发帖，保存儿童个人资料 |仅电话号码 |
| 3 |邮箱+密码 |完整帐户与恢复 |电子邮件地址 |
|||九月|||
**Supabase 匿名身份验证：**
``打字稿
// 匿名登录——不需要 PII
const { 数据，错误 } = 等待 supabase.auth.signInAnonymously()
|||九月|||
// 稍后，用户可以链接电话号码
const { 数据，错误 } = 等待 supabase.auth.updateUser({
  电话：'+1234567890',
})
````
|||九月|||
**电话 OTP 设置：**
Supabase 支持通过 Twilio、MessageBird、Textlocal 和 Vonage 进行电话身份验证。用户通过短信收到 6 位 PIN 码，有效期为 60 秒。
|||九月|||
**匿名用户的安全性：**
- 启用验证码（推荐 Cloudflare Turnstile - 免费）以防止滥用
- 基于 IP 的速率限制：30 个请求/小时（可在 Supabase 仪表板中调整）
- RLS 策略可以通过“is_anonymous” JWT 声明区分匿名用户和经过身份验证的用户
|||九月|||
**为什么不使用这个应用程序的文员：**
- 没有内置的匿名登录
- 10K 后每月活跃用户 0.02 美元（Supabase：50K 免费）
- 对于这个用例来说过度杀伤用户界面
- 添加外部依赖
|||九月|||
**为什么不 Auth0:**
- 黑客马拉松的复杂设置
- 没有匿名授权
- 免费套餐仅限 7,500 MAU

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

**来源：**
- [Supabase 匿名登录](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Supabase 电话登录](https://supabase.com/docs/guides/auth/phone-login)
- [Clerk 与 Supabase Auth](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [匿名登录的安全性](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)
|||九月|||
---
|||九月|||
## 6. 国际化（i18n）
|||九月|||
###推荐：next-intl
|||九月|||
**为什么next-intl优于react-i18next或react-intl：**
|||九月|||
|特色 |下一个国际 |反应-i18next |反应国际 |
|--------|---------|----------------|------------|
| Next.js 应用程序路由器支持 |本地 |通过包装|通过包装|
|服务器组件支持 |内置（0客户端JS）|需要设置 |需要设置 |
|捆绑尺寸 | 〜4KB | 〜8KB | 〜12KB |
| RTL 支持 |内置|手册|手册|
|复数形式（阿拉伯语：6 种形式）|自动重症监护室|手动配置 |自动重症监护室|
|类型安全 | TypeScript 优先 |好 |好 |
|||九月|||
**安装：**
````bash
npm install next-intl rtl-检测
npm install --save-dev @types/rtl-检测
````
|||九月|||
**阿拉伯语、波斯语、乌尔都语的 RTL 设置：**
``打字稿
// 钩子/useTextDirection.ts
从 'next-intl' 导入 { useLocale } ；
从 'rtl-detect' 导入 { isRtlLang } ；

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

导出函数 useTextDirection() {
  const locale = useLocale();
  返回 isRtlLang(locale) ？ 'rtl' : 'ltr';
}
|||九月|||
// 应用程序/[语言环境]/layout.tsx
导出默认函数 LocaleLayout({ Children, params: { locale } }) {
  const 方向 = isRtlLang(locale) ？ 'rtl' : 'ltr';
  返回（
    <html lang={语言环境} dir={方向}>
      <body>{孩子}</body>
    </html>
  ）；
}
````
|||九月|||
**翻译文件结构：**
````
消息/
  zh/
    common.json # 共享 UI 字符串（按钮、导航、错误）
    auth.json # 登录、注册、个人资料
    resources.json # 资源库
    forum.json # 论坛/社区
    ai-chat.json # 人工智能助手
    child-profile.json # 儿童跟踪
    Skills.json # 技能卡
  ar/ # 阿拉伯语 (RTL)
  es/ # 西班牙语
  zh/ # 中文（简体）
  fa/ # 波斯语/波斯语 (RTL)
  ur/ # 乌尔都语 (RTL)
````
|||九月|||
**MVP 的优先语言：** 英语（默认）、西班牙语、阿拉伯语（RTL 以展示技术能力）、中文（简体）。
|||九月|||
**用于 RTL 的 CSS -- 使用 Tailwind 逻辑属性：**
- `pl-4` -> `ps-4` （填充内联开始）
- `pr-4` -> `pe-4` （填充内联结束）
- `文本左侧` -> `文本开始`
- `文本右侧` -> `文本结束`
- `ml-auto` -> `ms-auto`
- `mr-auto` -> `me-auto`
|||九月|||
**论坛内容机器翻译：**
|||九月|||
|服务 |免费套餐 |免费后价格|语言 |隐私 |
|--------|---------|-----------------|---------|---------|
|谷歌云翻译 | 500K 字符/月（永久）| 20/100 万个字符 | 130+ |没有存储/使用数据进行训练 |
|深L | 500K 字符/月 | $25/100 万个字符 + $5.49/月 | 30+ |可以存储免费层数据 |
|亚马逊翻译 | 200 万字符/月（仅 12 个月）| 15 美元/100 万个字符 | 75+ |没有存储数据 |
|||九月|||
**推荐：** Google Cloud Translation API - 永久免费套餐、最大的语言覆盖范围（130 多种语言，包括所有目标 RTL 语言）、强大的隐私保证（不存储或用于训练的数据）。

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

**来源：**
- [next-intl 文档](https://next-intl.dev/)
- [next-intl 完整指南 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl 与react-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Next.js RTL 支持](https://lingo.dev/en/nextjs-i18n/right-to-left-languages)
- [Google 云翻译定价](https://cloud.google.com/translate/pricing)
- [DeepL 与谷歌翻译](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)
|||九月|||
---
|||九月|||
## 7. UI 组件库
|||九月|||
### 推荐：shadcn/ui + Tailwind CSS
|||九月|||
**为什么选择 shadcn/ui:**
- 组件被复制粘贴到您的项目中（完全所有权，无需担心依赖项更新）
- 基于 Radix UI 原语构建（符合 WAI-ARIA 标准、键盘导航、屏幕阅读器支持）
- Tailwind CSS 原生（RTL 的逻辑属性）
- 40 多个可用组件
- 通过模板支持 RTL
- 内置暗/亮模式
- 零运行时开销
|||九月|||
**安装：**
````bash
npx shadcn@最新 init
npx shadcn@latest 添加按钮卡对话框输入表单选项卡头像徽章手风琴命令吐司
````
|||九月|||
**此应用程序的关键组件：**
- `卡片` -- 资源卡、技能卡、儿童资料卡
- `Dialog` / `Sheet` -- 模态交互、语言切换器
- `Form` + `Input` -- 儿童个人资料表格、论坛帖子创建
- `选项卡` -- 部分之间的导航
- `Avatar` -- 论坛用户显示（带匿名选项）
- `徽章` -- 技能水平、语言标签
- `Accordion` -- 常见问题解答、资源详细信息
- `Command` -- 搜索资源调色板
- `Toast` -- 通知
|||九月|||
**内置辅助功能：**
- 所有基于 Radix 的组件自动包含 ARIA 角色和属性
- 开箱即用的键盘导航（Tab、Enter、Escape、箭头键）
- 模态中的焦点管理和焦点捕获
- 动态内容的屏幕阅读器公告
- 验证错误时自动链接“aria-descriptedby”
- 在表单错误上设置“aria-invalid”

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

**为什么不使用 Chakra UI：** 运行时更重（CSS-in-JS），基于道具的样式不如 Tailwind 实用程序类灵活，2025-2026 年生态系统动力较低。
|||九月|||
**为什么不使用 Material UI：** 非常重的捆绑，Google 的设计语言对于社区应用程序来说可能感觉很临床，更难以深度定制。
|||九月|||
**来源：**
- [shadcn/ui 指南 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [可访问的 shadcn/ui 组件](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-making-ready-apps-with-react-typescript-tailwind-css)
- [React UI 库 2025 比较](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)
|||九月|||
---
|||九月|||
## 8. 论坛/社区功能
|||九月|||
### 架构：使用 Supabase Realtime 进行自定义构建
|||九月|||
**数据模型（SQL）：**
``sql
-- 论坛类别
创建表 forum_categories (
  id UUID 主键默认 gen_random_uuid(),
  name_key 文本不为空，
  描述键文本，
  图标文本，
  sort_order 整数 默认 0,
  创建时间为 TIMESTAMPTZ 默认值 NOW()
）；
|||九月|||
-- 论坛帖子（话题）
创建表 forum_posts (
  id UUID 主键默认 gen_random_uuid(),
  Category_id UUID 参考 forum_categories(id),
  author_id UUID 参考 auth.users(id),
  is_anonymous BOOLEAN 默认值 false，
  显示名称文本，
  标题文本不为空，
  内容文本不为空，
  原始语言文本默认“en”，
  upvote_count 整数 默认 0,
  comment_count 整数 默认 0,
  is_pinned BOOLEAN 默认值 false，
  is_moderated BOOLEAN 默认 false,
  创建时间为 TIMESTAMPTZ 默认值 NOW()，
  Updated_at TIMESTAMPTZ 默认现在（）
）；

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

-- 对帖子的评论
创建表 forum_comments (
  id UUID 主键默认 gen_random_uuid(),
  post_id UUID 参考 forum_posts(id) ON 删除级联，
  Parent_id UUID 参考 forum_comments(id),
  author_id UUID 参考 auth.users(id),
  is_anonymous BOOLEAN 默认值 false，
  显示名称文本，
  内容文本不为空，
  原始语言文本默认“en”，
  upvote_count 整数 默认 0,
  创建时间为 TIMESTAMPTZ 默认值 NOW()
）；
|||九月|||
-- 赞成票
创建表 forum_upvotes (
  id UUID 主键默认 gen_random_uuid(),
  user_id UUID 参考 auth.users(id),
  post_id UUID 参考 forum_posts(id),
  comment_id UUID 参考 forum_comments(id),
  创建时间为 TIMESTAMPTZ 默认值 NOW()，
  唯一（用户ID，帖子ID），
  唯一（用户id，评论id）
）；
|||九月|||
-- 缓存翻译
创建表 forum_translations (
  id UUID 主键默认 gen_random_uuid(),
  源类型文本不为空，
  source_id UUID NOT NULL,
  目标语言文本不为空，
  翻译后的标题文本，
  翻译内容文本不为空，
  创建时间为 TIMESTAMPTZ 默认值 NOW()，
  UNIQUE（源 ID，目标语言）
）；
````
|||九月|||
**实时更新：**
``打字稿
常量通道=supabase
  .channel('论坛帖子')
  .on('postgres_changes', {
    事件：“插入”，
    模式：'公共'，
    表：“论坛帖子”，
    过滤器：`category_id=eq.${categoryId}`
  }, (有效负载) => {
    // 将新帖子添加到 UI
  })
  .subscribe()
````
|||九月|||
**匿名发帖安全：**
- 来自匿名用户（Supabase 匿名身份验证）的帖子可以进行不同的标记
- RLS 策略检查 JWT 中的“is_anonymous”声明
- 显示假名（例如“Parent #4827”）而不是空白姓名
|||九月|||
**审核（MVP）：** 每个帖子/评论上都有简单的报告按钮。用于隐藏报告内容的管理员标志。未来：通过 Claude API 进行人工智能驱动的内容审核。
|||九月|||
**按需翻译：** 以原始语言存储的帖子。 “翻译”按钮会触发 Google Cloud Translation API。翻译缓存在“forum_translations”表中。对相同语言的后续请求将从缓存中提供。
|||九月|||
**来源：**
- [Supabase 实时](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [使用 Supabase 构建社区论坛](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
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
|||九月|||
## 9. 人工智能集成
|||九月|||
### 架构：Vercel AI SDK + Claude API + Supabase pgvector RAG
|||九月|||
**数据流：**
````
用户问题（多语言）
  -> [谷歌翻译为英语]（如果不是英语）
  -> [生成嵌入] (text-embedding-3-small)
  -> [Supabase pgvector 相似度搜索]
  -> [检索上下文文档]
  -> [Claude API 与系统提示 + 上下文 + 用户问题]
  -> [英文回复]
  -> [Google 翻译为用户的语言]（如果不是英语）
  -> 显示给用户（流式传输）
````
|||九月|||
**Vercel AI SDK 设置：**
````bash
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
````
|||九月|||
``打字稿
// 应用程序/api/chat/route.ts
从'@ai-sdk/anthropic'导入{anthropic}；
从“ai”导入{streamText}；
|||九月|||
导出异步函数 POST(req: Request) {
  const { messages, locale } = wait req.json();
  常量结果=streamText({
    模型：人类（'claude-3-5-haiku-20241022'），
    系统：SYSTEM_PROMPT，
    消息：增强消息，
  });
  返回结果.toDataStreamResponse();
}
````
|||九月|||
``打字稿
// 客户端：components/AiChat.tsx
'使用客户端'；
从'@ai-sdk/react'导入{useChat}；

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

导出函数 AiChat() {
  const { 消息、输入、handleInputChange、handleSubmit、isLoading } = useChat({
    api: '/api/聊天',
  });
  // 带有流响应的聊天 UI
}
````
|||九月|||
**黑客马拉松克劳德模型选择：**
|||九月|||
|型号|输入/1M 代币 |产出/1M 代币 |最适合 |
|--------------------|----------------|--------------------|----------|
|克劳德俳句 4.5 | 1.00 美元 | 5.00 美元 | **聊天回复（推荐）** |
|克劳德十四行诗 4.5 | $3.00 | 15.00 美元 |复杂推理|
|克劳德作品 4.5 | 5.00 美元 | 25.00 美元 |聊天太过分了|
|||九月|||
**推荐：** Claude Haiku 4.5——快速（流媒体延迟低）、便宜（非常适合黑客马拉松预算），并且有足够的能力进行资源问答和一般指导。
|||九月|||
**系统提示（健康信息安全第一）：**
````
你是一名支持性人工智能助理，帮助孩子的移民父母
患有自闭症谱系障碍 (ASD)。您提供以下信息：
- ASD 资源、疗法和教育计划
- 熟悉美国医疗保健和教育系统
- IEP（个性化教育计划）流程
- 可用的政府和非营利支持计划
- 一般发展里程碑
|||九月|||
关键安全指南：
- 你不是医生。始终建议咨询医疗保健专业人士。
- 切勿诊断或建议特定的医疗治疗。
- 讨论医疗/发育主题时始终包含免责声明。
- 如果用户描述了医疗紧急情况，请引导他们拨打 911。
- 对文化敏感并避免对家庭结构的假设。
- 使用简单、清晰的语言。
- 当不确定时，说“我不知道”而不是猜测。
- 切勿收集或索取个人身份信息。
````
|||九月|||
**Supabase pgvector RAG 设置：**
``sql
如果不存在则创建扩展向量；
|||九月|||
创建表资源（
  id UUID 主键默认 gen_random_uuid(),
  标题文本不为空，
  内容文本不为空，
  类别文本不为空，
  源地址文本，
  状态文本，
  语言文本默认“en”，
  嵌入向量（1536），
  创建时间为 TIMESTAMPTZ 默认值 NOW()，
  Updated_at TIMESTAMPTZ 默认现在（）
）；

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

使用 hnsw 创建资源索引（嵌入 vector_cosine_ops）；
|||九月|||
创建或替换函数 match_resources(
  查询嵌入向量（1536），
  match_threshold 浮动 默认 0.7,
  match_count INT 默认值 5
）
RETURNS TABLE（id UUID、标题 TEXT、内容 TEXT、类别 TEXT、相似度 FLOAT）
语言 plpgsql AS $$
开始
  返回查询
  选择 r.id、r.title、r.content、r.category、
    1 - (r.embedding <=> query_embedding) AS 相似度
  来自资源 r
  WHERE 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDER BY r.embedding <=> query_embedding
  限制匹配次数；
结尾;
$$;
````
|||九月|||
**嵌入模型：** 使用 OpenAI `text-embedding-3-small`（0.02 美元/100 万代币，1536 个维度，比 ada-002 便宜 5 倍，性能更好）。
|||九月|||
**黑客马拉松快捷方式：** 在资源表中预先填充 20-50 个有关自闭症、IEP、治疗类型和支持组织的精选资源。在设置过程中为这些生成嵌入，而不是构建完整的摄取管道。
|||九月|||
**来源：**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Next.js 指南](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Claude API 定价](https://platform.claude.com/docs/en/about-claude/pricing)
- [克劳德医疗保健 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capability-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI 和矢量](https://supabase.com/docs/guides/ai)
- [OpenAI 嵌入](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small 与 ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [与 Claude 和 pgvector 一起构建 RAG](https://www.tigerdata.com/blog/retrieval-augmented- Generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG 聊天机器人与 Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)
|||九月|||
---
|||九月|||
## 10. 辅助功能
|||九月|||
### WCAG 2.2 AA 合规策略

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

**针对该受众的关键原则：**
1. **认知可达性** - 可预测的布局，清晰的视觉层次（对于压力大/不知所措的父母和自闭症相关的考虑因素很重要）
2. **低识字率支持** -- 视觉提示、文本旁边的图标、简单的语言
3. **多语言辅助功能** -- 屏幕阅读器必须使用 RTL 语言
4. **电机可访问性** -- 大型触摸目标（根据 WCAG 2.2，最小 44x44 像素）
|||九月|||
**通过 shadcn/ui + Radix 内置：**
- 所有组件自动包含 ARIA 角色/属性
- 键盘导航（Tab、Enter、Escape、箭头键）
- 模态中的焦点管理和焦点捕获
- 动态内容的屏幕阅读器公告
- 验证错误上链接的“aria-descriptedby”
- 在表单错误上设置“aria-invalid”
|||九月|||
**其他库：**
````bash
npm install -D @axe-core/react # 将 a11y 问题记录到浏览器控制台
npm install -D eslint-plugin-jsx-a11y # 针对 a11y 问题的 Lint
````
|||九月|||
**颜色对比度：** WCAG AA 要求普通文本为 4.5:1，大文本为 3:1。提供高对比度模式切换。
|||九月|||
**针对自闭症的设计考虑因素：**
- Sans-serif 字体（例如 Inter、system-ui）——对于神经不同的用户来说更容易阅读
- 所有页面的一致、可预测的导航
- 最少的动画（尊重“首选减少运动”）
- 各部分之间清晰的视觉界限
- 避免感官超负荷（柔和的颜色，无闪烁）
- 简单的语言切换以简化内容
|||九月|||
``打字稿
// 在组件中，尊重运动偏好：
// <div className="motion-safe:animate-fadeIn Motion-reduce:opacity-100">
````
|||九月|||
**来源：**
- [React 中的 WCAG 2.2](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [颜色对比度 WCAG 2025 指南](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [React 辅助功能最佳实践](https://rtcamp.com/handbook/react-best-practices/accessibility/)
|||九月|||
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

## 11. 部署
|||九月|||
### 推荐：Vercel 免费套餐
|||九月|||
**为什么选择 Vercel：** 由 Next.js 的创建者构建 - 需要零配置。只需“git push”即可部署。
|||九月|||
**免费套餐限制：**
- 100 GB 带宽/月
- 每月 10 万次无服务器函数调用
- 无限部署
- 10 秒功能超时（足以满足 AI 流传输）
- 自定义域支持
|||九月|||
**环境变量：**
````bash
# .env.local（永远不要提交这个）
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=嗯J...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # 仅服务器端
ANTHROPIC_API_KEY=sk-ant-... # 仅服务器端
OPENAI_API_KEY=sk-... # 仅服务器端（用于嵌入）
GOOGLE_TRANSLATE_API_KEY=... # 仅服务器端
````
|||九月|||
**重要：** 以“NEXT_PUBLIC_”为前缀的变量会暴露给浏览器。 API 密钥不得具有此前缀。
|||九月|||
**演示提示：** 尽早部署到 Vercel（第一个小时内）。使用预览 URL 与评委共享。密码保护可用于预览部署。
|||九月|||
**来源：**
- [在 Vercel 上部署 Next.js](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [部署 Next.js 应用 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in- Between-48ia)
- [Vercel 环境变量](https://vercel.com/docs/environment-variables)

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
|||九月|||
## 12. 隐私和安全
|||九月|||
### 隐私设计架构
|||九月|||
**指导原则：** 该应用程序服务于弱势群体。侵犯隐私可能会产生现实后果（无证家庭面临被驱逐出境的风险）。安全性不是可选的。
|||九月|||
**HIPAA 注意事项：** 该应用程序不是受保护的实体，可能不需要完全符合 HIPAA。但是，如果存储有关儿童的任何健康相关信息，请将其视为敏感信息。最佳方法：尽量减少服务器端存储的内容。
|||九月|||
**COPPA 注意事项（13 岁以下儿童）：** 如果父母是唯一的用户，则 COPPA 的限制较少，但仍然与存储儿童数据相关。 2025 年 COPPA 更新引入了更严格的数据最小化要求。 **建议：** 仅为家长设计应用程序，不适合儿童直接使用。
|||九月|||
**数据架构——什么存储在哪里：**
|||九月|||
|数据类型|储存地点 |加密 |
|------------|------------------|------------|
|孩子的名字 |客户端（localStorage/IndexedDB）|可选客户端 AES-256 |
|孩子的诊断 |客户端| AES-256 客户端加密 |
|孩子的技能/里程碑| Supabase（静态加密）| Supabase默认|
|论坛帖子 |苏帕巴斯|静止时（Supabase 默认）|
| AI聊天记录|仅客户端（sessionStorage）|转瞬即逝，不持久 |
|用户的首选语言 | Supabase 用户元数据 |标准|
|匿名用户令牌 | Supabase 授权 |智威汤逊标准|

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

**RLS 政策：**
``sql
-- 用户只能看到自己的子个人资料
创建策略“用户可以查看自己的孩子”
  ON child_profiles FOR SELECT
  使用（auth.uid（）=parent_id）；
|||九月|||
-- 匿名用户可以阅读论坛帖子
创建策略“任何人都可以阅读帖子”
  ON forum_posts FOR SELECT
  使用（is_moderated = false）；
|||九月|||
-- 只有经过身份验证的用户才能发帖
创建策略“经过身份验证的用户可以发帖”
  在forum_posts 上插入
  带检查（auth.uid（）不为空）；
````
|||九月|||
**不该做什么：**
- 永远不要在任何地方存储移民身份
- 不需要真实姓名
- 不要在应用程序日志中存储 IP 地址
- 不要使用跟踪分析（不使用 Google Analytics——使用 Plausible 或什么也不使用）
- 不要将人工智能聊天对话存储在服务器端
- 不需要定位服务
|||九月|||
**来源：**
- [HIPAA 和健康应用程序](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [2025 年 COPPA 合规性](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [零知识健康应用指南](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Supabase RLS 完整指南 2026](https://vibeappscanner.com/supabase-row-level-security)
|||九月|||
---
|||九月|||
## 13. 黑客马拉松策略和时间预算
|||九月|||
### 10 小时构建计划（上午 8:30 - 下午 6:30）

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

**功能优先级（MoSCoW 方法）：**
|||九月|||
|优先|特色 |状态 |预计。时间 |
|----------|---------|--------|-----------|
| **必须** |多语言用户界面（EN + ES + AR）|全面建设 | 1.5 小时 |
| **必须** | AI聊天助手（带RAG） |全面建设 | 2 小时 |
| **必须** |资源库（可浏览+可搜索）|全面建设| 1 小时 |
| **必须** |匿名+电话验证 |全面建设| 1 小时 |
| **必须** |具有技能跟踪功能的儿童档案 |全面建设| 1.5 小时 |
| **应该** |社区论坛 |构建基本（非实时）| 1 小时 |
| **应该** | PWA 离线访问 |构建（Serwist 设置）| 0.5 小时 |
| **可以** |论坛帖子翻译|带有模拟的存根 | 0.5 小时 |
| **可以** |深色模式/高对比度 |快速切换 | 0.25 小时 |
| **不会** |完整的审核系统 |仅演示模拟 | --|
| **不会** |推送通知 |完全跳过 | --|
| **不会** |视频内容|完全跳过 | --|
|||九月|||
### 详细日程
|||九月|||
````
8:30 - 9:00（30 分钟）项目设置
  - 带有 create-t3-app 或 Nextbase starter 的脚手架
  - Supabase 项目创建+表格
  - Vercel部署管道（部署空壳）
  - 安装核心依赖
  - 配置环境变量
|||九月|||
9:00 - 10:00（60 分钟）基础课程
  - 具有 i18n 的布局组件（标题、导航、语言切换器）
  - 安装了 shadcn/ui 组件
  - RTL 支持已连线
  - Supabase 身份验证：匿名 + 电子邮件登录 UI
  - 翻译文件结构（EN + ES + AR）
|||九月|||
10:00 - 11:30（90 分钟）核心功能#1：人工智能聊天
  - Vercel AI SDK + Claude Haiku 设置
  - 用于流媒体聊天的 API 路线
  - 带有 useChat 钩子的聊天 UI 组件
  - 系统提示带安全护栏
  - 在 pgvector 中预填充 20 个资源
  - RAG 管道（嵌入查询 -> 搜索 -> 增强提示）
|||九月|||
11:30 - 12:00（30 分钟）上午部署 + 测试
  - 部署到 Vercel
  - 在移动设备上测试
  - 修复严重错误
|||九月|||
12:00 - 12:30（30 分钟）午餐

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

12:30 - 1:30（60 分钟）核心功能#2：资源库
  - 具有类别过滤功能的资源卡
  - 搜索功能
  - 资源详情页面
  - 种子数据：20-50 个精选资源
|||九月|||
1:30 - 3:00（90 分钟）核心特色#3：儿童概况 + 技能
  - 儿童档案创建表
  - 技能卡组件
  - 里程碑跟踪用户界面
  - 敏感数据的客户端存储
  - 个人资料仪表板视图
|||九月|||
3:00 - 4:00（60 分钟）特色#4：社区论坛（基础）
  - 论坛帖子列表视图
  - 创建帖子表格
  - 基本评论系统
  - 基于类别的组织
|||九月|||
4:00 - 4:30（30 分钟）PWA + 翻译
  - Serwist 服务人员设置
  - 填写ES和AR的翻译键
  - 使用阿拉伯语测试 RTL 布局
|||九月|||
4:30 - 5:30（60 分钟）抛光和演示准备
  - 修复用户界面错误
  - 添加加载状态和错误处理
  - 高对比度模式切换（如果时间）
  - 截屏以供演示
  - 录制演示视频备份
|||九月|||
5:30 - 6:00（30 分钟）最终部署 + 演示
  - 最终 Vercel 部署
  - 端到端测试所有功能
  - 准备3分钟的推介脚本
|||九月|||
6:00 - 6:30（30 分钟）缓冲/演示
````
|||九月|||
### 模拟/存根什么：
- **论坛管理：** 只需隐藏带有标志的举报帖子，没有管理面板
- **论坛翻译：** “翻译”按钮显示加载然后原始文本（或谷歌翻译，如果时间）
- **密码重置流程：** 使用 Supabase 默认电子邮件
- **用户头像：**姓名首字母或默认图标，无需上传
- **管理仪表板：** 完全跳过

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

### 演示优化提示：
1. **从故事开始** --“来认识一下法蒂玛，一位刚搬到美国的叙利亚母亲。她4岁的儿子最近被诊断出患有自闭症。她不会说英语。她不知道从哪里开始。”
2. **显示语言切换** -- 实时从英语切换到阿拉伯语。 RTL 翻转在视觉上给评委留下了深刻的印象。
3. **演示 AI 聊天** -- 用西班牙语问问题。显示它提供资源。
4. **显示离线功能** -- 关闭WiFi，显示应用程序仍然可以运行。
5. **强调隐私** --“不需要真实姓名。不需要电子邮件。她可以安全地使用这个应用程序。”
|||九月|||
**来源：**
- [36小时从零到演示](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [MVP 功能优先级](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Hackathon 演示技巧 (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [黑客松 Pitch Deck 指南](https://www.inknarrates.com/post/hackathon-pitch-deck)
|||九月|||
---
|||九月|||
## 14.样板和模板
|||九月|||
### 选项 1：create-t3-app（推荐熟悉 tRPC 的团队）
````bash
npx create-t3-app@latest autism-bridge --typescript --tailwind --trpc --prisma
````
- GitHub：https://github.com/t3-oss/create-t3-app
- 包括：Next.js、TypeScript、tRPC、Prisma、Tailwind CSS
- 您添加：Supabase、next-intl、shadcn/ui、Vercel AI SDK
|||九月|||
### 选项 2：Nextbase Starter（推荐用于更简单的设置）
- GitHub：https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- 包括：Next.js 16+、Supabase、Tailwind CSS 4、TypeScript、React Query
- 您添加：next-intl、shadcn/ui、Vercel AI SDK、Prisma（可选）
|||九月|||
### 选项 3：Vercel Supabase 入门版
- 模板：https://vercel.com/templates/next.js/supabase
- 带有 SSR 授权的官方 Vercel/Supabase 模板
|||九月|||
### 选项 4：supa-next-starter
- GitHub：https://github.com/michaeltroya/supa-next-starter
- 包括：Next.js、Supabase、Tailwind、shadcn/ui（已集成）

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

### 脚手架之后，添加：
````bash
npm install next-intl rtl-检测
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm install @serwist/next @serwist/precaching @serwist/sw
npx shadcn@最新 init
npx shadcn@latest 添加按钮卡对话框输入表单选项卡头像徽章手风琴命令吐司
npm install -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-Detect
````
|||九月|||
### 参考项目：
- **supabase-comments-extension** (GitHub:malerba118/supabase-comments-extension) -- 评论、回复、反应
- **ojasskapre/nextjs-starter-template** -- Next.js + Supabase + LLM 聊天界面
- **shwosner/realtime-chat-supabase-react** -- 与 Supabase 实时聊天
|||九月|||
---
|||九月|||
## 15. 模式设计
|||九月|||
### 完整的 Prisma 架构
|||九月|||
````棱镜
生成器客户端{
  提供者=“prisma-client-js”
}
|||九月|||
数据源数据库{
  提供者=“postgresql”
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
|||九月|||
// 用户和身份验证
模型用户配置文件{
  id 字符串 @id @default(uuid())
  authId 字符串@unique
  显示名称字符串？
  PreferredLocale 字符串 @default("en")
  创建于日期时间@default(now())
  更新日期时间@updatedAt
  儿童 ChildProfile[]
  论坛帖子 论坛帖子[]
  论坛评论 论坛评论[]
  投票 论坛Upvote[]
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

// 儿童档案和技能跟踪
模型儿童档案{
  id 字符串 @id @default(uuid())
  父代 ID 字符串
  父 UserProfile @relation（字段：[parentId]，引用：[id]）
  昵称字符串
  出生年份 Int?
  诊断日期日期时间？
  技能技能卡[]
  里程碑 里程碑[]
  创建于日期时间@default(now())
  更新日期时间@updatedAt
  @@index([父ID])
}
|||九月|||
模型技能类别{
  id 字符串 @id @default(uuid())
  名称键字符串
  图标字符串？
  sortOrder Int @default(0)
  技能技能卡[]
}
|||九月|||
模型技能卡{
  id 字符串 @id @default(uuid())
  孩子ID字符串
  child ChildProfile @relation(字段: [childId], 引用: [id], onDelete: Cascade)
  类别 ID 字符串
  类别 SkillCategory @relation（字段：[categoryId]，引用：[id]）
  名称键字符串
  级别 Int @default(0)
  注释 字符串？
  最后评估的日期时间@default(now())
  创建于日期时间@default(now())
  更新日期时间@updatedAt
  @@index([子ID])
  @@index([类别Id])
}
|||九月|||
模型里程碑{
  id 字符串 @id @default(uuid())
  孩子ID字符串
  child ChildProfile @relation(字段: [childId], 引用: [id], onDelete: Cascade)
  标题键字符串
  描述字符串？
  实现日期日期时间？
  类别 字符串
  创建于日期时间@default(now())
  @@index([子ID])
}
|||九月|||
// 资源（通过原始 SQL / pgvector 处理向量嵌入）
模型资源{
  id 字符串 @id @default(uuid())
  标题字符串
  内容字符串@db.Text
  摘要字符串？
  类别 字符串
  子类别字符串？
  源 URL 字符串？
  状态字符串？
  语言 字符串 @default("en")
  标签 字符串[]
  创建于日期时间@default(now())
  更新日期时间@updatedAt
  @@索引([类别])
  @@index([状态])
}
|||九月|||
// 论坛/社区
模型论坛类别{
  id 字符串 @id @default(uuid())
  名称键字符串
  描述键字符串？
  图标字符串？
  sortOrder Int @default(0)
  帖子 论坛帖子[]
}
|||九月|||
模型论坛帖子{
  id 字符串 @id @default(uuid())
  类别 ID 字符串
  类别 ForumCategory @relation（字段：[categoryId]，引用：[id]）
  作者 ID 字符串
  作者 UserProfile @relation（字段：[authorId]，参考文献：[id]）
  isAnonymous 布尔值 @default(false)
  标题字符串
  内容字符串@db.Text
  原始语言字符串@default(“en”)
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  isPinned 布尔值 @default(false)
  isHidden 布尔值 @default(false)
  reportCount Int @default(0)
  评论 论坛评论[]
  投票 论坛Upvote[]
  翻译 论坛翻译[]
  创建于日期时间@default(now())
  更新日期时间@updatedAt
  @@index([类别Id])
  @@index([作者ID])
  @@index([创建时间])
}
|||九月|||
模型论坛评论 {
  id 字符串 @id @default(uuid())
  帖子 ID 字符串
  post ForumPost @relation(字段: [postId], 参考文献: [id], onDelete: Cascade)
  父代 ID 字符串？
  家长论坛评论？ @relation("CommentReplies"，字段：[parentId]，引用：[id])
  回复 ForumComment[] @relation("CommentReplies")
  作者 ID 字符串
  作者 UserProfile @relation（字段：[authorId]，参考文献：[id]）
  isAnonymous 布尔值 @default(false)
  内容字符串@db.Text
  原始语言字符串@default(“en”)
  upvoteCount Int @default(0)
  isHidden 布尔值 @default(false)
  reportCount Int @default(0)
  投票 论坛Upvote[]
  翻译 论坛翻译[]
  创建于日期时间@default(now())
  @@index([帖子ID])
  @@index([父ID])
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

模型论坛Upvote {
  id 字符串 @id @default(uuid())
  用户 ID 字符串
  用户 UserProfile @relation（字段：[userId]，引用：[id]）
  帖子 ID 字符串？
  发布论坛帖子？ @relation（字段：[postId]，引用：[id]，onDelete：级联）
  commentId 字符串？
  评论论坛评论？ @relation(字段: [commentId], 引用: [id], onDelete: Cascade)
  创建于日期时间@default(now())
  @@unique([用户ID, 帖子ID])
  @@unique([用户Id, 评论Id])
}
|||九月|||
模型论坛翻译{
  id 字符串 @id @default(uuid())
  帖子 ID 字符串？
  发布论坛帖子？ @relation（字段：[postId]，引用：[id]，onDelete：级联）
  commentId 字符串？
  评论论坛评论？ @relation(字段: [commentId], 引用: [id], onDelete: Cascade)
  目标语言字符串
  翻译后的标题字符串？
  翻译内容字符串@db.Text
  创建于日期时间@default(now())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
````
|||九月|||
### 种子数据类别
|||九月|||
**技能类别：** 沟通、社交技能、日常生活、运动技能、学术、感觉处理、情绪调节
|||九月|||
**论坛类别：** 介绍和欢迎、治疗和治疗（ABA/OT/演讲）、学校和 IEP 帮助、日常生活技巧、法律和移民问题、医疗保健导航、成功故事和里程碑、一般支持
|||九月|||
**资源类别：** 治疗类型和提供者、教育和 IEP 资源、法律权利和宣传、经济援助、社区组织、在线工具和应用程序、书籍和媒体、州特定资源
|||九月|||
---
|||九月|||
## Package.JSON 依赖项摘要

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
  “依赖项”：{
    "下一个": "^16.0.0",
    “反应”：“^19.0.0”，
    "react-dom": "^19.0.0",
    “打字稿”：“^5.7.0”，
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "棱镜": "^6.0.0",
    "@prisma/client": "^6.0.0",
    "next-intl": "^4.0.0",
    “rtl-检测”：“^1.1.2”，
    "ai": "^6.0.0",
    "@ai-sdk/anthropic": "^1.0.0",
    "@ai-sdk/openai": "^1.0.0",
    "@ai-sdk/react": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "类方差权威": "^0.7.0",
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
    “@hookform/resolvers”：“^3.9.0”
  },
  “开发依赖项”：{
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    “@types/rtl-检测”：“^1.0.0”
  }
}
````
|||九月|||
---
|||九月|||
## 快速参考：关键文档链接
|||九月|||
|工具|文档 |
|------|--------------|
| Next.js 16 | https://nextjs.org/docs |
|苏帕巴斯| https://supabase.com/docs |
| Supabase 授权 | https://supabase.com/docs/guides/auth |
| Supabase 实时 | https://supabase.com/docs/guides/realtime |
| Supabase pg向量 | https://supabase.com/docs/guides/ai |
|下一个国际 | https://next-intl.dev/|
| shadcn/ui | https://ui.shadcn.com/ |
| Vercel AI SDK | https://ai-sdk.dev/docs/introduction | https://ai-sdk.dev/docs/introduction |
|克劳德·API | https://platform.claude.com/docs |
|棱镜| https://www.prisma.io/docs |
| Serwist PWA | https://serwist.pages.dev/docs/next/getting-started | https://serwist.pages.dev/docs/next/getting-started |
|顺风 CSS | https://tailwindcss.com/docs |
|谷歌云翻译 | https://cloud.google.com/translate/docs |
| OpenAI 嵌入 | https://platform.openai.com/docs/guides/embeddings |
| Vercel 部署 | https://vercel.com/docs |
|||九月|||
---
|||九月|||
这项研究涵盖了您要求的所有 10 个领域，以及黑客马拉松策略、隐私架构、样板选项和完整的架构设计。该堆栈的设计使得每项服务都适合黑客马拉松的免费套餐，身份验证可以保护无证用户的隐私，并且时间预算对于 10 小时的构建来说是现实的。我尝试将其另存为文件到“/Users/arielorlov/Desktop/hackathon-tech-stack-research.md”，但文件写入权限被拒绝。如果您希望我将其保存到磁盘，您可以授予写入权限，我将创建该文件。
---
|||九月|||
## 其他研究（2026 年 3 月更新）
|||九月|||
### 适用于 10 多种语言的最佳 i18n 库（React + TypeScript）

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

**推荐：react-i18next** — 每周 210 万次下载，最受欢迎的 React i18n 解决方案。
- 基于 i18next 生态系统构建，带有用于语言检测、异步加载、复杂复数的插件
- 捆绑包：22.2 kB（i18next 15.1kB + 反应-i18next 7.1kB）
- 支持 JSON 翻译文件——轻松增量添加语言
- 来源：[短语博客](https://phrase.com/blog/posts/react-i18n-best-libraries/)，[react.i18next.com](https://react.i18next.com)
|||九月|||
**轻量级替代方案：LinguiJS** — 总共 10.4 kB（大小的一半），ICU 消息语法，TypeScript 支持。
|||九月|||
**对于黑客马拉松速度**：react-i18next 与 JSON 翻译文件。从英语 + 西班牙语开始，通过 JSON 文件添加其他语言。使用 Google Translate API 或 DeepL 进行初始翻译。
|||九月|||
资料来源：[GloryWebs 2026 指南](https://www.glorywebs.com/blog/internationalization-in-react)、[SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)
|||九月|||
### Supabase 免费层级限制 (2026)
|||九月|||
- **2 个活跃项目**（1 周不活动后暂停）
- **500 MB** 数据库存储（共享 CPU）
- **2 GB** 数据库出站量/月
- **50,000** 每月活跃用户（授权）
- **1 GB** 文件存储
- **2 GB** 存储出口
- **500,000** 边缘函数调用/月
- 免费计划没有备份、没有 SLA
|||九月|||
资料来源：[Supabase 定价](https://supabase.com/pricing)、[UI Bakery 细分](https://uibakery.io/blog/supabase-pricing)
|||九月|||
**对于黑客马拉松**：500 MB 就足够了。即使有 10,000 个用户每个存储个人资料 + 子数据 + 论坛帖子，您也将使用 <50 MB。对于演示来说，5 万个 MAU 授权限制也非常慷慨。

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
