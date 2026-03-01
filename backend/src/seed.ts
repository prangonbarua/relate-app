import bcrypt from "bcryptjs";
import db from "./db";

export function seedDatabase(): void {
  // Check if already seeded
  const existing = db
    .prepare("SELECT id FROM users WHERE email = ?")
    .get("maria@demo.com");

  if (existing) {
    console.log("Database already seeded — skipping.");
    return;
  }

  console.log("Seeding database...");

  const SALT_ROUNDS = 10;
  const demoHash = bcrypt.hashSync("demo123", SALT_ROUNDS);

  // ── Demo Users ───────────────────────────────────────────────────────────
  const insertUser = db.prepare(
    "INSERT INTO users (name, email, password_hash, language) VALUES (?, ?, ?, ?)"
  );

  const mariaResult = insertUser.run("Maria Santos", "maria@demo.com", demoHash, "es");
  const fatimaResult = insertUser.run("Fatima Al-Hassan", "fatima@demo.com", demoHash, "ar");
  const weiResult = insertUser.run("Wei Chen", "wei@demo.com", demoHash, "zh");

  const mariaId = mariaResult.lastInsertRowid as number;
  const fatimaId = fatimaResult.lastInsertRowid as number;
  const weiId = weiResult.lastInsertRowid as number;

  console.log(`  Created users: Maria(${mariaId}), Fatima(${fatimaId}), Wei(${weiId})`);

  // ── Child Profile for Maria ──────────────────────────────────────────────
  db.prepare(
    `INSERT INTO child_profiles (user_id, name, age, communication_level, diagnosis_status, triggers, loves, notes)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    mariaId,
    "Lucas",
    4,
    "limited-verbal",
    "suspected",
    JSON.stringify(["loud noises", "bright lights", "crowded places"]),
    JSON.stringify(["trains", "water play", "music"]),
    "Lucas loves routine. Best engagement in the morning."
  );

  console.log("  Created child profile for Maria: Lucas");

  // ── Community Forum Posts ────────────────────────────────────────────────
  const insertPost = db.prepare(
    "INSERT INTO posts (user_id, title, body, category, votes, created_at) VALUES (?, ?, ?, ?, ?, ?)"
  );

  // Staggered dates so posts look realistic (not all posted at same moment)
  const now = Date.now();
  const DAY = 86400000;
  const ago = (days: number) => new Date(now - days * DAY).toISOString().replace("T", " ").slice(0, 19);

  const post1 = insertPost.run(
    mariaId,
    "Our first IEP meeting — what I wish I'd known",
    "We just had our first IEP meeting for Lucas and I was so nervous going in. Here's what helped: I brought a one-page summary of Lucas's strengths and challenges, I recorded the meeting (with permission), and I asked for every recommendation in writing. The biggest thing I learned is that you can disagree with the school's assessment and request an independent evaluation. Don't be afraid to advocate — your child deserves it. For other Spanish-speaking parents: you have the right to an interpreter and translated documents!",
    "success-story",
    24,
    ago(45) // ~6 weeks ago
  );

  const post2 = insertPost.run(
    fatimaId,
    "How do you handle speech therapy in a bilingual household?",
    "Our speech therapist suggested we only speak English at home to 'avoid confusing' our son. This doesn't feel right — Arabic is our family language, and his grandparents only speak Arabic. Has anyone else dealt with this? I've read that bilingualism doesn't delay language development in autistic children, but I'd love to hear from families who have navigated this. What did your SLP recommend?",
    "question",
    31,
    ago(30) // ~4 weeks ago
  );

  const post3 = insertPost.run(
    weiId,
    "Sensory-friendly grocery shopping — our routine that works",
    "Grocery stores used to be a nightmare for us. Here's what changed everything: We go at 7am on Tuesday when the store is nearly empty. I let my daughter wear her noise-cancelling headphones. We use a visual shopping list with pictures she helped pick. She gets to choose one 'surprise item' each trip. We've gone from meltdowns every visit to actually enjoying our Tuesday morning routine. It took about 6 weeks of consistency to get here.",
    "success-story",
    42,
    ago(21) // 3 weeks ago
  );

  const post4 = insertPost.run(
    mariaId,
    "Insurance denied ABA therapy — what are my options?",
    "We just got a denial letter from our insurance for ABA therapy. The reason given was 'not medically necessary' even though our pediatrician and developmental pediatrician both recommended it. Has anyone successfully appealed an insurance denial? I'm feeling overwhelmed by the process. We're in California if that matters. Also — are there any low-cost alternatives while we fight the appeal?",
    "question",
    18,
    ago(14) // 2 weeks ago
  );

  const post5 = insertPost.run(
    fatimaId,
    "Free resources that actually helped us",
    "I wanted to share some free resources that have made a real difference for our family:\n\n1. ASQ screening tool (online, free) — helped us prepare for the pediatrician\n2. CDC's 'Learn the Signs' app — milestone tracker with photos\n3. Local library sensory storytime — check your library system!\n4. Autism Speaks First 100 Days Kit — available in multiple languages\n5. YouTube: 'Teaching 2 and 3 year olds' channel — great for activity ideas\n\nWhat free resources have helped your family?",
    "resource",
    37,
    ago(10) // 10 days ago
  );

  const post6 = insertPost.run(
    weiId,
    "Toilet training at age 5 — we finally made progress!",
    "I know this is a sensitive topic but I want to share because I felt so alone during this journey. Our son didn't show readiness signs until almost 5. We tried every method out there. What finally worked: a visual schedule in the bathroom, a specific routine tied to times (not asking 'do you need to go?'), a reward system with his favorite stickers, and the biggest thing — backing off pressure completely. It took 3 months of the new approach, but he's now mostly independent. Please don't compare your timeline to neurotypical children.",
    "success-story",
    53,
    ago(5) // 5 days ago
  );

  const post7 = insertPost.run(
    mariaId,
    "Seeking parents in the Bay Area for weekend meetups",
    "Hi everyone! I'm looking to connect with other autism parents in the San Francisco Bay Area. I'd love to organize weekend meetups at sensory-friendly parks or indoor play spaces. It would be great for our kids to play together in a judgment-free zone, and honestly, the parent support would mean everything. I speak English and Spanish. Drop a comment if you're interested or know of good venues!",
    "community",
    15,
    ago(2) // 2 days ago
  );

  const post8 = insertPost.run(
    fatimaId,
    "Understanding sensory processing — resources that helped me 'get it'",
    "When our son was first evaluated, the OT mentioned 'sensory processing differences' and I had no idea what that meant. These resources helped me truly understand my child:\n\n- 'The Out-of-Sync Child' by Carol Kranowitz — the classic intro book\n- Sensory Processing Disorder Foundation website — great parent guides\n- Ask your OT for a sensory profile assessment — it changed how we set up our home\n- Instagram: @thesensoryproject — daily tips and visuals\n\nOnce I understood that my son wasn't being 'difficult' — he was overwhelmed — everything changed in how I responded to meltdowns.",
    "resource",
    29,
    ago(0.5) // 12 hours ago
  );

  console.log("  Created 8 community posts");

  // ── Comments ─────────────────────────────────────────────────────────────
  const insertComment = db.prepare(
    "INSERT INTO comments (post_id, user_id, body) VALUES (?, ?, ?)"
  );

  // Comment on the IEP post
  insertComment.run(
    post1.lastInsertRowid,
    fatimaId,
    "Thank you for sharing this, Maria! I didn't know we could request an independent evaluation. Our IEP meeting is next month and I'm going to bring a one-page summary like you suggested. Did you use a template?"
  );

  // Comment on the bilingual speech therapy post
  insertComment.run(
    post2.lastInsertRowid,
    mariaId,
    "We went through the same thing! Our new SLP actually specializes in bilingual families and said research supports maintaining the home language. She recommended we speak Spanish at home and let English develop naturally at school. Lucas is making progress in both languages. I can share her name if you're in the Bay Area."
  );

  // Comment on the sensory grocery shopping post
  insertComment.run(
    post3.lastInsertRowid,
    fatimaId,
    "The visual shopping list is such a great idea! We've been doing something similar with a picture-based checklist on an iPad. It gives him a 'job' during shopping which helps a lot with the waiting and transitions between aisles."
  );

  // Comment on the insurance denial post
  insertComment.run(
    post4.lastInsertRowid,
    weiId,
    "We successfully appealed our denial in California! Key things: get a letter of medical necessity from your developmental pediatrician (not just pediatrician), cite California's autism insurance mandate (SB 946), and file a complaint with the DMHC if the internal appeal fails. The whole process took about 2 months but it was worth it. Happy to share our appeal letter template."
  );

  // Comment on the toilet training post
  insertComment.run(
    post6.lastInsertRowid,
    mariaId,
    "This gives me so much hope. Lucas is 4 and we haven't started yet because he doesn't seem ready. Hearing that backing off pressure was the key really resonates — I think I've been putting too much pressure on myself about timelines. Thank you for being so open about this."
  );

  console.log("  Created 5 comments");
  console.log("Seeding complete!");
}
