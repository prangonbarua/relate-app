import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors, Radius, Shadow } from "../../constants/theme";
import { api } from "../../store/apiClient";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

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

interface PostsResponse {
  posts: Post[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CATEGORIES = ["all", "general", "questions", "tips", "wins", "vent"] as const;
type Category = (typeof CATEGORIES)[number];

const CATEGORY_LABELS: Record<Category, string> = {
  all: "All",
  general: "General",
  questions: "Questions",
  tips: "Tips",
  wins: "Wins",
  vent: "Vent",
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  general: { bg: "#E0E7FF", text: "#4338CA" },
  questions: { bg: "#FEF3C7", text: "#92400E" },
  tips: { bg: "#D1FAE5", text: "#065F46" },
  wins: { bg: "#FCE7F3", text: "#9D174D" },
  vent: { bg: "#FEE2E2", text: "#991B1B" },
};

// Categories available for creating a post (excludes "all")
const POST_CATEGORIES = CATEGORIES.filter((c) => c !== "all") as Exclude<Category, "all">[];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatTimeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return days < 7 ? `${days}d ago` : `${Math.floor(days / 7)}w ago`;
}

function getInitial(name: string): string {
  return (name ?? "?").charAt(0).toUpperCase();
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CommunityScreen() {
  const { t } = useTranslation();
  const router = useRouter();

  // Feed state
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  // Create‑post modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newCategory, setNewCategory] = useState<Exclude<Category, "all">>("general");
  const [submitting, setSubmitting] = useState(false);

  // ------------------------------------------------------------------
  // Data fetching
  // ------------------------------------------------------------------

  const fetchPosts = useCallback(
    async (pageNum: number, replace: boolean) => {
      try {
        const categoryParam = selectedCategory === "all" ? "" : `&category=${selectedCategory}`;
        const data = await api<PostsResponse>(
          `/api/community/posts?page=${pageNum}&limit=20${categoryParam}`
        );
        setPosts((prev) => (replace ? data.posts : [...prev, ...data.posts]));
        setTotalPages(data.pagination.totalPages);
      } catch {
        // Silently handle – could add error toast later
      }
    },
    [selectedCategory]
  );

  // Initial load & category change
  useEffect(() => {
    setLoading(true);
    setPage(1);
    fetchPosts(1, true).finally(() => setLoading(false));
  }, [fetchPosts]);

  // Pull to refresh
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage(1);
    await fetchPosts(1, true);
    setRefreshing(false);
  }, [fetchPosts]);

  // Infinite scroll
  const onEndReached = useCallback(async () => {
    if (loadingMore || page >= totalPages) return;
    setLoadingMore(true);
    const nextPage = page + 1;
    await fetchPosts(nextPage, false);
    setPage(nextPage);
    setLoadingMore(false);
  }, [loadingMore, page, totalPages, fetchPosts]);

  // ------------------------------------------------------------------
  // Voting (optimistic)
  // ------------------------------------------------------------------

  const handleVote = useCallback(
    async (postId: number, direction: "up" | "down") => {
      // Optimistic update
      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId ? { ...p, votes: p.votes + (direction === "up" ? 1 : -1) } : p
        )
      );
      try {
        const data = await api<{ votes: number }>(`/api/community/posts/${postId}/vote`, {
          method: "POST",
          body: JSON.stringify({ direction }),
        });
        // Reconcile with server value
        setPosts((prev) =>
          prev.map((p) => (p.id === postId ? { ...p, votes: data.votes } : p))
        );
      } catch {
        // Revert on failure
        setPosts((prev) =>
          prev.map((p) =>
            p.id === postId ? { ...p, votes: p.votes + (direction === "up" ? -1 : 1) } : p
          )
        );
      }
    },
    []
  );

  // ------------------------------------------------------------------
  // Create post
  // ------------------------------------------------------------------

  const handleCreatePost = useCallback(async () => {
    if (!newTitle.trim() || !newBody.trim() || submitting) return;
    setSubmitting(true);
    try {
      const data = await api<{ post: Post }>("/api/community/posts", {
        method: "POST",
        body: JSON.stringify({
          title: newTitle.trim(),
          body: newBody.trim(),
          category: newCategory,
        }),
      });
      setPosts((prev) => [data.post, ...prev]);
      setNewTitle("");
      setNewBody("");
      setNewCategory("general");
      setModalVisible(false);
    } catch {
      // Could surface error to user
    } finally {
      setSubmitting(false);
    }
  }, [newTitle, newBody, newCategory, submitting]);

  // ------------------------------------------------------------------
  // Renderers
  // ------------------------------------------------------------------

  const renderCategoryTabs = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 12, gap: 8 }}
    >
      {CATEGORIES.map((cat) => {
        const active = selectedCategory === cat;
        return (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            activeOpacity={0.7}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: Radius.full,
              backgroundColor: active ? Colors.primary : Colors.surface,
              borderWidth: active ? 0 : 1,
              borderColor: Colors.border,
              ...Shadow.soft,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color: active ? "#FFFFFF" : Colors.textSecondary,
              }}
            >
              {CATEGORY_LABELS[cat]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  const renderPostCard = ({ item }: { item: Post }) => {
    const catColor = CATEGORY_COLORS[item.category] ?? { bg: "#E0E7FF", text: "#4338CA" };
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          router.push({ pathname: "/post/[id]", params: { id: String(item.id) } })
        }
        style={{
          backgroundColor: Colors.surface,
          borderRadius: Radius.lg,
          marginHorizontal: 20,
          marginBottom: 12,
          padding: 16,
          ...Shadow.card,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {/* Vote column */}
          <View style={{ alignItems: "center", marginRight: 12, width: 36 }}>
            <TouchableOpacity
              onPress={() => handleVote(item.id, "up")}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
            >
              <Ionicons name="chevron-up" size={22} color={Colors.primary} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: Colors.text,
                marginVertical: 2,
              }}
            >
              {item.votes}
            </Text>
            <TouchableOpacity
              onPress={() => handleVote(item.id, "down")}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
            >
              <Ionicons name="chevron-down" size={22} color={Colors.textMuted} />
            </TouchableOpacity>
          </View>

          {/* Content column */}
          <View style={{ flex: 1 }}>
            {/* Category badge */}
            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: catColor.bg,
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: Radius.full,
                marginBottom: 6,
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: "600", color: catColor.text }}>
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </Text>
            </View>

            {/* Title */}
            <Text
              style={{ fontSize: 15, fontWeight: "700", color: Colors.text, marginBottom: 4 }}
              numberOfLines={2}
            >
              {item.title}
            </Text>

            {/* Body preview */}
            <Text
              style={{ fontSize: 13, color: Colors.textSecondary, lineHeight: 19, marginBottom: 10 }}
              numberOfLines={2}
            >
              {item.body}
            </Text>

            {/* Meta row */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* Author avatar */}
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: Radius.full,
                  backgroundColor: Colors.primaryLight,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 6,
                }}
              >
                <Text style={{ fontSize: 11, fontWeight: "700", color: Colors.primary }}>
                  {getInitial(item.author_name)}
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: Colors.textSecondary, marginRight: 8 }}>
                {item.author_name}
              </Text>
              <Text style={{ fontSize: 12, color: Colors.textMuted, marginRight: 12 }}>
                {formatTimeAgo(item.created_at)}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="chatbubble-outline"
                  size={13}
                  color={Colors.textMuted}
                  style={{ marginRight: 3 }}
                />
                <Text style={{ fontSize: 12, color: Colors.textMuted }}>
                  {item.comment_count}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderEmpty = () => {
    if (loading) return null;
    return (
      <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 80 }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: Radius.full,
            backgroundColor: Colors.primaryLight,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <Ionicons name="chatbubbles-outline" size={36} color={Colors.primary} />
        </View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            color: Colors.text,
            marginBottom: 6,
            textAlign: "center",
          }}
        >
          No posts yet
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.textSecondary,
            textAlign: "center",
            maxWidth: 260,
            lineHeight: 20,
          }}
        >
          Be the first to share something with the community!
        </Text>
      </View>
    );
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator color={Colors.primary} />
      </View>
    );
  };

  // ------------------------------------------------------------------
  // Create Post Modal
  // ------------------------------------------------------------------

  const renderCreateModal = () => (
    <Modal
      visible={modalVisible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => setModalVisible(false)}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, backgroundColor: Colors.background }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {/* Modal header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: Colors.border,
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontSize: 15, color: Colors.textSecondary }}>Cancel</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 17, fontWeight: "700", color: Colors.text }}>
              New Post
            </Text>
            <TouchableOpacity
              onPress={handleCreatePost}
              disabled={!newTitle.trim() || !newBody.trim() || submitting}
              style={{
                backgroundColor:
                  newTitle.trim() && newBody.trim() && !submitting
                    ? Colors.primary
                    : Colors.border,
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: Radius.full,
              }}
            >
              {submitting ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    color:
                      newTitle.trim() && newBody.trim() ? "#FFFFFF" : Colors.textMuted,
                  }}
                >
                  Post
                </Text>
              )}
            </TouchableOpacity>
          </View>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ padding: 20 }}
            keyboardShouldPersistTaps="handled"
          >
            {/* Category selector */}
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color: Colors.textSecondary,
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Category
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 8, marginBottom: 20 }}
            >
              {POST_CATEGORIES.map((cat) => {
                const active = newCategory === cat;
                const catColor = CATEGORY_COLORS[cat];
                return (
                  <TouchableOpacity
                    key={cat}
                    onPress={() => setNewCategory(cat)}
                    activeOpacity={0.7}
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                      borderRadius: Radius.full,
                      backgroundColor: active ? catColor.bg : Colors.surface,
                      borderWidth: active ? 1.5 : 1,
                      borderColor: active ? catColor.text : Colors.border,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: "600",
                        color: active ? catColor.text : Colors.textSecondary,
                      }}
                    >
                      {CATEGORY_LABELS[cat]}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            {/* Title input */}
            <TextInput
              placeholder="Title"
              placeholderTextColor={Colors.textMuted}
              value={newTitle}
              onChangeText={setNewTitle}
              maxLength={120}
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: Colors.text,
                backgroundColor: Colors.surface,
                borderRadius: Radius.md,
                paddingHorizontal: 16,
                paddingVertical: 14,
                marginBottom: 12,
                borderWidth: 1,
                borderColor: Colors.border,
              }}
            />

            {/* Body input */}
            <TextInput
              placeholder="What's on your mind?"
              placeholderTextColor={Colors.textMuted}
              value={newBody}
              onChangeText={setNewBody}
              multiline
              textAlignVertical="top"
              style={{
                fontSize: 15,
                color: Colors.text,
                backgroundColor: Colors.surface,
                borderRadius: Radius.md,
                paddingHorizontal: 16,
                paddingVertical: 14,
                minHeight: 160,
                borderWidth: 1,
                borderColor: Colors.border,
                lineHeight: 22,
              }}
            />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Modal>
  );

  // ------------------------------------------------------------------
  // Main render
  // ------------------------------------------------------------------

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 28, paddingBottom: 12 }}>
        <Text
          style={{ fontSize: 26, fontWeight: "700", color: Colors.text, marginBottom: 4 }}
        >
          {t("community.title")}
        </Text>
        <Text style={{ fontSize: 14, color: Colors.textSecondary }}>
          {t("community.subtitle")}
        </Text>
      </View>

      {/* Category filter tabs */}
      {renderCategoryTabs()}

      {/* Loading state */}
      {loading ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderPostCard}
          contentContainerStyle={{ paddingTop: 4, paddingBottom: 100 }}
          ListEmptyComponent={renderEmpty}
          ListFooterComponent={renderFooter}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.4}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={Colors.primary}
              colors={[Colors.primary]}
            />
          }
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* FAB — create post */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.85}
        style={{
          position: "absolute",
          bottom: 28,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: Radius.full,
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
          ...Shadow.card,
        }}
      >
        <Ionicons name="add" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Create post modal */}
      {renderCreateModal()}
    </SafeAreaView>
  );
}
