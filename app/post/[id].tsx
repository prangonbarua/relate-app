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
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
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

// ── Component ────────────────────────────────────────────────────────────────

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Vote state
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  // Comment input
  const [commentText, setCommentText] = useState("");
  const [isSendingComment, setIsSendingComment] = useState(false);

  // ── Fetch post + comments ────────────────────────────────────────────────

  const fetchPost = useCallback(async () => {
    if (!id) return;
    try {
      const data = await api<{ post: Post; comments: Comment[] }>(
        `/api/community/posts/${id}`
      );
      setPost(data.post);
      setComments(data.comments);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

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

  // ── Loading state ────────────────────────────────────────────────────────

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#6366f1" />
          <Text className="text-gray-400 text-sm mt-3">Loading post...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // ── Error state ──────────────────────────────────────────────────────────

  if (error || !post) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        {/* Back button */}
        <View className="px-4 pt-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center"
          >
            <Ionicons name="arrow-back" size={24} color="#374151" />
            <Text className="text-gray-700 font-medium text-base ml-1">
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 items-center justify-center px-6">
          <Ionicons name="alert-circle-outline" size={48} color="#D1D5DB" />
          <Text className="text-lg font-bold text-gray-900 mt-4 mb-2">
            Post not found
          </Text>
          <Text className="text-sm text-gray-500 text-center mb-6">
            This post may have been removed or is temporarily unavailable.
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsLoading(true);
              setError(false);
              fetchPost();
            }}
            className="bg-indigo-500 px-8 py-3.5 rounded-xl"
          >
            <Text className="text-white font-semibold text-base">Retry</Text>
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
    <View className="bg-white rounded-xl px-4 py-3.5 mb-2 mx-4 border border-gray-100">
      <View className="flex-row items-center mb-2">
        <View className="w-7 h-7 rounded-full bg-indigo-100 items-center justify-center mr-2">
          <Text className="text-xs font-bold text-indigo-600">
            {item.author_name?.charAt(0)?.toUpperCase() || "?"}
          </Text>
        </View>
        <Text className="text-sm font-semibold text-gray-800">
          {item.author_name}
        </Text>
        <Text className="text-xs text-gray-300 mx-1.5">{"\u00B7"}</Text>
        <Text className="text-xs text-gray-400">
          {formatTimeAgo(item.created_at)}
        </Text>
      </View>
      <Text className="text-sm text-gray-700 leading-5">{item.body}</Text>
    </View>
  );

  // ── Post header (rendered as FlatList header) ────────────────────────────

  const PostHeader = () => (
    <View>
      {/* Post card */}
      <View className="bg-white mx-4 mt-3 rounded-2xl p-5 border border-gray-100"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        {/* Category badge */}
        {post.category && (
          <View
            className="self-start rounded-full px-3 py-1 mb-3"
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
        <Text className="text-xl font-bold text-gray-900 mb-3 leading-7">
          {post.title}
        </Text>

        {/* Full body */}
        <Text className="text-base text-gray-700 leading-6 mb-4">
          {post.body}
        </Text>

        {/* Meta row */}
        <View className="flex-row items-center mb-4">
          <View className="w-6 h-6 rounded-full bg-indigo-100 items-center justify-center mr-2">
            <Text className="text-xs font-bold text-indigo-600">
              {post.author_name?.charAt(0)?.toUpperCase() || "?"}
            </Text>
          </View>
          <Text className="text-sm text-gray-600 font-medium">
            {post.author_name}
          </Text>
          <Text className="text-xs text-gray-300 mx-2">{"\u00B7"}</Text>
          <Text className="text-xs text-gray-400">
            {formatTimeAgo(post.created_at)}
          </Text>
        </View>

        {/* Vote row */}
        <View className="flex-row items-center border-t border-gray-100 pt-3">
          <TouchableOpacity
            onPress={() => handleVote("up")}
            className="flex-row items-center mr-1 px-2 py-1 rounded-lg"
            style={{
              backgroundColor: userVote === "up" ? "#EEF2FF" : "transparent",
            }}
          >
            <Ionicons
              name={userVote === "up" ? "arrow-up" : "arrow-up-outline"}
              size={20}
              color={userVote === "up" ? "#6366F1" : "#9CA3AF"}
            />
          </TouchableOpacity>

          <Text
            className="text-base font-bold mx-1"
            style={{
              color:
                userVote === "up"
                  ? "#6366F1"
                  : userVote === "down"
                  ? "#EF4444"
                  : "#374151",
            }}
          >
            {post.votes}
          </Text>

          <TouchableOpacity
            onPress={() => handleVote("down")}
            className="flex-row items-center ml-1 px-2 py-1 rounded-lg"
            style={{
              backgroundColor: userVote === "down" ? "#FEF2F2" : "transparent",
            }}
          >
            <Ionicons
              name={userVote === "down" ? "arrow-down" : "arrow-down-outline"}
              size={20}
              color={userVote === "down" ? "#EF4444" : "#9CA3AF"}
            />
          </TouchableOpacity>

          <View className="ml-6 flex-row items-center">
            <Ionicons name="chatbubble-outline" size={16} color="#9CA3AF" />
            <Text className="text-sm text-gray-500 ml-1.5">
              {post.comment_count} {post.comment_count === 1 ? "comment" : "comments"}
            </Text>
          </View>
        </View>
      </View>

      {/* Comments section header */}
      <View className="px-5 pt-5 pb-2">
        <Text className="text-base font-bold text-gray-800">
          Comments
        </Text>
      </View>

      {comments.length === 0 && (
        <View className="items-center py-8 px-6">
          <Ionicons name="chatbubble-outline" size={32} color="#D1D5DB" />
          <Text className="text-gray-400 text-sm mt-2 text-center">
            No comments yet. Start the conversation!
          </Text>
        </View>
      )}
    </View>
  );

  // ── Main render ──────────────────────────────────────────────────────────

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        {/* Header bar */}
        <View className="px-4 py-3 flex-row items-center bg-white border-b border-gray-100">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center mr-3"
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Ionicons name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-gray-900 flex-1" numberOfLines={1}>
            Post
          </Text>
        </View>

        {/* Comments list with post as header */}
        <FlatList
          data={comments}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderComment}
          ListHeaderComponent={PostHeader}
          contentContainerStyle={{ paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        />

        {/* Comment input bar */}
        <View className="bg-white border-t border-gray-200 px-4 py-3 flex-row items-end">
          <TextInput
            value={commentText}
            onChangeText={setCommentText}
            placeholder="Write a comment..."
            placeholderTextColor="#9CA3AF"
            multiline
            maxLength={2000}
            className="flex-1 bg-gray-100 rounded-xl px-4 py-2.5 text-sm text-gray-900 mr-3"
            style={{ maxHeight: 100 }}
          />
          <TouchableOpacity
            onPress={handleAddComment}
            disabled={isSendingComment || !commentText.trim()}
            className="w-10 h-10 rounded-full bg-indigo-500 items-center justify-center"
            style={{
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
