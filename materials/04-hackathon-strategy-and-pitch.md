# MIT Blueprint Hackathon: Complete Research Brief for Immigrant Parents x Autism App

---

## PART 1: MIT BLUEPRINT HACKATHON -- EVERYTHING YOU NEED TO KNOW

### What Is MIT Blueprint?

MIT Blueprint is a weekend-long **learnathon and hackathon exclusively for high school students**, organized by the HackMIT team and hosted on MIT's campus. It is MIT's largest high school hackathon. Unlike traditional competitive hackathons, Blueprint emphasizes **learning and collaboration**, creating an environment where students can explore tech development with guidance from MIT students and industry professionals.

- **Website:** [blueprint.hackmit.org](https://blueprint.hackmit.org/)
- **Hacker Guide:** [guide.hackmit.org](https://guide.hackmit.org/)
- **Cost:** Completely free
- **Audience:** High school students of ALL skill levels, from first-time coders to experienced hackers

### Blueprint 2026 Dates and Format

- **Dates:** February 28 -- March 1, 2026
- **Location:** MIT Campus, Cambridge, MA 02139
- **BP Week (pre-event):** February 26 -- March 1, includes tech talks, mini-events, and team formation sessions

**Two-Phase Structure:**
1. **Learnathon (Day 1):** Skill-building workshops led by MIT mentors and professionals. Topics range from programming basics to web and game development.
2. **Hackathon (Day 2):** Teams build projects from scratch in approximately **9 hacking hours**, working directly with MIT mentors. Culminates in a project demo before a panel of experts.

### Tracks

- **Start Hacking (Beginner):** Introduces coding through Python; ideal for newcomers interested in basic website and mobile app development.
- **Web Dev (Beginner and Advanced):** Covers essentials of web development through creating complex, interactive applications.

### Team Size

Based on HackMIT conventions (same organizing team), teams are typically **up to 4 members**. Blueprint follows similar guidelines. Confirm the exact limit at [guide.hackmit.org](https://guide.hackmit.org/).

### Judging Criteria

Based on HackMIT's established criteria (which Blueprint follows as a sister event):
- **Originality, Innovation, and Impact:** 33%
- **Technology:** 33%
- **Learning and Collaboration:** 33%

**Key insight:** Blueprint places significant weight on **learning and collaboration** -- this is unusual for hackathons and means judges want to see that you LEARNED something and worked well together, not just that you built the flashiest product.

### Prizes

According to available information, **Blueprint does not offer formal awards or major cash prizes** in the way that HackMIT (the college version) does. The emphasis is on learning, building, and the experience itself. However, there are track-based recognitions:

**Blueprint 2025 Winners (for reference):**
- **Beginner Track:** 1st Place: Nothole (a jumping robot); 2nd: Do No Harm; 3rd: SmartRec
- **General Track:** 3rd: AuraFlux (3D geomagnetic storm simulator); 2nd: Fuse (circuit analysis tool)

Source: [MIT Admissions Live Blog -- Blueprint 2025](https://mitadmissions.org/blogs/entry/live-blog-blueprint-2025/)

### What Judges Actually Look For (Based on Past Winners)

Past winners share common traits:
1. **Clear problem-solving**: Projects that solve a real, identifiable problem
2. **Technical impressiveness relative to skill level**: Judges adjust expectations based on track
3. **Functional demos**: Working products, not just slides
4. **Creative/unexpected approaches**: AuraFlux won with a 3D simulation -- unexpected and visually impressive
5. **Story and presentation quality**: The demo presentation is critical

---

## PART 2: HACKATHON WINNING STRATEGIES

### How to Structure a ~9-Hour Build

Blueprint's hackathon portion gives approximately 9 hours of build time. Here is a recommended hour-by-hour schedule:

| Time Block | Hours | Activity |
|---|---|---|
| Hour 0-1 | 60 min | **Finalize plan, assign roles, set up environment.** Do NOT start coding without a clear plan. Confirm MVP features (3 max). |
| Hour 1-2 | 60 min | **Set up project skeleton.** Boilerplate, repo, basic routing, database connection. All team members coding in parallel on independent tasks. |
| Hour 2-5 | 180 min | **Core development sprint.** Build the 2-3 core features. Brief check-in at hour 3.5. Focus on WORKING functionality, not polish. |
| Hour 5-6 | 60 min | **Integration checkpoint.** Merge all work. Identify what works and what does not. Cut any feature that is not functional. |
| Hour 6-7.5 | 90 min | **Polish and demo prep.** Fix bugs, add visual polish to the demo flow, prepare sample data that tells a compelling story. |
| Hour 7.5-8.5 | 60 min | **Presentation creation.** Build slides (5-7 max). Write and rehearse pitch script. Record demo video if required. |
| Hour 8.5-9 | 30 min | **Rehearse, rehearse, rehearse.** Run through the full presentation at least 2 times. Test the live demo path. Have a backup plan if the demo crashes. |

### What to Have Ready BEFORE the Hackathon

This is your single biggest competitive advantage. Arrive with:

1. **A one-page project brief:** Problem statement, proposed solution, target user, 3 core MVP features, tech stack decision
2. **Design mockups/wireframes:** Use Figma or paper sketches. Know what every screen looks like before you code.
3. **Boilerplate code and environment:**
   - Repository created with starter code (React/Next.js or similar)
   - Authentication flow set up (if needed)
   - Database schema designed (tables, relationships)
   - API keys obtained for any third-party services (translation APIs, OpenAI, etc.)
   - Local dev environment fully tested on all team members' machines
4. **Pitch deck skeleton:** Problem slide, solution slide, demo slide, impact slide, team slide -- all templated and ready to fill in
5. **Sample data:** Pre-prepared content that demonstrates the app's value (translated resources, milestone checklists, etc.)

**Boilerplate Resources:**
- [Hackathon Starter (Node.js)](https://github.com/sahat/hackathon-starter)
- [Hackathon Boilerplate Collection](https://github.com/kaiiyer/hackathon)
- [Hackathon Quickstart Templates](https://github.com/Dalimil/Hackathon-Quickstart)

### Team Role Assignments (4-Person Team)

| Role | Responsibilities |
|---|---|
| **Backend Developer** | API endpoints, database, server logic, third-party integrations |
| **Frontend Developer** | UI implementation, responsive design, connecting to APIs |
| **Full-Stack / Content** | Bridges frontend and backend, prepares demo content, handles translation content, data entry |
| **Presenter / PM** | Project management, timeline enforcement, pitch preparation, slide deck, practices presentation from Hour 1 |

**Critical:** The Presenter/PM should start thinking about the pitch and story from the very beginning, not the last hour.

### Common Hackathon Mistakes to Avoid

1. **Over-scoping:** Trying to build too many features. Pick 2-3 core features and execute them well.
2. **Spending too long on setup:** Extended planning and environment setup burns precious time. This should all be done beforehand.
3. **Ignoring the presentation:** "A great project with a terrible presentation often loses to a decent project with a great presentation." -- [Devpost](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
4. **Perfectionism on non-essentials:** Do not spend hours on a logo, pixel-perfect CSS, or login screens. Hard-code user accounts, fake data where needed.
5. **Poor time management on submission:** Recording demo videos, writing descriptions, and packaging takes longer than expected. Start 1.5 hours before deadline.
6. **Not using mentors:** Blueprint provides MIT student mentors. Ask for help early and often.
7. **Building features that don't demo well:** Every feature should be visually demonstrable. Backend-only work that can't be shown is wasted effort for judging purposes.

Sources: [Devpost Demo Tips](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo), [Innovation Mode Hackathon Guide](https://theinnovationmode.com/the-innovation-blog/survival-guide-for-hackathon-participants), [HackathonParty Presentation Guide](https://www.hackathonparty.com/blog/the-essential-elements-of-a-winning-hackathon-presentation)

---

## PART 3: PITCH AND PRESENTATION STRATEGY

### Recommended Slide Deck Structure (5-7 Slides, 3-5 Minutes)

**Slide 1: The Hook (15 seconds)**
> "Imagine you are a mother who just arrived in the US from Guatemala. Your 3-year-old isn't speaking yet. You don't know the word 'autism' in English. You don't know who to call. You wait 3 years for a diagnosis that should have taken 6 months."

**Slide 2: The Problem (45 seconds)**
- 1 in 31 children in the US has autism (CDC, 2025)
- Latinx children are 65% less likely to receive an autism diagnosis than White children
- Immigrant parents wait an average of 3+ years between first concerns and diagnosis
- Only 10% of pediatricians offer Spanish-language autism screening
- 26% of all US children live with at least one immigrant parent

**Slide 3: Our Solution (60 seconds)**
- App name, one-line description
- Screenshots of the working app
- Key features (3 max, visually shown)

**Slide 4: Live Demo (60-90 seconds)**
- Walk through the core user journey
- Show multilingual capabilities
- Demonstrate the most emotionally impactful feature

**Slide 5: Impact and Market (30 seconds)**
- 17.9 million children in immigrant families in the US
- $30.5 billion assistive technology market
- Lifetime cost reduction of 2/3 with early intervention
- Potential partnerships and next steps

**Slide 6: Team (10 seconds)**
- Quick team intro, one line each

### Storytelling Framework: "The Bridge"

Frame your app as a **bridge** between two worlds:
- The world where immigrant parents are **lost, isolated, and stigmatized** when their child shows signs of autism
- The world where they have **information, resources, and community in their own language**

Open with a real (anonymized) story. Research from multiple peer-reviewed studies provides these narrative elements:

> "As immigrants, we are all lost in our autism journey" -- Title of a 2025 ScienceDirect study on immigrant fathers of autistic children

> Korean immigrant parents reported keeping their child's diagnosis SECRET from grandparents due to cultural stigma around disability

> Chinese immigrant families "have more difficulty accessing systems than most immigrant families" -- even after diagnosis, language continues to be a barrier

> Somali families in Minnesota face cultural stigma, limited awareness, and barriers to accessing appropriate services

Sources: [PMC - Korean Immigrant Families](https://pmc.ncbi.nlm.nih.gov/articles/PMC8814949/), [ScienceDirect - Immigrant Fathers](https://www.sciencedirect.com/science/article/abs/pii/S3050656525000604), [PMC - Chinese Immigrant Population](https://pmc.ncbi.nlm.nih.gov/articles/PMC6499700/), [PMC - Cultural Beliefs](https://pmc.ncbi.nlm.nih.gov/articles/PMC7008392/)

### Key Statistics for the Pitch

**Autism Prevalence (CDC 2025 Report):**
- 1 in 31 (3.2%) children aged 8 have ASD -- up from 1 in 36 in 2023
- Boys are 3.4x more likely to be diagnosed than girls
- Black (3.66%), Asian (3.82%), and Hispanic (3.30%) children have HIGHER prevalence than White children (2.77%)
- An estimated 5.4 million US adults (2.2%) are on the autism spectrum

Source: [CDC Data and Statistics on ASD](https://www.cdc.gov/autism/data-research/index.html), [Autism Parenting Magazine - CDC Report](https://www.autismparentingmagazine.com/latest-cdc-autism-report/)

**Immigrant Families:**
- 53.3 million foreign-born residents in the US (15.8% of population) as of January 2025
- 17.9 million children live with at least one immigrant parent (26% of all US children)
- 27.6 million individuals have limited English proficiency
- Those with LEP are 23% more likely to be uninsured vs. 10% for English-proficient

Source: [Migration Policy Institute](https://www.migrationpolicy.org/article/frequently-requested-statistics-immigrants-and-immigration-united-states), [Pew Research](https://www.pewresearch.org/short-reads/2025/08/21/key-findings-about-us-immigrants/)

**The Intersection -- Diagnosis Disparities:**
- 40% of Latino children with autism encounter delays in diagnosis
- Latinx children are 65% less likely to receive a diagnosis than White children
- African-American children are 5.1x more likely to be misdiagnosed with behavior disorders before correct ASD diagnosis
- Latinx children require an average of 8 doctor visits before receiving an ASD diagnosis
- Less than 1/3 of pediatricians offer autism screening in Spanish
- Only 10% offer BOTH Spanish-language autism AND developmental screening

Source: [PMC - Hispanic/Latinx Barriers](https://pmc.ncbi.nlm.nih.gov/articles/PMC9584143/), [JAMA - Racial Ethnic Differences](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2797991), [OAR - Racial Disparities](https://researchautism.org/oaracle-newsletter/racial-disparities-in-autism-diagnosis/)

**Economic Impact:**
- Total US ASD costs: $223 billion (2020), projected $589 billion by 2030
- Lifetime cost per person with ASD + intellectual disability: $2.4 million
- Lifetime cost per person with ASD without intellectual disability: $1.4 million
- **Early diagnosis and intervention can reduce lifetime costs by TWO-THIRDS**
- Delays >6 months from diagnosis to treatment significantly increase direct economic costs

Source: [PMC - Diagnosis Delay Costs](https://pmc.ncbi.nlm.nih.gov/articles/PMC10387939/), [PMC - Economic Burden](https://pmc.ncbi.nlm.nih.gov/articles/PMC8662780/), [Hope For Three](https://hopeforthree.org/autism-is-expensive/)

### Demo Video Best Practices

If you need to submit a demo video (or want a backup for live demo failures):
- Keep it under **3 minutes**
- Use **OBS Studio** for screen recording with audio narration
- Structure: Hook/problem (15 sec) > Solution overview (15 sec) > Live walkthrough of core features (2 min) > Impact statement (15 sec)
- Write a script and rehearse before recording
- Do multiple takes and edit out mistakes
- Show REAL functionality, not mockups

Source: [Devpost - 6 Tips for Demo Videos](https://info.devpost.com/blog/6-tips-for-making-a-hackathon-demo-video), [Devpost - Successful Hackathon Demo](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)

---

## PART 4: THE SOCIAL IMPACT ANGLE -- DEEP DATA

### Cultural Barriers Faced by Immigrant Autism Parents

Research documents these specific barriers across multiple immigrant communities:

1. **Language:** Screening tools not available in parents' native language; providers rarely offer non-English screening; parents cannot navigate insurance/service systems
2. **Cultural stigma:** In Korean, Chinese, Somali, South Asian, Iranian, and Afghan communities, disability carries deep stigma. Parents hide diagnoses from extended family.
3. **Different understanding of "normal" development:** Cultural beliefs about when children should speak, make eye contact, or socialize vary widely. What an American pediatrician flags as a concern, a parent from another culture may see as normal.
4. **Fear of systems:** Undocumented or recently arrived parents fear interaction with government systems, healthcare, and schools
5. **Isolation:** Unlike US-born parents who can access English-language support groups, Facebook communities, and resources, immigrant parents are cut off from the entire support ecosystem
6. **Service navigation:** Even after diagnosis, families cannot navigate ABA therapy, IEPs, speech therapy, occupational therapy systems

Sources: [PMC - Cultural Beliefs](https://pmc.ncbi.nlm.nih.gov/articles/PMC7008392/), [ScienceDirect - Barriers Program](https://www.sciencedirect.com/science/article/abs/pii/S1876201818300285), [PMC - South Asian Families Canada](https://pmc.ncbi.nlm.nih.gov/articles/PMC10970361/), [UMN - Somali Immigrants Minnesota](https://conservancy.umn.edu/items/82b7f403-efab-4d29-8ccf-a0f8972c4c89)

### Organizations That Could Support/Fund This App Post-Hackathon

**Autism-Focused:**
| Organization | What They Offer |
|---|---|
| NEXT for AUTISM | Grants for autism initiatives; funded 380+ projects at 172 organizations |
| Autism Speaks | Family grants and resource navigation |
| Flutie Foundation | Autism Community Impact Grants; $820K+ granted for technology programs |
| Autism Care Today (ACT) | Family support grants |
| Organization for Autism Research (OAR) | Research and resource funding |

**Technology Accelerators:**
| Program | Details |
|---|---|
| **Autism Tech Accelerator by Multiple** | 10-week virtual program, FREE, no equity taken. Next cohort: March 31 -- June 4, 2026. Accepts 8-10 startups. **APPLICATION DEADLINE WAS FEB 27, 2026** -- check for future cohorts |
| **Frist Center for Autism and Innovation (Vanderbilt)** | Partners with startups championing autism and neurodiversity |
| **Uplift Accelerator** | Focused on autism technology startups |

**Immigrant Health:**
| Organization | What They Offer |
|---|---|
| Mother Cabrini Health Foundation | Grants for immigrant healthcare, cultural/linguistic care |
| Con Alma Health Foundation | Multi-year grants up to $150K for systemic change |
| NIH Immigrant Health Initiative | Research grants for immigrant health disparities |
| Techfugees | Supports responsible technology for displaced persons |

**General Social Impact:**
| Program | Details |
|---|---|
| Echoing Green | Fellowships for social entrepreneurs ($80K seed funding) |
| Y Combinator (nonprofit track) | Accepts nonprofit startups |
| Fast Forward | Tech nonprofit accelerator |
| Ashoka | Fellowships for social entrepreneurs |

Sources: [NEXT for AUTISM Grants](https://nextforautism.org/our-work/grants-and-guidelines/), [Instrumentl - Autism Grants](https://www.instrumentl.com/browse-grants/grants-for-autism-programs), [Opportunities for Youth - Autism Tech Accelerator](https://opportunitiesforyouth.org/2026/02/13/autism-tech-accelerator-2026-10-week-virtual-startup-program-for-neurodiversity-innovation-fully-free-no-equity/), [Vanderbilt Frist Center](https://www.vanderbilt.edu/autismandinnovation/start-up-support/), [Failory - Social Impact Accelerators](https://www.failory.com/startups/social-impact-accelerators-incubators)

### Grant Funding Landscape

**SBIR/STTR (Critical Update):** The legislative authority for SBIR/STTR programs **expired October 1, 2025**. NIH is NOT accepting new applications as of early 2026. Reauthorization is expected through the 2026 National Defense Authorization Act. Monitor this closely for when it reopens -- these are the primary federal grants for autism technology.

Source: [NIH Notice NOT-OD-26-006](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-26-006.html)

**Private foundations remain the best near-term funding path** -- see the organizations table above.

---

## PART 5: SIMILAR PROJECTS AND COMPETITIVE LANDSCAPE

### Existing Autism Apps (Learn From Them)

| App | What It Does | Languages | Lesson for Your Team |
|---|---|---|---|
| MITA (Mental Imagery Therapy for Autism) | Early intervention language therapy | 12 languages including Spanish, Arabic, Chinese, Farsi | Proves multilingual autism apps work and are needed |
| LetMeTalk | AAC communication using images/symbols | 9,000+ images, multiple languages | Focus on visual communication |
| Birdhouse for Autism | Daily tracking for caregivers | English primarily | Tracking/logging features are valued by parents |
| Autism360 | Comprehensive autism support | English | Market exists for all-in-one platforms |

**Key Gap:** None of these apps specifically target **immigrant parents** as a primary user. None combine multilingual support with **culturally-sensitive navigation of the US autism care system**. This is your unique value proposition.

Sources: [Applied Behavior Analysis Programs - 10 Apps](https://www.appliedbehavioranalysisprograms.com/lists/5-apps-for-parents-of-children-with-autism/), [Autism360 - Top Apps](https://www.autism360.com/top-apps-for-autism/), [Colorin Colorado - Multilingual Resources](https://www.colorincolorado.org/autism-multilingual-resources-families-and-educators)

### Past Hackathon Projects in Adjacent Spaces

**Autism Hackathons:**
- AT&T + Autism Speaks hackathon: 200+ app ideas, $20K in prizes. Winners included anxiety-reduction voice message apps and family photo recognition apps.
- Financial Services Hackathon for Autism: 200+ participants from Morgan Stanley, UBS, JPMorgan, Microsoft
- Harvard Hacking Autism: Design challenge on Devpost

**Immigrant Hackathons:**
- I Stand With Immigrants Hackathon: Produced "Stat EZ" (visa tracking), "Immigration Stories" (storytelling platform), "Welcome" (geotag learning app)
- Immigrant Heritage Hackathon (NYC): 120+ people, 24 hours of building
- Microsoft Hack for Good: "Family Finder App" for refugees locating loved ones

**What made these successful:** Clear user personas, emotional storytelling, functional prototypes, partnerships with real organizations

Sources: [Disabled World - Autism Hackathon](https://www.disabled-world.com/assistivedevices/apps/autism-hackathon.php), [Harvard Hacking Autism Devpost](https://harvard-hacking-autism.devpost.com/), [I Stand With Immigrants Hackathon Devpost](https://ihmhackathon.devpost.com/project-gallery), [FSI Hack4Autism](https://fsi-hack4autism.github.io/)

---

## PART 6: PRE-HACKATHON PREPARATION CHECKLIST

### Week Before the Hackathon

**Technical Setup:**
- [ ] Create GitHub repository with chosen boilerplate (React/Next.js recommended for web; React Native for mobile)
- [ ] Set up project structure: `/src`, `/components`, `/pages`, `/api`, `/public`
- [ ] Install and test all dependencies locally on every team member's machine
- [ ] Obtain API keys: Google Translate API (or LibreTranslate for free), OpenAI API (if using AI features), any map APIs
- [ ] Design database schema (suggested tables: Users, Children, Milestones, Resources, Providers, Languages)
- [ ] Set up deployment pipeline (Vercel for Next.js is free and fast)
- [ ] Create a shared Figma file with all screen mockups

**Content Preparation:**
- [ ] Research and compile a list of autism developmental milestones by age (source: CDC, AAP)
- [ ] Compile a list of state-by-state early intervention resources
- [ ] Prepare translated content for at least 3 languages (Spanish, Mandarin, Arabic recommended based on US immigrant demographics)
- [ ] Write the "About Autism" explainer content in simple, culturally sensitive language
- [ ] Create a glossary of autism-related terms with translations

**Design:**
- [ ] Complete wireframes for ALL screens in Figma
- [ ] Choose a color palette and typography (use calming, trustworthy colors -- blues, greens)
- [ ] Design the logo (keep it simple -- spend 15 minutes max)
- [ ] Prepare any icons or illustrations needed
- [ ] Design the demo flow -- which screens will you show in what order?

**Presentation:**
- [ ] Draft the pitch deck skeleton (5-7 slides)
- [ ] Memorize the opening hook
- [ ] Research the judges (if announced) and tailor messaging
- [ ] Prepare a 1-minute elevator pitch version

**Logistics:**
- [ ] Set up team communication: Discord or Slack channel
- [ ] Assign roles clearly (see table above)
- [ ] Bring: laptops, chargers, extension cords, headphones, water bottles, snacks
- [ ] Test your internet hotspot as a backup

### Suggested Tech Stack

| Component | Recommendation | Why |
|---|---|---|
| Frontend | React + Next.js OR React Native (Expo) | Fast development, huge component library |
| Styling | Tailwind CSS or Material UI | Rapid prototyping |
| Backend | Next.js API Routes or Firebase | Serverless = no server management |
| Database | Firebase Firestore or Supabase | Real-time, easy setup, free tier |
| Translation | Google Cloud Translation API or LibreTranslate | Reliable, many languages |
| AI Features (optional) | OpenAI API | Chatbot for parent questions |
| Deployment | Vercel | One-click deploy from GitHub |
| Auth | Firebase Auth or NextAuth.js | Quick setup |

### Suggested Database Schema

```
Users
  - id, name, email, language_preference, country_of_origin, created_at

Children
  - id, user_id, name, date_of_birth, diagnosis_status, created_at

Milestones
  - id, child_id, milestone_type, age_expected, date_observed, notes

Resources
  - id, title, description, category, language, url, state

Providers
  - id, name, specialty, languages_spoken, location, phone, accepts_medicaid

Translations
  - id, resource_id, language_code, translated_title, translated_description
```

---

## PART 7: HOW TO MAKE THIS APP STAND OUT

### Your Unique Value Proposition

**No existing app combines these three elements:**
1. Autism early detection/intervention support
2. Multilingual, culturally-sensitive content
3. Navigation of the US healthcare/education system for non-native speakers

This is an underserved intersection of **17.9 million children in immigrant families** and a **1-in-31 autism prevalence rate**. Simple math: roughly **577,000+ children** in immigrant families may be on the autism spectrum, and their parents face compounded barriers to getting help.

### Core MVP Features (Pick 3 for the Hackathon)

1. **Multilingual Developmental Milestone Tracker:** Parents input their child's age and track milestones with culturally-adapted explanations in their language. Red flags trigger gentle, non-stigmatizing alerts with next steps.

2. **"What To Do Next" Navigator:** After a concern is identified, the app provides a step-by-step guide in the parent's language: who to call, what to say, what to bring, what their rights are, what services are free.

3. **Resource Finder:** Searchable database of local providers who speak the parent's language, accept Medicaid, and have experience with autism. Filterable by state/city.

4. **Cultural Bridge Content:** Explains autism in culturally sensitive ways that address common misconceptions (it is not caused by bad parenting, vaccines, evil spirits, etc.) and help parents explain the diagnosis to extended family.

5. **AI-Powered Q&A (stretch goal):** Chatbot that answers autism-related questions in the parent's language using a knowledge base of verified information.

### For the Judges: Why This Wins

Blueprint judges score on **Originality/Innovation/Impact (33%)**, **Technology (33%)**, and **Learning/Collaboration (33%)**.

**Originality/Innovation/Impact:** This addresses a well-documented but completely underserved population. You can cite 10+ peer-reviewed studies showing the problem exists. No competing app addresses this specific intersection.

**Technology:** Multilingual support, database-driven resource matching, potentially AI integration -- all demonstrate technical sophistication appropriate for the track level.

**Learning/Collaboration:** Frame what your team LEARNED during the hackathon workshops and how you collaborated. Blueprint values this heavily.

---

## PART 8: POST-HACKATHON VIABILITY

### Turning This Into a Real Product

**Immediate (Week 1-4 after hackathon):**
1. Document all judge and mentor feedback
2. Conduct 5-10 interviews with actual immigrant parents of autistic children (reach out through local organizations, churches, community centers)
3. Polish the MVP based on feedback
4. Set up a landing page with email capture

**Short-term (Month 1-3):**
1. Apply to the **Autism Tech Accelerator by Multiple** (next cohort after the current one)
2. Contact **NEXT for AUTISM**, **Flutie Foundation**, and **Autism Care Today** about grants
3. Partner with a local autism organization for pilot testing
4. Apply to **Echoing Green**, **Fast Forward**, or university social impact competitions
5. Submit to more hackathons: HackDavis (social good focus), Hack for Humanity, Impact Innovation Challenge

**Medium-term (Month 3-12):**
1. Seek partnerships with pediatric practices that serve immigrant populations
2. Apply for foundation grants (Mother Cabrini, Con Alma)
3. Monitor SBIR/STTR reauthorization -- apply immediately when it reopens
4. Build relationships with school districts that have high immigrant populations
5. Develop a sustainability model (grants + institutional partnerships, NOT user fees for this population)

**Long-term partnerships to pursue:**
- American Academy of Pediatrics (AAP) -- potential distribution channel
- State early intervention programs (Part C of IDEA)
- Federally Qualified Health Centers (FQHCs) serving immigrant communities
- University autism research centers

### Market Opportunity

- Global assistive technology market: **$30.5 billion** projected in 2026, growing at 7% CAGR
- AAC devices market specifically: **$1.41 billion** in 2026, growing at 8.5% CAGR to $2.94 billion by 2035
- Total US ASD costs projected at **$589 billion by 2030** -- solutions that reduce this have massive ROI potential
- If early intervention reduces lifetime costs by 2/3, and lifetime cost per person is $1.4-2.4 million, even helping 1,000 families access earlier intervention saves **$933 million to $1.6 billion** in lifetime costs

Sources: [Persistence Market Research - Assistive Tech](https://www.persistencemarketresearch.com/market-research/assistive-technology-market.asp), [Business Research Insights - AAC Market](https://www.businessresearchinsights.com/market-reports/augmentative-and-alternative-communication-aac-devices-market-121208)

---

## PART 9: QUICK-REFERENCE CHEAT SHEET

### The 30-Second Elevator Pitch

> "In the US, 1 in 31 children has autism, but immigrant parents wait YEARS longer for a diagnosis because of language barriers, cultural stigma, and a healthcare system that doesn't speak their language. Our app is the first to combine developmental milestone tracking, step-by-step care navigation, and a resource finder -- all in the parent's native language. We're bridging the gap between immigrant families and the autism support system they desperately need."

### 5 Statistics That Will Stop Judges in Their Tracks

1. **1 in 31** children in the US has autism (CDC, 2025)
2. **65% less likely** -- Latinx children's odds of getting an autism diagnosis vs. White children
3. **3+ years** -- average wait between first parental concern and diagnosis for minority children
4. **17.9 million** children in the US live with an immigrant parent
5. **2/3 reduction** in lifetime costs when early diagnosis and intervention occur

### 3 Sentences That Win Hackathons

- "This isn't a hypothetical problem -- there are peer-reviewed studies from Harvard, JAMA, and the CDC documenting exactly this gap."
- "We built this in 9 hours, but it's designed to be a real product -- and here's our path to getting it into the hands of the 577,000 families who need it."
- "Every month of delayed diagnosis costs families thousands of dollars and costs children critical developmental windows that cannot be recovered."

---

## ALL SOURCES

**MIT Blueprint:**
- [Blueprint 2026 Official Website](https://blueprint.hackmit.org/)
- [Blueprint Hacker Guide](https://guide.hackmit.org/)
- [Blueprint 2024 Archive](https://bparchive.hackmit.org/2024/)
- [MIT Admissions Live Blog - Blueprint 2025](https://mitadmissions.org/blogs/entry/live-blog-blueprint-2025/)
- [Veritas AI - Is Blueprint Worth It?](https://www.veritasai.com/veritasaiblog/hackmits-blueprint-is-it-worth-it)
- [Lumiere Education - 10 Tips to Win Blueprint](https://www.lumiere-education.com/post/hackmit-s-blueprint-2024-10-tips-to-help-you-win)
- [Future Forward Labs - Blueprint Overview](https://www.futureforward.app/blog/stem-competitions-blueprint-mit-high-school-hackathon/)

**Autism Statistics:**
- [CDC Data and Statistics on ASD](https://www.cdc.gov/autism/data-research/index.html)
- [CDC Community Report on Autism 2025 (PDF)](https://www.cdc.gov/autism/media/pdfs/2025/04/ADDM-Community-Report-SY2022.pdf)
- [Autism Parenting Magazine - CDC 2025 Report](https://www.autismparentingmagazine.com/latest-cdc-autism-report/)
- [South Denver Therapy - Autism Statistics 2026](https://www.southdenvertherapy.com/blog/autism-spectrum-statistics-2025)
- [Autism Research Institute - 2025 Prevalence](https://autism.org/prevalence2025/)

**Diagnosis Disparities:**
- [PMC - Hispanic/Latinx Barriers to Diagnosis](https://pmc.ncbi.nlm.nih.gov/articles/PMC9584143/)
- [PMC - Racial/Ethnic Disparities in Diagnosis](https://pmc.ncbi.nlm.nih.gov/articles/PMC8500365/)
- [JAMA - Racial and Ethnic Differences in Diagnosis](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2797991)
- [Scientific American - Autism in Immigrant Groups](https://www.scientificamerican.com/article/why-autism-seems-to-cluster-in-some-immigrant-groups/)
- [OAR - Racial Disparities in Diagnosis](https://researchautism.org/oaracle-newsletter/racial-disparities-in-autism-diagnosis/)

**Immigrant Families and Autism:**
- [PMC - Chinese Immigrant Population](https://pmc.ncbi.nlm.nih.gov/articles/PMC6499700/)
- [PMC - Korean Immigrant Families](https://pmc.ncbi.nlm.nih.gov/articles/PMC8814949/)
- [ScienceDirect - Immigrant Fathers](https://www.sciencedirect.com/science/article/abs/pii/S3050656525000604)
- [ScienceDirect - Barriers Program](https://www.sciencedirect.com/science/article/abs/pii/S1876201818300285)
- [PMC - Cultural Beliefs](https://pmc.ncbi.nlm.nih.gov/articles/PMC7008392/)
- [PMC - South Asian Families](https://pmc.ncbi.nlm.nih.gov/articles/PMC10970361/)
- [UMN - Somali Immigrants](https://conservancy.umn.edu/items/82b7f403-efab-4d29-8ccf-a0f8972c4c89)
- [Notre Dame - Barriers to Autism Diagnosis (PDF)](https://latinostudies.nd.edu/assets/561348/bautistanatalia_35187_3021576_natalia_bautista_latino_health_final_paper_1.pdf)

**Economic Impact:**
- [PMC - Diagnosis Delay and Healthcare Costs](https://pmc.ncbi.nlm.nih.gov/articles/PMC10387939/)
- [PMC - Time Interval Economic Burden](https://pmc.ncbi.nlm.nih.gov/articles/PMC8662780/)
- [Hope For Three - Autism Is Expensive](https://hopeforthree.org/autism-is-expensive/)
- [Cross River Therapy - Cost of Having a Child with Autism](https://www.crossrivertherapy.com/articles/cost-of-having-a-child-with-autism)

**Immigrant Statistics:**
- [Migration Policy Institute - Frequently Requested Statistics](https://www.migrationpolicy.org/article/frequently-requested-statistics-immigrants-and-immigration-united-states)
- [Pew Research - Key Findings on Immigrants](https://www.pewresearch.org/short-reads/2025/08/21/key-findings-about-us-immigrants/)
- [KFF - 2025 Survey of Immigrants](https://www.kff.org/immigrant-health/kff-new-york-times-2025-survey-of-immigrants-health-and-health-care-experiences-during-the-second-trump-administration/)

**Hackathon Strategy:**
- [Innovation Mode - How to Win a Hackathon](https://theinnovationmode.com/the-innovation-blog/survival-guide-for-hackathon-participants)
- [Devpost - How to Present a Successful Demo](https://info.devpost.com/blog/how-to-present-a-successful-hackathon-demo)
- [Devpost - 6 Tips for Demo Videos](https://info.devpost.com/blog/6-tips-for-making-a-hackathon-demo-video)
- [HackathonParty - Winning Presentation Elements](https://www.hackathonparty.com/blog/the-essential-elements-of-a-winning-hackathon-presentation)
- [Automateathon - Timeline Guide](https://automateathon.com/blog/events/hackathon-timeline-guide.html)
- [Bomberbot - Hackathon Checklist](https://www.bomberbot.com/hackathons/a-simple-checklist-to-help-you-win-and-have-fun-at-hackathons/)
- [GitHub - Hackathon Starter Boilerplate](https://github.com/sahat/hackathon-starter)

**Funding and Accelerators:**
- [NEXT for AUTISM Grants](https://nextforautism.org/our-work/grants-and-guidelines/)
- [Instrumentl - Autism Program Grants](https://www.instrumentl.com/browse-grants/grants-for-autism-programs)
- [Autism Tech Accelerator 2026](https://opportunitiesforyouth.org/2026/02/13/autism-tech-accelerator-2026-10-week-virtual-startup-program-for-neurodiversity-innovation-fully-free-no-equity/)
- [Vanderbilt Frist Center for Autism and Innovation](https://www.vanderbilt.edu/autismandinnovation/start-up-support/)
- [Flutie Foundation - Community Impact Grant](https://flutiefoundation.org/helping-communities/autism-community-impact-grant/)
- [Failory - Social Impact Accelerators](https://www.failory.com/startups/social-impact-accelerators-incubators)
- [Causeartist - Social Enterprise Accelerators](https://www.causeartist.com/social-enterprise-accelerators-fellowships/)
- [NIH - Immigrant Health Initiative](https://www.nimhd.nih.gov/programs/extramural/investigator-initiated-research/immigrant-health-initiative.html)

**Market Data:**
- [Persistence Market Research - Assistive Technology](https://www.persistencemarketresearch.com/market-research/assistive-technology-market.asp)
- [Business Research Insights - AAC Devices Market](https://www.businessresearchinsights.com/market-reports/augmentative-and-alternative-communication-aac-devices-market-121208)

**Related Hackathons:**
- [Harvard Hacking Autism - Devpost](https://harvard-hacking-autism.devpost.com/)
- [I Stand With Immigrants Hackathon - Devpost](https://ihmhackathon.devpost.com/project-gallery)
- [FSI Hack4Autism](https://fsi-hack4autism.github.io/)
- [Impact Innovation Challenge - Devpost](https://impact-innovation-challenge.devpost.com/)

---

**Important Note on Timing:** Blueprint 2026 is scheduled for **today, February 28, 2026**, and continues through March 1. If the team has not yet attended the learnathon portion, they should prioritize attending workshops and using mentors. The research above should serve as a comprehensive reference during and after the event. Good luck to the team.