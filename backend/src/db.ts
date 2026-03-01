import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(__dirname, "..", "relate.db");
const db = new Database(dbPath);

// Enable WAL mode for better concurrent read performance
db.pragma("journal_mode = WAL");
// Enable foreign key enforcement
db.pragma("foreign_keys = ON");

// ── Users ────────────────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT NOT NULL,
    email       TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    language    TEXT DEFAULT 'en',
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ── Child Profiles ───────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS child_profiles (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id             INTEGER NOT NULL REFERENCES users(id),
    name                TEXT NOT NULL,
    age                 INTEGER NOT NULL,
    communication_level TEXT DEFAULT 'emerging',
    diagnosis_status    TEXT DEFAULT 'suspected',
    triggers            TEXT DEFAULT '[]',
    loves               TEXT DEFAULT '[]',
    notes               TEXT DEFAULT '',
    created_at          DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ── Activity Logs ────────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS activity_logs (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL REFERENCES users(id),
    card_id    TEXT NOT NULL,
    outcome    TEXT CHECK(outcome IN ('success', 'partial', 'skip')) NOT NULL,
    notes      TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ── Community Posts ──────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL REFERENCES users(id),
    title      TEXT NOT NULL,
    body       TEXT NOT NULL,
    category   TEXT DEFAULT 'general',
    votes      INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ── Post Votes (deduplication) ───────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS post_votes (
    user_id   INTEGER NOT NULL,
    post_id   INTEGER NOT NULL,
    direction INTEGER NOT NULL,
    PRIMARY KEY(user_id, post_id)
  );
`);

// ── Comments ─────────────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS comments (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id    INTEGER NOT NULL REFERENCES posts(id),
    user_id    INTEGER NOT NULL REFERENCES users(id),
    body       TEXT NOT NULL,
    parent_id  INTEGER REFERENCES comments(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ── Questionnaire Responses ──────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS questionnaire_responses (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL REFERENCES users(id),
    answers    TEXT NOT NULL,
    score      INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ── Chat History ─────────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS chat_history (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL REFERENCES users(id),
    role       TEXT CHECK(role IN ('user', 'assistant')) NOT NULL,
    content    TEXT NOT NULL,
    sources    TEXT DEFAULT '[]',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
