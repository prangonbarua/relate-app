# Hackathon Tech Stack Research: Padres inmigrantes + Aplicación para autismo

**Fecha:** 2026-02-28 | **Tiempo de construcción:** 10 horas (8:30 a. m. - 6:30 p. m.)

---

## 1. RESUMEN DE PILA RECOMENDADA

| Capa | Tecnología | Por qué |
|-------|-----------|-----|
| **Marco** | Next.js 16 (enrutador de aplicaciones) | SSR para SEO, rutas API, soporte PWA, implementación de Vercel |
| **Andamio** | `create-t3-app` o iniciador Nextbase | La ruta más rápida para escribir full-stack |
| **Idioma** | TypeScript en todas partes | Seguridad de tipo de extremo a extremo |
| **API de back-end** | tRPC (a través de la pila T3) O rutas API Next.js + cliente Supabase | Tipo seguro, cero repeticiones |
| **Base de datos** | Supabase (PostgreSQL) | Nivel gratuito, autenticación, tiempo real, pgvector, RLS |
| **ORM** | prisma | Tipos generados automáticamente, herramientas de migración |
| **Autenticación** | Autenticación de Supabase | Inicio de sesión anónimo, OTP de teléfono, correo electrónico/contraseña, no se requiere PII |
| **i18n** | siguiente-intl | Integración nativa de Next.js, compatibilidad con RSC, paquete pequeño, compatibilidad con RTL |
| **UI** | shadcn/ui + CSS viento de cola | Copiar y pegar componentes, propiedad total, Radix a11y, listo para RTL |
| **Chat AI** | Vercel AI SDK + Claude API (Haiku 4.5) | Streaming, usoChat Hook, rentable |
| **BD vectorial** | Supabase pgvector | Misma base de datos, sin servicio adicional, RLS en vectores |
| **Incrustaciones** | Incrustación de texto OpenAI-3-pequeño | 0,02 $/1 millón de tokens, 5 veces más barato que ada-002 |
| **API de traducción** | API de traducción de Google Cloud | 500.000 caracteres gratuitos al mes, más de 130 idiomas, sin almacenamiento de datos |
| **PWA** | Serwist (@serwist/siguiente) | Sucesor moderno de próxima pwa, soporte fuera de línea |
| **Implementación** | Vercel (nivel gratuito) | Implementación de Next.js sin configuración, ancho de banda de 100 GB |
| **Foro** | Personalizado con Supabase Realtime | Actualizaciones en tiempo real, RLS para moderación |

**Costo mensual estimado total (Hackathon/Demo): $0** -- Todos los servicios anteriores tienen niveles gratuitos suficientes para una demostración de hackathon.

---

## 2. MARCO DE REACCIÓN

### Recomendación: Next.js 16 (enrutador de aplicaciones)

**Por qué Next.js en lugar de Vite+React para ESTA aplicación:**
- SSR/SSG para SEO (importante para páginas de recursos que los padres inmigrantes deberían poder encontrar cuando buscan en Google)
- Las rutas API integradas eliminan la necesidad de un servidor backend independiente
- App Router con componentes de React Server = JS de cliente cero para contenido traducido
- Soporte de manifiesto PWA nativo a través de `app/manifest.ts`
- La implementación de Vercel es de configuración cero
- next-intl funciona de forma nativa con RSC (traducciones renderizadas en el lado del servidor = 0 bytes para el cliente)

**Cuando Vite sería mejor:**
- SPA puro sin necesidades de SEO
- Inicio más rápido del servidor de desarrollo (beneficio marginal para un hackathon de 10 horas)
- Modelo mental más simple (sin distinción de componente servidor/cliente)

**Configuración de PWA con Serwist (próximo sucesor de pwa):**
```golpecito
npm instala @serwist/siguiente @serwist/precaching @serwist/sw idb
```

Estrategias clave fuera de línea:
- **CacheFirst** para activos estáticos (`/_next/static/`): contenido con hash, nunca cambia
- **NetworkFirst** para respuestas API y contenido dinámico
- **StaleWhileRevalidate** para archivos de traducción y páginas de recursos
- IndexedDB para almacenamiento de datos fuera de línea (perfiles infantiles, recursos guardados)

**IMPORTANTE:** Next.js 16 usa Turbopack de forma predeterminada, pero Serwist requiere Webpack. Deberá configurar la compilación en consecuencia.

**Manifiesto PWA** (soporte integrado para Next.js):
```mecanografiado
// aplicación/manifest.ts
tipo de importación {MetadataRoute} desde 'siguiente'

exportar manifiesto de función predeterminada(): MetadataRoute.Manifest {
  devolver {
    nombre: 'Puente ASD',
    short_name: 'Puente ASD',
    descripción: 'Apoyando a familias inmigrantes con niños autistas',
    URL_inicial: '/',
    pantalla: 'independiente',
    color_de_fondo: '#ffffff',
    color_tema: '#4F46E5',
    iconos: [
      { origen: '/icon-192.png', tamaños: '192x192', tipo: 'imagen/png' },
      { src: '/icon-512.png', tamaños: '512x512', tipo: 'imagen/png' },
    ],
  }
}
```

**Fuentes:**
- [Comparación completa de Vite vs Next.js 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Guía de PWA de Next.js] (https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Introducción a Serwist] (https://serwist.pages.dev/docs/next/getting-started)
- [Next.js 16 PWA con Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Construcción de PWA en Next.js con Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)

---

## 3. BACKEND DE MANOGRAFÍA

### Recomendación: Rutas API de Next.js + Cliente Supabase (principal) O tRPC (si usa T3)

**Opción A: Rutas API Next.js + Supabase (MÁS SIMPLE para hackathon)**
- No hay servidor backend separado
- El cliente Supabase JS maneja consultas de base de datos, autenticación, en tiempo real
- Rutas API para chat AI, llamadas API de traducción y cualquier lógica del lado del servidor
- Más rápido de configurar

**Opción B: tRPC vía T3 Stack (MEJOR DX si el equipo lo sabe)**
- Seguridad de tipo de extremo a extremo entre frontend y backend
- Autocompletar para llamadas API en el frontend
- Funciona con Prisma para tipos generados.
- `create-t3-app` estructura todo

```golpecito
# Opción A: Simple Next.js + Supabase
npx create-next-app@latest mi-aplicación --typescript --tailwind --eslint --app --src-dir

# Opción B: Pila T3
npx create-t3-app@latest mi-aplicación
# Seleccionar: Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
```

**Por qué NO Express/Fastify:**
- Agrega complejidad de implementación (servidor separado del host)
- No hay beneficio sobre las rutas API de Next.js para este caso de uso
- 30-60 minutos adicionales de configuración que no tienes

**Por qué NO sin servidor (funciones Lambda/Netlify):**
- Las rutas API de Next.js en Vercel NO tienen servidor de forma predeterminada
- No es necesaria una infraestructura de funciones separada

**Fuentes:**
- [tRPC + Supabase TypeScript] (https://noahflk.com/blog/supabase-typescript-trpc)
- [Guía T3 Stack 2025](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Crear aplicación T3] (https://create.t3.gg/)
- [Oficial de tRPC] (https://trpc.io/)

---

## 4. BASE DE DATOS

### Recomendación: Supabase (PostgreSQL)

**Por qué Supabase gana en este proyecto:**

| Característica | Supabase | Base de fuego | Escala planetaria |
|---------|----------|----------|-------------|
| Almacenamiento de base de datos de nivel gratuito | 500MB | 1 GB (Chispa) | Nivel gratuito discontinuado |
| Autenticación incluida | Sí (50K MAU gratis) | Sí (50K MAU gratis) | No |
| Tiempo real | Sí (cambios de Postgres) | Sí (el mejor de su clase) | No |
| Búsqueda de vectores (pgvector) | Sí, incorporado | No | No |
| Soporte SQL | PostgreSQL completo | Sólo NoSQL | MySQL |
| RLS (seguridad a nivel de fila) | Sí, basado en SQL | Reglas de seguridad de Firebase | No |
| Autenticación anónima | Sí, incorporado | Sí | N/A |
| Código abierto | Sí | No | Parcialmente |
| Portabilidad de datos | Completo (es Postgres) | Bloqueo de proveedores | Compatible con MySQL |

**Nivel gratuito de Supabase (2026):**
- 2 proyectos activos
- Almacenamiento de base de datos de 500 MB
- Salida de base de datos de 2 GB
- 50.000 MAU (autenticación)
- Almacenamiento de archivos de 1 GB
- 500.000 invocaciones de funciones de borde
- No se requiere tarjeta de crédito, nunca caduca

**Por qué Supabase en lugar de Firebase para ESTA aplicación:**
1. pgvector para búsqueda de recursos de IA (no se necesita servicio adicional)
2. SQL completo para consultas complejas (hitos secundarios, seguimiento de habilidades)
3. RLS para acceso anónimo a foros que preserva la privacidad
4. Portabilidad de datos (no limitada al ecosistema de Google)
5. Mejor para datos relacionales (usuario -> niños -> habilidades -> hitos)

**Integración Prisma:**
```prisma
base de datos de origen de datos {
  proveedor = "postgresql"
  url = env("DATABASE_URL")
  URLdirecta = env("DIRECT_URL")
}
```

**Fuentes:**
- [Revisión de Supabase vs Firebase 2026](https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-what-one-actually-scales-with-you-2374)
- [Precios de Supabase 2026](https://uibakery.io/blog/supabase-pricing)
- [Límites del nivel gratuito de Supabase](https://supabase.com/pricing)

---

## 5. AUTENTICACIÓN

### Recomendación: autenticación de Supabase con inicio de sesión anónimo + OTP de teléfono + correo electrónico/contraseña

**PRINCIPIO DE DISEÑO CRÍTICO para esta audiencia:**
La aplicación debe poder utilizarse SIN proporcionar información de identificación personal. Muchos padres inmigrantes (especialmente indocumentados) no usarán una aplicación que requiera identificación gubernamental/SSN, verificación de nombre real, recopilación de direcciones o correo electrónico obligatorio.

**Niveles de autenticación (confianza progresiva):**

| Nivel | Método | Lo que desbloquea | PII requerida |
|------|--------|----------------|--------------|
| 1 | Inicio de sesión anónimo | Explore recursos, use el chat de IA, vea el foro | Ninguno |
| 2 | Teléfono OTP | Publicar en el foro, guardar perfiles infantiles | Sólo número de teléfono |
| 3 | Correo electrónico + contraseña | Cuenta completa con recuperación | Dirección de correo electrónico |

**Autenticación anónima de Supabase:**
```mecanografiado
// Inicia sesión de forma anónima: no se necesita PII
const {datos, error} = esperar supabase.auth.signInAnonymfully()

// Más tarde, el usuario puede vincular un número de teléfono
const {datos, error} = esperar supabase.auth.updateUser({
  teléfono: '+1234567890',
})
```

**Configuración OTP del teléfono:**
Supabase admite autenticación telefónica a través de Twilio, MessageBird, Textlocal y Vonage. Los usuarios reciben un PIN de 6 dígitos vía SMS, válido por 60 segundos.

**Seguridad para usuarios anónimos:**
- Habilite CAPTCHA (se recomienda Cloudflare Turnstile, gratis) para evitar abusos
- Límite de velocidad basado en IP: 30 solicitudes/hora (ajustable en el panel de Supabase)
- Las políticas RLS pueden distinguir a los usuarios anónimos de los autenticados a través del reclamo JWT `is_anonymous`

**¿Por qué NO ser empleado de esta aplicación?**
- Sin inicio de sesión anónimo incorporado
- $0,02/MAU después de 10K (Supabase: 50K gratis)
- UI excesiva para este caso de uso
- Agrega dependencia externa

**Por qué NO Auth0:**
- Configuración compleja para hackathon
- Sin autenticación anónima
- Nivel gratuito limitado a 7500 MAU

**Fuentes:**
- [Inicios de sesión anónimos de Supabase](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Inicio de sesión por teléfono de Supabase] (https://supabase.com/docs/guides/auth/phone-login)
- [Autenticación de secretario frente a Supabase] (https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [Seguridad de inicios de sesión anónimos] (https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)

---

## 6. INTERNACIONALIZACIÓN (i18n)

### Recomendación: siguiente-intl

**¿Por qué next-intl en lugar de reaccionar-i18next o reaccionar-intl:**

| Característica | siguiente-intl | reaccionar-i18siguiente | reaccionar-intl |
|---------|-----------|---------------|------------|
| Compatibilidad con el enrutador de aplicaciones Next.js | Nativo | Vía envoltorio | Vía envoltorio |
| Soporte de componentes de servidor | Integrado (0 cliente JS) | Requiere configuración | Requiere configuración |
| Tamaño del paquete | ~4 KB | ~8 KB | ~12 KB |
| Soporte RTL | Incorporado | manuales | manuales |
| Formas plurales (árabe: 6 formas) | UCI automática | Configuración manual | UCI automática |
| Tipo de seguridad | TypeScript primero | Bueno | Bueno |

**Instalación:**
```golpecito
npm instala next-intl rtl-detección
instalación npm --save-dev @types/rtl-detect
```

**Configuración RTL para árabe, farsi y urdu:**
```mecanografiado
// ganchos/useTextDirection.ts
importar {useLocale} desde 'next-intl';
importar {isRtlLang} desde 'rtl-detect';

función de exportación useTextDirection() {
  const configuración regional = useLocale();
  devolver isRtlLang(locale)? 'rtl' : 'litro';
}

// aplicación/[localización]/layout.tsx
exportar función predeterminada LocaleLayout({ niños, parámetros: {locale } }) {
  dirección constante = isRtlLang(locale)? 'rtl' : 'litro';
  regresar (
    <html lang={locale} dir={dirección}>
      <cuerpo>{niños}</cuerpo>
    </html>
  );
}
```

**Estructura del archivo de traducción:**
```
mensajes/
  es/
    common.json # Cadenas de interfaz de usuario compartidas (botones, navegación, errores)
    auth.json # Iniciar sesión, registrarse, perfil
    resources.json # Biblioteca de recursos
    forum.json # Foro/comunidad
    ai-chat.json # asistente de IA
    child-profile.json # Seguimiento de niños
    skills.json # Tarjetas de habilidades
  ar/ # árabe (RTL)
  es/ # español
  zh/ # chino (simplificado)
  fa/ # farsi/persa (RTL)
  ur/#urdu (RTL)
```

**Idiomas prioritarios para MVP:** Inglés (predeterminado), español, árabe (RTL para demostrar capacidad técnica), chino (simplificado).

**CSS para RTL: use propiedades lógicas de Tailwind:**
- `pl-4` -> `ps-4` (relleno-inicio-en línea)
- `pr-4` -> `pe-4` (relleno-en-línea-fin)
- `texto-izquierda` -> `texto-inicio`
- `texto-derecha` -> `texto-fin`
- `ml-auto` -> `ms-auto`
- `señor-auto` -> `yo-auto`

**Traducción automática del contenido del foro:**

| Servicio | Nivel gratuito | Precio después gratis | Idiomas | Privacidad |
|---------|-----------|-----------------|-----------|---------|
| Traducción de Google Cloud | 500.000 caracteres/mes (permanente) | $20/1 millón de caracteres | 130+ | No se almacenan/utilizan datos para la formación |
| Profundo | 500.000 caracteres/mes | $25/1 millón de caracteres + $5,49/mes | 30+ | Se pueden almacenar datos del nivel gratuito |
| Traductor de Amazon | 2 millones de caracteres/mes (solo 12 meses) | $15/1 millón de caracteres | 75+ | No hay datos almacenados |

**Recomendación:** API de Google Cloud Translation: nivel gratuito permanente, mayor cobertura de idiomas (más de 130 idiomas, incluidos todos los idiomas RTL de destino), sólidas garantías de privacidad (no se almacenan ni se utilizan datos para capacitación).

**Fuentes:**
- [Documentación de next-intl](https://next-intl.dev/)
- [Guía completa next-intl 2026] (https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl frente a reaccionar-i18next] (https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Soporte RTL de Next.js](https://lingo.dev/en/nextjs-i18n/right-to-left-languages)
- [Precios de traducción de Google Cloud](https://cloud.google.com/translate/pricing)
- [DeepL frente a Google Translate](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)

---

## 7. BIBLIOTECA DE COMPONENTES DE UI

### Recomendación: shadcn/ui + Tailwind CSS

**Por qué shadcn/ui:**
- Los componentes se copian y pegan en su proyecto (propiedad total, no hay que preocuparse por actualizaciones de dependencia)
- Construido sobre primitivas de interfaz de usuario de Radix (compatible con WAI-ARIA, navegación por teclado, compatibilidad con lectores de pantalla)
- Tailwind CSS nativo (propiedades lógicas para RTL)
- Más de 40 componentes disponibles
- Soporte RTL a través de plantillas
- Modo oscuro/claro incorporado
- Cero sobrecarga de tiempo de ejecución

**Instalación:**
```golpecito
npx shadcn@último inicio
npx shadcn@latest agregar botón tarjeta diálogo entrada formulario hoja pestañas avatar insignia acordeón comando brindis
```

**Componentes clave para esta aplicación:**
- `Tarjeta`: tarjetas de recursos, tarjetas de habilidades, tarjetas de perfil infantil
- `Dialog` / `Sheet` -- Interacciones modales, cambio de idioma
- `Formulario` + `Entrada` -- Formularios de perfil infantil, creación de publicaciones en el foro
- `Pestañas` -- Navegación entre secciones
- `Avatar`: visualización del usuario del foro (con opción anónima)
- `Badge`: niveles de habilidad, etiquetas de idioma
- `Acordeón`: preguntas frecuentes, detalles de recursos
- `Comando`: paleta de búsqueda de recursos
- `Brindis` -- Notificaciones

**Accesibilidad integrada:**
- Todos los componentes basados en Radix incluyen roles y atributos ARIA automáticamente
- La navegación con el teclado funciona de inmediato (Tab, Enter, Escape, teclas de flecha)
- Gestión de enfoque y captura de enfoque en modales.
- Anuncios en lectores de pantalla para contenido dinámico.
- `aria-describedby` vinculado automáticamente en caso de errores de validación
- `aria-invalid` configurado en errores de formulario

**¿Por qué NO la interfaz de usuario de Chakra?** Tiempo de ejecución más pesado (CSS-in-JS), estilo basado en accesorios menos flexible que las clases de utilidad Tailwind, menor impulso del ecosistema en 2025-2026.

**¿Por qué NO Material UI?** Paquete muy pesado, el lenguaje de diseño de Google puede parecer clínico para una aplicación comunitaria, más difícil de personalizar en profundidad.

**Fuentes:**
- [Guía shadcn/ui 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Componentes shadcn/ui accesibles](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [Comparación de bibliotecas React UI 2025] (https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui frente a Chakra frente a MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)

---

## 8. FORO / FUNCIÓN COMUNITARIA

### Arquitectura: compilación personalizada con Supabase Realtime

**Modelo de datos (SQL):**
```sql
- Categorías del foro
CREAR TABLA categorías_foro (
  id UUID CLAVE PRIMARIA POR DEFECTO gen_random_uuid(),
  nombre_clave TEXTO NO NULO,
  descripción_clave TEXTO,
  icono TEXTO,
  sort_order INTEGER POR DEFECTO 0,
  creado_en TIMESTAMPTZ POR DEFECTO AHORA()
);

- Publicaciones en el foro (hilos)
CREAR TABLA publicaciones_foro (
  id UUID CLAVE PRIMARIA POR DEFECTO gen_random_uuid(),
  categoría_id UUID REFERENCIAS forum_categories(id),
  autor_id REFERENCIAS UUID auth.users(id),
  is_anonymous BOOLEANO POR DEFECTO falso,
  nombre_visualización TEXTO,
  título TEXTO NO NULO,
  contenido TEXTO NO NULO,
  original_language TEXTO PREDETERMINADO 'en',
  upvote_count INTEGER POR DEFECTO 0,
  comment_count INTEGER POR DEFECTO 0,
  is_pinned BOOLEANO POR DEFECTO falso,
  is_moderated BOOLEANO POR DEFECTO falso,
  creado_en TIMESTAMPTZ POR DEFECTO AHORA(),
  actualizado_en TIMESTAMPTZ POR DEFECTO AHORA()
);

-- Comentarios en publicaciones
CREAR TABLA comentarios_foro (
  id UUID CLAVE PRIMARIA POR DEFECTO gen_random_uuid(),
  post_id REFERENCIAS UUID forum_posts(id) AL ELIMINAR CASCADA,
  parent_id UUID REFERENCIAS forum_comments(id),
  autor_id REFERENCIAS UUID auth.users(id),
  is_anonymous BOOLEANO POR DEFECTO falso,
  nombre_visualización TEXTO,
  contenido TEXTO NO NULO,
  original_language TEXTO PREDETERMINADO 'en',
  upvote_count INTEGER POR DEFECTO 0,
  creado_en TIMESTAMPTZ POR DEFECTO AHORA()
);

-- Votos a favor
CREAR TABLA forum_upvotes (
  id UUID CLAVE PRIMARIA POR DEFECTO gen_random_uuid(),
  user_id UUID REFERENCIAS auth.users(id),
  post_id UUID REFERENCIAS forum_posts(id),
  comment_id UUID REFERENCIAS forum_comments(id),
  creado_en TIMESTAMPTZ POR DEFECTO AHORA(),
  ÚNICO (id_usuario, id_post),
  ÚNICO(id_usuario, id_comentario)
);

- Traducciones en caché
CREAR TABLA forum_translations (
  id UUID CLAVE PRIMARIA POR DEFECTO gen_random_uuid(),
  tipo_fuente TEXTO NO NULO,
  source_id UUID NO NULO,
  target_language TEXTO NO NULO,
  título_traducido TEXTO,
  TEXTO traducido_content NO NULO,
  creado_en TIMESTAMPTZ POR DEFECTO AHORA(),
  ÚNICO (id_fuente, idioma_destino)
);
```

**Actualizaciones en tiempo real:**
```mecanografiado
canal constante = supabase
  .channel('publicaciones-foro')
  .on('postgres_changes', {
    evento: 'INSERTAR',
    esquema: 'público',
    tabla: 'forum_posts',
    filtro: `category_id=eq.${categoryId}`
  }, (carga útil) => {
    // Agregar nueva publicación a la interfaz de usuario
  })
  .suscribir()
```

**Seguridad en publicaciones anónimas:**
- Las publicaciones de usuarios anónimos (autenticación anónima de Supabase) se pueden marcar de forma diferente
- La política RLS verifica el reclamo `is_anonymous` en JWT
- Mostrar seudónimos (por ejemplo, "Padre #4827") en lugar de nombres en blanco

**Moderación (MVP):** Botón de informe simple en cada publicación/comentario. Bandera de administrador para ocultar el contenido reportado. Futuro: moderación de contenido impulsada por IA a través de Claude API.

**Traducción bajo demanda:** Publicaciones almacenadas en el idioma original. El botón "Traducir" activa la API de traducción de Google Cloud. Traducción almacenada en caché en la tabla `forum_translations`. Solicitudes posteriores para el mismo idioma atendidas desde la memoria caché.

**Fuentes:**
- [Supabase en tiempo real] (https://supabase.com/docs/guides/realtime)
- [extensión-comentarios-supabase](https://github.com/malerba118/extensión-comentarios-supabase)
- [Crear foro comunitario con Supabase] (https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)

---

## 9. INTEGRACIÓN DE IA

### Arquitectura: Vercel AI SDK + Claude API + Supabase pgvector RAG

**Flujo de datos:**
```
Pregunta de usuario (multilingüe)
  -> [Traductor de Google al inglés] (si no es inglés)
  -> [Generar incrustación] (incrustación de texto-3-pequeño)
  -> [Búsqueda de similitud de Supabase pgvector]
  -> [Documentos de contexto recuperados]
  -> [API de Claude con mensaje del sistema + contexto + pregunta del usuario]
  -> [Respuesta en inglés]
  -> [Traductor de Google al idioma del usuario] (si no es inglés)
  -> Mostrado al usuario (transmitido)
```

**Configuración del SDK de IA de Vercel:**
```golpecito
npm instala ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```

```mecanografiado
// aplicación/api/chat/route.ts
importar { antrópico } desde '@ai-sdk/antrópico';
importar {streamText} desde 'ai';

exportar función asíncrona POST (req: Solicitud) {
  const {mensajes, configuración regional} = esperar req.json();
  resultado constante = flujoTexto({
    modelo: antrópico ('claude-3-5-haiku-20241022'),
    sistema: SISTEMA_PROMPT,
    mensajes: mensajes aumentados,
  });
  devolver resultado.toDataStreamResponse();
}
```

```mecanografiado
// Lado del cliente: componentes/AiChat.tsx
'usar cliente';
importar {useChat} desde '@ai-sdk/react';

función de exportación AiChat() {
  const { mensajes, entrada, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });
  // UI de chat con respuestas en streaming
}
```

**Selección de modelo de Claude para Hackathon:**

| Modelo | Entrada/1 millón de tokens | Salida/1 millón de tokens | Mejor para |
|-------|----------------|-------------------|----------|
| Claude Haiku 4.5 | $1.00 | $5.00 | **Respuestas de chat (RECOMENDADO)** |
| Claude Soneto 4.5 | $3.00 | $15.00 | Razonamiento complejo |
| Claude Opus 4.5 | $5.00 | $25.00 | Exceso para chatear |

**Recomendación:** Claude Haiku 4.5: rápido (baja latencia para streaming), económico (excelente para el presupuesto de un hackathon) y lo suficientemente capaz para preguntas y respuestas sobre recursos y orientación general.

**Mensaje del sistema (la seguridad es lo primero para información de salud):**
```
Eres un asistente de inteligencia artificial que ayuda a los padres inmigrantes de niños.
con Trastorno del Espectro Autista (TEA). Usted proporciona información sobre:
- Recursos, terapias y programas educativos para el TEA.
- Navegando por los sistemas de salud y educación de EE. UU.
- Procesos IEP (Programa de Educación Individualizada)
- Programas de apoyo gubernamentales y sin fines de lucro disponibles
- Hitos generales del desarrollo.

PAUTAS DE SEGURIDAD CRÍTICAS:
- NO eres médico. Recomendar siempre consultar a profesionales sanitarios.
- Nunca diagnosticar ni sugerir tratamientos médicos específicos.
- Incluya siempre una exención de responsabilidad cuando hable de temas médicos o de desarrollo.
- Si un usuario describe una emergencia médica, indíquele que llame al 911.
- Sea culturalmente sensible y evite suposiciones sobre la estructura familiar.
- Utilice un lenguaje sencillo y claro.
- Cuando no esté seguro, diga "No sé" en lugar de adivinar.
- Nunca recopile ni solicite información de identificación personal.
```

**Configuración de RAG de Supabase pgvector:**
```sql
CREAR EXTENSIÓN SI NO EXISTE vector;

CREAR TABLA recursos (
  id UUID CLAVE PRIMARIA POR DEFECTO gen_random_uuid(),
  título TEXTO NO NULO,
  contenido TEXTO NO NULO,
  categoría TEXTO NO NULO,
  fuente_url TEXTO,
  estado TEXTO,
  idioma TEXTO POR DEFECTO 'en',
  vector de incrustación (1536),
  creado_en TIMESTAMPTZ POR DEFECTO AHORA(),
  actualizado_en TIMESTAMPTZ POR DEFECTO AHORA()
);

CREAR ÍNDICE DE recursos UTILIZANDO hnsw (incrustando vector_cosine_ops);

CREAR O REEMPLAZAR FUNCIÓN match_resources(
  vector de incrustación de consulta (1536),
  match_threshold FLOTADOR POR DEFECTO 0.7,
  match_count INT PREDETERMINADO 5
)
TABLA DE DEVOLUCIONES (id UUID, TEXTO del título, TEXTO del contenido, TEXTO de la categoría, similitud FLOAT)
IDIOMA plpgsql COMO $$
COMENZAR
  DEVOLVER CONSULTA
  SELECCIONE r.id, r.título, r.contenido, r.categoría,
    1 - (r.embedding <=> query_embedding) AS similitud
  DE recursos r
  DONDE 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDENAR POR r.embedding <=> query_embedding
  LIMIT match_count;
FIN;
$$;
```

**Modelo de incrustación:** Utilice OpenAI `text-embedding-3-small` ($0,02/1 millón de tokens, 1536 dimensiones, 5 veces más barato que ada-002 con mejor rendimiento).

**Atajo del Hackathon:** Complete previamente la tabla de recursos con entre 20 y 50 recursos seleccionados sobre autismo, IEP, tipos de terapia y organizaciones de apoyo. Genere incorporaciones para estos durante la configuración en lugar de crear una canalización de ingesta completa.

**Fuentes:**
- [Vercel AI SDK] (https://ai-sdk.dev/docs/introduction)
- [Guía AI SDK + Next.js](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Precios de API de Claude](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude para la atención sanitaria 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI y vectores](https://supabase.com/docs/guides/ai)
- [Incrustaciones de OpenAI](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small vs ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Construya RAG con Claude y pgvector] (https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG Chatbot con Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)

---

## 10. ACCESIBILIDAD

### Estrategia de cumplimiento de WCAG 2.2 AA

**Principios clave para esta audiencia:**
1. **Accesibilidad cognitiva**: diseños predecibles, jerarquía visual clara (importante para padres estresados/abrumados Y para consideraciones relacionadas con el autismo)
2. **Bajo apoyo a la alfabetización**: señales visuales, íconos junto al texto, lenguaje sencillo
3. **Accesibilidad multilingüe**: los lectores de pantalla deben funcionar con idiomas RTL
4. **Accesibilidad motora**: objetivos táctiles grandes (mínimo 44x44 px según WCAG 2.2)

**Integrado a través de shadcn/ui + Radix:**
- Todos los componentes incluyen roles/atributos ARIA automáticamente
- Navegación por teclado (Tab, Enter, Escape, teclas de flecha)
- Gestión de enfoque y captura de enfoque en modales.
- Anuncios en lectores de pantalla para contenido dinámico.
- `aria-describedby` vinculado por errores de validación
- `aria-invalid` configurado en errores de formulario

**Bibliotecas adicionales:**
```golpecito
npm install -D @axe-core/react # Registra todos los problemas en la consola del navegador
npm install -D eslint-plugin-jsx-a11y # Lint para todos los problemas
```

**Contraste de color:** WCAG AA requiere 4,5:1 para texto normal y 3:1 para texto grande. Proporciona alternancia de modo de alto contraste.

**Consideraciones de diseño específicas para el autismo:**
- Fuentes sans-serif (por ejemplo, Inter, system-ui): más fáciles de leer para usuarios neurodivergentes
- Navegación consistente y predecible en todas las páginas.
- Animaciones mínimas (respete "prefiere movimiento reducido")
- Límites visuales claros entre secciones
- Evitar la sobrecarga sensorial (colores apagados, sin parpadeos)
- Alternancia de idioma simple para simplificar el contenido.

```mecanografiado
// En componentes, respeta las preferencias de movimiento:
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
```

**Fuentes:**
- [WCAG 2.2 en React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [Reaccionar Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Guía WCAG 2025 de contraste de color] (https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [Mejores prácticas de accesibilidad de React] (https://rtcamp.com/handbook/react-best-practices/accessibility/)

---

## 11. DESPLIEGUE

### Recomendación: nivel gratuito de Vercel

**Por qué Vercel:** Creado por los creadores de Next.js: no se necesita configuración. Simplemente "git push" para implementar.

**Límites del nivel gratuito:**
- 100 GB de ancho de banda/mes
- 100.000 invocaciones de funciones sin servidor/mes
- Implementaciones ilimitadas
- Tiempo de espera de la función de 10 segundos (suficiente para la transmisión de IA)
- Soporte de dominio personalizado

**Variables del entorno:**
```golpecito
# .env.local (nunca cometas esto)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # Solo del lado del servidor
ANTHROPIC_API_KEY=sk-ant-... # Solo del lado del servidor
OPENAI_API_KEY=sk-... # Solo del lado del servidor (para incrustaciones)
GOOGLE_TRANSLATE_API_KEY=... # Solo del lado del servidor
```

**IMPORTANTE:** Las variables con el prefijo `NEXT_PUBLIC_` están expuestas al navegador. Las claves API NO deben tener este prefijo.

**Consejos de demostración:** Implemente en Vercel temprano (dentro de la primera hora). Utilice URL de vista previa para compartir con los jueces. Protección con contraseña disponible para implementaciones preliminares.

**Fuentes:**
- [Implementación de Next.js en Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Implementación de aplicaciones Next.js 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [Variables de entorno de Vercel](https://vercel.com/docs/environment-variables)

---

## 12. PRIVACIDAD Y SEGURIDAD

### Arquitectura de privacidad por diseño

**PRINCIPIO RECTOR:** Esta aplicación atiende a una población vulnerable. Las violaciones de la privacidad podrían tener consecuencias en el mundo real (riesgo de deportación para familias indocumentadas). La seguridad no es opcional.

**Consideraciones de HIPAA:** La aplicación NO es una entidad cubierta y probablemente NO necesite el cumplimiento total de HIPAA. Sin embargo, si almacena información relacionada con la salud de niños, trátela como confidencial. El mejor enfoque: minimice lo que almacena en el lado del servidor.

**Consideraciones de COPPA (niños menores de 13 años):** Si los padres son los únicos usuarios, COPPA es menos restrictiva pero sigue siendo relevante para almacenar datos de niños. La actualización COPPA de 2025 introduce requisitos de minimización de datos más estrictos. **Recomendación:** Diseñe la aplicación solo para PADRES, no para que los niños la usen directamente.

**Arquitectura de datos: qué almacenar y dónde:**

| Tipo de datos | Ubicación de almacenamiento | Cifrado |
|-----------|-----------------|------------|
| Nombre del niño | Lado del cliente (almacenamiento local/IndexedDB) | Opcional AES-256 del lado del cliente |
| Diagnóstico infantil | Lado del cliente | Cifrado del lado del cliente AES-256 |
| Habilidades/hitos del niño | Supabase (cifrado en reposo) | Supabase por defecto |
| Publicaciones del foro | Supabase | En reposo (valor predeterminado de Supabase) |
| Historial de chat de IA | Solo del lado del cliente (sessionStorage) | Efímero, no persistente |
| Idioma preferido del usuario | Metadatos de usuario de Supabase | Estándar |
| Tokens de usuario anónimo | Autenticación de Supabase | Estándar JWT |

**Políticas de RLS:**
```sql
-- Los usuarios sólo pueden ver sus propios perfiles infantiles
CREAR POLÍTICA "Los usuarios pueden ver sus propios hijos"
  EN child_profiles PARA SELECCIONAR
  USANDO (auth.uid() = parent_id);

-- Los usuarios anónimos pueden leer las publicaciones del foro.
CREAR POLÍTICA "Cualquiera puede leer publicaciones"
  EN forum_posts PARA SELECCIONAR
  USANDO (is_moderated = false);

-- Sólo los usuarios autenticados pueden publicar
CREAR POLÍTICA "Los usuarios autenticados pueden publicar"
  EN forum_posts PARA INSERTAR
  CON VERIFICACIÓN (auth.uid() NO ES NULO);
```

**Qué NO hacer:**
- NO almacene el estado migratorio en ningún lugar, nunca
- NO requiere nombres reales
- NO almacene direcciones IP en los registros de la aplicación
- NO utilice análisis de seguimiento (no utilice Google Analytics; utilice Plausible o nada)
- NO almacene conversaciones de chat de IA en el lado del servidor
- NO requiere servicios de ubicación

**Fuentes:**
- [HIPAA y aplicaciones de salud](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [Cumplimiento de COPPA 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Guía de la aplicación Zero-Knowledge Health](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Guía completa de Supabase RLS 2026] (https://vibeappscanner.com/supabase-row-level-security)

---

## 13. ESTRATEGIA DEL HACKATHON Y PRESUPUESTO DE TIEMPO

### Plan de construcción de 10 horas (8:30 a. m. - 6:30 p. m.)

**Priorización de funciones (método MoSCoW):**

| Prioridad | Característica | Estado | Est. Hora |
|----------|---------|--------|-----------|
| **DEBE** | UI multilingüe (EN + ES + AR) | Construir completamente | 1,5 horas |
| **DEBE** | Asistente de chat AI (con RAG) | Construir completamente | 2 horas |
| **DEBE** | Biblioteca de recursos (navegable + buscable) | Construir completamente | 1 hora |
| **DEBE** | Anónimo + autenticación telefónica | Construir completamente | 1 hora |
| **DEBE** | Perfil infantil con seguimiento de habilidades | Construir completamente | 1,5 horas |
| **DEBE** | Foro comunitario | Construir básico (sin tiempo real) | 1 hora |
| **DEBE** | Acceso sin conexión a PWA | Construir (configuración de Serwist) | 0,5 horas |
| **PODRÍA** | publicación en el foro traducción | Talón con simulacro | 0,5 horas |
| **PODRÍA** | Modo oscuro/alto contraste | Cambio rápido | 0,25 horas |
| **NO** | Sistema de moderación completo | Solo demostración simulada | -- |
| **NO** | Notificaciones push | Saltar por completo | -- |
| **NO** | Contenido de vídeo | Saltar por completo | -- |

### Horario detallado

```
8:30 - 9:00 (30 min) CONFIGURACIÓN DEL PROYECTO
  - Andamio con create-t3-app o Nextbase starter
  - Creación de proyectos Supabase + tablas.
  - Canalización de implementación de Vercel (implementar shell vacío)
  - Instalar departamentos centrales
  - Variables de entorno configuradas.

9:00 - 10:00 (60 min) FUNDACIÓN
  - Componente de diseño con i18n (encabezado, navegación, conmutador de idioma)
  - componentes shadcn/ui instalados
  - Soporte RTL cableado
  - Autenticación de Supabase: interfaz de usuario anónima + inicio de sesión de correo electrónico
  - Estructura de archivos de traducción (EN + ES + AR)

10:00 - 11:30 (90 min) FUNCIÓN PRINCIPAL N.º 1: CHAT AI
  - Configuración de Vercel AI SDK + Claude Haiku
  - Ruta API para chat con streaming
  - Componente de interfaz de usuario de chat con gancho useChat
  - Aviso del sistema con barandillas de seguridad.
  - Complete previamente 20 recursos en pgvector
  - Canalización RAG (consulta incrustada -> búsqueda -> mensaje de aumento)

11:30 - 12:00 (30 min) DESPLIEGUE DE MEDIA MAÑANA + PRUEBA
  - Implementar en Vercel
  - Prueba en el móvil
  - Corregir errores críticos

12:00 - 12:30 (30 min) ALMUERZO

12:30 - 1:30 (60 min) FUNCIÓN PRINCIPAL #2: BIBLIOTECA DE RECURSOS
  - Tarjetas de recursos con filtrado de categorías.
  - Función de búsqueda
  - Páginas de detalles de recursos
  - Datos de semillas: 20-50 recursos seleccionados

1:30 - 3:00 (90 min) FUNCIÓN PRINCIPAL #3: PERFIL DEL NIÑO + HABILIDADES
  - Formulario de creación de perfil infantil
  - Componentes de la tarjeta de habilidad.
  - UI de seguimiento de hitos
  - Almacenamiento del lado del cliente para datos confidenciales
  - Vista del panel de perfil

3:00 - 4:00 (60 min) FUNCIÓN #4: FORO COMUNITARIO (BÁSICO)
  - Vista de lista de publicaciones del foro
  - Crear formulario de publicación
  - Sistema básico de comentarios.
  - Organización basada en categorías

4:00 - 4:30 (30 min) PWA + TRADUCCIONES
  - Configuración del trabajador del servicio Serwist
  - Complete las claves de traducción para ES y AR
  - Pruebe el diseño RTL con árabe.

4:30 - 5:30 (60 min) POLACO Y PREPARACIÓN DE DEMOSTRACIÓN
  - Corregir errores de la interfaz de usuario
  - Agregar estados de carga y manejo de errores.
  - Alternar modo de alto contraste (si es tiempo)
  - Tomar capturas de pantalla para la presentación.
  - Grabar copia de seguridad de video de demostración

5:30 - 6:00 (30 min) DESPLIEGUE FINAL + PRESENTACIÓN
  - Despliegue final de Vercel
  - Pruebe todas las funciones de un extremo a otro
  - Preparar un guión de presentación de 3 minutos.

6:00 - 6:30 (30 min) BUFFER / PRESENTACIÓN
```

### De qué burlarse/stub:
- **Moderación del foro:** Simplemente oculta las publicaciones reportadas con una bandera, sin panel de administración
- **Traducción del foro:** El botón "Traducir" muestra la carga y luego el texto original (o el Traductor de Google si es el momento)
- **Flujo de restablecimiento de contraseña:** Utilice los correos electrónicos predeterminados de Supabase
- **Avatares de usuario:** Iniciales o icono predeterminado, sin carga
- **Panel de administración:** Omitir por completo

### Consejos para la optimización de la demostración:
1. **Empiece con la historia** -- "Conozca a Fátima, una madre siria que acaba de mudarse a los Estados Unidos. A su hijo de 4 años recientemente le diagnosticaron autismo. Ella no habla inglés. No sabe por dónde empezar".
2. **Mostrar el cambio de idioma** - Cambie de inglés a árabe en vivo. El giro RTL es visualmente impresionante para los jueces.
3. **Demuestre el chat de IA**: haga una pregunta en español. Muéstralo proporcionando recursos.
4. **Mostrar capacidad sin conexión**: apaga el WiFi y muestra que la aplicación aún funciona.
5. **Enfatice la privacidad**: "No se necesita un nombre real. No se requiere un correo electrónico. Puede usar esta aplicación de forma segura".

**Fuentes:**
- [De cero a demostración en 36 horas](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [Priorización de funciones de MVP](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Consejos para la demostración del Hackathon (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Guía de presentación del Hackathon] (https://www.inknarrates.com/post/hackathon-pitch-deck)

---

## 14. PLANOS Y PLANTILLAS

### Opción 1: create-t3-app (RECOMENDADO para equipos familiarizados con tRPC)
```golpecito
npx create-t3-app@latest autism-bridge --typescript --tailwind --trpc --prisma
```
- GitHub: https://github.com/t3-oss/create-t3-app
- Incluye: Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- Agrega: Supabase, next-intl, shadcn/ui, Vercel AI SDK

### Opción 2: Nextbase Starter (RECOMENDADO para una configuración más sencilla)
- GitHub: https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Incluye: Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query
- Agrega: next-intl, shadcn/ui, Vercel AI SDK, Prisma (opcional)

### Opción 3: iniciador Vercel Supabase
- Plantilla: https://vercel.com/templates/next.js/supabase
- Plantilla oficial de Vercel/Supabase con autenticación SSR

### Opción 4: supa-next-starter
- GitHub: https://github.com/michaeltroya/supa-next-starter
- Incluye: Next.js, Supabase, Tailwind, shadcn/ui (ya integrado)

### Después del andamio, agregue:
```golpecito
npm instala next-intl rtl-detección
npm instala ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm instala @serwist/siguiente @serwist/precaching @serwist/sw
npx shadcn@último inicio
npx shadcn@latest agregar botón tarjeta diálogo entrada formulario hoja pestañas avatar insignia acordeón comando brindis
instalación npm -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
```

### Proyectos de referencia:
- **supabase-comments-extension** (GitHub: malerba118/supabase-comments-extension) -- Comentarios, respuestas, reacciones
- **ojasskapre/nextjs-starter-template** -- Interfaces de chat Next.js + Supabase + LLM
- **shwosner/realtime-chat-supabase-react** -- Chat en tiempo real con Supabase

---

## 15. DISEÑO DEL ESQUEMA

### Esquema de prisma completo

```prisma
cliente generador {
  proveedor = "prisma-cliente-js"
}

base de datos de origen de datos {
  proveedor = "postgresql"
  url = env("DATABASE_URL")
  URLdirecta = env("DIRECT_URL")
}

// USUARIO Y AUTENTICACIÓN
modelo Perfil de usuario {
  id Cadena @id @default(uuid())
  cadena de ID de autenticación @unique
  mostrarNombre Cadena?
  cadena de configuración local preferida @default("es")
  creado en la fecha y hora @default(ahora())
  actualizado en fecha y hora @ actualizado en
  niños Perfil de niño[]
  Publicaciones en el foro Publicación en el foro[]
  foroComentarios ForoComentario[]
  votos positivos ForoUpvote[]
}

// PERFILES INFANTILES Y SEGUIMIENTO DE HABILIDADES
modelo perfil infantil {
  id Cadena @id @default(uuid())
  cadena de identificación de padre
  perfil de usuario principal @relación (campos: [parentId], referencias: [id])
  apodo Cadena
  año de nacimiento Int?
  diagnósticoFecha FechaHora?
  habilidades SkillCard[]
  hitos Hito[]
  creado en la fecha y hora @default(ahora())
  actualizado en fecha y hora @ actualizado en
  @@index([idpadre])
}

modelo SkillCategory {
  id Cadena @id @default(uuid())
  nombreClave Cadena
  icono ¿Cadena?
  ordenarOrden Int @predeterminado(0)
  habilidades SkillCard[]
}

modelo SkillCard {
  id Cadena @id @default(uuid())
  cadena de ID de niño
  niño ChildProfile @relation(campos: [childId], referencias: [id], onDelete: Cascade)
  cadena de ID de categoría
  categoría SkillCategory @relation(campos: [categoryId], referencias: [id])
  nombreClave Cadena
  nivel Int @predeterminado(0)
  notas ¿Cuerda?
  Fecha y hora de la última evaluación @default(ahora())
  creado en la fecha y hora @default(ahora())
  actualizado en fecha y hora @ actualizado en
  @@index([niñoId])
  @@index([categoríaId])
}

modelo Hito {
  id Cadena @id @default(uuid())
  cadena de ID de niño
  niño ChildProfile @relation(campos: [childId], referencias: [id], onDelete: Cascade)
  cadena de clave de título
  descripción ¿Cadena?
  logradoFecha FechaHora?
  categoría cadena
  creado en la fecha y hora @default(ahora())
  @@index([niñoId])
}

// RECURSOS (incrustación de vectores manejada a través de SQL sin formato/pgvector)
modelo de recurso {
  id Cadena @id @default(uuid())
  cadena de título
  cadena de contenido @db.Text
  ¿Cadena resumida?
  categoría cadena
  subcategoría Cadena?
  cadena URL de origen?
  cadena de estado?
  idioma Cadena @default("es")
  etiquetas Cadena[]
  creado en la fecha y hora @default(ahora())
  actualizado en fecha y hora @ actualizado en
  @@índice([categoría])
  @@índice([estado])
}

// FORO / COMUNIDAD
modelo ForoCategoría {
  id Cadena @id @default(uuid())
  nombreClave Cadena
  descripciónCadena clave?
  icono ¿Cadena?
  ordenarOrden Int @predeterminado(0)
  publicaciones ForoPublicar[]
}

modelo ForoPost {
  id Cadena @id @default(uuid())
  cadena de ID de categoría
  categoría ForoCategoría @relación(campos: [categoríaId], referencias: [id])
  cadena de ID de autor
  autor UserProfile @relation(campos: [authorId], referencias: [id])
  esAnónimo Booleano @default(falso)
  cadena de título
  cadena de contenido @db.Text
  cadena de idioma original @default ("es")
  voto a favorCount Int @default(0)
  comentarioCount Int @default(0)
  isPinned Booleano @default(falso)
  isHidden Booleano @default(falso)
  reportCount Int @predeterminado(0)
  comentarios ForoComentario[]
  votos positivos ForoUpvote[]
  traducciones ForoTraducción[]
  creado en la fecha y hora @default(ahora())
  actualizado en fecha y hora @ actualizado en
  @@index([categoríaId])
  @@index([ID de autor])
  @@index([creadoEn])
}

modelo ForoComentario {
  id Cadena @id @default(uuid())
  cadena postId
  publicar ForumPost @relation(campos: [postId], referencias: [id], onDelete: Cascade)
  ¿Cadena de ID de padre?
  Foro de padres¿Comentario? @relation("CommentReplies", campos: [parentId], referencias: [id])
  responde Comentario del Foro[] @relation("Respuestas de Comentario")
  cadena de ID de autor
  autor UserProfile @relation(campos: [authorId], referencias: [id])
  esAnónimo Booleano @default(falso)
  cadena de contenido @db.Text
  cadena de idioma original @default ("es")
  voto a favorCount Int @default(0)
  isHidden Booleano @default(falso)
  reportCount Int @predeterminado(0)
  votos positivos ForoUpvote[]
  traducciones ForoTraducción[]
  creado en la fecha y hora @default(ahora())
  @@index([ID de publicación])
  @@index([idpadre])
}

modelo ForoUpvote {
  id Cadena @id @default(uuid())
  cadena de ID de usuario
  usuario UserProfile @relation(campos: [userId], referencias: [id])
  ¿Cadena postId?
  publicar Foro¿Publicar? @relation(campos: [postId], referencias: [id], onDelete: Cascade)
  ¿Cadena de ID de comentario?
  comentario Foro¿Comentario? @relation(campos: [commentId], referencias: [id], onDelete: Cascade)
  creado en la fecha y hora @default(ahora())
  @@único([ID de usuario, ID de publicación])
  @@único([ID de usuario, ID de comentario])
}

modelo ForoTraducción {
  id Cadena @id @default(uuid())
  ¿Cadena postId?
  publicar Foro¿Publicar? @relation(campos: [postId], referencias: [id], onDelete: Cascade)
  ¿Cadena de ID de comentario?
  comentario Foro¿Comentario? @relation(campos: [commentId], referencias: [id], onDelete: Cascade)
  cadena targetLang
  ¿Cadena de título traducida?
  Cadena de contenido traducida @db.Text
  creado en la fecha y hora @default(ahora())
  @@único([postId, targetLang])
  @@único([IdComentario, idiomadestino])
}
```

### Categorías de datos de semillas

**Categorías de habilidades:** Comunicación, Habilidades sociales, Vida diaria, Habilidades motoras, Académico, Procesamiento sensorial, Regulación emocional

**Categorías del foro:** Introducciones y bienvenida, Terapia y tratamientos (ABA/OT/Habla), Ayuda escolar e IEP, Consejos para la vida diaria, Preguntas legales y de inmigración, Navegación sobre atención médica, Historias e hitos de éxito, Soporte general

**Categorías de recursos:** Tipos de terapia y proveedores, educación y recursos del IEP, derechos legales y defensa, asistencia financiera, organizaciones comunitarias, herramientas y aplicaciones en línea, libros y medios, recursos específicos del estado

---

## RESUMEN DE DEPENDENCIAS DE PAQUETE.JSON

```json
{
  "dependencias": {
    "siguiente": "^16.0.0",
    "reaccionar": "^19.0.0",
    "react-dom": "^19.0.0",
    "mecanografiado": "^5.7.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "prisma": "^6.0.0",
    "@prisma/cliente": "^6.0.0",
    "siguiente-intl": "^4.0.0",
    "rtl-detección": "^1.1.2",
    "ai": "^6.0.0",
    "@ai-sdk/anthropic": "^1.0.0",
    "@ai-sdk/openai": "^1.0.0",
    "@ai-sdk/react": "^1.0.0",
    "tailwindcss": "^4.0.0",
    "autoridad de variación de clase": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0",
    "lucide-react": "^0.450.0",
    "@serwist/siguiente": "^9.0.0",
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
  "dependenciasdev": {
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "@types/rtl-detect": "^1.0.0"
  }
}
```

---

## REFERENCIA RÁPIDA: ENLACES A DOCUMENTACIÓN CLAVE

| Herramienta | Documentación |
|------|--------------|
| Siguiente.js 16 | https://nextjs.org/docs |
| Supabase | https://supabase.com/docs |
| Autenticación de Supabase | https://supabase.com/docs/guides/auth |
| Supabase en tiempo real | https://supabase.com/docs/guides/realtime |
| Supabase pgvector | https://supabase.com/docs/guides/ai |
| siguiente-intl | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| SDK de IA de Vercel | https://ai-sdk.dev/docs/introduction |
| Claude API | https://plataforma.claude.com/docs |
| prisma | https://www.prisma.io/docs |
| Serwist PWA | https://serwist.pages.dev/docs/next/getting-started |
| CSS de viento de cola | https://tailwindcss.com/docs |
| Traducción de Google Cloud | https://cloud.google.com/translate/docs |
| Incrustaciones de OpenAI | https://platform.openai.com/docs/guides/embeddings |
| Implementación de Vercel | https://vercel.com/docs |

---

Esta investigación cubre las 10 áreas que solicitó más la estrategia del hackathon, la arquitectura de privacidad, las opciones estándar y el diseño de esquema completo. La pila está diseñada para que cada servicio encaje dentro de los niveles gratuitos para el hackathon, la autenticación preserva la privacidad de los usuarios indocumentados y el presupuesto de tiempo es realista para una construcción de 10 horas. Intenté guardar esto como un archivo en `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` pero se me negó el permiso de escritura en el archivo. Si desea que guarde esto en el disco, puede otorgar el permiso de escritura y crearé el archivo.
---

## Investigación adicional (actualizada en marzo de 2026)

### La mejor biblioteca i18n para más de 10 idiomas (React + TypeScript)

**Recomendado: react-i18next**: 2,1 millones de descargas semanales, la solución React i18n más popular.
- Construido sobre el ecosistema i18next con complementos para detección de idioma, carga asíncrona y plurales complejos
- Paquete: 22,2 kB (i18next 15,1 kB + reaccionar-i18next 7,1 kB)
- Admite archivos de traducción JSON: es fácil agregar idiomas de forma incremental
- Fuente: [Blog de frases](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)

**Alternativa ligera: LinguiJS**: 10,4 kB en total (la mitad del tamaño), sintaxis de mensajes ICU, compatibilidad con TypeScript.

**Para velocidad del hackathon**: reacciona-i18next con archivos de traducción JSON. Comience con inglés + español, agregue otros idiomas mediante archivos JSON. Utilice la API de Google Translate o DeepL para las traducciones iniciales.

Fuente: [Guía de GloryWebs 2026](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)

### Límites del nivel gratuito de Supabase (2026)

- **2 proyectos activos** (en pausa después de 1 semana de inactividad)
- **500 MB** de almacenamiento de base de datos (CPU compartida)
- **2 GB** salida de base de datos/mes
- **50.000** usuarios activos mensuales (autenticación)
- **1 GB** de almacenamiento de archivos
- Salida de almacenamiento de **2 GB**
- **500.000** invocaciones de funciones perimetrales/mes
- Sin copias de seguridad, sin SLA en el plan gratuito

Fuente: [Precios de Supabase](https://supabase.com/pricing), [Desglose de panadería de la interfaz de usuario](https://uibakery.io/blog/supabase-pricing)

**Para hackathon**: 500 MB es más que suficiente. Incluso con 10.000 usuarios cada uno almacenando perfil + datos infantiles + publicaciones en el foro, usarías <50 MB. El límite de autenticación de 50K MAU también es muy generoso para una demostración.
