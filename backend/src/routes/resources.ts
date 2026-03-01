import { Router, Response } from "express";
import { AuthRequest, authMiddleware } from "../middleware/auth";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// ── Resource interface ───────────────────────────────────────────────────────
interface Resource {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string;
  steps: string[];
  icon: string;
}

// ── Static resources ─────────────────────────────────────────────────────────
const RESOURCES: Resource[] = [
  {
    id: "res-iep",
    category: "Education",
    title: "Individualized Education Program (IEP)",
    summary: "A legally binding document that outlines your child's special education services and goals.",
    details:
      "An IEP is developed by a team that includes parents, teachers, and specialists. Under IDEA (Individuals with Disabilities Education Act), your child is entitled to a Free Appropriate Public Education (FAPE) in the Least Restrictive Environment (LRE). You have the right to participate in every IEP meeting and to disagree with the school's recommendations. IEPs are reviewed at least annually but you can request a meeting at any time.",
    steps: [
      "Request an evaluation in writing to your school district's special education department.",
      "The school has 60 days to complete the evaluation after you provide consent.",
      "Attend the IEP meeting — bring your own notes, observations, and any private evaluations.",
      "Review the proposed goals carefully. You can negotiate and request changes before signing.",
      "Monitor progress on IEP goals throughout the year and request data from the school.",
      "If you disagree, you can file for mediation or a due process hearing at no cost to you.",
    ],
    icon: "school-outline",
  },
  {
    id: "res-regional-center",
    category: "State Services",
    title: "Regional Center Services (California)",
    summary: "Free lifelong services for Californians with developmental disabilities, including autism.",
    details:
      "California's 21 Regional Centers provide assessment, diagnosis, and services for individuals with developmental disabilities regardless of income or immigration status. Services can include Applied Behavior Analysis (ABA), respite care, speech therapy, occupational therapy, social skills groups, and family support. Regional Center services are an entitlement — if your child qualifies, they cannot be denied services due to funding.",
    steps: [
      "Contact your local Regional Center and request an intake appointment.",
      "Bring any existing evaluations, medical records, and school documents.",
      "Your child will be assessed — this process can take up to 120 days.",
      "If eligible, you'll work with a Service Coordinator to develop an Individual Program Plan (IPP).",
      "Request specific services you need — ABA, respite, speech therapy, etc.",
      "Review your IPP annually and request changes as your child's needs evolve.",
    ],
    icon: "business-outline",
  },
  {
    id: "res-early-start",
    category: "State Services",
    title: "Early Start Program (Ages 0-3)",
    summary: "California's early intervention program for infants and toddlers with developmental delays.",
    details:
      "The Early Start program serves children from birth to age 3 who have a developmental delay or an established risk condition. Services are provided in natural environments (your home, daycare, park) and are free regardless of income. Early intervention during this critical period can significantly improve outcomes. After age 3, children transition to school district services through the IEP process.",
    steps: [
      "Call your local Regional Center or school district to refer your child.",
      "An evaluation will be scheduled within 45 days of referral.",
      "If eligible, an Individualized Family Service Plan (IFSP) is developed within 45 days of eligibility.",
      "Services begin as soon as possible after the IFSP is signed.",
      "At age 2.5, the transition planning process to preschool services begins.",
      "You can continue Regional Center services after age 3 through a separate eligibility process.",
    ],
    icon: "happy-outline",
  },
  {
    id: "res-insurance",
    category: "Insurance & Funding",
    title: "Insurance Coverage for Autism Services",
    summary: "Understanding your rights to insurance-covered autism therapies and how to appeal denials.",
    details:
      "Most states have autism insurance mandates requiring coverage for autism-related services. In California, SB 946 requires health plans to cover behavioral health treatment (including ABA) for autism. Federal mental health parity laws also require equal coverage for mental health and medical conditions. If your insurance denies coverage, you have the right to appeal internally and externally. The California Department of Managed Health Care (DMHC) can help with external appeals.",
    steps: [
      "Request a copy of your plan's benefits for autism and behavioral health services.",
      "Get a written referral from your child's doctor specifying the recommended treatment.",
      "Submit a pre-authorization request to your insurance company.",
      "If denied, request the denial in writing with the specific reason and policy citation.",
      "File an internal appeal with a letter of medical necessity from your doctor.",
      "If the internal appeal fails, file a complaint with your state's insurance regulator (DMHC in CA).",
    ],
    icon: "shield-checkmark-outline",
  },
  {
    id: "res-504",
    category: "Education",
    title: "504 Plan Accommodations",
    summary: "A plan for classroom accommodations that doesn't require special education eligibility.",
    details:
      "A 504 Plan is based on Section 504 of the Rehabilitation Act and provides accommodations to ensure equal access to education. Unlike an IEP, a 504 Plan doesn't require a special education classification — it covers any child with a disability that substantially limits a major life activity (including learning and social interaction). Common accommodations include preferential seating, extended time on tests, sensory breaks, and visual schedules.",
    steps: [
      "Write a letter to your school requesting a 504 evaluation, citing your child's diagnosis or suspected disability.",
      "Provide documentation: medical records, evaluations, teacher observations.",
      "Attend the 504 meeting with the school team to discuss accommodations.",
      "Review the proposed accommodations and suggest additions based on your child's needs.",
      "The plan should be reviewed annually — request a meeting if accommodations aren't being implemented.",
      "If the school refuses to evaluate or provide a 504, you can file a complaint with the Office for Civil Rights (OCR).",
    ],
    icon: "document-text-outline",
  },
  {
    id: "res-speech",
    category: "Therapies",
    title: "Speech and Language Therapy",
    summary: "How to access speech therapy services and what to expect from treatment.",
    details:
      "Speech-Language Pathologists (SLPs) work on much more than speech — they address all aspects of communication including understanding language, using words, social communication, and even feeding/swallowing issues. For autistic children, SLPs often work on functional communication (the ability to express wants and needs), pragmatic language (social use of language), and augmentative and alternative communication (AAC) devices. Research strongly supports maintaining the home language in bilingual families — bilingualism does not delay language development in autistic children.",
    steps: [
      "Ask your pediatrician for a referral to a speech-language pathologist experienced with autism.",
      "Check multiple access points: insurance, Regional Center, school district (IEP), and university clinics (often lower cost).",
      "Look for an SLP with experience in AAC if your child is minimally verbal — not all SLPs specialize in this.",
      "Ask about parent coaching models where the SLP trains you to support communication throughout the day.",
      "Request measurable goals and regular progress reports.",
      "If your child is bilingual, find an SLP who supports home language maintenance or request an interpreter.",
    ],
    icon: "chatbubbles-outline",
  },
  {
    id: "res-aba",
    category: "Therapies",
    title: "ABA Therapy: What to Know",
    summary: "Understanding Applied Behavior Analysis therapy — benefits, concerns, and how to find quality providers.",
    details:
      "Applied Behavior Analysis (ABA) is the most commonly recommended and researched therapy for autism. Modern ABA has evolved significantly from its origins and now emphasizes play-based, naturalistic approaches that follow the child's interests. However, the quality varies enormously between providers. Good ABA looks like fun, engaging activities — not drills at a table. Red flags include ignoring the child's distress, using food deprivation as motivation, or focusing solely on compliance. You have the right to observe sessions and should feel comfortable with your child's treatment.",
    steps: [
      "Research providers carefully — ask about their approach (naturalistic vs discrete trial) and supervision ratios.",
      "Request to observe sessions before committing, and periodically after starting.",
      "Ensure the program is supervised by a Board Certified Behavior Analyst (BCBA) who sees your child regularly.",
      "Discuss goals together — prioritize functional skills and communication over compliance-based goals.",
      "Monitor your child's emotional wellbeing — therapy should not cause distress, anxiety, or avoidance.",
      "Explore alternatives or complements: speech therapy, occupational therapy, developmental approaches like DIR/Floortime.",
    ],
    icon: "fitness-outline",
  },
  {
    id: "res-undocumented",
    category: "Immigration",
    title: "Rights for Undocumented Families",
    summary: "Disability services available regardless of immigration status, and how to access them safely.",
    details:
      "Many critical services for children with autism are available regardless of immigration status. Schools must educate all children (Plyler v. Doe), Regional Centers cannot ask about immigration status, and Medi-Cal covers children regardless of status through programs like Medi-Cal for Children. Schools and healthcare providers receiving federal funding cannot share information with immigration enforcement. You have the right to bring an advocate or interpreter to any meeting.",
    steps: [
      "Contact your local Regional Center — they are prohibited from asking about immigration status.",
      "Enroll your child in school — all children have the right to public education regardless of status.",
      "Apply for Medi-Cal for your child through your county social services office.",
      "Request an interpreter for all meetings — this is your legal right.",
      "Know your rights: you do not have to open your door to ICE without a judicial warrant signed by a judge.",
      "Connect with local immigrant rights organizations for support navigating services — many offer free legal clinics.",
    ],
    icon: "people-outline",
  },

  // ── Federal Programs ────────────────────────────────────────────────────────
  {
    id: "res-idea-part-c",
    category: "Federal Programs",
    title: "IDEA Part C — Early Intervention (Birth to Age 3)",
    summary:
      "Free federal early intervention services for infants and toddlers with developmental delays, including autism.",
    details:
      "Part C of the Individuals with Disabilities Education Act (IDEA) is a federal grant program that helps states operate comprehensive early intervention services for infants and toddlers (birth through age 2) with disabilities and their families. Services include speech therapy, occupational therapy, physical therapy, behavioral support, assistive technology, and family training. Each child receives an Individualized Family Service Plan (IFSP). Services are provided in natural environments such as the home or daycare. Evaluations are always free, and services are provided at no cost or low cost depending on your state. IMPORTANT: Services are available to ALL children regardless of immigration status.",
    steps: [
      "Contact your state's Part C early intervention program — find your state coordinator at ectacenter.org/contact/ptccoord.asp.",
      "Request a free developmental evaluation for your child — the program must complete it within 45 days.",
      "If eligible, participate in developing your child's Individualized Family Service Plan (IFSP) with the team.",
      "Services begin as soon as possible after you sign the IFSP — ask about speech, OT, PT, and behavioral support.",
      "Review the IFSP every 6 months and request changes whenever your child's needs change.",
      "At age 2.5, begin transition planning to Part B preschool services (ages 3-21) through your school district.",
    ],
    icon: "body-outline",
  },
  {
    id: "res-idea-part-b",
    category: "Federal Programs",
    title: "IDEA Part B — Special Education (Ages 3-21)",
    summary:
      "Free special education and related services for children and youth with autism through the public school system.",
    details:
      "Part B of IDEA guarantees all children with disabilities, including autism, the right to a Free Appropriate Public Education (FAPE) in the Least Restrictive Environment (LRE). Autism is one of 14 qualifying disability categories. Your child is entitled to an Individualized Education Program (IEP) that outlines specific goals, services, and accommodations. Related services can include speech therapy, occupational therapy, social skills training, behavioral support, and transportation. Section 619 covers preschool grants for children ages 3-5. All services are completely free. Schools CANNOT ask about immigration status under the Supreme Court's 1982 Plyler v. Doe decision.",
    steps: [
      "Submit a written request for a special education evaluation to your child's school district.",
      "The school must complete the evaluation within 60 days of receiving your written consent.",
      "Attend the IEP meeting — you are an equal member of the team and can bring an advocate or interpreter.",
      "Review proposed goals and services carefully — negotiate changes and do not sign until you agree.",
      "Monitor IEP goal progress throughout the year and request data reports from the school.",
      "If you disagree with the school, request mediation or file for a due process hearing at no cost to you.",
    ],
    icon: "school-outline",
  },
  {
    id: "res-medicaid-waivers",
    category: "Federal Programs",
    title: "Medicaid Waivers for Autism (by State)",
    summary:
      "Home and Community-Based Services (HCBS) waivers that fund autism therapies, respite care, and support services through Medicaid.",
    details:
      "Medicaid Home and Community-Based Services (HCBS) waivers allow states to provide services to people with disabilities (including autism) in their homes and communities rather than in institutions. These waivers vary significantly by state but commonly cover ABA therapy, respite care, speech therapy, occupational therapy, personal care, supported employment, day habilitation, and family training. Some states have autism-specific waivers (such as Maryland's Autism Waiver), while others include autism under broader developmental disability waivers. Wait lists can be long — sometimes years — so apply as early as possible. Eligibility is typically based on the child's disability level, not family income.",
    steps: [
      "Contact your state's Medicaid office or developmental disabilities agency to learn which waivers serve children with autism.",
      "Apply for all waivers your child may qualify for — you can be on multiple wait lists simultaneously.",
      "Gather documentation: autism diagnosis, medical records, school evaluations, and functional assessments.",
      "If placed on a wait list, ask about your position and estimated wait time — follow up regularly every 3-6 months.",
      "Once approved, work with your service coordinator to develop a person-centered plan listing all needed services.",
      "Review your plan annually and request additional services as your child's needs change — you have the right to appeal any denial.",
    ],
    icon: "medkit-outline",
  },
  {
    id: "res-ssi-children",
    category: "Federal Programs",
    title: "SSI Benefits for Children with Autism",
    summary:
      "Monthly cash assistance from Social Security for low-income families with children who have significant autism-related disabilities.",
    details:
      "Supplemental Security Income (SSI) provides monthly cash benefits to children with disabilities whose families have limited income and resources. The federal benefit rate is approximately $967 per month (2025), and many states add a supplemental amount. Autism is listed in the Social Security Administration's Blue Book under Section 112.10 for children. To qualify, your child must have medical documentation of deficits in verbal and nonverbal communication, social interaction, and restricted/repetitive patterns of behavior that significantly limit functioning. Children receiving SSI may also automatically qualify for Medicaid in many states, providing access to therapy services. Note: Only SSI (not SSDI) is available for children.",
    steps: [
      "Schedule an appointment at your local Social Security Administration (SSA) office — children's SSI applications cannot be completed online.",
      "Gather required documents: child's birth certificate, Social Security number, medical records, school evaluations, and family financial records (income, bank statements, other benefits).",
      "Complete the SSI application and the Child Disability Report detailing how autism affects your child's daily functioning.",
      "Cooperate with any additional evaluations SSA may request — these are free and help determine eligibility.",
      "If denied, file an appeal within 60 days — many claims are approved on appeal. Consider contacting a disability attorney (many work on contingency).",
      "If approved, report any changes in income, living situation, or your child's condition to SSA to maintain benefits.",
    ],
    icon: "cash-outline",
  },
  {
    id: "res-tricare-autism",
    category: "Federal Programs",
    title: "TRICARE Autism Coverage (Military Families)",
    summary:
      "Comprehensive autism services for military families including ABA therapy through TRICARE's Autism Care Demonstration.",
    details:
      "TRICARE covers Applied Behavior Analysis and other autism services for all TRICARE beneficiaries through the Autism Care Demonstration (ACD), which runs through December 31, 2028. Your child receives a 6-month authorization for ABA services, and a new referral from your ASD diagnosing provider is required every two years. Each child in the ACD is assigned an Autism Services Navigator (ASN) who helps coordinate care between speech therapy, ABA, and your pediatrician. TRICARE also covers speech therapy, occupational therapy, and other medically necessary treatments for autism. In September 2025, the National Academy of Sciences recommended that ABA be made a permanent basic TRICARE benefit rather than a demonstration program. ABA services require locations with board-certified behavior analysts.",
    steps: [
      "Obtain an autism diagnosis for your child from a TRICARE-authorized provider (developmental pediatrician, psychologist, or psychiatrist).",
      "Get a referral from your child's diagnosing provider specifically for ABA and any other autism-related services.",
      "Contact your assigned Autism Services Navigator (ASN) — they will help you coordinate and access all available services.",
      "Find TRICARE-authorized ABA providers in your area through the TRICARE provider directory at tricare.mil.",
      "Ensure your child's authorization is renewed every 6 months and the referral is updated every 2 years.",
      "If you face denials or access issues, contact the TRICARE Beneficiary Counseling and Assistance Coordinator (BCAC) for help with appeals.",
    ],
    icon: "flag-outline",
  },

  // ── Therapy Types ───────────────────────────────────────────────────────────
  {
    id: "res-therapy-aba",
    category: "Therapies",
    title: "Applied Behavior Analysis (ABA)",
    summary:
      "The most researched autism therapy — uses positive reinforcement to build skills and reduce challenging behaviors.",
    details:
      "Applied Behavior Analysis is considered an evidence-based best practice treatment by the US Surgeon General and the American Psychological Association. ABA breaks new skills into small, manageable steps and uses positive reinforcement to encourage desired behaviors. A Board Certified Behavior Analyst (BCBA) develops an individualized treatment plan based on a Functional Behavior Assessment. Modern ABA emphasizes naturalistic, play-based approaches that follow the child's interests. Therapy can be provided in-home, at a clinic, or in school settings, typically ranging from 10 to 40 hours per week depending on the child's needs. Parents are trained to reinforce skills throughout the day.",
    steps: [
      "Get a formal autism diagnosis and a referral from your pediatrician for ABA services.",
      "Contact your insurance, Medicaid, or state developmental disabilities agency to confirm ABA coverage and find approved providers.",
      "Schedule a Functional Behavior Assessment (FBA) with a BCBA — this evaluates your child's strengths, challenges, and family goals.",
      "Review and approve the individualized treatment plan — ensure goals focus on communication, functional skills, and independence.",
      "Participate in parent training sessions so you can reinforce skills consistently at home.",
      "Request regular progress reports with data and attend plan reviews — adjust goals as your child grows.",
    ],
    icon: "fitness-outline",
  },
  {
    id: "res-therapy-speech",
    category: "Therapies",
    title: "Speech-Language Therapy",
    summary:
      "Helps children develop communication skills — from first words to conversation, including non-verbal communication methods.",
    details:
      "Speech-Language Therapy is the most common developmental therapy for children with autism, provided by a licensed Speech-Language Pathologist (SLP). It addresses understanding language (receptive), expressing wants and needs (expressive), social use of language (pragmatic), articulation, and feeding/swallowing difficulties. For minimally verbal children, SLPs may introduce Augmentative and Alternative Communication (AAC) such as picture exchange systems, sign language, or speech-generating devices. Research shows that with early intervention, two out of three preschoolers with autism significantly improve communication skills. Importantly, bilingualism does NOT delay language in autistic children — maintaining the home language is recommended.",
    steps: [
      "Ask your pediatrician for a referral to an SLP experienced with autism spectrum disorders.",
      "Access services through multiple channels: health insurance, Medicaid, school district IEP, state early intervention, or university speech clinics (often lower cost).",
      "During the evaluation, share examples of how your child communicates at home — videos are very helpful.",
      "If your child is minimally verbal, specifically request an SLP with AAC expertise — not all SLPs specialize in this.",
      "Ask about parent coaching models where the SLP trains you to embed communication practice into daily routines.",
      "If your family speaks another language at home, request a bilingual SLP or interpreter — continue using your home language with your child.",
    ],
    icon: "chatbubbles-outline",
  },
  {
    id: "res-therapy-ot",
    category: "Therapies",
    title: "Occupational Therapy (OT)",
    summary:
      "Builds independence in daily living skills, sensory processing, and fine motor abilities.",
    details:
      "Occupational Therapy helps children with autism develop the skills needed for daily living and independence. OTs work on fine motor skills (writing, buttoning, using utensils), sensory processing and regulation (helping children who are over- or under-sensitive to sensory input), self-care routines (dressing, toileting, brushing teeth), play skills, and classroom readiness. Sensory integration therapy, often provided by OTs, helps children better process and respond to sensory information that may be overwhelming or confusing. OTs create individualized treatment plans and use activities that look like play but are carefully designed to build specific skills. They also recommend environmental modifications and sensory tools for home and school.",
    steps: [
      "Request an OT evaluation through your pediatrician, school district, or state early intervention program.",
      "During the evaluation, describe your child's daily routine challenges — eating, dressing, transitions, sensory sensitivities.",
      "Review the treatment plan and ensure goals address your highest priority daily living concerns.",
      "Ask the OT for a home sensory diet — a personalized plan of sensory activities to do throughout the day.",
      "Practice OT-recommended strategies consistently at home, especially during routines like meals, bath time, and getting dressed.",
      "Request school-based OT through your child's IEP if fine motor, sensory, or self-care needs affect school participation.",
    ],
    icon: "hand-left-outline",
  },
  {
    id: "res-therapy-pt",
    category: "Therapies",
    title: "Physical Therapy (PT)",
    summary:
      "Improves gross motor skills, coordination, strength, and physical confidence for safe movement in all environments.",
    details:
      "Physical Therapy helps children with autism improve gross motor skills (walking, running, jumping, climbing), balance and coordination, core strength, body awareness, and spatial navigation. Physical therapists evaluate children's functional motor limitations and create plans to address them. For school-age children, PTs help with navigating hallways, playgrounds, cafeterias, and school buses safely. They also work on movement skills needed to participate in social games and peer interactions. PT can be critical for children who have low muscle tone, coordination difficulties, or motor planning challenges that are common in autism. Services can be accessed through health insurance, early intervention programs, school IEPs, or outpatient clinics.",
    steps: [
      "Ask your pediatrician to evaluate whether your child has gross motor delays or coordination concerns that warrant a PT referral.",
      "Schedule a PT evaluation — the therapist will assess balance, coordination, strength, motor planning, and functional mobility.",
      "Review the treatment plan and discuss which motor milestones and functional skills are prioritized.",
      "Incorporate PT-recommended exercises into daily routines — many can be made into fun games at home.",
      "Request school-based PT through the IEP if motor difficulties affect your child's ability to navigate school safely.",
      "Reassess progress every 3-6 months and adjust goals as your child develops new physical skills.",
    ],
    icon: "walk-outline",
  },
  {
    id: "res-therapy-floortime",
    category: "Therapies",
    title: "DIR/Floortime",
    summary:
      "A relationship-based approach that follows the child's lead during play to build social, emotional, and intellectual foundations.",
    details:
      "DIR stands for Developmental, Individual-differences, Relationship-based. Developed by Dr. Stanley Greenspan in the 1980s, this approach builds foundations for social, emotional, and intellectual growth through joyful, child-led interactions rather than targeting specific behaviors. The primary strategy involves adults getting on the floor and following the child's interests to expand 'circles of communication' — back-and-forth interactions. Floortime typically involves 2-5 hours per day broken into 20-30 minute sessions. Research shows progress in communication, emotional functioning, daily living skills, and parent-child relationships. DIR/Floortime is recognized by the National Professional Development Center on Autism Spectrum Disorder and can be done by parents at home with professional guidance.",
    steps: [
      "Learn the basics of DIR/Floortime through the Interdisciplinary Council on Development and Learning (ICDL) at icdl.com — they offer parent resources.",
      "Find a DIR/Floortime-trained therapist through the ICDL provider directory or ask your child's developmental pediatrician for referrals.",
      "Begin with 20-minute Floortime sessions: sit on the floor, follow your child's lead, and try to expand back-and-forth interactions.",
      "Focus on emotional connection first — join in what your child enjoys without trying to redirect or teach specific skills.",
      "Gradually increase the number and length of sessions, aiming for multiple short sessions throughout the day.",
      "Work with a trained professional to learn how to address your child's individual sensory and developmental profile during play.",
    ],
    icon: "heart-outline",
  },
  {
    id: "res-therapy-teacch",
    category: "Therapies",
    title: "TEACCH (Structured Teaching)",
    summary:
      "A visual, structured teaching method that organizes the physical environment to help autistic children learn independently.",
    details:
      "TEACCH (Treatment and Education of Autistic and Communication Handicapped Children) was developed at the University of North Carolina by Dr. Eric Schopler and Dr. Robert Reichler in the 1960s. It emphasizes structured teaching tailored to how autistic individuals process information, particularly through visual supports. Core principles include organization of the physical environment, predictable sequences of activities, visual schedules, structured work systems, and visually organized tasks. TEACCH reduces anxiety by making expectations clear and predictable, and significantly improves transitions between activities. Research shows increased independence in daily tasks, self-care, organization, and following routines. Parents can implement TEACCH principles at home by creating visual schedules and organized spaces.",
    steps: [
      "Learn TEACCH basics through the TEACCH Autism Program at UNC (teacch.com) — they offer training for parents and professionals.",
      "Create a visual daily schedule for your child using pictures or photos showing the sequence of activities throughout the day.",
      "Organize your home environment: designate clear areas for specific activities (play area, work area, calm-down space) with visual labels.",
      "Implement work systems for tasks: use a left-to-right layout showing what to do, how much to do, and what comes next.",
      "Use visual timers and transition warnings (e.g., 'first homework, then iPad') to reduce anxiety during activity changes.",
      "Consult with a TEACCH-trained professional to customize the structured teaching approach for your child's specific strengths and needs.",
    ],
    icon: "grid-outline",
  },
  {
    id: "res-therapy-social-skills",
    category: "Therapies",
    title: "Social Skills Groups",
    summary:
      "Structured group settings where children with autism practice social interaction, conversation, and friendship skills with peers.",
    details:
      "Social Skills Groups bring together children on the autism spectrum (sometimes mixed with neurotypical peers) to practice social interaction in a structured, supportive environment. Led by licensed clinicians such as speech-language pathologists or psychologists, these groups work on conversational skills, reading social cues, perspective-taking, making and maintaining friendships, emotional regulation, and cooperative play. A clinician identifies individualized objectives for each child and tracks progress weekly. Research shows positive impacts on social competence, friendship quality, and reduced loneliness. Parents often participate in parallel sessions learning to reinforce skills at home. Many families form lasting connections with other participating families.",
    steps: [
      "Ask your child's therapist, school, or pediatrician about local social skills groups — they may be offered through clinics, hospitals, or community organizations.",
      "Look for groups matched to your child's age and developmental level — some groups are play-based while others are more structured for older children.",
      "Ensure the group is led by a licensed clinician (SLP, psychologist, or BCBA) who sets individualized goals for each participant.",
      "Attend parent orientation or parallel parent sessions to learn how to reinforce social skills at home.",
      "Practice learned skills in natural settings — arrange playdates with group peers to generalize social skills.",
      "Monitor your child's comfort level — a good group should build confidence, not increase anxiety or frustration.",
    ],
    icon: "people-circle-outline",
  },
  {
    id: "res-therapy-music",
    category: "Therapies",
    title: "Music Therapy",
    summary:
      "Uses music-based activities to improve communication, social interaction, motor skills, and emotional regulation.",
    details:
      "Music Therapy for autism is provided by board-certified music therapists (MT-BC) who use singing, instrument playing, songwriting, and rhythm activities to address therapeutic goals. Music uniquely engages multiple brain areas simultaneously, making it particularly effective for children who may not respond as well to traditional talk-based therapies. Research supports improvements in communication and language skills, social interaction and joint attention, emotional expression and regulation, fine and gross motor coordination, and sensory processing. Interactive musical activities create natural opportunities for turn-taking, eye contact, and shared enjoyment with peers and family members. Many children with autism show strong musical interests that can serve as a bridge to other learning.",
    steps: [
      "Find a board-certified music therapist (MT-BC) through the American Music Therapy Association directory at musictherapy.org.",
      "Discuss your child's specific goals — music therapy can target communication, social skills, motor skills, or emotional regulation.",
      "Ask about session format: individual sessions allow personalized attention while group sessions add social skills practice.",
      "Incorporate music into home routines — use songs for transitions (cleanup song), daily routines (tooth-brushing song), and emotional regulation.",
      "Check coverage options: some insurance plans, Medicaid waivers, and school IEPs may fund music therapy as a related service.",
      "Give it several sessions — some children need time to warm up to the therapist and format before showing progress.",
    ],
    icon: "musical-notes-outline",
  },
  {
    id: "res-therapy-equine",
    category: "Therapies",
    title: "Equine-Assisted Therapy (Horseback Riding)",
    summary:
      "Therapeutic horseback riding that improves social communication, emotional regulation, and motor skills through interaction with horses.",
    details:
      "Equine-Assisted Therapy uses the rhythmic movement and responsiveness of horses to address therapeutic goals for children with autism. A large randomized study at the University of Colorado found that 10 weeks of therapeutic riding produced lasting reductions in irritability and improvements in social communication, hyperactivity, and word fluency in children aged 6-16. The natural movement of the horse stimulates core strength, balance, and coordination. Working with horses also provides opportunities to practice nonverbal communication, empathy, responsibility, and emotional regulation in a motivating, outdoor setting. Programs are typically led by PATH International-certified instructors alongside therapists. Equine therapy can complement other treatments like ABA, speech, and OT.",
    steps: [
      "Find a PATH International-certified therapeutic riding center near you at pathintl.org/find-a-center.",
      "Schedule an evaluation — the team will assess your child's physical abilities, behavioral needs, and therapeutic goals.",
      "Discuss safety requirements: helmets, appropriate clothing, and any sensory accommodations your child may need.",
      "Commit to regular weekly sessions — research shows benefits build over 8-10 weeks of consistent participation.",
      "Ask about hippotherapy (OT/PT/Speech on horseback) vs. therapeutic riding — hippotherapy uses the horse's movement as a treatment tool and may be covered by insurance.",
      "Check funding sources: some nonprofit riding centers offer scholarships, and hippotherapy may be covered by health insurance or Medicaid.",
    ],
    icon: "paw-outline",
  },
  {
    id: "res-therapy-aquatic",
    category: "Therapies",
    title: "Aquatic Therapy",
    summary:
      "Water-based therapy that builds motor skills, coordination, endurance, and social confidence in a calming sensory environment.",
    details:
      "Aquatic Therapy uses the unique properties of water — buoyancy, resistance, and hydrostatic pressure — to help children with autism develop motor skills, coordination, strength, and endurance in a supportive sensory environment. Many children with autism who struggle with land-based exercise thrive in the water. The sensory input from warm water can be calming and regulating, making it easier for children to focus and participate. Aquatic therapy also teaches water safety — a critical concern since drowning is a leading cause of death for children with autism who may wander. Sessions can work on social skills (turn-taking, following instructions in a group), body awareness, breath control, and overall physical fitness. Research shows improvements in social interactions and motor function.",
    steps: [
      "Ask your pediatrician or therapist for a referral to an aquatic therapy program, or search for facilities with certified aquatic therapists.",
      "Check if your child's OT or PT provider offers aquatic therapy sessions — these may be covered by insurance.",
      "Start with individual sessions to help your child acclimate to the pool environment before trying group sessions.",
      "Discuss water safety goals as a priority — teaching your child to be safe in and around water can be life-saving.",
      "Practice water-based activities at home during bath time: pouring, kicking, blowing bubbles — these build comfort and skills.",
      "Look into community adaptive swim programs at local YMCAs, parks and recreation departments, or Special Olympics — many are free or low-cost.",
    ],
    icon: "water-outline",
  },

  // ── Crisis Resources ────────────────────────────────────────────────────────
  {
    id: "res-crisis-988",
    category: "Crisis Support",
    title: "988 Suicide & Crisis Lifeline",
    summary:
      "Free, confidential 24/7 crisis support by phone, text, or chat for anyone in emotional distress — available in English and Spanish.",
    details:
      "The 988 Suicide & Crisis Lifeline is a national network of crisis centers providing free, confidential support 24 hours a day, 7 days a week. Call or text 988 to connect with a trained counselor. Services are available in English and Spanish, and live chat is available at 988lifeline.org. Videophone services are offered for people who are deaf or hard of hearing using American Sign Language. The lifeline has resources specifically addressing individuals with neurodivergence, including autism. This is NOT just for suicidal thoughts — it is for any emotional crisis, overwhelming stress, or mental health emergency. The Autism Society is working with crisis centers across the country to ensure counselors receive training specific to autism and intellectual/developmental disabilities.",
    steps: [
      "Save 988 in your phone now — you can call or text this number anytime you or your family member is in crisis.",
      "For immediate danger, always call 911 first, then follow up with 988 for ongoing support.",
      "If your autistic child or family member is in emotional crisis, call 988 and let the counselor know about the autism diagnosis so they can adapt their approach.",
      "Visit 988lifeline.org for live chat if phone calls are difficult — chat may be easier for some autistic individuals or during sensory overwhelm.",
      "For Spanish-language support, call 988 and press 2 for the Spanish-language line.",
      "Keep the number visible in your home and share it with caregivers, family members, and your child's school.",
    ],
    icon: "call-outline",
  },
  {
    id: "res-crisis-text",
    category: "Crisis Support",
    title: "Crisis Text Line",
    summary:
      "Free 24/7 crisis support via text message — ideal for those who prefer texting over phone calls.",
    details:
      "Crisis Text Line provides free, confidential crisis support via text message, available 24 hours a day, 7 days a week. Text HOME to 741741 to connect with a trained Crisis Counselor. This service is particularly valuable for autistic individuals or parents who find phone calls overwhelming or who need discreet access to support. Conversations are text-based, which can be easier for people who process written communication better than verbal. Crisis Counselors are trained volunteers supervised by licensed clinical staff. The service handles all types of crisis — anxiety, depression, emotional distress, suicidal thoughts, family conflict, and caregiving burnout. Average wait time to connect with a counselor is under 5 minutes.",
    steps: [
      "Text HOME to 741741 from anywhere in the US at any time to start a conversation with a Crisis Counselor.",
      "A trained counselor will respond and help you work through the crisis using active listening and collaborative problem-solving.",
      "Be honest about what you are experiencing — there is no wrong reason to reach out, including caregiver burnout and overwhelm.",
      "If you are texting about your child, let the counselor know so they can provide autism-informed support and referrals.",
      "Save 741741 in your contacts as 'Crisis Text Line' so you have it ready when you need it.",
      "Share this resource with other autism parents in your community — many do not know text-based crisis support exists.",
    ],
    icon: "chatbox-ellipses-outline",
  },
  {
    id: "res-crisis-autism-society",
    category: "Crisis Support",
    title: "Autism Society National Helpline",
    summary:
      "Free helpline connecting families with local autism resources, services, and support through trained specialists.",
    details:
      "The Autism Society's National Helpline (800-3-AUTISM / 800-328-8476) connects you with trained Information & Referral (I&R) Specialists who help you find resources and services in your area. While the helpline does not provide direct services, specialists will connect you to local providers, state programs, support groups, and community resources for autism. This is an excellent first call for immigrant families who are new to the US system and unsure where to start. The helpline can assist with finding diagnostic services, therapy providers, educational advocacy, financial assistance, and community support. IMPORTANT: This is NOT a crisis line — for mental health emergencies, use 988 or call 911.",
    steps: [
      "Call 800-328-8476 (800-3-AUTISM) during business hours to speak with an Information & Referral Specialist.",
      "Explain your situation and what resources you are looking for — the specialist will search for services in your area.",
      "Ask about local Autism Society affiliates — there are over 70 across the US that provide direct community support.",
      "Request information on multiple topics at once: diagnosis, therapy options, school support, financial assistance, and parent support groups.",
      "Follow up on the referrals provided — keep notes on every contact name, phone number, and next steps.",
      "Call back anytime you need help navigating a new challenge — the helpline is there for ongoing support, not just one-time use.",
    ],
    icon: "information-circle-outline",
  },

  // ── Skills Parents Can Teach at Home ────────────────────────────────────────
  {
    id: "res-skill-self-regulation",
    category: "Skills to Teach at Home",
    title: "Self-Regulation Skills",
    summary:
      "Help your child learn to identify emotions, manage sensory overload, and develop coping strategies for everyday challenges.",
    details:
      "Self-regulation is the ability to manage emotions, behaviors, and sensory experiences in response to the demands of a situation. Children with autism often experience sensory overload and difficulty identifying and expressing emotions, making self-regulation a critical life skill. The Zones of Regulation framework teaches children to identify their emotional state using colors (Blue = low energy/sad, Green = calm/ready, Yellow = frustrated/anxious, Red = angry/out of control) and select appropriate coping strategies. Teaching self-regulation starts with co-regulation — the parent modeling calm responses and helping the child through difficult moments. Over time, children internalize these strategies and begin managing independently. Tools include visual emotion charts, sensory breaks, calm-down corners, deep breathing exercises, and social stories about emotions.",
    steps: [
      "Create a visual emotions chart with pictures showing different feelings — practice naming emotions during calm moments, not just during meltdowns.",
      "Set up a calm-down corner in your home with sensory tools: noise-canceling headphones, weighted blanket, fidget toys, soft lighting.",
      "Teach simple coping strategies using visual cue cards: deep breathing (smell the flower, blow out the candle), counting to 10, squeezing a stress ball.",
      "Model self-regulation yourself by narrating your own emotions: 'I'm feeling frustrated, so I'm going to take three deep breaths.'",
      "Use the Zones of Regulation colors to help your child check in: 'What zone are you in right now? What can help you get back to green?'",
      "Practice during calm moments — role-play challenging scenarios and rehearse coping strategies so they become automatic over time.",
    ],
    icon: "color-palette-outline",
  },
  {
    id: "res-skill-safety",
    category: "Skills to Teach at Home",
    title: "Safety Awareness Skills",
    summary:
      "Teach your child to recognize danger, respond to emergencies, and navigate safely in the community.",
    details:
      "Safety awareness is a critical area for children with autism, who may have difficulty recognizing dangerous situations, understanding social threats, or responding appropriately to emergencies. Drowning, wandering/elopement, and traffic accidents are leading safety concerns for autistic children. Teaching safety requires a multi-faceted approach using visual supports, social stories, repeated practice, and real-world rehearsal. Key areas include personal information (name, address, phone number), stranger safety, water safety, fire safety, traffic and pedestrian safety, and what to do if lost. Social skills development — understanding facial expressions, interpreting others' intentions, and recognizing unsafe situations — is an integral part of safety education. Use visual cue cards, video modeling, and role-play to make abstract safety concepts concrete.",
    steps: [
      "Teach personal identification: practice your child's full name, parent's name, address, and phone number using visual cards and repetition until memorized.",
      "Create visual social stories about specific safety scenarios: what to do if lost, how to cross the street, when to say no to strangers.",
      "Practice fire drills at home regularly — walk through the escape route multiple times and establish a meeting spot outside.",
      "Address water safety early: teach basic swim skills, install locks on doors/gates near water, and consider a GPS tracking device if your child wanders.",
      "Role-play 'what if' scenarios: 'What do you do if someone you don't know asks you to go with them?' — practice the correct response until it becomes automatic.",
      "Teach your child to identify safe people (police officers, store employees) and practice approaching them for help using scripts and visual supports.",
    ],
    icon: "shield-outline",
  },
  {
    id: "res-skill-community",
    category: "Skills to Teach at Home",
    title: "Community Skills",
    summary:
      "Build your child's ability to participate in everyday community activities like shopping, dining out, and using public spaces.",
    details:
      "Community skills help your child participate in everyday life outside the home — grocery shopping, eating at restaurants, visiting the library, using public transportation, attending community events, and interacting with community members. For autistic children, these environments can be overwhelming due to unpredictable sensory input, social demands, and disrupted routines. Building community skills starts with preparation at home: visual schedules of the outing, social stories about what to expect, and practice of specific skills (waiting in line, ordering food, paying at a register). Begin with brief, low-stress outings during quiet times and gradually increase duration and complexity. Community skills build independence and open the door to social participation, employment, and quality of life.",
    steps: [
      "Choose one community skill to practice at a time — start with the one your family needs most (grocery shopping, restaurant, library, etc.).",
      "Create a visual schedule and social story for the outing: show pictures of each step from leaving home to returning home.",
      "Do a practice run during a quiet time (e.g., grocery store on a Tuesday morning) with low expectations — the goal is exposure, not perfection.",
      "Teach specific sub-skills at home first: practice waiting in line, using a quiet voice, handing money to a cashier, and saying 'thank you.'",
      "Bring sensory supports (headphones, fidget toy, snacks) and have an exit plan — leave before your child reaches overload, not after.",
      "Gradually increase expectations over time: longer outings, busier times, more steps completed independently. Celebrate every success.",
    ],
    icon: "storefront-outline",
  },
  {
    id: "res-skill-pre-academic",
    category: "Skills to Teach at Home",
    title: "Pre-Academic Skills",
    summary:
      "Build foundational learning skills at home — matching, sorting, counting, letter recognition, and following instructions.",
    details:
      "Pre-academic skills are the building blocks for formal education: visual discrimination, pattern recognition, matching and sorting, counting, number recognition, letter recognition, basic phonics, following multi-step instructions, and attending to tasks. For children with autism, these skills are best taught using visual supports, hands-on manipulatives, structured routines, and special interests as motivation. Before formal academics, children need functional communication (expressing wants and needs), the ability to attend to an activity for a few minutes, basic imitation skills, and the ability to follow simple instructions. Teaching at home in 5-10 minute structured sessions throughout the day can be highly effective. Use the child's preferred topics and materials to increase engagement — if your child loves trains, use train-themed counting and matching activities.",
    steps: [
      "Start with matching and sorting activities: match identical pictures, sort objects by color or shape — these are foundations for all academic learning.",
      "Teach letters and numbers using multi-sensory methods: trace in sand, form with playdough, find on signs during walks, and use your child's special interests.",
      "Practice counting in natural contexts: count stairs as you climb, count crackers at snack time, count toys during cleanup.",
      "Use structured work systems (TEACCH-style): a basket on the left with materials, clear visual instructions, and a 'finished' basket on the right.",
      "Keep sessions short (5-10 minutes) and end on a success — follow with a preferred activity to build positive associations with learning.",
      "Read aloud daily in your home language — point to pictures, ask simple questions, and pause for your child to fill in familiar words or phrases.",
    ],
    icon: "book-outline",
  },
  {
    id: "res-skill-self-advocacy",
    category: "Skills to Teach at Home",
    title: "Self-Advocacy Skills",
    summary:
      "Teach your child to understand their own needs, communicate preferences, and speak up for themselves in age-appropriate ways.",
    details:
      "Self-advocacy is the ability to understand your own needs and communicate them to others. For autistic children, self-advocacy is deeply connected to emotional regulation, communication development, executive functioning, and sensory processing. Research shows that self-advocacy skills lead to reduced anxiety, improved school outcomes, and stronger peer relationships. Start by helping your child understand their autism diagnosis in positive, age-appropriate terms — autism is a difference in how the brain works, not something wrong. Teach children to identify what they need (a break, help, a quieter space), use whatever communication method works for them (speech, AAC device, cards, gestures) to express those needs, and understand their rights. Self-advocacy looks different at every age and ability level — from a toddler handing a 'break' card to a teenager explaining their accommodations to a teacher.",
    steps: [
      "Help your child understand their diagnosis using positive, honest language appropriate to their age and comprehension level.",
      "Create visual cards or program AAC buttons for common needs: 'I need a break,' 'Too loud,' 'I need help,' 'I don't understand.'",
      "Practice requesting help and expressing preferences in safe, low-pressure situations at home before expecting it in public settings.",
      "Role-play real scenarios: 'What do you do if the classroom is too loud? You can show your teacher the break card or go to the quiet corner.'",
      "Involve your child in their own IEP or therapy planning as early as possible — even young children can share what they like and what is hard for them.",
      "Model self-advocacy yourself: let your child see you ask for what you need, set boundaries, and explain your preferences to others.",
    ],
    icon: "megaphone-outline",
  },

  // ── Legal Rights ────────────────────────────────────────────────────────
  {
    id: "res-legal-idea",
    category: "Legal Rights",
    title: "IDEA: Your Child's Right to Free Education",
    summary:
      "The Individuals with Disabilities Education Act guarantees every child with a disability the right to a free, appropriate public education — regardless of immigration status.",
    details:
      "IDEA is a federal law that applies to ALL children in the United States, regardless of immigration status, citizenship, or documentation. Under IDEA, public schools must identify, evaluate, and serve children with disabilities from birth through age 21. The law guarantees FAPE (Free Appropriate Public Education) in the LRE (Least Restrictive Environment). Schools cannot ask about immigration status as a condition of enrollment or services. If your child is between 0-3, Part C of IDEA provides Early Intervention services. If your child is 3-21, Part B provides special education through the school district. You have the right to an interpreter at all meetings and to receive documents in your preferred language.",
    steps: [
      "Your child is entitled to a free evaluation by the school district if you suspect a disability — request this in writing.",
      "Schools CANNOT ask about your immigration status. If they do, you can refuse to answer and report this.",
      "You have the right to an interpreter at every IEP meeting — request one in advance.",
      "If you disagree with the school's evaluation or placement, you can request an Independent Educational Evaluation (IEE) at the school's expense.",
      "Contact your state's Parent Training and Information Center (PTI) for free advocacy support in your language.",
    ],
    icon: "document-text-outline",
  },
  {
    id: "res-legal-section504",
    category: "Legal Rights",
    title: "Section 504: Accommodations Without an IEP",
    summary:
      "Section 504 of the Rehabilitation Act provides accommodations for children who have a disability but may not qualify for special education under IDEA.",
    details:
      "Section 504 is a civil rights law that prohibits discrimination against individuals with disabilities in programs receiving federal funding, including all public schools. Unlike an IEP, a 504 plan does not require a specific learning disability category — any physical or mental impairment that substantially limits a major life activity qualifies. For autistic children, this can include accommodations like extra time on tests, preferential seating, sensory breaks, modified assignments, or a quiet testing space. A 504 plan is often faster to obtain than an IEP and can be a good option while waiting for a full evaluation. Parents have the right to participate in the 504 process and to appeal decisions.",
    steps: [
      "Request a 504 evaluation in writing to your child's school principal or 504 coordinator.",
      "Provide documentation of your child's diagnosis — a letter from their doctor or psychologist is sufficient.",
      "Attend the 504 meeting and describe how autism affects your child's school performance and daily activities.",
      "Review the proposed accommodations and suggest specific changes you know help your child — you are the expert on your child.",
      "A 504 plan is reviewed annually. You can request a meeting at any time if accommodations need adjustment.",
    ],
    icon: "shield-outline",
  },
  {
    id: "res-legal-ferpa",
    category: "Legal Rights",
    title: "FERPA: Protecting Your Child's School Records",
    summary:
      "FERPA protects the privacy of your child's education records and limits who can access information about your child — including immigration authorities.",
    details:
      "The Family Educational Rights and Privacy Act (FERPA) is a federal law that protects the privacy of student education records. Under FERPA, schools cannot release your child's records — including disability status, IEP documents, attendance, or parent information — without your written consent. This applies to requests from ICE, immigration authorities, or any government agency. Schools may not share directory information (name, address, phone) if you opt out. You have the right to inspect all records the school maintains about your child and to request corrections. Understanding FERPA is particularly important for immigrant families who may fear that seeking school services will expose their family's status.",
    steps: [
      "At the start of each school year, opt out of directory information sharing — this prevents the school from releasing your child's name and address.",
      "If anyone asks the school for your child's records, the school must notify you and get written consent first (with limited exceptions).",
      "You have the right to review ALL records the school keeps about your child — request this in writing.",
      "If you find errors in your child's records, submit a written correction request. The school must respond within 45 days.",
      "If ICE or law enforcement contacts the school, they cannot access student records without a court order. Know this right.",
    ],
    icon: "lock-closed-outline",
  },
  {
    id: "res-legal-ada",
    category: "Legal Rights",
    title: "ADA: Disability Rights in Public Spaces",
    summary:
      "The Americans with Disabilities Act protects your child from discrimination in public accommodations, including restaurants, stores, parks, and medical offices.",
    details:
      "The ADA is a civil rights law that prohibits discrimination against individuals with disabilities in all areas of public life. Title III covers public accommodations — restaurants, stores, hotels, theaters, doctors' offices, and recreation facilities must make reasonable modifications for people with disabilities. For autistic children, this might mean allowing sensory accommodations, service animals, or communication devices. Businesses cannot refuse service because of a child's disability-related behavior. The ADA also covers employment (Title I) and state/local government services (Title II). Importantly, ADA protections apply to everyone in the United States regardless of immigration or citizenship status.",
    steps: [
      "If a business refuses to serve your family because of your child's autism-related behavior, this may be an ADA violation. Document the incident.",
      "You can file an ADA complaint with the Department of Justice at ada.gov — complaints can be filed anonymously.",
      "Businesses must allow service animals (but not emotional support animals) and cannot charge extra fees for them.",
      "If your child uses an AAC device or communication board, businesses must allow reasonable time for communication.",
      "Your local disability rights organization can provide free legal advice about ADA violations — search 'Protection & Advocacy' plus your state name.",
    ],
    icon: "accessibility-outline",
  },
  {
    id: "res-legal-medicaid-rights",
    category: "Legal Rights",
    title: "Medicaid EPSDT: Comprehensive Child Health Services",
    summary:
      "If your child has Medicaid, they are entitled to Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) services — the most comprehensive benefit package in Medicaid.",
    details:
      "EPSDT is a federally mandated Medicaid benefit for all enrolled children under 21. It requires states to provide comprehensive health services including all medically necessary treatments, even if those services aren't otherwise covered by the state's Medicaid plan. For autistic children, this can include ABA therapy, speech therapy, occupational therapy, psychological services, assistive technology, and more. States cannot impose arbitrary caps on these services if they are deemed medically necessary. Many families don't know about EPSDT, and some states attempt to limit these benefits — but federal law overrides state restrictions for children. If Medicaid denies a service your child needs, you have the right to appeal.",
    steps: [
      "If your child has Medicaid and needs ABA, speech, OT, or other therapy, request authorization citing EPSDT — the standard is 'medically necessary.'",
      "If Medicaid denies a service, request the denial in writing. You have the right to appeal through a fair hearing.",
      "Contact your state's Medicaid office and specifically ask about EPSDT benefits for children with autism.",
      "If your state says a service 'isn't covered,' EPSDT may override that for children under 21. Get legal help if needed.",
      "Your state's Protection & Advocacy organization can help you fight Medicaid denials for free.",
    ],
    icon: "medical-outline",
  },

  // ── Family Support ──────────────────────────────────────────────────────
  {
    id: "res-family-respite",
    category: "Family Support",
    title: "Respite Care: Taking a Break",
    summary:
      "Respite care provides temporary relief for primary caregivers of children with disabilities — it's essential for preventing burnout and maintaining family wellbeing.",
    details:
      "Respite care is short-term care for your child provided by a trained caregiver, giving you time to rest, handle errands, or care for your own needs. Research shows that caregiver burnout is extremely common in families of autistic children, and regular respite care is one of the most effective prevention strategies. Respite can be in-home (a trained worker comes to your house), out-of-home (your child goes to a facility or another family), or informal (a trained family member or friend). Many states offer respite care funding through Medicaid waiver programs, state disability agencies, or family support programs. Some organizations offer free respite events specifically for families of children with autism.",
    steps: [
      "Contact your state's developmental disability agency and ask about respite care programs — many have funding available.",
      "Check if your child's Medicaid waiver includes respite hours — many home and community-based waivers do.",
      "Search for local autism respite programs through the Autism Society of America (autism-society.org) or Easter Seals.",
      "Ask your child's therapists if they know of trained respite providers in your area who have experience with autism.",
      "Start with short respite periods (1-2 hours) while you stay nearby, then gradually extend as your child becomes comfortable.",
    ],
    icon: "heart-outline",
  },
  {
    id: "res-family-parent-groups",
    category: "Family Support",
    title: "Parent Support Groups",
    summary:
      "Connecting with other parents of autistic children reduces isolation, provides practical advice, and builds a community that understands your daily experience.",
    details:
      "Raising an autistic child, especially as an immigrant family, can be isolating. Parent support groups provide a space to share experiences, learn from others who have navigated the same systems, and build friendships with people who truly understand. Groups can be in-person, online, or both. Many groups are organized by language and culture, recognizing that cultural perspectives on disability vary significantly. Research shows that parents who participate in support groups report lower stress, better coping skills, and stronger advocacy abilities. Many groups also serve as informal information networks for finding therapists, navigating school systems, and accessing benefits.",
    steps: [
      "Search for local autism parent groups through the Autism Society (autism-society.org) — filter by your state.",
      "Check Facebook for groups in your language: search 'autism parents [your language]' or 'padres autismo' for Spanish-speaking families.",
      "Ask your child's therapist, school, or pediatrician for recommendations — they often know of local groups.",
      "If no local group exists in your language, consider starting one — even a WhatsApp group with 3-4 families can be powerful.",
      "Online communities like MyAutismTeam.com connect parents nationwide and have translation features.",
    ],
    icon: "people-circle-outline",
  },
  {
    id: "res-family-sibling-support",
    category: "Family Support",
    title: "Supporting Siblings",
    summary:
      "Brothers and sisters of autistic children have unique needs and experiences that deserve attention — supporting siblings strengthens the entire family.",
    details:
      "Siblings of autistic children often experience a mix of love, frustration, pride, embarrassment, protectiveness, and resentment — all of which are normal. They may take on extra responsibilities, feel overlooked when the autistic sibling requires more attention, or worry about the future. Research shows that siblings who receive support and information about autism develop stronger relationships with their autistic brother or sister and report better psychological wellbeing. The Sibling Support Project (siblingsupport.org) offers programs specifically designed for siblings of children with special needs. Having honest, age-appropriate conversations about autism helps siblings understand and cope.",
    steps: [
      "Set aside regular one-on-one time with each sibling — even 15 minutes of undivided attention makes a significant difference.",
      "Explain autism in age-appropriate terms: 'Their brain works differently. Some things are harder for them, and some things they're really good at.'",
      "Acknowledge their feelings without judgment: 'It's okay to feel frustrated when your brother screams. That's a normal feeling.'",
      "Look for Sibshop programs (siblingsupport.org) in your area — these peer support groups are specifically for siblings.",
      "Avoid making the sibling a caretaker — they can help, but their primary role should be being a kid and a brother/sister.",
    ],
    icon: "heart-half-outline",
  },
  {
    id: "res-family-self-care",
    category: "Family Support",
    title: "Caregiver Self-Care Strategies",
    summary:
      "You cannot pour from an empty cup. Maintaining your own physical and mental health is not selfish — it's essential for your child's wellbeing.",
    details:
      "Parents of autistic children experience significantly higher rates of stress, anxiety, depression, and physical health problems than parents of neurotypical children. Immigrant parents face additional stressors: language barriers, cultural isolation, navigating unfamiliar systems, and potential immigration-related fears. Self-care is not a luxury — it's a necessity. Research consistently shows that parental wellbeing directly affects child outcomes. When parents are overwhelmed and burned out, they have less patience, less energy for therapy carryover, and reduced ability to advocate effectively. Even small, consistent self-care practices can make a significant difference.",
    steps: [
      "Identify one small daily practice that recharges you: a 10-minute walk, a cup of tea in silence, a phone call with a friend, or 5 minutes of deep breathing.",
      "Don't wait for 'free time' — schedule self-care like an appointment. Even 10 minutes is valuable.",
      "If you're struggling with anxiety or depression, many community health centers offer sliding-scale therapy in multiple languages.",
      "Connect with at least one other parent who understands — isolation amplifies stress. Even a text-based friendship helps.",
      "Remember: asking for help is a strength, not a failure. Accepting support from family, friends, or professionals makes you a better parent.",
    ],
    icon: "leaf-outline",
  },
  {
    id: "res-family-financial",
    category: "Family Support",
    title: "Financial Assistance and Benefits",
    summary:
      "Multiple federal and state programs can help cover the costs of autism-related services, therapy, and daily needs — even for families with limited documentation.",
    details:
      "The financial burden of raising an autistic child is significant — therapy, medical visits, specialized equipment, and lost wages can strain any family's budget. However, many assistance programs exist. SSI (Supplemental Security Income) provides monthly payments for children with disabilities from low-income families. Medicaid covers extensive therapy services through EPSDT. Many states have autism-specific waiver programs that cover ABA, respite, and adaptive equipment. The Children's Health Insurance Program (CHIP) covers children in families that earn too much for Medicaid but can't afford private insurance. Some of these programs are available regardless of immigration status, particularly for US-citizen children of undocumented parents.",
    steps: [
      "Apply for SSI (Supplemental Security Income) through your local Social Security office — children with autism often qualify based on disability criteria.",
      "Check if your child qualifies for Medicaid or CHIP — US-citizen children qualify even if parents are undocumented.",
      "Contact your state's developmental disability agency about autism waiver programs — waitlists exist, so apply early.",
      "Look into Autism Speaks' financial resources page (autismspeaks.org/financial-resources) for grants and assistance programs.",
      "Ask your child's therapy provider about sliding-scale fees or pro bono spots — many practices reserve spots for families in need.",
      "Check with local nonprofits and churches for emergency assistance with autism-related expenses.",
    ],
    icon: "cash-outline",
  },
  {
    id: "res-family-immigration-safety",
    category: "Family Support",
    title: "Know Your Rights: Immigration and Disability Services",
    summary:
      "Accessing disability services for your child will NOT affect your immigration case. Schools, hospitals, and therapy providers cannot report you to immigration authorities.",
    details:
      "Many immigrant families avoid seeking services for their autistic child out of fear that it will attract immigration enforcement or affect their case. This fear is understandable but largely unfounded. Federal law prohibits schools from asking about immigration status. HIPAA protects the privacy of medical records. Using Medicaid, WIC, school lunch programs, or disability services for your US-citizen child does not count as a 'public charge' issue for immigration purposes (per current policy). Therapy providers, schools, and hospitals are generally considered 'sensitive locations' where ICE enforcement is limited. Understanding these protections can help families access the services their children need without fear.",
    steps: [
      "Schools CANNOT ask about your immigration status or your child's status as a condition of enrollment or services.",
      "Using Medicaid, CHIP, or special education services for your child does NOT make you a 'public charge' — these are specifically excluded.",
      "If anyone at a school or medical office asks about your immigration status, you can refuse to answer. Report this to the school district.",
      "Keep a card with your rights and an emergency immigration attorney's number. Many legal aid organizations provide free 'Know Your Rights' cards in multiple languages.",
      "Contact your local Legal Aid Society or ACLU chapter for free immigration-related legal advice — many have special programs for families with disabled children.",
    ],
    icon: "shield-checkmark-outline",
  },
];

// ── GET / — All resources grouped by category ────────────────────────────────
router.get("/", (req: AuthRequest, res: Response) => {
  const grouped: Record<string, Resource[]> = {};

  for (const resource of RESOURCES) {
    if (!grouped[resource.category]) {
      grouped[resource.category] = [];
    }
    grouped[resource.category].push(resource);
  }

  res.json({ resources: grouped });
});

// ── GET /category/:name — Resources filtered by category ────────────────────
router.get("/category/:name", (req: AuthRequest, res: Response) => {
  const filtered = RESOURCES.filter(
    (r) => r.category.toLowerCase() === (req.params.name as string).toLowerCase()
  );
  res.json({ category: req.params.name, resources: filtered });
});

// ── GET /:id — Single resource by ID ─────────────────────────────────────────
router.get("/:id", (req: AuthRequest, res: Response) => {
  const resource = RESOURCES.find((r) => r.id === req.params.id);

  if (!resource) {
    res.status(404).json({ error: "Resource not found" });
    return;
  }

  res.json({ resource });
});

export default router;
