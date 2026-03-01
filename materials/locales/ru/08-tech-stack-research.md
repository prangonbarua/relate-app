# Хакатон Tech Stack Research: Родители-иммигранты + приложение для лечения аутизма
|||сентябрь|||
**Дата:** 28 февраля 2026 г. | **Время сборки:** 10 часов (8:30 – 18:30).
|||сентябрь|||
---
|||сентябрь|||
## 1. РЕКОМЕНДУЕМАЯ КРАТКАЯ ИНФОРМАЦИЯ
|||сентябрь|||
| Слой | Технология | Почему |
|-------|-----------|-----|
| **Рамка** | Next.js 16 (маршрутизатор приложений) | SSR для SEO, маршруты API, поддержка PWA, развертывание Vercel |
| **Эшафот** | `create-t3-app` или стартер Nextbase | Самый быстрый путь к типизированному полному стеку |
| **Язык** | TypeScript повсюду | Сквозная безопасность типов |
| **Верхний API** | tRPC (через стек T3) ИЛИ маршруты API Next.js + клиент Supabase | Типобезопасность, нулевой шаблон |
| **База данных** | Супабаза (PostgreSQL) | Уровень бесплатного пользования, аутентификация, в реальном времени, pgvector, RLS |
| **ОРМ** | Призма | Автоматически генерируемые типы, инструменты миграции |
| **Аутентификация** | Супабаза аутентификации | Анонимный вход, OTP для телефона, адрес электронной почты/пароль, персональные данные не требуются |
| **i18n** | следующий-международный | Встроенная интеграция Next.js, поддержка RSC, крошечный пакет, поддержка RTL |
| **Интерфейс** | shadcn/ui + CSS для попутного ветра | Копирование и вставка компонентов, полное владение, Radix a11y, поддержка RTL |
| **Чат с искусственным интеллектом** | Vercel AI SDK + Claude API (Haiku 4.5) | Потоковое вещание, использование крючка Chat, экономично |
| **Векторная база данных** | Супабаза pgvector | Та же база данных, без дополнительных услуг, RLS по векторам |
| **Вложения** | OpenAI text-embedding-3-маленький | 0,02 доллара США за 1 миллион токенов, в 5 раз дешевле, чем ada-002 |
| **API перевода** | API облачного перевода Google | Бесплатно 500 тыс. символов в месяц, более 130 языков, без хранения данных |
| **ПВА** | Сервисист (@servist/следующий) | Современный преемник next-pwa, автономная поддержка |
| **Развертывание** | Версель (уровень бесплатного пользования) | Развертывание Next.js без настройки, полоса пропускания 100 ГБ |
| **Форум** | Пользовательские настройки с помощью Supabase Realtime | Обновления в реальном времени, RLS на модерацию |
|||сентябрь|||
**Общая ориентировочная ежемесячная стоимость (хакатон/демо): 0 долларов США** — Все вышеперечисленные сервисы имеют уровни бесплатного пользования, достаточные для демо-версии хакатона.
|||сентябрь|||
---
|||сентябрь|||
## 2. СТРУКТУРА REACT

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

### Рекомендация: Next.js 16 (маршрутизатор приложений)
|||сентябрь|||
**Почему Next.js вместо Vite+React для ЭТОГО приложения:**
- SSR/SSG для SEO (важно для страниц ресурсов, которые должны быть доступны родителям-иммигрантам при поиске в Google)
- Встроенные маршруты API устраняют необходимость в отдельном внутреннем сервере.
- Маршрутизатор приложений с серверными компонентами React = нулевой клиентский JS для переведенного контента.
— Встроенная поддержка манифеста PWA через app/manifest.ts.
- Развертывание Vercel не требует настройки.
- next-intl изначально работает с RSC (переводы, отображаемые на стороне сервера = 0 байт для клиента)
|||сентябрь|||
**Когда Vite будет лучше:**
- Чистый SPA без необходимости SEO
- Ускоренный запуск сервера разработки (незначительная выгода для 10-часового хакатона)
- Упрощенная ментальная модель (без различия серверного и клиентского компонентов)
|||сентябрь|||
**Настройка PWA с помощью Serwist (следующий преемник PWA):**
``` баш
npm install @serwist/next @serwist/precaching @serwist/sw idb
```
|||сентябрь|||
Ключевые офлайн-стратегии:
- **CacheFirst** для статических ресурсов (`/_next/static/`) – содержимое хешируется, никогда не изменяется.
- **NetworkFirst** для ответов API и динамического контента.
- **StaleWhileRevalidate** для файлов перевода и страниц ресурсов.
- IndexedDB для автономного хранения данных (дочерние профили, сохраненные ресурсы)
|||сентябрь|||
**ВАЖНО:** Next.js 16 по умолчанию использует Turbopack, но Serwist требует Webpack. Вам нужно будет соответствующим образом настроить сборку.
|||сентябрь|||
**Манифест PWA** (встроенная поддержка Next.js):
``` машинописный текст
// приложение/manifest.ts
тип импорта { MetadataRoute } из «следующего»
|||сентябрь|||
функция экспорта по умолчанию манифест(): MetadataRoute.Manifest {
  вернуть {
    название: 'ASD Bridge',
    short_name: 'ASD Bridge',
    описание: «Поддержка семей иммигрантов с детьми-аутистами»,
    start_url: '/',
    дисплей: «автономный»,
    background_color: '#ffffff',
    theme_color: '#4F46E5',
    значки: [
      { src: '/icon-192.png', размеры: '192x192', тип: 'image/png' },
      { src: '/icon-512.png', размеры: '512x512', тип: 'image/png' },
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

**Источники:**
- [Полное сравнение Vite и Next.js, 2026 г.] (https://designrevision.com/blog/vite-vs-nextjs)
- [Руководство по Next.js PWA] (https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Начало работы с Serwist](https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA с Serwist] (https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Создание PWA в Next.js с помощью Serwist] (https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)
|||сентябрь|||
---
|||сентябрь|||
## 3. TYPESCRIPT BACKEND
|||сентябрь|||
### Рекомендация: маршруты API Next.js + клиент Supabase (основной) ИЛИ tRPC (при использовании T3)
|||сентябрь|||
**Вариант А: Маршруты API Next.js + Supabase (САМЫЙ ПРОСТОЙ для хакатона)**
- Нет отдельного серверного сервера
- Клиент Supabase JS обрабатывает запросы к БД, аутентификацию в реальном времени.
- Маршруты API для чата AI, вызовов API перевода и любой серверной логики.
- Самая быстрая установка
|||сентябрь|||
**Вариант Б: tRPC через стек T3 (ЛУЧШИЙ DX, если команда знает об этом)**
- Сквозная безопасность типа между интерфейсом и сервером.
- Автозаполнение вызовов API во внешнем интерфейсе.
- Работает с Prisma для сгенерированных типов.
- `create-t3-app` формирует всё
|||сентябрь|||
``` баш
# Вариант А: обычный Next.js + Supabase
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
|||сентябрь|||
# Вариант Б: стек T3
npx create-t3-app@latest my-app
# Выберите: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma.
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

**Почему НЕ экспрессировать/ускорять:**
- Добавляет сложность развертывания (отдельный сервер для хоста)
- Для этого варианта использования нет преимуществ по сравнению с маршрутами API Next.js.
- Лишних 30-60 минут на настройку у вас нет
|||сентябрь|||
**Почему НЕ бессерверное использование (функции Lambda/Netlify):**
- Маршруты API Next.js на Vercel по умолчанию ЯВЛЯЮТСЯ бессерверными.
- Нет необходимости в отдельной функциональной инфраструктуре
|||сентябрь|||
**Источники:**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [Руководство по T3 Stack 2025] (https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Создать приложение T3](https://create.t3.gg/)
- [Официальный tRPC](https://trpc.io/)
|||сентябрь|||
---
|||сентябрь|||
## 4. БАЗА ДАННЫХ
|||сентябрь|||
### Рекомендация: Supabase (PostgreSQL)
|||сентябрь|||
**Почему Supabase выигрывает в этом проекте:**
|||сентябрь|||
| Особенность | Супабаза | Огневая база | ПланетСкейл |
|---------|----------|----------|-------------|
| Уровень бесплатного хранения БД | 500 МБ | 1 ГБ (Искра) | Прекращение действия уровня бесплатного пользования |
| Авторизация включена | Да (50 тыс. MAU бесплатно) | Да (50 тыс. MAU бесплатно) | Нет |
| В реальном времени | Да (изменения Postgres) | Да (лучший в своем классе) | Нет |
| Векторный поиск (pgvector) | Да, встроенный | Нет | Нет |
| Поддержка SQL | Полная версия PostgreSQL | Только NoSQL | MySQL |
| RLS (безопасность на уровне строк) | Да, на основе SQL | Правила безопасности Firebase | Нет |
| Анонимная авторизация | Да, встроенный | Да | Н/Д |
| Открытый исходный код | Да | Нет | Частично |
| Переносимость данных | Полная (это Postgres) | Привязка к поставщику | Совместимость с MySQL |

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

**Уровень бесплатного пользования Supabase (2026 г.):**
- 2 активных проекта
- 500 МБ хранения базы данных
- Выход из базы данных 2 ГБ
- 50 000 MAU (аутентификация)
- 1 ГБ файлового хранилища
- 500 000 вызовов граничных функций
- Кредитная карта не требуется, срок ее действия никогда не истекает
|||сентябрь|||
**Почему для ЭТОГО приложения Supabase предпочтительнее Firebase:**
1. pgvector для поиска ресурсов ИИ (дополнительные услуги не требуются)
2. Полный SQL для сложных запросов (дочерние этапы, отслеживание навыков)
3. RLS для анонимного доступа к форуму с сохранением конфиденциальности.
4. Переносимость данных (не привязана к экосистеме Google)
5. Лучше для реляционных данных (пользователь -> дети -> навыки -> этапы)
|||сентябрь|||
**Интеграция Prisma:**
```призма
источник данных БД {
  провайдер = "postgresql"
  URL = env("URL_БАЗЫ ДАННЫХ")
  DirectUrl = env("DIRECT_URL")
}
```
|||сентябрь|||
**Источники:**
- [Обзор Supabase и Firebase 2026] (https://hackceleration.com/supabase-review/)
- [Firebase против Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-that-one-actually-scales-with-you-2374)
- [Цены на Supabase 2026](https://uibakery.io/blog/supabase-pricing)
- [Ограничения уровня бесплатного пользования Supabase](https://supabase.com/pricing)
|||сентябрь|||
---
|||сентябрь|||
## 5. АУТЕНТИФИКАЦИЯ
|||сентябрь|||
### Рекомендация: Supabase Auth с анонимным входом + OTP по телефону + адрес электронной почты/пароль
|||сентябрь|||
**КРИТИЧЕСКИЙ ПРИНЦИП ДИЗАЙНА для этой аудитории:**
Приложение должно быть доступным для использования БЕЗ предоставления личной информации. Многие родители-иммигранты (особенно не имеющие документов) не будут использовать приложение, требующее государственного удостоверения личности/SSN, проверки настоящего имени, сбора адреса или обязательной электронной почты.

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

**Уровни аутентификации (прогрессивное доверие):**
|||сентябрь|||
| Уровень | Метод | Что это открывает | Требуется персональная информация |
|------|--------|----------------|--------------|
| 1 | Анонимный вход | Просматривайте ресурсы, используйте чат AI, просматривайте форум | Нет |
| 2 | Телефонный ОТП | Публикуйте сообщения на форуме, сохраняйте профили детей | Только номер телефона |
| 3 | Электронная почта + пароль | Полный аккаунт с восстановлением | Адрес электронной почты |
|||сентябрь|||
**Анонимная аутентификация Supabase:**
``` машинописный текст
// Войдите анонимно — персональные данные не нужны
const {данные, ошибка} = ожидание supabase.auth.signInAnonymous()
|||сентябрь|||
// Позже пользователь сможет связать номер телефона
const {данные, ошибка} = ожидание supabase.auth.updateUser({
  телефон: '+1234567890',
})
```
|||сентябрь|||
**Настройка OTP для телефона:**
Supabase поддерживает аутентификацию по телефону через Twilio, MessageBird, Textlocal и Vonage. Пользователи получают 6-значный PIN-код по SMS, действительный в течение 60 секунд.
|||сентябрь|||
**Безопасность для анонимных пользователей:**
- Включите CAPTCHA (рекомендуется турникет Cloudflare — бесплатно), чтобы предотвратить злоупотребления.
- Ограничение скорости на основе IP: 30 запросов в час (настраивается в панели управления Supabase)
- Политики RLS могут различать анонимных и аутентифицированных пользователей с помощью утверждения JWT `is_anonymous`.
|||сентябрь|||
**Почему НЕ использовать «Клерка» для этого приложения:**
- Нет встроенного анонимного входа
- 0,02 доллара США/MAU после 10 000 (Supabase: 50 000 бесплатно)
- Излишний пользовательский интерфейс для этого варианта использования.
- Добавляет внешнюю зависимость
|||сентябрь|||
**Почему НЕ Auth0:**
- Комплексная настройка для хакатона
- Нет анонимной авторизации
- Уровень бесплатного пользования ограничен 7500 MAU.

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

**Источники:**
- [Анонимный вход в Supabase](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Вход в систему Supabase Phone](https://supabase.com/docs/guides/auth/phone-login)
- [Клерк против Supabase Auth] (https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [Безопасность анонимного входа](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)
|||сентябрь|||
---
|||сентябрь|||
## 6. ИНТЕРНАЦИОНАЛИЗАЦИЯ (i18n)
|||сентябрь|||
### Рекомендация: следующий-между
|||сентябрь|||
**Почему next-intl вместо реакции-i18next или реакции-intl:**
|||сентябрь|||
| Особенность | следующий-международный | реакция-i18следующий | реакция-международный |
|---------|-----------|---------------|------------|
| Поддержка маршрутизатора приложений Next.js | Родной | Через обертку | Через обертку |
| Поддержка серверных компонентов | Встроенный (0 клиентских JS) | Требуется настройка | Требуется настройка |
| Размер пакета | ~4 КБ | ~8 КБ | ~12 КБ |
| Поддержка RTL | Встроенный | Руководство | Руководство |
| Формы множественного числа (арабский: 6 форм) | Автоматическое отделение интенсивной терапии | Ручная настройка | Автоматическое отделение интенсивной терапии |
| Типовая безопасность | TypeScript-в первую очередь | Хорошо | Хорошо |
|||сентябрь|||
**Установка:**
``` баш
npm установить следующий-intl rtl-detect
npm install --save-dev @types/rtl-detect
```
|||сентябрь|||
**Настройка RTL для арабского, фарси, урду:**
``` машинописный текст
// хуки/useTextDirection.ts
импортировать {useLocale} из 'next-intl';
импортировать {isRtlLang} из «rtl-detect»;

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

функция экспорта useTextDirection() {
  const locale = useLocale();
  вернуть isRtlLang (локаль)? 'rtl': 'ltr';
}
|||сентябрь|||
// приложение/[локаль]/layout.tsx
экспортировать функцию по умолчанию LocaleLayout({ Children, params: { locale } }) {
  константное направление = isRtlLang (локаль)? 'rtl': 'ltr';
  возврат (
    <html lang={локаль} dir={направление}>
      <body>{дети</body>
    </html>
  );
}
```
|||сентябрь|||
**Структура файла перевода:**
```
сообщения/
  ru/
    common.json # Общие строки пользовательского интерфейса (кнопки, навигация, ошибки)
    auth.json # Вход, регистрация, профиль
    resources.json # Библиотека ресурсов
    forum.json # Форум/сообщество
    ai-chat.json # AI-помощник
    child-profile.json # Отслеживание детей
    навыки.json # Карты навыков
  ar/# арабский (RTL)
  es/ # испанский
  zh/# Китайский (упрощенный)
  fa/# фарси/персидский (RTL)
  ur/ # Урду (RTL)
```
|||сентябрь|||
**Приоритетные языки для MVP:** английский (по умолчанию), испанский, арабский (RTL для демонстрации технических возможностей), китайский (упрощенный).
|||сентябрь|||
**CSS для RTL – используйте логические свойства Tailwind:**
- `pl-4` -> `ps-4` (padding-inline-start)
- `pr-4` -> `pe-4` (padding-inline-end)
- `text-left` -> `text-start`
- `text-right` -> `text-end`
- `ml-auto` -> `ms-auto`
- `mr-auto` -> `me-auto`
|||сентябрь|||
**Машинный перевод содержимого форума:**
|||сентябрь|||
| Сервис | Уровень бесплатного пользования | Цена после бесплатного | Языки | Конфиденциальность |
|---------|-----------|-----------------|-----------|---------|
| Google Cloud Translation | 500 тыс. символов в месяц (постоянно) | символы $20/1 млн | 130+ | Никакие данные не сохраняются/не используются для обучения |
| ДипЛ | 500 тыс. символов в месяц | 25 долларов США за 1 миллион символов + 5,49 долларов США в месяц | 30+ | Данные бесплатного уровня могут храниться |
| Amazon Перевод | 2 миллиона символов в месяц (только 12 месяцев) | символы $15/1 млн | 75+ | Данные не сохранены |
|||сентябрь|||
**Рекомендация:** Google Cloud Translation API – постоянный бесплатный уровень, самый широкий языковой охват (более 130 языков, включая все целевые языки с письмом справа налево), надежные гарантии конфиденциальности (никакие данные не сохраняются и не используются для обучения).

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

**Источники:**
- [Документация next-intl](https://next-intl.dev/)
- [next-intl Complete Guide 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [реакция-intl против реакции-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Поддержка Next.js RTL] (https://lingo.dev/en/nextjs-i18n/right-to-left-languages)
– [Цены на перевод Google Cloud](https://cloud.google.com/translate/pricing)
- [DeepL против Google Translate](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)
|||сентябрь|||
---
|||сентябрь|||
## 7. БИБЛИОТЕКА КОМПОНЕНТОВ UI
|||сентябрь|||
### Рекомендация: shadcn/ui + Tailwind CSS
|||сентябрь|||
**Почему shadcn/ui:**
- Компоненты копируются в ваш проект (полное владение, не нужно беспокоиться об обновлениях зависимостей)
- Построен на основе примитивов пользовательского интерфейса Radix (совместимость с WAI-ARIA, навигация с помощью клавиатуры, поддержка чтения с экрана)
- Собственный CSS Tailwind (логические свойства для RTL)
- Доступно более 40 компонентов
- Поддержка RTL через шаблоны
- Встроенный темный/светлый режим
- Нулевые накладные расходы во время выполнения
|||сентябрь|||
**Установка:**
``` баш
npx shadcn@latest init
npx shadcn@latest кнопка добавления диалоговое окно карты форма ввода лист вкладки аватар значок аккордеон команда всплывающее сообщение
```
|||сентябрь|||
**Ключевые компоненты этого приложения:**
- «Карточка» — карты ресурсов, карты навыков, карты дочерних профилей.
- `Диалог` / `Лист` -- Модальные взаимодействия, переключатель языка.
— «Форма» + «Ввод» — формы дочернего профиля, создание сообщений на форуме.
- `Вкладки` -- Навигация между разделами.
- «Аватар» — отображение пользователя на форуме (с анонимной опцией)
- «Значок» — уровни навыков, языковые теги.
- `Аккордеон` -- Часто задаваемые вопросы, подробности о ресурсе.
- `Command` -- Палитра поиска ресурсов.
- `Тост` -- Уведомления
|||сентябрь|||
**Встроенные специальные возможности:**
- Все компоненты на основе Radix автоматически включают роли и атрибуты ARIA.
- Навигация с помощью клавиатуры работает «из коробки» (Tab, Enter, Escape, клавиши со стрелками)
- Управление фокусом и захват фокуса в модальных окнах.
- Объявления программы чтения с экрана для динамического контента.
- `aria-describedby` автоматически связывается при ошибках проверки
- `aria-invalid` устанавливается при ошибках формы

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

**Почему бы НЕ использовать пользовательский интерфейс Chakra:** Более тяжелая среда выполнения (CSS-in-JS), стилизация на основе свойств менее гибкая, чем служебные классы Tailwind, более низкий импульс экосистемы в 2025–2026 годах.
|||сентябрь|||
**Почему бы НЕ Material UI:** Очень тяжелый пакет, язык дизайна Google может показаться клиническим для приложения сообщества, его сложнее глубоко настроить.
|||сентябрь|||
**Источники:**
- [shadcn/ui Guide 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Доступные компоненты shadcn/ui](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-comComponents-build-production-ready-apps-with-react-typescript-tailwind-css)
- [Сравнение библиотек React UI 2025] (https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui vs Chakra vs MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-comComponent-battle-2025)
|||сентябрь|||
---
|||сентябрь|||
## 8. ФУНКЦИЯ ФОРУМА / СООБЩЕСТВА
|||сентябрь|||
### Архитектура: индивидуальная сборка с помощью Supabase Realtime
|||сентябрь|||
**Модель данных (SQL):**
```sql
-- Категории форума
СОЗДАТЬ ТАБЛИЦУ forum_categories (
  id UUID ПЕРВИЧНЫЙ КЛЮЧ ПО УМОЛЧАНИЮ gen_random_uuid(),
  name_key ТЕКСТ НЕ NULL,
  описание_ключа ТЕКСТ,
  значок ТЕКСТ,
  sort_order ЦЕЛОЕ ПО УМОЛЧАНИЮ 0,
  создано_at TIMESTAMPTZ ПО УМОЛЧАНИЮ СЕЙЧАС()
);
|||сентябрь|||
-- Сообщения на форуме (темы)
СОЗДАТЬ ТАБЛИЦУ forum_posts (
  id UUID ПЕРВИЧНЫЙ КЛЮЧ ПО УМОЛЧАНИЮ gen_random_uuid(),
  Category_id UUID ССЫЛКИ forum_categories(id),
  author_id ССЫЛКИ на UUID auth.users(id),
  is_anonymous BOOLEAN DEFAULT false,
  отображаемое_имя ТЕКСТ,
  заголовок ТЕКСТ НЕ NULL,
  контент ТЕКСТ НЕ NULL,
  original_language ТЕКСТ ПО УМОЛЧАНИЮ 'ru',
  upvote_count ЦЕЛОЕ ЧИСЛО ПО УМОЛЧАНИЮ 0,
  comment_count ЦЕЛОЕ ЧИСЛО ПО УМОЛЧАНИЮ 0,
  is_pinned BOOLEAN DEFAULT false,
  is_moderated BOOLEAN ПО УМОЛЧАНИЮ false,
  создано_at TIMESTAMPTZ DEFAULT NOW(),
  обновлено_at TIMESTAMPTZ ПО УМОЛЧАНИЮ СЕЙЧАС()
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

-- Комментарии к сообщениям
СОЗДАТЬ ТАБЛИЦУ forum_comments (
  id UUID ПЕРВИЧНЫЙ КЛЮЧ ПО УМОЛЧАНИЮ gen_random_uuid(),
  post_id UUID ССЫЛКИ forum_posts(id) ПРИ УДАЛЕНИИ КАСКАДА,
  родитель_ид UUID ССЫЛКИ forum_comments(id),
  author_id ССЫЛКИ на UUID auth.users(id),
  is_anonymous BOOLEAN DEFAULT false,
  отображаемое_имя ТЕКСТ,
  контент ТЕКСТ НЕ NULL,
  original_language ТЕКСТ ПО УМОЛЧАНИЮ 'ru',
  upvote_count ЦЕЛОЕ ЧИСЛО ПО УМОЛЧАНИЮ 0,
  создано_at TIMESTAMPTZ ПО УМОЛЧАНИЮ СЕЙЧАС()
);
|||сентябрь|||
-- Голоса за
СОЗДАТЬ ТАБЛИЦУ forum_upvotes (
  id UUID ПЕРВИЧНЫЙ КЛЮЧ ПО УМОЛЧАНИЮ gen_random_uuid(),
  user_id UUID ССЫЛКИ auth.users(id),
  post_id UUID ССЫЛКИ forum_posts(id),
  comment_id UUID ССЫЛКИ forum_comments(id),
  создано_at TIMESTAMPTZ DEFAULT NOW(),
  УНИКАЛЬНО(user_id, post_id),
  УНИКАЛЬНО(user_id, comment_id)
);
|||сентябрь|||
-- Кэшированные переводы
СОЗДАТЬ ТАБЛИЦУ forum_translations (
  id UUID ПЕРВИЧНЫЙ КЛЮЧ ПО УМОЛЧАНИЮ gen_random_uuid(),
  source_type ТЕКСТ НЕ NULL,
  source_id UUID НЕ НУЛЬ,
  target_language ТЕКСТ НЕ NULL,
  переведенный_заголовок ТЕКСТ,
  переведенный_контент ТЕКСТ НЕ NULL,
  создано_at TIMESTAMPTZ DEFAULT NOW(),
  УНИКАЛЬНО(идентификатор_источника, целевой_язык)
);
```
|||сентябрь|||
**Обновления в реальном времени:**
``` машинописный текст
константный канал = супабаза
  .channel('сообщения на форуме')
  .on('postgres_changes', {
    событие: «ВСТАВКА»,
    схема: «публичный»,
    таблица: 'forum_posts',
    фильтр: `category_id=eq.${categoryId}`
  }, (полезная нагрузка) => {
    // Добавляем новое сообщение в пользовательский интерфейс
  })
  .подписаться()
```
|||сентябрь|||
**Безопасность анонимных публикаций:**
- Сообщения от анонимных пользователей (анонимная аутентификация Supabase) могут помечаться по-разному.
- Политика RLS проверяет утверждение is_anonymous в JWT.
- Отображать псевдонимы (например, «Родитель № 4827») вместо пустых имен.
|||сентябрь|||
**Модерация (MVP):** Простая кнопка жалобы на каждое сообщение/комментарий. Флаг администратора, чтобы скрыть сообщаемый контент. Будущее: модерация контента на базе искусственного интеллекта через Claude API.
|||сентябрь|||
**Перевод по требованию:** Сообщения сохраняются на языке оригинала. Кнопка «Перевести» запускает Google Cloud Translation API. Перевод кэшируется в таблице forum_translations. Последующие запросы на том же языке обрабатываются из кеша.
|||сентябрь|||
**Источники:**
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [Создать форум сообщества с помощью Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
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
|||сентябрь|||
## 9. ИНТЕГРАЦИЯ ИИ
|||сентябрь|||
### Архитектура: Vercel AI SDK + Claude API + Supabase pgvector RAG
|||сентябрь|||
**Поток данных:**
```
Вопрос пользователя (многоязычный)
  -> [Google Переводчик на английский] (если не английский)
  -> [Создать встраивание] (text-embedding-3-small)
  -> [Поиск сходства Supabase pgvector]
  -> [Полученные контекстные документы]
  -> [Claude API с системной подсказкой + контекстом + вопрос пользователя]
  -> [Ответ на английском языке]
  -> [Google Переводчик на язык пользователя] (если не английский)
  -> Отображается пользователю (в потоковом режиме)
```
|||сентябрь|||
**Настройка Vercel AI SDK:**
``` баш
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```
|||сентябрь|||
``` машинописный текст
// приложение/api/chat/route.ts
импортировать { антропный } из '@ai-sdk/anthropic';
импортировать {streamText} из 'ai';
|||сентябрь|||
экспортировать асинхронную функцию POST(req: Request) {
  const {messages, locale} = await req.json();
  const result =streamText({
    модель: антропная('claude-3-5-haiku-20241022'),
    система: СИСТЕМА_ПРОМПТ,
    сообщения: augmentedMessages,
  });
  вернуть результат.toDataStreamResponse();
}
```
|||сентябрь|||
``` машинописный текст
// На стороне клиента: компоненты/AiChat.tsx
'использовать клиент';
импортировать { useChat } из '@ai-sdk/react';

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

функция экспорта AiChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    API: '/api/чат',
  });
  // Пользовательский интерфейс чата с потоковой передачей ответов
}
```
|||сентябрь|||
**Выбор модели Клода для хакатона:**
|||сентябрь|||
| Модель | Ввод/1М токенов | Выход/1 млн токенов | Лучшее для |
|-------|----------------|-------------------|----------|
| Клод Хайку 4.5 | $1,00 | $5,00 | **Ответы в чате (РЕКОМЕНДУЕТСЯ)** |
| Клод Сонет 4.5 | $3,00 | $15,00 | Сложные рассуждения |
| Клод Опус 4.5 | $5,00 | $25,00 | Избыток для чата |
|||сентябрь|||
**Рекомендация:** Claude Haiku 4.5 – быстрый (малая задержка при потоковой передаче), дешевый (отлично подходит для бюджета хакатона) и достаточно функциональный для вопросов и ответов по ресурсам и общего руководства.
|||сентябрь|||
**Системная подсказка (безопасность прежде всего для медицинской информации):**
```
Вы — поддерживающий ИИ-помощник, помогающий родителям детей-иммигрантов.
с расстройством аутистического спектра (РАС). Вы предоставляете информацию о:
- Ресурсы, методы лечения и образовательные программы по РАС.
- Навигация по системам здравоохранения и образования США.
- Процессы IEP (индивидуализированная образовательная программа)
- Доступные государственные и некоммерческие программы поддержки.
- Общие этапы развития
|||сентябрь|||
ВАЖНЫЕ ПРАВИЛА БЕЗОПАСНОСТИ:
- Вы НЕ врач. Всегда рекомендуем проконсультироваться с медицинскими работниками.
- Никогда не ставьте диагнозы и не предлагайте конкретные методы лечения.
- Всегда включайте заявление об отказе от ответственности при обсуждении тем, касающихся медицины и развития.
- Если пользователь описывает неотложную медицинскую помощь, попросите его позвонить 911.
- Будьте культурно чувствительны и избегайте предположений о структуре семьи.
- Используйте простой и понятный язык.
- Если вы не уверены, скажите «Я не знаю», а не предполагайте.
- Никогда не собирайте и не запрашивайте личную информацию.
```
|||сентябрь|||
**Настройка RAG Supabase pgvector:**
```sql
СОЗДАТЬ РАСШИРЕНИЕ, ЕСЛИ НЕ СУЩЕСТВУЕТ вектор;
|||сентябрь|||
CREATE TABLE ресурсы (
  id UUID ПЕРВИЧНЫЙ КЛЮЧ ПО УМОЛЧАНИЮ gen_random_uuid(),
  заголовок ТЕКСТ НЕ NULL,
  контент ТЕКСТ НЕ NULL,
  категория ТЕКСТ НЕ NULL,
  исходный_url ТЕКСТ,
  состояние ТЕКСТ,
  язык ТЕКСТ ПО УМОЛЧАНИЮ 'en',
  вектор внедрения (1536),
  создано_at TIMESTAMPTZ DEFAULT NOW(),
  обновлено_at TIMESTAMPTZ ПО УМОЛЧАНИЮ СЕЙЧАС()
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

СОЗДАТЬ ИНДЕКС НА ресурсах С ИСПОЛЬЗОВАНИЕМ hnsw (встраивание вектора_cosine_ops);
|||сентябрь|||
СОЗДАТЬ ИЛИ ЗАМЕНИТЬ ФУНКЦИЮ match_resources(
  вектор query_embedding (1536),
  match_threshold FLOAT ПО УМОЛЧАНИЮ 0,7,
  match_count INT ПО УМОЛЧАНИЮ 5
)
ТАБЛИЦА ВОЗВРАЩАЕТСЯ (идентификатор UUID, ТЕКСТ заголовка, ТЕКСТ содержимого, ТЕКСТ категории, сходство с плавающей запятой)
ЯЗЫК plpgsql AS $$
НАЧАТЬ
  ВЕРНУТЬ ЗАПРОС
  ВЫБЕРИТЕ r.id, r.title, r.content, r.category,
    1 - (r.embedding <=> query_embedding) Сходство AS
  ИЗ ресурсов р
  ГДЕ 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDER BY r.embedding <=> query_embedding
  LIMIT match_count;
КОНЕЦ;
$$;
```
|||сентябрь|||
**Модель внедрения:** Используйте OpenAI `text-embedding-3-small` (0,02 доллара США/1 млн токенов, 1536 измерений, в 5 раз дешевле, чем ada-002, с лучшей производительностью).
|||сентябрь|||
**Ярлык хакатона:** Предварительно заполните таблицу ресурсов 20–50 курируемыми ресурсами об аутизме, индивидуальных программах обучения, типах терапии и организациях поддержки. Создавайте для них внедрения во время установки, а не создайте полный конвейер приема.
|||сентябрь|||
**Источники:**
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Руководство по Next.js] (https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Цены на API Claude](https://platform.claude.com/docs/en/about-claude/pricing)
- [Клод для здравоохранения 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI и векторы](https://supabase.com/docs/guides/ai)
- [Вложения OpenAI](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Создать RAG с помощью Клода и pgvector](https://www.tigerdata.com/blog/retrival-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [Чат-бот RAG с Supabase pgvector] (https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)
|||сентябрь|||
---
|||сентябрь|||
## 10. ДОСТУПНОСТЬ
|||сентябрь|||
### Стратегия соответствия WCAG 2.2 AA

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

**Основные принципы для этой аудитории:**
1. **Когнитивная доступность** – предсказуемое расположение, четкая визуальная иерархия (важно для родителей, находящихся в состоянии стресса/перегруженности, А ТАКЖЕ из соображений, связанных с аутизмом)
2. **Поддержка для людей с низким уровнем грамотности** – Визуальные подсказки, значки рядом с текстом, простой язык.
3. **Многоязычная доступность** – программы чтения с экрана должны работать с языками с письмом справа налево.
4. **Доступность с помощью двигателя** – большие сенсорные объекты (минимум 44 x 44 пикселей согласно WCAG 2.2).
|||сентябрь|||
**Встроено через shadcn/ui + Radix:**
- Все компоненты автоматически включают роли/атрибуты ARIA.
- Навигация с помощью клавиатуры (Tab, Enter, Escape, клавиши со стрелками)
- Управление фокусом и захват фокуса в модальных окнах.
- Объявления программы чтения с экрана для динамического контента.
- `aria-describedby` связана с ошибками проверки
- `aria-invalid` устанавливается при ошибках формы
|||сентябрь|||
**Дополнительные библиотеки:**
``` баш
npm install -D @axe-core/react # Регистрирует все проблемы в консоли браузера
npm install -D eslint-plugin-jsx-a11y # Lint для проблем с a11y
```
|||сентябрь|||
**Цветовой контраст:** WCAG AA требует 4,5:1 для обычного текста и 3:1 для крупного текста. Обеспечить переключение режима высокой контрастности.
|||сентябрь|||
**Аспекты проектирования, ориентированные на аутизм:**
— Шрифты без засечек (например, Inter, system-ui) — их легче читать нейроотличным пользователям.
- Последовательная и предсказуемая навигация по всем страницам.
- Минимальная анимация (соблюдайте «предпочитает уменьшенное движение»)
- Четкие визуальные границы между разделами
- Избегайте сенсорной перегрузки (приглушенные цвета, отсутствие мерцания)
- Простое переключение языка для упрощения контента.
|||сентябрь|||
``` машинописный текст
// В компонентах соблюдайте предпочтения движения:
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
```
|||сентябрь|||
**Источники:**
- [WCAG 2.2 в React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Руководство WCAG 2025 по цветовому контрасту] (https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [Лучшие практики React Accessibility](https://rtcamp.com/handbook/react-best-practices/accessibility/)
|||сентябрь|||
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

## 11. РАЗВЕРТЫВАНИЕ
|||сентябрь|||
### Рекомендация: уровень бесплатного пользования Vercel
|||сентябрь|||
**Почему Vercel:** Создан создателями Next.js — не требует настройки. Просто `git push` для развертывания.
|||сентябрь|||
**Ограничения уровня бесплатного пользования:**
- Пропускная способность 100 ГБ/месяц
- 100 тысяч вызовов бессерверных функций в месяц.
- Неограниченное количество развертываний
- 10-секундный тайм-аут функции (достаточный для потоковой передачи AI)
- Поддержка индивидуального домена
|||сентябрь|||
**Переменные среды:**
``` баш
# .env.local (никогда не делайте этого)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=эйДж...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # Только на стороне сервера
ANTHROPIC_API_KEY=sk-ant-... # Только на стороне сервера
OPENAI_API_KEY=sk-... # Только на стороне сервера (для встраивания)
GOOGLE_TRANSLATE_API_KEY=... # Только на стороне сервера
```
|||сентябрь|||
**ВАЖНО:** переменные с префиксом `NEXT_PUBLIC_` доступны браузеру. Ключи API НЕ должны иметь этот префикс.
|||сентябрь|||
**Советы для демонстрации:** Выполните развертывание в Верселе как можно раньше (в течение первого часа). Используйте URL-адреса предварительного просмотра, чтобы поделиться ими с судьями. Защита паролем доступна для предварительных развертываний.
|||сентябрь|||
**Источники:**
- [Развертывание Next.js на Vercel] (https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Развертывание приложений Next.js 2026] (https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [Переменные среды Vercel](https://vercel.com/docs/environment-variables)

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
|||сентябрь|||
## 12. КОНФИДЕНЦИАЛЬНОСТЬ И БЕЗОПАСНОСТЬ
|||сентябрь|||
### Архитектура, обеспечивающая конфиденциальность
|||сентябрь|||
**РУКОВОДЯЩИЙ ПРИНЦИП:** Это приложение обслуживает уязвимые группы населения. Нарушение конфиденциальности может иметь реальные последствия (риск депортации для семей без документов). Безопасность не является обязательной.
|||сентябрь|||
**Соображения HIPAA.** Приложение НЕ является объектом, на который распространяется действие HIPAA, и, скорее всего, НЕ требует полного соответствия HIPAA. Однако если вы храните какую-либо информацию о здоровье детей, относитесь к ней как к конфиденциальной. Лучший подход: свести к минимуму то, что вы храните на стороне сервера.
|||сентябрь|||
**Соображения COPPA (дети до 13 лет):** Если родители являются единственными пользователями, COPPA менее строгий, но все же применим для хранения данных детей. Обновление COPPA 2025 года вводит более строгие требования к минимизации данных. **Рекомендация.** Создавайте приложение только для РОДИТЕЛЕЙ, а не для непосредственного использования детьми.
|||сентябрь|||
**Архитектура данных: что и где хранить:**
|||сентябрь|||
| Тип данных | Место хранения | Шифрование |
|-----------|-----------------|------------|
| Имя ребенка | Клиентская сторона (localStorage/IndexedDB) | Дополнительный клиентский AES-256 |
| Детский диагноз | Клиентская часть | Шифрование на стороне клиента AES-256 |
| Навыки/этапы ребенка | Супабаза (зашифрованная в состоянии покоя) | Супабаза по умолчанию |
| Сообщения на форуме | Супабаза | В состоянии покоя (по умолчанию в Supabase) |
| История чата AI | Только на стороне клиента (sessionStorage) | Эфемерный, не сохранившийся |
| Предпочитаемый язык пользователя | Метаданные пользователя Supabase | Стандарт |
| Токены анонимных пользователей | Супабаза авторизации | Стандарт JWT |

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

**Правила RLS:**
```sql
-- Пользователи могут видеть только свои дочерние профили.
СОЗДАТЬ ПОЛИТИКУ «Пользователи могут просматривать своих детей»
  НА дочерних_профилях ДЛЯ ВЫБОР
  ИСПОЛЬЗОВАНИЕ (auth.uid() = родительский_id);
|||сентябрь|||
-- Анонимные пользователи могут читать сообщения на форуме.
СОЗДАТЬ ПОЛИТИКУ «Любой может читать сообщения»
  НА forum_posts ДЛЯ SELECT
  ИСПОЛЬЗОВАНИЕ (is_moderated = ложь);
|||сентябрь|||
-- Публиковать сообщения могут только авторизованные пользователи.
СОЗДАТЬ ПОЛИТИКУ «Аутентифицированные пользователи могут публиковать сообщения»
  НА forum_posts ДЛЯ ВСТАВКИ
  С ПРОВЕРКОЙ (auth.uid() НЕ НУЛЬ);
```
|||сентябрь|||
**Чего НЕ следует делать:**
- НЕ храните иммиграционный статус нигде и никогда.
- НЕ требуйте настоящие имена
- НЕ храните IP-адреса в журналах приложений.
- НЕ используйте аналитику отслеживания (без Google Analytics — используйте Plausible или ничего)
- НЕ храните разговоры в чате AI на стороне сервера.
- НЕ требуют услуг определения местоположения
|||сентябрь|||
**Источники:**
- [HIPAA и приложения для здоровья](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [Соответствие COPPA 2025] (https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Руководство по приложению «Zero-Knowledge Health»] (https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Полное руководство Supabase RLS 2026] (https://vibeappscanner.com/supabase-row-level-security)
|||сентябрь|||
---
|||сентябрь|||
## 13. СТРАТЕГИЯ ХАКАТОНА И БЮДЖЕТ ВРЕМЕНИ
|||сентябрь|||
### 10-часовой план сборки (8:30–18:30)

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

**Приоритизация функций (метод MoSCoW):**
|||сентябрь|||
| Приоритет | Особенность | Статус | Стандартное восточное время. Время |
|----------|---------|--------|-----------|
| **ОБЯЗАТЕЛЬНО** | Многоязычный интерфейс (EN + ES + AR) | Построить полностью | 1,5 часа |
| **ОБЯЗАТЕЛЬНО** | AI-помощник в чате (с RAG) | Построить полностью | 2 часа |
| **ОБЯЗАТЕЛЬНО** | Библиотека ресурсов (доступна для просмотра и поиска) | Построить полностью | 1 час |
| **ОБЯЗАТЕЛЬНО** | Анонимно + авторизация по телефону | Построить полностью | 1 час |
| **ОБЯЗАТЕЛЬНО** | Профиль ребенка с отслеживанием навыков | Построить полностью | 1,5 часа |
| **СЛЕДУЕТ** | Форум сообщества | Базовая сборка (без режима реального времени) | 1 час |
| **СЛЕДУЕТ** | Офлайн-доступ к PWA | Сборка (настройка Serwist) | 0,5 часа |
| **МОЖЕТ** | Перевод сообщений на форуме | Заглушка с макетом | 0,5 часа |
| **МОЖЕТ** | Темный режим/высокая контрастность | Быстрое переключение | 0,25 часа |
| **НЕ БУДЕТ** | Полная система модерации | Только демо-версия | -- |
| **НЕ БУДЕТ** | Push-уведомления | Пропустить полностью | -- |
| **НЕ БУДЕТ** | Видеоконтент | Пропустить полностью | -- |
|||сентябрь|||
### Подробное расписание
|||сентябрь|||
```
8:30 - 9:00 (30 мин) УСТАНОВКА ПРОЕКТА
  - Scaffold с приложением create-t3 или Nextbase starter
  - Создание проекта Supabase + таблицы
  - Конвейер развертывания Vercel (развертывание пустой оболочки)
  - Установить ядра
  - Настроены переменные среды.
|||сентябрь|||
9:00 - 10:00 (60 мин) ФУНДАМЕНТ
  - Компонент макета с i18n (заголовок, навигация, переключатель языка)
  - установлены компоненты shadcn/ui
  - Подключена поддержка RTL
  - Аутентификация Supabase: анонимный интерфейс + вход по электронной почте.
  - Структура файлов перевода (EN + ES + AR)
|||сентябрь|||
10:00 – 11:30 (90 минут) ОСНОВНАЯ ФУНКЦИЯ №1: AI-ЧАТ
  - Vercel AI SDK + настройка Клода Хайку
  - Маршрут API для чата с потоковой передачей
  - Компонент пользовательского интерфейса чата с хуком useChat.
  - Системная подсказка с ограждениями безопасности
  - Предварительно заполните 20 ресурсов в pgvector.
  - Конвейер RAG (встроить запрос -> поиск -> подсказка дополнения)
|||сентябрь|||
11:30 – 12:00 (30 минут) УТРЕННЕЕ РАЗВЕРТЫВАНИЕ + ТЕСТИРОВАНИЕ
  - Развертывание в Верселе
  - Тест на мобильном телефоне
  - Исправить критические ошибки
|||сентябрь|||
12:00 - 12:30 (30 мин) ОБЕД

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

12:30–1:30 (60 минут) ОСНОВНАЯ ФУНКЦИЯ №2: БИБЛИОТЕКА РЕСУРСОВ
  - Карты ресурсов с фильтрацией по категориям
  - Функция поиска
  - Страницы с подробными сведениями о ресурсах
  - Исходные данные: 20–50 курируемых ресурсов.
|||сентябрь|||
1:30–3:00 (90 мин) ОСНОВНАЯ ФУНКЦИЯ №3: ПРОФИЛЬ РЕБЕНКА + НАВЫКИ
  - Форма создания дочернего профиля
  - Компоненты карты навыков
  - Пользовательский интерфейс отслеживания этапов
  - Клиентское хранилище для конфиденциальных данных
  - Просмотр панели профиля
|||сентябрь|||
3:00–4:00 (60 минут) ФУНКЦИЯ №4: ФОРУМ СООБЩЕСТВА (БАЗОВЫЙ)
  - Просмотр списка сообщений на форуме
  - Создать форму публикации
  - Базовая система комментариев
  - Организация по категориям
|||сентябрь|||
4:00 - 4:30 (30 мин) PWA + ПЕРЕВОДЫ
  - Настройка сервис-воркера
  - Заполняем ключи перевода для ES и AR
  - Проверьте макет RTL на арабском языке.
|||сентябрь|||
4:30 - 5:30 (60 мин) ПОЛЬСКИЙ И ДЕМО ПОДГОТОВКА
  - Исправить ошибки пользовательского интерфейса
  - Добавлены состояния загрузки и обработка ошибок.
  - Переключение режима высокой контрастности (если время)
  - Сделать скриншоты для презентации
  - Запись резервной копии демо-видео
|||сентябрь|||
5:30 – 6:00 (30 мин) ЗАКЛЮЧИТЕЛЬНОЕ РАЗВЕРТЫВАНИЕ + ПРЕЗЕНТАЦИЯ
  - Окончательное развертывание Верселя
  - Протестируйте все функции от начала до конца
  - Подготовьте 3-минутный питч-сценарий.
|||сентябрь|||
6:00 - 6:30 (30 мин) БУФЕР/ПРЕЗЕНТАЦИЯ
```
|||сентябрь|||
### Что имитировать/заглушить:
- **Модерация форума:** Просто скройте сообщения, на которые поступили жалобы, с помощью флажка, без панели администратора.
- **Перевод форума:** Кнопка «Перевести» показывает загрузку, а затем исходный текст (или Google Translate, если есть время).
- **Последовательность действий для сброса пароля:** Используйте электронную почту Supabase по умолчанию.
– **Аватары пользователей:** инициалы или значок по умолчанию, без загрузки.
– **Панель администратора:** Полностью пропустить

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

### Советы по оптимизации демо:
1. **Начните с истории**: «Познакомьтесь с Фатимой, сирийской матерью, которая только что переехала в США. У ее 4-летнего сына недавно диагностировали аутизм. Она не говорит по-английски. Она не знает, с чего начать».
2. **Показать переключатель языка** – прямое переключение с английского на арабский. Флип RTL визуально впечатляет судей.
3. **Демонстрация чата с искусственным интеллектом** – задайте вопрос на испанском языке. Покажите, что он предоставляет ресурсы.
4. **Показать возможность работы в автономном режиме** – выключите Wi-Fi и покажите, что приложение все еще работает.
5. **Уделяйте особое внимание конфиденциальности** — «Настоящее имя не требуется. Адрес электронной почты не требуется. Она может безопасно использовать это приложение».
|||сентябрь|||
**Источники:**
- [От нуля до демо за 36 часов](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [Приоритизация функций MVP](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Советы по демонстрации хакатона (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Руководство по презентации хакатона] (https://www.inknarrates.com/post/hackathon-pitch-deck)
|||сентябрь|||
---
|||сентябрь|||
## 14. ШАБЛОНЫ И ШАБЛОНЫ
|||сентябрь|||
### Вариант 1: create-t3-app (РЕКОМЕНДУЕТСЯ для команд, знакомых с tRPC)
``` баш
npx create-t3-app@latest autism-bridge --typescript --tailwind --trpc --prisma
```
- GitHub: https://github.com/t3-oss/create-t3-app
- Включает: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS.
- Вы добавляете: Supabase, next-intl, shadcn/ui, Vercel AI SDK.
|||сентябрь|||
### Вариант 2: Nextbase Starter (РЕКОМЕНДУЕТСЯ для упрощения настройки)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Включает: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query.
- Вы добавляете: next-intl, shadcn/ui, Vercel AI SDK, Prisma (необязательно).
|||сентябрь|||
### Вариант 3: Vercel Supabase Starter
- Шаблон: https://vercel.com/templates/next.js/supabase.
- Официальный шаблон Vercel/Supabase с аутентификацией SSR.
|||сентябрь|||
### Вариант 4: супа-следующий-стартер
- GitHub: https://github.com/michaeltroya/supa-next-starter
- Включает: Next.js, Supabase, Tailwind, shadcn/ui (уже интегрировано).

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

### После строительных лесов добавьте:
``` баш
npm установить следующий-intl rtl-detect
npm install ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm install @serwist/next @serwist/precaching @serwist/sw
npx shadcn@latest init
npx shadcn@latest кнопка добавления диалоговое окно карты форма ввода лист вкладки аватар значок аккордеон команда всплывающее сообщение
npm install -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
```
|||сентябрь|||
### Справочные проекты:
- **supabase-comments-extension** (GitHub:malerba118/supabase-comments-extension) — Комментарии, ответы, реакции
- **ojasskapre/nextjs-starter-template** -- Интерфейсы чата Next.js + Supabase + LLM
- **shwosner/realtime-chat-supabase-react** -- Чат в реальном времени с Supabase
|||сентябрь|||
---
|||сентябрь|||
## 15. ПРОЕКТИРОВАНИЕ СХЕМЫ
|||сентябрь|||
### Полная схема призмы
|||сентябрь|||
```призма
клиент генератора {
  поставщик = "призма-клиент-js"
}
|||сентябрь|||
источник данных БД {
  провайдер = "postgresql"
  URL = env("URL_БАЗЫ ДАННЫХ")
  DirectUrl = env("DIRECT_URL")
}
|||сентябрь|||
// ПОЛЬЗОВАТЕЛЬ И АУТЕНТИФИКАЦИЯ
модель UserProfile {
  строка идентификатора @id @default(uuid())
  authId Строка @unique
  Строка displayName?
  Предпочтительная строка локали @default("en")
  созданоВ DateTime @default(now())
  обновленоДатаВремя @updatedAt
  дети
  Сообщения на форумеСообщение на форуме[]
  форумКомментарии Форумкомментарий[]
  голоса за ForumUpvote[]
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

// ПРОФИЛИ ДЕТЕЙ И ОТСЛЕЖИВАНИЕ НАВЫКОВ
модель ChildProfile {
  строка идентификатора @id @default(uuid())
  родительский идентификатор строка
  родительский UserProfile @relation(поля: [parentId], ссылки: [id])
  ник Строка
  год рождения Int?
  диагнозДата ДатаВремя?
  навыки SkillCard[]
  вехи
  созданоВ DateTime @default(now())
  обновленоДатаВремя @updatedAt
  @@index([parentId])
}
|||сентябрь|||
модель SkillCategory {
  строка идентификатора @id @default(uuid())
  nameKey String
  значок Строка?
  sortOrder Int @default(0)
  навыки SkillCard[]
}
|||сентябрь|||
модель SkillCard {
  строка идентификатора @id @default(uuid())
  childId Строка
  дочерний ChildProfile @relation(поля: [childId], ссылки: [id], onDelete: Cascade)
  Идентификатор категории Строка
  категория SkillCategory @relation(поля: [categoryId], ссылки: [id])
  nameKey String
  уровень Int @default(0)
  отмечает Строка?
  LastAssessed DateTime @default(now())
  созданоВ DateTime @default(now())
  обновленоДатаВремя @updatedAt
  @@index([идентификатор ребенка])
  @@index([идентификатор категории])
}
|||сентябрь|||
модель Майлстоун {
  строка идентификатора @id @default(uuid())
  childId Строка
  дочерний ChildProfile @relation(поля: [childId], ссылки: [id], onDelete: Cascade)
  titleКлючевая строка
  описание Строка?
  достигнутоДата ДатаВремя?
  категория Строка
  созданоВ DateTime @default(now())
  @@index([идентификатор ребенка])
}
|||сентябрь|||
// РЕСУРСЫ (встраивание векторов осуществляется через необработанный SQL/pgvector)
Ресурс модели {
  строка идентификатора @id @default(uuid())
  строка заголовка
  строка содержимого @db.Text
  сводная строка?
  категория Строка
  подкатегория Строка?
  строка sourceUrl?
  состояние строки?
  язык Строка @default("en")
  теги Строка[]
  созданоВ DateTime @default(now())
  обновленоДатаВремя @updatedAt
  @@index([категория])
  @@index([состояние])
}
|||сентябрь|||
// ФОРУМ / СООБЩЕСТВО
модель ForumCategory {
  строка идентификатора @id @default(uuid())
  nameKey String
  описаниеКлючевая строка?
  значок Строка?
  sortOrder Int @default(0)
  сообщения ForumPost[]
}
|||сентябрь|||
модель ForumPost {
  строка идентификатора @id @default(uuid())
  Идентификатор категории Строка
  категория ForumCategory @relation(поля: [categoryId], ссылки: [id])
  авторид строка
  автор UserProfile @relation(поля: [authorId], ссылки: [id])
  isAnonymous Логическое значение @default(false)
  строка заголовка
  строка содержимого @db.Text
  originalLang String @default("en")
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  isPinned Логическое значение @default(false)
  isHidden Логическое значение @default(false)
  reportCount Int @default(0)
  комментарии ForumComment[]
  голоса за ForumUpvote[]
  переводы ForumTranslation[]
  созданоВ DateTime @default(now())
  обновленоДатаВремя @updatedAt
  @@index([идентификатор категории])
  @@index([authorId])
  @@index([createdAt])
}
|||сентябрь|||
модель ФорумКомментарий {
  строка идентификатора @id @default(uuid())
  postId строка
  сообщение ForumPost @relation (поля: [postId], ссылки: [id], onDelete: Cascade)
  родительская строка?
  родительский форумКомментарий? @relation("CommentReplies", поля: [parentId], ссылки: [id])
  ответы ForumComment[] @relation("CommentReplies")
  авторид строка
  автор UserProfile @relation(поля: [authorId], ссылки: [id])
  isAnonymous Логическое значение @default(false)
  строка содержимого @db.Text
  originalLang String @default("en")
  upvoteCount Int @default(0)
  isHidden Логическое значение @default(false)
  reportCount Int @default(0)
  голоса за ForumUpvote[]
  переводы ForumTranslation[]
  созданоВ DateTime @default(now())
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

модель ForumUpvote {
  строка идентификатора @id @default(uuid())
  строка идентификатора пользователя
  пользователь UserProfile @relation(поля: [userId], ссылки: [id])
  строка postId?
  опубликовать ФорумПост? @relation(поля: [postId], ссылки: [id], onDelete: Cascade)
  commentId Строка?
  комментарий ФорумКомментарий? @relation(поля: [commentId], ссылки: [id], onDelete: Cascade)
  созданоВ DateTime @default(now())
  @@unique([userId, postId])
  @@unique([userId, commentId])
}
|||сентябрь|||
модель ForumTranslation {
  строка идентификатора @id @default(uuid())
  строка postId?
  опубликовать ФорумПост? @relation(поля: [postId], ссылки: [id], onDelete: Cascade)
  commentId Строка?
  комментарий ФорумКомментарий? @relation(поля: [commentId], ссылки: [id], onDelete: Cascade)
  targetLang Строка
  переведенная строка заголовка?
  переведенная строка содержания @db.Text
  созданоВ DateTime @default(now())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
```
|||сентябрь|||
### Категории исходных данных
|||сентябрь|||
**Категории навыков:** Коммуникация, Социальные навыки, Повседневная жизнь, Двигательные навыки, Академические навыки, Сенсорная обработка, Эмоциональная регуляция.
|||сентябрь|||
**Категории форума:** Знакомство и приветствие, Терапия и лечение (ABA/OT/Речь), Помощь в школе и IEP, Советы по повседневной жизни, Юридические и иммиграционные вопросы, Навигация по здравоохранению, Истории успеха и вехи, Общая поддержка
|||сентябрь|||
**Категории ресурсов:** Типы терапии и поставщики, Ресурсы для образования и IEP, Законные права и защита интересов, Финансовая помощь, Общественные организации, Онлайн-инструменты и приложения, Книги и медиа, Ресурсы для конкретного штата
|||сентябрь|||
---
|||сентябрь|||
## СВОДКА ЗАВИСИМОСТЕЙ PACKAGE.JSON

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
  "зависимости": {
    "следующий": "^16.0.0",
    "реагировать": "^19.0.0",
    "react-dom": "^19.0.0",
    "машинопись": "^5.7.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "призма": "^6.0.0",
    "@prisma/client": "^6.0.0",
    "next-intl": "^4.0.0",
    "rtl-detect": "^1.1.2",
    "ай": "^6.0.0",
    "@ai-sdk/anthropic": "^1.0.0",
    "@ai-sdk/openai": "^1.0.0",
    "@ai-sdk/react": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "попутный ветер-слияние": "^2.5.0",
    "lucid-react": "^0.450.0",
    "@servist/next": "^9.0.0",
    "@servist/precaching": "^9.0.0",
    "@servist/sw": "^9.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "зод": "^3.23.0",
    "react-hook-form": "^7.53.0",
    "@hookform/resolvers": "^3.9.0"
  },
  "devDependency": {
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "@types/rtl-detect": "^1.0.0"
  }
}
```
|||сентябрь|||
---
|||сентябрь|||
## КРАТКАЯ СПРАВКА: КЛЮЧЕВЫЕ ССЫЛКИ НА ДОКУМЕНТАЦИЮ
|||сентябрь|||
| Инструмент | Документация |
|------|--------------|
| Next.js 16 | https://nextjs.org/docs |
| Супабаза | https://supabase.com/docs |
| Супабаза аутентификации | https://supabase.com/docs/guides/auth |
| Супабаза реального времени | https://supabase.com/docs/guides/realtime |
| Супабаза pgvector | https://supabase.com/docs/guides/ai |
| следующий-международный | https://next-intl.dev/ |
| шадкн/пользовательский интерфейс | https://ui.shadcn.com/ |
| Vercel AI SDK | https://ai-sdk.dev/docs/introduction |
| Клод API | https://platform.claude.com/docs |
| Призма | https://www.prisma.io/docs |
| Сервисист PWA | https://serwist.pages.dev/docs/next/getting-started |
| CSS попутного ветра | https://tailwindcss.com/docs |
| Google Cloud Translation | https://cloud.google.com/translate/docs |
| Вложения OpenAI | https://platform.openai.com/docs/guides/embeddings |
| Развертывание Версель | https://vercel.com/docs |
|||сентябрь|||
---
|||сентябрь|||
Это исследование охватывает все 10 запрошенных вами областей, а также стратегию хакатона, архитектуру конфиденциальности, шаблонные варианты и полную разработку схемы. Стек спроектирован таким образом, чтобы каждый сервис соответствовал уровням бесплатного пользования для хакатона, аутентификация сохраняла конфиденциальность для незарегистрированных пользователей, а бюджет времени был реалистичным для 10-часовой сборки. Я попытался сохранить это как файл в `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md`, но в разрешении на запись файла было отказано. Если вы хотите, чтобы я сохранил это на диск, вы можете предоставить разрешение на запись, и я создам файл.
---
|||сентябрь|||
## Дополнительные исследования (обновлено в марте 2026 г.)
|||сентябрь|||
### Лучшая библиотека i18n для более чем 10 языков (React + TypeScript)

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

**Рекомендуется: act-i18next** — 2,1 миллиона загрузок в неделю, самое популярное решение React i18n.
- Построено на экосистеме i18next с плагинами для определения языка, асинхронной загрузки, сложного множественного числа.
- Пакет: 22,2 КБ (i18next 15,1 КБ + реакции-i18next 7,1 КБ)
- Поддерживает файлы перевода JSON — легко добавлять языки постепенно.
- Источник: [Блог фраз](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)
|||сентябрь|||
**Облегченная альтернатива: LinguiJS** — общий размер 10,4 КБ (вполовину меньше), синтаксис сообщений ICU, поддержка TypeScript.
|||сентябрь|||
**Для ускорения хакатона**: React-i18next с файлами перевода JSON. Начните с английского + испанского, добавьте другие языки через файлы JSON. Используйте Google Translate API или DeepL для первоначальных переводов.
|||сентябрь|||
Источник: [Руководство GloryWebs 2026] (https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize] (https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)
|||сентябрь|||
### Ограничения уровня бесплатного пользования Supabase (2026 г.)
|||сентябрь|||
- **2 активных проекта** (приостановлено после 1 недели бездействия)
- **500 МБ** хранилище базы данных (общий процессор)
- **2 ГБ** исходящего трафика базы данных в месяц
- **50 000** активных пользователей в месяц (авторизация)
- **1 ГБ** файлового хранилища
- **2 ГБ** выходной объем хранилища
- **500 000** вызовов пограничных функций в месяц.
- Никаких резервных копий и соглашений об уровне обслуживания в бесплатном плане.
|||сентябрь|||
Источник: [Цены на Supabase] (https://supabase.com/pricing), [Разбивка UI Bakery] (https://uibakery.io/blog/supabase-pricing).
|||сентябрь|||
**Для хакатона**: 500 МБ более чем достаточно. Даже если каждый из 10 000 пользователей хранит профиль + данные детей + сообщения на форуме, вы будете использовать <50 МБ. Ограничение аутентификации в 50 000 MAU также очень щедрое для демо-версии.

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
