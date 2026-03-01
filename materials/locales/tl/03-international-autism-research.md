# International Autism Research: Comprehensive Brief para sa Hackathon App

## 1. GLOBAL AUTISMO PREVALENCE AT PANANALIKSIK

### WHO Global Statistics

Tinatantya ng WHO na humigit-kumulang **1 sa 100 bata** sa buong mundo ay may autism, bagaman ito ay isang average na figure na may malaking pagkakaiba-iba sa rehiyon. Ang Global Burden of Disease Study 2021, na inilathala sa *The Lancet Psychiatry* (Disyembre 2024), ay nagbibigay ng mas kamakailang pagtatantya: **61.8 milyong tao sa buong mundo** ay autistic noong 2021, katumbas ng humigit-kumulang **1 sa 127 indibidwal** ([PMC systematic pagsusuri](https://pmc.ncbi.nlm.nih.gov/articles/PMC11917377/); [WHO Fact Sheet](https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders)).

### Pagkalat ayon sa Bansa/Rehiyon

Malaki ang pagkakaiba-iba ng prevalence ayon sa rehiyon, higit na hinihimok ng diagnostic capacity kaysa sa aktwal na rate ng autism:

| Rehiyon/Bansa | Pagkalat | Mga Tala |
|---|---|---|
| **Estados Unidos** | 1 sa 36 na bata | Pinakamataas na naiulat na rate sa buong mundo |
| **South Korea** | 1 sa 38 (2.64%) | Landmark 2011 community screening study ni Kim et al. ([Yale News](https://news.yale.edu/2011/05/09/prevalence-autism-south-korea-estimated-1-38-children) |
| **Canada** | 1 sa 66 | |
| **North America (pooled)** | 1.01% | |
| **Europe (pooled)** | 0.73% | |
| **Asia (pooled)** | 0.41% | |
| **India** | ~1 sa 250 (0.09-0.11%) | Malamang underdiagnosed |
| **China** | ~1 sa 186 | Malamang underdiagnosed |
| **Saudi Arabia** | 1.7-1.8% (naka-calibrate) | Opisyal na bilang na 0.6% ay itinuturing na kulang sa bilang |
| **Nigeria** | ~2.3% | |
| **Somalia** | ~2.07% | |

**Critical caveat para sa app**: Ang mas mataas na naiulat na mga rate ay karaniwang nagpapahiwatig ng **mas mahusay na diagnostic na imprastraktura**, hindi higit na autism. Ang mas mababang mga rate sa mga umuunlad na bansa ay malamang na nagpapakita ng underdiagnosis. ([World Population Review](https://worldpopulationreview.com/country-rankings/autism-rates-by-country); [PMC three-level meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC9947250/))

### Mga Pagkakaiba ng Pamantayan sa Diagnostic: DSM-5 kumpara sa ICD-11

Dalawang pangunahing diagnostic system ang ginagamit sa buong mundo:

- **DSM-5** (US-favored): Nangangailangan ng partikular na numero at kumbinasyon ng mga feature sa dalawang domain (mga kakulangan sa social communication; pinaghihigpitan/paulit-ulit na pag-uugali). Pangunahing ginagamit sa North America.
- **ICD-11** (WHO, ginagamit sa buong mundo): Mas nababaluktot -- hindi nagtatakda ng partikular na bilang ng mga feature; hayaan ang mga clinician na magpasya. **Mas sensitibo sa kultura**: hindi gaanong binibigyang-diin ang uri ng paglalaro na sinasalihan ng mga bata (na nag-iiba ayon sa kultura) at sa halip ay nakatuon sa kung ang mga bata ay sumusunod/nagpapataw ng mga mahigpit na panuntunan sa paglalaro. Katangi-tanging kasama rin ang "pagkawala ng mga dating nakuhang kasanayan" bilang isang tampok na diagnostic. ([Frontiers in Psychiatry](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.787893/full); [The Transmitter](https://www.thetransmitter.org/spectrum/new-global-diagnostic-uscriminal-mirror); Unibersidad](https://www.open.edu/openlearn/mod/oucontent/view.php?id=66953&section=2.2))

**Kaugnayan ng app**: Ang mga magulang na nagmumula sa mga bansang gumagamit ng ICD ay maaaring magkaroon ng ibang pang-unawa sa proseso ng diagnostic. Ang mas mahigpit na pamantayan ng DSM-5 ay maaaring hindi pamilyar o sobrang higpit.

### Mga Bansang may Pinakamahusay na Sistema ng Suporta sa Autism

Ang mga nangungunang bansa ay kinabibilangan ng:

1. **Sweden** -- Huwarang pangangalaga sa kalusugan at edukasyon na may indibidwal na suporta; Ang modelong "pedagogical differentiation" ay kinikilala sa buong mundo
2. **Australia** -- Comprehensive research, early intervention programs, at autism-friendly na pampublikong espasyo
3. **Canada** -- Pinopondohan ng gobyerno ang pangangalagang pangkalusugan, inclusive education, at malakas na provincial autism programs
4. **United Kingdom** -- Mga serbisyo ng NHS kabilang ang autism assessment at therapy; Education Health and Care Plans (EHCPs)
5. **Israel, Netherlands, New Zealand, Singapore** -- Kinikilala din para sa advanced na pangangalaga

([Ranggo ng FS Autism Center](https://fsautismcen.org/2023/10/29/ranking-the-most-autism-friendly-countries-in-the-world/); [PlacidWay guide](https://www.placidway.com/article/4295/7-Best-Countries-for-Autism-in)-Treatmentism)

### Mga Bansang may Kaunting Suporta

Ang Sub-Saharan Africa, mga bahagi ng Timog Asya, at Gitnang Amerika ay may pinakamatitinding gaps. Sa Ethiopia, ang mga serbisyo ay "kaunti at higit sa lahat ay nakakulong sa kabisera ng lungsod." Sa Haiti, ang mga taong may kapansanan ay binansagan na "kokobay" (baliw) at kadalasang itinataboy. Tinatantya ng UNICEF **90% ng mga batang may kapansanan sa mga bansang mababa ang kita ay hindi kailanman nakatanggap ng anumang uri ng edukasyon**. ([UNICEF](https://www.unicef.org/education/inclusive-education))

---

## 2. REGIONAL DEEP DIVES

### 2.1 LATIN AMERICA (Mexico, Central America, South America)

**Paglaganap at Diagnosis**:
- Tinatayang **6 milyong indibidwal na may ASD** ay nakatira sa Latin America
- Mexico: Isang epidemiological study lamang (2016, Guanajuato) ang nag-ulat ng pagkalat ng **0.87%**. Ang diagnosis ay tumatagal sa average **27 buwan** at **3 propesyonal na contact**. 78% ay tumatanggap ng pormal na diagnosis sa edad na 3 o mas bago, 22% sa edad na 6 o mas bago ([MHIN Innovation](https://www.mhinnovation.net/blogs/early-detection-and-intervention-children-autism-mexico))
- Ang mga batang Latino sa US ay na-diagnose **2.5 taon mamaya** kaysa sa mga batang hindi Latino na puti

**Pag-unawa sa Kultura**:
- Mga pangunahing pagpapahalaga sa kultura na humuhubog sa pag-unawa sa autism: **familismo** (nakasentro sa pamilya), **espiritismo** (espirituwalidad), **respeto** (paggalang sa awtoridad), **simpatia** (simpatya sa iba)
- Iniuugnay ng ilang ina ang autism sa mga kultural na paniniwala: **mal de viento** (sakit sa hangin), **susto** (takot), **mal de ojo** (masamang tingin/nakapanakit na tingin), o bilang isang "mensahe mula sa Diyos"
- Ang "Autismo" sa Espanyol ay madalas na may mas malambot na konotasyon -- minsan ay nakikita bilang nangangahulugang "umalis o nahihiya" sa halip na isang kondisyon ng neurodevelopmental
- Madalas na itinatago ng mga magulang ang mga batang may autism, iniiwasan ang mga pampublikong lugar at mga aktibidad sa paglalaro dahil sa kahihiyan
- Ang ASD ay nakikita bilang **nakakahiya** sa kultura ng Mexico, at ang mga taong may ASD ay "madalang na nakikita o nabanggit"

**Terminolohiya**:
- Pormal: **Trastorno del Espectro Autista (TEA)** -- Autism Spectrum Disorder
- Karaniwan: **Autismo**

**Mga Pangunahing Organisasyon**:
- **PANAACEA** (Argentine Program for Children, Adolescents, and Adults with Autism Spectrum Conditions) -- pangunahing organisasyon ng pananaliksik at adbokasiya
- **Red Espectro Autista Latinoamerica (REAL)** -- koalisyon ng mga mananaliksik/clinician mula sa 6 na bansa sa Latin America; nagsagawa ng survey sa 2,942 caregiver
- Ang **Autism Speaks** ay may mga mapagkukunan sa wikang Espanyol
- **NIMH** ay nagbibigay ng mga factsheet sa Espanyol ("Trastornos del espectro autista")
- **MedlinePlus en Español** ay may mga mapagkukunan ng autism

**Mga hadlang**: Mga listahan ng paghihintay (50.2% ng mga tagapag-alaga ang nag-ulat nito), mga gastos sa paggamot (35.2%), at kakulangan ng mga espesyal na serbisyo (26.1%)

**Mexico-specific**: La Ley General para la Atencion y Proteccion a Personas con la Condicion del Espectro Autista (Pangkalahatang Batas para sa Proteksyon at Pangangalaga ng mga Taong may ASD) ay umiiral, ngunit ang mga serbisyo ay nananatiling limitado at pribado, kadalasang hindi kayang bayaran

([PMC barriers study](https://pmc.ncbi.nlm.nih.gov/articles/PMC9584143/); [PMC conceptualization study](https://pmc.ncbi.nlm.nih.gov/articles/PMC4180801/); [AWN Network](https://awntismnetwork.org-age Edad ng diagnosis ng mga journal](https://journals.sagepub.com/doi/10.1177/13623613221147345))

---

### 2.2 SILANGANG ASYA (China, Pilipinas, Vietnam, Korea)

**China**:
- Prevalence: ~1 sa 186 (malamang kulang ang bilang)
- **Cultural framing**: Tinitingnan ng marami ang autism "hindi bilang isang developmental disorder, ngunit bilang isang nakakahawang sakit na nahuhuli at maaaring gumaling sa paglipas ng panahon," na humahantong sa mga magulang na sinisisi. Binibigyang-diin ng mga tradisyon ng Confucian ang tagumpay, mabuting asal, at angkop na pag-uugali; ang mga pag-uugaling nauugnay sa autism ay nagdudulot **kahiya sa mga pamilya**
- **Traditional Chinese Medicine (TCM)**: Ang Autism sa TCM framework ay hindi umiiral bilang Western diagnosis; sa halip ay inuri ito sa ilalim ng **"Syndrome of 5 Delays"** (mga pagkaantala sa pagtayo, paglalakad, paglaki ng buhok, pagputok ng ngipin, at pagsasalita). Karaniwang ginagamit ang Acupuncture at Tuina massage. Ang ilang mga pag-aaral sa herbal na gamot ay nagpapakita ng pinahusay na mga marka ng Childhood Autism Rating Scale kapag pinagsama sa kumbensyonal na therapy
- Kolokyal na termino: **"laizi xingxing de haizi"** (来自星星的孩子) = "bata mula sa mga bituin"

**South Korea**:
- Prevalence: 2.64% sa landmark 2011 Kim et al. pag-aaral sa komunidad -- tatlong-kapat ay **hindi pa kailanman na-diagnose** sa kabila ng pag-aaral sa mga pangunahing paaralan
- **Konsepto ng "Border child"**: Mas gusto ng mga magulang at clinician na tawagan ang mga bata bilang "border child," na binabanggit ang mga sintomas bilang pansamantalang kahirapan. Minsan binabawasan ng mga propesyonal ang kalubhaan upang maiwasan ang label ng autism
- **Stigma sa paligid ng pagliligtas ng mukha**: Ang bawat indibidwal ay kumakatawan sa buong pamilya; ang kapansanan ay "isang banta at kahihiyan sa buong pamilya." Sinabi ng mga lider ng Simbahan na maaaring iwasan ng mga Koreano na pakasalan ang isang taong may malapit na miyembro ng pamilya na may kapansanan. Ang mga Korean na ina ay natatakot sa label ng autism dahil ito ay "nagpapahiwatig ng talamak na taliwas sa pagbawi"
- Korean term: **자폐증 (japyejeung)**

**Pilipinas**:
- **Autism Society Philippines (ASP)** itinatag noong 1989 -- 13,000 miyembro sa 97 kabanata
- Kinikilala ng gobyerno ang **National Autism Consciousness Week** (ikatlong linggo ng Enero)
- Ang Kagawaran ng Kalusugan ay inatasang bumalangkas ng isang Pambansang ASD Plan
- Nag-aalok ang ASP ng mga grupo ng suporta sa pamilya, pagsasanay, pagkonsulta sa maagang pagtuklas, at libreng therapy na nakabatay sa komunidad

**Vietnam**:
- Prevalence: ~0.758% (1 sa 132 bata)
- Mas gusto ng mga magulang na tukuyin ang ASD bilang **"sakit" sa halip na "karamdaman"** -- binibigyang-diin ang posibilidad ng isang lunas
- Mga makabuluhang kakulangan ng sinanay na mga propesyonal sa kalusugan ng isip

**Pangkalahatang salik sa kultura sa buong rehiyon**: Stigma na naiimpluwensyahan ng Confucian values ​​of social harmony; "mukha" (chemyon/mianzi) ang pinakamahalaga; ang mga pamilya ay nakakaranas ng matinding kahihiyan

([Wikipedia: Autism in China](https://en.wikipedia.org/wiki/Autism_in_China); [review ng PMC Southeast Asia](https://pmc.ncbi.nlm.nih.gov/articles/PMC10973561/); [Autism Society Philippines](http://www.autismsocietyphilippines.org/); [Research. Mga Bata](https://www.researchgate.net/publication/260139828_Border_Children_Interpreting_Autism_Spectrum_Disorder_in_South_Korea) [PMC Korean immigrant mothers](https://pmc.ncbi.nlm.nih.gov/articles/PMC115)492PMC115)

---

### 2.3 TIMOG ASYA (India, Pakistan, Bangladesh)

**India**:
- Tahanan ng tinatayang **5+ milyong autistic na indibidwal**; pagkalat 0.09-0.11%
- Makabuluhang urban-rural divide: ang mga espesyalista ay puro sa mga lungsod
- **Action for Autism (AFA)** -- pinasimunuan ang kilusang autism sa Timog Asya; nagsasagawa ng mga aktibidad sa habang-buhay (maagang interbensyon, edukasyon, pagtatasa, trabaho, malayang pamumuhay). Nagsagawa ng 250+ training workshop, pagsasanay sa 15,000+ na magulang at propesyonal sa buong India at mga kalapit na bansa
- **Bumuo ang India ng sarili nitong mga tool sa screening**: ISAA (Indian Scale for Assessment of Autism), INCLEN Diagnostic Tool (INDT-ASD) na may 98% sensitivity at 95% specificity, Pictorial Autism Assessment Schedule (PAAS) para sa mga low-literacy na populasyon, Chandigarh Autism Screening Instrument (CASIQ Screening Instrument ng iba pa), Chandigarh Autism Screening Instrument at 95%
- **Ayurveda** ay nag-aalok ng isang holistic/indibidwal na diskarte na nakahanay sa kumplikadong katangian ng ASD, kahit na kailangan pa rin ang mahigpit na klinikal na pagpapatunay
- **PASS intervention** (Parent-mediated intervention for Autism Spectrum disorders in South Asia): Batay sa ebidensya, kultural na inangkop mula sa PACT program ng UK, na inihahatid ng mga non-espesyalistang manggagawang pangkalusugan. Nagpakita ng makabuluhang pagpapabuti sa komunikasyon ng magulang-anak. Kasalukuyang pinapalaki sa urban India

**Pakistan**:
- **Autism Society of Pakistan (ASP)** na nakarehistro noong 2010 bilang isang pambansang payong organisasyon para sa adbokasiya ng ASD, pangangalap ng pondo, pagsasanay, at pananaliksik
- Napakalimitadong mga serbisyo; pangangalaga ng espesyalista na nakatuon sa mga urban na lugar

**Bangladesh**:
- Mga serbisyong binuo mula 1990 sa mga ospital sa Dhaka; mga organisasyon tulad ng **SWAC** (Society for the Welfare of Autistic Children), **Autistic Welfare Foundation**, at **PROYASH** ay lumitaw mula 2000
- Ang mga modelo ng manggagawa sa kalusugan ng komunidad (tulad ng mga ASHA ng India) ay inangkop upang isama ang mga tool na partikular sa autism
- Ginamit ng Bangladesh ang mga kampanya sa edukasyon sa komunidad na kinasasangkutan ng mga lokal na pinuno, guro, at manggagawang pangkalusugan upang mabawasan ang stigma -- binanggit bilang isang matagumpay na modelo

**Mga pangunahing hamon sa buong rehiyon**: 1.4% ng populasyon sa Timog Asya ang apektado ngunit kakaunti ang may access sa pangangalagang pangkalusugan; mahinang kamalayan sa mga pamilya at frontline health provider; malaking stigma at diskriminasyon; mga serbisyong espesyalista na bihira at puro urban

([Action for Autism India](https://www.autism-india.org/about-us.php); [PASS Plus](https://www.mhinnovation.net/innovations/parent-mediated-intervention-autism-spectrum-disorders-south-asia-plus-pass-plus); [PMC INCLEN tool](https://pmc.ncbi.nlm.nih.gov/articles/PMC5296629/); [Independent BD](https://www.theindependentbd.com/magazine/details/40313/Autism-awareness-in-Bangladesh-and-its-challenges))

---

### 2.4 MIDDLE EAST AT NORTH AFRICA

**Islamic na Pananaw sa Kapansanan**:
- Ang mga bata ay itinuturing na isang pagpapala at pagtitiwala mula kay Allah; ang mga batang may autism ay tinitingnan bilang "natatanging indibidwal na may sariling lakas"
- Ang kapansanan ay tinitingnan bilang "hindi isang parusa mula sa Diyos, ngunit isang pagsubok at isang paraan upang makakuha ng mga gantimpala"
- Maraming Islamic na organisasyon ang bumuo ng **sensory-friendly prayer space** at **Quran classes** na inangkop para sa mga autistic na indibidwal
- **Gayunpaman**: nagpapatuloy ang makabuluhang stigma sa pagsasanay. Ang pagkalito sa gitna ng mga kultural na paniniwala tungkol sa **pagmamay-ari ng jin, black magic, at masamang mata** ay kadalasang nag-iiwan sa mga pamilyang nakahiwalay

**Gulf States**:
- Saudi Arabia: Ang prevalence ay malamang na 1.7-1.8% (opisyal na pagtatantya ng 0.6% na itinuturing na mababa). Tinatayang **187,000 kabataan sa ilalim ng 20** ay may ASD sa mga bansa sa Gulf. Ang unang autism center ng Saudi Arabia ay muling inilunsad sa Jeddah bilang isang nangungunang pasilidad sa mundo ng Arab
- Qatar: Prevalence ~1.1%; 151 kaso bawat 10,000 sa ilang ulat
- UAE: ~0.6%
- Karamihan sa mga center ay gumagamit ng ADI-R o ADOS diagnostic tool na may DSM-5 na pamantayan

**Mga Pangunahing Hamon**:
- Kakulangan ng sapat na sinanay na mga propesyonal (lalo na sa Egypt)
- Nag-uulat ang mga magulang sa US ng mas mataas na kasiyahan sa proseso ng diagnostic (median 3.0) kumpara sa mga bansang Arabo (2.5)
- Pangunahing hadlang: kawalan ng kamalayan ng publiko; paghahanap ng mga autism center

**Arabic Terminology**: Ang ASD ay karaniwang tinutukoy sa Arabic; ang mga mapagkukunan ay umiiral sa Arabic mula sa mga organisasyon tulad ng Autism Speaks

([Al Jazeera](https://www.aljazeera.com/features/2014/4/15/tackling-autism-in-the-middle-east); [Discovery ABA on Islam](https://www.discoveryaba.com/aba-therapy/islam-and-autism); [Arab Balita](https://www.arabnews.com/node/1476196/middle-east); [review ng PMC Gulf States](https://pmc.ncbi.nlm.nih.gov/articles/PMC4727667/))

---

### 2.5 SUB-SAHARAN AFRICA (Nigeria, Ethiopia, Somalia)

**Pangkalahatan**:
- Tinatantya ang prevalence na katulad ng ibang mga rehiyon, ngunit massively underdiagnosed
- Ang mababang kamalayan, hindi sapat na diagnostic tool, at mental health stigma ay mga pangunahing hadlang
- Iniuugnay ng mga magulang ang autism sa parehong **biomedical at supernatural/religious na mga kadahilanan**
- Ang mga batang may autism at ang kanilang mga pamilya ay nakakaranas ng pagbubukod, stigma, at negatibong paghatol

**Nigeria**:
- Naiulat na pagkalat: ~2.3% (maaaring sumasalamin sa mga salik ng socioeconomic, kahirapan, paniniwala sa kultura)
- Parehong nakikita ng South Africa at Nigeria ang "pagbubunyag" ng autism habang tumataas ang kamalayan

**Ethiopia**:
- Ang mga serbisyo ay "kaunti at higit sa lahat ay nakakulong sa kabisera ng lungsod" na may maliit na probisyon sa mga rural na lugar
- Malubha ang kakulangan ng mga dalubhasang propesyonal sa pangangalagang pangkalusugan

**Somalia/Somali Diaspora**:
- **Nakamamanghang paghahanap**: 1 sa 16 Somali na apat na taong gulang sa Minnesota ay may autism (kumpara sa 1 sa 53 para sa mga kaklase). Ang Somalis ay 6% ng populasyon ng pampublikong paaralan sa Minneapolis ngunit 17% ng mga mag-aaral sa espesyal na edukasyon sa maagang pagkabata ay may label na autistic
- Ang wikang Somali sa kasaysayan **walang salita para sa "autism"** -- ang linguistic gap na ito ay nag-aambag sa stigma at hindi pagkakaunawaan
- Bagong positibong termino na binuo: **"Maangaar"** = "natatanging isip" -- nilikha upang magbigay ng positibong pag-frame
- Karamihan sa mga magulang ng Somali ay naniniwala na ang autism ay sanhi ng **bakuna sa tigdas**
- **Somali Parents Autism Network (SPAN)** na itinatag noong 2014 ng Somali American immigrant na mga magulang upang turuan ang mga pamilya at ikonekta sila sa mga mapagkukunan
- **AuSM (Autism Society of Minnesota)** ay may mga multicultural na inisyatiba na nagta-target sa Somali community

([PMC Africa review](https://pmc.ncbi.nlm.nih.gov/articles/PMC10473371/); [PMC Sub-Saharan Africa](https://pmc.ncbi.nlm.nih.gov/articles/PMC6858850/); [PMC Somali knowledge pag-aaral](https://pmc.ncbi.nlm.nih.gov/articles/PMC10851585/); Journal](https://sahanjournal.com/health/autism-somali-new-terminology-community-acceptance-minnesota/))

---

### 2.6 EASTERN EUROPE (Russia, Ukraine, Poland)

**Russia**:
- Tinatayang 200,000-500,000 indibidwal na may ASD; Ang mga opisyal na istatistika ay nagmumungkahi ng ~1 sa 100 bata, ngunit marami ang nananatiling hindi nasuri/na-diagnosed
- **Soviet legacy**: Noong panahon ng Sobyet, ang autism ay binigyan ng minimal na pagkilala; ang mga bata ay kadalasang **maling na-diagnose na may schizophrenia, intelektwal na kapansanan, o "mga pagkaantala sa pag-unlad."** Ang tradisyon ng Sobyet ng **defektologiya** (defectology) -- isang diskarte sa espesyal na edukasyon -- ay ikinategorya ang mga batang may kapansanan sa ibang paraan kaysa sa Western system
- Mga pangunahing organisasyon: **Naked Heart Foundation** (nagtatrabaho sa Marcus Autism Center bilang isang modelo); **Pundasyon para sa Mga Problema sa Autism**; **Ang Ating Maaraw na Mundo**; **Russian Society for Autism**
- Ang pag-ampon ng ICD-10 ay isang milestone para sa standardized diagnosis
- Matinding kakulangan ng mga kwalipikadong propesyonal na dalubhasa sa autism

**Ukraine**:
- Ang mga autistic na nasa hustong gulang ay karaniwang hindi nasuri; karamihan sa mga espesyal na serbisyo ay pribado/nakabatay sa bayad
- Sa panahon ng Sobyet, ang mga batang may kapansanan ay na-institutionalize o inabandona; pagkatapos ng kalayaan (1991), marami ang nanatili sa bahay at kakaunti ang pumapasok sa paaralan hanggang **2011**
- Ang digmaan ay nagwasak ng mga serbisyo. Mga mahahalagang organisasyon: **Child with Future**, **Ask an Autistic** (naghahatid ng emergency aid), **"Ukraine autism help" Facebook group** (ginawa ni Iryna Sergiyenko)
- Ang Autism-Europe ay naglagay ng mga partikular na inisyatiba sa suporta para sa mga autistic na Ukrainians na nawalan ng tirahan dahil sa digmaan

**Poland**:
- **Autism-Poland Association** ay tumutulong sa pagsasama-sama ng mga autistic na tao at pamilya, kabilang ang mga Ukrainian refugee
- **JiM Foundation** (Lodz) -- organisasyong nagtataguyod ng autism
- Ang pagpopondo ng EU ay nagpabuti ng mga serbisyo sa mga nakaraang taon

([Autism Europe Ukraine](https://www.autismeurope.org/what-we-do/areas-of-action/support-for-autistic-people-in-ukraine/); [The Transmitter](https://www.thetransmitter.org/spectrum/researchers-advocates-rush-to-aid-autistic Club/ABA); Russia](https://kidsclubaba.com/autism-in-russia-understanding-prevalence-challenges-and-support-systems/); [Marcus Autism Center](https://www.marcus.org/get-involved/testimonials/social-impact/meet-the-naked-heart-foundation))

---

### 2.7 HAITI AT CARIBBEAN

**Autism Awareness**:
- Lubhang limitado ang kamalayan at mga serbisyo
- Mga taong may mga kapansanan na may label na **"kokobay"** (baliw), itinatakwil sa paaralan at simbahan, minsan ay iniiwan
- Ang mga magulang ay madalas **nahihiya at nakikita bilang isinumpa ni Vodou o ng Diyos**

**Vodou at Espirituwal na Paniniwala**:
- **Vodou priest (Hougans) at priestesses (Mambos)**, kasama ang Catholic at Protestant clergy, ay responsable para sa **karamihan ng mental health care** sa Haiti
- Ang mga pagkakaiba sa pag-unlad ay maaaring maiugnay sa mga espirituwal na sanhi sa halip na mga kondisyon ng neurodevelopmental
- Dapat kilalanin at magalang na i-navigate ng anumang app ang mga paniniwalang ito

**Mga Mapagkukunan at Organisasyon**:
- **Autism509** -- nonprofit na itinatag noong 2015 na nakatuon sa pagkonekta sa mga magulang ng Haitian sa buong mundo gamit ang mga mapagkukunan para sa pagpapalaki ng mga batang autistic
- **Federation for Children with Special Needs** ay nagbibigay ng mga mapagkukunan sa Haitian Creole
- **FAU (Florida Atlantic University) CARD program** ay sumusuporta sa autism sa komunidad ng Haitian
- Ang ilang mga magulang na Haitian ay naging **unang na-certify sa bansang Healthcare interpreter para sa Haitian Creole** sa kanilang mga estado upang tulungan ang agwat sa wika

**Haitian Creole Resources**:
- Ang Haitian Creole (isang halo ng French at maramihang wikang Aprikano) ay dapat na unahin para sa mga serbisyo ng interpreter
- Ang mga serbisyong sensitibo sa kultura ay dapat magbigay ng impormasyon sa **parehong Haitian Creole at French**

([FAU CARD](https://www.fau.edu/education/centersandprograms/card/newsevents/autism-in-the-haitian-community/); [Haitian Times](https://haitiantimes.com/2021/04/02/haitian-moms-of-autistic-kids-aim-to-remoget [PM] kalusugan](https://pmc.ncbi.nlm.nih.gov/articles/PMC6880247/); [FCSN Haitian Creole](https://fcsn.org/resources/parents-families/haitian-creole/))

---

## 3. INTERNATIONAL NA PINAKAMAHUSAY NA KASANAYAN

### Pinakamahusay na Mga Modelong Suporta sa Magulang

- **Sweden**: "pedagogical differentiation" -- indibidwal na suporta sa loob ng mga pangunahing setting
- **PACT ng UK (Preschool Autism Communication Therapy)**: Pamamagitan ng magulang na batay sa ebidensya; inangkop sa **PASS/PASS Plus** para sa Timog Asya -- na inihatid ng mga non-espesyalistang manggagawang pangkalusugan na may katapatan, na nagpapakita ng makabuluhang mga pagpapahusay sa komunikasyon ng magulang-anak at kalusugan ng isip ng magulang ([ScienceDirect PASS trial](https://www.sciencedirect.com/science/article/abs/pii/S22150366150003880))
- **PEERS (Program for the Education and Enrichment of Relational Skills)**: Isa sa pinakamadalas na mga interbensyon na iniangkop ayon sa kultura sa buong mundo
- **Parents Takeing Action**: Isang psycho-educational intervention na partikular na idinisenyo para sa mga Latino na magulang ng mga batang may ASD

### Mga Pamamagitan sa Autism na Nakabatay sa Teknolohiya

Ang mga diskarte na nakabatay sa teknolohiya ay nagpapalawak ng access, kabilang ang:
- Mga self-paced na kurso sa computer para sa pagsasanay sa tagapag-alaga
- Lingguhang virtual coaching session
- Mga app at larong nakabatay sa telepono
- Mga DVD para sa home-based na pag-aaral
- Augmented reality glasses na nagbibigay ng real-time na feedback sa emosyon
([Sumulong ang PMC sa suporta ng magulang](https://pmc.ncbi.nlm.nih.gov/articles/PMC11017782/))

### Cross-Cultural Autism Intervention Programs

- **Global Autism Project** kasosyo sa mga organisasyon ng autism sa buong mundo; ang kanilang **SkillCorps** na programa ay nagpapadala ng mga volunteer team (8-12 tao) sa mga partner site sa mga umuunlad na bansa para sa on-the-ground na pagsasanay. Kasama sa mga partner ang mga center sa Rwanda, Nicaragua, Kenya, at iba pa. Nagtuturo sila ng **Responsive Skills Training** para sa mga kredensyal ng RBT, IBT, at ABAT ([Global Autism Project](https://www.globalautismproject.org/))
- Isang meta-analysis ng mga interbensyon na tumutugon sa kultura ay nagsiwalat ng **malaki, positibo, at makabuluhang epekto** sa mga resulta ng social-communication, mga resulta sa kalusugan ng isip, at katapatan ng magulang sa pagpapatupad ([PMC meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC11260274/))

### UNESCO/UNICEF Resources on Disability Inclusion

- Hinihimok ng **Salamanca Framework for Action** (1994) ng UNESCO ang mga pamahalaan na turuan ang mga batang may kapansanan sa loob ng mga pangkalahatang sistema ng edukasyon
- Ang **Disability Inclusion Policy and Strategy 2022-2030** ng UNICEF ay nakatuon sa inclusive education
- **Universal Design for Learning (UDL)** at **Social and Emotional Learning (SEL)** na mga framework na inirerekomenda para sa mga inclusive na setting sa mga bansang mababa ang mapagkukunan
- Ang pambansang estratehikong plano ng Bangladesh para sa mga sakit sa neurodevelopmental na suportado ng mga internasyonal na kasosyo sa pag-unlad

### Mga International Autism Organization

- **Autism-Europe**: 90+ miyembrong organisasyon sa 40 European na bansa; kumakatawan sa ~5 milyong tao; gumagana sa WHO at UN. Nag-oorganisa ng internasyonal na kongreso bawat 3 taon ([Autism Europe](https://www.autismeurope.org/))
- **World Autism Organization** (WAO): Global coordination body
- **Global Autism Project**: Pagsasanay at pagbuo ng kapasidad sa mga umuunlad na bansa
- **PANAACEA** (Latin America): Pananaliksik at adbokasiya
- **Red Espectro Autista Latinoamerica (REAL)**: Multi-country research network

---

## 4. PANANALIKSIK SA KARANASAN NG IMIGRANT

### Paano Nagbabago ang Pag-unawa sa Autism Kapag Lumipat ang Mga Pamilya

Hinuhubog ng kultura kung paano naiintindihan ng mga pamilya ang mga karamdaman sa pag-unlad, at totoo ito lalo na para sa autism dahil:
1. Walang napagkasunduang dahilan
2. Ang diagnosis ay lubos na umaasa sa pamantayan ng pag-uugali
3. Malaki ang pagkakaiba-iba ng mga kaugalian sa pag-uugali sa mga kultura

Ang pananaw ng mga imigrante sa autism **ay hindi mauunawaan lamang sa pamamagitan ng akulturasyon** -- pinapanatili nila ang patuloy na pakikipag-ugnayan sa pagitan ng orihinal at bagong mga kultura, na lumilikha ng **"hybridized na mga pananaw"** ([PMC cultural beliefs study](https://pmc.ncbi.nlm.nih.gov/articles/PMC7008392/); [PMC conceptual] framework](https://pmc.ncbi.nlm.nih.gov/articles/PMC7614360/))

### Clash sa pagitan ng Home-Country Beliefs at US Medical Model

Mga pangunahing punto ng pag-igting na dokumentado sa pananaliksik:

1. **Relihiyoso/espirituwal kumpara sa medikal na sanhi**: Maaaring ipaliwanag ng mga Korean American ang autism bilang "kalooban o parusa ng Diyos." Sinisisi ng mga magulang ng Somali ang bakunang MMR. Iniuugnay ito ng mga magulang sa Latin American sa mal de ojo o mga banal na mensahe. Maaaring naniniwala ang mga pamilyang Haitian sa mga espirituwal na dahilan
2. **Indibidwalismo kumpara sa kolektibismo**: Pinahahalagahan ng kulturang Anglo-Amerikano ang indibidwal na awtonomiya; Ang mga kulturang kolektibista ay maaaring tumuon sa paggamot sa mga pag-uugali na nagpapadali sa **mga aktibidad ng pamilya at komunidad** kaysa sa indibidwal na kakayahan
3. **Mga alternatibong therapy**: Ang mga pamilyang African American, Asian American, at Latino ay maaaring **mas malabong tingnan ang mga sintomas bilang isang kondisyon sa kalusugan** at mas malamang na tuklasin ang mga pagbabago sa diyeta, pandagdag na bitamina, Traditional Chinese Medicine, o Ayurveda
4. **Authority deference**: Ang mga pamilyang Chinese immigrant ay nahihirapan sa adbokasiya sa isang kultura kung saan "ang hindi pagsang-ayon sa awtoridad ay itinuring na walang galang" -- maaaring hindi tanungin ng mga magulang ang mga doktor kahit na nalilito

([ScienceDirect barriers study](https://www.sciencedirect.com/science/article/abs/pii/S1876201818300285); [Scientific American](https://www.scientificamerican.com/article/why-autism-seems-to-cluster-in-some-immigrant-group-Chinese-imigrante/); pag-aaral](https://pmc.ncbi.nlm.nih.gov/articles/PMC6499700/))

### Mga Pag-aaral sa Bicultural Autism Families

- **Pag-aaral ng mga magulang na Chinese American (2023)**: Dahil sa kultural na stigma, ang mga magulang ay nagkakaiba sa mga pananaw sa diagnosis ng kanilang mga anak; ang adbokasiya ay mahirap sa kultura. Kasama sa mga rekomendasyon ang pagpapalakas ng mga mapagkukunan ng komunidad, mataas na kalidad na interpretasyon/pagsasalin, at komprehensibong pangangalaga sa koordinasyon ([PMC study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10693210/))
- **Pag-aaral ng mga Korean immigrant na ina (2024)**: Takot sa autism label dahil sa implikasyon nito ng "chronicity" vs. recovery. Ang "Pag-save ng mukha" at reputasyon ng pamilya ay humihimok ng pag-iwas sa diagnosis ([PMC study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11549211/))
- **Pag-aaral ng mga magulang ng Ethiopia/Eritrean (2023)**: Limitado ang dating kaalaman sa autism; iba't ibang karanasan sa mga tagapagbigay ng pangangalagang pangkalusugan; mga hadlang kabilang ang mga kakulangan at gastos ng provider; negatibong epekto sa partisipasyon ng mga manggagawa ([PubMed](https://pubmed.ncbi.nlm.nih.gov/37667075/))
- **Pag-aaral ng mga ama ng imigrante (2025)**: Pinamagatang "Bilang mga imigrante, lahat tayo ay nawala sa ating paglalakbay sa autism" -- nagdodokumento ng mga hadlang sa pantay na pag-access at pag-navigate sa serbisyo ([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S3050656525000604))

### Intergenerational na Pagkakaiba

- **Ang nakababatang henerasyon** ay nakakakuha ng impormasyon mula sa mga pinagmumulan ng wikang Ingles; **nakatatandang henerasyon** ay natututo sa pamamagitan ng katutubong wikang media
- Ang mga pakikipag-ugnayan sa pagitan ng mga henerasyon ay lumikha ng **hybridized na pananaw** sa autism
- Sa komunidad ng Korea, ang mga nakababatang henerasyon ay mas bukas ang pag-iisip at tinatanggap ang outreach para sa maagang pagtuklas
- Ang mga magulang ay maaaring magkaroon ng mga tradisyonal na paniniwala habang ang kanilang mga anak/apo na nakapag-aral sa US ay tinatanggap ang medikal na modelo

### Paano I-bridge ang Tradisyonal at Medikal na Pananaw

Mga diskarte na sinusuportahan ng pananaliksik:
- Dapat "suriin ng mga clinician ang kanilang sariling mga pananaw at paniniwala tungkol sa autism at panatilihin ang isang kakaibang paninindigan"
- Magbigay ng mga materyal na "isinalin sa isang **konteksto na may kakayahang pangkultura**, hindi lamang isinalin ayon sa wika"
- Tumutok sa koordinasyon ng pangangalaga na tumatawid sa iba't ibang sistema
- Tanggapin na ang ilang mga pamilya ay maaaring tumuon sa paggamot sa mga pag-uugali na nagpapadali sa mga aktibidad ng pamilya/komunidad sa halip na mga indibidwal na kasanayan
- Isama ang mga pinuno ng komunidad, pinuno ng relihiyon, at matatanda sa outreach
- Gumamit ng **mga modelo ng manggagawa sa kalusugan ng komunidad** (tulad ng mga ASHA ng India o modelo ng Bangladesh)

---

## 5. INTERNATIONAL SCREENING TOOLS

### Mga Tool na Lokal na Binuo

Binuo ng **India** ang pinakamalawak na hanay ng mga katutubong kasangkapan:
- **ISAA (Indian Scale for Assessment of Autism)** -- tool na ipinag-uutos ng pamahalaan
- **INCLEN Diagnostic Tool (INDT-ASD)** -- 98% sensitivity, 95% specificity, madaling pangasiwaan nang walang kinakailangang pagsasanay
- **Pictorial Autism Assessment Schedule (PAAS)** -- gumagamit ng mga litrato kasama ng text sa mga lokal na wika; idinisenyo para sa mga populasyon na mababa ang literacy; 21 item ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5296629/))
- **Chandigarh Autism Screening Instrument (CASI)**
- **Indian Autism Screening Questionnaire (IASQ)**
- **Nayak Autism Screening Instrument (NASI)**

([Springer review ng Indian tools](https://link.springer.com/article/10.1007/s40489-025-00495-0); [Indian Pediatrics](https://www.indianpediatrics.net/apr2024/321.pdf))

### Cross-Cultural Validation ng Western Tools

Ang **M-CHAT-R/F** (Modified Checklist for Autism in Toddlers, Revised with Follow-up) ay isinalin sa **48 na wika/dialect**, na may mga kultural na adaptasyon na pinag-aralan sa 19 na bansa at 10 wika. Gayunpaman:

- **Mahahalagang problema sa cross-cultural validity**: Sa Sri Lanka, ang sensitivity ng M-CHAT ay kasing baba ng **25%** sa populasyon ng Sinhalese -- ang ilang mga pag-uugali na itinuturing na red flag para sa autism ay "hindi kinikilala bilang abnormal ng mga Sinhalese na ina"
- **Ang adaptasyon ng Hapon** ay kinailangang isaalang-alang ang pag-aatubili na sumagot ng "oo" sa oo/hindi na mga tanong at tendensiyang bigyang-kahulugan ang kawalan ng interes sa ibang mga bata bilang "pagkamahiyain"
- **Moroccan Arabic adaptation** ay nagpakita ng magandang performance pagkatapos ng mahigpit na pasulong/paatras na pagsasalin
- **Brazilian adaptation** ay nagpakita ng Cronbach alpha na 0.95, sensitivity 0.94, specificity 0.91
- **Spanish adaptation** na-validate sa 2,480+ na bata sa Spain

**Mahalagang paghahanap**: Ang mga pagbabagong pangkultura/linggwistiko sa mga isinaling kasangkapan ay may posibilidad na tumaas kasabay ng hirap ng proseso ng adaptasyon. Ang mga pagkakaiba sa psychometric na katangian sa pagitan ng orihinal at inangkop na mga bersyon ay **pangkaraniwan, na nagbibigay-diin sa pangangailangan para sa data ng normatibong partikular sa populasyon.

**Systemic problem**: Isang pag-aaral noong 2013 ng 267 na mga pediatrician ng California ang natagpuang **mas mababa sa isang-katlo** ang nag-aalok ng autism screening sa Spanish, at **10%** lang ang nag-aalok ng parehong Spanish-language autism at general developmental screening.

([PMC systematic review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11437884/); [PubMed review](https://pubmed.ncbi.nlm.nih.gov/25008216/); [F1000Research](https://f1000cleresearch/1)-article

---

## 6. MAHALAGANG TERMINOLOHIYA SA MGA WIKA

| Wika | Termino para sa Autism | Mga Tala |
|---|---|---|
| **Espanyol** | **Autismo** / **Trastorno del Espectro Autista (TEA)** | Ang "Autismo" ay maaaring may mas malambot na konotasyon sa ilang komunidad |
| **Intsik (Mandarin)** | **孤独症 (guduzheng)** o **自闭症 (zibizheng)** | Kolokyal: "来自星星的孩子" (bata mula sa mga bituin) |
| **Koreano** | **자폐증 (japyejeung)** | Mas gusto ng mga magulang ang "border child" upang maiwasan ang label na |
| **Somali** | **Maangaar** (bagong positibong termino = "natatanging isip") | Dati walang salita ang umiral; stigma ng komunidad na nauugnay sa linguistic gap |
| **Haitian Creole** | Magagamit ang mga mapagkukunan sa pamamagitan ng FCSN | Unahin ang Haitian Creole kaysa sa French para sa accessibility |
| **Arabic** | **التوحد (al-tawahhud)** | Mga mapagkukunan mula sa Autism Speaks at iba pa |
| **Hindi** | **ऑटिज़्म (autism)** / **स्वलीनता (svalinta)** | Umiiral ang maramihang mga adaptasyon sa wikang Indian |

---

## 7. KRITIKAL NA MGA IMPLIKASYON SA DESIGN NG APP

Batay sa pananaliksik na ito, narito ang mga pinakanaaaksyunan na takeaway para sa hackathon app:

1. **Huwag ipagpalagay ang isang "karanasan sa imigrante"** -- malaki ang pagkakaiba ng pag-unawa sa autism ayon sa bansang pinagmulan, antas ng edukasyon, henerasyon, at haba ng panahon sa US

2. **Ang nilalamang multilingguwal ay kailangan ngunit hindi sapat** -- dapat na **nakaayon sa kultura** ang pagsasalin, hindi lamang isinalin ayon sa wika. Ang isang direktang pagsasalin ng medikal na terminolohiya ay maaaring walang kabuluhan o kahit na nakakasakit sa ilang kultural na konteksto

3. **Kilalanin ang espirituwal at tradisyonal na mga paniniwala nang may paggalang** -- hindi dapat bale-walain ng app ang mga paniniwala tungkol sa mga espirituwal na dahilan ngunit sa halip ay magbigay ng **tulay** sa pagitan ng tradisyonal na pag-unawa at ng sistemang medikal ng US. Mga pariralang tulad ng "Sa aming tradisyon, maaari naming maunawaan ito bilang X. Sa American medicine, ito ay tinatawag na Y. Parehong kinikilala ng mga pananaw na ang iyong anak ay natatangi."

4. **Tahasang tugunan ang kahihiyan/stigma** -- maraming kultura (Korean, Chinese, Latin American, Somali, Haitian) ang nagdadala ng matinding kahihiyan sa may kapansanan. Dapat gawing normal ng app ang paghahanap ng tulong at magbigay ng mga kuwento mula sa mga pamilyang may parehong kultura

5. **Isama ang suporta sa pag-navigate para sa mga sistema ng US** -- nahaharap ang mga pamilyang imigrante sa mga hadlang sa wika, hindi pamilyar sa mga proseso ng IEP ng paaralan, mga sistema ng medikal na insurance, at mga opsyon sa therapy. Ang isang guided walkthrough sa kanilang wika ay magiging lubhang mahalaga

6. **Gamitin ang mga modelo ng manggagawang pangkalusugan ng komunidad** -- ipinapakita ng pananaliksik na ang mga hindi espesyalistang manggagawa ay maaaring epektibong makapaghatid ng mga interbensyon na pinapamagitan ng magulang (modelo ng PASS Plus). Maaaring magsilbi ang app bilang digital na bersyon ng diskarteng ito

7. **Magbigay ng mga mapagkukunan para sa buong pamilya** -- Kasama sa mga kulturang kolektibista ang pinalawak na pamilya sa pangangalaga ng bata. Ang mga lolo't lola at iba pang mga kamag-anak ay nangangailangan din ng impormasyon, lalo na upang tulay ang intergenerational gaps sa pagkakaunawaan

8. **I-highlight ang mga organisasyong partikular sa diaspora** -- SPAN (Somali Parents Autism Network), Autism509 (Haitian), Autism Society Philippines na mga kabanata sa US, atbp. Ang pagkonekta sa mga pamilya na may parehong kulturang komunidad ay makapangyarihan

9. **Isama ang impormasyon sa screening na may mga cultural caveat** -- tandaan na ang mga tool sa pag-screen sa Kanluran ay maaaring hindi makakuha ng autism nang pantay-pantay sa mga kultura; hikayatin ang propesyonal na pagsusuri kahit na ang isang tool sa pag-screen ay hindi nagba-flag ng mga alalahanin

10. **Gamitin ang "natatanging pag-iisip" na pag-frame** -- ang konsepto ng "Maangaar" ng komunidad ng Somali at ang pag-frame ng Chinese na "bata mula sa mga bituin" ay nagbibigay ng katunog sa kultura, positibong paraan upang maunawaan ang autism na maaaring iakma sa mga komunidad

---

**Mga Pangunahing Pinagmumulan ng Pananaliksik at Mga Organisasyong Sinangguni**:
- [WHO Autism Fact Sheet](https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders)
- [Global Burden of Disease Study 2021 / PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11917377/)
- [World Population Review Autism Rates](https://worldpopulationreview.com/country-rankings/autism-rates-by-country)
- [Ang Transmitter Global Autism Prevalence Map](https://autismprevalence.thetransmitter.org/)
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
- [NiMH Spanish Autism Resources](https://www.nimh.nih.gov/health/publications/espanol/trastornos-del-espectro-autista)
---

## Karagdagang Pananaliksik (Na-update noong Marso 2026)

### Bilingualism at Autism — Pinagkasunduan sa Pananaliksik

**Mahalagang paghahanap: HINDI nakakasama ang bilingguwalismo sa pag-unlad ng wika ng mga bata na autistic.** Kinumpirma ito ng maraming sistematikong pagsusuri:

1. **Systematic Review (2023)** — "Mukhang may pinagkasunduan na ang bilingualism ay hindi nangangailangan ng anumang karagdagang kahirapan para sa pagbuo ng wika sa mga batang may ASD mula sa edad na 3." Sa pinakamasama walang epekto; sa pinakamahusay, mga pakinabang sa adaptive functioning, panlipunang komunikasyon, at receptive na wika. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S217358082300072X))

2. **Gilhuber et al. (2023)** — Ang sistematikong pagsusuri ng wika/komunikasyon sa mga batang autistic sa maraming wika ay walang nakitang ebidensya ng mga negatibong epekto. ([SAGE Journals](https://journals.sagepub.com/doi/10.1177/13623613221147780))

3. **PMC Review** — "Ang pananaliksik hanggang sa kasalukuyan ay nagpapahiwatig na sa pinakamasamang pagkakalantad sa bilingual sa mga batang may ASD ay walang epekto sa pag-unlad ng wika at sa pinakamahusay na nag-aalok ng mga pakinabang." ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7370402/))

4. **Frontiers in Psychology (2024)** — Walang nakitang negatibong epekto ang pag-aaral sa mga epekto ng pagkakalantad sa bilingual na wika sa mga batang may ASD. ([Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1412339/full))

5. **Stakeholder Perspectives (2025)** — Napagtanto ng mga autistic na indibidwal ang bilingualism bilang isang asset na nagpapayaman sa kanilang buhay sa pamamagitan ng pagpapatibay ng mga koneksyon sa lipunan, pagpapalakas ng mga relasyon sa pamilya, at pagbibigay ng mas malaking personal/propesyonal na mga pagkakataon. ([Springer](https://link.springer.com/article/10.1007/s40489-025-00519-9))

**Kritikal para sa app:** Sa kabila ng pinagkasunduan sa pananaliksik, maraming magulang ang nag-uulat na **pinapayuhan ng mga provider na mag-alis ng wika** — HINDI ito batay sa ebidensya. Dapat na kitang-kitang itampok ng app ang pananaliksik na ito para tiyakin ang mga pamilyang multilinggwal. ([ASHA Journal](https://pubs.asha.org/doi/10.1044/2016_JSLHR-L-15-0348))
