# 해커톤 기술 스택 연구: 이민자 부모 + 자폐증 앱
|||9월|||
**날짜:** 2026-02-28 | **제작 시간:** 10시간(오전 8시 30분 - 오후 6시 30분)
|||9월|||
---
|||9월|||
## 1. 권장 스택 요약
|||9월|||
| 레이어 | 기술 | 왜 |
|-------|------------|------|
| **프레임워크** | Next.js 16(앱 라우터) | SEO용 SSR, API 경로, PWA 지원, Vercel 배포 |
| **비계** | `create-t3-app` 또는 Nextbase 스타터 | 유형화된 전체 스택에 대한 가장 빠른 경로 |
| **언어** | TypeScript 전체 | 엔드투엔드형 안전 |
| **백엔드 API** | tRPC(T3 스택을 통해) 또는 Next.js API 경로 + Supabase 클라이언트 | 형식이 안전하고 상용구가 없는 |
| **데이터베이스** | 수파베이스(PostgreSQL) | 무료 계층, 인증, 실시간, pgVector, RLS |
| **ORM** | 프리즈마 | 자동 생성 유형, 마이그레이션 도구 |
| **인증** | 수파베이스 인증 | 익명 로그인, 전화 OTP, 이메일/비밀번호, PII 필요 없음 |
| **i18n** | 다음 국제 | 기본 Next.js 통합, RSC 지원, 작은 번들, RTL 지원 |
| **UI** | shadcn/ui + Tailwind CSS | 구성요소 복사-붙여넣기, 전체 소유권, Radix a11y, RTL 지원 |
| **AI 채팅** | Vercel AI SDK + Claude API(Haiku 4.5) | 스트리밍, Chat Hook 사용, 비용 효율적 |
| **벡터 DB** | 수파베이스 pgVector | 동일한 데이터베이스, 추가 서비스 없음, 벡터의 RLS |
| **임베딩** | OpenAI 텍스트 임베딩-3-소형 | $0.02/1M 토큰, ada-002보다 5배 저렴 |
| **번역 API** | Google 클라우드 번역 API | 월별 무료 500,000자, 130개 이상의 언어, 데이터 저장 없음 |
| **PWA** | 서위스트(@serwist/next) | 현대적인 next-pwa 후속작, 오프라인 지원 |
| **배포** | Vercel(무료 계층) | 구성이 필요 없는 Next.js 배포, 100GB 대역폭 |
| **포럼** | Supabase Realtime을 사용한 사용자 정의 | 실시간 업데이트, 조정을 위한 RLS |
|||9월|||
**총 예상 월간 비용(해커톤/데모): $0** -- 위의 모든 서비스에는 해커톤 데모에 충분한 무료 등급이 있습니다.
|||9월|||
---
|||9월|||
## 2. 반응 프레임워크

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

### 권장 사항: Next.js 16(앱 라우터)
|||9월|||
**이 앱에 Vite+React보다 Next.js가 필요한 이유:**
- SEO용 SSR/SSG(이민 부모가 Google을 검색하여 검색할 수 있는 리소스 페이지에 중요)
- 내장된 API 경로로 인해 별도의 백엔드 서버가 필요하지 않습니다.
- React Server 구성 요소가 있는 앱 라우터 = 번역된 콘텐츠를 위한 클라이언트 JS 없음
- `app/manifest.ts`를 통한 기본 PWA 매니페스트 지원
- Vercel 배포는 구성이 필요 없습니다.
- next-intl은 기본적으로 RSC와 함께 작동합니다(서버 측에서 렌더링된 변환 = 클라이언트에 0바이트).
|||9월|||
**Vite가 더 좋을 때:**
- SEO가 필요 없는 순수 SPA
- 더 빠른 개발 서버 시작(10시간 해커톤의 한계 이점)
- 더 단순한 정신 모델(서버/클라이언트 구성 요소 구분 없음)
|||9월|||
**Serwist를 사용한 PWA 설정(다음 PWA 후속 제품):**
``배쉬
npm install @serwist/next @serwist/precaching @serwist/sw idb
````
|||9월|||
주요 오프라인 전략:
- 정적 자산(`/_next/static/`)의 경우 **CacheFirst** -- 콘텐츠 해시, 변경되지 않음
- API 응답 및 동적 콘텐츠를 위한 **NetworkFirst**
- 번역 파일 및 리소스 페이지에 대한 **StaleWhileRevalidate**
- 오프라인 데이터 저장을 위한 IndexedDB(하위 프로필, 저장된 리소스)
|||9월|||
**중요:** Next.js 16은 기본적으로 Turbopack을 사용하지만 Serwist에는 Webpack이 필요합니다. 이에 따라 빌드를 구성해야 합니다.
|||9월|||
**PWA 매니페스트**(내장 Next.js 지원):
````타이프스크립트
// 앱/manifest.ts
'next'에서 가져오기 유형 { MetadataRoute }
|||9월|||
기본 함수 매니페스트() 내보내기: MetadataRoute.Manifest {
  반환 {
    이름: 'ASD 브리지',
    short_name: 'ASD 브리지',
    설명: '자폐아를 둔 이민자 가족 지원',
    start_url: '/',
    디스플레이: '독립형',
    background_color: '#ffffff',
    theme_color: '#4F46E5',
    아이콘: [
      { src: '/icon-192.png', 크기: '192x192', 유형: '이미지/png' },
      { src: '/icon-512.png', 크기: '512x512', 유형: '이미지/png' },
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

**출처:**
- [Vite vs Next.js 2026 전체 비교](https://designrevision.com/blog/vite-vs-nextjs)
- [Next.js PWA 가이드](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Serwist 시작하기](https://serwist.pages.dev/docs/next/getting-started)
- [Servist를 사용한 Next.js 16 PWA](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Serwist를 사용하여 Next.js에서 PWA 구축](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)
|||9월|||
---
|||9월|||
## 3. 타입스크립트 백엔드
|||9월|||
### 권장 사항: Next.js API 경로 + Supabase 클라이언트(기본) 또는 tRPC(T3를 사용하는 경우)
|||9월|||
**옵션 A: Next.js API 경로 + Supabase(해커톤의 경우 가장 간단함)**
- 별도의 백엔드 서버 없음
- Supabase JS 클라이언트는 DB 쿼리, 인증, 실시간 처리를 수행합니다.
- AI 채팅, 번역 API 호출 및 모든 서버 측 로직을 위한 API 경로
- 설정이 가장 빠릅니다.
|||9월|||
**옵션 B: T3 스택을 통한 tRPC(팀이 알고 있는 경우 가장 좋은 DX)**
- 프론트엔드와 백엔드 간 End-to-End 형태의 안전성
- 프런트엔드에서 API 호출 자동 완성
- 생성된 유형에 대해 Prisma와 함께 작동
- 'create-t3-app'은 모든 것을 발판으로 삼습니다.
|||9월|||
``배쉬
# 옵션 A: 일반 Next.js + Supabase
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
|||9월|||
# 옵션 B: T3 스택
npx create-t3-app@latest my-app
# 선택: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
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

**표현/단속화하지 않는 이유:**
- 배포 복잡성 추가(호스트에 별도의 서버)
- 이 사용 사례에서는 Next.js API 경로에 비해 이점이 없습니다.
- 필요하지 않은 추가 설정 시간 30~60분
|||9월|||
**서버리스(Lambda/Netlify 함수)를 사용하지 않는 이유:**
- Vercel의 Next.js API 경로는 기본적으로 서버리스입니다.
- 별도의 기능 인프라가 필요하지 않습니다.
|||9월|||
**출처:**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [T3 스택 2025 가이드](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [T3 앱 만들기](https://create.t3.gg/)
- [tRPC 공식](https://trpc.io/)
|||9월|||
---
|||9월|||
## 4. 데이터베이스
|||9월|||
### 권장사항: Supabase(PostgreSQL)
|||9월|||
**Supabase가 이 프로젝트에서 승리한 이유:**
|||9월|||
| 기능 | 수파베이스 | 파이어베이스 | 플래닛스케일 |
|---------|------------|----------|-------------|
| 무료 계층 DB 스토리지 | 500MB | 1GB(스파크) | 중단된 무료 등급 |
| 인증 포함 | 예(50K MAU 무료) | 예(50K MAU 무료) | 아니요 |
| 실시간 | 예(Postgres 변경 사항) | 예(동급 최고) | 아니요 |
| 벡터 검색(pgVector) | 예, 내장 | 아니요 | 아니요 |
| SQL 지원 | 전체 PostgreSQL | NoSQL 전용 | MySQL |
| RLS(행 수준 보안) | 예, SQL 기반 | Firebase 보안 규칙 | 아니요 |
| 익명 인증 | 예, 내장 | 예 | 해당 없음 |
| 오픈 소스 | 예 | 아니요 | 부분적으로 |
| 데이터 이동성 | 전체(Postgres) | 공급업체 종속 | MySQL 호환 |

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

**Supabase 무료 등급(2026):**
- 2개의 활성 프로젝트
- 500MB 데이터베이스 저장 공간
- 2GB 데이터베이스 송신
- 50,000 MAU (인증)
- 1GB 파일 저장 공간
- 500,000개의 에지 함수 호출
- 신용 카드가 필요하지 않으며 만료되지 않습니다.
|||9월|||
**이 앱에 Firebase보다 Supabase가 필요한 이유:**
1. AI 자원 검색을 위한 pgVector(추가 서비스 필요 없음)
2. 복잡한 쿼리를 위한 전체 SQL(하위 마일스톤, 기술 추적)
3. 개인 정보를 보호하는 익명 포럼 액세스를 위한 RLS
4. 데이터 이동성(Google 생태계에 종속되지 않음)
5. 관계형 데이터(사용자 -> 자녀 -> 기술 -> 마일스톤)에 더 좋습니다.
|||9월|||
**프리즈마 통합:**
``프리즈마
데이터 소스 DB {
  공급자 = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
````
|||9월|||
**출처:**
- [Supabase와 Firebase 2026 비교](https://hackceleration.com/supabase-review/)
- [Firebase 대 Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-which-one-actually-scales-with-you-2374)
- [2026년 Supabase 가격](https://uibakery.io/blog/supabase-pricing)
- [Supabase 무료 등급 한도](https://supabase.com/pricing)
|||9월|||
---
|||9월|||
## 5. 인증
|||9월|||
### 권장사항: 익명 로그인 + 전화 OTP + 이메일/비밀번호를 사용한 Supabase Auth
|||9월|||
**이 청중을 위한 중요한 디자인 원칙:**
앱은 개인 식별 정보를 제공하지 않고 사용할 수 있어야 합니다. 많은 이민자 부모(특히 서류 미비)는 정부 ID/SSN, 실명 확인, 주소 수집 또는 필수 이메일을 요구하는 앱을 사용하지 않습니다.

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

**인증 계층(점진적 신뢰):**
|||9월|||
| 계층 | 방법 | 그것이 무엇을 열어주는가 | PII 필수 |
|------|---------|---|-------------|
| 1 | 익명 로그인 | 리소스 검색, AI 채팅 사용, 포럼 보기 | 없음 |
| 2 | 전화 OTP | 포럼에 게시하고 자녀 프로필 저장 | 전화번호만 |
| 3 | 이메일 + 비밀번호 | 복구가 가능한 전체 계정 | 이메일 주소 |
|||9월|||
**Supabase 익명 인증:**
````타이프스크립트
// 익명으로 로그인 - PII가 필요하지 않습니다.
const { 데이터, 오류 } = supabase.auth.signInAnonymously()를 기다립니다.
|||9월|||
// 나중에 사용자가 전화번호를 연결할 수 있습니다.
const { 데이터, 오류 } = supabase.auth.updateUser({를 기다립니다.
  전화: '+1234567890',
})
````
|||9월|||
**전화 OTP 설정:**
Supabase는 Twilio, MessageBird, Textlocal 및 Vonage를 통한 전화 인증을 지원합니다. 사용자는 SMS를 통해 60초 동안 유효한 6자리 PIN을 받습니다.
|||9월|||
**익명 사용자를 위한 보안:**
- 남용 방지를 위해 CAPTCHA(Cloudflare Turnstile 권장 - 무료)를 활성화합니다.
- IP 기반 속도 제한: 시간당 30개 요청(Supabase 대시보드에서 조정 가능)
- RLS 정책은 'is_anonymous' JWT 클레임을 통해 익명 사용자와 인증된 사용자를 구분할 수 있습니다.
|||9월|||
**이 앱을 Clerk로 사용하지 않는 이유:**
- 내장된 익명 로그인 없음
- 10K 이후 $0.02/MAU (Supabase: 50K 무료)
- 이 사용 사례에 대한 과잉 UI
- 외부 종속성을 추가합니다.
|||9월|||
**인증하지 않은 이유0:**
- 해커톤을 위한 복잡한 설정
- 익명 인증 없음
- 무료 등급은 7,500 MAU로 제한됩니다.

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

**출처:**
- [Supabase 익명 로그인](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Supabase 전화 로그인](https://supabase.com/docs/guides/auth/phone-login)
- [Clerk vs Supabase 인증](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [익명 로그인의 보안](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)
|||9월|||
---
|||9월|||
## 6. 국제화(i18n)
|||9월|||
### 권장사항: next-intl
|||9월|||
**react-i18next나 React-intl이 아닌 next-intl이 필요한 이유:**
|||9월|||
| 기능 | 다음 국제 | 반응-i18next | 반응 국제 |
|---------|------------|---------------|------------|
| Next.js 앱 라우터 지원 | 네이티브 | 래퍼를 통해 | 래퍼를 통해 |
| 서버 구성 요소 지원 | 내장(0 클라이언트 JS) | 설정 필요 | 설정 필요 |
| 번들 크기 | ~4KB | ~8KB | ~12KB |
| RTL 지원 | 내장 | 매뉴얼 | 매뉴얼 |
| 복수형(아랍어: 6형) | 자동 중환자실 | 수동 구성 | 자동 중환자실 |
| 유형 안전 | TypeScript 우선 | 좋음 | 좋음 |
|||9월|||
**설치:**
``배쉬
npm은 다음-intl rtl-탐지를 설치합니다.
npm install --save-dev @types/rtl-Detect
````
|||9월|||
**아랍어, 페르시아어, 우르두어에 대한 RTL 설정:**
````타이프스크립트
// 후크/useTextDirection.ts
'next-intl'에서 가져오기 { useLocale };
'rtl-Detect'에서 { isRtlLang }을 가져옵니다.

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

내보내기 함수 useTextDirection() {
  const locale = useLocale();
  isRtlLang(locale)을 반환합니까? 'rtl' : 'ltr';
}
|||9월|||
// 앱/[로케일]/layout.tsx
기본 함수 내보내기 LocaleLayout({ children, params: { locale } }) {
  const 방향 = isRtlLang(locale) ? 'rtl' : 'ltr';
  반환 (
    <html lang={locale} dir={방향}>
      <body>{어린이}</body>
    </html>
  );
}
````
|||9월|||
**번역 파일 구조:**
````
메시지/
  ko/
    common.json # 공유 UI 문자열(버튼, 탐색, 오류)
    auth.json # 로그인, 가입, 프로필
    resources.json # 리소스 라이브러리
    forum.json # 포럼/커뮤니티
    ai-chat.json # AI 비서
    child-profile.json # 자녀 추적
    Skill.json # 스킬 카드
  ar/ # 아랍어(RTL)
  es/ # 스페인어
  zh/ # 중국어(간체)
  fa/ # 페르시아어/페르시아어(RTL)
  ur/ # 우르두어(RTL)
````
|||9월|||
**MVP 우선 언어:** 영어(기본값), 스페인어, 아랍어(기술적 역량을 입증하기 위한 RTL), 중국어(간체).
|||9월|||
**RTL용 CSS - Tailwind 논리 속성 사용:**
- `pl-4` -> `ps-4` (패딩-인라인-시작)
- `pr-4` -> `pe-4` (패딩 인라인 끝)
- `텍스트-왼쪽` -> `텍스트-시작`
- `텍스트 오른쪽` -> `텍스트 끝`
- `ml-자동` -> `ms-자동`
- `mr-auto` -> `me-auto`
|||9월|||
**포럼 콘텐츠의 기계 번역:**
|||9월|||
| 서비스 | 프리 티어 | 무료 이후 가격 | 언어 | 개인정보 보호 |
|---------|------------|----|------------|---------|
| Google 클라우드 번역 | 500,000자/월(영구) | $20/100만 자 | 130세 이상 | 학습을 위해 데이터가 저장/사용되지 않음 |
| 딥엘 | 500,000자/월 | $25/1M 문자 + $5.49/월 | 30세 이상 | 무료 계층 데이터가 저장될 수 있습니다 |
| 아마존 번역 | 200만 자/월(12개월만 해당) | $15/1백만 자 | 75세 이상 | 저장된 데이터가 없습니다 |
|||9월|||
**권장사항:** Google Cloud Translation API -- 영구 무료 등급, 최대 언어 지원(모든 대상 RTL 언어를 포함하여 130개 이상의 언어), 강력한 개인정보 보호 보장(교육용으로 데이터가 저장되거나 사용되지 않음).

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

**출처:**
- [next-intl 문서](https://next-intl.dev/)
- [next-intl 전체 가이드 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl 대 React-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Next.js RTL 지원](https://lingo.dev/en/nextjs-i18n/right-to-left-언어s)
- [Google Cloud 번역 가격](https://cloud.google.com/translate/pricing)
- [DeepL 대 Google 번역](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)
|||9월|||
---
|||9월|||
## 7. UI 컴포넌트 라이브러리
|||9월|||
### 권장사항: shadcn/ui + Tailwind CSS
|||9월|||
**shadcn/ui를 사용하는 이유:**
- 구성 요소를 프로젝트에 복사하여 붙여넣습니다(완전 소유권, 걱정할 종속성 업데이트 없음).
- Radix UI 기본 요소를 기반으로 구축됨(WAI-ARIA 호환, 키보드 탐색, 스크린 리더 지원)
- Tailwind CSS 기본(RTL의 논리적 속성)
- 40개 이상의 구성 요소 사용 가능
- 템플릿을 통한 RTL 지원
- 다크/라이트 모드 내장
- 런타임 오버헤드 없음
|||9월|||
**설치:**
``배쉬
npx shadcn@최신 초기화
npx shadcn@latest 추가 버튼 카드 대화 상자 입력 양식 시트 탭 아바타 배지 아코디언 명령 토스트
````
|||9월|||
**이 앱의 주요 구성 요소:**
- `카드` -- 자원 카드, 스킬 카드, 자녀 프로필 카드
- `Dialog` / `Sheet` -- 모달 상호 작용, 언어 전환기
- `Form` + `Input` -- 하위 프로필 양식, 포럼 게시물 작성
- `탭` -- 섹션 간 탐색
- `Avatar` -- 포럼 사용자 표시(익명 옵션 포함)
- `배지` -- 기술 수준, 언어 태그
- `아코디언` -- FAQ, 리소스 세부정보
- `명령` -- 자원 검색 팔레트
- `토스트` -- 알림
|||9월|||
**접근성 내장:**
- 모든 Radix 기반 구성 요소에는 ARIA 역할 및 속성이 자동으로 포함됩니다.
- 키보드 탐색은 기본적으로 작동합니다(Tab, Enter, Escape, 화살표 키).
- 모달의 포커스 관리 및 포커스 트래핑
- 동적 콘텐츠에 대한 스크린 리더 알림
- 유효성 검사 오류 시 자동으로 연결된 'aria-describedby'
- 양식 오류에 'aria-invalid'가 설정되었습니다.

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

**Chakra UI를 사용하지 않는 이유:** 더 무거운 런타임(CSS-in-JS), Tailwind 유틸리티 클래스보다 유연성이 떨어지는 소품 기반 스타일, 2025~2026년 생태계 추진력 저하.
|||9월|||
**Material UI를 사용하지 않는 이유:** 매우 무거운 번들인 Google의 디자인 언어는 커뮤니티 앱에 대해 냉담하게 느껴질 수 있으며 심도 있게 맞춤설정하기가 더 어렵습니다.
|||9월|||
**출처:**
- [shadcn/ui 가이드 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [액세스 가능한 shadcn/ui 구성 요소](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-comComponents-build-production-ready-apps-with-react-typescript-tailwind-css)
- [React UI 라이브러리 2025 비교](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-comComponent-battle-2025)
|||9월|||
---
|||9월|||
## 8. 포럼/커뮤니티 기능
|||9월|||
### 아키텍처: Supabase Realtime을 사용한 맞춤형 빌드
|||9월|||
**데이터 모델(SQL):**
``sql
-- 포럼 카테고리
CREATE TABLE forum_categories(
  ID UUID 기본 키 기본 gen_random_uuid(),
  name_key TEXT NOT NULL,
  설명_키 TEXT,
  아이콘 텍스트,
  sort_order INTEGER DEFAULT 0,
  생성된_at TIMESTAMPTZ DEFAULT NOW()
);
|||9월|||
-- 포럼 게시물(스레드)
CREATE TABLE forum_posts(
  ID UUID 기본 키 기본 gen_random_uuid(),
  Category_id UUID 참조 forum_categories(id),
  작성자_ID UUID 참조 auth.users(id),
  is_anonymous 부울 기본값 false,
  디스플레이_이름 TEXT,
  제목 TEXT NOT NULL,
  내용 TEXT NOT NULL,
  원래_언어 TEXT DEFAULT 'en',
  upvote_count 정수 기본값 0,
  comment_count 정수 기본값 0,
  is_pinned BOOLEAN DEFAULT false,
  is_moderated BOOLEAN DEFAULT false,
  create_at TIMESTAMPTZ DEFAULT NOW(),
  update_at TIMESTAMPTZ 기본 지금()
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

-- 게시물에 대한 댓글
CREATE TABLE forum_comments(
  ID UUID 기본 키 기본 gen_random_uuid(),
  post_id UUID 참조 forum_posts(id) ON DELETE CASCADE,
  parent_id UUID 참조 forum_comments(id),
  작성자_ID UUID 참조 auth.users(id),
  is_anonymous 부울 기본값 false,
  디스플레이_이름 TEXT,
  내용 TEXT NOT NULL,
  원래_언어 TEXT DEFAULT 'en',
  upvote_count 정수 기본값 0,
  생성된_at TIMESTAMPTZ DEFAULT NOW()
);
|||9월|||
-- 찬성표
CREATE TABLE forum_upvotes(
  ID UUID 기본 키 기본 gen_random_uuid(),
  user_id UUID 참조 auth.users(id),
  post_id UUID 참조 forum_posts(id),
  comment_id UUID 참조 forum_comments(id),
  create_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(사용자 ID, 게시물 ID),
  UNIQUE(user_id, comment_id)
);
|||9월|||
-- 캐시된 번역
CREATE TABLE forum_translations(
  ID UUID 기본 키 기본 gen_random_uuid(),
  source_type TEXT NOT NULL,
  source_id UUID가 NULL이 아닙니다.
  target_언어 TEXT NOT NULL,
  번역_제목 TEXT,
  번역_내용 TEXT NOT NULL,
  create_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(소스_ID, 타겟_언어)
);
````
|||9월|||
**실시간 업데이트:**
````타이프스크립트
const 채널 = 수파베이스
  .channel('포럼-게시물')
  .on('postgres_changes', {
    이벤트: '삽입',
    스키마: '공개',
    테이블: 'forum_posts',
    필터: `category_id=eq.${categoryId}`
  }, (페이로드) => {
    // UI에 새 게시물 추가
  })
  .구독()
````
|||9월|||
**익명 게시 안전:**
- 익명 사용자(Supabase 익명 인증)의 게시물에는 다르게 플래그가 지정될 수 있습니다.
- RLS 정책은 JWT의 'is_anonymous' 주장을 확인합니다.
- 빈 이름 대신 가명(예: "부모 #4827")을 표시합니다.
|||9월|||
**조정(MVP):** 각 게시물/댓글에 있는 간단한 신고 버튼입니다. 신고된 콘텐츠를 숨기기 위한 관리 플래그입니다. 미래: Claude API를 통한 AI 기반 콘텐츠 조정.
|||9월|||
**주문형 번역:** 원래 언어로 저장된 게시물입니다. '번역' 버튼을 누르면 Google Cloud Translation API가 실행됩니다. `forum_translations` 테이블에 번역이 캐시되었습니다. 동일한 언어에 대한 후속 요청은 캐시에서 제공됩니다.
|||9월|||
**출처:**
- [Supabase 실시간](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [Supabase로 커뮤니티 포럼 구축](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
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
|||9월|||
## 9. AI 통합
|||9월|||
### 아키텍처: Vercel AI SDK + Claude API + Supabase pgVector RAG
|||9월|||
**데이터 흐름:**
````
사용자 질문(다국어)
  -> [Google 번역을 영어로] (영어가 아닌 경우)
  -> [임베딩 생성] (text-embedding-3-small)
  -> [Supabase pgVector 유사성 검색]
  -> [검색된 컨텍스트 문서]
  -> [시스템 프롬프트 + 컨텍스트 + 사용자 질문이 포함된 Claude API]
  -> [영어로 답변]
  -> [사용자 언어로 Google 번역] (영어가 아닌 경우)
  -> 사용자에게 표시(스트리밍)
````
|||9월|||
**Vercel AI SDK 설정:**
``배쉬
npm 설치 ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
````
|||9월|||
````타이프스크립트
// 앱/api/chat/route.ts
'@ai-sdk/anthropic'에서 { anthropic }을 가져옵니다.
'ai'에서 { streamText }를 가져옵니다.
|||9월|||
비동기 함수 내보내기 POST(req: Request) {
  const { 메시지, 로케일 } = req.json()을 기다립니다;
  const 결과 = streamText({
    모델: 인류학('claude-3-5-haiku-20241022'),
    시스템: SYSTEM_PROMPT,
    메시지: AugmentedMessage,
  });
  결과를 반환합니다.toDataStreamResponse();
}
````
|||9월|||
````타이프스크립트
// 클라이언트측: Components/AiChat.tsx
'클라이언트 사용';
'@ai-sdk/react'에서 { useChat }을 가져옵니다.

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

내보내기 함수 AiChat() {
  const { 메시지, 입력, handlerInputChange, handlerSubmit, isLoading } = useChat({
    API: '/api/채팅',
  });
  // 스트리밍 응답이 포함된 채팅 UI
}
````
|||9월|||
**Hackathon을 위한 Claude 모델 선택:**
|||9월|||
| 모델 | 입력/1M 토큰 | 출력/1M 토큰 | 최고의 대상 |
|-------|---|------|----------|
| 클로드 하이쿠 4.5 | $1.00 | $5.00 | **채팅 응답(권장)** |
| 클로드 소네트 4.5 | $3.00 | $15.00 | 복잡한 추론 |
| 클로드 오푸스 4.5 | $5.00 | $25.00 | 채팅에 과잉 |
|||9월|||
**권장 사항:** Claude Haiku 4.5 -- 빠르고(스트리밍을 위한 짧은 대기 시간), 저렴하며(해커톤 예산에 적합) 리소스 Q&A 및 일반 지침에 충분히 적합합니다.
|||9월|||
**시스템 프롬프트(건강 정보를 위한 안전 우선):**
````
당신은 자녀의 이민자 부모를 돕는 지원 AI 조수입니다
자폐 스펙트럼 장애(ASD)와 함께. 귀하는 다음에 대한 정보를 제공합니다.
- ASD 자원, 치료법 및 교육 프로그램
- 미국 의료 및 교육 시스템 탐색
- IEP(개별화 교육 프로그램) 프로세스
- 이용 가능한 정부 및 비영리 지원 프로그램
- 일반적인 발달 이정표
|||9월|||
중요 안전 지침:
- 당신은 의사가 아닙니다. 항상 의료 전문가와 상담하는 것이 좋습니다.
- 절대로 특정 의학적 치료법을 진단하거나 제안하지 마십시오.
- 의료/개발 주제를 논의할 때는 항상 면책조항을 포함하세요.
- 사용자가 응급 상황을 설명하는 경우 911에 전화하도록 안내합니다.
- 문화적으로 민감하고 가족 구조에 대한 가정을 피하십시오.
- 간단하고 명확한 언어를 사용하십시오.
- 확실하지 않을 때는 추측하기보다는 "모르겠어요"라고 말하세요.
- 개인 식별 정보를 수집하거나 요청하지 마십시오.
````
|||9월|||
**Supabase pgVector RAG 설정:**
``sql
존재하지 않는 경우 확장 생성 벡터;
|||9월|||
CREATE TABLE 리소스(
  ID UUID 기본 키 기본 gen_random_uuid(),
  제목 TEXT NOT NULL,
  내용 TEXT NOT NULL,
  카테고리 TEXT NOT NULL,
  source_url 텍스트,
  상태 텍스트,
  언어 TEXT DEFAULT 'en',
  임베딩 벡터(1536),
  create_at TIMESTAMPTZ DEFAULT NOW(),
  update_at TIMESTAMPTZ 기본 지금()
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

hnsw를 사용하여 리소스에 대한 인덱스 생성(벡터_코사인_ops 포함);
|||9월|||
함수 생성 또는 교체 match_resources(
  query_embedding 벡터(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETURNS TABLE(ID UUID, 제목 TEXT, 콘텐츠 TEXT, 카테고리 TEXT, 유사성 FLOAT)
언어 plpgsql AS $$
시작
  쿼리 반환
  SELECT r.id, r.title, r.content, r.category,
    1 - (r.embedding <=> query_embedding) AS 유사성
  FROM 리소스 r
  WHERE 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDER BY r.embedding <=> query_embedding
  제한적인 match_count;
끝;
$$;
````
|||9월|||
**임베딩 모델:** OpenAI `text-embedding-3-small`을 사용합니다($0.02/1M 토큰, 1536 차원, 더 나은 성능으로 ada-002보다 5배 저렴함).
|||9월|||
**해커톤 바로가기:** 자폐증, IEP, 치료 유형 및 지원 조직에 대해 선별된 20~50개의 리소스로 리소스 테이블을 미리 채웁니다. 전체 수집 파이프라인을 구축하는 대신 설정 중에 이에 대한 임베딩을 생성하세요.
|||9월|||
**출처:**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Next.js 가이드](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Claude API 가격](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude for Healthcare 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgVector](https://supabase.com/docs/guides/database/extensions/pgVector)
- [Supabase AI 및 벡터](https://supabase.com/docs/guides/ai)
- [OpenAI 임베딩](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small 대 ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Claude 및 pgVector를 사용하여 RAG 구축](https://www.tigerdata.com/blog/retrieval-augmented- Generation-with-claude-sonnet-3-5-and-pgVector)
- [Supabase pgVector를 사용한 RAG 챗봇](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgVector-and-nextjs)
|||9월|||
---
|||9월|||
## 10. 접근성
|||9월|||
### WCAG 2.2 AA 규정 준수 전략

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

**이 대상을 위한 주요 원칙:**
1. **인지적 접근성** -- 예측 가능한 레이아웃, 명확한 시각적 계층 구조(스트레스를 받거나 압도당하는 부모 및 자폐증 관련 고려 사항에 중요)
2. **낮은 읽고 쓰는 능력 지원** -- 시각적 단서, 텍스트 옆에 있는 아이콘, 간단한 언어
3. **다국어 접근성** -- 화면 판독기는 RTL 언어와 함께 작동해야 합니다.
4. **모터 접근성** -- 대형 터치 대상(WCAG 2.2당 최소 44x44px)
|||9월|||
**shadcn/ui + Radix를 통해 내장:**
- 모든 구성 요소에는 ARIA 역할/속성이 자동으로 포함됩니다.
- 키보드 탐색(Tab, Enter, Escape, 화살표 키)
- 모달의 포커스 관리 및 포커스 트래핑
- 동적 콘텐츠에 대한 스크린 리더 알림
- 유효성 검사 오류에 연결된 'aria-describedby'
- 양식 오류에 'aria-invalid'가 설정되었습니다.
|||9월|||
**추가 라이브러리:**
``배쉬
npm install -D @axe-core/react # 브라우저 콘솔에 a11y 문제를 기록합니다.
npm install -D eslint-plugin-jsx-a11y # a11y 문제에 대한 Lint
````
|||9월|||
**색상 대비:** WCAG AA에서는 일반 텍스트의 경우 4.5:1, 큰 텍스트의 경우 3:1이 필요합니다. 고대비 모드 토글을 제공합니다.
|||9월|||
**자폐증 관련 설계 고려 사항:**
- Sans-serif 글꼴(예: Inter, system-ui) -- 신경다양성 사용자가 읽기 더 쉽습니다.
- 모든 페이지에서 일관되고 예측 가능한 탐색
- 최소한의 애니메이션(`감소 모션 선호` 존중)
- 섹션 간의 명확한 시각적 경계
- 감각 과부하 방지(음소거된 색상, 깜박임 없음)
- 콘텐츠 단순화를 위한 간단한 언어 토글
|||9월|||
````타이프스크립트
// 구성 요소에서 모션 기본 설정을 존중합니다.
// <div className="motion-safe:animate-fadeIn Motion-reduce:opacity-100">
````
|||9월|||
**출처:**
- [React의 WCAG 2.2](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria(Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [색상 대비 WCAG 2025 가이드](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [React 접근성 모범 사례](https://rtcamp.com/handbook/react-best-practices/accessibility/)
|||9월|||
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

## 11. 배포
|||9월|||
### 권장 사항: Vercel 무료 등급
|||9월|||
**Vercel이 필요한 이유:** Next.js 제작자가 구축했습니다. 구성이 필요하지 않습니다. 배포하려면 'git push'만 하면 됩니다.
|||9월|||
**무료 등급 한도:**
- 100GB 대역폭/월
- 100K 서버리스 함수 호출/월
- 무제한 배포
- 10초 기능 제한 시간(AI 스트리밍에 충분)
- 맞춤형 도메인 지원
|||9월|||
**환경 변수:**
``배쉬
# .env.local (절대로 커밋하지 마세요)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=이제...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # 서버 측 전용
ANTHROPIC_API_KEY=sk-ant-... # 서버 측에서만
OPENAI_API_KEY=sk-... # 서버 측 전용(임베딩용)
GOOGLE_TRANSLATE_API_KEY=... # 서버 측에서만
````
|||9월|||
**중요:** `NEXT_PUBLIC_` 접두사가 붙은 변수는 브라우저에 노출됩니다. API 키에는 이 접두사가 없어야 합니다.
|||9월|||
**데모 팁:** Vercel에 조기에 배포하세요(처음 1시간 이내). 심사위원과 공유하려면 미리보기 URL을 사용하세요. 미리보기 배포에 비밀번호 보호를 사용할 수 있습니다.
|||9월|||
**출처:**
- [Vercel에 Next.js 배포](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Next.js 앱 배포 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [Vercel 환경변수](https://vercel.com/docs/environment-variables)

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
|||9월|||
## 12. 개인정보 보호 및 보안
|||9월|||
### 개인정보 보호를 고려한 설계 아키텍처
|||9월|||
**기본 원칙:** 이 앱은 취약 계층을 대상으로 합니다. 개인정보 침해는 실제적인 결과를 초래할 수 있습니다(서류미비 가족의 경우 추방 위험). 보안은 선택사항이 아닙니다.
|||9월|||
**HIPAA 고려 사항:** 앱은 적용 대상이 아니며 완전한 HIPAA 규정 준수가 필요하지 않을 가능성이 높습니다. 그러나 어린이의 건강 관련 정보를 저장하는 경우에는 민감한 정보로 취급하세요. 최선의 접근 방식: 서버측에 저장하는 내용을 최소화합니다.
|||9월|||
**COPPA 고려 사항(13세 미만 어린이):** 부모가 유일한 사용자인 경우 COPPA는 덜 제한적이지만 여전히 어린이 데이터 저장과 관련이 있습니다. 2025 COPPA 업데이트에는 더 엄격한 데이터 최소화 요구 사항이 도입되었습니다. **권장사항:** 어린이가 직접 사용하지 않고 부모만을 위한 앱을 디자인하세요.
|||9월|||
**데이터 아키텍처 - 저장할 위치:**
|||9월|||
| 데이터 유형 | 저장 위치 | 암호화 |
|------------|----|------------|
| 아이의 이름 | 클라이언트측(localStorage/IndexedDB) | 선택적 클라이언트 측 AES-256 |
| 아이의 진단 | 클라이언트 측 | AES-256 클라이언트 측 암호화 |
| 자녀의 기술/이정표 | Supabase(미사용 암호화됨) | 수퍼베이스 기본값 |
| 포럼 게시물 | 수파베이스 | 유휴 상태(Supabase 기본값) |
| AI 채팅 기록 | 클라이언트측 전용(sessionStorage) | 일시적이고 지속되지 않음 |
| 사용자가 선호하는 언어 | Supabase 사용자 메타데이터 | 표준 |
| 익명 사용자 토큰 | Supabase 인증 | JWT 표준 |

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

**RLS 정책:**
``sql
-- 사용자는 자신의 자녀 프로필만 볼 수 있습니다.
정책 만들기 "사용자는 자신의 자녀를 볼 수 있습니다."
  ON child_profiles FOR SELECT
  USING (auth.uid() = parent_id);
|||9월|||
-- 익명 사용자는 포럼 게시물을 읽을 수 있습니다.
정책 만들기 "누구나 게시물을 읽을 수 있습니다."
  ON forum_posts FOR SELECT
  USING (is_moderated = false);
|||9월|||
-- 인증된 사용자만 게시할 수 있습니다.
정책 만들기 "인증된 사용자가 게시할 수 있습니다"
  ON forum_posts 삽입용
  WITH CHECK(auth.uid()는 NULL이 아닙니다);
````
|||9월|||
**하지 말아야 할 것:**
- 이민 신분을 어디에도 저장하지 마세요.
- 실명이 필요하지 않습니다.
- 애플리케이션 로그에 IP 주소를 저장하지 마세요.
- 추적 분석을 사용하지 마십시오(Google Analytics 사용 안 함 - 그럴듯한 사용 또는 아무것도 사용하지 않음)
- AI 채팅 대화를 서버 측에 저장하지 마세요.
- 위치 서비스가 필요하지 않습니다.
|||9월|||
**출처:**
- [HIPAA 및 건강 앱](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [COPPA 규정 준수 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [영지식 건강 앱 가이드](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Supabase RLS 전체 가이드 2026](https://vibeappscanner.com/supabase-row-level-security)
|||9월|||
---
|||9월|||
## 13. 해커톤 전략 및 시간 예산
|||9월|||
### 10시간 구축 계획(오전 8시 30분 - 오후 6시 30분)

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

**기능 우선순위 지정(MoSCoW 방법):**
|||9월|||
| 우선순위 | 기능 | 상태 | 예상 시간 |
|----------|---------|---------|-----------|
| **반드시** | 다국어 UI(EN + ES + AR) | 완전히 구축 | 1시간 30분 |
| **반드시** | AI 채팅 도우미(RAG 포함) | 완전히 구축 | 2시간 |
| **반드시** | 리소스 라이브러리(탐색 가능 + 검색 가능) | 완전히 구축 | 1시간 |
| **반드시** | 익명 + 전화 인증 | 완전히 구축 | 1시간 |
| **반드시** | 기술 추적 기능이 있는 자녀 프로필 | 완전히 구축 | 1시간 30분 |
| **해야한다** | 커뮤니티 포럼 | 기본 빌드(실시간 아님) | 1시간 |
| **해야한다** | PWA 오프라인 액세스 | 빌드(Serwist 설정) | 0.5시간 |
| **할 수 있음** | 포럼 게시물 번역 | 모의 스텁 | 0.5시간 |
| **할 수 있음** | 다크 모드/고대비 | 빠른 토글 | 0.25시간 |
| **하지 않습니다** | 전체 조정 시스템 | 데모 모의 전용 | -- |
| **하지 않습니다** | 푸시 알림 | 완전히 건너뛰기 | -- |
| **하지 않습니다** | 비디오 콘텐츠 | 완전히 건너뛰기 | -- |
|||9월|||
### 상세 일정
|||9월|||
````
8:30 - 9:00 (30분) 프로젝트 설정
  - create-t3-app 또는 Nextbase 스타터가 포함된 스캐폴드
  - Supabase 프로젝트 생성 + 테이블
  - Vercel 배포 파이프라인(빈 셸 배포)
  - 코어 뎁스 설치
  - 환경 변수가 구성되었습니다.
|||9월|||
9:00 - 10:00 (60분) 기초
  - i18n이 포함된 레이아웃 구성요소(헤더, 탐색, 언어 전환기)
  - shadcn/ui 구성요소 설치됨
  - RTL 지원이 연결됨
  - Supabase 인증: 익명 + 이메일 로그인 UI
  - 번역 파일 구조 (EN + ES + AR)
|||9월|||
10:00 - 11:30(90분) 핵심 기능 #1: AI 채팅
  - Vercel AI SDK + Claude Haiku 설정
  - 스트리밍 채팅을 위한 API 경로
  - useChat 후크가 있는 채팅 UI 구성요소
  - 안전 가드 레일이 있는 시스템 프롬프트
  - pgVector에 20개의 리소스를 미리 채웁니다.
  - RAG 파이프라인(쿼리 삽입 -> 검색 -> 프롬프트 확대)
|||9월|||
11:30 - 12:00(30분) 오전 중반 배포 + 테스트
  - Vercel에 배포
  - 모바일에서 테스트
  - 중요한 버그 수정
|||9월|||
12:00 - 12:30 (30분) 점심

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

12:30 - 1:30(60분) 핵심 기능 #2: 리소스 라이브러리
  - 카테고리 필터링이 가능한 자원 카드
  - 검색 기능
  - 리소스 세부정보 페이지
  - 시드 데이터: 선별된 리소스 20~50개
|||9월|||
1:30 - 3:00(90분) 핵심 기능 #3: 자녀 프로필 + 기술
  - 자녀 프로필 작성 양식
  - 스킬 카드 구성 요소
  - 마일스톤 추적 UI
  - 민감한 데이터를 위한 클라이언트측 스토리지
  - 프로필 대시보드 보기
|||9월|||
3:00 - 4:00(60분) 기능 #4: 커뮤니티 포럼(기본)
  - 포럼 게시물 목록 보기
  - 게시물 양식 만들기
  - 기본 댓글 시스템
  - 카테고리별 구성
|||9월|||
4:00 - 4:30 (30분) PWA + 번역
  - Serwist 서비스 워커 설정
  - ES 및 AR 번역 키 입력
  - 아랍어로 RTL 레이아웃 테스트
|||9월|||
4:30 - 5:30 (60분) 폴란드어 및 데모 준비
  - UI 버그 수정
  - 로딩 상태 및 오류 처리 추가
  - 고대비 모드 토글(시간이 있는 경우)
  - 프레젠테이션을 위해 스크린샷을 찍으세요.
  - 데모 영상 백업 녹화
|||9월|||
5:30 - 6:00(30분) 최종 배포 + 프레젠테이션
  - 최종 Vercel 배포
  - 모든 기능을 엔드 투 엔드로 테스트
  - 3분 피치 스크립트 준비
|||9월|||
6:00 - 6:30 (30분) 버퍼링/프레젠테이션
````
|||9월|||
### 조롱/스텁할 내용:
- **포럼 조정:** 신고된 게시물을 플래그로 숨기기만 하면 됩니다. 관리 패널은 없습니다.
- **포럼 번역:** "번역" 버튼을 누르면 원본 텍스트가 로드된 후 표시됩니다(시간이 지나면 Google 번역).
- **비밀번호 재설정 흐름:** Supabase 기본 이메일 사용
- **사용자 아바타:** 이니셜 또는 기본 아이콘, 업로드 없음
- **관리 대시보드:** 완전히 건너뛰기

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

### 데모 최적화 팁:
1. **이야기 시작** -- "막 미국으로 이주한 시리아인 어머니 파티마를 만나보세요. 그녀의 4살짜리 아들은 최근 자폐증 진단을 받았습니다. 파티마는 영어를 하지 못합니다. 어디서부터 시작해야 할지 모릅니다."
2. **언어 전환 표시** -- 영어에서 아랍어로 라이브로 전환합니다. RTL 플립은 심사위원들에게 시각적으로 인상적이었습니다.
3. **AI 채팅 시연** -- 스페인어로 질문하세요. 자원을 제공하는 모습을 보여주세요.
4. **오프라인 기능 표시** -- Wi-Fi를 끄고 앱이 계속 작동함을 보여줍니다.
5. **개인정보 보호 강조** -- "실명이 필요하지 않습니다. 이메일도 필요하지 않습니다. 이 앱을 안전하게 사용할 수 있습니다."
|||9월|||
**출처:**
- [36시간 만에 제로에서 데모까지](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [MVP 기능 우선순위](https://gainhq.com/blog/mvp-feature-prioritization/)
- [해커톤 데모 팁(Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [해커톤 피치덱 가이드](https://www.inknarrates.com/post/hackathon-pitch-deck)
|||9월|||
---
|||9월|||
## 14. 보일러플레이트 및 템플릿
|||9월|||
### 옵션 1: create-t3-app (tRPC에 익숙한 팀에 권장)
``배쉬
npx create-t3-app@latest 자폐증-bridge --typescript --tailwind --trpc --prisma
````
- GitHub: https://github.com/t3-oss/create-t3-app
- 포함: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- 추가: Supabase, next-intl, shadcn/ui, Vercel AI SDK
|||9월|||
### 옵션 2: Nextbase Starter(간단한 설정을 위해 권장)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- 포함: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query
- 추가: next-intl, shadcn/ui, Vercel AI SDK, Prisma(선택 사항)
|||9월|||
### 옵션 3: Vercel Supabase 스타터
- 템플릿: https://vercel.com/templates/next.js/supabase
- SSR 인증이 포함된 공식 Vercel/Supabase 템플릿
|||9월|||
### 옵션 4: 초차단 스타터
- GitHub: https://github.com/michaeltroya/supa-next-starter
- 포함: Next.js, Supabase, Tailwind, shadcn/ui(이미 통합됨)

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

### 스캐폴딩 후에 다음을 추가합니다.
``배쉬
npm은 다음-intl rtl-탐지를 설치합니다.
npm 설치 ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm install @serwist/next @serwist/precaching @serwist/sw
npx shadcn@최신 초기화
npx shadcn@latest 추가 버튼 카드 대화 상자 입력 양식 시트 탭 아바타 배지 아코디언 명령 토스트
npm install -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-Detect
````
|||9월|||
### 참조 프로젝트:
- **supabase-comments-extension** (GitHub: Malerba118/supabase-comments-extension) -- 댓글, 답글, 반응
- **ojasskapre/nextjs-starter-template** -- Next.js + Supabase + LLM 채팅 인터페이스
- **shwosner/realtime-chat-supabase-react** -- Supabase와의 실시간 채팅
|||9월|||
---
|||9월|||
## 15. 스키마 디자인
|||9월|||
### 완전한 Prisma 스키마
|||9월|||
``프리즈마
생성기 클라이언트 {
  공급자 = "prisma-client-js"
}
|||9월|||
데이터 소스 DB {
  공급자 = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
|||9월|||
// 사용자 및 인증
모델 사용자 프로필 {
  id 문자열 @id @default(uuid())
  authId 문자열 @unique
  디스플레이이름 문자열?
  PreferredLocale 문자열 @default("en")
  생성된 날짜/시간 @default(now())
  업데이트된 날짜/시간 @updatedAt
  어린이 ChildProfile[]
  포럼게시물 포럼포스트[]
  포럼댓글 포럼댓글[]
  찬성 투표 포럼Upvote[]
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

// 자녀 프로필 및 기술 추적
모델 ChildProfile {
  id 문자열 @id @default(uuid())
  parentId 문자열
  상위 UserProfile @relation(필드: [parentId], 참조: [id])
  별명 문자열
  출생연도 정수?
  진단날짜 날짜시간?
  스킬 SkillCard[]
  이정표 이정표[]
  생성된 날짜/시간 @default(now())
  업데이트된 날짜/시간 @updatedAt
  @@index([부모ID])
}
|||9월|||
모델 SkillCategory {
  id 문자열 @id @default(uuid())
  nameKey 문자열
  아이콘 문자열?
  sortOrder Int @default(0)
  스킬 SkillCard[]
}
|||9월|||
모델 SkillCard {
  id 문자열 @id @default(uuid())
  childId 문자열
  child ChildProfile @relation(필드: [childId], 참조: [id], onDelete: Cascade)
  카테고리ID 문자열
  카테고리 SkillCategory @relation(필드: [categoryId], 참조: [id])
  nameKey 문자열
  레벨 Int @default(0)
  메모 문자열?
  마지막 평가 날짜/시간 @default(now())
  생성된 날짜/시간 @default(now())
  업데이트된 날짜/시간 @updatedAt
  @@index([childId])
  @@index([카테고리Id])
}
|||9월|||
모델 마일스톤 {
  id 문자열 @id @default(uuid())
  childId 문자열
  child ChildProfile @relation(필드: [childId], 참조: [id], onDelete: Cascade)
  title키 문자열
  설명 문자열?
  달성 날짜 날짜/시간?
  카테고리 문자열
  생성된 날짜/시간 @default(now())
  @@index([childId])
}
|||9월|||
// RESOURCES(원시 SQL/pgVector를 통해 처리되는 벡터 임베딩)
모델 리소스 {
  id 문자열 @id @default(uuid())
  제목 문자열
  콘텐츠 문자열 @db.Text
  요약 문자열?
  카테고리 문자열
  하위 카테고리 문자열?
  sourceUrl 문자열?
  상태 문자열?
  언어 문자열 @default("en")
  태그 문자열[]
  생성된 날짜/시간 @default(now())
  업데이트된 날짜/시간 @updatedAt
  @@index([범주])
  @@index([상태])
}
|||9월|||
// 포럼 / 커뮤니티
모델 포럼카테고리 {
  id 문자열 @id @default(uuid())
  nameKey 문자열
  설명키 문자열?
  아이콘 문자열?
  sortOrder Int @default(0)
  게시물 포럼게시물[]
}
|||9월|||
모델 포럼포스트 {
  id 문자열 @id @default(uuid())
  카테고리ID 문자열
  카테고리 ForumCategory @relation(필드: [categoryId], 참조: [id])
  작성자 ID 문자열
  작성자 UserProfile @relation(필드: [authorId], 참조: [id])
  isAnonymous 부울 @default(false)
  제목 문자열
  콘텐츠 문자열 @db.Text
  OriginalLang 문자열 @default("en")
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  isPinned 부울 @default(false)
  isHidden 부울 @default(false)
  reportCount Int @default(0)
  댓글 포럼댓글[]
  찬성 투표 포럼Upvote[]
  번역 포럼번역[]
  생성된 날짜/시간 @default(now())
  업데이트된 날짜/시간 @updatedAt
  @@index([카테고리Id])
  @@index([저자Id])
  @@index([createdAt])
}
|||9월|||
모델 포럼댓글 {
  id 문자열 @id @default(uuid())
  postId 문자열
  post ForumPost @relation(필드: [postId], 참조: [id], onDelete: Cascade)
  parentId 문자열?
  상위 포럼댓글? @relation("CommentReplies", 필드: [parentId], 참조: [id])
  답글 ForumComment[] @relation("CommentReplies")
  작성자 ID 문자열
  작성자 UserProfile @relation(필드: [authorId], 참조: [id])
  isAnonymous 부울 @default(false)
  콘텐츠 문자열 @db.Text
  OriginalLang 문자열 @default("en")
  upvoteCount Int @default(0)
  isHidden 부울 @default(false)
  reportCount Int @default(0)
  찬성 투표 포럼Upvote[]
  번역 포럼번역[]
  생성된 날짜/시간 @default(now())
  @@index([포스트ID])
  @@index([부모ID])
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

모델 ForumUpvote {
  id 문자열 @id @default(uuid())
  사용자 ID 문자열
  사용자 UserProfile @relation(필드: [userId], 참조: [id])
  postId 문자열?
  포럼포스트 게시? @relation(필드: [postId], 참조: [id], onDelete: Cascade)
  commentId 문자열?
  댓글 포럼댓글? @relation(필드: [commentId], 참조: [id], onDelete: Cascade)
  생성된 날짜/시간 @default(now())
  @@unique([userId, postId])
  @@unique([userId, commentId])
}
|||9월|||
모델 ForumTranslation {
  id 문자열 @id @default(uuid())
  postId 문자열?
  포럼포스트 게시? @relation(필드: [postId], 참조: [id], onDelete: Cascade)
  commentId 문자열?
  댓글 포럼댓글? @relation(필드: [commentId], 참조: [id], onDelete: Cascade)
  targetLang 문자열
  번역된 제목 문자열?
  번역된 콘텐츠 문자열 @db.Text
  생성된 날짜/시간 @default(now())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
````
|||9월|||
### 시드 데이터 카테고리
|||9월|||
**기술 카테고리:** 의사소통, 사회적 기술, 일상 생활, 운동 기술, 학업, 감각 처리, 감정 조절
|||9월|||
**포럼 카테고리:** 소개 및 환영, 치료 및 치료(ABA/OT/연설), 학교 및 IEP 도움말, 일상 생활 팁, 법률 및 이민 질문, 의료 탐색, 성공 사례 및 이정표, 일반 지원
|||9월|||
**리소스 카테고리:** 치료 유형 및 제공자, 교육 및 IEP 리소스, 법적 권리 및 옹호, 재정 지원, 지역 사회 조직, 온라인 도구 및 앱, 도서 및 미디어, 주별 리소스
|||9월|||
---
|||9월|||
## PACKAGE.JSON 종속성 요약

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

``json
{
  "종속성": {
    "다음": "^16.0.0",
    "반응": "^19.0.0",
    "반응 돔": "^19.0.0",
    "typescript": "^5.7.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "프리즈마": "^6.0.0",
    "@prisma/client": "^6.0.0",
    "next-intl": "^4.0.0",
    "rtl-검출": "^1.1.2",
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
  "devDependency": {
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "@types/rtl-Detect": "^1.0.0"
  }
}
````
|||9월|||
---
|||9월|||
## 빠른 참조: 주요 문서 링크
|||9월|||
| 도구 | 문서 |
|------|--------------|
| Next.js 16 | https://nextjs.org/docs |
| 수파베이스 | https://supabase.com/docs |
| 수파베이스 인증 | https://supabase.com/docs/guides/auth |
| Supabase 실시간 | https://supabase.com/docs/guides/realtime |
| 수파베이스 pgVector | https://supabase.com/docs/guides/ai |
| 다음 국제 | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| Vercel AI SDK | https://ai-sdk.dev/docs/introduction |
| 클로드 API | https://platform.claude.com/docs |
| 프리즈마 | https://www.prisma.io/docs |
| 서위스트 PWA | https://serwist.pages.dev/docs/next/getting-started |
| 순풍 CSS | https://tailwindcss.com/docs |
| Google 클라우드 번역 | https://cloud.google.com/translate/docs |
| OpenAI 임베딩 | https://platform.openai.com/docs/guides/embeddings |
| Vercel 배포 | https://vercel.com/docs |
|||9월|||
---
|||9월|||
이 연구에서는 귀하가 요청한 10가지 영역과 해커톤 전략, 개인 정보 보호 아키텍처, 상용구 옵션 및 전체 스키마 디자인을 모두 다루고 있습니다. 스택은 모든 서비스가 해커톤의 무료 계층에 적합하고, 인증은 문서화되지 않은 사용자의 개인 정보를 보호하며, 시간 예산은 10시간 빌드에 현실적이도록 설계되었습니다. 이것을 `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md`에 파일로 저장하려고 시도했지만 파일 쓰기 권한이 거부되었습니다. 이 파일을 디스크에 저장하려면 쓰기 권한을 부여하시면 됩니다. 그러면 제가 파일을 생성해 드리겠습니다.
---
|||9월|||
## 추가 연구(2026년 3월 업데이트)
|||9월|||
### 10개 이상의 언어를 위한 최고의 i18n 라이브러리(React + TypeScript)

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

**권장: React-i18next** — 주간 다운로드 210만 건, 가장 인기 있는 React i18n 솔루션.
- 언어 감지, 비동기 로딩, 복합 복수형 플러그인을 갖춘 i18next 생태계를 기반으로 구축되었습니다.
- 번들: 22.2kB(i18next 15.1kB + React-i18next 7.1kB)
- JSON 번역 파일 지원 - 언어를 점진적으로 추가하기 쉽습니다.
- 출처: [Phrase 블로그](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)
|||9월|||
**경량 대안: LinguiJS** — 총 10.4kB(크기의 절반), ICU 메시지 구문, TypeScript 지원.
|||9월|||
**해커톤 속도를 위해**: JSON 번역 파일이 포함된 반응-i18next. 영어 + 스페인어로 시작하고 JSON 파일을 통해 다른 언어를 추가하세요. 초기 번역에는 Google Translate API 또는 DeepL을 사용하세요.
|||9월|||
출처: [GloryWebs 2026 가이드](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)
|||9월|||
### Supabase 무료 등급 제한(2026)
|||9월|||
- **2개의 활성 프로젝트**(1주 동안 활동이 없으면 일시 중지됨)
- **500MB** 데이터베이스 스토리지(공유 CPU)
- **2GB** 데이터베이스 송신/월
- **50,000** 월간 활성 사용자(인증)
- **1GB** 파일 저장 공간
- **2GB** 스토리지 송신
- **500,000** 에지 함수 호출/월
- 무료 플랜에는 백업 없음, SLA 없음
|||9월|||
출처: [Supabase 가격](https://supabase.com/pricing), [UI 베이커리 분석](https://uibakery.io/blog/supabase-pricing)
|||9월|||
**해커톤**: 500MB면 충분합니다. 10,000명의 사용자가 각각 프로필 + 하위 데이터 + 포럼 게시물을 저장하더라도 50MB 미만을 사용하게 됩니다. 50K MAU 인증 제한도 데모에 매우 관대합니다.

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
