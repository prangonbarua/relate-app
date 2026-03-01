# Nghiên cứu ngăn xếp công nghệ Hackathon: Cha mẹ nhập cư + Ứng dụng tự kỷ
|||Tháng Chín|||
**Ngày:** 2026-02-28 | **Thời gian xây dựng:** 10 giờ (8:30 sáng - 6:30 chiều)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 1. TÓM TẮT NGỒI ĐỀ XUẤT
|||Tháng Chín|||
| Lớp | Công nghệ | Tại sao |
|-------|----------||------|
| **Khung** | Next.js 16 (Bộ định tuyến ứng dụng) | SSR cho SEO, các tuyến API, hỗ trợ PWA, triển khai Vercel |
| **Giàn giáo** | `create-t3-app` hoặc bộ khởi động Nextbase | Đường dẫn nhanh nhất để gõ full-stack |
| **Ngôn ngữ** | TypeScript xuyên suốt | An toàn loại đầu cuối |
| **API phụ trợ** | tRPC (thông qua ngăn xếp T3) HOẶC các tuyến API Next.js + ứng dụng khách Supabase | Loại an toàn, không có bản soạn sẵn |
| **Cơ sở dữ liệu** | Supabase (PostgreSQL) | Cấp miễn phí, xác thực, thời gian thực, pgvector, RLS |
| **ORM** | Prisma | Các loại được tạo tự động, công cụ di chuyển |
| **Xác thực** | Supabase xác thực | Đăng nhập ẩn danh, OTP qua điện thoại, email/mật khẩu, không cần PII |
| **i18n** | intl tiếp theo | Tích hợp Next.js gốc, hỗ trợ RSC, gói nhỏ, hỗ trợ RTL |
| **Giao diện người dùng** | shadcn/ui + CSS Tailwind | Các thành phần sao chép-dán, toàn quyền sở hữu, Radix a11y, sẵn sàng RTL |
| **Trò chuyện AI** | Vercel AI SDK + API Claude (Haiku 4.5) | Truyền phát, sử dụngChat hook, tiết kiệm chi phí |
| **Vectơ DB** | Supabase pgvector | Cơ sở dữ liệu tương tự, không có dịch vụ bổ sung, RLS trên vectơ |
| **Nhúng** | OpenAI văn bản-nhúng-3-nhỏ | 0,02 USD/1 triệu token, rẻ hơn 5 lần so với ada-002 |
| **API dịch** | API dịch thuật trên đám mây của Google | 500K ký tự miễn phí/tháng, hơn 130 ngôn ngữ, không lưu trữ dữ liệu |
| **PWA** | Serwist (@serwist/next) | Người kế nhiệm pwa tiếp theo hiện đại, hỗ trợ ngoại tuyến |
| **Triển khai** | Vercel (cấp miễn phí) | Triển khai Next.js không cấu hình, băng thông 100GB |
| **Diễn đàn** | Tùy chỉnh với Supabase Realtime | Cập nhật theo thời gian thực, RLS để kiểm duyệt |
|||Tháng Chín|||
**Tổng chi phí ước tính hàng tháng (Hackathon/Demo): $0** -- Tất cả các dịch vụ trên đều có đủ cấp miễn phí cho bản demo hackathon.
|||Tháng Chín|||
---
|||Tháng Chín|||
## 2. KHUNG PHẢN ỨNG

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

### Khuyến nghị: Next.js 16 (Bộ định tuyến ứng dụng)
|||Tháng Chín|||
**Tại sao Next.js thay vì Vite+React cho ứng dụng NÀY:**
- SSR/SSG cho SEO (quan trọng đối với các trang tài nguyên mà các bậc cha mẹ nhập cư có thể tìm thấy trên Google)
- Các tuyến API tích hợp loại bỏ nhu cầu về máy chủ phụ trợ riêng biệt
- Bộ định tuyến ứng dụng có Thành phần máy chủ React = không có JS ứng dụng khách cho nội dung được dịch
- Hỗ trợ bảng kê khai PWA gốc thông qua `app/manifest.ts`
- Triển khai Vercel không có cấu hình
- next-intl hoạt động nguyên bản với RSC (bản dịch được hiển thị phía máy chủ = 0 byte cho máy khách)
|||Tháng Chín|||
**Khi nào Vite sẽ tốt hơn:**
- SPA thuần túy không cần SEO
- Khởi động máy chủ nhà phát triển nhanh hơn (lợi ích cận biên cho cuộc thi hackathon kéo dài 10 giờ)
- Mô hình tinh thần đơn giản hơn (không phân biệt thành phần máy chủ/máy khách)
|||Tháng Chín|||
**Thiết lập PWA với Serwist (người kế thừa pwa tiếp theo):**
``` bash
npm cài đặt @serwist/next @serwist/precaching @serwist/sw idb
```
|||Tháng Chín|||
Các chiến lược ngoại tuyến chính:
- **CacheFirst** cho nội dung tĩnh (`/_next/static/`) -- nội dung được băm, không bao giờ thay đổi
- **NetworkFirst** dành cho phản hồi API và nội dung động
- **StalewhileRevalidate** cho các tệp dịch và trang tài nguyên
- IndexedDB để lưu trữ dữ liệu ngoại tuyến (hồ sơ con, tài nguyên đã lưu)
|||Tháng Chín|||
**QUAN TRỌNG:** Next.js 16 sử dụng Turbopack theo mặc định, nhưng Serwist yêu cầu Webpack. Bạn sẽ cần phải cấu hình bản dựng cho phù hợp.
|||Tháng Chín|||
**PWA Manifest** (hỗ trợ Next.js tích hợp sẵn):
``` bản đánh máy
// ứng dụng/manifest.ts
nhập loại { MetadataRoute } từ 'next'
|||Tháng Chín|||
xuất tệp kê khai hàm mặc định(): MetadataRoute.Manifest {
  trở về {
    tên: 'Cầu ASD',
    short_name: 'Cầu ASD',
    mô tả: 'Hỗ trợ các gia đình nhập cư có trẻ tự kỷ',
    start_url: '/',
    hiển thị: 'độc lập',
    nền_color: '#ffffff',
    theme_color: '#4F46E5',
    biểu tượng: [
      { src: '/icon-192.png', kích thước: '192x192', gõ: 'hình ảnh/png' },
      { src: '/icon-512.png', kích thước: '512x512', gõ: 'hình ảnh/png' },
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

**Nguồn:**
- [So sánh hoàn chỉnh Vite và Next.js 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Hướng dẫn PWA Next.js](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Bắt đầu Serwist](https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA với Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Xây dựng PWA trong Next.js bằng Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 3. PHỤ TRỢ BẢNG TYPE
|||Tháng Chín|||
### Đề xuất: Các tuyến API Next.js + Máy khách Supabase (chính) HOẶC tRPC (nếu sử dụng T3)
|||Tháng Chín|||
**Tùy chọn A: Các tuyến API Next.js + Supabase (ĐƠN GIẢN cho hackathon)**
- Không có máy chủ phụ trợ riêng biệt
- Máy khách Supabase JS xử lý các truy vấn DB, xác thực, thời gian thực
- Các tuyến API để trò chuyện AI, lệnh gọi API dịch và mọi logic phía máy chủ
- Thiết lập nhanh nhất
|||Tháng Chín|||
**Tùy chọn B: tRPC qua T3 Stack (DX TỐT NHẤT nếu nhóm biết điều đó)**
- Loại an toàn end-to-end giữa frontend và backend
- Tự động hoàn thành các lệnh gọi API ở giao diện người dùng
- Hoạt động với Prisma cho các loại được tạo
- `create-t3-app` xây dựng mọi thứ
|||Tháng Chín|||
``` bash
# Tùy chọn A: Plain Next.js + Supabase
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
|||Tháng Chín|||
# Lựa chọn B: Ngăn xếp T3
npx create-t3-app@latest my-app
# Chọn: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
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

**Tại sao KHÔNG Express/Fastify:**
- Thêm độ phức tạp triển khai (máy chủ riêng biệt với máy chủ)
- Không có lợi ích gì đối với các tuyến API Next.js cho trường hợp sử dụng này
- Thêm 30-60 phút thiết lập mà bạn không có
|||Tháng Chín|||
**Tại sao KHÔNG phải là Serverless (Chức năng Lambda/Netlify):**
- Theo mặc định, các tuyến API Next.js trên Vercel LÀ không có máy chủ
- Không cần hạ tầng chức năng riêng biệt
|||Tháng Chín|||
**Nguồn:**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [Hướng dẫn T3 Stack 2025](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Tạo ứng dụng T3](https://create.t3.gg/)
- [tRPC chính thức](https://trpc.io/)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 4. CƠ SỞ DỮ LIỆU
|||Tháng Chín|||
### Khuyến nghị: Supabase (PostgreSQL)
|||Tháng Chín|||
**Tại sao Supabase chiến thắng cho dự án này:**
|||Tháng Chín|||
| Tính năng | Supabase | Căn cứ hỏa lực | Quy mô hành tinh |
|----------|----------|----------|-------------|
| Lưu trữ cơ sở dữ liệu bậc miễn phí | 500 MB | 1 GB (Tia lửa) | Cấp miễn phí đã ngừng cung cấp |
| Đã bao gồm xác thực | Có (miễn phí 50K MAU) | Có (miễn phí 50K MAU) | Không |
| Thời gian thực | Có (Thay đổi của Postgres) | Có (tốt nhất trong lớp) | Không |
| Tìm kiếm vectơ (pgvector) | Có, tích hợp sẵn | Không | Không |
| Hỗ trợ SQL | PostgreSQL đầy đủ | Chỉ NoSQL | MySQL |
| RLS (Bảo mật cấp hàng) | Có, dựa trên SQL | Quy tắc bảo mật của Firebase | Không |
| Xác thực ẩn danh | Có, tích hợp sẵn | Có | Không áp dụng |
| Mã nguồn mở | Có | Không | Một phần |
| Khả năng di chuyển dữ liệu | Đầy đủ (đó là Postgres) | Khóa nhà cung cấp | Tương thích với MySQL |

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

**Cấp miễn phí Supabase (2026):**
- 2 dự án đang hoạt động
- Dung lượng lưu trữ cơ sở dữ liệu 500 MB
- Đầu ra cơ sở dữ liệu 2 GB
- 50.000 MAU (xác thực)
- Dung lượng lưu trữ tệp 1 GB
- 500.000 lời gọi hàm cạnh
- Không cần thẻ tín dụng, không bao giờ hết hạn
|||Tháng Chín|||
**Tại sao Supabase thay vì Firebase cho ứng dụng NÀY:**
1. pgvector để tìm kiếm tài nguyên AI (không cần dịch vụ bổ sung)
2. SQL đầy đủ cho các truy vấn phức tạp (các cột mốc con, theo dõi kỹ năng)
3. RLS để truy cập diễn đàn ẩn danh đảm bảo quyền riêng tư
4. Tính di động của dữ liệu (không bị khóa trong hệ sinh thái Google)
5. Tốt hơn cho dữ liệu quan hệ (người dùng -> trẻ em -> kỹ năng -> cột mốc)
|||Tháng Chín|||
**Tích hợp Prisma:**
``` lăng kính
nguồn dữ liệu db {
  nhà cung cấp = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```
|||Tháng Chín|||
**Nguồn:**
- [Đánh giá Supabase vs Firebase 2026](https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-which-one-actually-scales-with-you-2374)
- [Giá Supabase 2026](https://uibakery.io/blog/supabase-pricing)
- [Giới hạn bậc miễn phí của Supabase](https://supabase.com/pricing)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 5. XÁC THỰC
|||Tháng Chín|||
### Khuyến nghị: Supabase Auth với đăng nhập ẩn danh + OTP điện thoại + Email/Mật khẩu
|||Tháng Chín|||
**NGUYÊN TẮC THIẾT KẾ QUAN TRỌNG dành cho đối tượng này:**
Ứng dụng phải có thể sử dụng được mà KHÔNG cung cấp thông tin nhận dạng cá nhân. Nhiều bậc cha mẹ nhập cư (đặc biệt là không có giấy tờ) sẽ không sử dụng ứng dụng yêu cầu ID/SSN do chính phủ cấp, xác minh tên thật, thu thập địa chỉ hoặc email bắt buộc.

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

**Cấp xác thực (Tin cậy lũy tiến):**
|||Tháng Chín|||
| Bậc | Phương pháp | Nó mở khóa những gì | Yêu cầu PII |
|------|--------|-------|--------------|
| 1 | Đăng nhập ẩn danh | Duyệt tài nguyên, sử dụng trò chuyện AI, xem diễn đàn | Không có |
| 2 | Điện thoại OTP | Đăng lên diễn đàn, lưu hồ sơ con | Chỉ số điện thoại |
| 3 | Email + mật khẩu | Toàn bộ tài khoản có phục hồi | Địa chỉ email |
|||Tháng Chín|||
**Xác thực ẩn danh Supabase:**
``` bản đánh máy
// Đăng nhập ẩn danh -- không cần PII
const { dữ liệu, lỗi } = đang chờ supabase.auth.signInAnonymous()
|||Tháng Chín|||
// Sau đó, người dùng có thể liên kết một số điện thoại
const { dữ liệu, lỗi } = đang chờ supabase.auth.updateUser({
  điện thoại: '+1234567890',
})
```
|||Tháng Chín|||
**Cài đặt OTP điện thoại:**
Supabase hỗ trợ xác thực điện thoại thông qua Twilio, MessageBird, Textlocal và Vonage. Người dùng nhận được mã PIN gồm 6 chữ số qua SMS, có hiệu lực trong 60 giây.
|||Tháng Chín|||
**Bảo mật cho người dùng ẩn danh:**
- Kích hoạt CAPTCHA (Khuyến nghị sử dụng Cloudflare Turnstile -- miễn phí) để tránh lạm dụng
- Giới hạn tốc độ dựa trên IP: 30 yêu cầu/giờ (có thể điều chỉnh trong bảng điều khiển Supabase)
- Chính sách RLS có thể phân biệt người dùng ẩn danh và người dùng được xác thực thông qua xác nhận quyền sở hữu JWT `is_anonymous`
|||Tháng Chín|||
**Tại sao KHÔNG Thư ký cho ứng dụng này:**
- Không có đăng nhập ẩn danh tích hợp
- 0,02 USD/MAU sau 10K (Supabase: miễn phí 50K)
- Giao diện người dùng quá mức cần thiết cho trường hợp sử dụng này
- Thêm phụ thuộc bên ngoài
|||Tháng Chín|||
**Tại sao KHÔNG Auth0:**
- Thiết lập phức tạp cho hackathon
- Không có xác thực ẩn danh
- Cấp miễn phí giới hạn ở 7.500 MAU

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

**Nguồn:**
- [Đăng nhập ẩn danh Supabase](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Đăng nhập điện thoại Supabase](https://supabase.com/docs/guides/auth/phone-login)
- [Thư ký vs Supabase Auth](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [Bảo mật khi đăng nhập ẩn danh](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 6. QUỐC TẾ HÓA (i18n)
|||Tháng Chín|||
### Khuyến nghị: next-intl
|||Tháng Chín|||
**Tại sao next-intl thay vì Reac-i18next hoặc Reac-intl:**
|||Tháng Chín|||
| Tính năng | intl tiếp theo | Reac-i18next | phản ứng-intl |
|----------|-------------|---------------|-------------|
| Hỗ trợ Bộ định tuyến ứng dụng Next.js | Bản địa | Qua trình bao bọc | Qua trình bao bọc |
| Hỗ trợ thành phần máy chủ | Tích hợp sẵn (0 khách hàng JS) | Yêu cầu thiết lập | Yêu cầu thiết lập |
| Kích thước gói | ~4KB | ~8KB | ~12KB |
| Hỗ trợ RTL | Tích hợp | Hướng dẫn sử dụng | Hướng dẫn sử dụng |
| Dạng số nhiều (tiếng Ả Rập: 6 dạng) | ICU tự động | Cấu hình thủ công | ICU tự động |
| Loại an toàn | TypeScript đầu tiên | Tốt | Tốt |
|||Tháng Chín|||
**Cài đặt:**
``` bash
npm cài đặt next-intl rtl-phát hiện
cài đặt npm --save-dev @types/rtl-Detect
```
|||Tháng Chín|||
**Thiết lập RTL cho tiếng Ả Rập, tiếng Farsi, tiếng Urdu:**
``` bản đánh máy
// hooks/useTextDirection.ts
nhập { useLocale } từ 'next-intl';
nhập { isRtlLang } từ 'rtl-Detect';

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

hàm xuất useTextDirection() {
  const locale = useLocale();
  trả về isRtlLang(locale) ? 'rtl' : 'ltr';
}
|||Tháng Chín|||
// app/[locale]/layout.tsx
xuất hàm mặc định LocaleLayout({ Children, params: { locale } }) {
  hướng const = isRtlLang(locale) ? 'rtl' : 'ltr';
  trở lại (
    <html lang={locale} dir={direction}>
      <body>{trẻ em</body>
    </html>
  );
}
```
|||Tháng Chín|||
**Cấu trúc tệp dịch:**
```
tin nhắn/
  vi/
    common.json # Chuỗi giao diện người dùng được chia sẻ (nút, điều hướng, lỗi)
    auth.json # Đăng nhập, đăng ký, hồ sơ
    Resources.json # Thư viện tài nguyên
    forum.json # Diễn đàn/cộng đồng
    ai-chat.json # Trợ lý AI
    child-profile.json # Theo dõi trẻ em
    Skills.json # Thẻ kỹ năng
  ar/ # Ả Rập (RTL)
  es/ # tiếng Tây Ban Nha
  zh/ # Tiếng Trung (Giản thể)
  fa/ # Tiếng Farsi/Tiếng Ba Tư (RTL)
  bạn/ # tiếng Urdu (RTL)
```
|||Tháng Chín|||
**Ngôn ngữ ưu tiên dành cho MVP:** Tiếng Anh (mặc định), tiếng Tây Ban Nha, tiếng Ả Rập (RTL để thể hiện năng lực kỹ thuật), tiếng Trung (Giản thể).
|||Tháng Chín|||
**CSS cho RTL -- sử dụng các thuộc tính logic của Tailwind:**
- `pl-4` -> `ps-4` (đệm-nội tuyến-bắt đầu)
- `pr-4` -> `pe-4` (đệm-nội tuyến-cuối)
- `text-left` -> `text-start`
- `văn bản bên phải` -> `cuối văn bản`
- `ml-auto` -> `ms-auto`
- `mr-auto` -> `me-auto`
|||Tháng Chín|||
**Dịch máy cho nội dung diễn đàn:**
|||Tháng Chín|||
| Dịch vụ | Cấp miễn phí | Giá Sau Miễn phí | Ngôn ngữ | Quyền riêng tư |
|----------|-------------|--------|----------|----------|
| Dịch thuật trên đám mây của Google | 500K ký tự/tháng (vĩnh viễn) | $20/1 triệu ký tự | 130+ | Không có dữ liệu được lưu trữ/sử dụng cho đào tạo |
| DeepL | 500K ký tự/tháng | 25 USD/1 triệu ký tự + 5,49 USD/tháng | 30+ | Dữ liệu bậc miễn phí có thể được lưu trữ |
| Amazon Dịch | 2 triệu ký tự/tháng (chỉ 12 tháng) | $15/1 triệu ký tự | 75+ | Không có dữ liệu được lưu trữ |
|||Tháng Chín|||
**Đề xuất:** Google Cloud Translation API -- bậc miễn phí vĩnh viễn, phạm vi ngôn ngữ lớn nhất (hơn 130 ngôn ngữ bao gồm tất cả ngôn ngữ RTL mục tiêu), đảm bảo quyền riêng tư mạnh mẽ (không lưu trữ hoặc sử dụng dữ liệu cho hoạt động đào tạo).

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

**Nguồn:**
- [Tài liệu next-intl](https://next-intl.dev/)
- [Hướng dẫn đầy đủ next-intl 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl vs Reac-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Hỗ trợ RTL Next.js](https://lingo.dev/en/nextjs-i18n/right-to-left-lacular)
- [Giá dịch thuật của Google Cloud](https://cloud.google.com/translate/pricing)
- [DeepL vs Google Translate](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 7. THƯ VIỆN THÀNH PHẦN UI
|||Tháng Chín|||
### Khuyến nghị: shadcn/ui + CSS Tailwind
|||Tháng Chín|||
**Tại sao phải dùng shadcn/ui:**
- Các thành phần được sao chép vào dự án của bạn (toàn quyền sở hữu, không cần lo lắng về cập nhật phụ thuộc)
- Được xây dựng trên nguyên thủy Radix UI (tuân thủ WAI-ARIA, điều hướng bàn phím, hỗ trợ trình đọc màn hình)
- CSS gốc Tailwind (thuộc tính logic cho RTL)
- Hơn 40 thành phần có sẵn
- Hỗ trợ RTL qua các mẫu
- Tích hợp chế độ tối/sáng
- Không có chi phí thời gian chạy
|||Tháng Chín|||
**Cài đặt:**
``` bash
npx shadcn@latest init
npx shadcn@mới nhất thêm hộp thoại thẻ nút đầu vào biểu mẫu trang tính tab hình đại diện huy hiệu accordion lệnh bánh mì nướng
```
|||Tháng Chín|||
**Thành phần chính cho ứng dụng này:**
- `Card` -- Thẻ tài nguyên, thẻ kỹ năng, thẻ hồ sơ trẻ em
- `Dialog` / `Sheet` -- Tương tác phương thức, trình chuyển đổi ngôn ngữ
- `Form` + `Input` -- Form hồ sơ con, tạo bài đăng trên diễn đàn
- `Tab` -- Điều hướng giữa các phần
- `Avatar` -- Hiển thị người dùng diễn đàn (với tùy chọn ẩn danh)
- `Huy hiệu` -- Cấp độ kỹ năng, thẻ ngôn ngữ
- `Accordion` -- Câu hỏi thường gặp, chi tiết tài nguyên
- `Command` -- Bảng tìm kiếm tài nguyên
- `Toast` -- Thông báo
|||Tháng Chín|||
**Tích hợp khả năng truy cập:**
- Tất cả các thành phần dựa trên Radix đều tự động bao gồm các vai trò và thuộc tính ARIA
- Điều hướng bằng bàn phím hoạt động tốt (phím Tab, Enter, Escape, Mũi tên)
- Quản lý tiêu điểm và bẫy tiêu điểm trong các phương thức
- Thông báo của trình đọc màn hình cho nội dung động
- `aria-descriptionby` được liên kết tự động khi có lỗi xác thực
- `aria-invalid` đặt trên lỗi biểu mẫu

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

**Tại sao KHÔNG phải Chakra UI:** Thời gian chạy nặng hơn (CSS-in-JS), kiểu dáng dựa trên prop kém linh hoạt hơn so với các lớp tiện ích Tailwind, động lực hệ sinh thái thấp hơn trong năm 2025-2026.
|||Tháng Chín|||
**Tại sao KHÔNG phải Material UI:** Gói rất nặng, ngôn ngữ thiết kế của Google có thể mang lại cảm giác lâm sàng đối với một ứng dụng cộng đồng, khó tùy chỉnh sâu hơn.
|||Tháng Chín|||
**Nguồn:**
- [Hướng dẫn shadcn/ui 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Thành phần shadcn/ui có thể truy cập](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-comComponents-build-production-ready-apps-with-react-typescript-tailwind-css)
- [So sánh Thư viện React UI 2025](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-comComponent-battle-2025)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 8. TÍNH NĂNG DIỄN ĐÀN/ CỘNG ĐỒNG
|||Tháng Chín|||
### Kiến trúc: Xây dựng tùy chỉnh với Supabase Realtime
|||Tháng Chín|||
**Mô hình dữ liệu (SQL):**
```sql
-- Chuyên mục diễn đàn
TẠO BẢNG forum_categories (
  id UUID KHÓA CHÍNH MẶC ĐỊNH gen_random_uuid(),
  name_key TEXT KHÔNG NULL,
  mô tả_key TEXT,
  biểu tượng VĂN BẢN,
  sắp xếp_order INTEGER MẶC ĐỊNH 0,
  đã tạo_lúc TIMESTAMPTZ MẶC ĐỊNH NGAY BÂY GIỜ()
);
|||Tháng Chín|||
-- Bài đăng trên diễn đàn (chủ đề)
TẠO BẢNG forum_posts (
  id UUID KHÓA CHÍNH MẶC ĐỊNH gen_random_uuid(),
  Category_id UUID THAM KHẢO forum_categories(id),
  Author_id TÀI LIỆU THAM KHẢO UUID auth.users(id),
  is_anonymous MẶC ĐỊNH BOOLEAN sai,
  tên hiển thị TEXT,
  tiêu đề VĂN BẢN KHÔNG NULL,
  nội dung TEXT KHÔNG NULL,
  original_ngôn ngữ TEXT MẶC ĐỊNH 'en',
  upvote_count INTEGER MẶC ĐỊNH 0,
  comment_count INTEGER MẶC ĐỊNH 0,
  được ghim MẶC ĐỊNH BOOLEAN sai,
  is_moderated BOOLEAN MẶC ĐỊNH sai,
  đã tạo_lúc TIMESTAMPTZ MẶC ĐỊNH NGAY BÂY GIỜ(),
  đã cập nhật_lúc TIMESTAMPTZ MẶC ĐỊNH NGAY BÂY GIỜ()
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

-- Bình luận về bài viết
TẠO BẢNG forum_comments (
  id UUID KHÓA CHÍNH MẶC ĐỊNH gen_random_uuid(),
  post_id UUID THAM KHẢO forum_posts(id) TRÊN XÓA CASCADE,
  parent_id UUID TÀI LIỆU THAM KHẢO forum_comments(id),
  Author_id TÀI LIỆU THAM KHẢO UUID auth.users(id),
  is_anonymous MẶC ĐỊNH BOOLEAN sai,
  tên hiển thị TEXT,
  nội dung TEXT KHÔNG NULL,
  original_ngôn ngữ TEXT MẶC ĐỊNH 'en',
  upvote_count INTEGER MẶC ĐỊNH 0,
  đã tạo_lúc TIMESTAMPTZ MẶC ĐỊNH NGAY BÂY GIỜ()
);
|||Tháng Chín|||
-- Ủng hộ
TẠO BẢNG forum_upvotes (
  id UUID KHÓA CHÍNH MẶC ĐỊNH gen_random_uuid(),
  user_id UUID THAM KHẢO auth.users(id),
  post_id UUID THAM KHẢO forum_posts(id),
  comment_id UUID THAM KHẢO forum_comments(id),
  đã tạo_lúc TIMESTAMPTZ MẶC ĐỊNH NGAY BÂY GIỜ(),
  ĐỘC ĐÁO(user_id, post_id),
  ĐỘC ĐÁO(user_id, comment_id)
);
|||Tháng Chín|||
-- Bản dịch được lưu trong bộ nhớ đệm
TẠO BẢNG forum_translations (
  id UUID KHÓA CHÍNH MẶC ĐỊNH gen_random_uuid(),
  source_type TEXT KHÔNG NULL,
  source_id UUID KHÔNG NULL,
  ngôn ngữ đích TEXT KHÔNG NULL,
  đã dịch_tiêu đề TEXT,
  đã dịch_content TEXT KHÔNG NULL,
  đã tạo_lúc TIMESTAMPTZ MẶC ĐỊNH NGAY BÂY GIỜ(),
  ĐỘC ĐÁO(nguồn_id, ngôn ngữ đích)
);
```
|||Tháng Chín|||
**Cập nhật theo thời gian thực:**
``` bản đánh máy
kênh const = supabase
  .channel('bài đăng trên diễn đàn')
  .on('postgres_changes', {
    sự kiện: 'CHÈN',
    lược đồ: 'công khai',
    bảng: 'forum_posts',
    bộ lọc: `category_id=eq.${categoryId}`
  }, (tải trọng) => {
    // Thêm bài viết mới vào UI
  })
  .đăng ký()
```
|||Tháng Chín|||
**An toàn khi đăng bài ẩn danh:**
- Bài viết từ người dùng ẩn danh (Supabase vô danh auth) có thể được gắn cờ khác nhau
- Chính sách RLS kiểm tra xác nhận quyền sở hữu `is_anonymous` trong JWT
- Hiển thị bút danh (ví dụ: "Parent #4827") thay vì tên trống
|||Tháng Chín|||
**Kiểm duyệt (MVP):** Nút báo cáo đơn giản trên mỗi bài đăng/bình luận. Cờ quản trị để ẩn nội dung bị báo cáo. Tương lai: Kiểm duyệt nội dung được hỗ trợ bởi AI thông qua API Claude.
|||Tháng Chín|||
**Dịch theo yêu cầu:** Bài viết được lưu trữ bằng ngôn ngữ gốc. Nút "Dịch" kích hoạt API dịch thuật đám mây của Google. Bản dịch được lưu trong bảng `forum_translations`. Các yêu cầu tiếp theo cho cùng một ngôn ngữ được cung cấp từ bộ đệm.
|||Tháng Chín|||
**Nguồn:**
- [Supabase thời gian thực](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [Xây dựng diễn đàn cộng đồng với Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
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
|||Tháng Chín|||
## 9. TÍCH HỢP AI
|||Tháng Chín|||
### Kiến trúc: Vercel AI SDK + Claude API + Supabase pgvector RAG
|||Tháng Chín|||
**Luồng dữ liệu:**
```
Câu hỏi của người dùng (đa ngôn ngữ)
  -> [Google Translate sang tiếng Anh] (nếu không phải tiếng Anh)
  -> [Tạo nhúng] (nhúng văn bản-3-nhỏ)
  -> [Tìm kiếm tương tự Supabase pgvector]
  -> [Tài liệu ngữ cảnh được truy xuất]
  -> [API Claude với Dấu nhắc hệ thống + Ngữ cảnh + Câu hỏi của người dùng]
  -> [Phản hồi bằng tiếng Anh]
  -> [Google Dịch sang ngôn ngữ của người dùng] (nếu không phải tiếng Anh)
  -> Hiển thị cho người dùng (truyền phát)
```
|||Tháng Chín|||
**Thiết lập SDK Vercel AI:**
``` bash
npm cài đặt ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```
|||Tháng Chín|||
``` bản đánh máy
// ứng dụng/api/chat/route.ts
nhập { anthropic } từ '@ai-sdk/anthropic';
nhập {streamText } từ 'ai';
|||Tháng Chín|||
xuất hàm không đồng bộ POST (req: Yêu cầu) {
  const { tin nhắn, miền địa phương } = đang chờ req.json();
  kết quả const = luồngText({
    mô hình: nhân loại('claude-3-5-haiku-20241022'),
    hệ thống: HỆ THỐNG_PROMPT,
    tin nhắn: AugmentedMessages,
  });
  trả về kết quả.toDataStreamResponse();
}
```
|||Tháng Chín|||
``` bản đánh máy
// Phía máy khách: thành phần/AiChat.tsx
'sử dụng ứng dụng khách';
nhập { useChat } từ '@ai-sdk/react';

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

hàm xuất AiChat() {
  const { tin nhắn, đầu vào, handInputChange, handSubmit, isLoading } = useChat({
    api: '/api/trò chuyện',
  });
  // Giao diện người dùng trò chuyện với phản hồi phát trực tuyến
}
```
|||Tháng Chín|||
**Lựa chọn người mẫu Claude cho Hackathon:**
|||Tháng Chín|||
| Người mẫu | Đầu vào/1 triệu token | Đầu ra/1 triệu token | Tốt nhất cho |
|-------|-------|-------------------|----------|
| Claude Haiku 4.5 | $1,00 | $5,00 | **Phản hồi trò chuyện (ĐỀ XUẤT)** |
| Claude Sonnet 4.5 | $3,00 | $15,00 | Lý luận phức tạp |
| Claude Opus 4.5 | $5,00 | $25,00 | Quá mức cần thiết để trò chuyện |
|||Tháng Chín|||
**Đề xuất:** Claude Haiku 4.5 -- nhanh (độ trễ thấp khi phát trực tuyến), giá rẻ (rất phù hợp với ngân sách hackathon) và đủ khả năng để hỏi đáp tài nguyên cũng như hướng dẫn chung.
|||Tháng Chín|||
**Lời nhắc hệ thống (An toàn là trên hết cho thông tin sức khỏe):**
```
Bạn là trợ lý AI hỗ trợ giúp đỡ cha mẹ nhập cư của trẻ em
mắc chứng Rối loạn Phổ Tự kỷ (ASD). Bạn cung cấp thông tin về:
- Các nguồn tài nguyên, liệu pháp và chương trình giáo dục về ASD
- Điều hướng các hệ thống giáo dục và chăm sóc sức khỏe của Hoa Kỳ
- Quy trình IEP (Chương trình Giáo dục Cá nhân)
- Các chương trình hỗ trợ của chính phủ và phi lợi nhuận có sẵn
- Các mốc phát triển chung
|||Tháng Chín|||
HƯỚNG DẪN AN TOÀN QUAN TRỌNG:
- Bạn KHÔNG phải là bác sĩ. Luôn khuyên bạn nên tham khảo ý kiến ​​​​của các chuyên gia chăm sóc sức khỏe.
- Không bao giờ chẩn đoán hoặc đề xuất phương pháp điều trị y tế cụ thể.
- Luôn đưa ra tuyên bố từ chối trách nhiệm khi thảo luận về các chủ đề y tế/phát triển.
- Nếu người dùng mô tả trường hợp khẩn cấp về y tế, hãy hướng dẫn họ gọi 911.
- Hãy nhạy cảm về văn hóa và tránh những giả định về cấu trúc gia đình.
- Sử dụng ngôn ngữ đơn giản, rõ ràng.
- Khi không chắc chắn, hãy nói “Tôi không biết” thay vì đoán mò.
- Không bao giờ thu thập hoặc yêu cầu thông tin nhận dạng cá nhân.
```
|||Tháng Chín|||
**Thiết lập Supabase pgvector RAG:**
```sql
TẠO MỞ RỘNG NẾU KHÔNG TỒN TẠI vectơ;
|||Tháng Chín|||
TẠO tài nguyên BẢNG (
  id UUID KHÓA CHÍNH MẶC ĐỊNH gen_random_uuid(),
  tiêu đề VĂN BẢN KHÔNG NULL,
  nội dung TEXT KHÔNG NULL,
  danh mục VĂN BẢN KHÔNG NULL,
  nguồn_url TEXT,
  trạng thái VĂN BẢN,
  ngôn ngữ TEXT MẶC ĐỊNH 'en',
  vectơ nhúng (1536),
  đã tạo_lúc TIMESTAMPTZ MẶC ĐỊNH NGAY BÂY GIỜ(),
  đã cập nhật_lúc TIMESTAMPTZ MẶC ĐỊNH NGAY BÂY GIỜ()
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

TẠO CHỈ SỐ TRÊN tài nguyên SỬ DỤNG hnsw (nhúng vector_cosine_ops);
|||Tháng Chín|||
TẠO HOẶC THAY THẾ CHỨC NĂNG match_resources(
  vectơ query_embedding(1536),
  match_threshold FLOAT MẶC ĐỊNH 0,7,
  match_count INT MẶC ĐỊNH 5
)
BẢNG TRẢ LẠI (id UUID, VĂN BẢN tiêu đề, VĂN BẢN nội dung, VĂN BẢN danh mục, FLOAT tương tự)
NGÔN NGỮ plpgsql NHƯ $$
BẮT ĐẦU
  TRẢ LẠI TRUY VẤN
  CHỌN r.id, r.title, r.content, r.category,
    1 - (r.embedding <=> query_embedding) AS tương tự
  TỪ tài nguyên r
  Ở ĐÂU 1 - (r.embedding <=> query_embedding) > match_threshold
  ĐẶT HÀNG BẰNG cách r.embedding <=> query_embedding
  GIỚI HẠN trận đấu_count;
KẾT THÚC;
$$;
```
|||Tháng Chín|||
**Mô hình nhúng:** Sử dụng OpenAI `text-embedding-3-small` ($0,02/1M token, 1536 kích thước, rẻ hơn 5 lần so với ada-002 với hiệu suất tốt hơn).
|||Tháng Chín|||
**Phím tắt Hackathon:** Điền trước bảng tài nguyên với 20-50 tài nguyên được tuyển chọn về chứng tự kỷ, IEP, các loại liệu pháp và tổ chức hỗ trợ. Tạo các nội dung nhúng cho những nội dung này trong quá trình thiết lập thay vì xây dựng quy trình nhập đầy đủ.
|||Tháng Chín|||
**Nguồn:**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Hướng dẫn Next.js](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Giá API Claude](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude cho Chăm sóc sức khỏe 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI & Vector](https://supabase.com/docs/guides/ai)
- [Nhúng OpenAI](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Xây dựng RAG với Claude & pgvector](https://www.tigerdata.com/blog/retrieval-augmented-Generation-with-claude-sonnet-3-5-and-pgvector)
- [Rag Chatbot với Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 10. KHẢ NĂNG TIẾP CẬN
|||Tháng Chín|||
### Chiến lược tuân thủ WCAG 2.2 AA

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

**Các nguyên tắc chính dành cho đối tượng này:**
1. **Khả năng tiếp cận nhận thức** -- Bố cục có thể đoán trước, phân cấp trực quan rõ ràng (quan trọng đối với các bậc cha mẹ bị căng thẳng/choáng ngợp VÀ đối với những cân nhắc liên quan đến chứng tự kỷ)
2. **Hỗ trợ khả năng đọc viết thấp** -- Tín hiệu trực quan, biểu tượng bên cạnh văn bản, ngôn ngữ đơn giản
3. **Khả năng truy cập đa ngôn ngữ** -- Trình đọc màn hình phải hoạt động với ngôn ngữ RTL
4. **Khả năng tiếp cận của động cơ** -- Mục tiêu cảm ứng lớn (tối thiểu 44x44px cho mỗi WCAG 2.2)
|||Tháng Chín|||
**Tích hợp thông qua shadcn/ui + Radix:**
- Tất cả các thành phần tự động bao gồm vai trò/thuộc tính ARIA
- Điều hướng bàn phím (Tab, Enter, Escape, phím mũi tên)
- Quản lý tiêu điểm và bẫy tiêu điểm trong các phương thức
- Thông báo của trình đọc màn hình cho nội dung động
- `aria-describeby` được liên kết do lỗi xác thực
- `aria-invalid` đặt trên lỗi biểu mẫu
|||Tháng Chín|||
**Thư viện bổ sung:**
``` bash
npm install -D @axe-core/react # Ghi nhật ký các sự cố a11y vào bảng điều khiển trình duyệt
npm install -D eslint-plugin-jsx-a11y # Lint cho các vấn đề a11y
```
|||Tháng Chín|||
**Độ tương phản màu:** WCAG AA yêu cầu 4,5:1 đối với văn bản thông thường, 3:1 đối với văn bản lớn. Cung cấp chuyển đổi chế độ tương phản cao.
|||Tháng Chín|||
**Cân nhắc về thiết kế dành riêng cho bệnh tự kỷ:**
- Phông chữ Sans-serif (ví dụ: Inter, system-ui) -- dễ đọc hơn đối với người dùng có hệ thần kinh khác nhau
- Điều hướng nhất quán, có thể dự đoán được trên tất cả các trang
- Hình ảnh động tối thiểu (tôn trọng `thích-giảm-chuyển động`)
- Rõ ràng ranh giới trực quan giữa các phần
- Tránh tình trạng quá tải cảm giác (màu sắc bị tắt, không nhấp nháy)
- Chuyển đổi ngôn ngữ đơn giản để đơn giản hóa nội dung
|||Tháng Chín|||
``` bản đánh máy
// Trong các thành phần, tôn trọng các tùy chọn chuyển động:
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
```
|||Tháng Chín|||
**Nguồn:**
- [WCAG 2.2 trong React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Hướng dẫn về độ tương phản màu WCAG 2025](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [Các phương pháp hay nhất về khả năng truy cập React](https://rtcamp.com/handbook/react-best-practices/accessibility/)
|||Tháng Chín|||
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

##11. TRIỂN KHAI
|||Tháng Chín|||
### Khuyến nghị: Bậc miễn phí của Vercel
|||Tháng Chín|||
**Tại sao dùng Vercel:** Được xây dựng bởi những người sáng tạo Next.js -- không cần cấu hình. Chỉ cần `git push` để triển khai.
|||Tháng Chín|||
**Giới hạn cấp miễn phí:**
- Băng thông 100 GB/tháng
- 100K lời gọi hàm serverless/tháng
- Triển khai không giới hạn
- Thời gian chờ chức năng 10 giây (đủ để phát trực tuyến AI)
- Hỗ trợ tên miền tùy chỉnh
|||Tháng Chín|||
**Biến môi trường:**
``` bash
# .env.local (không bao giờ cam kết điều này)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # Chỉ phía máy chủ
ANTHOPIC_API_KEY=sk-ant-... # Chỉ phía máy chủ
OPENAI_API_KEY=sk-... # Chỉ phía máy chủ (đối với phần nhúng)
GOOGLE_TRANSLATE_API_KEY=... # Chỉ phía máy chủ
```
|||Tháng Chín|||
**QUAN TRỌNG:** Các biến có tiền tố `NEXT_PUBLIC_` được hiển thị trên trình duyệt. Khóa API KHÔNG được có tiền tố này.
|||Tháng Chín|||
**Mẹo demo:** Triển khai sớm lên Vercel (trong vòng một giờ đầu tiên). Sử dụng URL xem trước để chia sẻ với ban giám khảo. Bảo vệ bằng mật khẩu có sẵn để triển khai xem trước.
|||Tháng Chín|||
**Nguồn:**
- [Triển khai Next.js trên Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Triển khai ứng dụng Next.js 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [Biến môi trường Vercel](https://vercel.com/docs/environment-variables)

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
|||Tháng Chín|||
## 12. RIÊNG TƯ VÀ BẢO MẬT
|||Tháng Chín|||
### Kiến trúc bảo mật theo thiết kế
|||Tháng Chín|||
**NGUYÊN TẮC HƯỚNG DẪN:** Ứng dụng này phục vụ nhóm dân số dễ bị tổn thương. Vi phạm quyền riêng tư có thể gây ra hậu quả thực tế (nguy cơ trục xuất đối với các gia đình không có giấy tờ). Bảo mật không phải là tùy chọn.
|||Tháng Chín|||
**Những điều cần cân nhắc về HIPAA:** Ứng dụng KHÔNG phải là một thực thể được kiểm soát và có thể KHÔNG cần tuân thủ đầy đủ HIPAA. Tuy nhiên, nếu lưu trữ bất kỳ thông tin nào liên quan đến sức khỏe của trẻ em, hãy coi đó là thông tin nhạy cảm. Cách tiếp cận tốt nhất: giảm thiểu những gì bạn lưu trữ phía máy chủ.
|||Tháng Chín|||
**Những điều cần cân nhắc về COPPA (Trẻ em dưới 13 tuổi):** Nếu cha mẹ là người dùng duy nhất thì COPPA sẽ ít hạn chế hơn nhưng vẫn phù hợp để lưu trữ dữ liệu của trẻ em. Bản cập nhật COPPA 2025 đưa ra các yêu cầu nghiêm ngặt hơn về giảm thiểu dữ liệu. **Khuyến nghị:** Thiết kế ứng dụng chỉ dành cho PHỤ HUYNH, không cho trẻ em sử dụng trực tiếp.
|||Tháng Chín|||
**Kiến trúc dữ liệu -- Lưu trữ gì ở đâu:**
|||Tháng Chín|||
| Kiểu dữ liệu | Vị trí lưu trữ | Mã hóa |
|----------|-----------------|-------------|
| Tên trẻ | Phía máy khách (localStorage/IndexedDB) | Tùy chọn phía khách hàng AES-256 |
| Chẩn đoán trẻ em | Phía khách hàng | Mã hóa phía máy khách AES-256 |
| Kỹ năng/cột mốc của trẻ | Supabase (được mã hóa ở phần còn lại) | Supabase mặc định |
| Bài viết trên diễn đàn | Supabase | Ở trạng thái nghỉ (mặc định Supabase) |
| Lịch sử trò chuyện AI | Chỉ phía khách hàng (sessionStorage) | Phù du, không tồn tại |
| Ngôn ngữ ưa thích của người dùng | Siêu dữ liệu người dùng Supabase | Tiêu chuẩn |
| Mã thông báo người dùng ẩn danh | Xác thực Supabase | Tiêu chuẩn JWT |

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

**Chính sách RLS:**
```sql
-- Người dùng chỉ có thể xem hồ sơ con của chính họ
TẠO CHÍNH SÁCH "Người dùng có thể xem con riêng"
  TRÊN hồ sơ con ĐỂ CHỌN
  SỬ DỤNG (auth.uid() = parent_id);
|||Tháng Chín|||
-- Người dùng ẩn danh có thể đọc bài viết trên diễn đàn
TẠO CHÍNH SÁCH "Mọi người đều có thể đọc bài viết"
  TRÊN forum_posts ĐỂ CHỌN
  SỬ DỤNG (is_moderated = false);
|||Tháng Chín|||
-- Chỉ những người dùng được xác thực mới có thể đăng bài
TẠO CHÍNH SÁCH "Người dùng được xác thực có thể đăng bài"
  TRÊN forum_posts ĐỂ CHÈN
  VỚI KIỂM TRA (auth.uid() KHÔNG NULL);
```
|||Tháng Chín|||
**Những việc KHÔNG nên làm:**
- KHÔNG lưu trữ tình trạng nhập cư ở bất cứ đâu, bao giờ hết
- KHÔNG yêu cầu tên thật
- KHÔNG lưu trữ địa chỉ IP trong nhật ký ứng dụng
- KHÔNG sử dụng phân tích theo dõi (không sử dụng Google Analytics -- sử dụng Hợp lý hoặc không sử dụng)
- KHÔNG lưu trữ các cuộc hội thoại trò chuyện AI phía máy chủ
- KHÔNG yêu cầu dịch vụ định vị
|||Tháng Chín|||
**Nguồn:**
- [HIPAA & Ứng dụng sức khỏe](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [Tuân thủ COPPA 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Hướng dẫn về ứng dụng sức khỏe không có kiến thức](https://www.wellally.tech/blog/build-zero-know-health-app-react-encryption)
- [Hướng dẫn đầy đủ về Supabase RLS 2026](https://vibeappscanner.com/supabase-row-level-security)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 13. CHIẾN LƯỢC HACKATHON & NGÂN SÁCH THỜI GIAN
|||Tháng Chín|||
### Kế hoạch xây dựng 10 giờ (8:30 sáng - 6:30 chiều)

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

**Ưu tiên tính năng (Phương pháp MoSCoW):**
|||Tháng Chín|||
| Ưu tiên | Tính năng | Trạng thái | Ước tính. Thời gian |
|----------|----------|--------|----------|
| **PHẢI** | Giao diện người dùng đa ngôn ngữ (EN + ES + AR) | Xây dựng đầy đủ | 1,5 giờ |
| **PHẢI** | Trợ lý trò chuyện AI (với RAG) | Xây dựng đầy đủ | 2 giờ |
| **PHẢI** | Thư viện tài nguyên (có thể duyệt + có thể tìm kiếm) | Xây dựng đầy đủ | 1 giờ |
| **PHẢI** | Ẩn danh + xác thực qua điện thoại | Xây dựng đầy đủ | 1 giờ |
| **PHẢI** | Hồ sơ trẻ em với khả năng theo dõi kỹ năng | Xây dựng đầy đủ | 1,5 giờ |
| **NÊN** | Diễn đàn cộng đồng | Xây dựng cơ bản (không có thời gian thực) | 1 giờ |
| **NÊN** | Truy cập ngoại tuyến PWA | Xây dựng (Thiết lập Serwist) | 0,5 giờ |
| ** CÓ THỂ ** | Diễn đàn đăng bài dịch | Sơ khai với giả | 0,5 giờ |
| ** CÓ THỂ ** | Chế độ tối / độ tương phản cao | Chuyển đổi nhanh | 0,25 giờ |
| **SẼ KHÔNG** | Hệ thống kiểm duyệt đầy đủ | Chỉ mô phỏng bản demo | -- |
| **SẼ KHÔNG** | Thông báo đẩy | Bỏ qua hoàn toàn | -- |
| **SẼ KHÔNG** | Nội dung video | Bỏ qua hoàn toàn | -- |
|||Tháng Chín|||
### Lịch trình chi tiết
|||Tháng Chín|||
```
8:30 - 9:00 (30 phút) THIẾT LẬP DỰ ÁN
  - Giàn giáo với bộ khởi động create-t3-app hoặc Nextbase
  - Tạo dự án Supabase + bảng
  - Đường dẫn triển khai Vercel (triển khai shell trống)
  - Cài đặt deps lõi
  - Các biến môi trường được cấu hình
|||Tháng Chín|||
9:00 - 10:00 (60 phút) NỀN TẢNG
  - Thành phần bố cục với i18n (tiêu đề, điều hướng, trình chuyển đổi ngôn ngữ)
  - đã cài đặt các thành phần shadcn/ui
  - Hỗ trợ RTL có dây
  - Xác thực Supabase: giao diện người dùng đăng nhập ẩn danh + email
  - Cấu trúc file dịch (EN + ES + AR)
|||Tháng Chín|||
10:00 - 11:30 (90 phút) TÍNH NĂNG CỐT LÕI #1: AI CHAT
  - Vercel AI SDK + thiết lập Claude Haiku
  - Lộ trình API để trò chuyện với phát trực tuyến
  - Thành phần giao diện người dùng trò chuyện với hook useChat
  - Hệ thống nhắc nhở với rào chắn an toàn
  - Điền trước 20 tài nguyên vào pgvector
  - Đường dẫn RAG (truy vấn nhúng -> tìm kiếm -> lời nhắc tăng cường)
|||Tháng Chín|||
11:30 - 12:00 (30 phút) GIỮA SÁNG TRIỂN KHAI + KIỂM TRA
  - Triển khai đến Vercel
  - Thử nghiệm trên thiết bị di động
  - Sửa các lỗi nghiêm trọng
|||Tháng Chín|||
12:00 - 12:30 (30 phút) BỮA TRƯA

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

12:30 - 1:30 (60 phút) TÍNH NĂNG CỐT LÕI #2: THƯ VIỆN TÀI NGUYÊN
  - Thẻ tài nguyên có tính năng lọc danh mục
  - Chức năng tìm kiếm
  - Trang chi tiết tài nguyên
  - Dữ liệu hạt giống: 20-50 tài nguyên được quản lý
|||Tháng Chín|||
1:30 - 3:00 (90 phút) TÍNH NĂNG CỐT LÕI #3: HỒ SƠ TRẺ + KỸ NĂNG
  - Form tạo hồ sơ trẻ em
  - Thành phần thẻ kỹ năng
  - Giao diện người dùng theo dõi cột mốc
  - Lưu trữ phía khách hàng cho dữ liệu nhạy cảm
  - Chế độ xem bảng điều khiển hồ sơ
|||Tháng Chín|||
3:00 - 4:00 (60 phút) TÍNH NĂNG #4: DIỄN ĐÀN CỘNG ĐỒNG (CƠ BẢN)
  - Xem danh sách bài đăng trên diễn đàn
  - Tạo mẫu bài đăng
  - Hệ thống bình luận cơ bản
  - Tổ chức dựa trên danh mục
|||Tháng Chín|||
4:00 - 4:30 (30 phút) PWA + DỊCH
  - Thiết lập nhân viên dịch vụ Serwist
  - Điền key dịch cho ES và AR
  - Kiểm tra bố cục RTL bằng tiếng Ả Rập
|||Tháng Chín|||
4:30 - 5:30 (60 phút) CHUẨN BỊ ĐÁNH BÓNG & DEMO
  - Sửa lỗi giao diện người dùng
  - Thêm trạng thái tải và xử lý lỗi
  - Chuyển đổi chế độ tương phản cao (nếu có thời gian)
  - Chụp ảnh màn hình để trình bày
  - Ghi lại bản sao lưu video demo
|||Tháng Chín|||
5:30 - 6:00 (30 phút) TRIỂN KHAI CUỐI CÙNG + TRÌNH BÀY
  - Triển khai Vercel cuối cùng
  - Kiểm tra tất cả các tính năng từ đầu đến cuối
  - Chuẩn bị kịch bản quảng cáo chiêu hàng dài 3 phút
|||Tháng Chín|||
6:00 - 6:30 (30 phút) BUFFET/TRÌNH BÀY
```
|||Tháng Chín|||
### Cần mô phỏng/sơ khai nội dung gì:
- **Kiểm duyệt diễn đàn:** Chỉ ẩn các bài viết bị báo cáo bằng cờ, không có bảng quản trị
- **Bản dịch diễn đàn:** Nút "Dịch" hiển thị đang tải văn bản gốc (hoặc Google Dịch nếu có)
- **Quy trình đặt lại mật khẩu:** Sử dụng email mặc định của Supabase
- **Hình đại diện người dùng:** Tên viết tắt hoặc biểu tượng mặc định, không tải lên
- **Bảng điều khiển dành cho quản trị viên:** Bỏ qua hoàn toàn

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

### Mẹo tối ưu hóa bản demo:
1. **Bắt đầu bằng câu chuyện** -- "Gặp Fatima, một bà mẹ người Syria mới chuyển đến Mỹ. Con trai 4 tuổi của cô gần đây được chẩn đoán mắc chứng tự kỷ. Cô ấy không nói được tiếng Anh. Cô ấy không biết bắt đầu từ đâu."
2. **Hiển thị chuyển đổi ngôn ngữ** -- Chuyển trực tiếp từ tiếng Anh sang tiếng Ả Rập. Cú lật RTL gây ấn tượng về mặt thị giác đối với ban giám khảo.
3. **Trình diễn trò chuyện AI** -- Đặt câu hỏi bằng tiếng Tây Ban Nha. Cho thấy nó cung cấp tài nguyên.
4. **Hiển thị khả năng ngoại tuyến** -- Tắt WiFi, hiển thị ứng dụng vẫn hoạt động.
5. **Nhấn mạnh vào quyền riêng tư** -- "Không cần tên thật. Không cần email. Cô ấy có thể sử dụng ứng dụng này một cách an toàn."
|||Tháng Chín|||
**Nguồn:**
- [Từ số 0 đến bản demo sau 36 giờ](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [Ưu tiên tính năng MVP](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Mẹo demo Hackathon (Devpost)](https://info.devpost.com/blog/how-to- Present-a-successful-hackathon-demo)
- [Hướng dẫn về Hackathon Pitch Deck](https://www.inknarrates.com/post/hackathon-pitch-deck)
|||Tháng Chín|||
---
|||Tháng Chín|||
## 14. Nồi hấp & MẪU
|||Tháng Chín|||
### Tùy chọn 1: create-t3-app (KHUYẾN NGHỊ cho các nhóm quen thuộc với tRPC)
``` bash
npx create-t3-app@latest tự kỷ-cầu --typescript --tailwind --trpc --prisma
```
- GitHub: https://github.com/t3-oss/create-t3-app
- Bao gồm: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- Bạn thêm: Supabase, next-intl, shadcn/ui, Vercel AI SDK
|||Tháng Chín|||
### Tùy chọn 2: Nextbase Starter (ĐỀ XUẤT để thiết lập đơn giản hơn)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Bao gồm: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query
- Bạn thêm: next-intl, shadcn/ui, Vercel AI SDK, Prisma (tuỳ chọn)
|||Tháng Chín|||
### Phương án 3: Vercel Supabase Starter
- Mẫu: https://vercel.com/templates/next.js/supabase
- Mẫu Vercel/Supabase chính thức với xác thực SSR
|||Tháng Chín|||
### Phương án 4: supa-next-starter
- GitHub: https://github.com/michaeltroya/supa-next-starter
- Bao gồm: Next.js, Supabase, Tailwind, shadcn/ui (đã được tích hợp)

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

### Sau khi giàn giáo, thêm:
``` bash
npm cài đặt next-intl rtl-phát hiện
npm cài đặt ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
cài đặt npm @serwist/next @serwist/precaching @serwist/sw
npx shadcn@latest init
npx shadcn@mới nhất thêm hộp thoại thẻ nút đầu vào biểu mẫu trang tính tab hình đại diện huy hiệu accordion lệnh bánh mì nướng
cài đặt npm -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-Detect
```
|||Tháng Chín|||
### Dự án tham khảo:
- **subabase-comments-extension** (GitHub: malerba118/supabase-comments-extension) -- Nhận xét, trả lời, phản ứng
- **ojasskapre/nextjs-starter-template** -- Giao diện trò chuyện Next.js + Supabase + LLM
- **shwosner/realtime-chat-supabase-react** -- Trò chuyện trong thời gian thực với Supabase
|||Tháng Chín|||
---
|||Tháng Chín|||
## 15. THIẾT KẾ Lược đồ
|||Tháng Chín|||
### Hoàn thành lược đồ Prisma
|||Tháng Chín|||
``` lăng kính
khách hàng máy phát điện {
  nhà cung cấp = "prisma-client-js"
}
|||Tháng Chín|||
nguồn dữ liệu db {
  nhà cung cấp = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
|||Tháng Chín|||
// NGƯỜI DÙNG & XÁC THỰC
mô hình Hồ sơ người dùng {
  Chuỗi id @id @default(uuid())
  Chuỗi authId @unique
  Chuỗi tên hiển thị?
  Chuỗi ưa thíchLocale @default("en")
  đã tạoAt DateTime @default(now())
  đã cập nhậtAt DateTime @updatedAt
  trẻ em Hồ sơ trẻ em[]
  diễn đànBài đăng Diễn đànBài viết[]
  diễn đànBình luận Diễn đànBình luận[]
  ủng hộ Diễn đànUpvote[]
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

// HỒ SƠ TRẺ & THEO DÕI KỸ NĂNG
mô hình Hồ sơ trẻ em {
  Chuỗi id @id @default(uuid())
  Chuỗi ID gốc
  cha mẹ UserProfile @relation(fields: [parentId], tham chiếu: [id])
  chuỗi biệt danh
  năm sinh Int?
  chẩn đoánNgày NgàyGiờ?
  kỹ năng Thẻ kỹ năng[]
  cột mốc quan trọng[]
  đã tạoAt DateTime @default(now())
  đã cập nhậtAt DateTime @updatedAt
  @@index([parentId])
}
|||Tháng Chín|||
mô hình SkillCategory {
  Chuỗi id @id @default(uuid())
  tênChuỗi khóa
  biểu tượng Chuỗi?
  SortOrder Int @default(0)
  kỹ năng Thẻ kỹ năng[]
}
|||Tháng Chín|||
mô hình SkillCard {
  Chuỗi id @id @default(uuid())
  Chuỗi ID con
  ChildProfile @relation(fields: [childId], tham chiếu: [id], onDelete: Cascade)
  Chuỗi Id danh mục
  danh mục SkillCategory @relation(fields: [categoryId], reference: [id])
  tênChuỗi khóa
  cấp độ Int @default(0)
  ghi chú Chuỗi?
  LastAssesed DateTime @default(now())
  đã tạoAt DateTime @default(now())
  đã cập nhậtAt DateTime @updatedAt
  @@index([childId])
  @@index([categoryId])
}
|||Tháng Chín|||
Cột mốc mô hình {
  Chuỗi id @id @default(uuid())
  Chuỗi ID con
  ChildProfile @relation(fields: [childId], tham chiếu: [id], onDelete: Cascade)
  tiêu đềChuỗi khóa
  Chuỗi mô tả?
  đạt đượcNgày NgàyGiờ?
  chuỗi danh mục
  đã tạoAt DateTime @default(now())
  @@index([childId])
}
|||Tháng Chín|||
// TÀI NGUYÊN (việc nhúng vectơ được xử lý thông qua SQL/pgvector thô)
Tài nguyên mô hình {
  Chuỗi id @id @default(uuid())
  chuỗi tiêu đề
  Chuỗi nội dung @db.Text
  Chuỗi tóm tắt?
  chuỗi danh mục
  Chuỗi danh mục con?
  Chuỗi nguồnUrl?
  chuỗi trạng thái?
  Chuỗi ngôn ngữ @default("en")
  thẻ Chuỗi[]
  đã tạoAt DateTime @default(now())
  đã cập nhậtAt DateTime @updatedAt
  @@index([danh mục])
  @@index([trạng thái])
}
|||Tháng Chín|||
// DIỄN ĐÀN / CỘNG ĐỒNG
mô hình ForumCategory {
  Chuỗi id @id @default(uuid())
  tênChuỗi khóa
  mô tảChuỗi khóa?
  biểu tượng Chuỗi?
  SortOrder Int @default(0)
  bài đăng Diễn đànBài viết[]
}
|||Tháng Chín|||
mô hình ForumPost {
  Chuỗi id @id @default(uuid())
  Chuỗi Id danh mục
  danh mục ForumCategory @relation(fields: [categoryId], reference: [id])
  Chuỗi Id tác giả
  tác giả UserProfile @relation(fields: [authorId], reference: [id])
  isAnonymous Boolean @default(false)
  chuỗi tiêu đề
  Chuỗi nội dung @db.Text
  Chuỗi gốcLang @default("en")
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  Boolean được ghim @default(false)
  isHidden Boolean @default(false)
  reportCount Int @default(0)
  bình luận Diễn đànBình luận[]
  ủng hộ Diễn đànUpvote[]
  bản dịch Diễn đànDịch[]
  đã tạoAt DateTime @default(now())
  đã cập nhậtAt DateTime @updatedAt
  @@index([categoryId])
  @@index([authorId])
  @@index([createdAt])
}
|||Tháng Chín|||
mô hình ForumComment {
  Chuỗi id @id @default(uuid())
  chuỗi postId
  post ForumPost @relation(fields: [postId], reference: [id], onDelete: Cascade)
  Chuỗi parentId?
  diễn đàn phụ huynhBình luận? @relation("CommentReplies", các trường: [parentId], tham chiếu: [id])
  trả lời ForumComment[] @relation("CommentReplies")
  Chuỗi Id tác giả
  tác giả UserProfile @relation(fields: [authorId], reference: [id])
  isAnonymous Boolean @default(false)
  Chuỗi nội dung @db.Text
  Chuỗi gốcLang @default("en")
  upvoteCount Int @default(0)
  isHidden Boolean @default(false)
  reportCount Int @default(0)
  ủng hộ Diễn đànUpvote[]
  bản dịch Diễn đànDịch[]
  đã tạoAt DateTime @default(now())
  @@index([postId])
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

mô hình ForumUpvote {
  Chuỗi id @id @default(uuid())
  Chuỗi userId
  người dùng UserProfile @relation(fields: [userId], reference: [id])
  Chuỗi postId?
  đăng bài Diễn đànPost? @relation(fields: [postId], reference: [id], onDelete: Cascade)
  Chuỗi nhận xétId?
  bình luận Diễn đànBình luận? @relation(fields: [commentId], reference: [id], onDelete: Cascade)
  đã tạoAt DateTime @default(now())
  @@unique([userId, postId])
  @@unique([userId, commentId])
}
|||Tháng Chín|||
mô hình Diễn đànDịch thuật {
  Chuỗi id @id @default(uuid())
  Chuỗi postId?
  đăng bài Diễn đànPost? @relation(fields: [postId], reference: [id], onDelete: Cascade)
  Chuỗi nhận xétId?
  bình luận Diễn đànBình luận? @relation(fields: [commentId], reference: [id], onDelete: Cascade)
  chuỗi mục tiêuLang
  đã dịch Chuỗi tiêu đề?
  đã dịch Chuỗi nội dung @db.Text
  đã tạoAt DateTime @default(now())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
```
|||Tháng Chín|||
### Danh mục dữ liệu hạt giống
|||Tháng Chín|||
**Danh mục kỹ năng:** Giao tiếp, Kỹ năng xã hội, Cuộc sống hàng ngày, Kỹ năng vận động, Học thuật, Xử lý cảm giác, Điều chỉnh cảm xúc
|||Tháng Chín|||
**Danh mục diễn đàn:** Giới thiệu & Chào mừng, Trị liệu & Điều trị (ABA/OT/Bài phát biểu), Trợ giúp về trường học & IEP, Lời khuyên trong cuộc sống hàng ngày, Câu hỏi pháp lý & nhập cư, Điều hướng về chăm sóc sức khỏe, Câu chuyện thành công & Các cột mốc quan trọng, Hỗ trợ chung
|||Tháng Chín|||
**Danh mục tài nguyên:** Loại & nhà cung cấp trị liệu, Tài nguyên giáo dục & IEP, Quyền pháp lý & vận động chính sách, Hỗ trợ tài chính, Tổ chức cộng đồng, Công cụ & ứng dụng trực tuyến, Sách & Truyền thông, Tài nguyên dành riêng cho từng bang
|||Tháng Chín|||
---
|||Tháng Chín|||
## TÓM TẮT CÁC PHỤ THUỘC PACKAGE.JSON

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
  "phụ thuộc": {
    "tiếp theo": "^16.0.0",
    "phản ứng": "^19.0.0",
    "Reac-dom": "^19.0.0",
    "bản đánh máy": "^5.7.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "prisma": "^6.0.0",
    "@prisma/client": "^6.0.0",
    "next-intl": "^4.0.0",
    "rtl-phát hiện": "^1.1.2",
    "ai": "^6.0.0",
    "@ai-sdk/anthropic": "^1.0.0",
    "@ai-sdk/openai": "^1.0.0",
    "@ai-sdk/Reac": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0",
    "lucide-react": "^0.450.0",
    "@serwist/next": "^9.0.0",
    "@serwist/precaching": "^9.0.0",
    "@serwist/sw": "^9.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/Reac-tabs": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/Reac-accordion": "^1.2.0",
    "zod": "^3.23.0",
    "dạng phản ứng": "^7.53.0",
    "@hookform/trình phân giải": "^3.9.0"
  },
  "devPhụ thuộc": {
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "@types/rtl-Detect": "^1.0.0"
  }
}
```
|||Tháng Chín|||
---
|||Tháng Chín|||
## THAM KHẢO NHANH: CÁC LIÊN KẾT TÀI LIỆU CHÍNH
|||Tháng Chín|||
| Công cụ | Tài liệu |
|------|--------------|
| Tiếp theo.js 16 | https://nextjs.org/docs |
| Supabase | https://supabase.com/docs |
| Supabase xác thực | https://supabase.com/docs/guides/auth |
| Supabase thời gian thực | https://supabase.com/docs/guides/realtime |
| Supabase pgvector | https://supabase.com/docs/guides/ai |
| intl tiếp theo | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| SDK AI của Vercel | https://ai-sdk.dev/docs/introduction |
| API Claude | https://platform.claude.com/docs |
| Prisma | https://www.prisma.io/docs |
| PWA Serwist | https://serwist.pages.dev/docs/next/getting-started |
| CSS gió đuôi | https://tailwindcss.com/docs |
| Dịch thuật trên đám mây của Google | https://cloud.google.com/translate/docs |
| Nhúng OpenAI | https://platform.openai.com/docs/guides/embeddings |
| Triển khai Vercel | https://vercel.com/docs |
|||Tháng Chín|||
---
|||Tháng Chín|||
Nghiên cứu này bao gồm tất cả 10 lĩnh vực bạn yêu cầu cùng với chiến lược hackathon, kiến ​​trúc quyền riêng tư, các tùy chọn nguyên mẫu và thiết kế lược đồ hoàn chỉnh. Ngăn xếp được thiết kế sao cho mọi dịch vụ đều phù hợp với các bậc miễn phí dành cho hackathon, xác thực nhằm đảm bảo quyền riêng tư cho người dùng không có giấy tờ và ngân sách thời gian là thực tế cho quá trình xây dựng kéo dài 10 giờ. Tôi đã cố lưu tệp này dưới dạng tệp vào `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` nhưng quyền ghi tệp đã bị từ chối. Nếu bạn muốn tôi lưu tệp này vào đĩa, bạn có thể cấp quyền Ghi và tôi sẽ tạo tệp.
---
|||Tháng Chín|||
## Nghiên cứu bổ sung (Cập nhật tháng 3 năm 2026)
|||Tháng Chín|||
### Thư viện i18n tốt nhất cho hơn 10 ngôn ngữ (React + TypeScript)

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

**Khuyến nghị: Reac-i18next** — 2,1 triệu lượt tải xuống hàng tuần, giải pháp React i18n phổ biến nhất.
- Được xây dựng trên hệ sinh thái i18next với các plugin để phát hiện ngôn ngữ, tải không đồng bộ, số nhiều phức tạp
- Gói: 22,2 kB (i18next 15,1kB + Reac-i18next 7,1kB)
- Hỗ trợ các tệp dịch JSON - dễ dàng thêm ngôn ngữ tăng dần
- Nguồn: [Blog Cụm từ](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)
|||Tháng Chín|||
**Giải pháp thay thế nhẹ: LinguiJS** — tổng cộng 10,4 kB (một nửa kích thước), cú pháp thông báo ICU, hỗ trợ TypeScript.
|||Tháng Chín|||
**Để có tốc độ hackathon**: Reac-i18next với các tệp dịch JSON. Bắt đầu bằng tiếng Anh + tiếng Tây Ban Nha, thêm các ngôn ngữ khác qua tệp JSON. Sử dụng API Google Dịch hoặc DeepL cho các bản dịch ban đầu.
|||Tháng Chín|||
Nguồn: [Hướng dẫn GloryWebs 2026](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)
|||Tháng Chín|||
### Giới hạn bậc miễn phí của Supabase (2026)
|||Tháng Chín|||
- **2 dự án đang hoạt động** (tạm dừng sau 1 tuần không hoạt động)
- **500 MB** bộ nhớ cơ sở dữ liệu (CPU dùng chung)
- **2 GB** cơ sở dữ liệu đầu ra/tháng
- **50.000** người dùng hoạt động hàng tháng (auth)
- **1 GB** dung lượng lưu trữ tệp
- **2 GB** bộ nhớ đầu ra
- **500.000** lệnh gọi hàm biên/tháng
- Không có bản sao lưu, không có SLA trên gói miễn phí
|||Tháng Chín|||
Nguồn: [Giá Supabase](https://supabase.com/pricing), [Phân tích giao diện người dùng làm bánh](https://uibakery.io/blog/supabase-pricing)
|||Tháng Chín|||
**Đối với hackathon**: 500 MB là quá đủ. Ngay cả với 10.000 người dùng lưu trữ hồ sơ + dữ liệu trẻ em + bài đăng trên diễn đàn, bạn sẽ sử dụng <50 MB. Giới hạn xác thực 50K MAU cũng rất hào phóng đối với bản demo.

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
