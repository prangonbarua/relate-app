# 심층 연구 보고서: 자폐아동 이민자 부모를 위한 다국어 커뮤니티 포럼
|||9월|||
## 목차
|||9월|||
1. [기존 자폐증 커뮤니티 분석](#1-기존-자폐증-커뮤니티)
2. [콘텐츠 조정 및 안전](#2-콘텐츠 조정--안전)
3. [커뮤니티 맥락에서의 번역](#3-커뮤니티 내 번역-컨텍스트)
4. [커뮤니티 기능 연구](#4-커뮤니티-기능-연구)
5. [기술적 구현](#5-기술적 구현)
6. [커뮤니티 구축 전략](#6-커뮤니티 구축 전략)
7. [법적 고려 사항](#7-법적 고려 사항)
8. [성공적인 다국어 플랫폼 사례 연구](#8-성공한-다국어-플랫폼-사례 연구)
|||9월|||
---
|||9월|||
## 1. 기존 자폐증 커뮤니티
|||9월|||
### 1.1 레딧 커뮤니티
|||9월|||
**r/자폐증** (~477K 회원)
- 수용과 신경다양성에 뿌리를 두고 독특한 강점과 도전을 축하하는 문화
- 가장 두드러진 토론 주제: 사회적 관계의 어려움, 자극적인 행동, 감각 민감성, 진단 관리, 개입 옵션 탐색, 일상 생활 대처
- 존중하는 대화를 장려하여 의견 차이를 처리합니다. 자폐증을 "올바른" 방식으로 나타내는 사람은 없습니다.
- 장점: 매일 수백 개의 게시물이 있는 크고 활동적인 커뮤니티
- [출처: NeuroLaunch](https://neurolaunch.com/r-autism/) | [출처: 거미서치](https://gummysearch.com/r/autism/)
|||9월|||
**r/autismparenting**(r/Autism_Parenting이라고도 함)
- 자폐 아동을 위한 도전과 지원을 탐색하는 데 중점을 둡니다.
- 공통 주제: 정서적/사회적/교육적 어려움, 아동의 필요 옹호, 자폐증 소진, 약물 치료 경험, 치료 옵션
- 경험과 전략 공유를 통한 비공식 동료 지원 기능
- [출처: Wiley Autism Research](https://onlinelibrary.wiley.com/doi/10.1002/aur.70066)

## Table of Contents

1. [Existing Autism Communities Analysis](#1-existing-autism-communities)
2. [Content Moderation & Safety](#2-content-moderation--safety)
3. [Translation in Community Contexts](#3-translation-in-community-contexts)
4. [Community Features Research](#4-community-features-research)
5. [Technical Implementation](#5-technical-implementation)
6. [Community Building Strategies](#6-community-building-strategies)
7. [Legal Considerations](#7-legal-considerations)
8. [Successful Multilingual Platform Case Studies](#8-successful-multilingual-platform-case-studies)

---

## 1. Existing Autism Communities

### 1.1 Reddit Communities

**r/autism** (~477K members)
- Culture rooted in acceptance and neurodiversity, celebrating unique strengths and challenges
- Most prominent discussion topics: challenges in social relationships, stimming behaviors, sensory sensitivities, managing diagnosis, navigating intervention options, coping with daily life
- Handles disagreements by encouraging respectful dialogue; no one "right" way to be autistic
- Strength: large, active community with hundreds of daily posts
- [Source: NeuroLaunch](https://neurolaunch.com/r-autism/) | [Source: GummySearch](https://gummysearch.com/r/autism/)

**r/autismparenting** (also known as r/Autism_Parenting)
- Focus on navigating challenges and support for children with autism
- Common topics: emotional/social/educational challenges, advocating for children's needs, autistic burnout, medication experiences, therapy options
- Functions as informal peer support with experience and strategy sharing
- [Source: Wiley Autism Research](https://onlinelibrary.wiley.com/doi/10.1002/aur.70066)

**r/AutisticPride** (최대 55K 회원)
- For autistics who prefer the social model of disability
- Focuses on autism acceptance and pride, rejecting the medical model framing autism as disease
- [출처: SubredditStats](https://subredditstats.com/r/AutisticPride)
|||9월|||
**r/aspergers** (~150K+ 회원)
- Questions about social situations, rants about sensory overload, celebrations of personal victories, deep dives into special interests
- 회원들은 일반적으로 "Asperger's"라는 용어를 선호합니다.
- [출처: NeuroLaunch](https://neurolaunch.com/r-aspergers/)
|||9월|||
**Related subreddits**: r/AutisticAdults, r/AutisticCreatives, r/AsperGirls, r/Autism_Acceptance, r/Autism_Translated
|||9월|||
**Non-English subreddits**: Research is limited to English-language discussions. Reddit's machine translation feature (rolled out to 35+ countries) enables multilingual discussions in Brazil, Spain, and elsewhere. However, non-English autism-specific subreddits remain small or nonexistent -- this represents a gap your app can fill.
- [Source: PPC Land on Reddit translation](https://ppc.land/reddit-expands-machine-translation-to-35-countries-boosting-global-access/)
|||9월|||
**What makes these communities successful or problematic?**
- Successful: peer validation, normalizing experiences, informal advice sharing, anonymity reducing stigma
- 문제가 있음: 용어와 철학적 불일치(의료 모델 대 신경다양성)로 커뮤니티가 분열되었습니다. English-only discussions exclude immigrant families; potential for misinformation without expert verification
|||9월|||
---
|||9월|||
### 1.2 페이스북 그룹
|||9월|||
**주요 그룹**(Facebook의 500개 자폐 그룹에 대한 콘텐츠 분석에서 따옴):
- 영어권 사용자 총 905,655명
- 60.4% created for support, 16.4% for social companionship, 15.8% for advocacy
- 대상 부모 및 가족이 57.4%
- [출처: ScienceDirect](https://www.sciencedirect.com/science/article/pii/S1750946719300182)

**r/aspergers** (~150K+ members)
- Questions about social situations, rants about sensory overload, celebrations of personal victories, deep dives into special interests
- Members generally prefer the "Asperger's" terminology
- [Source: NeuroLaunch](https://neurolaunch.com/r-aspergers/)

**Related subreddits**: r/AutisticAdults, r/AutisticCreatives, r/AsperGirls, r/Autism_Acceptance, r/Autism_Translated

**Non-English subreddits**: Research is limited to English-language discussions. Reddit's machine translation feature (rolled out to 35+ countries) enables multilingual discussions in Brazil, Spain, and elsewhere. However, non-English autism-specific subreddits remain small or nonexistent -- this represents a gap your app can fill.
- [Source: PPC Land on Reddit translation](https://ppc.land/reddit-expands-machine-translation-to-35-countries-boosting-global-access/)

**What makes these communities successful or problematic?**
- Successful: peer validation, normalizing experiences, informal advice sharing, anonymity reducing stigma
- Problematic: communities split over terminology and philosophical disagreements (medical model vs. neurodiversity); English-only discussions exclude immigrant families; potential for misinformation without expert verification

---

### 1.2 Facebook Groups

**Major groups** (from a content analysis of 500 autism groups on Facebook):
- Combined membership of 905,655 English-speaking users
- 60.4% created for support, 16.4% for social companionship, 15.8% for advocacy
- 57.4% target parents and families
- [Source: ScienceDirect](https://www.sciencedirect.com/science/article/pii/S1750946719300182)

**주요 영어 그룹**:
- "Autism Moms Unite" -- 전 세계적으로 10,000명 이상의 회원
- "말이 없는 아이의 자폐증 엄마" -- ~2,000명 회원
- "시애틀의 Autism Moms of Seattle" -- 회원 1,847명, 주당 최대 300개의 게시물
- [출처: 시애틀 아동 자폐증 블로그](https://theautismblog.seattlechildrens.org/autism-moms-how-a-facebook-group-helps-a-community-find-strength/)
|||9월|||
**스페인어 Facebook 그룹**:
- "Capacidades Diferentes" -- 가족 행사 그룹
- "Conexiones Excepcionales -- Ayuda Necesidades Especiales, Autismo, T21 y mas"
- "Padres Excepcionales, 포 라 인클루전스"
- "Angeles con Futuro" -- 캘리포니아주 샌버나디노/리버사이드 카운티
- Grupo Salto - 자폐 아동이 있는 가족을 지원하는 비영리 단체
- 샌디에이고 자폐증 협회의 "Grupo de Apoyo en Espanol"
- [출처: Autism Society Inland Empire](https://ieautism.org/grupos-de-habla-hispana/) | [출처: 텍사스 자폐증 협회](https://www.texasautismsociety.org/online-groups/)
|||9월|||
**아랍어 그룹**:
- Facebook, Twitter, WhatsApp 그룹을 통해 아랍 주 양육자와 연락
- LightHouse Arabia는 자폐 아동(5~18세)의 부모를 위한 온라인 지원 그룹을 제공합니다.
- ABA를 위한 Autism Learning Institute("ALI for ABA")와 레바논의 Autism Awareness Association(AAA)은 가족을 아랍 소셜 미디어 지원 그룹에 연결합니다.
- [출처:PMC리서치](https://pmc.ncbi.nlm.nih.gov/articles/PMC9405880/) | [출처: 자폐증은 아랍어 자원을 말한다](https://www.autismspeaks.org/arabic-resources)
|||9월|||
**조정 패턴**:
- 긍정적인 톤을 유지하는 데 중요한 중재자
- 유해한 언어나 잘못된 정보에 대한 엄격한 규칙(예: "Autism Allies" 그룹)
- 회원은 위반 사항을 신고하고 중재자는 즉시 조치를 취합니다.
- 과제: 2,000명 이상의 회원이 여정의 다양한 단계에 있을 때 감정이 고조되는 상태
- [출처: FasterCapital](https://fastercapital.com/content/Autism-Social-Media--ASM--Navigating-Social-Media-for-Parents-of-Autistic-Children.html)
|||9월|||
---
|||9월|||
### 1.3 기타 온라인 커뮤니티
|||9월|||
**Wrong Planet** (2004년 설립)
- Dan Grover와 Alex Plank가 설립함
- 채팅방, 포럼, 일상 이슈 기사 포함
- 2025년 현재도 활동 중
- 자폐증, 아스퍼거 증후군 및 기타 신경 질환에 대한 선도적인 포럼 커뮤니티
- [출처: 위키피디아](https://en.wikipedia.org/wiki/Wrong_Planet) | [출처:wrongplanet.net](https://wrongplanet.net/)
|||9월|||
**MyAutismTeam** (161,000명 이상의 회원)
- 부모님을 위한 Facebook과 Yelp 스타일의 소셜 네트워크가 만나다
- 기능: 상태 업데이트, 자녀 프로필, 제공자 리뷰(30,000개 이상의 제공자), Q&A 섹션, 팀 기반 그룹
- "오늘 하루는 어때?" 신속한 참여 유도
- 사용자는 레스토랑, 상점, "자폐증 친화적" 조직을 포함한 지역 제공업체를 검토할 수 있습니다.
- 앱 디자인을 연구하는 데 중요한 모델
- [출처: MyAutismTeam](https://www.myautismteam.com/about) | [출처: 워싱턴 포스트](https://www.washingtonpost.com/blogs/on-parenting/post/myautismteamcom-new-social-networking-site-for-parents-of-autistic-kids/2011/12/09/gIQA9HlxrO_blog.html)

**Spanish-language Facebook groups**:
- "Capacidades Diferentes" -- family events group
- "Conexiones Excepcionales -- Ayuda Necesidades Especiales, Autismo, T21 y mas"
- "Padres Excepcionales, por la Inclusion"
- "Angeles con Futuro" -- San Bernardino/Riverside counties, California
- Grupo Salto -- nonprofit providing support for families with autistic children
- Autism Society San Diego's "Grupo de Apoyo en Espanol"
- [Source: Autism Society Inland Empire](https://ieautism.org/grupos-de-habla-hispana/) | [Source: Autism Society of Texas](https://www.texasautismsociety.org/online-groups/)

**Arabic-language groups**:
- Arab primary caregivers contact through Facebook, Twitter, and WhatsApp groups
- LightHouse Arabia provides online support groups for parents of children with autism (ages 5-18)
- Autism Learning Institute for ABA ("ALI for ABA") and Autism Awareness Association (AAA) in Lebanon connect families to Arab social media support groups
- [Source: PMC Research](https://pmc.ncbi.nlm.nih.gov/articles/PMC9405880/) | [Source: Autism Speaks Arabic Resources](https://www.autismspeaks.org/arabic-resources)

**Moderation patterns**:
- Moderators crucial for maintaining positive tone
- Strict rules against harmful language or misinformation (e.g., "Autism Allies" group)
- Members report violations, moderators address promptly
- Challenge: emotional heightened states when 2,000+ members at different stages of their journey
- [Source: FasterCapital](https://fastercapital.com/content/Autism-Social-Media--ASM--Navigating-Social-Media-for-Parents-of-Autistic-Children.html)

---

### 1.3 Other Online Communities

**Wrong Planet** (established 2004)
- Founded by Dan Grover and Alex Plank
- Includes chatroom, forum, and articles on daily issues
- Still active as of 2025
- Leading forum community for Autism, Asperger's Syndrome, and other neurological conditions
- [Source: Wikipedia](https://en.wikipedia.org/wiki/Wrong_Planet) | [Source: wrongplanet.net](https://wrongplanet.net/)

**MyAutismTeam** (161,000+ members)
- Facebook-meets-Yelp style social network for parents
- Features: status updates, child profiles, provider reviews (30,000+ providers), Q&A section, team-based groups
- "How is your day?" prompt drives engagement
- Users can review local providers including restaurants, stores, and "autism friendly" organizations
- Critical model to study for your app design
- [Source: MyAutismTeam](https://www.myautismteam.com/about) | [Source: Washington Post](https://www.washingtonpost.com/blogs/on-parenting/post/myautismteamcom-new-social-networking-site-for-parents-of-autistic-kids/2011/12/09/gIQA9HlxrO_blog.html)

**Discord 서버**:
- DISBOARD 및 Discord.me에서 여러 개의 활성 자폐증 서버가 발견되었습니다.
- "Stim City": 26개 특별 관심 채널, 영화의 밤, 중재팀, 환기 채널
- "자폐증 클럽": QotD가 있는 안전한 공간, 매일의 긍정성, 게임/영화의 밤, 환기 공간
- 기능: 자기 관리, 옹호, 고용, 관계를 위한 텍스트 및 음성 채널
- 자폐증 + ADHD 교차를 위한 "AuDHD 연결"
- [출처: DISBOARD](https://disboard.org/servers/tag/autism) | [출처: 밴쿠버 언어 치료](https://vancouverspeechtherapy.ca/autism-discord/)
|||9월|||
**WhatsApp 그룹**:
- 전세계 Autists에는 스페인어, 포르투갈어, 프랑스어, 독일어, 이탈리아어, 러시아어를 사용하는 그룹이 있습니다.
- Sumeet Dhawan 박사는 신경과 전문의와 매일 15~25분 Q&A를 진행하는 자폐증 부모 교육 WhatsApp 커뮤니티를 운영하고 있습니다.
- WACS(WhatsApp Autism Community Singapore) - 싱가포르 최대의 자폐증 관련 공공 WhatsApp 네트워크
- [출처: WorldwideAutists](https://worldwideautists.com/) | [출처: Dr. Sumeet](https://drsumeet.com/autism-parent-training-whatsapp-community/) | [출처: WhatsApp Autism Community Singapore](https://whatsapp.iautistic.com/)
|||9월|||
**WeChat 그룹(중국 커뮤니티)**:
- 중국어를 사용하는 자폐증 가족을 위한 중요한 플랫폼
- Charles B. Wang 지역 사회 건강 센터는 WeChat 계정 및 특별 지원 팀을 시작했습니다.
- 부모들은 WeChat을 통해 자폐증 문제에 대해 논의하려는 의지가 더 높습니다.
- 우려 사항: 대부분의 의사소통은 승인되지 않은 전문가(한약 치료사, 영양사)와 이루어지며 그 결과 "많은 잘못된 정보"가 발생합니다.
- CCABA와 같은 전문 조직은 공식 WeChat 플랫폼을 구축했습니다.
- 위챗 기반 부모-자녀 창의적 미술치료 프로그램 연구 결과 효과 입증
- [출처: USC 건강 저널리즘 센터](https://centerforhealthjournalism.org/our-work/insights/chat-app-offers-key-unlocking-stories-autism-chinese-families) | [출처:PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7879717/)
|||9월|||
**라인 그룹(한국어/일본어)**:
- 일본: '핫타츠 쇼가이'(발달 장애) 프레임워크를 중심으로 구성된 자폐증 지원
- 집단 화합("wa")과 비언어적 의사소통의 문화적 규범에 의해 형성된 자폐증 경험
- 한국: 한인 이민자 가족은 낙인(자폐증이 결혼 가능성을 위태롭게 하는 것으로 간주됨), 자책, 지역 사회 비난 등 특정 장벽에 직면해 있습니다.
- 한인 이민자를 위해 특별히 조정된 "부모의 행동" 프로그램
- [출처: 일본의 Sage Journals](https://journals.sagepub.com/doi/full/10.1177/13623613251355303) | [출처: 한국가족 PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8814949/)
|||9월|||
---
|||9월|||
## 2. 콘텐츠 조정 및 안전
|||9월|||
### 2.1 건강 관련 토론 조정
|||9월|||
**자폐증과 관련된 잘못된 정보 위험 영역**:

**WhatsApp groups**:
- Worldwide Autists has Spanish, Portuguese, French, German, Italian, Russian speaking groups
- Dr. Sumeet Dhawan runs an Autism Parent Training WhatsApp community with daily 15-25 minute Q&A with a neurologist
- WACS (WhatsApp Autism Community Singapore) -- Singapore's largest public WhatsApp network for autism
- [Source: WorldwideAutists](https://worldwideautists.com/) | [Source: Dr. Sumeet](https://drsumeet.com/autism-parent-training-whatsapp-community/) | [Source: WhatsApp Autism Community Singapore](https://whatsapp.iautistic.com/)

**WeChat groups (Chinese communities)**:
- Critical platform for Chinese-speaking autism families
- Charles B. Wang Community Health Center launched WeChat accounts and special needs teams
- Parents show greater willingness to discuss autism challenges via WeChat
- CONCERN: Most communications occur with unauthorized experts (herbal medicine therapists, nutritionists) resulting in "much incorrect information"
- Professional organizations like CCABA have built official WeChat platforms
- WeChat-based parent-child creative art therapy programs shown effective in research
- [Source: USC Center for Health Journalism](https://centerforhealthjournalism.org/our-work/insights/chat-app-offers-key-unlocking-stories-autism-chinese-families) | [Source: PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7879717/)

**Line groups (Korean/Japanese)**:
- Japan: Autism support structured around the "hattatsu shogai" (developmental disability) framework
- Autism experience shaped by cultural norms of group harmony ("wa") and non-verbal communication
- Korea: Korean immigrant families face specific barriers including stigma (autism seen as jeopardizing marriage prospects), self-blame, and community blame
- "Parents Taking Action" program adapted specifically for Korean immigrants
- [Source: Sage Journals on Japan](https://journals.sagepub.com/doi/full/10.1177/13623613251355303) | [Source: PMC on Korean families](https://pmc.ncbi.nlm.nih.gov/articles/PMC8814949/)

---

## 2. Content Moderation & Safety

### 2.1 Health-Related Discussion Moderation

**Misinformation risk areas specific to autism**:

1. **백신에 대한 잘못된 정보**: 백신이 자폐증을 유발한다는 오해는 수십 년에 걸친 수많은 연구를 통해 사실이 밝혀졌습니다. 원래 연구는 제대로 수행되지 않았거나 사기였습니다. 소셜 미디어는 이러한 메시지를 비주류 의견에서 초국적 운동으로 증폭시켰습니다.
   - [출처:PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8694782/) | [출처: Harvard SPH](https://hsph.harvard.edu/exec-ed/news/founding-the-truth-vaccines-social-media-and-the-spread-of-misinformation/)
|||9월|||
2. **위험한 "치료" 홍보**:
   - **MMS/표백 요법**: 경구 또는 관장을 통해 기적의 미네랄 용액(이산화염소)을 투여합니다. FDA는 2010년과 2019년에 경고를 발표했습니다. 장 박리, 장 조직 손실, 발진, 발작, 코피, 탈모를 유발합니다.
   - **킬레이션 요법**: 이를 뒷받침하는 증거는 없습니다. 2005년 자폐증 아동이 킬레이트화로 인해 사망했습니다.
   - Amazon에서 제거된 모든 책이나 Facebook에서 폐쇄된 그룹에 대해 다른 책이 등장합니다. 옹호자들은 인터넷의 새로운 영역을 식민지화합니다.
   - [출처: FDA](https://www.fda.gov/consumers/consumer-updates/be-aware-potentially-dangerous-products-and-therapies-claim-treat-autism) | [출처: NBC 뉴스](https://www.nbcnews.com/tech/internet/moms-go-undercover-fight-fake-autism-cures-private-facebook-groups-n1007871) | [출처: ASAT](https://asatonline.org/for-parents/learn-more-about-special-treatments/bleach-therapy/)
|||9월|||
3. **ABA 치료 논쟁**: 아마도 자폐증 커뮤니티에서 가장 분열적인 주제일 것입니다.
   - 지지자: 미국 공중보건국(US Surgeon General)과 APA는 ABA를 모범 사례로 인정합니다. 연구에 따르면 지적, 사회적, 언어 기능이 향상되었습니다.
   - 비평가: 사람들을 "정상"으로 만들려는 노력에 기초함; 우울증, 불안, PTSD를 유발할 수 있습니다. 근본적인 원인을 해결하지 않고 행동을 훈련시킵니다.
   - 신경증적 부모와 자폐증 성인의 충돌은 '아마도 가장 고통스러운 요소'일 것이다.
   - **조정 권장사항**: 어떤 입장도 취하지 않고 모든 증거 기반 관점에 대해 정중한 토론을 허용합니다. 회원들이 선택하거나 거부할 수 있도록 이 주제에 대한 전용 토론 공간을 만드십시오.
   - [출처: 아동마음연구소](https://childmind.org/article/controversy-around-applied-behavior-analytic/) | [출처: 메디컬뉴스투데이](https://www.medicalnewstoday.com/articles/is-aba-therapy-harmful) | [출처:PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9114057/)
|||9월|||
**조정 전략**:
- 지역사회 단체 및 기관과의 지역사회 기반 소통
- 각 커뮤니티에 맞는 증거 기반 메시징
- 잘못된 정보 라벨링과 함께 긍정적인 정보 전파
- 미디어 리터러시 증진
- [출처: The Lancet Digital Health](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(19)30136-0/fulltext)
|||9월|||
### 2.2 AI 지원 콘텐츠 조정 도구
|||9월|||
**OpenAI 중재 API**(무료):
- GPT-4o를 기반으로 한 새로운 모델
- 유해한 텍스트와 이미지를 더욱 정확하게 감지
- 영어가 아닌 언어에서는 특히 정확합니다.
- 카테고리: 폭력, 자해, 불법 활동, 불법/폭력
- [출처: OpenAI](https://platform.openai.com/docs/guides/moderation) | [출처: OpenAI 블로그](https://openai.com/index/upgrading-the-moderation-api-with-our-new-multimodal-moderation-model/)
|||9월|||
**Google Perspective API**(무료, 1QPS 기본값):
- 18개 언어 지원: AR, CS, DE, EN, ES, FR, HI, HI-Latn, ID, IT, JA, KO, NL, PL, PT, RU, SV, ZH
- 모든 언어에 걸친 단일 다국어 Charformer 모델
- 독성, 염증성 내용, 유해한 언어 탐지
- [출처: Perspective API](https://perspectiveapi.com/how-it-works/) | [출처: ACM](https://dl.acm.org/doi/10.1145/3534678.3539147)
|||9월|||
**비교 성능**: OpenAI Moderation API는 일반적으로 Google 자체 Jigsaw 데이터세트를 제외하고 대부분의 데이터세트에서 Perspective API보다 성능이 뛰어납니다.
- [출처: 하이젤 연구소](https://blog.haizelabs.com/posts/content-moderation-apis-are-bad/)

2. **Dangerous "cure" promotion**:
   - **MMS/Bleach therapy**: Miracle Mineral Solution (chlorine dioxide) given orally or via enema. FDA issued warnings in 2010 and 2019. Causes bowel stripping, intestinal tissue loss, rashes, seizures, nosebleeds, hair loss.
   - **Chelation therapy**: No evidence supports it; a child with autism died from chelation in 2005.
   - For every book removed from Amazon or group shuttered on Facebook, others spring up -- proponents colonize new corners of the internet.
   - [Source: FDA](https://www.fda.gov/consumers/consumer-updates/be-aware-potentially-dangerous-products-and-therapies-claim-treat-autism) | [Source: NBC News](https://www.nbcnews.com/tech/internet/moms-go-undercover-fight-fake-autism-cures-private-facebook-groups-n1007871) | [Source: ASAT](https://asatonline.org/for-parents/learn-more-about-specific-treatments/bleach-therapy/)

3. **ABA therapy controversy**: Perhaps the most divisive topic in the autism community.
   - Supporters: US Surgeon General and APA recognize ABA as best practice; studies show improvements in intellectual, social, and language functioning.
   - Critics: Based on trying to make people "normal"; may cause depression, anxiety, PTSD; trains behavior without addressing underlying causes.
   - The clash between neurotypical parents and autistic adults is "perhaps the most painful element."
   - **Moderation recommendation**: Allow respectful discussion of all evidence-based perspectives without taking a position. Create dedicated discussion spaces for this topic so members can opt in/out.
   - [Source: Child Mind Institute](https://childmind.org/article/controversy-around-applied-behavior-analysis/) | [Source: Medical News Today](https://www.medicalnewstoday.com/articles/is-aba-therapy-harmful) | [Source: PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9114057/)

**Moderation strategies**:
- Community-based communication with community groups and organizations
- Evidence-based messaging tailored to each community
- Positive information dissemination alongside misinformation labeling
- Media literacy promotion
- [Source: The Lancet Digital Health](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(19)30136-0/fulltext)

### 2.2 AI-Assisted Content Moderation Tools

**OpenAI Moderation API** (Free):
- New model built on GPT-4o
- More accurate at detecting harmful text AND images
- Especially accurate in non-English languages
- Categories: violence, self-harm, illicit activities, illicit/violent
- [Source: OpenAI](https://platform.openai.com/docs/guides/moderation) | [Source: OpenAI Blog](https://openai.com/index/upgrading-the-moderation-api-with-our-new-multimodal-moderation-model/)

**Google Perspective API** (Free, 1 QPS default):
- Supports 18 languages: AR, CS, DE, EN, ES, FR, HI, HI-Latn, ID, IT, JA, KO, NL, PL, PT, RU, SV, ZH
- Single multilingual Charformer model across all languages
- Detects toxicity, inflammatory content, harmful speech
- [Source: Perspective API](https://perspectiveapi.com/how-it-works/) | [Source: ACM](https://dl.acm.org/doi/10.1145/3534678.3539147)

**Comparative performance**: OpenAI Moderation API generally outperforms Perspective API across most datasets, except on Google's own Jigsaw dataset.
- [Source: Haizel Labs](https://blog.haizelabs.com/posts/content-moderation-apis-are-bad/)

**권장되는 하이브리드 접근 방식**: 두 API를 모두 인간 조정자와 함께 사용합니다. AI는 대규모 초기 심사를 처리합니다. 인간 중재자는 미묘한 사례, 문화적 맥락 및 호소를 처리합니다. 비영어권 조정은 자동화 도구의 약점으로 남아 있습니다.
- [출처: Conectys](https://www.conectys.com/blog/posts/ai-powered-content-moderation-solutions-how-they-work-benefits-top-tools/)
|||9월|||
### 2.3 정신 건강 위기 감지
|||9월|||
- AI 기반 NLP 및 감정 분석을 통해 소셜 미디어 게시물에서 자살 생각을 감지할 수 있습니다.
- 딥 러닝 프레임워크는 특정 데이터 세트에서 F1 점수 0.97을 달성합니다.
- Woebot, MY3, Suicide Safety Plan과 같은 앱은 위기 개입을 제공합니다.
- **중요한 한계**: 위기 대응용 AI 챗봇은 "매우 부정확하고 비윤리적"이며 "인간 대화로 대체할 수 없음"
- **권장사항**: 자동화된 대응 대신 사람이 검토할 수 있도록 콘텐츠에 플래그를 지정하고 위기 리소스(988 자살 및 위기 생명의 전화, 위기 문자 메시지)를 제공하는 자동 감지를 구현합니다.
- [출처:PMC Systematic Review](https://pmc.ncbi.nlm.nih.gov/articles/PMC12234914/) | [출처: 네이처 사이언티픽 리포트](https://www.nature.com/articles/s41598-025-17242-4)
|||9월|||
### 2.4 취약한 사용자를 위한 안전
|||9월|||
**서류미비 가족의 익명성**:
- 실명이나 정부 신분증 없이 등록 가능
- 전화번호 확인이 필요하지 않습니다(ICE 소환 위험).
- 암호화된 메시징 사용(신호 프로토콜 접근 방식)
- Notifica 앱 모델 따르기: PIN으로 보호된 통신, 자동 삭제 기능
- 소환될 수 있는 식별 정보가 저장되지 않도록 설계합니다.
- [출처: United We Dream](https://unitedwedream.org/resources/top-6-digital-safety-tips-for-undocumented-folks/) | [출처: Rolling Stone](https://www.rollingstone.com/culture/culture-news/inside-the-new-emergency-app-for-undocumented- migrations-112928/)
|||9월|||
**신상 털기 방지 조치**:
- 업로드된 모든 이미지에서 EXIF 데이터 제거
- 사용자 IP 주소 표시 방지
- 사용자 이름 변경 허용
- 기본적으로 위치 공유가 없습니다.
- 콘텐츠 수준의 개인 정보 보호 관리(게시물은 특정 그룹에게만 표시됨)
|||9월|||
**약탈적인 서비스 제공업체 방지**:
- 자폐인은 더 높은 위험에 처해 있습니다. 자폐증이 있는 성인의 약 50%가 온라인 사기에 속았습니다.
- 자폐증 서비스 사기로 인해 총 수억 달러의 자금이 도난당했습니다.
- 경고 신호: 빈 세션 메모, 받지 못한 서비스에 대한 청구, 등록에 대한 인센티브/리베이트
- **권장사항**: 제공자 명부를 지역사회 토론과 분리하세요. 공급자의 재능에 대한 확인이 필요합니다. 모든 후원 콘텐츠를 명확하게 표시합니다. 포럼에서 직접 권유 금지
- [출처: 샌포드 하이슬러 샤프](https://sanfordheisler.com/blog/2025/12/fraud-against-autistic-individuals-their-loved-ones-and-beyond/) | [출처: NBC 마이애미](https://www.nbcmiami.com/investigations/its-not-fair-fraud-targeting-services-for-children-with-autism/3366480/)
|||9월|||
**아동 개인 정보 보호(COPPA)**:
- COPPA는 13세 미만의 어린이에게 적용됩니다. 확장된 PII 정의에는 지리적 위치, 사진, 비디오, 오디오가 포함됩니다.
- 위반당 최대 $43,280의 벌금
- 요구 사항: 부모에게 명확한 개인정보 보호 고지, 검증 가능한 부모 동의, 공식 정보 보안 프로그램, 엄격한 데이터 보관/삭제
- **앱의 경우**: 부모가 자녀에 대해 논의하므로 게시물에 자녀의 사진, 실명, 학교 이름 또는 식별 정보를 공유하는 것에 대한 엄격한 규칙을 구현하세요.
- [출처: Kiteworks COPPA 가이드](https://www.kiteworks.com/risk-compliance-glossary/coppa-childrens-online-privacy-protection-act/) | [출처: Usercentrics](https://usercentrics.com/knowledge-hub/coppa-compliance/)

### 2.3 Mental Health Crisis Detection

- AI-powered NLP and sentiment analysis can detect suicidal ideation from social media posts
- Deep learning frameworks achieve F1 scores of 0.97 in specific datasets
- Apps like Woebot, MY3, and Suicide Safety Plan provide crisis intervention
- **Critical limitation**: AI chatbots for crisis response are "highly inaccurate and unethical" and "cannot be replaced by human conversation"
- **Recommendation**: Implement automated detection that flags content for human review and provides crisis resources (988 Suicide & Crisis Lifeline, Crisis Text Line) rather than automated response
- [Source: PMC Systematic Review](https://pmc.ncbi.nlm.nih.gov/articles/PMC12234914/) | [Source: Nature Scientific Reports](https://www.nature.com/articles/s41598-025-17242-4)

### 2.4 Safety for Vulnerable Users

**Anonymity for undocumented families**:
- Allow registration without real names or government IDs
- Never require phone number verification (ICE subpoena risk)
- Use encrypted messaging (Signal protocol approach)
- Follow Notifica app model: PIN-protected communications, auto-delete capability
- Design so no identifying info is stored that could be subpoenaed
- [Source: United We Dream](https://unitedwedream.org/resources/top-6-digital-safety-tips-for-undocumented-folks/) | [Source: Rolling Stone](https://www.rollingstone.com/culture/culture-news/inside-the-new-emergency-app-for-undocumented-immigrants-112928/)

**Anti-doxxing measures**:
- Strip EXIF data from all uploaded images
- Prevent display of user IP addresses
- Allow username changes
- No location sharing by default
- Content-level privacy controls (post visible only to certain groups)

**Preventing predatory service providers**:
- Autistic individuals are at higher risk: ~50% of adults with autism have been tricked by online scams
- Fraud in autism services has totaled hundreds of millions in stolen funds
- Warning signs: blank session notes, billing for services not received, incentives/kickbacks for enrollment
- **Recommendation**: Separate provider directory from community discussion; require verification for any provider flair; clearly mark all sponsored content; prohibit direct solicitation in forums
- [Source: Sanford Heisler Sharp](https://sanfordheisler.com/blog/2025/12/fraud-against-autistic-individuals-their-loved-ones-and-beyond/) | [Source: NBC Miami](https://www.nbcmiami.com/investigations/its-not-fair-fraud-targeting-services-for-children-with-autism/3366480/)

**Child privacy protections (COPPA)**:
- COPPA applies to children under 13; expanded PII definition includes geolocation, photos, videos, audio
- Penalties up to $43,280 per violation
- Requires: clear privacy notices to parents, verifiable parental consent, formal information security program, strict data retention/deletion
- **For your app**: Since parents discuss their children, implement strict rules against sharing children's photos, real names, school names, or any identifying information in posts
- [Source: Kiteworks COPPA Guide](https://www.kiteworks.com/risk-compliance-glossary/coppa-childrens-online-privacy-protection-act/) | [Source: Usercentrics](https://usercentrics.com/knowledge-hub/coppa-compliance/)

**직접 메시지 안전**:
- DM은 기본적으로 꺼집니다. 선택 허용
- 성인이 미성년자로 식별되는 계정에 메시지를 보내는 것을 방지합니다.
- 정리 패턴에 대한 AI 스캔 DM(투명성 포함)
- 신규 계정 메시지 비율 제한
- [출처: NTIA 권장 사례](https://www.ntia.gov/report/2024/kids-online-health-and-safety/online-health-and-safety-for-children-and-youth/taskforce-guidance/recommended-practices-for-industry)
|||9월|||
### 2.5 커뮤니티 지침(기존 커뮤니티의 예)
|||9월|||
**국립자폐증학회 온라인 커뮤니티 규칙**:
- 판매, 광고 없음(소속 공개 시 추천 가능)
- 개인정보 보호(커뮤니티는 공개)
- 불법 콘텐츠 금지: 테러, 아동 착취, 괴롭힘, 증오심 표현, 마약, 사기
- 자폐 스펙트럼을 겪고 있는 소규모 자원봉사자 팀이 진행합니다.
- 논쟁의 여지가 있는 주제는 회원이 탈퇴할 수 있도록 특정 하위 포럼에만 국한됩니다.
- [출처: NAS 커뮤니티 규칙](https://community.autism.org.uk/p/rules)
|||9월|||
**자폐증 부모 영국 커뮤니티 지침**:
- 자폐증 커뮤니티의 요구에 맞는 규칙
- [출처: 영국 자폐 부모](https://www.autisticparentsuk.org/community-guidelines)
|||9월|||
**앱에 권장되는 지침**:
1. 입증되지 않은 "치료법"이나 위험한 치료법을 홍보하지 않습니다.
2. 모든 건강 관련 토론에는 자동 고지 사항 배너가 포함됩니다.
3. 치료 접근법(ABA, 신경다양성 프레임워크 등)에 대한 정중한 의견 불일치
4. 아동에 대한 식별 정보를 절대로 공유하지 마십시오.
5. 서비스 제공자의 권유 금지
6. 검증된 전문가가 명확하게 표시되어 있습니다. 검증되지 않은 조언은 명확하게 구별됩니다.
7. 문화적 감수성 요건
8. 이민 신분에 관해 논의하거나 질문해서는 안 됩니다.
9. 판단이 아닌 지원을 기본 모드로
|||9월|||
---
|||9월|||
## 3. 커뮤니티 상황에서의 번역
|||9월|||
### 3.1 실시간 번역 아키텍처

### 2.5 Community Guidelines (Examples from Existing Communities)

**National Autistic Society Online Community rules**:
- No sales or advertisements (recommendations OK if affiliation disclosed)
- Protection of personal information (community is public)
- Prohibition of illegal content: terrorism, child exploitation, harassment, hate speech, drugs, fraud
- Moderated by small teams of volunteers who are themselves on the autism spectrum
- Controversial topics confined to particular sub-forums so members can opt out
- [Source: NAS Community Rules](https://community.autism.org.uk/p/rules)

**Autistic Parents UK Community Guidelines**:
- Rules specific to the autism community's needs
- [Source: Autistic Parents UK](https://www.autisticparentsuk.org/community-guidelines)

**Recommended guidelines for your app**:
1. No promotion of unproven "cures" or dangerous treatments
2. All health discussions carry automatic disclaimer banners
3. Respectful disagreement on therapy approaches (ABA, neurodiversity framework, etc.)
4. Never share identifying information about children
5. No solicitation by service providers
6. Verified experts clearly labeled; unverified advice clearly distinguished
7. Cultural sensitivity requirements
8. Immigration status is never to be discussed or asked about
9. Support, not judgment, as the default mode

---

## 3. Translation in Community Contexts

### 3.1 Real-Time Translation Architecture

**두 가지 주요 접근 방식**:
|||9월|||
1. **언어로 구분된 공간**: 원어민 중재자가 있는 각 언어별 전용 그룹입니다. 장점: 조정 품질이 더 좋습니다. 단점: 사일로를 만들고 문화 간 상호 작용을 방해합니다.
|||9월|||
2. **번역이 포함된 통합 공간**(권장): 모든 게시물에 번역 버튼이 있는 동일한 포럼의 모든 사용자. 사용자는 자신의 언어로 읽고 자신의 언어로 응답합니다. 장점: 문화 간 상호 작용을 극대화합니다. 단점: AI 번역은 미묘한 토론에 적합하지 않습니다.
|||9월|||
**추천 하이브리드**: 번역을 기본으로 하는 통합 공간과 문화적 차이가 필요한 주제에 대한 선택적인 언어별 채널입니다.
- [출처: BuddyX 테마](https://buddyxtheme.com/multilingual-community-platform-guide/) | [출처: BuddyBoss](https://buddyboss.com/blog/build-a-multilingual-community-platform/)
|||9월|||
### 3.2 번역 API 비교
|||9월|||
| 기능 | Google 클라우드 번역 | DeepL API |
|---------|------------|----------|
| 무료 등급 | 500,000자/월 | 500,000자/월 |
| 무료 후 가격 | $20/백만 자 | $5.49/월 + $25/백만 자 |
| 언어 | 130세 이상 | 30세 이상 |
| 품질 | 좋은 범용 | 유럽 ​​언어에 대한 우수성 |
| 개인정보 보호 | 학습을 위해 데이터가 저장/사용되지 않음 | 엔터프라이즈 플랜: 데이터 저장 공간 없음 |
|||9월|||
**권장사항**: Google Cloud Translation을 기본으로 사용하세요(이 사용 사례에서는 스페인어, 중국어, 아랍어, 한국어, 일본어, 베트남어, 타갈로그어 등 더 넓은 언어 지원). 품질이 중요한 유럽 언어를 대체하는 DeepL. 복잡한 토론을 상황에 맞게 번역하려면 GPT-4 API를 고려하세요.
- [출처: TranslatePress 비교](https://translatepress.com/deepl-vs-google-translate-comparison/) | [출처: IntlPull 2026 비교](https://intlpull.com/blog/best-translation-api-2026)
|||9월|||
### 3.3 커뮤니티 콘텐츠 번역 과제

1. **Language-Separated Spaces**: Dedicated groups for each language with native-speaking moderators. Pros: better moderation quality. Cons: creates silos, prevents cross-cultural interaction.

2. **Unified Space with Translation** (recommended): Everyone in the same forums with translate buttons on every post. Users read in their language, respond in their own. Pros: maximizes cross-cultural interaction. Cons: AI translation imperfect for nuanced discussions.

**Recommended hybrid**: Unified space with translation as primary, plus optional language-specific channels for topics that require cultural nuance.
- [Source: BuddyX Theme](https://buddyxtheme.com/multilingual-community-platform-guide/) | [Source: BuddyBoss](https://buddyboss.com/blog/build-a-multilingual-community-platform/)

### 3.2 Translation API Comparison

| Feature | Google Cloud Translation | DeepL API |
|---------|------------------------|-----------|
| Free tier | 500K chars/month | 500K chars/month |
| Price after free | $20/million chars | $5.49/mo + $25/million chars |
| Languages | 130+ | 30+ |
| Quality | Good general purpose | Superior for European languages |
| Privacy | No data stored/used for training | Enterprise plan: no data storage |

**Recommendation**: Use Google Cloud Translation as primary (wider language coverage for this use case: Spanish, Chinese, Arabic, Korean, Japanese, Vietnamese, Tagalog, etc.). DeepL as fallback for European languages where quality matters. Consider GPT-4 API for context-sensitive translations of complex discussions.
- [Source: TranslatePress Comparison](https://translatepress.com/deepl-vs-google-translate-comparison/) | [Source: IntlPull 2026 Comparison](https://intlpull.com/blog/best-translation-api-2026)

### 3.3 Translation Challenges for Community Content

**번역할 수 없는 개념**:
- 특정 맥락에 깊이 내재된 문화적 개념(예: 집단 화합을 뜻하는 일본의 '와', 한국의 결혼 낙인 개념)
- 자폐증 용어는 문화에 따라 크게 다릅니다.
- 비격식적/구어체, 속어, 유머
- 위기 상황에서의 감정적 뉘앙스
- [출처: AbroadLink](https://abroadlink.com/blog/the-challenges-of-translation-when-words-have-no-equival)
|||9월|||
**실용적인 솔루션**:
- **번역**: 단어 대 단어 번역이 아닌 톤, 문맥, 의도를 고려하여 의미를 조정합니다.
- **문화 용어집**: 여러 언어에 걸쳐 커뮤니티에서 관리하는 자폐증 용어집 구축
- **사용자 수정**: 이중 언어 사용자가 번역을 표시하고 개선할 수 있도록 허용합니다.
- **원어 표시**: 항상 번역과 함께 원본 텍스트를 표시합니다. 사용자가 전환하도록 허용
- **컨텍스트 번역**: 더 나은 품질을 위해 주변 대화 컨텍스트를 번역 API에 전달합니다.
- [출처: MotionPoint](https://www.motionpoint.com/blog/6-challenges-of-translation-localization-to-prepare-for/)
|||9월|||
### 3.4 이미지/스크린샷 번역
|||9월|||
- OCR 도구는 128개 이상의 언어(i2OCR, PDNob)를 지원합니다.
- 스크린샷, 밈, 소셜 미디어 게시물, 손글씨 메모에서 텍스트 추출 가능
- 조정용: 시스템은 100개 이상의 언어를 지원하고 단일 이미지에서 혼합 언어 콘텐츠를 처리할 수 있습니다.
- **구현**: 사용자가 텍스트가 포함된 이미지를 업로드하면 자동으로 OCR + 번역을 실행합니다. 번역된 텍스트 오버레이 또는 캡션 표시
- [출처: i2OCR](https://www.i2ocr.com/) | [출처: 이미지 조정 API](https://www.imagemoderationapi.com/knowledge/advanced_text_in_image_ocr_moderation.php)
|||9월|||
---
|||9월|||
## 4. 커뮤니티 기능 조사
|||9월|||
### 4.1 투표 및 평판 시스템
|||9월|||
**Reddit 모델**: 무제한 찬성/비추천, 카르마 축적. 장점: 민주적이다. 단점: 불일치로 인한 무심코 반대 투표, 누적 효과.

**Practical solutions**:
- **Transcreation**: Adapt meaning considering tone, context, and intent rather than word-for-word translation
- **Cultural glossary**: Build a community-maintained glossary of autism terms across languages
- **User correction**: Allow bilingual users to flag and improve translations
- **Original language display**: Always show original text alongside translation; let users toggle
- **Contextual translation**: Pass surrounding conversation context to translation API for better quality
- [Source: MotionPoint](https://www.motionpoint.com/blog/6-challenges-of-translation-localization-to-prepare-for/)

### 3.4 Image/Screenshot Translation

- OCR tools support 128+ languages (i2OCR, PDNob)
- Can extract text from screenshots, memes, social media posts, handwritten notes
- For moderation: system supports 100+ languages and can process mixed-language content in a single image
- **Implementation**: When users upload images containing text, run OCR + translation automatically; display translated text overlay or caption
- [Source: i2OCR](https://www.i2ocr.com/) | [Source: Image Moderation API](https://www.imagemoderationapi.com/knowledge/advanced_text_in_image_ocr_moderation.php)

---

## 4. Community Features Research

### 4.1 Voting & Reputation Systems

**Reddit model**: Unlimited upvotes/downvotes, karma accumulation. Pros: democratic. Cons: casual downvoting for disagreement, pile-on effects.

**스택 오버플로 모델**: 평판 임계값은 권한을 잠금 해제합니다. 반대 투표를 하면 반대 투표자 포인트가 소모됩니다. 더욱 사려 깊은 참여.
|||9월|||
**해커 뉴스 모델**: 찬성 투표만 가능(비추천 없음). 부정성이 쌓이는 것을 방지합니다.
|||9월|||
**앱에 대한 권장 사항**: '도움이 되는' 반응과 결합된 찬성 투표 전용 시스템(예: Hacker News). 이를 통해 소수의 관점이 침묵되고, 신규 사용자가 낙담하고, 민감한 커뮤니티에서 누적된 행동이 발생하는 것을 방지할 수 있습니다. 실제로 유해한 콘텐츠에 대한 신고 버튼을 추가합니다.
- [출처: Stanford CS Research](https://cs.stanford.edu/people/eroberts/cs201/projects/2010-11/PsychologyOfTrust/rep3.html) | [출처: Infinum](https://infinum.com/blog/orbiting-around-reddits-rated-system/)
|||9월|||
### 4.2 신뢰 시스템
|||9월|||
Discourse의 5단계 신뢰 시스템 모델:
- **레벨 0(신규)**: 플래그를 읽을 수 있습니다. 링크나 이미지를 게시할 수 없습니다.
- **레벨 1(기본)**: 게시, 답글, 이미지 업로드가 가능합니다. 최소한의 참여 후에 획득됩니다.
- **레벨 2(회원)**: DM 보내기, 위키 게시물 편집이 가능합니다. 지속적으로 긍정적인 참여를 한 후에 획득됩니다.
- **레벨 3(일반)**: 주제를 다시 분류하고, 이름을 바꾸고, 모드라이트 기능에 액세스할 수 있습니다.
- **레벨 4(리더)**: 커뮤니티 중재자 능력.
|||9월|||
이는 신뢰할 수 있는 커뮤니티 구성원에게 보상을 제공하는 동시에 새 계정을 샌드박스(스팸 방지)합니다.
- [출처: 담론 위키피디아](https://en.wikipedia.org/wiki/Discourse_(소프트웨어))
|||9월|||
### 4.3 전문가 검증
|||9월|||
- GoodTherapy는 활성 상태 라이센스를 확인하는 "인증된 자격증명 씰"을 사용합니다.
- NBCC는 인증 검증 디렉토리를 유지합니다.
- National Register에서는 심리학자를 위한 온라인 검증을 제공합니다.
- **구현**: 주 면허 번호(주 위원회 데이터베이스에 대해 확인됨), 전문 자격증 문서, 소속 공개를 요구하는 "검증된 전문가" 배지를 만듭니다. 확인이 자발적이라는 점을 명확하게 표시하세요.
- [출처: GoodTherapy](https://www.goodtherapy.org/verified-credentials.html) | [출처: NBCC](https://www.nbcc.org/search/counselorverify)

**Hacker News model**: Upvote only (no downvote). Prevents pile-on negativity.

**Recommendation for your app**: Upvote-only system (like Hacker News) combined with a "helpful" reaction. This prevents: minority viewpoints being silenced, new users being discouraged, pile-on behavior in a sensitive community. Add report button for genuinely harmful content.
- [Source: Stanford CS Research](https://cs.stanford.edu/people/eroberts/cs201/projects/2010-11/PsychologyOfTrust/rep3.html) | [Source: Infinum](https://infinum.com/blog/orbiting-around-reddits-rating-system/)

### 4.2 Trust System

Model after Discourse's 5-level trust system:
- **Level 0 (New)**: Can read, like, flag. Cannot post links or images.
- **Level 1 (Basic)**: Can post, reply, upload images. Earned after minimal engagement.
- **Level 2 (Member)**: Can send DMs, edit wiki posts. Earned after consistent positive engagement.
- **Level 3 (Regular)**: Can recategorize, rename topics, access mod-lite features.
- **Level 4 (Leader)**: Community moderator abilities.

This sandboxes new accounts (spam prevention) while rewarding trusted community members.
- [Source: Wikipedia on Discourse](https://en.wikipedia.org/wiki/Discourse_(software))

### 4.3 Expert Verification

- GoodTherapy uses a "Verified Credentials Seal" confirming active state license
- NBCC maintains certification verification directory
- National Register provides online verification for psychologists
- **Implementation**: Create "Verified Professional" badge requiring: state license number (verified against state board databases), professional credential documentation, affiliation disclosure. Clearly label that verification is voluntary.
- [Source: GoodTherapy](https://www.goodtherapy.org/verified-credentials.html) | [Source: NBCC](https://www.nbcc.org/search/counselorverify)

### 4.4 주제 분류
|||9월|||
기존 자폐증 부모 커뮤니티 분석을 바탕으로 권장 카테고리는 다음과 같습니다.
|||9월|||
1. **진단 여정**(평가 받기, 결과 이해하기)
2. **치료 및 치료**(ABA, 언어, OT, PT, 하위 범주 포함)
3. **교육 및 IEP**(학교 옹호, IEP 회의, 편의 제공)
4. **보험 및 혜택**(Medicaid 면제, 민간 보험, 주정부 프로그램)
5. **일상생활**(감각 문제, 일상, 멜트다운, 음식)
6. **이민 및 서비스** (이민자로서의 시스템 탐색, 언어 장벽)
7. **정서적 지원**(분노, 축하, 슬픔, 탈진)
8. **제공자 리뷰**(치료사, 학교, 의사)
9. **주별 자원**(주별 프로그램 및 서비스)
10. **문화적 관점**(문화적으로 특정한 경험 및 접근 방식)
|||9월|||
### 4.5 피어 매칭
|||9월|||
Together, Qooper, Mentorly와 같은 플랫폼에서 사용되는 매칭 알고리즘은 다음을 분석합니다.
- 스킬, 목표, 호환성 데이터
- 가중치가 부여된 질문 및 엄격한 규칙(예: 동일한 언어, 비슷한 아동 연령)
- 성공적인 연결을 예측하는 패턴 인식 AI 기술
|||9월|||
**앱의 경우**: 자녀의 연령, 진단 세부 사항(언어/비언어적, 동시 발생 조건), 기본 언어, 지리적 근접성(주) 및 관심 주제를 기준으로 부모를 일치시킵니다.
- [출처 : 투게더플랫폼](https://www.togetherplatform.com/pairing-algorithm) | [출처: Qooper](https://www.qooper.io/mentoring-software)
|||9월|||
### 4.6 익명 게시
|||9월|||
계정별이 아닌 게시물별 익명 게시 토글을 허용합니다. 사용자 신원은 여전히 ​​중재자에게 알려져 있지만 커뮤니티에는 숨겨져 있습니다. 중요한 사항:
- 이민 신분 문제에 대해 논의
- 힘들었던 정서적 경험을 공유
- 부모가 판단한다고 생각하는 질문하기

Based on analysis of existing autism parent communities, recommended categories:

1. **Diagnosis Journey** (getting evaluated, understanding results)
2. **Therapy & Treatment** (ABA, speech, OT, PT, with sub-categories)
3. **Education & IEP** (school advocacy, IEP meetings, accommodations)
4. **Insurance & Benefits** (Medicaid waivers, private insurance, state programs)
5. **Daily Life** (sensory issues, routines, meltdowns, food)
6. **Immigration & Services** (navigating systems as immigrant, language barriers)
7. **Emotional Support** (venting, celebrations, grief, burnout)
8. **Provider Reviews** (therapists, schools, doctors)
9. **Resources by State** (state-specific programs and services)
10. **Cultural Perspectives** (culturally-specific experiences and approaches)

### 4.5 Peer Matching

Matching algorithms used by platforms like Together, Qooper, and Mentorly analyze:
- Skills, goals, and compatibility data
- Weighted questions and hard rules (e.g., same language, similar child age)
- AI technology for pattern recognition predicting successful connections

**For your app**: Match parents based on: child's age, diagnosis specifics (verbal/non-verbal, co-occurring conditions), primary language, geographic proximity (state), and topics of interest.
- [Source: Together Platform](https://www.togetherplatform.com/pairing-algorithm) | [Source: Qooper](https://www.qooper.io/mentoring-software)

### 4.6 Anonymous Posting

Allow toggle for anonymous posting per-post (not per-account). User identity still known to moderators but hidden from community. Critical for:
- Discussing immigration status concerns
- Sharing difficult emotional experiences
- Asking questions parents feel judged for

---
|||9월|||
## 5. 기술적 구현
|||9월|||
### 5.1 포럼 프레임워크 옵션
|||9월|||
**옵션 A: React/TypeScript를 사용한 사용자 정의 빌드**
- 기능 및 UX에 대한 전체 제어
- Novu 튜토리얼: React + Node.js 포럼 구현
- 개발 노력이 더 많이 들지만 고유한 다국어 요구 사항에 가장 적합
- [출처: Novu/DEV](https://dev.to/novu/building-a-forum-with-react-nodejs-6pe)
|||9월|||
**옵션 B: 담론 + React 통합**
- 입증된 오픈 소스 포럼(3,000개 이상의 기업에서 사용)
- React 프론트엔드와의 통합을 위한 REST API
- 내장된 신뢰 시스템, 조정 도구, 검색
- GitHub의 공식 React 예: `discourse/discourse-react-example`
- 제한 사항: Ruby on Rails 백엔드, Supabase 스택과 별개
- [출처: 담론 메타](https://meta.discourse.org/t/using-discourse-to-add-a-forum-feature-to-our-current-application/107192) | [출처: GitHub](https://github.com/discourse/discourse-react-example)
|||9월|||
**옵션 C: NodeBB**
- WebSocket을 통해 실시간 알림을 제공하는 Node.js 기반 포럼
- 카테고리, 사용자 계정, 메시징
- JS/TS 스택과 더욱 일치
- [출처: NodeBB](https://nodebb.org/)
|||9월|||
**권장사항**: Supabase 백엔드와 함께 React/TypeScript를 사용하여 맞춤 빌드하세요. 이를 통해 번역 계층, 문화적 사용자 정의 및 고유한 기능 세트(동료 매칭, 익명 모드, 전문가 검증)를 완벽하게 제어할 수 있습니다. Discourse의 디자인 패턴을 영감으로 사용하세요.
|||9월|||
### 5.2 Supabase를 사용한 실시간 기능

## 5. Technical Implementation

### 5.1 Forum Framework Options

**Option A: Custom Build with React/TypeScript**
- Full control over features and UX
- Novu tutorial: React + Node.js forum implementation
- Higher development effort but best for unique multilingual requirements
- [Source: Novu/DEV](https://dev.to/novu/building-a-forum-with-react-nodejs-6pe)

**Option B: Discourse + React Integration**
- Proven open-source forum (3,000+ businesses use it)
- REST API for integration with React frontend
- Built-in trust system, moderation tools, search
- Official React example on GitHub: `discourse/discourse-react-example`
- Limitation: Ruby on Rails backend, separate from your Supabase stack
- [Source: Discourse Meta](https://meta.discourse.org/t/using-discourse-to-add-a-forum-feature-to-our-current-application/107192) | [Source: GitHub](https://github.com/discourse/discourse-react-example)

**Option C: NodeBB**
- Node.js-based forum with real-time notifications via WebSockets
- Categories, user accounts, messaging
- More aligned with JS/TS stack
- [Source: NodeBB](https://nodebb.org/)

**Recommendation**: Custom build using React/TypeScript with Supabase backend. This gives you full control over the translation layer, cultural customization, and the unique feature set (peer matching, anonymous mode, expert verification). Use Discourse's design patterns as inspiration.

### 5.2 Real-Time Features with Supabase

**Supabase Realtime**은 세 가지 메커니즘을 제공합니다.
|||9월|||
1. **브로드캐스트**: 채팅, 알림, 임시 업데이트를 위한 게시/구독 메시지 전달. 실시간 포럼 댓글 및 반응에 이상적입니다.
|||9월|||
2. **현재 상태**: 채널에서 어떤 사용자가 활성 상태인지 추적합니다. "온라인에 있는 사람" 표시 및 입력 표시에 사용합니다.
|||9월|||
3. **Postgres 변경**: 데이터베이스 변경 리스너. 새 게시물이 삽입되면 구독 중인 모든 클라이언트가 실시간으로 해당 게시물을 받아볼 수 있습니다.
|||9월|||
**구현 아키텍처**:
````
스페인어로 된 사용자 게시물 -> 
  수파베이스 삽입(원본 텍스트) -> 
  Postgres 트리거 호출 번역 API -> 
  번역된 버전이 캐시됨 -> 
  Subabase Realtime은 구독자에게 방송됩니다 -> 
  각 사용자는 자신이 선호하는 언어로 게시물을 봅니다.
````
- [출처: Supabase Realtime Docs](https://supabase.com/docs/guides/realtime) | [출처: Supabase 채팅 구성 요소](https://supabase.com/ui/docs/nextjs/realtime-chat)
|||9월|||
### 5.3 언어 간 전체 텍스트 검색
|||9월|||
**PGroonga 확장 프로그램**(권장):
- 모든 언어를 동시에 지원하는 Postgres 확장(한 번에 하나씩 지원하는 기본 Postgres FTS와는 다름)
- 일본어, 중국어, 한국어, 아랍어 및 모든 라틴 문자 언어를 지원합니다.
- `&@~` 연산자를 사용한 대소문자 구분 검색
- 색인 생성: `pgroonga(content)를 사용하여 게시물에 대해 CREATE INDEX ix_posts_content;`
|||9월|||
**구현**: 원본 텍스트와 모든 번역된 버전을 모두 색인화합니다. 사용자가 스페인어로 검색하면 원래 모든 언어로 작성된 게시물의 스페인어 번역이 검색됩니다.
- [출처: Supabase PGroonga Docs](https://supabase.com/docs/guides/database/extensions/pgroonga) | [출처: Supabase FTS 문서](https://supabase.com/docs/guides/database/full-text-search)

1. **Broadcast**: Pub/sub message passing for chat, notifications, transient updates. Ideal for real-time forum comments and reactions.

2. **Presence**: Tracks which users are active in a channel. Use for "who's online" indicators and typing indicators.

3. **Postgres Changes**: Database change listeners. When a new post is inserted, all subscribed clients receive it in real-time.

**Implementation architecture**:
```
User posts in Spanish -> 
  Supabase insert (original text) -> 
  Postgres trigger calls translation API -> 
  Translated versions cached -> 
  Supabase Realtime broadcasts to subscribed users -> 
  Each user sees post in their preferred language
```
- [Source: Supabase Realtime Docs](https://supabase.com/docs/guides/realtime) | [Source: Supabase Chat Component](https://supabase.com/ui/docs/nextjs/realtime-chat)

### 5.3 Full-Text Search Across Languages

**PGroonga extension** (recommended):
- Postgres extension supporting ALL languages simultaneously (unlike native Postgres FTS which supports one at a time)
- Supports Japanese, Chinese, Korean, Arabic, and all Latin-script languages
- Case-insensitive search using `&@~` operator
- Create index: `CREATE INDEX ix_posts_content ON posts USING pgroonga(content);`

**Implementation**: Index both original text and all translated versions. When a user searches in Spanish, search hits Spanish translations of posts originally written in any language.
- [Source: Supabase PGroonga Docs](https://supabase.com/docs/guides/database/extensions/pgroonga) | [Source: Supabase FTS Docs](https://supabase.com/docs/guides/database/full-text-search)

### 5.4 이미지/미디어 처리
|||9월|||
**Supabase 저장소**:
- 전 세계 285개 이상의 도시를 지원하는 글로벌 CDN
- 이미지, 비디오, 문서, PDF 지원
- 대용량 파일에 대한 TUS 재개 가능한 업로드
- 자동 WebP 변환 및 즉각적인 이미지 최적화
- 액세스 제어를 위한 행 수준 보안
- 업데이트 후 60초 이내에 캐시 무효화
- [출처: Supabase Storage Docs](https://supabase.com/docs/guides/storage) | [출처: Supabase CDN](https://supabase.com/docs/guides/storage/cdn/fundamentals)
|||9월|||
**앱에 대한 추가 요구사항**:
- 업로드 시 EXIF 제거(개인정보 보호)
- 이미지 속 텍스트 번역을 위한 OCR 처리
- OpenAI Moderation API를 통한 이미지 조정(다중 모드)
- 최대 파일 크기 제한
|||9월|||
### 5.5 푸시 알림
|||9월|||
- 앱이 종료된 경우에도 백그라운드 전달을 위해 서비스 워커를 사용합니다.
- 크로스 플랫폼 전달을 위한 FCM(Firebase Cloud Messaging)
- HTTPS를 사용해야 합니다. 공개/개인 키로 암호화
- 사용자 작업 시 권한 팝업 표시(즉시 아님)
- 알림 유형: 게시물에 대한 답변, DM, 위기 자원 알림, 주간 요약
- [출처: MagicBell PWA 가이드](https://www.magicbell.com/blog/using-push-notifications-in-pwas) | [출처: DEV 커뮤니티 가이드](https://dev.to/ajayupreti/how-to-use-push-notifications-in-react-a-step-by-step-guide-341d)
|||9월|||
### 5.6 속도 제한 및 스팸 방지
|||9월|||
**계층화된 방어 전략**:
1. 허니팟 필드(봇이 채우는 보이지 않는 양식 필드)
2. IP별, 사용자 계정별 속도 제한
3. 새로운 계정 제한(신뢰 시스템 레벨 0)
4. 신뢰 수준 1에 도달한 후에만 링크를 허용합니다.
5. 스팸 패턴에 대한 AI 기반 콘텐츠 분석
6. 포럼별 확인 질문
7. 행동분석(게시속도, 패턴)
|||9월|||
**2025년 위협**: 손상된 가정용 장치를 통한 주거용 프록시 라우팅으로 인해 IP 기반 차단의 효율성이 떨어집니다. AkiraBot은 OpenAI를 사용하여 필터를 우회하는 맞춤형 스팸을 생성했습니다. 다중 방어 계층이 필수적입니다.
- [출처: Higher Logic](https://www.higherlogic.com/blog/9-ways-to-eliminate-spam-in-your-community-forum/) | [출처: Akismet](https://akismet.com/blog/forum-spam/)

**Supabase Storage**:
- Global CDN with 285+ cities worldwide
- Supports images, videos, documents, PDFs
- TUS resumable uploads for large files
- Automatic WebP conversion and on-the-fly image optimization
- Row Level Security for access control
- Cache invalidation within 60 seconds of updates
- [Source: Supabase Storage Docs](https://supabase.com/docs/guides/storage) | [Source: Supabase CDN](https://supabase.com/docs/guides/storage/cdn/fundamentals)

**Additional requirements for your app**:
- EXIF stripping on upload (privacy protection)
- OCR processing for text-in-images translation
- Image moderation via OpenAI Moderation API (multimodal)
- Maximum file size limits

### 5.5 Push Notifications

- Use Service Workers for background delivery even when app is closed
- Firebase Cloud Messaging (FCM) for cross-platform delivery
- Must use HTTPS; encrypt with public/private keys
- Show permission popup on user action (not immediately)
- Notification types: replies to posts, DMs, crisis resource alerts, weekly digest
- [Source: MagicBell PWA Guide](https://www.magicbell.com/blog/using-push-notifications-in-pwas) | [Source: DEV Community Guide](https://dev.to/ajayupreti/how-to-use-push-notifications-in-react-a-step-by-step-guide-341d)

### 5.6 Rate Limiting & Spam Prevention

**Layered defense strategy**:
1. Honeypot fields (invisible form fields that bots fill)
2. Rate limiting per IP and per user account
3. New account restrictions (trust system Level 0)
4. Only allow links after reaching trust Level 1
5. AI-powered content analysis for spam patterns
6. Forum-specific verification questions
7. Behavioral analysis (posting speed, patterns)

**2025 threat**: Residential proxies routing through compromised home devices make IP-based blocking less effective. AkiraBot used OpenAI to generate personalized spam bypassing filters. Multiple defense layers are essential.
- [Source: Higher Logic](https://www.higherlogic.com/blog/9-ways-to-eliminate-spam-in-your-community-forum/) | [Source: Akismet](https://akismet.com/blog/forum-spam/)

### 5.7 캐싱 아키텍처
|||9월|||
**다층 접근 방식**:
1. **CDN 레이어**: 정적 자산, 이미지를 위한 Supabase Storage CDN
2. **애플리케이션 캐시**: 클라이언트 측 데이터 캐싱 및 상태 관리를 위한 React Query
3. **서버 캐시**: 자주 액세스하는 데이터(핫 포스트, 순위, 사용자 세션)를 위한 Redis
4. **데이터베이스 최적화**: PGroonga 인덱스, 인기 쿼리에 대한 구체화된 뷰
5. **클라이언트 측**: 오프라인 가능 콘텐츠 액세스를 위한 IndexedDB
|||9월|||
잘 설계된 캐싱 전략은 대기 시간을 10~100배까지 줄이고 원본 서버 로드를 90% 이상 줄일 수 있습니다.
- [출처: 캐시 전략 가이드](https://shinagawa-web.com/en/blogs/cache-strategy-optimization) | [출처: Redis 최적화](https://redis.io/blog/guide-to-cache-optimization-strategies/)
|||9월|||
### 5.8 행 수준 보안(Supabase RLS)
|||9월|||
세분화된 액세스 제어 구현:
- 사용자는 자신의 게시물만 수정/삭제할 수 있습니다.
- 중재자는 모든 게시물을 편집하거나 숨길 수 있습니다.
- 익명 게시물: user_id가 저장되었지만 API를 통해 노출되지 않음
- 차단된 사용자는 차단자의 콘텐츠를 보거나 상호 작용할 수 없습니다.
- 비공개 그룹: 회원만 게시물을 읽을 수 있습니다.
|||9월|||
``sql
-- 예: 사용자는 자신의 게시물만 업데이트할 수 있습니다.
정책 만들기 "사용자는 자신의 게시물을 업데이트할 수 있습니다."
업데이트용 게시물 ON
USING (auth.uid() = user_id);
|||9월|||
-- 예: 중재자는 모든 게시물을 업데이트할 수 있습니다.
정책 만들기 "운영자는 모든 게시물을 업데이트할 수 있습니다."
업데이트용 게시물 ON
사용 (
  존재합니다(
    user_roles에서 1개 선택 
    여기서 user_id = auth.uid() 
    AND 역할 = '조정자'
  )
);
````
- [출처: Supabase RLS 문서](https://supabase.com/docs/guides/database/postgres/row-level-security) | [출처: Supabase RLS 기능](https://supabase.com/features/row-level-security)
|||9월|||
---

**Multi-layer approach**:
1. **CDN layer**: Supabase Storage CDN for static assets, images
2. **Application cache**: React Query for client-side data caching and state management
3. **Server cache**: Redis for frequently accessed data (hot posts, rankings, user sessions)
4. **Database optimization**: PGroonga indexes, materialized views for popular queries
5. **Client-side**: IndexedDB for offline-capable content access

A well-designed caching strategy can reduce latency by 10-100x and reduce origin server load by 90%+.
- [Source: Cache Strategy Guide](https://shinagawa-web.com/en/blogs/cache-strategy-optimization) | [Source: Redis Optimization](https://redis.io/blog/guide-to-cache-optimization-strategies/)

### 5.8 Row Level Security (Supabase RLS)

Implement granular access control:
- Users can only edit/delete their own posts
- Moderators can edit/hide any post
- Anonymous posts: user_id stored but not exposed via API
- Blocked users cannot see or interact with blocker's content
- Private groups: only members can read posts

```sql
-- Example: Users can only update their own posts
CREATE POLICY "Users can update own posts"
ON posts FOR UPDATE
USING (auth.uid() = user_id);

-- Example: Moderators can update any post
CREATE POLICY "Moderators can update any post"
ON posts FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'moderator'
  )
);
```
- [Source: Supabase RLS Docs](https://supabase.com/docs/guides/database/postgres/row-level-security) | [Source: Supabase RLS Features](https://supabase.com/features/row-level-security)

---

## 6. 커뮤니티 구축 전략
|||9월|||
### 6.1 콜드 스타트 문제 해결
|||9월|||
**Andrew Chen의 프레임워크**(*The Cold Start Problem*의 저자):
|||9월|||
1. **원자 네트워크를 먼저 구축하세요**: 대규모 네트워크를 확장하려고 하지 마세요. 실행 가능한 가장 작은 네트워크를 구축하십시오. 아마도 단일 도시 또는 서로 알고 있는 언어 그룹의 부모 20-50명 정도일 것입니다.
|||9월|||
2. **콘텐츠 시드**: Reddit의 창립자는 추진력을 구축하기 위해 수십 개의 봇 계정을 게시했습니다. 앱의 경우: 출시 전에 고품질 시드 콘텐츠(번역된 리소스 가이드, FAQ 게시물, 엄선된 전문가 Q&A)를 만드세요.
|||9월|||
3. **"도구를 사용하고 네트워크를 유지하세요"**: 사용자를 끌어들이는 싱글 플레이어 가치(자폐증 리소스 디렉토리, IEP 템플릿 라이브러리, 치료 추적기)를 제공한 다음 커뮤니티 참여로 전환합니다.
|||9월|||
4. **초대 전용 출시**: LinkedIn의 전략과 같습니다. 비슷한 사람들을 초대하는 소규모 그룹을 타겟팅하세요. 네트워크는 신뢰할 수 있는 연결을 통해 자연스럽게 확산됩니다.
- [출처: 앤드류 첸](https://andrewchen.com/how-to-solve-the-cold-start-problem-for-social-products/) | [출처: Bloomking](https://www.bloomking.com/resource-library/cold-start-problem)
|||9월|||
### 6.2 최초 포스터 장려

### 6.1 Solving the Cold Start Problem

**Andrew Chen's framework** (author of *The Cold Start Problem*):

1. **Build the atomic network first**: Don't try to scale a large network. Build the smallest workable network -- perhaps 20-50 parents from a single city or language group who know each other.

2. **Content seeding**: Reddit's founders posted with dozens of bot accounts to build momentum. For your app: create high-quality seed content (translated resource guides, FAQ posts, curated expert Q&A) before launch.

3. **"Come for the tool, stay for the network"**: Provide single-player value (autism resource directory, IEP template library, therapy tracker) that draws users in, then convert to community participation.

4. **Invite-only launch**: Like LinkedIn's strategy. Target a small group who invite similar people. Network proliferates naturally through trusted connections.
- [Source: Andrew Chen](https://andrewchen.com/how-to-solve-the-cold-start-problem-for-social-products/) | [Source: Bloomking](https://www.bloomking.com/resource-library/cold-start-problem)

### 6.2 Encouraging First-Time Posters

90-9-1 규칙: 90%는 숨어 있고, 9%는 가끔 기여하고, 1%는 대부분의 콘텐츠를 만듭니다. 더 잘 관리되는 커뮤니티는 55-25-20을 달성할 수 있습니다.
|||9월|||
**전략**:
- 가입 시 맞춤 환영 메시지
- 간단한 프롬프트가 포함된 "소개" 스레드("아이의 나이는 어떻게 됩니까? 여기에 오신 이유는 무엇입니까?")
- 쉬운 첫 번째 조치: 설문 조사에 응답, 게시물에 반응
- 주간 주제 토론 스레드("IEP 팁 화요일", "수요일 승리")
- 위협을 줄이기 위한 더 작은 언어별 하위 그룹
- 게임화: 첫 번째 게시물, 첫 번째 답변, 첫 주 연속 배지
- 개방형 질문으로 참여도가 최대 30%까지 향상됩니다.
- [출처: 담론 블로그](https://blog.discourse.org/2023/08/online-community-engagement-understanding-lurkers/) | [출처: Bettermode](https://bettermode.com/blog/lurkers-online-communities) | [출처: 하이어 로직](https://www.higherlogic.com/blog/online-community-engagement-tactics/)
|||9월|||
### 6.3 콘텐츠 시딩 전략
|||9월|||
포럼에 다음을 미리 입력하세요.
1. **리소스 가이드**는 상위 8개 언어(영어, 스페인어, 중국어, 아랍어, 한국어, 베트남어, 타갈로그어, 힌디어)로 번역되었습니다.
2. **주별 자폐증 서비스 디렉토리**
3. **이민 부모를 위한 IEP 가이드**(권리, 용어, 기대 사항)
4. **보험/메디케이드 탐색 가이드**
5. 치료사, 변호사, 옹호자의 사전 녹음된 Q&A가 포함된 **"전문가에게 물어보세요" 스레드**
6. **문화적 관점의 기사**(다른 문화권의 자폐증)
7. **부모님의 이야기** (협력기관의 허가를 받아 수집)
|||9월|||
### 6.4 성장을 위한 파트너십 전략
|||9월|||
이 집단에 서비스를 제공하는 기존 조직과 협력하십시오.
- Autism Society 지부(이미 Grupos de Apoyo en Espanol이 있음)
- TODEC(비영어 사용자를 위한 이민 법률 서비스)
- Grupo Salto (스페인 자폐증 가족 지원)
- LightHouse Arabia(아랍어 자폐증 지원)
- Charles B. Wang 지역사회 보건센터(중국 지역사회 보건)
- 한인 커뮤니티 단체(예: "Parents Take Action" 프로그램을 통해)
- [출처: 샌디에이고 자폐증 협회](https://www.autismsocietysandiego.org/programs/support-groups/) | [출처: 자폐증 협회 인랜드 엠파이어](https://ieautism.org/special-education-advocacy/)
|||9월|||
### 6.5 중요한 참여 지표
|||9월|||
- **활성화율**: 7일 이내에 첫 게시물을 작성한 신규 사용자의 %
- **연결 밀도**: 사용자당 평균 연결 수(최종 목표는 30개 이상)
- **재방문률**: 7일 이내에 재방문한 사용자의 %
- **응답률**: 하나 이상의 답변을 받은 게시물의 %
- **교차 언어 상호 작용**: 2개 이상의 언어 그룹 참가자와 스레드의 %
- **도움율**: 유용한 답변을 받은 질문의 %
- **첫 번째 응답까지의 시간**: 새 게시물이 답변을 받기까지 걸리는 시간

**Strategies**:
- Personalized welcome messages when joining
- "Introduction" thread with simple prompts ("What's your child's age? What brings you here?")
- Easy first actions: respond to a poll, react to a post
- Weekly themed discussion threads ("IEP Tips Tuesday", "Win Wednesday")
- Smaller language-specific sub-groups to reduce intimidation
- Gamification: badges for first post, first reply, first week streak
- Open-ended questions boost participation by up to 30%
- [Source: Discourse Blog](https://blog.discourse.org/2023/08/online-community-engagement-understanding-lurkers/) | [Source: Bettermode](https://bettermode.com/blog/lurkers-online-communities) | [Source: Higher Logic](https://www.higherlogic.com/blog/online-community-engagement-tactics/)

### 6.3 Content Seeding Strategy

Pre-populate the forum with:
1. **Resource guides** translated into top 8 languages (English, Spanish, Chinese, Arabic, Korean, Vietnamese, Tagalog, Hindi)
2. **State-by-state autism service directories**
3. **IEP guide for immigrant parents** (rights, terminology, what to expect)
4. **Insurance/Medicaid navigation guides**
5. **"Ask an Expert" threads** with pre-recorded Q&A from therapists, lawyers, advocates
6. **Cultural perspective articles** (autism in different cultures)
7. **Parent stories** (collected with permission from partner organizations)

### 6.4 Partnership Strategy for Growth

Partner with existing organizations that serve this population:
- Autism Society chapters (they have Grupos de Apoyo en Espanol already)
- TODEC (immigration legal services for non-English speakers)
- Grupo Salto (Spanish autism family support)
- LightHouse Arabia (Arabic autism support)
- Charles B. Wang Community Health Center (Chinese community health)
- Korean American community organizations (e.g., through "Parents Taking Action" program)
- [Source: Autism Society San Diego](https://www.autismsocietysandiego.org/programs/support-groups/) | [Source: Autism Society Inland Empire](https://ieautism.org/special-education-advocacy/)

### 6.5 Engagement Metrics That Matter

- **Activation rate**: % of new users who make first post within 7 days
- **Connection density**: Average connections per user (aim for 30+ eventually)
- **Return rate**: % of users who return within 7 days
- **Response rate**: % of posts that receive at least one reply
- **Cross-language interaction**: % of threads with participants from 2+ language groups
- **Help rate**: % of questions that receive a helpful answer
- **Time to first response**: How long before a new post gets a reply

---
|||9월|||
## 7. 법적 고려사항
|||9월|||
### 7.1 섹션 230 보호
|||9월|||
230조에는 "대화형 컴퓨터 서비스의 제공자 또는 사용자는 다른 정보 콘텐츠 제공자가 제공한 정보의 게시자 또는 발표자로 취급되어서는 안 됩니다."라고 명시되어 있습니다.
|||9월|||
**주요 고려사항**:
- 섹션 230은 제3자 콘텐츠에 대한 광범위한 면제를 제공합니다.
- **위험**: 서비스 약관에 콘텐츠 조정을 약속한 경우 이를 이행하지 않을 경우 책임을 져야 할 수 있습니다. 법원(특히 제9순회 법원)은 회사 약관을 독립적인 의무로 시행하려는 의지를 보여주었습니다.
- **해결책**: 구속력 있는 약속("우리는...")보다는 주의 사항("우리는...을 위해 노력합니다")을 담은 열망적인 언어를 사용합니다. 명확한 면책조항을 포함하세요.
- [출처: Bloomberg Law](https://news.bloomberglaw.com/us-law-week/take-another-look-at-your-terms-of-use-and-section-230-immunity) | [출처: EFF](https://www.eff.org/issues/cda230)
|||9월|||
### 7.2 의료 면책 조항
|||9월|||
모든 건강 관련 토론 영역에는 다음이 표시되어야 합니다.
1. "정보는 교육 목적으로만 제공되며 전문적인 의학적 조언을 대체할 수 없습니다."
2. "진단이나 치료는 전문의와 상담하세요"
3. "이 플랫폼을 사용한다고 해서 의사-환자 관계가 확립되는 것은 아닙니다."
4. "모든 정보를 독립적으로 검증"
|||9월|||
**배치**: 건강 관련 카테고리 상단, 게시물 구성 UI 내, 서비스 약관 내.
- [출처: Termly](https://termly.io/resources/articles/medical-disclaimer-examples/) | [출처: 웹사이트 정책](https://www.websitepolicies.com/blog/medical-disclaimer)

## 7. Legal Considerations

### 7.1 Section 230 Protections

Section 230 states: "No provider or user of an interactive computer service shall be treated as the publisher or speaker of any information provided by another information content provider."

**Key considerations**:
- Section 230 provides broad immunity for third-party content
- **DANGER**: If your Terms of Service promise to moderate content, you may be liable if you fail to do so. Courts (especially Ninth Circuit) have shown willingness to enforce company Terms as independent duties.
- **Solution**: Use aspirational language with caveats ("we strive to...") rather than binding promises ("we will..."). Include clear disclaimers.
- [Source: Bloomberg Law](https://news.bloomberglaw.com/us-law-week/take-another-look-at-your-terms-of-use-and-section-230-immunity) | [Source: EFF](https://www.eff.org/issues/cda230)

### 7.2 Medical Disclaimers

Every health-related discussion area must display:
1. "Information is for educational purposes only, not a substitute for professional medical advice"
2. "Consult a medical professional for diagnoses or treatment"
3. "Using this platform does not establish doctor-patient relationships"
4. "Verify all information independently"

**Placement**: At top of health-related categories, within post composition UI, and in Terms of Service.
- [Source: Termly](https://termly.io/resources/articles/medical-disclaimer-examples/) | [Source: WebsitePolicies](https://www.websitepolicies.com/blog/medical-disclaimer)

### 7.3 COPPA 준수
|||9월|||
부모는 자녀에 대해 토론할 것이기 때문에:
- 만 13세 미만 아동의 개인정보를 수집하지 않습니다.
- 아동의 실명, 사진, 학교 이름, 치료사 이름, 특정 위치 정보 공유를 금지하는 규칙을 구현합니다.
- 정식 정보보안 프로그램 필요
- 연간 데이터 보안 평가
- 엄격한 데이터 보관 및 삭제 정책
- 벌금: 위반당 최대 $43,280
- [출처: Kiteworks](https://www.kiteworks.com/risk-compliance-glossary/coppa-childrens-online-privacy-protection-act/) | [출처: Usercentrics](https://usercentrics.com/knowledge-hub/coppa-compliance/)
|||9월|||
### 7.4 GDPR 및 국제 데이터 보호
|||9월|||
- GDPR은 EU에 기반을 두고 있지 않더라도 EU 시민의 데이터를 처리하는 모든 비즈니스에 적용됩니다.
- 얼굴이 포함된 사용자 제작 콘텐츠 = 개인정보
- 플랫폼 책임: 콘텐츠를 구성, 분류 및 관리하는 경우 귀하는 "컨트롤러"입니다.
- 국가 간 데이터 전송에 표준 계약 조항(SCC)을 사용합니다.
- 구현: 삭제 권한, 데이터 이동성, 동의 관리, 개인 정보 영향 평가
- [출처: GDPR 정보](https://gdpr-info.eu/) | [출처: 텀즈피드](https://www.termsfeed.com/blog/legal-issues-user-generated-content/)
|||9월|||
### 7.5 서비스 약관 권장 사항
|||9월|||
연구에 따르면 ToS에는 다음이 포함되어야 합니다.
1. 의료 면책조항(영원적, 구속력 없음)
2. 커뮤니티 가이드라인(시행 가능)
3. 콘텐츠 소유권 및 라이선스(사용자는 저작권을 보유하고 플랫폼 디스플레이 라이선스 부여)
4. 데이터 개인정보 보호정책(COPPA + GDPR 준수)
5. 중재 조항
6. 연령 요건(계정 생성 시 13세 이상)
7. 금지된 콘텐츠 목록(위험한 대우, 신상 털기, 괴롭힘, 아동 착취)
8. 책임의 제한
9. 분쟁 해결 절차
10. 이민 신분 보호 조항(플랫폼은 이민 집행 기관과 사용자 데이터를 공유하지 않습니다)
|||9월|||
---
|||9월|||
## 8. 성공적인 다국어 플랫폼 사례 연구

Since parents will discuss their children:
- Do not collect personal information from children under 13
- Implement rules prohibiting sharing of children's: real names, photos, school names, therapist names, specific location details
- Formal information security program required
- Annual evaluation of data security
- Strict data retention and deletion policies
- Penalties: up to $43,280 per violation
- [Source: Kiteworks](https://www.kiteworks.com/risk-compliance-glossary/coppa-childrens-online-privacy-protection-act/) | [Source: Usercentrics](https://usercentrics.com/knowledge-hub/coppa-compliance/)

### 7.4 GDPR and International Data Protection

- GDPR applies to any business processing EU citizens' data, even if not based in EU
- User-generated content containing faces = personal data
- Platform responsibilities: you are a "controller" if you structure, categorize, and manage content
- Use Standard Contractual Clauses (SCCs) for cross-border data transfer
- Implement: right to deletion, data portability, consent management, privacy impact assessments
- [Source: GDPR Info](https://gdpr-info.eu/) | [Source: TermsFeed](https://www.termsfeed.com/blog/legal-issues-user-generated-content/)

### 7.5 Terms of Service Recommendations

Based on research, your ToS should include:
1. Medical disclaimer (aspirational, not binding)
2. Community guidelines (enforceable)
3. Content ownership and licensing (users retain copyright, grant platform display license)
4. Data privacy policy (COPPA + GDPR compliant)
5. Arbitration clause
6. Age requirement (13+ for account creation)
7. Prohibited content list (dangerous treatments, doxxing, harassment, child exploitation)
8. Limitation of liability
9. Dispute resolution process
10. Immigration status protection clause (platform will not share user data with immigration enforcement)

---

## 8. Successful Multilingual Platform Case Studies

### 8.1 위키피디아
|||9월|||
- 300개 이상의 언어 지원
- 콘텐츠 번역 도구(2015년 출시)는 사람의 검토를 통해 번역 프로세스를 자동화합니다.
- 도구를 통해 생성된 200만 개 이상의 기사
- 주요 통찰력: 영어 콘텐츠를 단순히 번역하는 것보다 영어가 아닌 언어로 독창적인 메시지를 작성하도록 장려합니다.
- 과제: 언어 버전 간 콘텐츠 가용성의 엄청난 차이
- [출처: 위키미디어 재단](https://diff.wikimedia.org/2025/05/08/a-decade-of-contant-improvements-to-the-content-translation-tool-yields-over-two-million-wikipedia-articles/) | [출처: 투데이 뉴스](https://salena.todaynews.co.uk/2025/01/31/wikipedias-approach-to-multilingualism/)
|||9월|||
### 8.2 스택 오버플로
|||9월|||
- 영어, 스페인어, 러시아어, 포르투갈어, 일본어로 제공됩니다.
- 브라질 개발자 커뮤니티가 빠르게 성장하고 유사한 알파벳이 현지화 작업을 최소화했기 때문에 포르투갈어로 시작했습니다.
- 각 지역 버전은 고유한 에티켓과 중재 접근 방식을 개발했습니다.
- 주요 통찰력: 확장하기 전에 먼저 하나 또는 두 가지 언어에 전념
- [출처: 스택 오버플로 블로그](https://stackoverflow.blog/2014/02/13/cant-we-all-be-reasonable-and-speak-english/) | [출처: Stack Overflow 블로그 팟캐스트](https://stackoverflow.blog/2020/10/27/podcast-281-the-story-behind-stack-overflow-in-russian/)
|||9월|||
### 8.3 듀오링고 커뮤니티
|||9월|||
- 지식 공유 포럼은 커뮤니티 참여를 위한 "그림 카드"였습니다.
- 인큐베이터(2013)에서는 이중 언어 회원이 강좌를 만들 수 있도록 허용하여 사용자를 기여자로 전환했습니다.
- 포럼은 2022년에 종료됩니다. 커뮤니티가 비공식 Discord로 이전되었습니다
- Duome 포럼 대체는 "다국어 자유"를 제공합니다. 어떤 언어로든 질문하세요.
- 주요 통찰력: 사용자 제작 콘텐츠와 이중 언어 자원봉사자는 강력한 커뮤니티 자산입니다.
- [출처: Social.Plus](https://www.social.plus/blog/duolinos-community-driven-journey-to-exponential-growth) | [출처: 듀오링고 위키](https://duolingo.fandom.com/wiki/Duolingo_Forum)
|||9월|||
### 8.4 WHO 다국어 의사소통
|||9월|||
- 6개 공식 언어(아랍어, 중국어, 영어, 프랑스어, 러시아어, 스페인어)
- 63개 이상의 언어로 번역된 출판물
- 다양한 언어 그룹에 맞게 신중하게 선택, 편집, 조정된 콘텐츠
- 대상 고객 분석을 기반으로 언어 결정
- 비상 프로토콜: 피해를 입은 사람들의 언어로 정보를 신속하게 생성
- 윤리 원칙: 언어적, 문화적으로 적절한 정보
- 앱에 대한 주요 통찰력: 항상 영어로 번역하는 대신 각 언어로 독창적인 콘텐츠를 만듭니다.
- [출처: WHO 다국어](https://www.who.int/about/policies/multilingualism) | [출처: WHO 이해할 수 있는 커뮤니케이션](https://www.who.int/about/communications/understandable/audiences-언어)

- Supports 300+ languages
- Content Translation tool (launched 2015) automates translation process with human review
- Over 2 million articles created via the tool
- Key insight: Encourages creating original messages in non-English languages rather than just translating English content
- Challenges: vast disparities in content availability between language editions
- [Source: Wikimedia Foundation](https://diff.wikimedia.org/2025/05/08/a-decade-of-consistent-improvements-to-the-content-translation-tool-yields-over-two-million-wikipedia-articles/) | [Source: Today News](https://salena.todaynews.co.uk/2025/01/31/wikipedias-approach-to-multilingualism/)

### 8.2 Stack Overflow

- Available in English, Spanish, Russian, Portuguese, Japanese
- Started with Portuguese because Brazilian developer community was growing fast and similar alphabet minimized localization work
- Each regional version developed its own etiquette and moderation approach
- Key insight: Committed to one or two languages first before expanding
- [Source: Stack Overflow Blog](https://stackoverflow.blog/2014/02/13/cant-we-all-be-reasonable-and-speak-english/) | [Source: Stack Overflow Blog Podcast](https://stackoverflow.blog/2020/10/27/podcast-281-the-story-behind-stack-overflow-in-russian/)

### 8.3 Duolingo Community

- Knowledge-sharing forum was a "drawcard" for community engagement
- Incubator (2013) allowed bilingual members to create courses -- transformed users into contributors
- Forum closed in 2022; community migrated to unofficial Discord
- Duome forum replacement offers "multilingual freedom" -- ask questions in any language
- Key insight: User-generated content and bilingual volunteers are powerful community assets
- [Source: Social.Plus](https://www.social.plus/blog/duolingos-community-driven-journey-to-exponential-growth) | [Source: Duolingo Wiki](https://duolingo.fandom.com/wiki/Duolingo_Forum)

### 8.4 WHO Multilingual Communication

- Six official languages (Arabic, Chinese, English, French, Russian, Spanish)
- Publications translated into 63+ languages
- Content carefully selected, edited, adapted for different linguistic groups
- Decisions on which language(s) based on target audience analysis
- Emergency protocol: quickly generate info in language(s) of affected people
- Ethical principle: linguistically and culturally appropriate information
- Key insight for your app: Create original content in each language rather than always translating from English
- [Source: WHO Multilingualism](https://www.who.int/about/policies/multilingualism) | [Source: WHO Understandable Communications](https://www.who.int/about/communications/understandable/audiences-language)

### 8.5 레딧 기계 번역
|||9월|||
- 35개 이상의 국가에 출시
- 사용자는 게시물과 댓글을 포함한 전체 피드를 번역할 수 있습니다.
- 언어장벽에 상관없이 참여가 가능합니다.
- 주요 통찰력: 원활한 번역(원클릭 또는 자동)이 채택에 중요합니다.
- [출처: PPC Land](https://ppc.land/reddit-expands-machine-translation-to-35-countries-boosting-global-access/)
|||9월|||
---
|||9월|||
## 중요한 구현 권장사항 요약
|||9월|||
### 최우선 기능
|||9월|||
1. **번역 레이어**: Supabase 트리거를 사용하여 데이터베이스 수준에서 통합된 Google Cloud Translation API입니다. 원본 + 번역 버전을 저장하세요. 다국어 검색을 위한 PGroonga.
|||9월|||
2. **안전 우선 조정**: 자동화된 1차 통과로서의 OpenAI 조정 API(무료, 다중 모드, 다국어) + Perspective API(무료, 18개 언어). 에스컬레이션을 위한 인간 중재자. 위험한 자폐증 "치료"에 대한 특정 키워드 차단 목록.
|||9월|||
3. **설계에 따른 익명성**: 실명 필요 없음, 전화 확인 없음, EXIF ​​제거, 식별 데이터가 소환될 수 없는 이민 안전 아키텍처.

- Rolled out to 35+ countries
- Users can translate their entire feed, including posts and comments
- Enables participation regardless of language barriers
- Key insight: Making translation seamless (one-click or automatic) is critical for adoption
- [Source: PPC Land](https://ppc.land/reddit-expands-machine-translation-to-35-countries-boosting-global-access/)

---

## Summary of Critical Implementation Recommendations

### Highest Priority Features

1. **Translation layer**: Google Cloud Translation API integrated at the database level with Supabase triggers. Store original + translated versions. PGroonga for multilingual search.

2. **Safety-first moderation**: OpenAI Moderation API (free, multimodal, multilingual) + Perspective API (free, 18 languages) as automated first pass. Human moderators for escalations. Specific keyword blocklists for dangerous autism "cures."

3. **Anonymity by design**: No real name required, no phone verification, EXIF stripping, immigration-safe architecture where no identifying data could be subpoenaed.

4. **신뢰 시스템**: 담론식 진보적 신뢰 수준. 신규 사용자가 샌드박스 처리되었습니다. 시간이 지남에 따라 특권을 얻었습니다. 전문가를 위한 전문가 검증 배지입니다.
|||9월|||
5. **또래 매칭**: 자녀 연령, 진단 프로필, 언어, 위치, 관심사별로 부모를 매칭하는 알고리즘입니다.
|||9월|||
### 기존 커뮤니티와 주요 차이점
|||9월|||
- **귀하의 앱이 격차를 메웁니다**: 기존 커뮤니티에서는 자폐 이민자 부모에게 실시간 번역 서비스를 제공하지 않습니다.
- **문화적 민감성**: Reddit/Facebook과 달리 처음부터 문화 간 상호 작용을 위해 설계되었습니다.
- **미등록 가족을 위한 안전**: 기존 플랫폼과 달리
- **통합 다국어 검색**: PGroonga에서는 모든 언어를 동시에 검색할 수 있습니다.
- **전문가 검증**: 누구나 전문성을 주장할 수 있는 Facebook 그룹과 달리
- **오보 방지**: 승인되지 않은 전문가로부터 "많은 잘못된 정보"가 흘러나오는 위챗 그룹과 달리
|||9월|||
### 권장 기술 스택
|||9월|||
| 레이어 | 기술 | 목적 |
|-------|------------|---------|
| 프론트엔드 | 반응 + 타입스크립트 | UI 프레임워크 |
| 백엔드/DB | 수파베이스(PostgreSQL) | 데이터베이스, 인증, 스토리지, 실시간 |
| 검색 | PGroonga 확장 | 다국어 전문 검색 |
| 번역 | Google 클라우드 번역 API | 130개 이상의 언어 |
| 중재 | OpenAI 조정 API + Perspective API | 자동화된 콘텐츠 안전 |
| 실시간 | Supabase 실시간(WebSocket) | 실시간 업데이트, 채팅 |
| 저장 | Supabase 스토리지 + CDN | 이미지, 미디어 |
| 알림 | Firebase 클라우드 메시징 | 푸시 알림 |
| 캐싱 | 반응 쿼리 + Redis | 성과 |
| OCR | 구글 클라우드 비전 API | 이미지 텍스트 번역 |

5. **Peer matching**: Algorithm matching parents by child age, diagnosis profile, language, location, and interests.

### Key Differentiators vs. Existing Communities

- **Your app fills a gap**: No existing community serves immigrant autism parents with real-time translation
- **Cultural sensitivity**: Unlike Reddit/Facebook, designed from the ground up for cross-cultural interaction
- **Safety for undocumented families**: Unlike any existing platform
- **Unified multilingual search**: PGroonga enables searching across all languages simultaneously
- **Expert verification**: Unlike Facebook groups where anyone can claim expertise
- **Misinformation prevention**: Unlike WeChat groups where "much incorrect information" flows from unauthorized experts

### Recommended Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React + TypeScript | UI framework |
| Backend/DB | Supabase (PostgreSQL) | Database, auth, storage, realtime |
| Search | PGroonga extension | Multilingual full-text search |
| Translation | Google Cloud Translation API | 130+ languages |
| Moderation | OpenAI Moderation API + Perspective API | Automated content safety |
| Real-time | Supabase Realtime (WebSocket) | Live updates, chat |
| Storage | Supabase Storage + CDN | Images, media |
| Notifications | Firebase Cloud Messaging | Push notifications |
| Caching | React Query + Redis | Performance |
| OCR | Google Cloud Vision API | Image text translation |
