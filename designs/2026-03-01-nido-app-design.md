# Nido App — Design Document
*2026-03-01*

## Overview
Mobile app (React Native, iOS + Android) for immigrant parents of autistic children. Bridges language barriers and resource gaps with a warm, modern, multilingual experience.

## Target Users
Immigrant parents (primary caregivers) of children with diagnosed, suspected, or possible autism. Supported languages: English, Spanish, Arabic, Chinese (Simplified).

## Architecture: Feature-first (Option A)
Bottom tab bar navigation (5 tabs). Lightweight onboarding collects language + child name/age only. Full profile built progressively.

## Screen Map

### Auth Flow
- Welcome/Splash — gradient, logo, language chips, CTA
- Sign Up — name, email, password, language preference
- Log In — email, password, forgot password
- Onboarding — child name, age, diagnosis status (step 1 of 2)

### Main App (5 tabs)
| Tab | Purpose |
|-----|---------|
| Home | Daily skill card, questionnaire entry, quick links |
| Guide | Government/school resources, filterable |
| Skills | Browse skill categories, teaching guides |
| Community | Reddit-style forum (posts, comments, upvotes) |
| Assistant | AI chat backed by local LLM + MD knowledge base |

## Visual System
- **Primary:** Teal `#2E9E8E`
- **Accent:** Coral `#F4845F`
- **Background:** Off-white `#F9F6F1`
- **Surface:** White `#FFFFFF`
- **Text:** Charcoal `#1C1C2E`
- **Font:** Inter (RTL-compatible for Arabic)
- **Radius:** 16–24px cards, 18px buttons
- **Shadows:** Soft `0 4px 20px rgba(0,0,0,0.06)`

## Key Features (v1)
1. Pre-diagnosis questionnaire with trait explanations
2. Government/school resource guide
3. Progressive child profile builder
4. Daily skill card (2–3 new skills/week, randomized)
5. Skill browser with teaching guides
6. AI assistant (local LLM + curated MD knowledge base)
7. Reddit-style community forum

## App Name
Placeholder: **Nido** (Spanish for "nest" — warmth, home, safety)
