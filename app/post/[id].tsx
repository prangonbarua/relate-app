import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { api } from "../../store/apiClient";
import { useAuthStore } from "../../store/authStore";
import { Colors, Radius, Shadow } from "../../constants/theme";

// ── Types ────────────────────────────────────────────────────────────────────

interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
  category: string;
  votes: number;
  created_at: string;
  author_name: string;
  comment_count: number;
}

interface Comment {
  id: number;
  post_id: number;
  user_id: number;
  body: string;
  created_at: string;
  author_name: string;
}

// ── Category colors ──────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  general: { bg: "#E0E7FF", text: "#4338CA" },
  questions: { bg: "#FEF3C7", text: "#92400E" },
  tips: { bg: "#D1FAE5", text: "#065F46" },
  wins: { bg: "#FCE7F3", text: "#9D174D" },
  vent: { bg: "#FEE2E2", text: "#991B1B" },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatTimeAgo(dateStr: string, t: (key: string, opts?: any) => string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return t("community.time.just_now");
  if (minutes < 60) return t("community.time.minutes_ago", { count: minutes });
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return t("community.time.hours_ago", { count: hours });
  const days = Math.floor(hours / 24);
  if (days < 7) return t("community.time.days_ago", { count: days });
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return t("community.time.weeks_ago", { count: weeks });
  const months = Math.floor(days / 30);
  if (months < 12) return t("community.time.months_ago", { count: months });
  return t("community.time.years_ago", { count: Math.floor(months / 12) });
}

// ── Component ────────────────────────────────────────────────────────────────

export default function PostDetailScreen() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const storeUserId = useAuthStore((s) => s.user?.id);
  const [currentUserId, setCurrentUserId] = useState<number | null>(storeUserId ?? null);

  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Vote state
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  // Comment input
  const [commentText, setCommentText] = useState("");
  const [isSendingComment, setIsSendingComment] = useState(false);

  // Edit states
  const [editingPost, setEditingPost] = useState(false);
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostBody, setEditPostBody] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editCommentBody, setEditCommentBody] = useState("");

  // ── Fetch post + comments ────────────────────────────────────────────────

  const fetchPost = useCallback(async () => {
    if (!id) return;
    try {
      const [data, meData] = await Promise.all([
        api<{ post: Post; comments: Comment[] }>(`/api/community/posts/${id}`),
        currentUserId ? Promise.resolve(null) : api<{ user: { id: number } }>("/api/auth/me"),
      ]);
      setPost(data.post);
      setComments(data.comments);
      if (meData) setCurrentUserId(meData.user.id);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id, currentUserId]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  // ── Vote handler ─────────────────────────────────────────────────────────

  const handleVote = async (direction: "up" | "down") => {
    if (!post) return;
    const prevVote = userVote;

    // Optimistic update
    const nextVote = userVote === direction ? null : direction;
    setUserVote(nextVote);

    try {
      const data = await api<{ votes: number }>(
        `/api/community/posts/${post.id}/vote`,
        {
          method: "POST",
          body: JSON.stringify({ direction }),
        }
      );
      setPost((prev) => (prev ? { ...prev, votes: data.votes } : prev));
    } catch {
      setUserVote(prevVote);
    }
  };

  // ── Add comment ──────────────────────────────────────────────────────────

  const handleAddComment = async () => {
    if (!commentText.trim() || !post) return;
    setIsSendingComment(true);
    try {
      const data = await api<{ comment: Comment }>(
        `/api/community/posts/${post.id}/comments`,
        {
          method: "POST",
          body: JSON.stringify({ body: commentText.trim() }),
        }
      );
      setComments((prev) => [...prev, data.comment]);
      setPost((prev) =>
        prev ? { ...prev, comment_count: prev.comment_count + 1 } : prev
      );
      setCommentText("");
    } catch {
      // Could show an alert
    } finally {
      setIsSendingComment(false);
    }
  };

  // ── Edit / Delete post ─────────────────────────────────────────────────

  const handleEditPost = async () => {
    if (!post || !editPostTitle.trim() || !editPostBody.trim()) return;
    try {
      const data = await api<{ post: Post }>(`/api/community/posts/${post.id}`, {
        method: "PUT",
        body: JSON.stringify({ title: editPostTitle.trim(), body: editPostBody.trim() }),
      });
      setPost(data.post);
      setEditingPost(false);
    } catch {}
  };

  const handleDeletePost = () => {
    if (!post) return;
    Alert.alert(t("post.delete_title"), t("post.delete_message"), [
      { text: t("common.cancel"), style: "cancel" },
      {
        text: t("common.delete"),
        style: "destructive",
        onPress: async () => {
          try {
            await api(`/api/community/posts/${post.id}`, { method: "DELETE" });
            router.back();
          } catch {}
        },
      },
    ]);
  };

  // ── Edit / Delete comment ──────────────────────────────────────────────

  const handleEditComment = async (commentId: number) => {
    if (!editCommentBody.trim()) return;
    try {
      const data = await api<{ comment: Comment }>(`/api/community/posts/${id}/comments/${commentId}`, {
        method: "PUT",
        body: JSON.stringify({ body: editCommentBody.trim() }),
      });
      setComments((prev) => prev.map((c) => (c.id === commentId ? data.comment : c)));
      setEditingCommentId(null);
      setEditCommentBody("");
    } catch {}
  };

  const handleDeleteComment = (commentId: number) => {
    Alert.alert(t("post.delete_comment_title"), t("post.delete_comment_message"), [
      { text: t("common.cancel"), style: "cancel" },
      {
        text: t("common.delete"),
        style: "destructive",
        onPress: async () => {
          try {
            await api(`/api/community/posts/${id}/comments/${commentId}`, { method: "DELETE" });
            setComments((prev) => prev.filter((c) => c.id !== commentId));
            setPost((prev) => prev ? { ...prev, comment_count: prev.comment_count - 1 } : prev);
          } catch {}
        },
      },
    ]);
  };

  // ── Loading state ────────────────────────────────────────────────────────

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text
            style={{ color: Colors.textMuted, fontSize: 14, marginTop: 12 }}
          >
            {t("post.loading")}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // ── Error state ──────────────────────────────────────────────────────────

  if (error || !post) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        {/* Back button */}
        <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons name="arrow-back" size={24} color="#374151" />
            <Text
              style={{
                color: "#374151",
                fontWeight: "500",
                fontSize: 16,
                marginLeft: 4,
              }}
            >
              {t("common.back")}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 24,
          }}
        >
          <Ionicons name="alert-circle-outline" size={48} color="#D1D5DB" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: Colors.text,
              marginTop: 16,
              marginBottom: 8,
            }}
          >
            {t("post.not_found")}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.textSecondary,
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            {t("post.not_found_detail")}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsLoading(true);
              setError(false);
              fetchPost();
            }}
            style={{
              backgroundColor: Colors.primary,
              paddingHorizontal: 32,
              paddingVertical: 14,
              borderRadius: Radius.lg,
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 16 }}
            >
              {t("common.retry")}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Category color ───────────────────────────────────────────────────────

  const catKey = (post.category || "general").toLowerCase();
  const catColor = CATEGORY_COLORS[catKey] || CATEGORY_COLORS.general;

  // ── Render comment ───────────────────────────────────────────────────────

  const renderComment = ({ item }: { item: Comment }) => (
    <View
      style={{
        backgroundColor: Colors.surface,
        borderRadius: Radius.lg,
        paddingHorizontal: 16,
        paddingVertical: 14,
        marginBottom: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: Colors.borderLight,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <View
          style={{
            width: 28,
            height: 28,
            borderRadius: Radius.full,
            backgroundColor: Colors.primaryLight,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 8,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "700",
              color: Colors.primary,
            }}
          >
            {item.author_name?.charAt(0)?.toUpperCase() || "?"}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "#1F2937",
          }}
        >
          {item.author_name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#D1D5DB",
            marginHorizontal: 6,
          }}
        >
          {"\u00B7"}
        </Text>
        <Text style={{ fontSize: 12, color: Colors.textMuted }}>
          {formatTimeAgo(item.created_at, t)}
        </Text>
      </View>
      {editingCommentId === item.id ? (
        <View>
          <TextInput
            value={editCommentBody}
            onChangeText={setEditCommentBody}
            multiline
            style={{ fontSize: 14, color: Colors.text, borderWidth: 1, borderColor: Colors.border, borderRadius: Radius.sm, padding: 10, minHeight: 60, lineHeight: 20 }}
            maxLength={2000}
          />
          <View style={{ flexDirection: "row", gap: 12, marginTop: 8 }}>
            <TouchableOpacity onPress={() => handleEditComment(item.id)} style={{ backgroundColor: Colors.primary, paddingHorizontal: 16, paddingVertical: 8, borderRadius: Radius.sm }}>
              <Text style={{ color: "#FFFFFF", fontWeight: "700", fontSize: 13 }}>{t("common.save")}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setEditingCommentId(null); setEditCommentBody(""); }} style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
              <Text style={{ color: Colors.textSecondary, fontWeight: "600", fontSize: 13 }}>{t("common.cancel")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text
          style={{ fontSize: 14, color: "#374151", lineHeight: 20 }}
        >
          {item.body}
        </Text>
      )}
      {Number(item.user_id) === Number(currentUserId) && editingCommentId !== item.id && (
        <View style={{ flexDirection: "row", gap: 16, marginTop: 8 }}>
          <TouchableOpacity
            onPress={() => { setEditingCommentId(item.id); setEditCommentBody(item.body); }}
            style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
          >
            <Ionicons name="pencil-outline" size={12} color={Colors.primary} />
            <Text style={{ fontSize: 12, color: Colors.primary, fontWeight: "600" }}>{t("common.edit")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDeleteComment(item.id)}
            style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
          >
            <Ionicons name="trash-outline" size={12} color={Colors.danger} />
            <Text style={{ fontSize: 12, color: Colors.danger, fontWeight: "600" }}>{t("common.delete")}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  // ── Post header (rendered as FlatList header) ────────────────────────────

  const PostHeader = () => (
    <View>
      {/* Post card */}
      <View
        style={{
          backgroundColor: Colors.surface,
          marginHorizontal: 16,
          marginTop: 12,
          borderRadius: Radius.xl,
          padding: 20,
          borderWidth: 1,
          borderColor: Colors.borderLight,
          ...Shadow.soft,
        }}
      >
        {/* Category badge */}
        {post.category && (
          <View
            style={{
              alignSelf: "flex-start",
              borderRadius: Radius.full,
              paddingHorizontal: 12,
              paddingVertical: 4,
              marginBottom: 12,
              backgroundColor: catColor.bg,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                textTransform: "capitalize",
                color: catColor.text,
              }}
            >
              {t(`community.categories.${post.category}`)}
            </Text>
          </View>
        )}

        {/* Title + Body (editable or static) */}
        {editingPost ? (
          <View style={{ marginBottom: 12 }}>
            <TextInput
              value={editPostTitle}
              onChangeText={setEditPostTitle}
              style={{ fontSize: 18, fontWeight: "700", color: Colors.text, borderWidth: 1, borderColor: Colors.border, borderRadius: Radius.md, padding: 12, marginBottom: 8 }}
              maxLength={200}
            />
            <TextInput
              value={editPostBody}
              onChangeText={setEditPostBody}
              multiline
              style={{ fontSize: 15, color: Colors.text, borderWidth: 1, borderColor: Colors.border, borderRadius: Radius.md, padding: 12, minHeight: 100, lineHeight: 22 }}
              maxLength={5000}
            />
            <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
              <TouchableOpacity onPress={handleEditPost} style={{ backgroundColor: Colors.primary, paddingHorizontal: 20, paddingVertical: 10, borderRadius: Radius.md }}>
                <Text style={{ color: "#FFFFFF", fontWeight: "700", fontSize: 14 }}>{t("common.save")}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setEditingPost(false)} style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                <Text style={{ color: Colors.textSecondary, fontWeight: "600", fontSize: 14 }}>{t("common.cancel")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            {/* Title */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: Colors.text,
                marginBottom: 12,
                lineHeight: 28,
              }}
            >
              {post.title}
            </Text>

            {/* Full body */}
            <Text
              style={{
                fontSize: 16,
                color: "#374151",
                lineHeight: 24,
                marginBottom: 16,
              }}
            >
              {post.body}
            </Text>
          </>
        )}

        {/* Meta row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: Radius.full,
              backgroundColor: Colors.primaryLight,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 8,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "700",
                color: Colors.primary,
              }}
            >
              {post.author_name?.charAt(0)?.toUpperCase() || "?"}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: "#4B5563",
              fontWeight: "500",
            }}
          >
            {post.author_name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "#D1D5DB",
              marginHorizontal: 8,
            }}
          >
            {"\u00B7"}
          </Text>
          <Text style={{ fontSize: 12, color: Colors.textMuted }}>
            {formatTimeAgo(post.created_at, t)}
          </Text>
        </View>

        {/* Owner actions */}
        {Number(post.user_id) === Number(currentUserId) && !editingPost && (
          <View style={{ flexDirection: "row", gap: 16, marginBottom: 12 }}>
            <TouchableOpacity
              onPress={() => { setEditingPost(true); setEditPostTitle(post.title); setEditPostBody(post.body); }}
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Ionicons name="pencil-outline" size={14} color={Colors.primary} />
              <Text style={{ fontSize: 13, color: Colors.primary, fontWeight: "600" }}>{t("common.edit")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDeletePost}
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Ionicons name="trash-outline" size={14} color={Colors.danger} />
              <Text style={{ fontSize: 13, color: Colors.danger, fontWeight: "600" }}>{t("common.delete")}</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Vote row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderTopWidth: 1,
            borderTopColor: Colors.borderLight,
            paddingTop: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => handleVote("up")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 4,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: Radius.sm,
              backgroundColor:
                userVote === "up" ? Colors.primaryLight : "transparent",
            }}
          >
            <Ionicons
              name={userVote === "up" ? "arrow-up" : "arrow-up-outline"}
              size={20}
              color={userVote === "up" ? Colors.primary : Colors.textMuted}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              marginHorizontal: 4,
              color:
                userVote === "up"
                  ? Colors.primary
                  : userVote === "down"
                  ? Colors.danger
                  : "#374151",
            }}
          >
            {post.votes}
          </Text>

          <TouchableOpacity
            onPress={() => handleVote("down")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 4,
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: Radius.sm,
              backgroundColor:
                userVote === "down" ? Colors.dangerLight : "transparent",
            }}
          >
            <Ionicons
              name={
                userVote === "down" ? "arrow-down" : "arrow-down-outline"
              }
              size={20}
              color={
                userVote === "down" ? Colors.danger : Colors.textMuted
              }
            />
          </TouchableOpacity>

          <View
            style={{
              marginLeft: 24,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="chatbubble-outline"
              size={16}
              color={Colors.textMuted}
            />
            <Text
              style={{
                fontSize: 14,
                color: Colors.textSecondary,
                marginLeft: 6,
              }}
            >
              {t("post.comment_count", { count: post.comment_count })}
            </Text>
          </View>
        </View>
      </View>

      {/* Comments section header */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 8,
        }}
      >
        <Text
          style={{ fontSize: 16, fontWeight: "700", color: "#1F2937" }}
        >
          {t("post.comments")}
        </Text>
      </View>

      {comments.length === 0 && (
        <View
          style={{
            alignItems: "center",
            paddingVertical: 32,
            paddingHorizontal: 24,
          }}
        >
          <Ionicons name="chatbubble-outline" size={32} color="#D1D5DB" />
          <Text
            style={{
              color: Colors.textMuted,
              fontSize: 14,
              marginTop: 8,
              textAlign: "center",
            }}
          >
            {t("post.no_comments")}
          </Text>
        </View>
      )}
    </View>
  );

  // ── Main render ──────────────────────────────────────────────────────────

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        {/* Header bar */}
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.surface,
            borderBottomWidth: 1,
            borderBottomColor: Colors.borderLight,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 12,
            }}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: Colors.text,
              flex: 1,
            }}
            numberOfLines={1}
          >
            {t("post.title")}
          </Text>
        </View>

        {/* Comments list with post as header */}
        <FlatList
          data={comments}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderComment}
          ListHeaderComponent={PostHeader()}
          contentContainerStyle={{ paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        />

        {/* Comment input bar */}
        <View
          style={{
            backgroundColor: Colors.surface,
            borderTopWidth: 1,
            borderTopColor: Colors.borderLight,
            paddingHorizontal: 16,
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <TextInput
            value={commentText}
            onChangeText={setCommentText}
            placeholder={t("post.comment_placeholder")}
            placeholderTextColor={Colors.textMuted}
            multiline
            maxLength={2000}
            style={{
              flex: 1,
              backgroundColor: "#F3F4F6",
              borderRadius: Radius.lg,
              paddingHorizontal: 16,
              paddingVertical: 10,
              fontSize: 14,
              color: Colors.text,
              marginRight: 12,
              maxHeight: 100,
            }}
          />
          <TouchableOpacity
            onPress={handleAddComment}
            disabled={isSendingComment || !commentText.trim()}
            style={{
              width: 40,
              height: 40,
              borderRadius: Radius.full,
              backgroundColor: Colors.primary,
              alignItems: "center",
              justifyContent: "center",
              opacity: isSendingComment || !commentText.trim() ? 0.4 : 1,
            }}
          >
            {isSendingComment ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Ionicons name="send" size={18} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
