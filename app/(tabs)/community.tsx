import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  RefreshControl,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../../store/apiClient";

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

// ── Category config ──────────────────────────────────────────────────────────

const CATEGORIES = ["General", "Questions", "Tips", "Wins", "Vent"] as const;
type Category = (typeof CATEGORIES)[number];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  general: { bg: "#E0E7FF", text: "#4338CA" },
  questions: { bg: "#FEF3C7", text: "#92400E" },
  tips: { bg: "#D1FAE5", text: "#065F46" },
  wins: { bg: "#FCE7F3", text: "#9D174D" },
  vent: { bg: "#FEE2E2", text: "#991B1B" },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatTimeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}w ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function truncateBody(body: string, max = 120): string {
  if (body.length <= max) return body;
  return body.slice(0, max).trimEnd() + "...";
}

// ── Component ────────────────────────────────────────────────────────────────

export default function CommunityScreen() {
  const router = useRouter();

  // Feed state
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(false);

  // Vote tracking (local state for coloring arrows)
  const [userVotes, setUserVotes] = useState<Record<number, "up" | "down" | null>>({});

  // Create-post modal state
  const [showNewPost, setShowNewPost] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newCategory, setNewCategory] = useState<Category>("General");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── Data fetching ────────────────────────────────────────────────────────

  const fetchPosts = useCallback(async () => {
    try {
      const data = await api<{ posts: Post[] }>("/api/community/posts");
      setPosts(data.posts);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    fetchPosts();
  }, [fetchPosts]);

  // ── Vote handler ─────────────────────────────────────────────────────────

  const handleVote = async (postId: number, direction: "up" | "down") => {
    const currentVote = userVotes[postId] ?? null;

    // Optimistic: toggle or switch
    let optimisticVote: "up" | "down" | null;
    if (currentVote === direction) {
      optimisticVote = null; // toggle off
    } else {
      optimisticVote = direction;
    }
    setUserVotes((prev) => ({ ...prev, [postId]: optimisticVote }));

    try {
      const data = await api<{ votes: number }>(
        `/api/community/posts/${postId}/vote`,
        {
          method: "POST",
          body: JSON.stringify({ direction }),
        }
      );
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, votes: data.votes } : p))
      );
    } catch {
      // Revert optimistic vote on failure
      setUserVotes((prev) => ({ ...prev, [postId]: currentVote }));
    }
  };

  // ── Create post handler ──────────────────────────────────────────────────

  const handleCreatePost = async () => {
    if (!newTitle.trim() || !newBody.trim()) return;
    setIsSubmitting(true);
    try {
      const data = await api<{ post: Post }>("/api/community/posts", {
        method: "POST",
        body: JSON.stringify({
          title: newTitle.trim(),
          body: newBody.trim(),
          category: newCategory.toLowerCase(),
        }),
      });
      setPosts((prev) => [data.post, ...prev]);
      setNewTitle("");
      setNewBody("");
      setNewCategory("General");
      setShowNewPost(false);
    } catch {
      // Could show an alert here
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndCloseModal = () => {
    setNewTitle("");
    setNewBody("");
    setNewCategory("General");
    setShowNewPost(false);
  };

  // ── Post card renderer ───────────────────────────────────────────────────

  const renderPostCard = ({ item: post }: { item: Post }) => {
    const vote = userVotes[post.id] ?? null;
    const catKey = (post.category || "general").toLowerCase();
    const catColor = CATEGORY_COLORS[catKey] || CATEGORY_COLORS.general;

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.push(`/post/${post.id}`)}
        className="bg-white border border-gray-200 rounded-2xl mx-4 mb-3 p-4 flex-row"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        {/* Vote column */}
        <View className="items-center mr-3 pt-0.5" style={{ width: 36 }}>
          <TouchableOpacity
            onPress={(e) => {
              e.stopPropagation();
              handleVote(post.id, "up");
            }}
            hitSlop={{ top: 8, bottom: 4, left: 8, right: 8 }}
          >
            <Ionicons
              name={vote === "up" ? "arrow-up" : "arrow-up-outline"}
              size={20}
              color={vote === "up" ? "#6366F1" : "#9CA3AF"}
            />
          </TouchableOpacity>

          <Text
            className="text-sm font-bold my-0.5"
            style={{
              color:
                vote === "up"
                  ? "#6366F1"
                  : vote === "down"
                  ? "#EF4444"
                  : "#374151",
            }}
          >
            {post.votes}
          </Text>

          <TouchableOpacity
            onPress={(e) => {
              e.stopPropagation();
              handleVote(post.id, "down");
            }}
            hitSlop={{ top: 4, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons
              name={vote === "down" ? "arrow-down" : "arrow-down-outline"}
              size={20}
              color={vote === "down" ? "#EF4444" : "#9CA3AF"}
            />
          </TouchableOpacity>
        </View>

        {/* Content column */}
        <View className="flex-1">
          {/* Category badge */}
          {post.category && (
            <View
              className="self-start rounded-full px-2.5 py-0.5 mb-1.5"
              style={{ backgroundColor: catColor.bg }}
            >
              <Text
                className="text-xs font-semibold capitalize"
                style={{ color: catColor.text }}
              >
                {post.category}
              </Text>
            </View>
          )}

          {/* Title */}
          <Text className="text-base font-bold text-gray-900 mb-1 leading-5">
            {post.title}
          </Text>

          {/* Body preview */}
          <Text className="text-sm text-gray-500 leading-5 mb-2.5">
            {truncateBody(post.body)}
          </Text>

          {/* Meta row */}
          <View className="flex-row items-center flex-wrap">
            <Text className="text-xs text-gray-400">
              {post.author_name}
            </Text>
            <Text className="text-xs text-gray-300 mx-1.5">{"\u00B7"}</Text>
            <Text className="text-xs text-gray-400">
              {formatTimeAgo(post.created_at)}
            </Text>
            <Text className="text-xs text-gray-300 mx-1.5">{"\u00B7"}</Text>
            <View className="flex-row items-center">
              <Ionicons name="chatbubble-outline" size={12} color="#9CA3AF" />
              <Text className="text-xs text-gray-400 ml-1">
                {post.comment_count}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // ── Loading state ────────────────────────────────────────────────────────

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#6366f1" />
          <Text className="text-gray-400 text-sm mt-3">
            Loading community...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // ── Error state (no posts loaded) ────────────────────────────────────────

  if (error && posts.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="flex-1 items-center justify-center px-6">
          <View className="w-20 h-20 rounded-full bg-indigo-50 items-center justify-center mb-5">
            <Ionicons name="cloud-offline-outline" size={36} color="#6366f1" />
          </View>
          <Text className="text-lg font-bold text-gray-900 mb-2 text-center">
            Couldn't load posts
          </Text>
          <Text className="text-sm text-gray-500 text-center mb-6">
            Check your connection and try again.
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsLoading(true);
              fetchPosts();
            }}
            className="bg-indigo-500 px-8 py-3.5 rounded-xl flex-row items-center"
          >
            <Ionicons name="refresh-outline" size={18} color="white" />
            <Text className="text-white font-semibold text-base ml-2">
              Retry
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Main feed ────────────────────────────────────────────────────────────

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-5 pt-4 pb-3 flex-row items-center justify-between bg-white border-b border-gray-100">
        <Text className="text-2xl font-bold text-gray-900">Community</Text>
        <TouchableOpacity
          onPress={() => setShowNewPost(true)}
          className="bg-indigo-500 flex-row items-center px-4 py-2.5 rounded-xl"
        >
          <Ionicons name="add" size={18} color="white" />
          <Text className="text-white font-semibold text-sm ml-1">
            New Post
          </Text>
        </TouchableOpacity>
      </View>

      {/* Feed */}
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderPostCard}
        contentContainerStyle={{ paddingTop: 12, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor="#6366f1"
            colors={["#6366f1"]}
          />
        }
        ListEmptyComponent={
          <View className="items-center py-16 px-6">
            <Ionicons name="chatbubbles-outline" size={48} color="#D1D5DB" />
            <Text className="text-gray-400 text-base mt-4 text-center">
              No posts yet. Be the first to share!
            </Text>
          </View>
        }
      />

      {/* ── Create Post Modal ─────────────────────────────────────────────── */}
      <Modal visible={showNewPost} animationType="slide" transparent>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <View className="flex-1 bg-black/50 justify-end">
            <View className="bg-white rounded-t-3xl px-5 pt-5 pb-10">
              {/* Modal header */}
              <View className="flex-row items-center justify-between mb-5">
                <Text className="text-xl font-bold text-gray-900">
                  New Post
                </Text>
                <TouchableOpacity
                  onPress={resetAndCloseModal}
                  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                >
                  <Ionicons name="close-circle" size={28} color="#9CA3AF" />
                </TouchableOpacity>
              </View>

              {/* Category selector */}
              <Text className="text-sm font-semibold text-gray-700 mb-2">
                Category
              </Text>
              <View className="flex-row flex-wrap mb-4 gap-2">
                {CATEGORIES.map((cat) => {
                  const isSelected = newCategory === cat;
                  const catKey = cat.toLowerCase();
                  const catColor =
                    CATEGORY_COLORS[catKey] || CATEGORY_COLORS.general;
                  return (
                    <TouchableOpacity
                      key={cat}
                      onPress={() => setNewCategory(cat)}
                      className="rounded-full px-4 py-2"
                      style={{
                        backgroundColor: isSelected
                          ? catColor.bg
                          : "#F3F4F6",
                        borderWidth: isSelected ? 1.5 : 1,
                        borderColor: isSelected ? catColor.text : "#E5E7EB",
                      }}
                    >
                      <Text
                        className="text-sm font-medium"
                        style={{
                          color: isSelected ? catColor.text : "#6B7280",
                        }}
                      >
                        {cat}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Title input */}
              <TextInput
                value={newTitle}
                onChangeText={setNewTitle}
                placeholder="Post title"
                placeholderTextColor="#9CA3AF"
                maxLength={200}
                className="border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-base mb-3 bg-gray-50"
              />

              {/* Body input */}
              <TextInput
                value={newBody}
                onChangeText={setNewBody}
                placeholder="What's on your mind?"
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                maxLength={5000}
                className="border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm mb-5 bg-gray-50"
                style={{ minHeight: 140 }}
              />

              {/* Submit button */}
              <TouchableOpacity
                onPress={handleCreatePost}
                disabled={
                  isSubmitting || !newTitle.trim() || !newBody.trim()
                }
                className="bg-indigo-500 py-4 rounded-xl items-center"
                style={{
                  opacity:
                    isSubmitting || !newTitle.trim() || !newBody.trim()
                      ? 0.5
                      : 1,
                }}
              >
                {isSubmitting ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-white font-bold text-base">
                    Post to Community
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}
