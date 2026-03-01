import { Router, Response } from "express";
import db from "../db";
import { AuthRequest, authMiddleware } from "../middleware/auth";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// ── GET /posts — Paginated list of posts with optional category filter ───────
router.get("/posts", (req: AuthRequest, res: Response) => {
  const page = Math.max(1, parseInt(req.query.page as string) || 1);
  const limit = Math.min(50, Math.max(1, parseInt(req.query.limit as string) || 20));
  const offset = (page - 1) * limit;
  const category = req.query.category as string | undefined;

  let query: string;
  let countQuery: string;
  let params: any[];
  let countParams: any[];

  if (category) {
    query = `
      SELECT p.*, u.name AS author_name,
        (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS comment_count
      FROM posts p
      JOIN users u ON p.user_id = u.id
      WHERE p.category = ?
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `;
    countQuery = "SELECT COUNT(*) AS total FROM posts WHERE category = ?";
    params = [category, limit, offset];
    countParams = [category];
  } else {
    query = `
      SELECT p.*, u.name AS author_name,
        (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS comment_count
      FROM posts p
      JOIN users u ON p.user_id = u.id
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `;
    countQuery = "SELECT COUNT(*) AS total FROM posts";
    params = [limit, offset];
    countParams = [];
  }

  const posts = db.prepare(query).all(...params);
  const { total } = db.prepare(countQuery).get(...countParams) as { total: number };

  res.json({
    posts,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

// ── POST /posts — Create a new post ──────────────────────────────────────────
router.post("/posts", (req: AuthRequest, res: Response) => {
  const { title, body, category } = req.body;

  if (!title || !body) {
    res.status(400).json({ error: "Title and body are required" });
    return;
  }

  if (typeof title !== "string" || title.length > 200) {
    res.status(400).json({ error: "Title must be 200 characters or fewer" });
    return;
  }

  if (typeof body !== "string" || body.length > 5000) {
    res.status(400).json({ error: "Body must be 5000 characters or fewer" });
    return;
  }

  const result = db
    .prepare(
      "INSERT INTO posts (user_id, title, body, category) VALUES (?, ?, ?, ?)"
    )
    .run(req.userId!, title, body, category || "general");

  const post = db
    .prepare(
      `SELECT p.*, u.name AS author_name
       FROM posts p JOIN users u ON p.user_id = u.id
       WHERE p.id = ?`
    )
    .get(result.lastInsertRowid);

  res.status(201).json({ post });
});

// ── GET /posts/:id — Single post with all comments ──────────────────────────
router.get("/posts/:id", (req: AuthRequest, res: Response) => {
  const postId = req.params.id;

  const post = db
    .prepare(
      `SELECT p.*, u.name AS author_name,
        (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS comment_count
       FROM posts p
       JOIN users u ON p.user_id = u.id
       WHERE p.id = ?`
    )
    .get(postId);

  if (!post) {
    res.status(404).json({ error: "Post not found" });
    return;
  }

  const comments = db
    .prepare(
      `SELECT c.*, u.name AS author_name
       FROM comments c
       JOIN users u ON c.user_id = u.id
       WHERE c.post_id = ?
       ORDER BY c.created_at ASC`
    )
    .all(postId);

  res.json({ post, comments });
});

// ── POST /posts/:id/comments — Add a comment to a post ──────────────────────
router.post("/posts/:id/comments", (req: AuthRequest, res: Response) => {
  const postId = req.params.id;
  const { body, parentId } = req.body;

  if (!body) {
    res.status(400).json({ error: "Comment body is required" });
    return;
  }

  if (typeof body !== "string" || body.length > 2000) {
    res.status(400).json({ error: "Comment body must be 2000 characters or fewer" });
    return;
  }

  // Verify post exists
  const post = db.prepare("SELECT id FROM posts WHERE id = ?").get(postId);
  if (!post) {
    res.status(404).json({ error: "Post not found" });
    return;
  }

  const result = db
    .prepare(
      "INSERT INTO comments (post_id, user_id, body, parent_id) VALUES (?, ?, ?, ?)"
    )
    .run(postId, req.userId!, body, parentId || null);

  const comment = db
    .prepare(
      `SELECT c.*, u.name AS author_name
       FROM comments c
       JOIN users u ON c.user_id = u.id
       WHERE c.id = ?`
    )
    .get(result.lastInsertRowid);

  res.status(201).json({ comment });
});

// ── POST /posts/:id/vote — Vote on a post (toggle behavior) ─────────────────
router.post("/posts/:id/vote", (req: AuthRequest, res: Response) => {
  const postId = req.params.id;
  const { direction } = req.body;

  if (direction !== "up" && direction !== "down") {
    res.status(400).json({ error: "Direction must be 'up' or 'down'" });
    return;
  }

  const post = db.prepare("SELECT id, votes FROM posts WHERE id = ?").get(postId) as
    | { id: number; votes: number }
    | undefined;

  if (!post) {
    res.status(404).json({ error: "Post not found" });
    return;
  }

  const newDirection = direction === "up" ? 1 : -1;

  // Check if user already voted on this post
  const existingVote = db
    .prepare("SELECT direction FROM post_votes WHERE user_id = ? AND post_id = ?")
    .get(req.userId!, postId) as { direction: number } | undefined;

  let delta: number;

  if (!existingVote) {
    // No previous vote — insert new vote
    db.prepare("INSERT INTO post_votes (user_id, post_id, direction) VALUES (?, ?, ?)").run(
      req.userId!,
      postId,
      newDirection
    );
    delta = newDirection;
  } else if (existingVote.direction === newDirection) {
    // Same direction — toggle off (remove vote)
    db.prepare("DELETE FROM post_votes WHERE user_id = ? AND post_id = ?").run(req.userId!, postId);
    delta = -newDirection; // reverse the previous vote
  } else {
    // Different direction — update vote (swing of 2)
    db.prepare("UPDATE post_votes SET direction = ? WHERE user_id = ? AND post_id = ?").run(
      newDirection,
      req.userId!,
      postId
    );
    delta = newDirection * 2; // reverse old + apply new
  }

  db.prepare("UPDATE posts SET votes = votes + ? WHERE id = ?").run(delta, postId);

  const updated = db.prepare("SELECT votes FROM posts WHERE id = ?").get(postId) as { votes: number };
  res.json({ votes: updated.votes });
});

// ── PUT /posts/:id — Edit a post (owner only) ───────────────────────────────
router.put("/posts/:id", (req: AuthRequest, res: Response) => {
  const postId = req.params.id;
  const { title, body } = req.body;

  const post = db.prepare("SELECT user_id FROM posts WHERE id = ?").get(postId) as { user_id: number } | undefined;
  if (!post) { res.status(404).json({ error: "Post not found" }); return; }
  if (Number(post.user_id) !== Number(req.userId!)) { res.status(403).json({ error: "You can only edit your own posts" }); return; }

  if (title && (typeof title !== "string" || title.length > 200)) {
    res.status(400).json({ error: "Title must be 200 characters or fewer" }); return;
  }
  if (body && (typeof body !== "string" || body.length > 5000)) {
    res.status(400).json({ error: "Body must be 5000 characters or fewer" }); return;
  }

  if (title) db.prepare("UPDATE posts SET title = ? WHERE id = ?").run(title, postId);
  if (body) db.prepare("UPDATE posts SET body = ? WHERE id = ?").run(body, postId);

  const updated = db.prepare(
    `SELECT p.*, u.name AS author_name,
      (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS comment_count
     FROM posts p JOIN users u ON p.user_id = u.id WHERE p.id = ?`
  ).get(postId);

  res.json({ post: updated });
});

// ── DELETE /posts/:id — Delete a post and its comments (owner only) ──────────
router.delete("/posts/:id", (req: AuthRequest, res: Response) => {
  const postId = req.params.id;

  const post = db.prepare("SELECT user_id FROM posts WHERE id = ?").get(postId) as { user_id: number } | undefined;
  if (!post) { res.status(404).json({ error: "Post not found" }); return; }
  if (Number(post.user_id) !== Number(req.userId!)) { res.status(403).json({ error: "You can only delete your own posts" }); return; }

  db.prepare("DELETE FROM comments WHERE post_id = ?").run(postId);
  db.prepare("DELETE FROM post_votes WHERE post_id = ?").run(postId);
  db.prepare("DELETE FROM posts WHERE id = ?").run(postId);

  res.json({ success: true });
});

// ── PUT /posts/:id/comments/:commentId — Edit a comment (owner only) ────────
router.put("/posts/:id/comments/:commentId", (req: AuthRequest, res: Response) => {
  const { commentId } = req.params;
  const { body } = req.body;

  if (!body || typeof body !== "string" || body.length > 2000) {
    res.status(400).json({ error: "Comment body must be 1-2000 characters" }); return;
  }

  const comment = db.prepare("SELECT user_id FROM comments WHERE id = ?").get(commentId) as { user_id: number } | undefined;
  if (!comment) { res.status(404).json({ error: "Comment not found" }); return; }
  if (Number(comment.user_id) !== Number(req.userId!)) { res.status(403).json({ error: "You can only edit your own comments" }); return; }

  db.prepare("UPDATE comments SET body = ? WHERE id = ?").run(body, commentId);

  const updated = db.prepare(
    `SELECT c.*, u.name AS author_name FROM comments c JOIN users u ON c.user_id = u.id WHERE c.id = ?`
  ).get(commentId);

  res.json({ comment: updated });
});

// ── DELETE /posts/:id/comments/:commentId — Delete a comment (owner only) ────
router.delete("/posts/:id/comments/:commentId", (req: AuthRequest, res: Response) => {
  const { commentId } = req.params;

  const comment = db.prepare("SELECT user_id FROM comments WHERE id = ?").get(commentId) as { user_id: number } | undefined;
  if (!comment) { res.status(404).json({ error: "Comment not found" }); return; }
  if (Number(comment.user_id) !== Number(req.userId!)) { res.status(403).json({ error: "You can only delete your own comments" }); return; }

  db.prepare("DELETE FROM comments WHERE id = ?").run(commentId);

  res.json({ success: true });
});

export default router;
