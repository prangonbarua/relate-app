# 국제 자폐증 연구: Hackathon 앱에 대한 종합 개요
|||9월|||
## 1. 전 세계 자폐증 발병률 및 연구
|||9월|||
### WHO 글로벌 통계
|||9월|||
WHO는 전 세계적으로 대략 **어린이 100명 중 1명**이 자폐증을 앓고 있는 것으로 추산합니다. 그러나 이는 상당한 지역적 차이가 있는 평균 수치입니다. *The Lancet Psychiatry*(2024년 12월)에 발표된 2021년 전 세계 질병 부담 연구에서는 보다 최근 추정치를 제공합니다. **2021년에 전 세계적으로 6,180만 명이 자폐증을 앓았습니다. 이는 대략 **127명 중 1명**([PMC 체계적 검토](https://pmc.ncbi.nlm.nih.gov/articles/PMC11917377/); [WHO 사실 자료](https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders)).
|||9월|||
### 국가/지역별 보급률
|||9월|||
유병률은 지역에 따라 크게 다르며, 실제 자폐증 비율보다는 진단 능력에 따라 더 많이 좌우됩니다.
|||9월|||
| 지역/국가 | 보급률 | 메모 |
|---|---|---|
| **미국** | 어린이 36명 중 1명 | 전 세계적으로 가장 높은 보고율 |
| **한국** | 38명 중 1명(2.64%) | Kim 외의 랜드마크 2011 커뮤니티 선별 연구. ([예일뉴스](https://news.yale.edu/2011/05/09/prevalence-autism-south-korea-estimated-1-38-children)) |
| **캐나다** | 66명 중 1명 | |
| **북미(풀링)** | 1.01% | |
| **유럽(풀링)** | 0.73% | |
| **아시아(풀링)** | 0.41% | |
| **인도** | 250명 중 ~1명(0.09-0.11%) | 과소진단 가능성 |
| **중국** | 186명 중 ~1명 | 과소진단 가능성 |
| **사우디아라비아** | 1.7-1.8%(보정됨) | 공식 수치인 0.6%는 과소 집계된 것으로 간주됨 |
| **나이지리아** | ~2.3% | |
| **소말리아** | ~2.07% | |
|||9월|||
**앱에 대한 중요한 주의 사항**: 보고된 비율이 높을수록 일반적으로 자폐증이 더 많다는 것이 아니라 **더 나은 진단 인프라**를 의미합니다. 개발도상국의 낮은 발병률은 과소진단을 반영할 가능성이 높습니다. ([세계 인구 검토](https://worldpopulationreview.com/country-rankings/autism-rates-by-country); [PMC 3단계 메타 분석](https://pmc.ncbi.nlm.nih.gov/articles/PMC9947250/))

## 1. GLOBAL AUTISM PREVALENCE AND RESEARCH

### WHO Global Statistics

The WHO estimates that approximately **1 in 100 children** worldwide has autism, though this is an average figure with substantial regional variation. The Global Burden of Disease Study 2021, published in *The Lancet Psychiatry* (December 2024), provides a more recent estimate: **61.8 million people globally** were autistic in 2021, equivalent to approximately **1 in 127 individuals** ([PMC systematic review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11917377/); [WHO Fact Sheet](https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders)).

### Prevalence by Country/Region

Prevalence varies enormously by region, driven more by diagnostic capacity than actual rates of autism:

| Region/Country | Prevalence | Notes |
|---|---|---|
| **United States** | 1 in 36 children | Highest reported rate globally |
| **South Korea** | 1 in 38 (2.64%) | Landmark 2011 community screening study by Kim et al. ([Yale News](https://news.yale.edu/2011/05/09/prevalence-autism-south-korea-estimated-1-38-children)) |
| **Canada** | 1 in 66 | |
| **North America (pooled)** | 1.01% | |
| **Europe (pooled)** | 0.73% | |
| **Asia (pooled)** | 0.41% | |
| **India** | ~1 in 250 (0.09-0.11%) | Likely underdiagnosed |
| **China** | ~1 in 186 | Likely underdiagnosed |
| **Saudi Arabia** | 1.7-1.8% (calibrated) | Official figure of 0.6% considered an undercount |
| **Nigeria** | ~2.3% | |
| **Somalia** | ~2.07% | |

**Critical caveat for the app**: Higher reported rates generally indicate **better diagnostic infrastructure**, not more autism. Lower rates in developing nations likely reflect underdiagnosis. ([World Population Review](https://worldpopulationreview.com/country-rankings/autism-rates-by-country); [PMC three-level meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC9947250/))

### 진단 기준 차이점: DSM-5와 ICD-11
|||9월|||
두 가지 주요 진단 시스템이 전 세계적으로 사용됩니다.
|||9월|||
- **DSM-5**(미국 선호): 두 영역(사회적 의사소통 결함, 제한적/반복적 행동)에 걸쳐 특정 수와 기능의 조합이 필요합니다. 주로 북미에서 사용됩니다.
- **ICD-11**(WHO, 전 세계적으로 사용됨): 더 유연함 - 특정 수의 기능을 규정하지 않습니다. 임상의가 결정하도록 하세요. **문화적으로 더 민감함**: 어린이가 참여하는 놀이 유형(문화에 따라 다름)에 덜 중점을 두고 대신 어린이가 놀이에서 엄격한 규칙을 따르거나 부과하는지 여부에 중점을 둡니다. 또한 진단 기능으로 "이전에 습득한 기술의 상실"도 고유하게 포함됩니다. ([정신의학의 개척자](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.787893/full); [The 송신기](https://www.thetransmitter.org/spectrum/new-global-diagnostic-manual-mirrors-u-s-autism-criteria/); [공개 대학](https://www.open.edu/openlearn/mod/oucontent/view.php?id=66953&section=2.2))
|||9월|||
**앱 관련성**: ICD 사용 국가에서 온 부모는 진단 과정에 대해 서로 다른 이해를 가질 수 있습니다. DSM-5의 더욱 엄격한 기준은 낯설거나 지나치게 경직된 것처럼 느껴질 수 있습니다.
|||9월|||
### 최고의 자폐증 지원 시스템을 갖춘 국가
|||9월|||
주요 국가는 다음과 같습니다.
|||9월|||
1. **스웨덴** -- 개별화된 지원을 통한 모범적인 의료 및 교육 "교육적 차별화" 모델이 국제적으로 인정됨
2. **호주** -- 종합적인 연구, 조기 개입 프로그램 및 자폐증 친화적인 공공 공간
3. **캐나다** -- 정부 지원 의료 서비스, 포괄적인 교육, 강력한 주정부 자폐증 프로그램
4. **영국** -- 자폐증 평가 및 치료를 포함한 NHS 서비스; 교육 건강 및 의료 계획(EHCP)
5. **이스라엘, 네덜란드, 뉴질랜드, 싱가포르** -- 첨단 의료 부문으로도 인정
|||9월|||
([FS 자폐증 센터 순위](https://fsautismcen.org/2023/10/29/ranking-the-most-autism-friend-countries-in-the-world/); [PlacidWay 가이드](https://www.placidway.com/article/4295/7-Best-Countries-for-Autism-Treatment-in-2023))

Two main diagnostic systems are used globally:

- **DSM-5** (US-favored): Requires a specific number and combination of features across two domains (social communication deficits; restricted/repetitive behaviors). Used primarily in North America.
- **ICD-11** (WHO, used globally): More flexible -- does not stipulate a specific number of features; lets clinicians decide. **More culturally sensitive**: places less emphasis on the type of play children engage in (which varies by culture) and focuses instead on whether children follow/impose rigid rules in play. Also uniquely includes "loss of previously acquired skills" as a diagnostic feature. ([Frontiers in Psychiatry](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.787893/full); [The Transmitter](https://www.thetransmitter.org/spectrum/new-global-diagnostic-manual-mirrors-u-s-autism-criteria/); [Open University](https://www.open.edu/openlearn/mod/oucontent/view.php?id=66953&section=2.2))

**App relevance**: Parents coming from ICD-using countries may have a different understanding of the diagnostic process. The DSM-5's stricter criteria may feel unfamiliar or overly rigid.

### Countries with the Best Autism Support Systems

Leading countries include:

1. **Sweden** -- Exemplary healthcare and education with individualized support; "pedagogical differentiation" model is internationally recognized
2. **Australia** -- Comprehensive research, early intervention programs, and autism-friendly public spaces
3. **Canada** -- Government-funded healthcare, inclusive education, and strong provincial autism programs
4. **United Kingdom** -- NHS services including autism assessment and therapy; Education Health and Care Plans (EHCPs)
5. **Israel, Netherlands, New Zealand, Singapore** -- Also recognized for advanced care

([FS Autism Center rankings](https://fsautismcen.org/2023/10/29/ranking-the-most-autism-friendly-countries-in-the-world/); [PlacidWay guide](https://www.placidway.com/article/4295/7-Best-Countries-for-Autism-Treatment-in-2023))

### 지원이 가장 적은 국가
|||9월|||
사하라 이남 아프리카, 남아시아 일부, 중앙아메리카는 격차가 가장 심각합니다. 에티오피아에서는 서비스가 "부족하고 대부분 수도에 국한되어 있습니다." 아이티에서는 장애인을 "코코베이"(미친)라는 낙인이 찍히고 종종 배척당합니다. 유니세프는 **저소득 국가의 장애 아동 중 90%가 어떤 형태의 교육도 받지 못한 것으로 추정합니다**. ([유니세프](https://www.unicef.org/education/inclusive-education))
|||9월|||
---
|||9월|||
## 2. 지역별 심층 분석
|||9월|||
### 2.1 라틴아메리카(멕시코, 중앙아메리카, 남아메리카)
|||9월|||
**유병률 및 진단**:
- 라틴 아메리카에 거주하는 약 **600만 명의 자폐증 환자**
- 멕시코: 단 하나의 역학 연구(2016년, 과나후아토)에서만 **0.87%**의 유병률을 보고했습니다. 진단에는 평균 **27개월** 및 **3번의 전문적인 접촉**이 소요됩니다. 78%는 3세 이상에 정식 진단을 받고, 22%는 6세 이상에 정식 진단을 받습니다. ([MHIN Innovation](https://www.mhinnovation.net/blogs/early-Detection-and-intervention-children-autism-mexico))
- 미국의 라틴계 어린이는 비라틴계 백인 어린이보다 **2.5년 늦게** 진단을 받습니다.
|||9월|||
**문화적 이해**:
- 자폐증에 대한 이해를 형성하는 주요 문화적 가치: **familismo**(가족 중심), **espiritismo**(영성), **respeto**(권위에 대한 존중), **simpatia**(타인에 대한 동정)
- 일부 엄마들은 자폐증을 문화적 신념에 기인한다고 생각합니다: **mal de viento**(바람병), **susto**(공포), **mal de ojo**(사악한 눈/상처받은 시선) 또는 "신의 메시지"
- 스페인어로 "Autismo"는 종종 더 부드러운 의미를 전달합니다. 때로는 신경 발달 상태라기보다는 "위축되거나 부끄러워함"을 의미하는 것으로 간주되기도 합니다.
- 부모는 수치심 때문에 자폐아를 숨기고 공공장소나 놀이활동을 피하는 경우가 많다.
- ASD는 멕시코 문화에서 **부끄러운** 것으로 간주되며, ASD를 가진 사람들은 "거의 눈에 띄거나 언급되지 않습니다."
|||9월|||
**용어**:
- 형식: **Trastorno del Espectro Autista(TEA)** -- 자폐 스펙트럼 장애
- 공통: **자폐증**

Sub-Saharan Africa, parts of South Asia, and Central America have the most severe gaps. In Ethiopia, services are "scarce and largely confined to the capital city." In Haiti, people with disabilities are labeled "kokobay" (crazy) and often ostracized. UNICEF estimates **90% of children with disabilities in low-income countries have never received any form of education**. ([UNICEF](https://www.unicef.org/education/inclusive-education))

---

## 2. REGIONAL DEEP DIVES

### 2.1 LATIN AMERICA (Mexico, Central America, South America)

**Prevalence and Diagnosis**:
- Approximately **6 million individuals with ASD** live in Latin America
- Mexico: Only one epidemiological study (2016, Guanajuato) reported prevalence of **0.87%**. Diagnosis takes on average **27 months** and **3 professional contacts**. 78% receive formal diagnosis at age 3 or later, 22% at age 6 or later ([MHIN Innovation](https://www.mhinnovation.net/blogs/early-detection-and-intervention-children-autism-mexico))
- Latino children in the US are diagnosed **2.5 years later** than non-Latino white children

**Cultural Understanding**:
- Key cultural values that shape autism understanding: **familismo** (family-centeredness), **espiritismo** (spirituality), **respeto** (respect for authority), **simpatia** (sympathy for others)
- Some mothers attribute autism to cultural beliefs: **mal de viento** (wind sickness), **susto** (fright), **mal de ojo** (evil eye/hurtful gaze), or as a "message from God"
- "Autismo" in Spanish often carries a softer connotation -- sometimes seen as meaning "withdrawn or shy" rather than a neurodevelopmental condition
- Parents frequently hide children with autism, avoiding public spaces and play activities due to shame
- ASD is seen as **shameful** in Mexican culture, and people with ASD "are rarely visible or mentioned"

**Terminology**:
- Formal: **Trastorno del Espectro Autista (TEA)** -- Autism Spectrum Disorder
- Common: **Autismo**

**주요 조직**:
- **PANAACEA**(자폐 스펙트럼 장애가 있는 아동, 청소년 및 성인을 위한 아르헨티나 프로그램) - 주요 연구 및 옹호 단체
- **Red Espectro Autista Latinoamerica (REAL)** -- 라틴 아메리카 6개국의 연구자/임상가 연합; 간병인 2,942명을 대상으로 설문조사 실시
- **Autism Speaks**에는 스페인어 자료가 있습니다.
- **NIMH**는 스페인어("Trastornos del espectro autista")로 자료표를 제공합니다.
- **MedlinePlus en Español**에는 자폐증 관련 자료가 있습니다.
|||9월|||
**장벽**: 대기자 명단(간병인의 50.2%가 이를 보고함), 치료 비용(35.2%), 전문 서비스 부족(26.1%)
|||9월|||
**멕시코에만 해당**: La Ley General para la Atencion y Proteccion a Personas con la Condicion del Espectro Autista(ASD 환자 보호 및 관리에 관한 일반법)가 존재하지만 서비스는 여전히 제한적이고 민영화되어 있으며 종종 감당할 수 없는 수준입니다.
|||9월|||
([PMC 장벽 연구](https://pmc.ncbi.nlm.nih.gov/articles/PMC9584143/); [PMC 개념화 연구](https://pmc.ncbi.nlm.nih.gov/articles/PMC4180801/); [AWN 네트워크](https://awnnetwork.org/autism-in-latin-american-communities/); [Sage 저널 진단 연령](https://journals.sagepub.com/doi/10.1177/13623613221147345))
|||9월|||
---
|||9월|||
### 2.2 동아시아(중국, 필리핀, 베트남, 한국)
|||9월|||
**중국**:
- 보급률: 186명 중 ~1명(낮게 집계되었을 가능성 있음)
- **문화적 틀**: 자폐증을 '발달 장애가 아니라 시간이 지나면 치료할 수 있는 전염병'으로 보는 사람들이 많아 부모를 비난하기도 합니다. 유교 전통은 성취, 예의, 적절한 행동을 강조합니다. 자폐증 관련 행동은 **가족에게 수치심을 불러일으킵니다**
- **전통 중국 의학(TCM)**: TCM 틀에 따른 자폐증은 서양 진단으로는 존재하지 않습니다. 대신에 **"5가지 지연 증후군"**(서기, 걷기, 모발 성장, 치아 맹출 및 말하기의 지연)으로 분류됩니다. 침술과 투이나 마사지가 일반적으로 사용됩니다. 일부 약초 연구에 따르면 기존 치료법과 병용하면 아동 자폐증 평가 척도 점수가 향상되는 것으로 나타났습니다.
- 구어체 용어: **"laizi xingxing de haizi"** (来自性星的孩子) = "별에서 온 아이"
|||9월|||
**한국**:
- 유병률: 2011년 기준 2.64% Kim et al. 지역 사회 연구 -- 4분의 3은 일반 학교에 다니고 있음에도 불구하고 **이전에 진단받은 적이 없음**
- **"경계 아동" 개념**: 부모와 임상의는 증상을 일시적인 어려움으로 간주하여 어린이를 "경계 아동"이라고 부르는 것을 선호합니다. 전문가들은 때때로 자폐증이라는 딱지를 피하기 위해 심각도를 경시합니다.
- **체면 유지에 대한 낙인**: 각 개인은 전체 가족을 대표합니다. 장애는 "가족 전체에 대한 위협이자 치욕"입니다. 교회 지도자들은 한국인들이 장애가 있는 가까운 가족과 결혼하는 것을 피할 수도 있다고 지적합니다. 한국 엄마들은 자폐증이라는 꼬리표가 "회복이 아닌 만성화를 의미한다"는 이유로 두려워한다.
- 한국어 용어: **자폐증 (japyejeung)**

**Barriers**: Waiting lists (50.2% of caregivers reported this), treatment costs (35.2%), and lack of specialized services (26.1%)

**Mexico-specific**: La Ley General para la Atencion y Proteccion a Personas con la Condicion del Espectro Autista (General Law for the Protection and Care of Persons with ASD) exists, but services remain limited and privatized, often unaffordable

([PMC barriers study](https://pmc.ncbi.nlm.nih.gov/articles/PMC9584143/); [PMC conceptualization study](https://pmc.ncbi.nlm.nih.gov/articles/PMC4180801/); [AWN Network](https://awnnetwork.org/autism-in-latin-american-communities/); [Sage Journals diagnosis age](https://journals.sagepub.com/doi/10.1177/13623613221147345))

---

### 2.2 EAST ASIA (China, Philippines, Vietnam, Korea)

**China**:
- Prevalence: ~1 in 186 (likely undercount)
- **Cultural framing**: Many view autism "not as a developmental disorder, but as a contagious disease that is caught and can be cured over time," leading to parents being blamed. Confucian traditions emphasize achievement, good manners, and appropriate behavior; autism-related behaviors bring **shame on families**
- **Traditional Chinese Medicine (TCM)**: Autism in the TCM framework does not exist as a Western diagnosis; instead it is classified under the **"Syndrome of 5 Delays"** (delays in standing, walking, hair growth, teeth eruption, and speech). Acupuncture and Tuina massage are commonly used. Some herbal medicine studies show improved Childhood Autism Rating Scale scores when combined with conventional therapy
- Colloquial term: **"laizi xingxing de haizi"** (来自星星的孩子) = "child from the stars"

**South Korea**:
- Prevalence: 2.64% in landmark 2011 Kim et al. community study -- three-quarters had **never been previously diagnosed** despite attending mainstream schools
- **"Border child" concept**: Parents and clinicians prefer to call children a "border child," framing symptoms as temporary difficulties. Professionals sometimes downplay severity to avoid the autism label
- **Stigma around saving face**: Each individual represents the whole family; disability is "a threat and disgrace on the whole family." Church leaders note Koreans might avoid marrying someone with a close family member with disability. Korean mothers fear the label of autism because it "implies chronicity as opposed to recovery"
- Korean term: **자폐증 (japyejeung)**

**필리핀**:
- **필리핀 자폐증 협회(ASP)** 1989년 설립 -- 97개 지부에 걸쳐 13,000명의 회원
- 정부는 **국가 자폐증 의식 주간**(1월 셋째 주)을 인정합니다.
- 보건부는 국가 ASD 계획을 수립할 의무가 있습니다.
- ASP는 가족 지원 그룹, 교육, 조기 발견 컨설팅 및 무료 지역사회 기반 치료를 제공합니다.
|||9월|||
**베트남**:
- 유병률: ~0.758%(어린이 132명 중 1명)
- 부모들은 ASD를 "장애"보다는 **"질병"으로 지칭하는 것을 선호하여 치료 가능성을 강조합니다.
- 훈련된 정신건강 전문가의 심각한 부족
|||9월|||
**지역 전체의 일반적인 문화적 요인**: 사회적 화합이라는 유교적 가치에 영향을 받은 낙인; "얼굴"(chemyon/mianzi)이 가장 중요합니다. 가족들은 깊은 수치심을 경험한다
|||9월|||
([Wikipedia: 중국의 자폐증](https://en.wikipedia.org/wiki/Autism_in_China); [PMC 동남아시아 리뷰](https://pmc.ncbi.nlm.nih.gov/articles/PMC10973561/); [Autism Society Philippines](http://www.autismsocietyphilippines.org/); [ResearchGate: Border 아동](https://www.researchgate.net/publication/260139828_Border_Children_Interpreting_Autism_Spectrum_Disorder_in_South_Korea); [PMC 한인 이민자 어머니들](https://pmc.ncbi.nlm.nih.gov/articles/PMC11549211/))
|||9월|||
---
|||9월|||
### 2.3 남아시아(인도, 파키스탄, 방글라데시)
|||9월|||
**인도**:
- 약 **500만 명 이상의 자폐인**이 살고 있는 곳입니다. 보급률 0.09-0.11%
- 심각한 도시-농촌 격차: 전문가가 도시에 집중됨
- **AFA(Action for Autism)** -- 남아시아에서 자폐증 운동을 개척했습니다. 평생 활동(조기 개입, 교육, 평가, 취업, 독립 생활)을 수행합니다. 인도와 인근 국가에서 250회 이상의 교육 워크숍을 실시하여 15,000명 이상의 부모 및 전문가를 교육했습니다.
- **인도는 자체 선별 도구를 개발했습니다**: ISAA(Indian Scale for Assessment of Autism), 민감도 98%, 특이도 95%의 INCLEN Diagnostic Tool(INDT-ASD), 저문해 인구를 위한 그림 자폐증 평가 일정(PAAS), CASI(Chandigarh Autism Screening Instrument), IASQ(Indian Autism Screening Questionnaire) 등
- **Ayurveda**는 엄격한 임상 검증이 여전히 필요하지만 ASD의 복잡한 특성에 맞춰 전체론적/개별화된 접근 방식을 제공합니다.
- **PASS 개입**(남아시아의 자폐 스펙트럼 장애에 대한 부모 중재 개입): 증거 기반, 영국의 PACT 프로그램에서 문화적으로 적용되었으며 비전문가 의료 종사자가 제공합니다. 부모-자녀 의사소통이 크게 향상되었습니다. 현재 인도 도시 지역으로 확장 중
|||9월|||
**파키스탄**:
- **파키스탄 자폐증 협회(ASP)**는 2010년에 ASD 옹호, 기금 모금, 훈련 및 연구를 위한 국가 우산 조직으로 등록되었습니다.
- 서비스가 매우 제한적입니다. 도시 지역에 집중된 전문 진료

**Vietnam**:
- Prevalence: ~0.758% (1 in 132 children)
- Parents prefer to refer to ASD as a **"disease" rather than "disorder"** -- emphasizing the possibility of a cure
- Significant shortages of trained mental health professionals

**General cultural factors across the region**: Stigma influenced by Confucian values of social harmony; "face" (chemyon/mianzi) is paramount; families experience profound shame

([Wikipedia: Autism in China](https://en.wikipedia.org/wiki/Autism_in_China); [PMC Southeast Asia review](https://pmc.ncbi.nlm.nih.gov/articles/PMC10973561/); [Autism Society Philippines](http://www.autismsocietyphilippines.org/); [ResearchGate: Border Children](https://www.researchgate.net/publication/260139828_Border_Children_Interpreting_Autism_Spectrum_Disorder_in_South_Korea); [PMC Korean immigrant mothers](https://pmc.ncbi.nlm.nih.gov/articles/PMC11549211/))

---

### 2.3 SOUTH ASIA (India, Pakistan, Bangladesh)

**India**:
- Home to an estimated **5+ million autistic individuals**; prevalence 0.09-0.11%
- Significant urban-rural divide: specialists concentrated in cities
- **Action for Autism (AFA)** -- pioneered the autism movement in South Asia; conducts lifespan activities (early intervention, education, assessments, employment, independent living). Has conducted 250+ training workshops, training 15,000+ parents and professionals across India and neighboring countries
- **India has developed its own screening tools**: ISAA (Indian Scale for Assessment of Autism), INCLEN Diagnostic Tool (INDT-ASD) with 98% sensitivity and 95% specificity, Pictorial Autism Assessment Schedule (PAAS) for low-literacy populations, Chandigarh Autism Screening Instrument (CASI), Indian Autism Screening Questionnaire (IASQ), and others
- **Ayurveda** offers a holistic/individualized approach aligned with the complex nature of ASD, though rigorous clinical validation is still needed
- **PASS intervention** (Parent-mediated intervention for Autism Spectrum disorders in South Asia): Evidence-based, culturally adapted from the UK's PACT program, delivered by non-specialist health workers. Showed significant improvements in parent-child communication. Currently being scaled up in urban India

**Pakistan**:
- **Autism Society of Pakistan (ASP)** registered in 2010 as a national umbrella organization for ASD advocacy, fundraising, training, and research
- Very limited services; specialist care concentrated in urban areas

**방글라데시**:
- 1990년부터 다카 병원에서 개발된 서비스 **SWAC**(자폐 아동 복지 협회), **자폐 복지 재단**, **PROYASH**와 같은 조직은 2000년부터 등장했습니다.
- 자폐증 관련 도구를 포함하도록 조정된 지역사회 보건 종사자 모델(인도의 ASHA 등)
- 방글라데시는 낙인을 줄이기 위해 지역 지도자, 교사, 보건 종사자가 참여하는 지역 사회 교육 캠페인을 활용했으며 성공적인 모델로 꼽혔습니다.
|||9월|||
**지역 전체의 주요 과제**: 남아시아 인구의 1.4%가 영향을 받았지만 의료 서비스를 받을 수 있는 사람은 거의 없습니다. 가족과 일선 의료 서비스 제공자의 인식 부족; 상당한 낙인과 차별; 전문 서비스가 드물고 도시에 집중되어 있음
|||9월|||
([인도 자폐증을 위한 조치](https://www.autism-india.org/about-us.php); [PASS Plus](https://www.mhinnovation.net/innovations/parent-mediate-intervention-autism-spectrum-disorders-south-asia-plus-pass-plus); [PMC INCLEN 도구](https://pmc.ncbi.nlm.nih.gov/articles/PMC5296629/); [독립 BD](https://www.theindependentbd.com/magazine/details/40313/Autism-awareness-in-Bangladesh-and-its-challenges))
|||9월|||
---
|||9월|||
### 2.4 중동 및 북아프리카
|||9월|||
**장애에 대한 이슬람의 관점**:
- 어린이는 알라의 축복과 신뢰로 간주됩니다. 자폐증 아동은 "자신만의 장점을 지닌 독특한 개인"으로 간주됩니다.
- 장애를 “하나님의 형벌이 아니라 시험이자 보상을 얻기 위한 수단”으로 본다.
- 많은 이슬람 조직에서는 자폐인을 위한 **감각 친화적인 기도 공간**과 **꾸란 수업**을 개발했습니다.
- **그러나**: 실제로는 심각한 낙인이 지속됩니다. **진 빙의, 흑마법, 사악한 눈**에 대한 문화적 믿음으로 인한 혼란으로 인해 가족이 고립되는 경우가 많습니다.
|||9월|||
**걸프만 주**:
- 사우디아라비아: 유병률은 1.7~1.8%(공식 추정치는 0.6%로 낮은 것으로 간주)입니다. 걸프만 국가 전체에서 약 187,000명의 20세 미만 청소년이 ASD를 앓고 있습니다. 사우디아라비아 최초의 자폐증 센터가 아랍 세계의 선도적인 시설로 제다에 다시 문을 열었습니다.
- 카타르: 발병률 ~1.1%; 일부 보고서에서는 10,000건당 151건
- UAE: ~0.6%
- 대부분의 센터에서는 DSM-5 기준에 따라 ADI-R 또는 ADOS 진단 도구를 사용합니다.
|||9월|||
**주요 과제**:
- 적절하게 훈련된 전문가 부족(특히 이집트)
- 미국 부모들은 아랍 국가(2.5)에 비해 진단 과정에 대한 만족도(중간값 3.0)가 더 높다고 보고합니다.
- 주요 장벽: 대중 인식 부족; 자폐증 센터 찾기

**Key challenges across the region**: 1.4% of South Asian population affected but very few have access to healthcare; poor awareness among families and frontline health providers; considerable stigma and discrimination; specialist services rare and urban-concentrated

([Action for Autism India](https://www.autism-india.org/about-us.php); [PASS Plus](https://www.mhinnovation.net/innovations/parent-mediated-intervention-autism-spectrum-disorders-south-asia-plus-pass-plus); [PMC INCLEN tool](https://pmc.ncbi.nlm.nih.gov/articles/PMC5296629/); [Independent BD](https://www.theindependentbd.com/magazine/details/40313/Autism-awareness-in-Bangladesh-and-its-challenges))

---

### 2.4 MIDDLE EAST AND NORTH AFRICA

**Islamic Perspective on Disability**:
- Children are considered a blessing and trust from Allah; children with autism are viewed as "unique individuals with their own strengths"
- Disability is viewed as "not a punishment from God, but rather a test and a means to gain rewards"
- Many Islamic organizations have developed **sensory-friendly prayer spaces** and **Quran classes** adapted for autistic individuals
- **However**: significant stigma persists in practice. Confusion amid cultural beliefs about **jinn possession, black magic, and the evil eye** often leave families isolated

**Gulf States**:
- Saudi Arabia: Prevalence likely 1.7-1.8% (official estimate of 0.6% considered low). An estimated **187,000 youths under 20** have ASD across Gulf countries. Saudi Arabia's first autism center was relaunched in Jeddah as a leading facility in the Arab world
- Qatar: Prevalence ~1.1%; 151 cases per 10,000 in some reports
- UAE: ~0.6%
- Most centers use ADI-R or ADOS diagnostic tools with DSM-5 criteria

**Key Challenges**:
- Dearth of adequately trained professionals (especially in Egypt)
- US parents report higher satisfaction with diagnostic process (median 3.0) vs. Arab countries (2.5)
- Main barriers: lack of public awareness; finding autism centers

**아랍어 용어**: ASD는 일반적으로 아랍어로 지칭됩니다. Autism Speaks와 같은 조직의 아랍어 리소스가 존재합니다.
|||9월|||
([Al Jazeera](https://www.aljazeera.com/features/2014/4/15/tackling-autism-in-the-middle-east); [이슬람에 대한 ABA 발견](https://www.discoveryaba.com/aba-therapy/islam-and-autism); [아랍 뉴스](https://www.arabnews.com/node/1476196/middle-east); [PMC 걸프 국가 리뷰](https://pmc.ncbi.nlm.nih.gov/articles/PMC4727667/))
|||9월|||
---
|||9월|||
### 2.5 사하라 이남 아프리카(나이지리아, 에티오피아, 소말리아)
|||9월|||
**일반**:
- 유병률은 다른 지역과 유사할 것으로 추정되나, 대규모로 과소진단되고 있음
- 낮은 인식, 부적절한 진단 도구, 정신 건강 낙인이 주요 장벽입니다.
- 부모는 자폐증을 **생의학적 요인과 초자연적/종교적 요인**에 모두 기인한다고 생각합니다.
- 자폐아동과 그 가족은 배제, 낙인, 부정적인 판단을 경험한다.
|||9월|||
**나이지리아**:
- 보고된 유병률: ~2.3%(사회경제적 요인, 빈곤, 문화적 신념을 반영할 수 있음)
- 남아프리카공화국과 나이지리아 모두 자폐증에 대한 인식이 높아짐에 따라 "가면이 벗겨지는" 모습을 보이고 있습니다.
|||9월|||
**에티오피아**:
- 서비스가 "부족하고 대부분 수도에 국한"되어 있으며 농촌 지역에는 거의 제공되지 않습니다.
- 전문의료인력 부족이 심각
|||9월|||
**소말리아/소말리아 디아스포라**:
- **놀라운 발견**: 미네소타의 소말리아 4세 어린이 16명 중 1명은 자폐증을 앓고 있습니다(동급생의 경우 53명 중 1명). 소말리아인은 미니애폴리스 공립학교 인구의 6%이지만 자폐증으로 분류된 유아 특수교육 학생의 17%입니다.
- 소말리아어에는 역사적으로 **"자폐증"이라는 단어가 없었습니다** -- 이러한 언어적 격차는 낙인과 오해를 불러일으킵니다
- 새로운 긍정적인 용어 개발: **"Maangaar"** = "독특한 마음" -- 긍정적인 프레임을 제공하기 위해 만들어졌습니다.
- 대부분의 소말리아 부모들은 자폐증이 **홍역 백신**으로 인해 발생했다고 믿습니다.
- **소말리아 부모 자폐증 네트워크(SPAN)**는 가족을 교육하고 자원과 연결하기 위해 소말리아계 미국인 이민자 부모가 2014년에 설립했습니다.
- **AuSM(미네소타 자폐증 협회)**은 소말리아 공동체를 대상으로 하는 다문화 이니셔티브를 가지고 있습니다.

([Al Jazeera](https://www.aljazeera.com/features/2014/4/15/tackling-autism-in-the-middle-east); [Discovery ABA on Islam](https://www.discoveryaba.com/aba-therapy/islam-and-autism); [Arab News](https://www.arabnews.com/node/1476196/middle-east); [PMC Gulf States review](https://pmc.ncbi.nlm.nih.gov/articles/PMC4727667/))

---

### 2.5 SUB-SAHARAN AFRICA (Nigeria, Ethiopia, Somalia)

**General**:
- Prevalence estimated as similar to other regions, but massively underdiagnosed
- Low awareness, inadequate diagnostic tools, and mental health stigma are major barriers
- Parents attribute autism to both **biomedical and supernatural/religious factors**
- Children with autism and their families experience exclusion, stigma, and negative judgments

**Nigeria**:
- Reported prevalence: ~2.3% (may reflect socioeconomic factors, poverty, cultural beliefs)
- Both South Africa and Nigeria are seeing "unmasking" of autism as awareness increases

**Ethiopia**:
- Services are "scarce and largely confined to the capital city" with little provision in rural areas
- Shortage of specialized healthcare professionals is severe

**Somalia/Somali Diaspora**:
- **Stunning finding**: 1 in 16 Somali four-year-olds in Minnesota has autism (vs. 1 in 53 for classmates). Somalis are 6% of Minneapolis public school population but 17% of early childhood special education students labeled autistic
- The Somali language historically **had no word for "autism"** -- this linguistic gap contributes to stigma and misunderstanding
- New positive term developed: **"Maangaar"** = "unique mind" -- created to provide a positive framing
- Most Somali parents believe autism was caused by the **measles vaccine**
- **Somali Parents Autism Network (SPAN)** founded 2014 by Somali American immigrant parents to educate families and connect them with resources
- **AuSM (Autism Society of Minnesota)** has multicultural initiatives targeting the Somali community

([PMC 아프리카 검토](https://pmc.ncbi.nlm.nih.gov/articles/PMC10473371/); [PMC 사하라 이남 아프리카](https://pmc.ncbi.nlm.nih.gov/articles/PMC6858850/); [PMC 소말리아 지식 연구](https://pmc.ncbi.nlm.nih.gov/articles/PMC10851585/); [MPR 뉴스](https://www.mprnews.org/episode/2024/10/10/research-finds-1-in-16-somali-children-diagnosed-with-autism-two-times-more-than-state); 저널](https://sahanjournal.com/health/autism-somali-new-terminology-community-acceptance-minnesota/))
|||9월|||
---
|||9월|||
### 2.6 동유럽(러시아, 우크라이나, 폴란드)
|||9월|||
**러시아**:
- ASD 환자 수는 200,000~500,000명으로 추산됩니다. 공식 통계에 따르면 어린이 100명 중 1명 정도가 추정되지만, 많은 어린이가 진단되지 않거나 오진된 상태로 남아 있습니다.
- **소련의 유산**: 소련 시대에는 자폐증이 최소한으로 인정되었습니다. 아이들은 종종 **정신분열증, 지적 장애 또는 "발달 지체"로 오진되었습니다.** 특수 교육 접근법인 **defektologiya**(결함학)의 소련 전통은 서구 시스템과 다르게 장애 아동을 분류했습니다.
- 주요 기관: **Naked Heart Foundation**(마커스 자폐증 센터를 모델로 활동); **자폐증 문제의 기초**; **우리의 맑은 세상**; **러시아 자폐증 협회**
- ICD-10 채택은 진단 표준화의 이정표
- 자폐증 전문 자격을 갖춘 전문가의 심각한 부족
|||9월|||
**우크라이나**:
- 일반적으로 진단되지 않은 자폐 성인; 대부분의 전문 서비스는 비공개/유료 기반입니다.
- 소련 시대에는 장애 아동이 시설에 수용되거나 버려졌습니다. 독립 이후(1991년) **2011년**까지 많은 사람들이 집에 남아 있었고 학교에 다니는 사람은 거의 없었습니다**
- 전쟁으로 인해 서비스가 황폐화되었습니다. 주요 조직: **Child with Future**, **Ask an Autistic**(긴급 지원 제공), **"Ukraine autism help" Facebook 그룹**(Iryna Sergiyenko 제작)
- Autism-Europe은 전쟁으로 인해 난민이 된 자폐증 우크라이나인을 위한 구체적인 지원 계획을 수립했습니다.
|||9월|||
**폴란드**:
- **자폐증-폴란드 협회**는 우크라이나 난민을 포함한 자폐인과 가족의 통합을 돕습니다.
- **JiM 재단**(Lodz) - 자폐증 옹호 단체
- 최근 몇 년 동안 EU 자금 지원으로 서비스가 개선되었습니다.
|||9월|||
([자폐증 유럽 우크라이나](https://www.autismeurope.org/what-we-do/areas-of-action/support-for-autistic-people-in-ukraine/); [The Transmitter](https://www.thetransmitter.org/spectrum/researchers-advocates-rush-to-aid-autistic-ukrainians/); [Kids Club ABA 러시아](https://kidsclubaba.com/autism-in-russia-understanding-prevalence-challenges-and-support-systems/); [마커스 자폐증 센터](https://www.marcus.org/get-involved/testimonials/social-impact/meet-the-naked-heart-foundation))
|||9월|||
---

---

### 2.6 EASTERN EUROPE (Russia, Ukraine, Poland)

**Russia**:
- Estimated 200,000-500,000 individuals with ASD; official stats suggest ~1 in 100 children, but many remain undiagnosed/misdiagnosed
- **Soviet legacy**: During the Soviet era, autism was given minimal recognition; children were often **misdiagnosed with schizophrenia, intellectual disability, or "developmental delays."** The Soviet tradition of **defektologiya** (defectology) -- a special education approach -- categorized children with disabilities differently than Western systems
- Key organizations: **Naked Heart Foundation** (working with Marcus Autism Center as a model); **Foundation for Autism Problems**; **Our Sunny World**; **Russian Society for Autism**
- Adoption of ICD-10 was a milestone for standardized diagnosis
- Severe shortage of qualified professionals specializing in autism

**Ukraine**:
- Autistic adults generally undiagnosed; most specialized services are private/fee-based
- During Soviet era, children with disabilities were institutionalized or abandoned; post-independence (1991), many remained at home with few attending school until **2011**
- War has devastated services. Key organizations: **Child with Future**, **Ask an Autistic** (delivering emergency aid), **"Ukraine autism help" Facebook group** (created by Iryna Sergiyenko)
- Autism-Europe has mounted specific support initiatives for autistic Ukrainians displaced by war

**Poland**:
- **Autism-Poland Association** helps integrate autistic people and families, including Ukrainian refugees
- **JiM Foundation** (Lodz) -- autism advocacy organization
- EU funding has improved services in recent years

([Autism Europe Ukraine](https://www.autismeurope.org/what-we-do/areas-of-action/support-for-autistic-people-in-ukraine/); [The Transmitter](https://www.thetransmitter.org/spectrum/researchers-advocates-rush-to-aid-autistic-ukrainians/); [Kids Club ABA Russia](https://kidsclubaba.com/autism-in-russia-understanding-prevalence-challenges-and-support-systems/); [Marcus Autism Center](https://www.marcus.org/get-involved/testimonials/social-impact/meet-the-naked-heart-foundation))

---

### 2.7 아이티와 카리브해
|||9월|||
**자폐증 인식**:
- 인식 및 서비스가 극히 제한적임
- **"코코베이"**(미친) 낙인이 찍힌 장애인, 학교와 교회에서 배척당하고 때로는 버림받는 사람들
- 부모는 종종 **부끄러움을 당하고 Vodou 또는 신의 저주를 받은 것으로 간주됩니다**
|||9월|||
**Vodou 및 영적 신념**:
- **Vodou 사제(Hougans)와 여사제(Mambos)**는 가톨릭 및 개신교 성직자와 함께 아이티의 **정신 건강 관리의 대부분**을 담당합니다.
- 발달상의 차이는 신경발달적 조건보다는 영적인 원인에 기인할 수 있습니다.
- 모든 앱은 이러한 신념을 인정하고 정중하게 탐색해야 합니다.
|||9월|||
**자원 및 조직**:
- **Autism509** -- 2015년에 설립된 비영리 단체로 전 세계 아이티 부모에게 자폐 아동 양육을 위한 자원을 연결하는 데 전념하고 있습니다.
- **장애 아동 연맹**은 아이티 크리올어로 자료를 제공합니다.
- **FAU(Florida Atlantic University) CARD 프로그램** 아이티 지역사회의 자폐증 지원
- 일부 아이티 부모는 언어 격차를 해소하기 위해 해당 주에서 **최초로 국가 공인 아이티 크리올어 의료 통역사**가 되었습니다.
|||9월|||
**아이티 크리올어 자료**:
- 통역 서비스는 아이티 크리올어(프랑스어와 여러 아프리카 언어의 혼합)가 우선적으로 사용되어야 합니다.
- 문화적으로 민감한 서비스는 **아이티 크레올어와 프랑스어**로 정보를 제공해야 합니다.
|||9월|||
([FAU CARD](https://www.fau.edu/education/centersandprograms/card/newsevents/autism-in-the-haitian-community/); [Haitian Times](https://haitiantimes.com/2021/04/02/haitian-moms-of-autistic-kids-aim-to-remove-stigma-get-services/); [PMC Vodou 정신 건강](https://pmc.ncbi.nlm.nih.gov/articles/PMC6880247/); [FCSN 아이티 크리올어](https://fcsn.org/resources/parents-families/haitian-creole/))
|||9월|||
---
|||9월|||
## 3. 국제 모범 사례

**Autism Awareness**:
- Extremely limited awareness and services
- People with disabilities labeled **"kokobay"** (crazy), ostracized from school and church, sometimes abandoned
- Parents are often **shamed and seen as either cursed by Vodou or by God**

**Vodou and Spiritual Beliefs**:
- **Vodou priests (Hougans) and priestesses (Mambos)**, along with Catholic and Protestant clergy, are responsible for the **majority of mental health care** in Haiti
- Developmental differences may be attributed to spiritual causes rather than neurodevelopmental conditions
- Any app must acknowledge and respectfully navigate these beliefs

**Resources and Organizations**:
- **Autism509** -- nonprofit founded in 2015 dedicated to connecting Haitian parents worldwide with resources for raising autistic children
- **Federation for Children with Special Needs** provides resources in Haitian Creole
- **FAU (Florida Atlantic University) CARD program** supports autism in the Haitian community
- Some Haitian parents have become the **first nationally certified Healthcare interpreters for Haitian Creole** in their states to bridge the language gap

**Haitian Creole Resources**:
- Haitian Creole (a mix of French and multiple African languages) should be prioritized for interpreter services
- Culturally sensitive services must provide information in **both Haitian Creole and French**

([FAU CARD](https://www.fau.edu/education/centersandprograms/card/newsevents/autism-in-the-haitian-community/); [Haitian Times](https://haitiantimes.com/2021/04/02/haitian-moms-of-autistic-kids-aim-to-remove-stigma-get-services/); [PMC Vodou mental health](https://pmc.ncbi.nlm.nih.gov/articles/PMC6880247/); [FCSN Haitian Creole](https://fcsn.org/resources/parents-families/haitian-creole/))

---

## 3. INTERNATIONAL BEST PRACTICES

### 최고의 부모 지원 모델
|||9월|||
- **스웨덴**: "교육적 차별화" -- 주류 환경 내에서 개별화된 지원
- **영국의 PACT(유아원 자폐증 의사소통 치료)**: 증거 기반 부모 중재 개입; 남아시아용 **PASS/PASS Plus**에 적용됨 - 비전문가 의료 종사자가 충실하게 전달하여 부모-자녀 의사소통 및 부모 정신 건강에 상당한 개선을 보여줌([ScienceDirect PASS 시험](https://www.sciencedirect.com/science/article/abs/pii/S2215036615003880))
- **PEERS(관계 기술 교육 및 강화 프로그램)**: 전 세계적으로 가장 빈번하게 문화적으로 적용되는 개입 중 하나
- **부모의 조치**: ASD 아동의 라틴계 부모를 위해 특별히 고안된 심리 교육 중재
|||9월|||
### 기술 기반 자폐증 중재
|||9월|||
기술 기반 접근 방식은 다음을 포함하여 액세스를 확대하고 있습니다.
- 간병인 교육을 위한 자기 주도형 컴퓨터 강좌
- 주간 가상 코칭 세션
- 전화 기반 앱 및 게임
- 가정 학습용 DVD
- 실시간 감정 피드백을 제공하는 증강현실 안경
([PMC의 학부모 지원 발전](https://pmc.ncbi.nlm.nih.gov/articles/PMC11017782/))
|||9월|||
### 다문화 자폐증 중재 프로그램
|||9월|||
- **글로벌 자폐증 프로젝트**는 전 세계 자폐증 단체와 협력합니다. **SkillCorps** 프로그램은 현장 교육을 위해 자원 봉사 팀(8~12명)을 개발도상국의 파트너 사이트로 파견합니다. 파트너에는 르완다, 니카라과, 케냐 등의 센터가 포함됩니다. RBT, IBT, ABAT 자격증을 위한 **반응 기술 훈련**을 가르칩니다([Global Autism Project](https://www.globalautismproject.org/)).
- 문화적으로 반응하는 개입에 대한 메타 분석을 통해 사회 의사소통 결과, 정신 건강 결과 및 부모의 구현 충실도에 **크고 긍정적이며 중요한 효과**가 밝혀졌습니다([PMC 메타 분석](https://pmc.ncbi.nlm.nih.gov/articles/PMC11260274/)).
|||9월|||
### 장애 포용에 관한 유네스코/유니세프 자료
|||9월|||
- 유네스코의 **살라망카 행동계획**(1994)은 정부가 일반 교육 시스템 내에서 장애 아동을 교육할 것을 촉구합니다.
- 유니세프의 **장애인 포용 정책 및 전략 2022-2030**은 포용적 교육에 중점을 둡니다.
- **UDL(Universal Design for Learning)** 및 **SEL(Social and Emotional Learning)** 프레임워크는 자원이 부족한 국가의 포용적 환경에 권장됩니다.
- 국제 개발 파트너가 지원하는 신경발달장애에 대한 방글라데시의 국가 전략 계획

- **Sweden**: "pedagogical differentiation" -- individualized support within mainstream settings
- **UK's PACT (Preschool Autism Communication Therapy)**: Evidence-based parent-mediated intervention; adapted into **PASS/PASS Plus** for South Asia -- delivered by non-specialist health workers with fidelity, showing significant improvements in parent-child communication and parental mental health ([ScienceDirect PASS trial](https://www.sciencedirect.com/science/article/abs/pii/S2215036615003880))
- **PEERS (Program for the Education and Enrichment of Relational Skills)**: One of the most frequently culturally adapted interventions globally
- **Parents Taking Action**: A psycho-educational intervention specifically designed for Latino parents of children with ASD

### Technology-Based Autism Interventions

Technology-based approaches are expanding access, including:
- Self-paced computer courses for caregiver training
- Weekly virtual coaching sessions
- Phone-based apps and games
- DVDs for home-based learning
- Augmented reality glasses providing real-time emotion feedback
([PMC advances in parent support](https://pmc.ncbi.nlm.nih.gov/articles/PMC11017782/))

### Cross-Cultural Autism Intervention Programs

- **Global Autism Project** partners with autism organizations worldwide; their **SkillCorps** program sends volunteer teams (8-12 people) to partner sites in developing countries for on-the-ground training. Partners include centers in Rwanda, Nicaragua, Kenya, and others. They teach **Responsive Skills Training** for RBT, IBT, and ABAT credentials ([Global Autism Project](https://www.globalautismproject.org/))
- A meta-analysis of culturally responsive interventions revealed **large, positive, and significant effects** on social-communication outcomes, mental health outcomes, and parental fidelity of implementation ([PMC meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC11260274/))

### UNESCO/UNICEF Resources on Disability Inclusion

- UNESCO's **Salamanca Framework for Action** (1994) urges governments to educate children with disabilities within general education systems
- UNICEF's **Disability Inclusion Policy and Strategy 2022-2030** focuses on inclusive education
- **Universal Design for Learning (UDL)** and **Social and Emotional Learning (SEL)** frameworks recommended for inclusive settings in low-resource countries
- Bangladesh's national strategic plan for neurodevelopmental disorders supported by international development partners

### 국제 자폐증 단체
|||9월|||
- **Autism-Europe**: 유럽 40개국에 걸쳐 90개 이상의 회원 조직; ~5백만 명을 대표합니다. WHO 및 UN과 협력합니다. 3년마다 국제회의 개최 ([Autism Europe](https://www.autismeurope.org/))
- **세계자폐증기구**(WAO): 글로벌 조정 기구
- **글로벌 자폐증 프로젝트**: 개발도상국의 훈련 및 역량 강화
- **PANAACEA**(라틴 아메리카): 연구 및 옹호
- **Red Espectro Autista Latinoamerica (REAL)**: 다국적 연구 네트워크
|||9월|||
---
|||9월|||
## 4. 이민자 경험에 관한 연구
|||9월|||
### 가족이 이민할 때 자폐증이 변화를 이해하는 방법
|||9월|||
문화는 가족이 발달 장애를 이해하는 방식을 형성하며 이는 특히 자폐증에 해당됩니다. 그 이유는 다음과 같습니다.
1. 합의된 단일 원인이 없습니다.
2. 진단은 행동 기준에 크게 의존합니다.
3. 행동 규범은 문화에 따라 상당히 다양합니다.
|||9월|||
이민자 가족의 자폐증에 대한 인식은 **단순히 문화적응을 통해서는 이해될 수 없습니다**. 그들은 원래 문화와 새로운 문화 사이의 지속적인 상호 작용을 유지하여 **"혼성화된 관점"**을 만듭니다([PMC 문화적 신념 연구](https://pmc.ncbi.nlm.nih.gov/articles/PMC7008392/); [PMC 개념적 프레임워크](https://pmc.ncbi.nlm.nih.gov/articles/PMC7614360/))
|||9월|||
### 본국 신념과 미국 의료 모델 간의 충돌

- **Autism-Europe**: 90+ member organizations across 40 European countries; represents ~5 million people; works with WHO and UN. Organizes an international congress every 3 years ([Autism Europe](https://www.autismeurope.org/))
- **World Autism Organisation** (WAO): Global coordination body
- **Global Autism Project**: Training and capacity building in developing countries
- **PANAACEA** (Latin America): Research and advocacy
- **Red Espectro Autista Latinoamerica (REAL)**: Multi-country research network

---

## 4. RESEARCH ON THE IMMIGRANT EXPERIENCE

### How Autism Understanding Changes When Families Immigrate

Culture shapes how families understand developmental disorders, and this is especially true for autism because:
1. There is no agreed-upon single cause
2. Diagnosis relies heavily on behavioral criteria
3. Behavioral norms vary considerably across cultures

Immigrant families' perception of autism **cannot be understood simply through acculturation** -- they maintain ongoing interactions between original and new cultures, creating **"hybridized perspectives"** ([PMC cultural beliefs study](https://pmc.ncbi.nlm.nih.gov/articles/PMC7008392/); [PMC conceptual framework](https://pmc.ncbi.nlm.nih.gov/articles/PMC7614360/))

### Clash Between Home-Country Beliefs and US Medical Model

연구에 기록된 주요 긴장 지점:
|||9월|||
1. **종교적/영적 대 의학적 인과**: 한인들은 자폐증을 "신의 뜻 또는 형벌"로 설명할 수 있습니다. 소말리아 부모들은 MMR 백신을 비난합니다. 라틴 아메리카 부모들은 그것을 말 데 오조(mal de ojo) 또는 신성한 메시지라고 생각합니다. 아이티 가족들은 영적인 원인을 믿을 수도 있다
2. **개인주의 vs. 집단주의**: 영미 문화는 개인의 자율성을 중요하게 생각합니다. 집단주의 문화에서는 개인의 능력보다는 **가족 및 지역사회 활동**을 촉진하는 행동에 치료를 집중할 수 있습니다.
3. **대체 요법**: 아프리카계 미국인, 아시아계 미국인, 라틴계 가족은 **증상을 건강 상태로 볼 가능성이 낮고** 식단 변화, 비타민 보충, 중국 전통 의학 또는 Ayurveda를 탐색할 가능성이 더 높습니다.
4. **권위 존중**: 중국 이민자 가족은 "권위에 동의하지 않는 것이 무례한 것으로 간주되는" 문화에서 옹호가 어렵다고 생각합니다. 부모는 혼란스러울 때에도 의사에게 질문할 수 없습니다.
|||9월|||
([ScienceDirect 장벽 연구](https://www.sciencedirect.com/science/article/abs/pii/S1876201818300285); [Scientific American](https://www.scientificamerican.com/article/why-autism-seems-to-cluster-in-some- migration-groups/); [PMC 중국 이민자 연구](https://pmc.ncbi.nlm.nih.gov/articles/PMC6499700/))
|||9월|||
### 이중문화 자폐가족에 관한 연구
|||9월|||
- **중국계 미국인 부모 연구(2023)**: 문화적 낙인으로 인해 부모는 자녀의 진단에 대한 인식이 달랐습니다. 옹호는 문화적으로 어렵습니다. 권장사항에는 지역사회 자원 강화, 고품질 통역/번역, 포괄적인 진료 조정이 포함됩니다([PMC 연구](https://pmc.ncbi.nlm.nih.gov/articles/PMC10693210/)).
- **한인 이민자 어머니 연구(2024)**: "만성" 대 회복의 의미로 인한 자폐증 라벨에 대한 두려움. '체면 유지'와 가족 평판이 진단 회피를 유도합니다([PMC 연구](https://pmc.ncbi.nlm.nih.gov/articles/PMC11549211/)).
- **에티오피아/에리트레아 부모 연구(2023)**: 자폐증에 대한 사전 지식이 제한적입니다. 의료 서비스 제공자와의 다양한 경험; 공급자 부족 및 비용을 포함한 장벽; 인력 참여에 부정적인 영향([PubMed](https://pubmed.ncbi.nlm.nih.gov/37667075/))
- **이민자 아버지 연구(2025)**: "이민자로서 우리는 모두 자폐증 여정에서 길을 잃었습니다"라는 제목으로 평등한 접근 및 서비스 탐색에 대한 장벽을 문서화합니다([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S3050656525000604)).
|||9월|||
### 세대 간 차이
|||9월|||
- **젊은 세대**는 영어 소스로부터 정보를 얻습니다. **기성세대**는 모국어 미디어를 통해 배웁니다.
- 세대 간의 상호 작용은 자폐증에 대한 **혼성화된 관점**을 만들어냅니다.
- 한인 커뮤니티에서 젊은 세대는 보다 개방적이며 조기 발견을 위한 봉사 활동을 환영합니다.
- 미국에서 교육받은 자녀/손주가 의학적 모델을 받아들이는 동안 부모는 전통적인 신념을 가질 수 있습니다.
|||9월|||
### 전통적 관점과 의학적 관점을 연결하는 방법

1. **Religious/spiritual vs. medical causation**: Korean Americans may explain autism as "God's will or punishment." Somali parents blame the MMR vaccine. Latin American parents attribute it to mal de ojo or divine messages. Haitian families may believe in spiritual causes
2. **Individualism vs. collectivism**: Anglo-American culture values individual autonomy; collectivist cultures may focus treatment on behaviors that facilitate **family and community activities** rather than individual competence
3. **Alternative therapies**: African American, Asian American, and Latino families may be **less likely to view symptoms as a health condition** and more likely to explore diet changes, supplemental vitamins, Traditional Chinese Medicine, or Ayurveda
4. **Authority deference**: Chinese immigrant families find advocacy difficult in a culture where "disagreeing with authority is deemed disrespectful" -- parents may not question physicians even when confused

([ScienceDirect barriers study](https://www.sciencedirect.com/science/article/abs/pii/S1876201818300285); [Scientific American](https://www.scientificamerican.com/article/why-autism-seems-to-cluster-in-some-immigrant-groups/); [PMC Chinese immigrant study](https://pmc.ncbi.nlm.nih.gov/articles/PMC6499700/))

### Studies on Bicultural Autism Families

- **Chinese American parents study (2023)**: Due to cultural stigma, parents differed in perceptions of their children's diagnosis; advocacy is culturally difficult. Recommendations include strengthening community resources, high-quality interpretation/translation, and comprehensive care coordination ([PMC study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10693210/))
- **Korean immigrant mothers study (2024)**: Fear of the autism label due to its implication of "chronicity" vs. recovery. "Saving face" and family reputation drive diagnosis avoidance ([PMC study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11549211/))
- **Ethiopian/Eritrean parents study (2023)**: Limited prior knowledge of autism; varied experiences with healthcare providers; barriers including provider shortages and cost; negative impact on workforce participation ([PubMed](https://pubmed.ncbi.nlm.nih.gov/37667075/))
- **Immigrant fathers study (2025)**: Titled "As immigrants we are all lost in our autism journey" -- documents barriers to equal access and service navigation ([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S3050656525000604))

### Intergenerational Differences

- **Younger generation** obtains information from English-language sources; **older generation** learns through native-language media
- Interactions between generations create a **hybridized perspective** on autism
- In the Korean community, younger generation is more open-minded and welcomes outreach for early detection
- Parents may hold traditional beliefs while their US-educated children/grandchildren embrace the medical model

### How to Bridge Traditional and Medical Perspectives

연구 지원 접근법:
- 임상의는 "자폐증에 대한 자신의 관점과 신념을 조사하고 호기심 많은 입장을 유지해야 한다"
- "언어적으로만 번역된 것이 아니라 **문화적으로 적합한 맥락**으로 번역된" 자료를 제공합니다.
- 다양한 시스템을 넘나드는 진료 조정에 중점
- 일부 가족은 개인의 기술보다는 가족/공동체 활동을 촉진하는 행동에 치료를 집중할 수 있다는 점을 인정합니다.
- 봉사 활동에 지역 사회 지도자, 종교 지도자 및 장로를 포함시킵니다.
- **지역사회 보건 종사자 모델** 사용(예: 인도의 ASHA 또는 방글라데시의 모델)
|||9월|||
---
|||9월|||
## 5. 국제 심사 도구
|||9월|||
### 현지에서 개발된 도구
|||9월|||
**인도**는 가장 광범위한 토착 도구를 개발했습니다.
- **ISAA(Indian Scale for Assessment of Autism)** -- 정부에서 지정한 도구
- **INCLEN 진단 도구(INDT-ASD)** -- 민감도 98%, 특이도 95%, 교육이 필요 없이 관리가 용이함
- **PAAS(그림 자폐증 평가 일정)** -- 현지 언어로 된 텍스트와 함께 사진을 사용합니다. 읽고 쓰는 능력이 낮은 인구를 위해 설계되었습니다. 21개 항목([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5296629/))
- **찬디가르 자폐증 검사 장비(CASI)**
- **인도 자폐증 검사 설문지(IASQ)**
- **NASI(나약 자폐증 검사 장비)**
|||9월|||
([인디언 도구에 대한 Springer 리뷰](https://link.springer.com/article/10.1007/s40489-025-00495-0); [인도 소아과](https://www.indianpediatrics.net/apr2024/321.pdf))
|||9월|||
### 서양 도구의 문화 간 검증
|||9월|||
**M-CHAT-R/F**(유아 자폐증에 대한 수정된 체크리스트, 후속 개정)는 **48개 언어/방언**으로 번역되었으며, 19개 국가, 10개 언어에서 문화적 적응이 연구되었습니다. 하지만:

---

## 5. INTERNATIONAL SCREENING TOOLS

### Locally Developed Tools

**India** has developed the most extensive array of indigenous tools:
- **ISAA (Indian Scale for Assessment of Autism)** -- government-mandated tool
- **INCLEN Diagnostic Tool (INDT-ASD)** -- 98% sensitivity, 95% specificity, easy to administer with no training required
- **Pictorial Autism Assessment Schedule (PAAS)** -- uses photographs alongside text in local languages; designed for low-literacy populations; 21 items ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5296629/))
- **Chandigarh Autism Screening Instrument (CASI)**
- **Indian Autism Screening Questionnaire (IASQ)**
- **Nayak Autism Screening Instrument (NASI)**

([Springer review of Indian tools](https://link.springer.com/article/10.1007/s40489-025-00495-0); [Indian Pediatrics](https://www.indianpediatrics.net/apr2024/321.pdf))

### Cross-Cultural Validation of Western Tools

The **M-CHAT-R/F** (Modified Checklist for Autism in Toddlers, Revised with Follow-up) has been translated into **48 languages/dialects**, with cultural adaptations studied in 19 countries and 10 languages. However:

- **중요한 문화 간 타당성 문제**: 스리랑카에서는 M-CHAT 민감도가 싱할라족 인구의 **25%**만큼 낮았습니다. 자폐증의 위험 신호로 간주되는 일부 행동은 "싱할라족 어머니들에게는 비정상적인 것으로 인식되지 않았습니다"
- **일본어 적응**은 예/아니요 질문에 "예"라고 대답하기를 꺼리고 다른 어린이에 대한 관심 부족을 "수줍음"으로 해석하는 경향을 설명해야 했습니다.
- **모로코 아랍어 각색**은 엄격한 정방향/역방향 번역을 거쳐 좋은 성능을 보였습니다.
- **브라질 적응**은 크론바흐 알파 0.95, 민감도 0.94, 특이도 0.91을 나타냈습니다.
- **스페인어 적응**은 스페인의 2,480명 이상의 어린이를 대상으로 검증되었습니다.
|||9월|||
**주요 결과**: 번역된 도구에 대한 문화적/언어적 수정은 적응 과정이 엄격할수록 증가하는 경향이 있습니다. 원본 버전과 개조 버전 사이의 심리 측정 속성 차이는 **일반적으로** 발생하며, 이는 인구별 규범 데이터의 필요성을 강조합니다.
|||9월|||
**체계적인 문제**: 267명의 캘리포니아 소아과 의사를 대상으로 한 2013년 연구에 따르면 **1/3 미만**이 스페인어로 자폐증 검사를 제공했으며 **10%**만이 스페인어 자폐증과 일반 발달 검사를 모두 제공했습니다.
|||9월|||
([PMC 체계적 검토](https://pmc.ncbi.nlm.nih.gov/articles/PMC11437884/); [PubMed 검토](https://pubmed.ncbi.nlm.nih.gov/25008216/); [F1000Research](https://f1000research.com/articles/12-471))
|||9월|||
---
|||9월|||
## 6. 언어별 주요 용어
|||9월|||
| 언어 | 자폐증 용어 | 메모 |
|---|---|---|
| **스페인어** | **Autismo** / **Trastorno del Espectro Autista(TEA)** | "Autismo"는 일부 커뮤니티에서 더 부드러운 의미를 가질 수 있습니다 |
| **중국어(북경어)** | **孤独症(guduzheng)** 또는 **自闭症(zibizheng)** | 구어체: "来自性聖的孩子"(별에서 온 아이) |
| **한국어** | **자폐증 (japyejeung)** | 부모는 라벨을 피하기 위해 "경계 아동"을 선호합니다 |
| **소말리아** | **마앙가르**(새로운 긍정적 용어 = "독특한 마음") | 이전에는 단어가 존재하지 않았습니다. 언어적 격차와 관련된 지역사회 낙인 |
| **아이티 크리올어** | FCSN을 통해 이용 가능한 리소스 | 접근성을 위해 프랑스어보다 아이티 크리올어를 우선시 |
| **아랍어** | **التوحد(al-tawahhud)** | Autism Speaks 및 기타 자료 |
| **힌디어** | **자폐증(자폐증)** / **스발린타(스발린타)** | 여러 인도어 각색이 존재합니다 |
|||9월|||
---

**Key finding**: Cultural/linguistic modifications to translated tools tend to increase with the rigor of the adaptation process. Differences in psychometric properties between original and adapted versions are **common**, emphasizing the need for population-specific normative data.

**Systemic problem**: A 2013 study of 267 California pediatricians found **less than one-third** offered autism screening in Spanish, and only **10%** offered both Spanish-language autism and general developmental screening.

([PMC systematic review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11437884/); [PubMed review](https://pubmed.ncbi.nlm.nih.gov/25008216/); [F1000Research](https://f1000research.com/articles/12-471))

---

## 6. KEY TERMINOLOGY ACROSS LANGUAGES

| Language | Term for Autism | Notes |
|---|---|---|
| **Spanish** | **Autismo** / **Trastorno del Espectro Autista (TEA)** | "Autismo" may carry softer connotations in some communities |
| **Chinese (Mandarin)** | **孤独症 (guduzheng)** or **自闭症 (zibizheng)** | Colloquial: "来自星星的孩子" (child from the stars) |
| **Korean** | **자폐증 (japyejeung)** | Parents prefer "border child" to avoid the label |
| **Somali** | **Maangaar** (new positive term = "unique mind") | Previously no word existed; community stigma linked to linguistic gap |
| **Haitian Creole** | Resources available via FCSN | Prioritize Haitian Creole over French for accessibility |
| **Arabic** | **التوحد (al-tawahhud)** | Resources from Autism Speaks and others |
| **Hindi** | **ऑटिज़्म (autism)** / **स्वलीनता (svalinta)** | Multiple Indian-language adaptations exist |

---

## 7. 중요한 앱 디자인에 미치는 영향
|||9월|||
이 연구를 바탕으로 해커톤 앱에 대한 가장 실행 가능한 시사점은 다음과 같습니다.
|||9월|||
1. **단 하나의 "이민 경험"을 가정하지 마십시오** -- 자폐증에 대한 이해는 출신 국가, 교육 수준, 세대 및 미국에서 보낸 기간에 따라 크게 다릅니다.
|||9월|||
2. **다국어 콘텐츠는 필요하지만 충분하지는 않습니다** -- 번역은 언어적으로만 번역되는 것이 아니라 **문화적으로 적응**되어야 합니다. 의학 용어를 직접 번역하는 것은 일부 문화적 맥락에서 의미가 없거나 불쾌감을 줄 수도 있습니다.
|||9월|||
3. **영적 및 전통적 신념을 정중하게 인정하세요** - 앱은 영적인 원인에 대한 믿음을 무시해서는 안 되며 오히려 전통적인 이해와 미국 의료 시스템 사이에 **다리**를 제공해야 합니다. "우리 전통에서는 이것을 X로 이해할 수 있습니다. 미국 의학에서는 Y라고 합니다. 두 관점 모두 자녀가 독특하다는 것을 인정합니다."
|||9월|||
4. **수치심/낙인을 명시적으로 해결** -- 많은 문화권(한국어, 중국, 라틴 아메리카, 소말리아, 아이티)에서는 장애에 대한 심각한 수치심을 전달합니다. 앱은 도움 요청을 정상화하고 같은 문화권 가족의 이야기를 제공해야 합니다.
|||9월|||
5. **미국 시스템에 대한 탐색 지원 포함** -- 이민자 가족은 언어 장벽, 학교 IEP 프로세스, 의료 보험 시스템 및 치료 옵션에 대한 익숙하지 않은 문제에 직면합니다. 그들의 언어로 안내된 둘러보기는 매우 가치가 있습니다.
|||9월|||
6. **지역사회 의료 종사자 모델 활용** – 연구에 따르면 비전문가 근로자도 부모가 중재하는 개입을 효과적으로 전달할 수 있습니다(PASS Plus 모델). 앱은 이 접근 방식의 디지털 버전 역할을 할 수 있습니다.

Based on this research, here are the most actionable takeaways for the hackathon app:

1. **Never assume a single "immigrant experience"** -- autism understanding varies dramatically by country of origin, education level, generation, and length of time in the US

2. **Multilingual content is necessary but not sufficient** -- translation must be **culturally adapted**, not just linguistically translated. A direct translation of medical terminology may be meaningless or even offensive in some cultural contexts

3. **Acknowledge spiritual and traditional beliefs respectfully** -- the app should not dismiss beliefs about spiritual causes but rather provide a **bridge** between traditional understanding and the US medical system. Phrases like "In our tradition, we may understand this as X. In American medicine, it is called Y. Both perspectives acknowledge that your child is unique."

4. **Address the shame/stigma explicitly** -- many cultures (Korean, Chinese, Latin American, Somali, Haitian) carry profound shame around disability. The app should normalize help-seeking and provide stories from same-culture families

5. **Include navigation support for US systems** -- immigrant families face language barriers, unfamiliarity with school IEP processes, medical insurance systems, and therapy options. A guided walkthrough in their language would be highly valuable

6. **Leverage community health worker models** -- research shows non-specialist workers can effectively deliver parent-mediated interventions (PASS Plus model). The app could serve as a digital version of this approach

7. **온 가족을 위한 자원 제공** - 집단주의 문화에서는 대가족이 보육에 참여합니다. 조부모와 기타 친척들에게도 정보가 필요합니다. 특히 세대 간 이해 격차를 해소하려면 더욱 그렇습니다.
|||9월|||
8. **디아스포라 관련 조직 강조** -- SPAN(Somali Parents Autism Network), Autism509(아이티), Autism Society Philippines in America 지부 등 가족을 같은 문화 공동체와 연결하는 것은 강력합니다.
|||9월|||
9. **문화적 주의 사항과 함께 선별 정보를 포함합니다** -- 서구 선별 도구는 문화 전반에 걸쳐 자폐증을 동일하게 포착하지 못할 수 있다는 점에 유의하세요. 심사 도구가 우려 사항을 표시하지 않더라도 전문적인 평가를 장려합니다.
|||9월|||
10. **"독특한 마음" 프레이밍 활용** -- 소말리아 공동체의 "마앙가르" 개념과 중국의 "별에서 온 아이" 프레이밍은 문화적으로 공명하고 자폐증을 이해하는 긍정적인 방법을 제공하며 이는 커뮤니티 전반에 걸쳐 적용될 수 있습니다.
|||9월|||
---
|||9월|||
**주요 연구 출처 및 참조 기관**:
- [WHO 자폐증 사실 자료](https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders)
- [글로벌 질병 부담 연구 2021 / PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11917377/)
- [세계 인구 검토 자폐증 비율](https://worldpopulationreview.com/country-rankings/autism-rates-by-country)
- [송신기 세계 자폐증 발병률 지도](https://autismprevalence.thetransmitter.org/)
- [자폐증-유럽](https://www.autismeurope.org/)
- [글로벌 자폐증 프로젝트](https://www.globalautismproject.org/)
- [인도 자폐증을 위한 행동](https://www.autism-india.org/about-us.php)
- [필리핀 자폐증 협회](http://www.autismsocietyphilippines.org/)
- [PANAACEA 아르헨티나](https://test.panaacea.org/)
- [소말리아 부모 자폐증 네트워크](https://www.somaliautism.org/)
- [Autism509 (아이티)](https://haitiantimes.com/2021/04/02/haitian-moms-of-autistic-kids-aim-to-remove-stigma-get-services/)
- [FCSN 아이티 크리올 리소스](https://fcsn.org/resources/parents-families/haitian-creole/)
- [Autism Speaks Non-English Resources](https://www.autismspeaks.org/non-english-resources)
- [유니세프 포용적 교육](https://www.unicef.org/education/inclusive-education)
- [NIMH 스페인어 자폐증 자료](https://www.nimh.nih.gov/health/publications/espanol/trastornos-del-espectro-autista)
---
|||9월|||
## 추가 연구(2026년 3월 업데이트)
|||9월|||
### 이중 언어 사용 및 자폐증 — 연구 합의

8. **Highlight diaspora-specific organizations** -- SPAN (Somali Parents Autism Network), Autism509 (Haitian), Autism Society Philippines chapters in the US, etc. Connecting families with same-culture communities is powerful

9. **Include screening information with cultural caveats** -- note that Western screening tools may not capture autism equally across cultures; encourage professional evaluation even if a screening tool doesn't flag concerns

10. **Leverage the "unique mind" framing** -- the Somali community's "Maangaar" concept and the Chinese "child from the stars" framing provide culturally resonant, positive ways to understand autism that could be adapted across communities

---

**Key Research Sources and Organizations Referenced**:
- [WHO Autism Fact Sheet](https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders)
- [Global Burden of Disease Study 2021 / PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11917377/)
- [World Population Review Autism Rates](https://worldpopulationreview.com/country-rankings/autism-rates-by-country)
- [The Transmitter Global Autism Prevalence Map](https://autismprevalence.thetransmitter.org/)
- [Autism-Europe](https://www.autismeurope.org/)
- [Global Autism Project](https://www.globalautismproject.org/)
- [Action for Autism India](https://www.autism-india.org/about-us.php)
- [Autism Society Philippines](http://www.autismsocietyphilippines.org/)
- [PANAACEA Argentina](https://test.panaacea.org/)
- [Somali Parents Autism Network](https://www.somaliautism.org/)
- [Autism509 (Haiti)](https://haitiantimes.com/2021/04/02/haitian-moms-of-autistic-kids-aim-to-remove-stigma-get-services/)
- [FCSN Haitian Creole Resources](https://fcsn.org/resources/parents-families/haitian-creole/)
- [Autism Speaks Non-English Resources](https://www.autismspeaks.org/non-english-resources)
- [UNICEF Inclusive Education](https://www.unicef.org/education/inclusive-education)
- [NIMH Spanish Autism Resources](https://www.nimh.nih.gov/health/publications/espanol/trastornos-del-espectro-autista)
---

## Additional Research (Updated March 2026)

### Bilingualism and Autism — Research Consensus

**주요 결과: 이중 언어 사용은 자폐 아동의 언어 발달에 해를 끼치지 않습니다.** 여러 체계적 검토를 통해 다음과 같은 사실이 확인되었습니다.
|||9월|||
1. **체계적 검토(2023)** — "이중 언어 사용이 3세 이상의 ASD 아동의 언어 발달에 추가적인 어려움을 수반하지 않는다는 합의가 있는 것 같습니다." 최악의 경우 효과가 없습니다. 기껏해야 적응 기능, 사회적 의사소통, 수용 언어 면에서 이점이 있습니다. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S217358082300072X))
|||9월|||
2. **Gilhuber 외. (2023)** — 다국어 자폐 아동의 언어/의사소통을 체계적으로 검토한 결과 부정적인 영향에 대한 증거는 발견되지 않았습니다. ([SAGE 저널](https://journals.sagepub.com/doi/10.1177/13623613221147780))
|||9월|||
3. **PMC 검토** — "현재까지의 연구에 따르면 ASD 아동의 이중 언어 노출은 최악의 경우 언어 발달에 영향을 미치지 않으며 기껏해야 이점을 제공하는 것으로 나타났습니다." ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7370402/))
|||9월|||
4. **심리학의 개척자(2024)** — ASD가 있는 유아의 이중 언어 노출 효과에 대한 연구에서는 부정적인 영향이 발견되지 않았습니다. ([프론티어](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1412339/full))
|||9월|||
5. **이해관계자 관점(2025)** — 자폐인은 이중 언어 구사 능력을 사회적 연결을 강화하고, 가족 관계를 강화하며, 더 큰 개인적/직업적 기회를 제공함으로써 삶을 풍요롭게 하는 자산으로 인식했습니다. ([스프링거](https://link.springer.com/article/10.1007/s40489-025-00519-9))
|||9월|||
**앱에 중요함:** 연구 합의에도 불구하고 많은 부모들이 **제공자로부터 언어를 중단하라는 조언**을 받았다고 보고합니다. 이는 증거 기반이 아닙니다. 다국어 가족을 안심시키기 위해 앱에는 이러한 연구 결과가 눈에 띄게 표시되어야 합니다. ([ASHA 저널](https://pubs.asha.org/doi/10.1044/2016_JSLHR-L-15-0348))

1. **Systematic Review (2023)** — "There seems to be consensus that bilingualism does not entail any additional difficulty for language development in children with ASD from age 3." At worst no effect; at best, advantages in adaptive functioning, social communication, and receptive language. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S217358082300072X))

2. **Gilhuber et al. (2023)** — Systematic review of language/communication in multilingual autistic children found no evidence of negative impacts. ([SAGE Journals](https://journals.sagepub.com/doi/10.1177/13623613221147780))

3. **PMC Review** — "Research to date indicates that at worst bilingual exposure in children with ASD has no effect on language development and at best offers advantages." ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7370402/))

4. **Frontiers in Psychology (2024)** — Study on bilingual language exposure effects on toddlers with ASD found no negative effects. ([Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1412339/full))

5. **Stakeholder Perspectives (2025)** — Autistic individuals perceived bilingualism as an asset enriching their lives by fostering social connections, strengthening family relationships, and providing greater personal/professional opportunities. ([Springer](https://link.springer.com/article/10.1007/s40489-025-00519-9))

**Critical for the app:** Despite research consensus, many parents report being **advised by providers to drop a language** — this is NOT evidence-based. The app should prominently feature this research to reassure multilingual families. ([ASHA Journal](https://pubs.asha.org/doi/10.1044/2016_JSLHR-L-15-0348))
