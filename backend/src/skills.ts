// ── Types ────────────────────────────────────────────────────────────────────
export interface Skill {
  id: string;
  skill: string;
  whyItMatters: string;
  steps: string[];
  category: string;
  ageRange: string;
}

// ── Module state ─────────────────────────────────────────────────────────────
let skills: Skill[] = [];

// ── loadSkills ───────────────────────────────────────────────────────────────
export function loadSkills(): void {
  skills = [
    // ═══════════════════════════════════════════════════════════════════════════
    // ── Communication (10) ──────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "comm-1",
      skill: "Joint Attention: Follow the Leader",
      whyItMatters:
        "Joint attention is one of the earliest building blocks of communication. When a child learns to share focus with a caregiver on the same object or event, it opens the door to language development, social learning, and emotional connection. Research shows that improving joint attention leads to gains in spoken language within months.",
      steps: [
        "Observe what your child is naturally interested in without redirecting their attention.",
        "Position yourself at their eye level and within their line of sight.",
        "Narrate what they are doing using short, clear phrases like 'You found the ball!'",
        "Pause for 5 seconds and wait for any response — a look, a sound, or a gesture counts as success.",
      ],
      category: "Communication",
      ageRange: "2-6",
    },
    {
      id: "comm-2",
      skill: "Picture Exchange Communication",
      whyItMatters:
        "For children who are nonverbal or have limited speech, picture exchange systems provide a concrete way to express wants and needs. This reduces frustration-based behaviors and builds a foundation for more complex communication. Many children who start with picture exchange eventually develop spoken language as well.",
      steps: [
        "Choose 3-5 pictures of your child's most preferred items or activities.",
        "Place the pictures where your child can easily reach them during daily routines.",
        "When your child reaches for an item, gently guide them to hand you the picture first.",
        "Immediately give them the requested item and say its name clearly — 'Juice! You asked for juice!'",
      ],
      category: "Communication",
      ageRange: "2-8",
    },
    {
      id: "comm-3",
      skill: "Expanding Single Words to Phrases",
      whyItMatters:
        "Once a child uses single words, the next developmental step is combining words into two-word phrases. This skill dramatically increases their ability to communicate specific needs and reduces the guesswork for caregivers. The key is expanding naturally from what the child already says, rather than introducing completely new vocabulary.",
      steps: [
        "Listen for words your child uses spontaneously throughout the day.",
        "When they say a single word like 'ball', add one word to model a phrase: 'Big ball' or 'Roll ball'.",
        "Wait expectantly after modeling — give them 5-10 seconds to attempt the phrase.",
        "Accept any approximation enthusiastically and repeat the full phrase back naturally.",
      ],
      category: "Communication",
      ageRange: "2-5",
    },
    {
      id: "comm-4",
      skill: "Natural Environment Requesting",
      whyItMatters:
        "Natural Environment Teaching (NET) embeds communication into real daily activities, making learning more meaningful and motivating. When children learn to request during activities they already enjoy — snacks, toys, outings — the communication skill generalizes faster to other settings. This approach is based on ABA principles but feels natural and playful.",
      steps: [
        "During snack time, hold up two options and wait for your child to indicate a choice — a point, a word, or a sign.",
        "At the park, pause the swing and wait for your child to request 'push' or 'more' before resuming.",
        "During play, hold a preferred toy just out of reach and model the request: 'Want train?' then wait.",
        "Always honor the request immediately — the item itself is the natural reinforcement.",
      ],
      category: "Communication",
      ageRange: "2-6",
    },
    {
      id: "comm-5",
      skill: "First-Then Boards for Transitions",
      whyItMatters:
        "Many autistic children struggle with transitions between activities. A first-then board provides a visual structure that makes the sequence predictable: 'First we do this, then we get to do that.' This reduces anxiety, minimizes resistance, and builds an understanding of sequencing that supports language development.",
      steps: [
        "Create a simple board with two spots labeled 'First' and 'Then' using pictures or photos.",
        "Place the less-preferred activity in the 'First' spot and a motivating activity in the 'Then' spot.",
        "Point to each picture and narrate: 'First shoes, then playground.'",
        "Follow through consistently — always deliver the 'then' activity to build trust in the system.",
      ],
      category: "Communication",
      ageRange: "2-7",
    },
    {
      id: "comm-6",
      skill: "Gestural Communication Building",
      whyItMatters:
        "Before spoken words develop, gestures are a critical bridge to communication. Pointing, waving, nodding, and shaking the head are all meaningful communication acts. Building gestural communication reduces frustration and creates more opportunities for social interaction, which in turn supports spoken language development.",
      steps: [
        "Model gestures consistently — wave every time you say hello, point when you name objects.",
        "Create situations where gestures are needed: hold up two items so your child must point to choose.",
        "Respond immediately and enthusiastically to any gesture your child makes, even accidental ones.",
        "Pair each gesture with a simple word so your child hears the language alongside the action.",
      ],
      category: "Communication",
      ageRange: "1-5",
    },
    {
      id: "comm-7",
      skill: "Commenting vs. Requesting",
      whyItMatters:
        "Many early communication programs focus only on requesting (asking for things). But commenting — pointing out something interesting, labeling what you see, sharing an experience — is the foundation of conversation. Teaching commenting alongside requesting builds a more balanced communicator who can connect socially, not just get needs met.",
      steps: [
        "During walks or play, model comments frequently: 'Look, a dog!' or 'Wow, big truck!'",
        "Point to interesting things and pause, giving your child a chance to look and react.",
        "When your child looks at something with interest, label it for them: 'You see the bird!'",
        "Celebrate comments as much as requests — if your child points at an airplane, respond with excitement.",
      ],
      category: "Communication",
      ageRange: "2-6",
    },
    {
      id: "comm-8",
      skill: "Visual Supports for Choice-Making",
      whyItMatters:
        "Choice-making is a powerful communication skill that gives children control over their environment. For many autistic children, verbal choices can be overwhelming, but visual supports make options concrete and clear. Regular practice with choices builds both communication skills and a sense of autonomy that reduces challenging behaviors.",
      steps: [
        "Start with two clear visual options — real objects, photos, or picture symbols.",
        "Present choices during naturally motivating moments: 'Do you want crackers or apple?'",
        "Accept any form of choosing: reaching, pointing, looking at, or saying the word.",
        "Gradually increase options from 2 to 3-4 as your child becomes confident choosing.",
      ],
      category: "Communication",
      ageRange: "2-8",
    },
    {
      id: "comm-9",
      skill: "Receptive Language: Following Directions",
      whyItMatters:
        "Receptive language — understanding what others say — typically develops before expressive language. Strengthening receptive language through fun direction-following activities builds the comprehension base that supports future speech. Children who can follow simple directions also participate more successfully in school and therapy settings.",
      steps: [
        "Start with one-step directions during motivating activities: 'Roll the ball' or 'Open the box.'",
        "Use gestures alongside verbal directions at first, then gradually fade the gestures.",
        "Make it a game: play 'Simon Says' with simple body movements your child enjoys.",
        "Progress to two-step directions once one-step is consistent: 'Get the cup AND bring it to me.'",
      ],
      category: "Communication",
      ageRange: "2-7",
    },
    {
      id: "comm-10",
      skill: "Book Reading for Language",
      whyItMatters:
        "Interactive book reading is one of the most effective language-building activities for young children. For autistic children, books provide predictable, repeatable language experiences with visual support. Shared reading builds vocabulary, comprehension, joint attention, and the turn-taking rhythm that underlies conversation.",
      steps: [
        "Choose books with simple, repetitive text and clear illustrations that match your child's interests.",
        "Let your child control the book — turning pages, pointing to pictures, going back to favorite pages.",
        "Pause at predictable parts and wait for your child to fill in: 'Brown bear, brown bear, what do you...'",
        "Ask simple questions about pictures: 'Where is the cat?' and accept pointing as a valid answer.",
      ],
      category: "Communication",
      ageRange: "1-6",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ── Social (8) ──────────────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "social-1",
      skill: "Parallel Play with Narration",
      whyItMatters:
        "Many autistic children go through an extended parallel play stage where they play alongside peers rather than directly with them. This is a valid and important developmental phase. By narrating parallel play, you help your child become aware of others and build the bridge toward interactive play without forcing social demands that cause anxiety.",
      steps: [
        "Sit near your child with a similar toy or activity — do not try to join their play directly.",
        "Narrate your own actions: 'I'm building a tall tower' while occasionally narrating theirs: 'You're lining up the cars'.",
        "If your child glances at your activity, acknowledge it warmly: 'You saw my tower!'",
        "Gradually create moments of overlap — roll a car near their line, offer a block from your pile.",
      ],
      category: "Social",
      ageRange: "2-6",
    },
    {
      id: "social-2",
      skill: "Turn-Taking with Preferred Activities",
      whyItMatters:
        "Turn-taking is a foundational social skill that underlies conversation, cooperative play, and classroom participation. Starting with highly motivating activities makes the concept concrete and rewarding. Children who master turn-taking in play settings transfer this skill to more complex social interactions over time.",
      steps: [
        "Choose an activity your child loves that naturally involves turns — rolling a ball, stacking blocks, or a simple tablet game.",
        "Clearly say 'My turn' and 'Your turn' while using a visual cue like pointing or a turn-taking card.",
        "Keep your turns short at first (3-5 seconds) so the waiting period is manageable.",
        "Gradually increase the length of turns as your child builds tolerance for waiting.",
      ],
      category: "Social",
      ageRange: "2-7",
    },
    {
      id: "social-3",
      skill: "Emotion Recognition with Photos",
      whyItMatters:
        "Understanding emotions in others is often challenging for autistic children, not because they lack empathy but because reading facial expressions can be difficult. Using real photos of familiar people experiencing emotions provides concrete, relatable examples. This skill supports deeper social connections and helps children respond appropriately in social situations.",
      steps: [
        "Collect photos of family members showing clear emotions — big smiles, surprised faces, sad moments.",
        "Start with two contrasting emotions (happy vs sad) and name them while looking at the photos together.",
        "Ask your child to match the emotion: 'Which face is happy?' — accept pointing or any indication.",
        "Connect emotions to daily life: 'Look, your sister is smiling — she feels happy because you shared!'",
      ],
      category: "Social",
      ageRange: "3-8",
    },
    {
      id: "social-4",
      skill: "Social Stories for New Situations",
      whyItMatters:
        "Social stories, developed by Carol Gray, use simple narratives to explain social situations from the child's perspective. They reduce anxiety about unfamiliar situations by making expectations clear and predictable. Research shows social stories improve social behavior and reduce challenging behaviors across many settings.",
      steps: [
        "Identify an upcoming social situation your child finds difficult — a doctor visit, a birthday party, or a new classroom.",
        "Write a short story (5-8 sentences) describing what will happen, using 'I will' language: 'I will go to the doctor. The doctor will listen to my heart.'",
        "Include a reassuring statement: 'This is okay. Mom/Dad will be with me the whole time.'",
        "Read the story with your child 2-3 times before the event, and once more right before going.",
      ],
      category: "Social",
      ageRange: "3-10",
    },
    {
      id: "social-5",
      skill: "Greeting and Farewell Routines",
      whyItMatters:
        "Greetings and farewells are among the most frequent social interactions in daily life. For autistic children, these can feel confusing or overwhelming without explicit teaching. Creating a consistent, comfortable greeting routine gives your child a reliable way to participate in social exchanges and builds confidence for other interactions.",
      steps: [
        "Choose one greeting form your child is comfortable with — a wave, a high five, a fist bump, or saying 'hi'.",
        "Practice at home first: model the greeting when you enter a room and encourage your child to respond.",
        "Use the same greeting consistently with family members until it becomes automatic.",
        "Gradually extend to familiar people outside the home — teachers, neighbors, relatives.",
      ],
      category: "Social",
      ageRange: "2-8",
    },
    {
      id: "social-6",
      skill: "Cooperative Play: Building Together",
      whyItMatters:
        "Cooperative play — working together toward a shared goal — is a more advanced social skill that builds on parallel play and turn-taking. It requires communication, shared attention, and compromise. Starting with structured, visual activities like building with blocks or completing a puzzle makes the 'working together' concept concrete.",
      steps: [
        "Choose an activity with a clear shared goal: build a tower together, complete a puzzle, or make a picture.",
        "Assign clear roles: 'You pick the piece, I'll put it in' or 'You stack, I'll hand you the blocks.'",
        "Use visual supports if needed — a picture of the finished product so both players know the goal.",
        "Celebrate the shared achievement: 'WE built that together! Great teamwork!'",
      ],
      category: "Social",
      ageRange: "3-8",
    },
    {
      id: "social-7",
      skill: "Understanding Personal Space",
      whyItMatters:
        "Many autistic children have difficulty judging appropriate physical distance in social interactions. This can lead to standing too close or too far, which affects how peers respond to them. Teaching personal space explicitly through concrete, visual methods helps children navigate social proximity in a way that feels safe for everyone.",
      steps: [
        "Use a hula hoop or tape a circle on the floor to show 'my space' — have your child stand inside it.",
        "Practice with family: 'When we talk, we stand about one arm's length apart' and measure together.",
        "Role-play scenarios: approach too close, then adjust to comfortable distance, narrating the difference.",
        "Use a visual cue like an outstretched arm as a 'space checker' your child can use independently.",
      ],
      category: "Social",
      ageRange: "3-10",
    },
    {
      id: "social-8",
      skill: "Sharing and Waiting for a Turn",
      whyItMatters:
        "Sharing is difficult for many young children, but autistic children may find it especially challenging due to intense interests in specific items. Rather than forcing sharing, teaching a structured waiting system with timers and visual cues builds the skill gradually while respecting the child's attachment to their belongings.",
      steps: [
        "Start with less-preferred items — sharing a favorite toy is too hard at first.",
        "Use a visual timer: 'You play for 2 minutes, then it's your sister's turn for 2 minutes.'",
        "Narrate the process: 'You're waiting so nicely! Almost your turn again.'",
        "Praise specific sharing behavior: 'You gave Alex the blue crayon — that was kind!'",
      ],
      category: "Social",
      ageRange: "3-8",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ── Sensory (7) ─────────────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "sensory-1",
      skill: "Creating a Sensory Calm-Down Kit",
      whyItMatters:
        "Sensory overload is one of the most common triggers for meltdowns in autistic children. Having a personalized calm-down kit teaches self-regulation and gives your child concrete tools to manage overwhelming moments. Over time, children learn to recognize their own sensory needs and independently seek out calming strategies.",
      steps: [
        "Observe what sensory input calms your child — deep pressure, soft textures, rhythmic movement, or quiet spaces.",
        "Assemble 5-6 items in a small bag or box: noise-cancelling headphones, a stress ball, a soft fabric swatch, a chewy necklace, a glitter jar.",
        "Introduce the kit during a calm moment — let your child explore each item without pressure.",
        "When you notice early signs of overwhelm, offer the kit and model using an item: 'Let's squeeze the ball together.'",
      ],
      category: "Sensory",
      ageRange: "2-10",
    },
    {
      id: "sensory-2",
      skill: "Sensory Diet: Movement Breaks",
      whyItMatters:
        "Many autistic children are sensory seekers who need regular movement input to maintain regulation throughout the day. Scheduled movement breaks prevent the buildup of sensory needs that can lead to impulsive behavior or meltdowns. An occupational therapist can help customize a sensory diet, but these basic movement breaks are a safe starting point for any family.",
      steps: [
        "Schedule 3-4 movement breaks throughout the day — after waking, before meals, and before focused activities.",
        "Offer choices: jumping on a trampoline, swinging, animal walks (bear walk, crab walk), or dancing to music.",
        "Keep each break to 5-10 minutes — enough to regulate without becoming overstimulating.",
        "Use a visual timer so your child knows when the break starts and ends, building predictability.",
      ],
      category: "Sensory",
      ageRange: "2-10",
    },
    {
      id: "sensory-3",
      skill: "Deep Pressure Activities",
      whyItMatters:
        "Deep pressure input — firm squeezes, weighted items, tight hugs — has a calming effect on the nervous system for many autistic children. This type of proprioceptive input can reduce anxiety, improve body awareness, and help children transition from a heightened state to a regulated one. It's one of the most universally helpful sensory strategies.",
      steps: [
        "Try a 'burrito roll': wrap your child snugly in a blanket and apply gentle pressure along their body.",
        "Offer a weighted lap pad or stuffed animal during seated activities — aim for about 10% of body weight.",
        "Play 'sandwich': your child lies between couch cushions while you gently press down.",
        "Teach your child to request deep pressure: 'Do you want a big squeeze?' so they can self-advocate.",
      ],
      category: "Sensory",
      ageRange: "2-10",
    },
    {
      id: "sensory-4",
      skill: "Sound Sensitivity Management",
      whyItMatters:
        "Auditory hypersensitivity is extremely common in autistic children. Everyday sounds like vacuum cleaners, hand dryers, or crowded spaces can cause pain and distress. Teaching children to manage sound sensitivity — through both environmental modifications and coping strategies — dramatically improves their ability to participate in daily life.",
      steps: [
        "Identify your child's most challenging sounds through observation — note when they cover their ears or become distressed.",
        "Provide noise-cancelling headphones or earplugs and teach your child to use them independently.",
        "Give advance warning before loud sounds when possible: 'I'm going to turn on the blender in 5 seconds.'",
        "Create a 'sound safe' space at home where your child can retreat when overwhelmed — a quiet corner with soft lighting.",
      ],
      category: "Sensory",
      ageRange: "2-12",
    },
    {
      id: "sensory-5",
      skill: "Tactile Exploration and Desensitization",
      whyItMatters:
        "Tactile defensiveness — avoiding certain textures, disliking messy play, resisting certain clothing — is common in autistic children. Gradual, playful exposure to different textures can reduce sensitivity over time without creating negative associations. The goal is expanding comfort, not forcing tolerance.",
      steps: [
        "Start with textures your child already tolerates and offer slightly different options alongside: dry rice next to playdough, smooth fabric next to fuzzy.",
        "Present messy play with built-in control: finger painting in a zip-lock bag, or poking holes in playdough with a stick.",
        "Let your child set the pace — touching briefly is fine. Never force prolonged contact with aversive textures.",
        "Connect texture play to interests: if your child loves dinosaurs, hide small dinos in a bin of beans for them to find.",
      ],
      category: "Sensory",
      ageRange: "2-8",
    },
    {
      id: "sensory-6",
      skill: "Visual Schedule for Sensory Regulation",
      whyItMatters:
        "A visual sensory schedule helps children anticipate and prepare for sensory experiences throughout the day. Knowing when to expect challenging sensory input (loud assembly, bath time) and when calming input is available (swing break, quiet time) gives children a sense of control that reduces anxiety and meltdowns.",
      steps: [
        "Create a visual daily schedule that marks both challenging sensory moments and built-in breaks.",
        "Use color coding: green for calming activities, yellow for moderate, red for potentially overwhelming.",
        "Before challenging activities, point to the schedule: 'After the noisy cafeteria, you have quiet reading time.'",
        "Review the schedule each morning so your child knows what to expect and can prepare emotionally.",
      ],
      category: "Sensory",
      ageRange: "3-10",
    },
    {
      id: "sensory-7",
      skill: "Oral Sensory Strategies",
      whyItMatters:
        "Many autistic children seek or avoid oral sensory input — they may chew on clothing, avoid certain food textures, or mouth objects past the typical age. Providing appropriate oral sensory tools meets this need safely and can improve focus, reduce anxiety, and support mealtime flexibility.",
      steps: [
        "Observe your child's oral sensory patterns: do they chew, crunch, suck, or avoid oral input?",
        "For chewers: offer a safe chew necklace or chew tube to replace chewing on shirts or pencils.",
        "For crunchy seekers: include crunchy snacks (carrots, pretzels, apple slices) at regular intervals throughout the day.",
        "For oral avoiders: use a vibrating toothbrush briefly on lips and cheeks during play to gradually build tolerance.",
      ],
      category: "Sensory",
      ageRange: "2-10",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ── Daily Living (8) ────────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "daily-1",
      skill: "Visual Schedule for Morning Routine",
      whyItMatters:
        "Transitions and unpredictability are major sources of anxiety for many autistic children. A visual morning routine transforms an overwhelming sequence of demands into a predictable, manageable series of steps. Research consistently shows that visual supports reduce challenging behaviors and increase independence in daily living skills.",
      steps: [
        "Break the morning routine into 5-7 simple steps: wake up, use bathroom, get dressed, eat breakfast, brush teeth, shoes on, go.",
        "Create visual cards with pictures or photos for each step — real photos of your child doing each activity work best.",
        "Arrange the cards vertically on the wall at your child's eye level using velcro or magnets.",
        "Walk through the schedule together each morning, letting your child move each card to a 'done' column as they complete it.",
      ],
      category: "Daily Living",
      ageRange: "2-8",
    },
    {
      id: "daily-2",
      skill: "Tooth Brushing Desensitization",
      whyItMatters:
        "Oral care is a significant challenge for many autistic children due to sensory sensitivities in the mouth. The vibration of electric toothbrushes, the taste of toothpaste, and the sensation of bristles can all be overwhelming. A gradual desensitization approach respects your child's sensory experience while building toward this essential daily living skill.",
      steps: [
        "Start by letting your child hold and explore the toothbrush without any expectation of brushing.",
        "Introduce the toothbrush touching just the lips, then front teeth — celebrate each step with specific praise.",
        "Use a flavored toothpaste your child chooses or no toothpaste initially — the mechanical cleaning is most important.",
        "Build up to a 30-second brush, then 1 minute, using a visual timer or a short song to mark the duration.",
      ],
      category: "Daily Living",
      ageRange: "2-8",
    },
    {
      id: "daily-3",
      skill: "Mealtime Flexibility: Introducing New Foods",
      whyItMatters:
        "Food selectivity is extremely common in autistic children, often driven by sensory factors like texture, color, smell, or temperature. Rigid eating patterns can impact nutrition and create stress during family meals. A gradual, low-pressure approach to food exposure helps expand the diet over time without creating negative associations with mealtimes.",
      steps: [
        "Place a tiny portion of a new food on the plate alongside preferred foods — no requirement to eat or touch it.",
        "Model eating the new food yourself with positive comments about its properties: 'This is crunchy!'",
        "Celebrate any interaction with the new food — looking at it, touching it, smelling it, licking it — all count as progress.",
        "Offer the same new food at least 10-15 times before deciding if your child truly dislikes it — repeated exposure changes responses.",
      ],
      category: "Daily Living",
      ageRange: "2-10",
    },
    {
      id: "daily-4",
      skill: "Dressing Independence: Backward Chaining",
      whyItMatters:
        "Backward chaining is an ABA technique where you help with all steps except the last one, which the child completes independently. This builds success and motivation because the child always finishes the task. For dressing, this means the child experiences the satisfaction of 'I did it!' even while still learning the earlier steps.",
      steps: [
        "Choose one clothing item to practice: start with pulling up pants since it has fewer steps.",
        "Help your child with all steps except the very last one — you pull pants up to the hips, they pull up the final inch.",
        "Once the last step is independent, add the second-to-last step: they pull from thighs to waist.",
        "Continue backward until your child can complete the entire sequence independently.",
      ],
      category: "Daily Living",
      ageRange: "2-7",
    },
    {
      id: "daily-5",
      skill: "Toilet Training Readiness",
      whyItMatters:
        "Toilet training often takes longer for autistic children and requires modified approaches. Pushing before the child shows readiness signs can create anxiety and resistance. A structured, sensory-aware approach with visual supports has been shown to be most effective. Many autistic children respond well to predictable routines and clear, visual expectations.",
      steps: [
        "Watch for readiness signs: staying dry for 2+ hours, showing awareness of wet/dirty diapers, interest in the bathroom.",
        "Create a simple visual sequence for the bathroom routine: pants down, sit, try, wipe, flush, pants up, wash hands.",
        "Start with scheduled sits (every 1-2 hours) rather than waiting for the child to indicate — use a visual timer.",
        "Celebrate success immediately with a preferred reinforcer, and respond neutrally to accidents — never punish.",
      ],
      category: "Daily Living",
      ageRange: "2-7",
    },
    {
      id: "daily-6",
      skill: "Handwashing Step by Step",
      whyItMatters:
        "Handwashing involves many sub-steps that can be overwhelming when presented as one instruction. Breaking it into a visual task analysis makes the routine learnable and repeatable. Autistic children often respond well to the same consistent sequence each time, and once learned, handwashing becomes an automatic habit that supports health and independence.",
      steps: [
        "Post a waterproof visual strip next to the sink with each step illustrated: water on, wet hands, soap, rub 20 seconds, rinse, dry.",
        "Use a hand-washing song or timer for the 20-second rubbing step — many children enjoy this predictable marker.",
        "Practice during calm, non-rushed times first — not when in a hurry to eat.",
        "Gradually fade your verbal prompts: point to the visual strip instead of narrating each step.",
      ],
      category: "Daily Living",
      ageRange: "2-8",
    },
    {
      id: "daily-7",
      skill: "Sleep Routine Optimization",
      whyItMatters:
        "Sleep difficulties affect 40-80% of autistic children. Poor sleep worsens behavior, attention, and learning during the day. A consistent, sensory-aware bedtime routine is the single most effective non-medical intervention for improving sleep. The routine should be predictable, calming, and tailored to your child's sensory preferences.",
      steps: [
        "Create a consistent 30-minute bedtime routine: bath/wash, pajamas, brush teeth, one book, lights out — same order every night.",
        "Make the environment sleep-friendly: blackout curtains, cool temperature, white noise if helpful, remove screens 1 hour before bed.",
        "Use a visual bedtime schedule so your child can follow along and anticipate each step.",
        "If your child resists bed, use a 'bedtime pass' — one card they can exchange for one brief acceptable request (drink of water, one more hug).",
      ],
      category: "Daily Living",
      ageRange: "2-12",
    },
    {
      id: "daily-8",
      skill: "Cooking Together: Simple Recipes",
      whyItMatters:
        "Cooking involves following sequences, fine motor skills, sensory exploration, and math concepts — all in a naturally motivating context. For autistic children, simple cooking tasks build independence, expand food tolerance, and create positive family interaction. The structured, step-by-step nature of recipes aligns well with how many autistic children learn best.",
      steps: [
        "Start with a no-cook recipe: assembling a sandwich, making trail mix, or spreading peanut butter on crackers.",
        "Create a visual recipe card with photos for each step — your child can check off steps as they go.",
        "Assign specific, clear tasks: 'Pour the cup of flour into the bowl' rather than 'help me make cookies.'",
        "Celebrate the finished product together: eating what you made together is powerful natural reinforcement.",
      ],
      category: "Daily Living",
      ageRange: "3-10",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ── Motor (5) ───────────────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "motor-1",
      skill: "Fine Motor: Pincer Grasp Activities",
      whyItMatters:
        "The pincer grasp — using the thumb and index finger together — is essential for writing, buttoning clothes, zipping zippers, and eating with utensils. Many autistic children benefit from extra practice with this skill in fun, motivating contexts. Strong fine motor skills also support independence in self-care and academic tasks.",
      steps: [
        "Set up a simple activity using your child's interests — picking up small trains, putting coins in a piggy bank, or placing stickers.",
        "Model the pincer grasp slowly and narrate: 'I'm using my pinchy fingers to pick up the raisin.'",
        "Offer hand-over-hand help only if your child is frustrated — then fade your support quickly.",
        "Practice for 5 minutes at a time, building up — short successful sessions are better than long frustrating ones.",
      ],
      category: "Motor",
      ageRange: "2-6",
    },
    {
      id: "motor-2",
      skill: "Gross Motor: Obstacle Course Play",
      whyItMatters:
        "Gross motor skills like climbing, jumping, balancing, and crawling support sensory regulation, body awareness, and physical confidence. An obstacle course combines motor planning (figuring out HOW to move through the course) with physical skills, and can be adapted to any ability level. Many autistic children who struggle in competitive sports thrive with obstacle course play.",
      steps: [
        "Create a simple 4-station course using household items: crawl under a blanket, step over pillows, jump into a hula hoop, toss a ball into a basket.",
        "Walk through the course together first, demonstrating each station while your child watches.",
        "Use visual arrows or tape on the floor to show the path — this reduces the need for verbal instructions.",
        "Celebrate completion and gradually add stations or increase difficulty as your child builds confidence.",
      ],
      category: "Motor",
      ageRange: "3-8",
    },
    {
      id: "motor-3",
      skill: "Scissor Skills Development",
      whyItMatters:
        "Using scissors requires bilateral coordination (one hand holds paper, the other cuts), visual-motor integration, and fine motor strength. These skills transfer to many other tasks and are expected in preschool and kindergarten settings. Gradual introduction with adapted tools makes this achievable for most children.",
      steps: [
        "Start with tearing paper — this builds the hand strength and bilateral coordination needed for scissors.",
        "Introduce spring-loaded training scissors that open automatically — your child only needs to squeeze to close.",
        "Practice cutting playdough 'snakes' first — they're easier to hold and more forgiving than paper.",
        "Progress to cutting along thick, straight lines on paper, then curved lines, then simple shapes.",
      ],
      category: "Motor",
      ageRange: "3-7",
    },
    {
      id: "motor-4",
      skill: "Body Awareness: Heavy Work Activities",
      whyItMatters:
        "Proprioceptive input — information from muscles and joints about body position — helps children understand where their body is in space. Many autistic children have reduced proprioceptive awareness, leading to clumsiness, crashing into things, or seeking intense physical input. Heavy work activities provide the deep muscle input that builds body awareness.",
      steps: [
        "Incorporate heavy work into daily routines: carrying grocery bags, pushing a laundry basket, or pulling a wagon.",
        "Create 'jobs' that provide proprioceptive input: stacking heavy books, kneading bread dough, or digging in the garden.",
        "Try wall push-ups or chair push-ups as a quick regulating activity before seated tasks.",
        "Offer these activities proactively before challenging situations — they're preventative, not just reactive.",
      ],
      category: "Motor",
      ageRange: "2-10",
    },
    {
      id: "motor-5",
      skill: "Handwriting Readiness: Pre-Writing Strokes",
      whyItMatters:
        "Before children can form letters, they need to master basic strokes: vertical lines, horizontal lines, circles, crosses, and diagonals. These pre-writing skills develop through large-scale movement first (drawing on a whiteboard or in sand) before being refined to pencil-on-paper. Starting big reduces frustration and builds motor memory.",
      steps: [
        "Start with vertical lines: draw from top to bottom on a large whiteboard, in shaving cream, or in sand.",
        "Progress to horizontal lines, then circles — always starting large and gradually reducing size.",
        "Use multi-sensory approaches: trace shapes in pudding, draw with chalk on the sidewalk, or use finger paint.",
        "Connect strokes to meaning: 'Let's draw rain!' (vertical lines) or 'Let's draw a sun!' (circle with lines).",
      ],
      category: "Motor",
      ageRange: "3-6",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ── Behavior & Emotional (8) ────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "behavior-1",
      skill: "Positive Reinforcement Basics",
      whyItMatters:
        "Positive reinforcement — rewarding desired behavior immediately — is the single most effective tool for building new skills and reducing challenging behaviors. The key is identifying what truly motivates YOUR child (which may be very different from typical rewards) and delivering it immediately after the target behavior. This is the foundation of ABA-based approaches.",
      steps: [
        "Make a list of 5-10 things your child finds genuinely motivating: snacks, specific toys, screen time, tickles, praise, music.",
        "Choose one specific behavior to reinforce: making eye contact, using a word, sitting at the table for 1 minute.",
        "Deliver the reward IMMEDIATELY after the behavior — within 1-2 seconds if possible.",
        "Be specific in your praise: 'Great job saying please!' is better than 'Good boy.'",
      ],
      category: "Behavior & Emotional",
      ageRange: "2-12",
    },
    {
      id: "behavior-2",
      skill: "Understanding and Preventing Meltdowns",
      whyItMatters:
        "Meltdowns are not tantrums — they are involuntary responses to overwhelming sensory, emotional, or cognitive demands. Understanding the difference is crucial. By learning to identify your child's early warning signs and triggers, you can often intervene before the meltdown reaches its peak. Prevention is far more effective than management during a crisis.",
      steps: [
        "Track patterns: note what happened before the last 5 meltdowns — time of day, setting, demands, sensory environment.",
        "Identify your child's early warning signs: increased stimming, covering ears, becoming rigid, repeating phrases, withdrawing.",
        "When you notice early signs, reduce demands immediately: lower your voice, offer a break, remove sensory triggers.",
        "After the meltdown, wait until your child is fully calm before discussing what happened — avoid lecturing during recovery.",
      ],
      category: "Behavior & Emotional",
      ageRange: "2-12",
    },
    {
      id: "behavior-3",
      skill: "Zones of Regulation: Emotional Awareness",
      whyItMatters:
        "The Zones of Regulation framework uses color coding to help children identify their emotional state: Blue (sad/tired), Green (calm/ready), Yellow (frustrated/anxious), Red (angry/terrified). For autistic children who struggle with identifying emotions, this visual system makes abstract feelings concrete and teaches self-awareness that leads to self-regulation.",
      steps: [
        "Introduce the four zones with simple visuals: Blue = sad/sleepy, Green = calm/happy, Yellow = nervous/frustrated, Red = angry/scared.",
        "Throughout the day, model identifying your own zone: 'I'm feeling a little yellow right now because we're running late.'",
        "Ask your child to identify their zone at predictable times: morning, after school, before bed.",
        "Connect zones to strategies: 'When you're in Yellow, you can take 5 deep breaths or squeeze your stress ball.'",
      ],
      category: "Behavior & Emotional",
      ageRange: "3-12",
    },
    {
      id: "behavior-4",
      skill: "Visual Timer for Transitions",
      whyItMatters:
        "Abrupt transitions are a top trigger for challenging behavior in autistic children. Visual timers make the passage of time concrete and visible — children can literally see time running out, which reduces the surprise and anxiety of switching activities. This simple tool can dramatically reduce transition-related meltdowns.",
      steps: [
        "Get a visual timer (like a Time Timer) or use a timer app that shows time disappearing in color.",
        "Start using it for transitions between preferred activities: 'When the red is gone, we put away the iPad.'",
        "Give a verbal warning with the timer: 'Look — 2 minutes left!' and point to the timer.",
        "When the timer goes off, follow through calmly and consistently — the timer is the authority, not you.",
      ],
      category: "Behavior & Emotional",
      ageRange: "2-10",
    },
    {
      id: "behavior-5",
      skill: "Functional Behavior Assessment at Home",
      whyItMatters:
        "Every behavior happens for a reason. The four main functions of behavior are: to get something (attention, item, activity), to escape something (demand, sensory input, social situation), for sensory stimulation, or for self-regulation. Understanding WHY your child does something is the key to choosing an effective response instead of reacting in frustration.",
      steps: [
        "When a challenging behavior occurs, note the ABC: Antecedent (what happened just before), Behavior (exactly what the child did), Consequence (what happened after).",
        "Look for patterns over 5-10 occurrences: does the behavior mostly happen before demands? After being told 'no'? In loud environments?",
        "Match the function to a replacement behavior: if they scream to escape noise, teach them to request headphones instead.",
        "Make the replacement behavior as easy or easier than the challenging behavior — it must 'work' better for the child.",
      ],
      category: "Behavior & Emotional",
      ageRange: "2-12",
    },
    {
      id: "behavior-6",
      skill: "Calming Breathing Techniques",
      whyItMatters:
        "Deep breathing activates the parasympathetic nervous system, which naturally reduces anxiety and arousal. For autistic children, abstract instructions like 'take a deep breath' may not be effective. Concrete, visual breathing techniques — like blowing bubbles, smelling flowers, or blowing on a pinwheel — make this self-regulation strategy accessible and even fun.",
      steps: [
        "Practice during calm times first — never introduce a new strategy during a meltdown.",
        "Use concrete prompts: 'Smell the flower' (breathe in through nose) and 'Blow out the candle' (breathe out through mouth).",
        "Use real props: bubbles, pinwheels, or feathers that move when your child exhales — this makes the breath visible.",
        "Practice 3 breaths together at predictable times: before meals, before leaving the house, at bedtime.",
      ],
      category: "Behavior & Emotional",
      ageRange: "3-10",
    },
    {
      id: "behavior-7",
      skill: "Token Economy: Visual Reward System",
      whyItMatters:
        "A token economy bridges the gap between doing a task and earning a reward. Children earn tokens (stars, stickers, check marks) for specific behaviors and exchange them for a bigger reward. This teaches delayed gratification, makes progress visible, and allows you to reinforce multiple behaviors throughout the day with one motivating system.",
      steps: [
        "Choose 1-3 specific target behaviors: following directions, using words to request, or keeping hands to self.",
        "Create a simple token board with 5 spaces — each time the child does the behavior, they earn a token.",
        "When all 5 tokens are earned, the child chooses a reward from a pre-set menu of 3-4 options.",
        "Start with easy-to-earn tokens (every 2-3 minutes) and gradually require more effort as the child succeeds.",
      ],
      category: "Behavior & Emotional",
      ageRange: "3-10",
    },
    {
      id: "behavior-8",
      skill: "Safe Space Creation at Home",
      whyItMatters:
        "Every autistic child needs a designated space where they can go to decompress without judgment. This is not a punishment area — it's a proactive regulation tool. Having a reliable safe space teaches children to recognize when they need a break and to take it independently, which is a critical life skill for managing overwhelm.",
      steps: [
        "Designate a small, enclosed area: a corner with a pop-up tent, a space under a table with blankets, or a closet with cushions.",
        "Stock it with calming items: soft lighting, headphones, fidgets, a weighted blanket, favorite books.",
        "Introduce it during a calm moment: 'This is your cozy spot. You can go here whenever you need a break.'",
        "Never use it as punishment or send your child there against their will — they must control when they use it.",
      ],
      category: "Behavior & Emotional",
      ageRange: "2-12",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ── Cognitive & Play (7) ────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "cognitive-1",
      skill: "Structured Play: Cause and Effect Toys",
      whyItMatters:
        "Understanding cause and effect — 'when I do this, that happens' — is a fundamental cognitive skill that underlies learning, communication, and problem-solving. Toys that respond to actions (push a button, hear a sound; pull a lever, see movement) make this relationship clear and motivating. This is often the starting point for teaching intentional behavior.",
      steps: [
        "Gather 3-4 cause-and-effect toys: a pop-up toy, a spinning top, a musical instrument, or a light-up toy.",
        "Model the action slowly: press the button, pause, react with excitement when it works.",
        "Guide your child's hand to activate the toy if needed, then fade your help quickly.",
        "Narrate the cause and effect: 'You pushed the button! The music played!'",
      ],
      category: "Cognitive & Play",
      ageRange: "1-5",
    },
    {
      id: "cognitive-2",
      skill: "Matching and Sorting Activities",
      whyItMatters:
        "Matching identical objects and sorting by categories are early cognitive skills that support language development, math readiness, and organizational thinking. Many autistic children are natural sorters and classifiers — this strength can be channeled into structured learning. Matching also supports visual discrimination, which aids reading readiness.",
      steps: [
        "Start with matching identical objects: two red cups, two blue blocks, two identical pictures.",
        "Progress to matching similar but not identical items: all the cups together, all the blocks together.",
        "Introduce sorting by one attribute: sort by color, then by size, then by shape — one at a time.",
        "Use your child's interests: sort train cars by color, match animal figures to their pictures, or sort food by type.",
      ],
      category: "Cognitive & Play",
      ageRange: "2-6",
    },
    {
      id: "cognitive-3",
      skill: "Pretend Play: Building Imagination",
      whyItMatters:
        "Pretend play is an area where many autistic children need explicit teaching. Imaginative play builds language, social understanding, flexible thinking, and emotional processing. Starting with simple functional play (pretending to drink from a cup) and gradually building to more complex scenarios (playing 'store') develops these skills in a natural, enjoyable context.",
      steps: [
        "Start with functional play: give your child a toy phone and model talking into it, or offer a play cup and pretend to drink.",
        "Use your child's interests as the theme: if they love trains, create a pretend train station with tickets and passengers.",
        "Model pretend actions alongside your child without directing: feed a stuffed animal, put it to bed, take it for a walk.",
        "Add one new pretend element at a time — don't overwhelm with a complex scenario all at once.",
      ],
      category: "Cognitive & Play",
      ageRange: "2-7",
    },
    {
      id: "cognitive-4",
      skill: "Following Two-Step Directions",
      whyItMatters:
        "Following multi-step directions is essential for classroom learning, daily routines, and safety. For autistic children, verbal instructions may be processed more slowly or lost without visual support. Practicing two-step directions in fun, low-pressure contexts builds this skill so it's available when it matters most.",
      steps: [
        "Start during play: 'Get the ball AND bring it to me' — use the word 'and' to signal two parts.",
        "Use gestures alongside verbal instructions: point to the ball, then point to yourself.",
        "Play 'treasure hunt': give two-step clues: 'Look under the pillow AND bring me what you find.'",
        "Once successful with physical actions, try two-step cognitive tasks: 'Color the circle red AND the square blue.'",
      ],
      category: "Cognitive & Play",
      ageRange: "3-7",
    },
    {
      id: "cognitive-5",
      skill: "Special Interest as a Learning Bridge",
      whyItMatters:
        "Intense special interests are a hallmark of autism and should be embraced, not discouraged. These interests provide natural motivation that can be channeled into learning any skill. A child who loves trains can learn counting, reading, social skills, and geography through trains. Research shows that leveraging special interests dramatically improves engagement and outcomes.",
      steps: [
        "Identify your child's current intense interest — it might be trains, dinosaurs, numbers, letters, a specific show, or a sensory experience.",
        "Connect academic or social goals to the interest: count dinosaurs, read books about trains, take turns with a favorite toy.",
        "Use the interest as a reward: 'After we practice writing, you can play with your trains for 10 minutes.'",
        "Respect the interest — never take it away as punishment. It's your child's source of joy and regulation.",
      ],
      category: "Cognitive & Play",
      ageRange: "2-12",
    },
    {
      id: "cognitive-6",
      skill: "Discrete Trial Teaching: 5-Minute Skill Bursts",
      whyItMatters:
        "Discrete Trial Training (DTT) is a structured ABA technique that breaks learning into clear, repeated trials: give an instruction, prompt if needed, wait for a response, reward the correct answer. Short 5-minute 'skill bursts' at home can accelerate learning in areas like labeling, matching, and following instructions without requiring a therapist to be present.",
      steps: [
        "Choose one simple target: naming colors, identifying body parts, or matching pictures.",
        "Present a clear instruction: 'Touch the red one' with an array of 2-3 items.",
        "Wait 3-5 seconds for a response. If correct, give immediate specific praise plus a small reward. If incorrect, gently prompt and try again.",
        "Do 5-10 trials in a row, then take a break with a preferred activity. Keep sessions short and positive.",
      ],
      category: "Cognitive & Play",
      ageRange: "2-7",
    },
    {
      id: "cognitive-7",
      skill: "Problem-Solving with Visual Supports",
      whyItMatters:
        "Teaching children to solve problems independently builds resilience and reduces dependence on adults. For autistic children, breaking problem-solving into visual, concrete steps makes this abstract skill accessible. The goal is not to eliminate problems but to give children a reliable process for handling them.",
      steps: [
        "Create a simple visual problem-solving board: 1) What's the problem? 2) What can I try? 3) Try it. 4) Did it work?",
        "Model using the board with real problems: 'I can't reach the cup. What can I try? I can use a stool!'",
        "When your child encounters a problem, guide them to the board instead of solving it for them.",
        "Offer two possible solutions to choose from at first, then gradually encourage generating their own ideas.",
      ],
      category: "Cognitive & Play",
      ageRange: "3-10",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ── Self-Advocacy (4) ───────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "advocacy-1",
      skill: "Requesting a Break",
      whyItMatters:
        "Teaching children to request a break before they reach their limit is one of the most powerful self-advocacy skills. It prevents meltdowns, reduces challenging behavior, and gives children a socially appropriate way to manage overwhelm. A child who can say, sign, or show a 'break' card is developing a lifelong self-regulation strategy.",
      steps: [
        "Create a 'break' card with a clear visual and keep it accessible at all times — on the table, on a lanyard, or on a communication board.",
        "Teach the request during low-stress situations first: 'When you need a break, show me this card.'",
        "Honor EVERY break request immediately at first — building trust that the system works is more important than finishing the task.",
        "Gradually structure breaks: 'Great job asking for a break! Let's take 2 minutes, then we'll finish.'",
      ],
      category: "Self-Advocacy",
      ageRange: "2-12",
    },
    {
      id: "advocacy-2",
      skill: "Expressing Needs: 'I Need Help'",
      whyItMatters:
        "The ability to ask for help is a critical life skill that many autistic children need explicit teaching to develop. Without this skill, children may become frustrated and act out, or simply give up on tasks. Teaching 'I need help' as a communication act — whether through speech, sign, a button, or a card — empowers children to participate in activities beyond their independent level.",
      steps: [
        "Choose one way for your child to request help: saying 'help', signing 'help', pressing a button, or handing you a card.",
        "Create situations where help is needed: put a favorite toy in a closed container, or give a puzzle with one piece hidden.",
        "Model the request: 'This is hard! I need help!' then immediately provide help so they see the connection.",
        "Respond to help requests quickly and positively every time — speed and consistency build the habit.",
      ],
      category: "Self-Advocacy",
      ageRange: "2-10",
    },
    {
      id: "advocacy-3",
      skill: "Saying 'No' and Setting Boundaries",
      whyItMatters:
        "Teaching a child to say 'no' appropriately is essential for safety and self-respect. Many therapy approaches historically focused on compliance, but modern neurodiversity-affirming practice recognizes that a child who can refuse is a child who can protect themselves. Teaching appropriate refusal prevents the buildup of distress that leads to meltdowns.",
      steps: [
        "Teach a clear way to refuse: 'No thank you', head shake, a 'stop' hand gesture, or a 'no' card.",
        "Create practice opportunities during low-stakes situations: offer a non-preferred food and accept 'no' gracefully.",
        "Distinguish between non-negotiables (safety) and negotiables (preferences) — allow 'no' for preferences.",
        "When your child says 'no' appropriately, honor it and praise the communication: 'Thank you for telling me!'",
      ],
      category: "Self-Advocacy",
      ageRange: "2-12",
    },
    {
      id: "advocacy-4",
      skill: "Understanding and Sharing My Diagnosis",
      whyItMatters:
        "As children grow, understanding their own autism becomes important for self-identity, self-advocacy, and accessing support. Sharing the diagnosis in a positive, strengths-based way helps children see autism as part of who they are — not something wrong with them. Children who understand their diagnosis have better mental health outcomes and stronger self-advocacy skills.",
      steps: [
        "Use age-appropriate language: 'Your brain works differently — you notice things other people miss, and some things feel extra big to you.'",
        "Read books about autism together: 'The Girl Who Thought in Pictures', 'All Cats Are on the Autism Spectrum', or similar titles.",
        "Focus on strengths first: amazing memory, deep interests, attention to detail, honesty, unique perspective.",
        "Let your child decide who to tell and when — this is their information to share on their terms.",
      ],
      category: "Self-Advocacy",
      ageRange: "5-12",
    },
  ];

  console.log(`Skills: Loaded ${skills.length} skills across ${getCategories().length} categories`);
}

// ── getCategories ────────────────────────────────────────────────────────────
export function getCategories(): string[] {
  const cats = new Set(skills.map((s) => s.category));
  return [...cats];
}

// ── getSkillsByCategory ──────────────────────────────────────────────────────
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter(
    (s) => s.category.toLowerCase() === category.toLowerCase()
  );
}

// ── getAllSkills ──────────────────────────────────────────────────────────────
export function getAllSkills(): Skill[] {
  return skills;
}

// ── getDailyCard — deterministic by date + userId hash ───────────────────────
export function getDailyCard(userId: number): Skill & { date: string } {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  // Simple hash: sum of char codes of date string + userId
  let hash = userId;
  for (let i = 0; i < today.length; i++) {
    hash = (hash * 31 + today.charCodeAt(i)) & 0x7fffffff;
  }

  const index = hash % skills.length;

  return {
    ...skills[index],
    date: today,
  };
}
