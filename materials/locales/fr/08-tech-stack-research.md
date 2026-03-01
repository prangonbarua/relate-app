# Hackathon Tech Stack Research : Parents immigrants + application sur l'autisme

**Date :** 2026-02-28 | **Durée de construction :** 10 heures (de 8 h 30 à 18 h 30)

---

## 1. RÉSUMÉ DE LA PILE RECOMMANDÉE

| Couche | Technologie | Pourquoi |
|-------|-----------|-----|
| **Cadre** | Next.js 16 (routeur d'application) | SSR pour le référencement, les routes API, le support PWA, le déploiement Vercel |
| **Échafaud** | `create-t3-app` ou démarreur Nextbase | Chemin le plus rapide vers le full-stack typé |
| **Langue** | TypeScript partout | Sécurité de type de bout en bout |
| **API back-end** | tRPC (via la pile T3) OU routes API Next.js + client Supabase | Type-safe, zéro passe-partout |
| **Base de données** | Supabase (PostgreSQL) | Niveau gratuit, authentification, temps réel, pgvector, RLS |
| **ORM** | Prisme | Types générés automatiquement, outils de migration |
| **Authentification** | Authentification Supabase | Connexion anonyme, OTP par téléphone, e-mail/mot de passe, aucune information personnelle requise |
| **i18n** | prochain-intl | Intégration native Next.js, support RSC, tiny bundle, support RTL |
| **interface utilisateur** | shadcn/ui + Tailwind CSS | Composants copier-coller, pleine propriété, Radix a11y, prêt pour RTL |
| **Chat IA** | SDK IA Vercel + API Claude (Haiku 4.5) | Streaming, utilisez Chat hook, rentable |
| **BD vectorielle** | Supabase pgvecteur | Même base de données, pas de service supplémentaire, RLS sur vecteurs |
| **Intégrations** | Intégration de texte OpenAI-3-small | Jetons à 0,02 $/1 million, 5 fois moins cher que l'ada-002 |
| **API de traduction** | API de traduction Google Cloud | 500 000 caractères gratuits/mois, plus de 130 langues, pas de stockage de données |
| **PWA** | Serwist (@serwist/suivant) | Successeur moderne de la prochaine PWA, support hors ligne |
| **Déploiement** | Vercel (niveau gratuit) | Déploiement Next.js sans configuration, bande passante de 100 Go |
| **Forum** | Personnalisé avec Supabase Realtime | Mises à jour en temps réel, RLS pour la modération |

**Coût mensuel total estimé (Hackathon/Démo) : 0 $** - Tous les services ci-dessus disposent de niveaux gratuits suffisants pour une démo de hackathon.

---

## 2. CADRE RÉAGIR

### Recommandation : Next.js 16 (routeur d'application)

**Pourquoi Next.js plutôt que Vite+React pour CETTE application :**
- SSR/SSG pour le référencement (important pour les pages de ressources qui devraient être visibles par les parents immigrés effectuant des recherches sur Google)
- Les routes API intégrées éliminent le besoin d'un serveur principal séparé
- App Router avec composants React Server = zéro client JS pour le contenu traduit
- Prise en charge native du manifeste PWA via `app/manifest.ts`
- Le déploiement de Vercel est sans configuration
- next-intl fonctionne nativement avec RSC (traductions rendues côté serveur = 0 octet pour le client)

**Quand Vite serait meilleur :**
- Pure SPA sans besoin de référencement
- Démarrage plus rapide du serveur de développement (avantage marginal pour un hackathon de 10 heures)
- Modèle mental plus simple (pas de distinction composant serveur/client)

**Configuration PWA avec Serwist (successeur de la prochaine PWA) :**
```bash
npm install @serwist/next @serwist/precaching @serwist/sw idb
```

Principales stratégies hors ligne :
- **CacheFirst** pour les actifs statiques (`/_next/static/`) -- contenu haché, ne jamais changer
- **NetworkFirst** pour les réponses API et le contenu dynamique
- **StaleWhileRevalidate** pour les fichiers de traduction et les pages de ressources
- IndexedDB pour le stockage de données hors ligne (profils enfants, ressources enregistrées)

**IMPORTANT :** Next.js 16 utilise Turbopack par défaut, mais Serwist nécessite Webpack. Vous devrez configurer la build en conséquence.

**Manifeste PWA** (prise en charge Next.js intégrée) :
```dactylographié
// app/manifest.ts
type d'importation { MetadataRoute } depuis 'suivant'

exporter la fonction par défaut manifest() : MetadataRoute.Manifest {
  retourner {
    nom : 'Pont ASD',
    short_name : 'Pont ASD',
    description: 'Soutenir les familles immigrées ayant des enfants autistes',
    URL_début : '/',
    affichage : 'autonome',
    background_color : '#ffffff',
    theme_color : '#4F46E5',
    icônes : [
      { src : '/icon-192.png', tailles : '192x192', tapez : 'image/png' },
      { src : '/icon-512.png', tailles : '512x512', tapez : 'image/png' },
    ],
  }
}
```

**Sources :**
- [Comparaison complète Vite vs Next.js 2026](https://designrevision.com/blog/vite-vs-nextjs)
- [Guide PWA Next.js](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [Mise en route de Serwist](https://serwist.pages.dev/docs/next/getting-started)
- [PWA Next.js 16 avec Serwist](https://blog.logrocket.com/nextjs-16-pwa-offline-support/)
- [Création de PWA dans Next.js avec Serwist](https://javascript.plainenglish.io/building-a-progressive-web-app-pwa-in-next-js-with-serwist-next-pwa-successor-94e05cb418d7)

---

## 3. BACKEND TYPESCRIPT

### Recommandation : Routes API Next.js + Client Supabase (primaire) OU tRPC (si vous utilisez T3)

**Option A : Routes API Next.js + Supabase (SIMPLEST pour hackathon)**
- Pas de serveur backend séparé
- Le client Supabase JS gère les requêtes DB, l'authentification et le temps réel
- Routes API pour le chat AI, les appels API de traduction et toute logique côté serveur
- Le plus rapide à mettre en place

**Option B : tRPC via T3 Stack (BEST DX si l'équipe le sait)**
- Sécurité de type de bout en bout entre frontend et backend
- Auto-complétion pour les appels API dans le frontend
- Fonctionne avec Prisma pour les types générés
- `create-t3-app` échafaude tout

```bash
# Option A : Simplement Next.js + Supabase
npx create-next-app@latest mon-app --typescript --tailwind --eslint --app --src-dir

# Option B : Pile T3
npx create-t3-app@dernière mon-application
# Sélectionnez : Next.js, TypeScript, Tailwind CSS, tRPC, Prisma
```

**Pourquoi NE PAS exprimer/Fastify :**
- Ajoute de la complexité au déploiement (serveur séparé de l'hôte)
- Aucun avantage par rapport aux routes API Next.js pour ce cas d'utilisation
- 30 à 60 minutes supplémentaires d'installation que vous n'avez pas

**Pourquoi PAS sans serveur (fonctions Lambda/Netlify) :**
- Les routes API Next.js sur Vercel SONT sans serveur par défaut
- Pas besoin d'infrastructure de fonctions distincte

**Sources :**
- [tRPC + Supabase TypeScript](https://noahflk.com/blog/supabase-typescript-trpc)
- [Guide T3 Stack 2025](https://rajeshdhiman.medium.com/trpc-and-the-t3-stack-explained-why-type-safe-web-development-is-the-future-2025-guide-2b49862768fa)
- [Créer une application T3](https://create.t3.gg/)
- [Officiel tRPC](https://trpc.io/)

---

## 4. BASE DE DONNÉES

### Recommandation : Supabase (PostgreSQL)

**Pourquoi Supabase gagne pour ce projet :**

| Fonctionnalité | Supabase | Base de feu | Échelle Planétaire |
|---------|----------|--------------|-------------|
| Stockage de base de données de niveau gratuit | 500 Mo | 1 Go (étincelle) | Niveau gratuit abandonné |
| Authentification incluse | Oui (50 000 MAU gratuits) | Oui (50 000 MAU gratuits) | Non |
| Temps réel | Oui (modifications Postgres) | Oui (meilleur de sa catégorie) | Non |
| Recherche de vecteurs (pgvector) | Oui, intégré | Non | Non |
| Prise en charge SQL | PostgreSQL complet | NoSQL uniquement | MySQL |
| RLS (sécurité au niveau des lignes) | Oui, basé sur SQL | Règles de sécurité Firebase | Non |
| Authentification anonyme | Oui, intégré | Oui | N/A |
| Source ouverte | Oui | Non | Partiellement |
| Portabilité des données | Complet (c'est Postgres) | Verrouillage du fournisseur | Compatible MySQL |

**Niveau gratuit Supabase (2026) :**
- 2 projets actifs
- 500 Mo de stockage de base de données
- Sortie de base de données de 2 Go
- 50 000 MAU (authentification)
- 1 Go de stockage de fichiers
- 500 000 appels de fonctions Edge
- Aucune carte de crédit requise, n'expire jamais

**Pourquoi Supabase plutôt que Firebase pour CETTE application :**
1. pgvector pour la recherche de ressources IA (aucun service supplémentaire requis)
2. Full SQL pour les requêtes complexes (jalons enfants, suivi des compétences)
3. RLS pour un accès anonyme au forum préservant la confidentialité
4. Portabilité des données (non verrouillée dans l'écosystème Google)
5. Mieux pour les données relationnelles (utilisateur -> enfants -> compétences -> jalons)

**Intégration Prisma :**
``` prisme
base de données de la source de données {
  fournisseur = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

**Sources :**
- [Revue Supabase vs Firebase 2026](https://hackceleration.com/supabase-review/)
- [Firebase vs Supabase 2025](https://dev.to/dev_tips/firebase-vs-supabase-in-2025-which-one-actually-scales-with-you-2374)
- [Tarif Supabase 2026](https://uibakery.io/blog/supabase-pricing)
- [Limites de l'offre gratuite Supabase](https://supabase.com/pricing)

---

## 5. AUTHENTIFICATION

### Recommandation : authentification Supabase avec connexion anonyme + OTP par téléphone + e-mail/mot de passe

**PRINCIPE DE CONCEPTION CRITIQUE pour ce public :**
L'application doit être utilisable SANS fournir d'informations personnellement identifiables. De nombreux parents immigrants (en particulier sans papiers) n'utiliseront pas une application qui nécessite une pièce d'identité/SSN gouvernementale, une vérification du nom réel, une collecte d'adresse ou une adresse électronique obligatoire.

**Niveaux d'authentification (Confiance progressive) :**

| Niveau | Méthode | Ce qu'il débloque | Informations personnelles requises |
|------|--------|----------------|--------------|
| 1 | Connexion anonyme | Parcourez les ressources, utilisez le chat AI, consultez le forum | Aucun |
| 2 | Téléphone OTP | Publier sur le forum, enregistrer les profils des enfants | Numéro de téléphone uniquement |
| 3 | E-mail + mot de passe | Compte complet avec récupération | Adresse e-mail |

**Authentification anonyme Supabase :**
```dactylographié
// Connectez-vous de manière anonyme -- aucune information personnelle n'est nécessaire
const { données, erreur } = attendre supabase.auth.signInAnonymously()

// Plus tard, l'utilisateur peut associer un numéro de téléphone
const { données, erreur } = wait supabase.auth.updateUser({
  téléphone : '+1234567890',
})
```

**Configuration OTP du téléphone :**
Supabase prend en charge l'authentification téléphonique via Twilio, MessageBird, Textlocal et Vonage. Les utilisateurs reçoivent un code PIN à 6 chiffres par SMS, valable 60 secondes.

**Sécurité pour les utilisateurs anonymes :**
- Activez CAPTCHA (Cloudflare Turnstile recommandé - gratuit) pour éviter les abus
- Limite de débit basée sur IP : 30 requêtes/heure (réglable dans le tableau de bord Supabase)
- Les politiques RLS peuvent distinguer les utilisateurs anonymes des utilisateurs authentifiés via la revendication JWT « is_anonymous »

**Pourquoi PAS un commis pour cette application :**
- Pas de connexion anonyme intégrée
- 0,02 $/MAU après 10 000 (Supabase : 50 000 gratuits)
- Overkill UI pour ce cas d'utilisation
- Ajoute une dépendance externe

**Pourquoi PAS Auth0 :**
- Configuration complexe pour hackathon
- Pas d'authentification anonyme
- Niveau gratuit limité à 7 500 MAU

**Sources :**
- [Connexions anonymes Supabase](https://supabase.com/docs/guides/auth/auth-anonymous)
- [Connexion téléphonique Supabase](https://supabase.com/docs/guides/auth/phone-login)
- [Clerk vs Supabase Auth](https://www.devtoolsacademy.com/blog/supabase-vs-clerk/)
- [Sécurité des connexions anonymes](https://supabase.com/docs/guides/troubleshooting/security-of-anonymous-sign-ins-iOrGCL)

---

## 6. INTERNATIONALISATION (i18n)

### Recommandation : next-intl

**Pourquoi next-intl plutôt que réagir-i18next ou réagir-intl :**

| Fonctionnalité | prochain-intl | réagir-i18next | réagir-intl |
|---------|-----------|---------------|------------|
| Prise en charge du routeur d'application Next.js | Natif | Via le wrapper | Via le wrapper |
| Prise en charge des composants serveur | Intégré (0 client JS) | Nécessite une configuration | Nécessite une configuration |
| Taille du paquet | ~4 Ko | ~8 Ko | ~12 Ko |
| Prise en charge RTL | Intégré | Manuel | Manuel |
| Formes plurielles (arabe : 6 formes) | USI automatique | Configuration manuelle | USI automatique |
| Type de sécurité | TypeScript d'abord | Bon | Bon |

**Installation :**
```bash
npm installer next-intl rtl-detect
npm install --save-dev @types/rtl-detect
```

**Configuration RTL pour l'arabe, le farsi et l'ourdou :**
```dactylographié
// crochets/useTextDirection.ts
importer { useLocale } depuis 'next-intl' ;
importer { isRtlLang } depuis 'rtl-detect' ;

fonction d'exportation useTextDirection() {
  const locale = useLocale();
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}

// app/[locale]/layout.tsx
exporter la fonction par défaut LocaleLayout({ children, params: { locale } }) {
  const direction = isRtlLang(locale) ? 'rtl' : 'ltr';
  retour (
    <html lang={locale} dir={direction}>
      <corps>{enfants}</corps>
    </html>
  );
}
```

**Structure du fichier de traduction :**
```
message/
  fr/
    common.json # Chaînes d'interface utilisateur partagées (boutons, navigation, erreurs)
    auth.json # Connexion, inscription, profil
    resources.json # Bibliothèque de ressources
    forum.json # Forum/communauté
    ai-chat.json # Assistant IA
    child-profile.json # Suivi des enfants
    skills.json # Cartes de compétences
  ar/ #arabe (RTL)
  es/ # espagnol
  zh/ # Chinois (simplifié)
  fa/ # farsi/persan (RTL)
  ur/ # ourdou (RTL)
```

**Langues prioritaires pour MVP :** Anglais (par défaut), espagnol, arabe (RTL pour démontrer les capacités techniques), chinois (simplifié).

**CSS pour RTL -- utilisez les propriétés logiques Tailwind :**
- `pl-4` -> `ps-4` (padding-inline-start)
- `pr-4` -> `pe-4` (padding-inline-end)
- `texte-gauche` -> `texte-start`
- `texte-droit` -> `texte-fin`
- `ml-auto` -> `ms-auto`
- `mr-auto` -> `moi-auto`

**Traduction automatique du contenu du forum :**

| Services | Niveau gratuit | Prix ​​après gratuit | Langues | Confidentialité |
|---------|-----------|-----------------|-----------|---------|
| Traduction Google Cloud | 500 000 caractères/mois (permanent) | 20 $/1 million de caractères | 130+ | Aucune donnée stockée/utilisée pour la formation |
| DeepL | 500 000 caractères/mois | 25 $/1 million de caractères + 5,49 $/mois | 30+ | Les données du niveau gratuit peuvent être stockées |
| Amazon Traduire | 2 millions de caractères/mois (12 mois seulement) | 15 $/1 million de caractères | 75+ | Aucune donnée stockée |

**Recommandation :** API Google Cloud Translation – niveau gratuit permanent, couverture linguistique la plus large (plus de 130 langues, y compris toutes les langues RTL cibles), fortes garanties de confidentialité (aucune donnée stockée ou utilisée pour la formation).

**Sources :**
- [Documentation suivante-intl](https://next-intl.dev/)
- [Guide complet suivant-intl 2026](https://intlpull.com/blog/next-intl-complete-guide-2026)
- [react-intl contre réagir-i18next](https://www.locize.com/blog/react-intl-vs-react-i18next/)
- [Support RTL Next.js](https://lingo.dev/en/nextjs-i18n/right-to-left-linguals)
- [Tarifs Google Cloud Translation](https://cloud.google.com/translate/pricing)
- [DeepL contre Google Translate](https://taia.io/blog/technology-and-translation/deepl-vs-google-translate-vs-microsoft-translator/)

---

## 7. BIBLIOTHÈQUE DE COMPOSANTS DE L'UI

### Recommandation : shadcn/ui + Tailwind CSS

**Pourquoi shadcn/ui :**
- Les composants sont copiés-collés dans votre projet (pleine propriété, aucune mise à jour des dépendances à craindre)
- Construit sur les primitives de l'interface utilisateur Radix (conforme WAI-ARIA, navigation au clavier, prise en charge du lecteur d'écran)
- Tailwind CSS natif (propriétés logiques pour RTL)
- 40+ composants disponibles
- Prise en charge RTL via des modèles
- Mode sombre/clair intégré
- Zéro surcharge d'exécution

**Installation :**
```bash
npx shadcn@dernier init
npx shadcn@latest bouton d'ajout boîte de dialogue formulaire de saisie onglets de feuille avatar badge commande accordéon toast
```

**Composants clés de cette application :**
- `Carte` - Cartes de ressources, cartes de compétences, cartes de profil d'enfant
- `Dialog` / `Sheet` -- Interactions modales, sélecteur de langue
- `Form` + `Input` -- Formulaires de profil enfant, création de messages sur le forum
- `Onglets` -- Navigation entre les sections
- `Avatar` -- Affichage des utilisateurs du forum (avec option anonyme)
- `Badge` -- Niveaux de compétence, balises de langue
- `Accordion` -- FAQ, détails des ressources
- `Command` -- Palette de recherche de ressources
- `Toast` -- Notifications

**Accessibilité intégrée :**
- Tous les composants basés sur Radix incluent automatiquement les rôles et attributs ARIA
- La navigation au clavier fonctionne immédiatement (Tabulation, Entrée, Échap, Touches fléchées)
- Gestion du focus et focus trapping dans les modaux
- Annonces du lecteur d'écran pour le contenu dynamique
- `aria-describeby` lié automatiquement en cas d'erreurs de validation
- `aria-invalid` défini sur les erreurs de formulaire

**Pourquoi PAS l'interface utilisateur Chakra :** Temps d'exécution plus lourd (CSS-in-JS), style basé sur les accessoires moins flexible que les classes utilitaires Tailwind, dynamique de l'écosystème plus faible en 2025-2026.

**Pourquoi PAS une interface utilisateur matérielle :** Offre très lourde, le langage de conception de Google peut sembler clinique pour une application communautaire, plus difficile à personnaliser en profondeur.

**Sources :**
- [Guide shadcn/ui 2026](https://designrevision.com/blog/shadcn-ui-guide)
- [Composants shadcn/ui accessibles](http://www.blog.brightcoding.dev/2025/12/15/the-ultimate-guide-to-accessible-shadcn-ui-components-build-production-ready-apps-with-react-typescript-tailwind-css)
- [Comparaison des bibliothèques React UI 2025](https://makersden.io/blog/react-ui-libs-2025-comparing-shadcn-radix-mantine-mui-chakra)
- [shadcn/ui contre Chakra contre MUI](https://asepalazhari.com/blog/shadcn-ui-vs-chakra-ui-vs-material-ui-component-battle-2025)

---

## 8. FONCTION FORUM / COMMUNAUTAIRE

### Architecture : construction personnalisée avec Supabase Realtime

**Modèle de données (SQL) :**
```sql
-- Catégories de forums
CREATE TABLE forum_categories (
  id UUID CLÉ PRIMAIRE PAR DÉFAUT gen_random_uuid(),
  nom_clé TEXTE NON NULL,
  description_key TEXTE,
  icône TEXTE,
  sort_order ENTIER PAR DÉFAUT 0,
  créé_à TIMESTAMPTZ PAR DÉFAUT MAINTENANT()
);

-- Messages du forum (threads)
CREATE TABLE forum_posts (
  id UUID CLÉ PRIMAIRE PAR DÉFAUT gen_random_uuid(),
  category_id RÉFÉRENCES UUID forum_categories(id),
  author_id RÉFÉRENCES UUID auth.users(id),
  is_anonymous BOOLEAN DEFAULT faux,
  display_name TEXTE,
  titre TEXTE NON NULL,
  contenu TEXTE NON NULL,
  original_langue TEXT DEFAULT 'fr',
  upvote_count ENTIER PAR DÉFAUT 0,
  comment_count ENTIER PAR DÉFAUT 0,
  is_pinned BOOLEAN DEFAULT faux,
  is_moderated BOOLEAN DEFAULT faux,
  créé_à TIMESTAMPTZ PAR DÉFAUT MAINTENANT(),
  update_at TIMESTAMPTZ PAR DÉFAUT MAINTENANT()
);

-- Commentaires sur les articles
CREATE TABLE forum_comments (
  id UUID CLÉ PRIMAIRE PAR DÉFAUT gen_random_uuid(),
  post_id RÉFÉRENCES UUID forum_posts(id) SUR SUPPRIMER LA CASCADE,
  parent_id RÉFÉRENCES UUID forum_comments(id),
  author_id RÉFÉRENCES UUID auth.users(id),
  is_anonymous BOOLEAN DEFAULT faux,
  display_name TEXTE,
  contenu TEXTE NON NULL,
  original_langue TEXT DEFAULT 'fr',
  upvote_count ENTIER PAR DÉFAUT 0,
  créé_à TIMESTAMPTZ PAR DÉFAUT MAINTENANT()
);

-- Votes positifs
CRÉER TABLE forum_upvotes (
  id UUID CLÉ PRIMAIRE PAR DÉFAUT gen_random_uuid(),
  user_id RÉFÉRENCES UUID auth.users(id),
  post_id RÉFÉRENCES UUID forum_posts(id),
  comment_id RÉFÉRENCES UUID forum_comments(id),
  créé_à TIMESTAMPTZ PAR DÉFAUT MAINTENANT(),
  UNIQUE(identifiant_utilisateur, identifiant_post),
  UNIQUE (identifiant_utilisateur, identifiant_commentaire)
);

-- Traductions mises en cache
CREATE TABLE forum_translations (
  id UUID CLÉ PRIMAIRE PAR DÉFAUT gen_random_uuid(),
  source_type TEXTE NON NULL,
  source_id UUID NON NULL,
  langue_cible TEXTE NON NULL,
  translation_title TEXTE,
  translation_content TEXTE NON NULL,
  créé_à TIMESTAMPTZ PAR DÉFAUT MAINTENANT(),
  UNIQUE(source_id, cible_langue)
);
```

**Mises à jour en temps réel :**
```dactylographié
canal const = supabase
  .channel('messages du forum')
  .on('postgres_changes', {
    événement : 'INSÉRER',
    schéma : 'public',
    tableau : 'forum_posts',
    filtre : `category_id=eq.${categoryId}`
  }, (charge utile) => {
    // Ajouter un nouveau message à l'interface utilisateur
  })
  .abonnez-vous()
```

**Sécurité des publications anonymes :**
- Les publications d'utilisateurs anonymes (authentification anonyme Supabase) peuvent être signalées différemment
- La politique RLS vérifie la revendication `is_anonymous` dans JWT
- Afficher les pseudonymes (par exemple, "Parent #4827") au lieu de noms vides

**Modération (MVP) :** Bouton de rapport simple sur chaque publication/commentaire. Indicateur d'administrateur pour masquer le contenu signalé. Futur : modération de contenu basée sur l'IA via l'API Claude.

**Traduction à la demande :** Messages stockés dans la langue d'origine. Le bouton « Traduire » déclenche l'API Google Cloud Translation. Traduction mise en cache dans la table `forum_translations`. Requêtes ultérieures pour la même langue servies à partir du cache.

**Sources :**
- [Supabase temps réel](https://supabase.com/docs/guides/realtime)
- [supabase-comments-extension](https://github.com/malerba118/supabase-comments-extension)
- [Créer un forum communautaire avec Supabase](https://hub.bootstrapped.app/feature/how-to-build-community-forum-with-supabase)
- [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)

---

## 9. INTÉGRATION DE L'IA

### Architecture : SDK Vercel AI + API Claude + Supabase pgvector RAG

**Flux de données :**
```
Question utilisateur (multilingue)
  -> [Google Translate to English] (si ce n'est pas l'anglais)
  -> [Générer l'intégration] (text-embedding-3-small)
  -> [Recherche de similarité Supabase pgvector]
  -> [Documents contextuels récupérés]
  -> [API Claude avec invite système + contexte + question utilisateur]
  -> [Réponse en anglais]
  -> [Google Translate vers la langue de l'utilisateur] (si ce n'est pas l'anglais)
  -> Affiché à l'utilisateur (diffusé)
```

**Configuration du SDK Vercel AI :**
```bash
npm installer ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
```

```dactylographié
// app/api/chat/route.ts
importer { anthropique } depuis '@ai-sdk/anthropic' ;
importer { streamText } depuis 'ai' ;

exporter la fonction asynchrone POST (req : demande) {
  const { messages, locales } = wait req.json();
  résultat const = streamText({
    modèle : anthropique('claude-3-5-haiku-20241022'),
    système : SYSTEM_PROMPT,
    messages : messages augmentés,
  });
  return result.toDataStreamResponse();
}
```

```dactylographié
// Côté client : composants/AiChat.tsx
« utiliser le client » ;
importer { useChat } depuis '@ai-sdk/react' ;

fonction d'exportation AiChat() {
  const { messages, entrée, handleInputChange, handleSubmit, isLoading } = useChat({
    api : '/api/chat',
  });
  // Interface utilisateur de chat avec réponses en streaming
}
```

**Sélection du modèle Claude pour le Hackathon :**

| Modèle | Entrée/1 million de jetons | Sortie/1 million de jetons | Idéal pour |
|-------|----------------|---------|----------|
| Claude Haïku 4.5 | 1,00 $ | 5,00 $ | **Réponses par chat (RECOMMANDÉ)** |
| Claude Sonnet 4.5 | 3,00 $ | 15,00 $ | Raisonnement complexe |
| Claude Opus 4.5 | 5,00 $ | 25,00 $ | Exagération pour le chat |

**Recommandation :** Claude Haiku 4.5 - rapide (faible latence pour le streaming), bon marché (idéal pour le budget d'un hackathon) et suffisamment performant pour les questions et réponses sur les ressources et les conseils généraux.

**Invite système (sécurité d'abord pour les informations sur la santé) :**
```
Vous êtes un assistant d'IA qui aide les parents immigrants d'enfants
atteints de troubles du spectre autistique (TSA). Vous fournissez des informations sur :
- Ressources, thérapies et programmes éducatifs sur les TSA
- Naviguer dans les systèmes de santé et d'éducation américains
- Processus IEP (Programme d'Éducation Individualisé)
- Programmes de soutien gouvernementaux et à but non lucratif disponibles
- Étapes générales du développement

DIRECTIVES DE SÉCURITÉ CRITIQUES :
- Vous n'êtes PAS médecin. Recommandez toujours de consulter des professionnels de la santé.
- Ne jamais diagnostiquer ni suggérer de traitements médicaux spécifiques.
- Incluez toujours une clause de non-responsabilité lorsque vous discutez de sujets médicaux/développementaux.
- Si un utilisateur décrit une urgence médicale, demandez-lui d'appeler le 911.
- Soyez sensible à la culture et évitez les hypothèses sur la structure familiale.
- Utiliser un langage simple et clair.
- En cas de doute, dites « Je ne sais pas » plutôt que de deviner.
- Ne collectez ni ne demandez jamais d’informations d’identification personnelle.
```

**Configuration Supabase pgvector RAG :**
```sql
CRÉER UNE EXTENSION SI N'EXISTE PAS vecteur ;

Ressources CRÉER UNE TABLE (
  id UUID CLÉ PRIMAIRE PAR DÉFAUT gen_random_uuid(),
  titre TEXTE NON NULL,
  contenu TEXTE NON NULL,
  catégorie TEXTE NON NULL,
  source_url TEXTE,
  indiquer le TEXTE,
  langue TEXTE PAR DÉFAUT 'en',
  vecteur d'intégration (1536),
  créé_à TIMESTAMPTZ PAR DÉFAUT MAINTENANT(),
  update_at TIMESTAMPTZ PAR DÉFAUT MAINTENANT()
);

CRÉER UN INDEX SUR LES RESSOURCES EN UTILISANT hnsw (intégrant vector_cosine_ops) ;

CRÉER OU REMPLACER UNE FONCTION match_resources(
  vecteur query_embedding (1536),
  match_threshold FLOAT PAR DÉFAUT 0.7,
  match_count INT PAR DÉFAUT 5
)
TABLE DE RETOUR (identifiant UUID, TEXTE du titre, TEXTE du contenu, TEXTE de la catégorie, FLOAT de similarité)
LANGUE plpgsql AS $$
COMMENCER
  RETOURNER LA REQUÊTE
  SELECT r.id, r.title, r.content, r.category,
    1 - (r.embedding <=> query_embedding) AS similarité
  DE ressources r
  OÙ 1 - (r.embedding <=> query_embedding) > match_threshold
  ORDER BY r.embedding <=> query_embedding
  LIMIT match_count ;
FIN;
$$ ;
```

**Modèle d'intégration :** Utilisez OpenAI `text-embedding-3-small` (0,02 $/1 million de jetons, 1 536 dimensions, 5 fois moins cher que ada-002 avec de meilleures performances).

**Raccourci Hackathon :** Pré-remplissez le tableau des ressources avec 20 à 50 ressources organisées sur l'autisme, les PEI, les types de thérapie et les organisations de soutien. Générez des intégrations pour ceux-ci lors de la configuration plutôt que de créer un pipeline d'ingestion complet.

**Sources :**
- [SDK Vercel AI](https://ai-sdk.dev/docs/introduction)
- [AI SDK + Guide Next.js](https://dev.to/pockit_tools/vercel-ai-sdk-complete-guide-building-production-ready-ai-chat-apps-with-nextjs-4cp6)
- [Tarifs de l'API Claude](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude pour la Santé 2026](https://intuitionlabs.ai/articles/claude-healthcare-life-sciences-ai-capabilities-2026)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)
- [Supabase AI et vecteurs](https://supabase.com/docs/guides/ai)
- [Incorporations OpenAI](https://platform.openai.com/docs/guides/embeddings)
- [text-embedding-3-small contre ada-002](https://www.helicone.ai/comparison/text-embedding-3-small-on-openai-vs-text-embedding-ada-002-v2-on-openai)
- [Construire RAG avec Claude & pgvector](https://www.tigerdata.com/blog/retrieval-augmented-generation-with-claude-sonnet-3-5-and-pgvector)
- [RAG Chatbot avec Supabase pgvector](https://noqta.tn/en/tutorials/building-a-rag-chatbot-with-supabase-pgvector-and-nextjs)

---

## 10. ACCESSIBILITÉ

### Stratégie de conformité WCAG 2.2 AA

**Principes clés pour ce public :**
1. **Accessibilité cognitive** -- Dispositions prévisibles, hiérarchie visuelle claire (important pour les parents stressés/débordés ET pour les considérations liées à l'autisme)
2. **Faible niveau d'alphabétisation** - Indices visuels, icônes à côté du texte, langage simple
3. **Accessibilité multilingue** -- Les lecteurs d'écran doivent fonctionner avec les langues RTL
4. **Accessibilité du moteur** - Grandes cibles tactiles (min 44x44px selon WCAG 2.2)

**Intégré via shadcn/ui + Radix :**
- Tous les composants incluent automatiquement les rôles/attributs ARIA
- Navigation au clavier (Tabulation, Entrée, Échap, Touches fléchées)
- Gestion du focus et focus trapping dans les modaux
- Annonces du lecteur d'écran pour le contenu dynamique
- `aria-describeby` lié aux erreurs de validation
- `aria-invalid` défini sur les erreurs de formulaire

**Bibliothèques supplémentaires :**
```bash
npm install -D @axe-core/react # Enregistre les problèmes a11y sur la console du navigateur
npm install -D eslint-plugin-jsx-a11y # Lint pour les problèmes a11y
```

**Contraste des couleurs :** WCAG AA nécessite 4,5 : 1 pour un texte normal, 3 : 1 pour un texte de grande taille. Fournit une bascule de mode à contraste élevé.

**Considérations de conception spécifiques à l'autisme :**
- Polices sans empattement (par exemple, Inter, system-ui) - plus faciles à lire pour les utilisateurs neurodivergents
- Navigation cohérente et prévisible sur toutes les pages
- Animations minimales (respecter « préfère le mouvement réduit »)
- Des limites visuelles claires entre les sections
- Eviter la surcharge sensorielle (couleurs sourdes, pas de clignotement)
- Basculement de langue simple pour la simplification du contenu

```dactylographié
// Dans les composants, respectez les préférences de mouvement :
// <div className="motion-safe:animate-fadeIn motion-reduce:opacity-100">
```

**Sources :**
- [WCAG 2.2 dans React](https://johal.in/wcag-2-2-accessibility-in-react-semantic-html-and-aria-patterns-for-inclusive-web-development-python/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- [Guide WCAG 2025 sur le contraste des couleurs](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [Meilleures pratiques d'accessibilité de React](https://rtcamp.com/handbook/react-best-practices/accessibility/)

---

## 11. DÉPLOIEMENT

### Recommandation : niveau gratuit de Vercel

**Pourquoi Vercel :** Construit par les créateurs de Next.js - aucune configuration nécessaire. Juste `git push` pour déployer.

**Limites de l'offre gratuite :**
- 100 Go de bande passante/mois
- 100 000 appels de fonctions sans serveur/mois
- Déploiements illimités
- Délai d'expiration de la fonction de 10 secondes (suffisant pour le streaming AI)
- Prise en charge de domaines personnalisés

**Variables d'environnement :**
```bash
# .env.local (ne jamais commettre ceci)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... # Côté serveur uniquement
ANTHROPIC_API_KEY=sk-ant-... # Côté serveur uniquement
OPENAI_API_KEY=sk-... # Côté serveur uniquement (pour les intégrations)
GOOGLE_TRANSLATE_API_KEY=... # Côté serveur uniquement
```

**IMPORTANT :** Les variables préfixées par `NEXT_PUBLIC_` sont exposées au navigateur. Les clés API ne doivent PAS avoir ce préfixe.

**Conseils de démonstration :** Déployez tôt sur Vercel (dans la première heure). Utilisez les URL d'aperçu pour les partager avec les juges. Protection par mot de passe disponible pour les déploiements en version préliminaire.

**Sources :**
- [Déploiement de Next.js sur Vercel](https://eastondev.com/blog/en/posts/dev/20251220-nextjs-vercel-deploy-guide/)
- [Déploiement des applications Next.js 2026](https://dev.to/zahg_81752b307f5df5d56035/the-complete-guide-to-deploying-nextjs-apps-in-2026-vercel-self-hosted-and-everything-in-between-48ia)
- [Variables d'environnement Vercel](https://vercel.com/docs/environment-variables)

---

## 12. CONFIDENTIALITÉ ET SÉCURITÉ

### Architecture de confidentialité dès la conception

**PRINCIPE DIRECTEUR :** Cette application s'adresse à une population vulnérable. Les violations de la vie privée pourraient avoir des conséquences concrètes (risque d’expulsion pour les familles sans papiers). La sécurité n'est pas facultative.

**Considérations HIPAA :** L'application n'est PAS une entité couverte et n'a probablement PAS besoin d'être entièrement conforme à la HIPAA. Cependant, si vous stockez des informations relatives à la santé des enfants, considérez-les comme sensibles. Meilleure approche : minimisez ce que vous stockez côté serveur.

**Considérations COPPA (enfants de moins de 13 ans) :** Si les parents sont les seuls utilisateurs, la COPPA est moins restrictive mais reste pertinente pour le stockage des données des enfants. La mise à jour COPPA 2025 introduit des exigences plus strictes en matière de minimisation des données. **Recommandation :** Concevez l'application uniquement pour les PARENTS, et non pour que les enfants l'utilisent directement.

**Architecture des données – Que stocker où :**

| Type de données | Lieu de stockage | Cryptage |
|---------------|-------|------------|
| Nom de l'enfant | Côté client (localStorage/IndexedDB) | AES-256 côté client en option |
| Diagnostic de l'enfant | Côté client | Chiffrement AES-256 côté client |
| Compétences/étapes de l'enfant | Supabase (chiffrée au repos) | Supabase par défaut |
| Messages du forum | Supabase | Au repos (par défaut de Supabase) |
| Historique des discussions IA | Côté client uniquement (sessionStorage) | Éphémère, non persistant |
| Langue préférée de l'utilisateur | Métadonnées utilisateur Supabase | Norme |
| Jetons d'utilisateur anonymes | Authentification Supabase | Norme JWT |

**Politiques RLS :**
```sql
-- Les utilisateurs ne peuvent voir que leurs propres profils d'enfants
CRÉER UNE POLITIQUE "Les utilisateurs peuvent voir leurs propres enfants"
  SUR les profils_enfants POUR SELECT
  USING (auth.uid() = parent_id);

-- Les utilisateurs anonymes peuvent lire les messages du forum
CRÉER UNE POLITIQUE "Tout le monde peut lire les messages"
  SUR forum_posts POUR SÉLECTIONNER
  USING (is_moderated = false);

-- Seuls les utilisateurs authentifiés peuvent publier
CRÉER UNE POLITIQUE "Les utilisateurs authentifiés peuvent publier"
  SUR forum_posts POUR INSÉRER
  AVEC CHECK (auth.uid() N'EST PAS NULL);
```

**Ce qu'il ne faut PAS faire :**
- Ne stockez PAS le statut d'immigration nulle part, jamais
- Ne nécessite PAS de vrais noms
- Ne stockez PAS les adresses IP dans les journaux d'applications
- N'utilisez PAS d'analyse de suivi (pas de Google Analytics – utilisez Plausible ou rien)
- Ne stockez PAS les conversations de chat AI côté serveur
- Ne nécessite PAS de services de localisation

**Sources :**
- [HIPAA et applications de santé](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html)
- [Conformité COPPA 2025](https://blog.promise.legal/startup-central/coppa-compliance-in-2025-a-practical-guide-for-tech-edtech-and-kids-apps/)
- [Guide de l'application Zero-Knowledge Health](https://www.wellally.tech/blog/build-zero-knowledge-health-app-react-encryption)
- [Guide complet Supabase RLS 2026](https://vibeappscanner.com/supabase-row-level-security)

---

## 13. STRATÉGIE DU HACKATHON ET BUDGET DE TEMPS

### Plan de construction de 10 heures (8h30 - 18h30)

** Priorisation des fonctionnalités (méthode MoSCoW) :**

| Priorité | Fonctionnalité | Statut | HNE. Temps |
|----------|---------|--------|---------------|
| **DOIT** | Interface utilisateur multilingue (EN + ES + AR) | Construire entièrement | 1h30 |
| **DOIT** | Assistant de chat IA (avec RAG) | Construire entièrement | 2 heures |
| **DOIT** | Bibliothèque de ressources (navigable + consultable) | Construire entièrement | 1 heure |
| **DOIT** | Anonyme + authentification téléphonique | Construire entièrement | 1 heure |
| **DOIT** | Profil enfant avec suivi des compétences | Construire entièrement | 1h30 |
| **DEVRAIT** | Forum communautaire | Construire de base (pas de temps réel) | 1 heure |
| **DEVRAIT** | Accès hors ligne PWA | Construire (configuration Serwist) | 0,5 heure |
| ** POURRAIT ** | Traduction message du forum | Talon avec maquette | 0,5 heure |
| ** POURRAIT ** | Mode sombre / contraste élevé | Basculement rapide | 0,25 h |
| **NE PAS** | Système de modération complet | Démo simulée uniquement | -- |
| **NE PAS** | Notifications poussées | Passer entièrement | -- |
| **NE PAS** | Contenu vidéo | Passer entièrement | -- |

### Calendrier détaillé

```
8h30 - 9h00 (30 min) CONFIGURATION DU PROJET
  - Échafaudage avec create-t3-app ou Nextbase starter
  - Création de projet Supabase + tables
  - Pipeline de déploiement Vercel (déployer un shell vide)
  - Installer les dépôts de base
  - Variables d'environnement configurées

9h00 - 10h00 (60 min) FONDATION
  - Composant de mise en page avec i18n (en-tête, navigation, sélecteur de langue)
  - composants shadcn/ui installés
  - Support RTL câblé
  - Auth Supabase : interface utilisateur anonyme + connexion par e-mail
  - Structure des fichiers de traduction (EN + ES + AR)

10h00 - 11h30 (90 min) FONCTIONNEMENT PRINCIPAL N°1 : CHAT AI
  - Configuration du SDK Vercel AI + Claude Haiku
  - Route API pour discuter avec streaming
  - Composant d'interface utilisateur de chat avec hook useChat
  - Invite du système avec garde-corps de sécurité
  - Pré-remplir 20 ressources dans pgvector
  - Pipeline RAG (requête intégrée -> recherche -> invite d'augmentation)

11h30 - 12h00 (30 min) DÉPLOIEMENT EN MI-MATINÉE + TEST
  - Déployer sur Vercel
  - Tester sur mobile
  - Correction de bugs critiques

12h00 - 12h30 (30 minutes) DÉJEUNER

12h30 - 13h30 (60 min) FONCTIONNEMENT PRINCIPAL N°2 : BIBLIOTHÈQUE DE RESSOURCES
  - Cartes de ressources avec filtrage par catégorie
  - Fonctionnalité de recherche
  - Pages de détails des ressources
  - Données de départ : 20 à 50 ressources organisées

13h30 - 15h00 (90 min) FONCTIONNEMENT DE BASE N°3 : PROFIL DE L'ENFANT + COMPÉTENCES
  - Formulaire de création de profil enfant
  - Composants de la carte de compétence
  - Interface utilisateur de suivi des jalons
  - Stockage côté client pour les données sensibles
  - Vue du tableau de bord du profil

15h00 - 16h00 (60 min) FONCTION #4 : FORUM COMMUNAUTAIRE (BASIQUE)
  - Affichage de la liste des messages du forum
  - Créer un formulaire de publication
  - Système de commentaires de base
  - Organisation par catégories

16h00 - 16h30 (30 min) PWA + TRADUCTIONS
  - Configuration du travailleur de service Serwist
  - Remplir les clés de traduction pour ES et AR
  - Tester la mise en page RTL avec l'arabe

16h30 - 17h30 (60 min) PRÉPARATION DE VERNIS ET DE DÉMO
  - Correction des bugs de l'interface utilisateur
  - Ajouter des états de chargement et une gestion des erreurs
  - Basculement du mode contraste élevé (si le temps)
  - Prendre des captures d'écran pour la présentation
  - Enregistrer une sauvegarde vidéo de démonstration

17h30 - 18h00 (30 min) DÉPLOIEMENT FINAL + PRÉSENTATION
  - Déploiement final de Vercel
  - Testez toutes les fonctionnalités de bout en bout
  - Préparer un script de pitch de 3 minutes

6h00 - 6h30 (30 min) TAMPON / PRÉSENTATION
```

### De quoi se moquer/stub :
- **Modération du forum :** Masquez simplement les messages signalés avec un indicateur, pas de panneau d'administration
- **Traduction du forum :** Le bouton "Traduire" affiche le chargement puis le texte original (ou Google Translate si le moment est venu)
- **Flux de réinitialisation du mot de passe :** Utiliser les e-mails par défaut de Supabase
- **Avatars d'utilisateur :** Initiales ou icône par défaut, pas de téléchargement
- **Tableau de bord d'administration :** Ignorer entièrement

### Conseils d'optimisation de la démo :
1. **Commencez par l'histoire** -- "Rencontrez Fatima, une mère syrienne qui vient de déménager aux États-Unis. Son fils de 4 ans a récemment reçu un diagnostic d'autisme. Elle ne parle pas anglais. Elle ne sait pas par où commencer."
2. **Afficher le changement de langue** - Passez de l'anglais à l'arabe en direct. Le flip RTL est visuellement impressionnant pour les juges.
3. **Démonstration du chat AI** - Posez-lui une question en espagnol. Montrez-le en fournissant des ressources.
4. **Afficher la capacité hors ligne** - Désactivez le WiFi et montrez que l'application fonctionne toujours.
5. **Insistez sur la confidentialité** -- "Aucun vrai nom n'est nécessaire. Aucun e-mail requis. Elle peut utiliser cette application en toute sécurité."

**Sources :**
- [De zéro à la démo en 36 heures](https://medium.com/@BizthonOfficial/from-zero-to-demo-how-to-build-a-working-mvp-in-36-hours-abf759584145)
- [Prioritisation des fonctionnalités MVP](https://gainhq.com/blog/mvp-feature-prioritization/)
- [Conseils de démonstration du Hackathon (Devpost)](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Guide du Pitch Deck du Hackathon](https://www.inknarrates.com/post/hackathon-pitch-deck)

---

## 14. CHAUDE ET MODÈLES

### Option 1 : create-t3-app (RECOMMANDÉ pour les équipes familiarisées avec tRPC)
```bash
npx create-t3-app@latest autism-bridge --typescript --tailwind --trpc --prisma
```
- GitHub : https://github.com/t3-oss/create-t3-app
- Comprend : Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
- Vous ajoutez : Supabase, next-intl, shadcn/ui, Vercel AI SDK

### Option 2 : Nextbase Starter (RECOMMANDÉ pour une configuration plus simple)
-GitHub : https://github.com/imbhargav5/nextbase-nextjs-supabase-starter
- Comprend : Next.js 16+, Supabase, Tailwind CSS 4, TypeScript, React Query
- Vous ajoutez : next-intl, shadcn/ui, Vercel AI SDK, Prisma (facultatif)

### Option 3 : Démarreur Vercel Supabase
- Modèle : https://vercel.com/templates/next.js/supabase
- Modèle officiel Vercel/Supabase avec authentification SSR

### Option 4 : supa-next-starter
- GitHub : https://github.com/michaeltroya/supa-next-starter
- Comprend : Next.js, Supabase, Tailwind, shadcn/ui (déjà intégré)

### Après l'échafaudage, ajoutez :
```bash
npm installer next-intl rtl-detect
npm installer ai @ai-sdk/anthropic @ai-sdk/openai @ai-sdk/react
npm install @serwist/next @serwist/precaching @serwist/sw
npx shadcn@dernier init
npx shadcn@latest bouton d'ajout boîte de dialogue formulaire de saisie onglets de feuille avatar badge commande accordéon toast
npm install -D @axe-core/react eslint-plugin-jsx-a11y @types/rtl-detect
```

### Projets de référence :
- **supabase-comments-extension** (GitHub : malerba118/supabase-comments-extension) -- Commentaires, réponses, réactions
- **ojasskapre/nextjs-starter-template** -- Interfaces de discussion Next.js + Supabase + LLM
- **shwosner/realtime-chat-supabase-react** -- Chat en temps réel avec Supabase

---

## 15. CONCEPTION DE SCHÉMA

### Schéma Prisma complet

``` prisme
client générateur {
  fournisseur = "prisma-client-js"
}

base de données de la source de données {
  fournisseur = "postgresql"
  url = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// UTILISATEUR & AUTHENTIFICATION
modèle Profil utilisateur {
  id Chaîne @id @default(uuid())
  authId Chaîne @unique
  chaîne displayName ?
  chaîne locale préférée @default("fr")
  créé à DateHeure @default (maintenant ())
  mis à jour à DateHeure @updatedAt
  enfants Profil Enfant[]
  Messages du forum Message du forum[]
  forumComments ForumComment[]
  votes positifs ForumUpvote[]
}

// PROFILS DES ENFANTS ET SUIVI DES COMPÉTENCES
modèle ChildProfile {
  id Chaîne @id @default(uuid())
  chaîne IDparent
  Profil utilisateur parent @relation (champs : [parentId], références : [id])
  surnom Chaîne
  Année de naissance Int ?
  diagnosticDate DateHeure ?
  compétences SkillCard[]
  jalons Jalon[]
  créé à DateHeure @default (maintenant ())
  mis à jour à DateHeure @updatedAt
  @@index([parentId])
}

modèle SkillCategory {
  id Chaîne @id @default(uuid())
  chaîne nameKey
  icône Chaîne ?
  sortOrder Int @default(0)
  compétences SkillCard[]
}

modèle SkillCard {
  id Chaîne @id @default(uuid())
  chaîne d'ID enfant
  enfant ChildProfile @relation (champs : [childId], références : [id], onDelete : Cascade)
  chaîne d'ID de catégorie
  catégorie SkillCategory @relation (champs : [categoryId], références : [id])
  chaîne nameKey
  niveau Int @default(0)
  note Chaîne ?
  lastAssessed DateTime @default (maintenant ())
  créé à DateHeure @default (maintenant ())
  mis à jour à DateHeure @updatedAt
  @@index([IDenfant])
  @@index([categoryId])
}

modèle Jalon {
  id Chaîne @id @default(uuid())
  chaîne d'ID enfant
  enfant ChildProfile @relation (champs : [childId], références : [id], onDelete : Cascade)
  chaîne de clé de titre
  description Chaîne ?
  Date DateHeure atteinte ?
  catégorie Chaîne
  créé à DateHeure @default (maintenant ())
  @@index([IDenfant])
}

// RESSOURCES (intégration vectorielle gérée via SQL brut / pgvector)
ressource modèle {
  id Chaîne @id @default(uuid())
  chaîne de titre
  chaîne de contenu @db.Text
  Chaîne récapitulative ?
  catégorie Chaîne
  sous-catégorie Chaîne ?
  chaîne sourceUrl ?
  chaîne d'état ?
  langue Chaîne @default("fr")
  balises Chaîne[]
  créé à DateHeure @default (maintenant ())
  mis à jour à DateHeure @updatedAt
  @@index([catégorie])
  @@index([état])
}

// FORUM / COMMUNAUTÉ
modèle ForumCategory {
  id Chaîne @id @default(uuid())
  chaîne nameKey
  descriptionChaîne clé ?
  icône Chaîne ?
  sortOrder Int @default(0)
  messages ForumPost[]
}

modèle ForumPost {
  id Chaîne @id @default(uuid())
  chaîne d'ID de catégorie
  catégorie ForumCategory @relation(champs : [categoryId], références : [id])
  chaîne IDauteur
  auteur UserProfile @relation (champs : [authorId], références : [id])
  isAnonyme Booléen @default(false)
  chaîne de titre
  chaîne de contenu @db.Text
  originalLang String @default("fr")
  upvoteCount Int @default(0)
  commentCount Int @default(0)
  isPinned Booléen @default (false)
  isHidden Booléen @default (false)
  reportCount Int @default(0)
  commentaires ForumComment[]
  votes positifs ForumUpvote[]
  traductions ForumTraduction[]
  créé à DateHeure @default (maintenant ())
  mis à jour à DateHeure @updatedAt
  @@index([categoryId])
  @@index([IDauteur])
  @@index([crééÀ])
}

modèle ForumComment {
  id Chaîne @id @default(uuid())
  chaîne postId
  post ForumPost @relation(champs : [postId], références : [id], onDelete : Cascade)
  chaîne IDparent ?
  Forum parentCommentaire ? @relation("CommentReplies", champs : [parentId], références : [id])
  répond ForumComment[] @relation("CommentReplies")
  chaîne IDauteur
  auteur UserProfile @relation (champs : [authorId], références : [id])
  isAnonyme Booléen @default(false)
  chaîne de contenu @db.Text
  originalLang String @default("fr")
  upvoteCount Int @default(0)
  isHidden Booléen @default (false)
  reportCount Int @default(0)
  votes positifs ForumUpvote[]
  traductions ForumTraduction[]
  créé à DateHeure @default (maintenant ())
  @@index([postId])
  @@index([parentId])
}

modèle ForumUpvote {
  id Chaîne @id @default(uuid())
  chaîne ID utilisateur
  utilisateur UserProfile @relation (champs : [userId], références : [id])
  chaîne postId ?
  poster ForumPost ? @relation(champs : [postId], références : [id], onDelete : Cascade)
  commentId Chaîne ?
  commentaire ForumComment ? @relation(champs : [commentId], références : [id], onDelete : Cascade)
  créé à DateHeure @default (maintenant ())
  @@unique([userId, postId])
  @@unique([userId, commentId])
}

modèle ForumTraduction {
  id Chaîne @id @default(uuid())
  chaîne postId ?
  poster ForumPost ? @relation(champs : [postId], références : [id], onDelete : Cascade)
  commentId Chaîne ?
  commentaire ForumComment ? @relation(champs : [commentId], références : [id], onDelete : Cascade)
  chaîneLangCible
  Chaîne de titre traduite ?
  chaîne de contenu traduit @db.Text
  créé à DateHeure @default (maintenant ())
  @@unique([postId, targetLang])
  @@unique([commentId, targetLang])
}
```

### Catégories de données de départ

**Catégories de compétences :** Communication, compétences sociales, vie quotidienne, motricité, académique, traitement sensoriel, régulation émotionnelle

**Catégories du forum :** Introductions et bienvenue, thérapie et traitements (ABA/OT/discours), aide scolaire et IEP, conseils de vie quotidienne, questions juridiques et d'immigration, navigation dans les soins de santé, histoires de réussite et jalons, assistance générale

**Catégories de ressources :** Types et fournisseurs de thérapies, ressources d'éducation et d'IEP, droits juridiques et défense des droits, aide financière, organisations communautaires, outils et applications en ligne, livres et médias, ressources spécifiques à l'État.

---

## RÉSUMÉ DES DÉPENDANCES PACKAGE.JSON

```json
{
  "dépendances": {
    "suivant": "^16.0.0",
    "réagir": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.7.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/ssr": "^0.5.0",
    "prisma": "^6.0.0",
    "@prisma/client": "^6.0.0",
    "suivant-intl": "^4.0.0",
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
  "dépendances dev": {
    "@axe-core/react": "^4.10.0",
    "eslint-plugin-jsx-a11y": "^6.10.0",
    "@types/rtl-detect": "^1.0.0"
  }
}
```

---

## RÉFÉRENCE RAPIDE : LIENS CLÉS DE LA DOCUMENTATION

| Outil | Documents |
|------|--------------|
| Suivant.js 16 | https://nextjs.org/docs |
| Supabase | https://supabase.com/docs |
| Authentification Supabase | https://supabase.com/docs/guides/auth |
| Supabase en temps réel | https://supabase.com/docs/guides/realtime |
| Supabase pgvecteur | https://supabase.com/docs/guides/ai |
| prochain-intl | https://next-intl.dev/ |
| shadcn/ui | https://ui.shadcn.com/ |
| SDK IA Vercel | https://ai-sdk.dev/docs/introduction |
| Claude API | https://platform.claude.com/docs |
| Prisme | https://www.prisma.io/docs |
| Serwiste PWA | https://serwist.pages.dev/docs/next/getting-started |
| CSS vent arrière | https://tailwindcss.com/docs |
| Traduction Google Cloud | https://cloud.google.com/translate/docs |
| Intégrations OpenAI | https://platform.openai.com/docs/guides/embeddings |
| Déploiement Vercel | https://vercel.com/docs |

---

Cette recherche couvre les 10 domaines que vous avez demandés ainsi que la stratégie de hackathon, l'architecture de confidentialité, les options passe-partout et la conception complète du schéma. La pile est conçue de telle sorte que chaque service s'intègre dans les niveaux gratuits du hackathon, que l'authentification préserve la confidentialité des utilisateurs sans papiers et que le budget temps soit réaliste pour une construction de 10 heures. J'ai essayé de l'enregistrer en tant que fichier dans `/Users/arielorlov/Desktop/hackathon-tech-stack-research.md` mais l'autorisation d'écriture du fichier a été refusée. Si vous souhaitez que je sauvegarde ceci sur le disque, vous pouvez accorder l'autorisation d'écriture et je créerai le fichier.
---

## Recherche supplémentaire (mise à jour en mars 2026)

### Meilleure bibliothèque i18n pour plus de 10 langages (React + TypeScript)

**Recommandé : react-i18next** – 2,1 millions de téléchargements hebdomadaires, la solution React i18n la plus populaire.
- Construit sur l'écosystème i18next avec des plugins pour la détection de langue, le chargement asynchrone, les pluriels complexes
- Bundle : 22,2 ko (i18next 15,1 ko + react-i18next 7,1 ko)
- Prend en charge les fichiers de traduction JSON - ajout facile de langues de manière incrémentielle
- Source : [Blog Phrase](https://phrase.com/blog/posts/react-i18n-best-libraries/), [react.i18next.com](https://react.i18next.com)

**Alternative légère : LinguiJS** — 10,4 Ko au total (la moitié de la taille), syntaxe de message ICU, prise en charge de TypeScript.

**Pour la vitesse du hackathon** : réagissez-i18next avec les fichiers de traduction JSON. Commencez par l'anglais + l'espagnol, ajoutez d'autres langues via des fichiers JSON. Utilisez l'API Google Translate ou DeepL pour les traductions initiales.

Source : [Guide GloryWebs 2026](https://www.glorywebs.com/blog/internationalization-in-react), [SimpleLocalize](https://simplelocalize.io/blog/posts/the-most-popular-react-localization-libraries/)

### Limites de l'offre gratuite Supabase (2026)

- **2 projets actifs** (en pause après 1 semaine d'inactivité)
- **500 Mo** de stockage de base de données (CPU partagé)
- **2 Go** de sortie de base de données/mois
- **50 000** utilisateurs actifs mensuels (auth)
- **1 Go** de stockage de fichiers
- Sortie de stockage **2 Go**
- **500 000** appels de fonctions Edge/mois
- Pas de sauvegardes, pas de SLA sur le plan gratuit

Source : [Prix Supabase](https://supabase.com/pricing), [Répartition de la boulangerie UI](https://uibakery.io/blog/supabase-pricing)

**Pour un hackathon** : 500 Mo sont largement suffisants. Même avec 10 000 utilisateurs stockant chacun un profil + des données sur les enfants + des messages sur le forum, vous utiliseriez moins de 50 Mo. La limite d'authentification de 50 000 MAU est également très généreuse pour une démo.
