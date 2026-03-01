import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../../store/apiClient";

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

export default function CommunityScreen() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      const data = await api<{ posts: Post[] }>("/api/community/posts");
      setPosts(data.posts);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleVote = async (postId: number, direction: "up" | "down") => {
    try {
      const data = await api<{ votes: number }>(`/api/community/posts/${postId}/vote`, {
        method: "POST",
        body: JSON.stringify({ direction }),
      });
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, votes: data.votes } : p))
      );
    } catch {
      // Silently fail on vote errors
    }
  };

  const handleCreatePost = async () => {
    if (!newTitle.trim() || !newBody.trim()) return;
    setIsSubmitting(true);
    try {
      const data = await api<{ post: Post }>("/api/community/posts", {
        method: "POST",
        body: JSON.stringify({ title: newTitle.trim(), body: newBody.trim(), category: "general" }),
      });
      setPosts((prev) => [data.post, ...prev]);
      setNewTitle("");
      setNewBody("");
      setShowNewPost(false);
    } catch {
      // Silently fail
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTimeAgo = (dateStr: string): string => {
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
  };

  // If loading or error with no posts, show appropriate state
  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 px-6 pt-10">
          <Text className="text-2xl font-bold text-gray-900 mb-1">
            {t("community.title")}
          </Text>
          <Text className="text-sm text-gray-500 mb-10">
            {t("community.subtitle")}
          </Text>
          <View className="flex-1 items-center justify-center pb-20">
            <ActivityIndicator size="large" color="#6366f1" />
            <Text className="text-gray-400 text-sm mt-3">{t("common.loading")}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // Fallback to original waitlist UI if we have no posts and there was an error
  if (error && posts.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 px-6 pt-10">
          <Text className="text-2xl font-bold text-gray-900 mb-1">
            {t("community.title")}
          </Text>
          <Text className="text-sm text-gray-500 mb-10">
            {t("community.subtitle")}
          </Text>

          <View className="flex-1 items-center justify-center pb-20">
            <View className="w-28 h-28 rounded-full bg-indigo-50 items-center justify-center mb-6">
              <Ionicons name="people" size={52} color="#6366f1" />
            </View>

            <Text className="text-xl font-bold text-gray-900 mb-2 text-center">
              {t("community.coming_soon")}
            </Text>
            <Text className="text-sm text-gray-500 text-center leading-6 max-w-xs mb-8">
              We're building a safe, moderated space for immigrant parents of
              autistic children to connect and support each other.
            </Text>

            <TouchableOpacity
              onPress={fetchPosts}
              className="bg-indigo-500 px-8 py-4 rounded-2xl flex-row items-center gap-2"
            >
              <Ionicons name="refresh-outline" size={18} color="white" />
              <Text className="text-white font-bold text-base">
                {t("common.retry")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header */}
        <View className="px-6 pt-10 pb-4 flex-row items-center justify-between">
          <View>
            <Text className="text-2xl font-bold text-gray-900 mb-1">
              {t("community.title")}
            </Text>
            <Text className="text-sm text-gray-500">
              {t("community.subtitle")}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setShowNewPost(true)}
            className="bg-indigo-500 w-11 h-11 rounded-xl items-center justify-center"
          >
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Posts Feed */}
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 gap-3 pb-8">
            {posts.map((post) => (
              <View
                key={post.id}
                className="bg-white border border-gray-100 rounded-2xl p-4 flex-row gap-3"
              >
                {/* Vote column */}
                <View className="items-center gap-1">
                  <TouchableOpacity onPress={() => handleVote(post.id, "up")}>
                    <Ionicons name="chevron-up" size={20} color="#6366f1" />
                  </TouchableOpacity>
                  <Text className="text-sm font-bold text-gray-700">{post.votes}</Text>
                  <TouchableOpacity onPress={() => handleVote(post.id, "down")}>
                    <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
                  </TouchableOpacity>
                </View>

                {/* Content */}
                <View className="flex-1">
                  <Text className="font-bold text-gray-900 text-sm mb-1">
                    {post.title}
                  </Text>
                  <Text className="text-xs text-gray-500 leading-5 mb-2" numberOfLines={3}>
                    {post.body}
                  </Text>
                  <View className="flex-row items-center gap-3">
                    <Text className="text-xs text-gray-400">{post.author_name}</Text>
                    <Text className="text-xs text-gray-300">·</Text>
                    <Text className="text-xs text-gray-400">{formatTimeAgo(post.created_at)}</Text>
                    <Text className="text-xs text-gray-300">·</Text>
                    <View className="flex-row items-center gap-1">
                      <Ionicons name="chatbubble-outline" size={12} color="#9CA3AF" />
                      <Text className="text-xs text-gray-400">{post.comment_count}</Text>
                    </View>
                    {post.category && (
                      <>
                        <Text className="text-xs text-gray-300">·</Text>
                        <View className="bg-indigo-50 px-2 py-0.5 rounded-full">
                          <Text className="text-xs text-indigo-600">{post.category}</Text>
                        </View>
                      </>
                    )}
                  </View>
                </View>
              </View>
            ))}

            {posts.length === 0 && (
              <View className="items-center py-12">
                <Ionicons name="chatbubbles-outline" size={36} color="#D1D5DB" />
                <Text className="text-gray-400 text-sm mt-3">No posts yet. Be the first!</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>

      {/* New Post Modal */}
      <Modal visible={showNewPost} animationType="slide" transparent>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <View className="flex-1 bg-black/40 justify-end">
            <View className="bg-white rounded-t-3xl px-6 pt-6 pb-10">
              {/* Modal header */}
              <View className="flex-row items-center justify-between mb-6">
                <Text className="text-lg font-bold text-gray-900">New Post</Text>
                <TouchableOpacity onPress={() => setShowNewPost(false)}>
                  <Ionicons name="close" size={24} color="#9CA3AF" />
                </TouchableOpacity>
              </View>

              {/* Title input */}
              <TextInput
                value={newTitle}
                onChangeText={setNewTitle}
                placeholder="Title"
                placeholderTextColor="#9CA3AF"
                className="border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-base mb-3"
              />

              {/* Body input */}
              <TextInput
                value={newBody}
                onChangeText={setNewBody}
                placeholder="What's on your mind?"
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={5}
                textAlignVertical="top"
                className="border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm mb-4 min-h-[120px]"
              />

              {/* Submit button */}
              <TouchableOpacity
                onPress={handleCreatePost}
                disabled={isSubmitting || !newTitle.trim() || !newBody.trim()}
                className="bg-indigo-500 py-4 rounded-2xl items-center"
                style={{ opacity: isSubmitting || !newTitle.trim() || !newBody.trim() ? 0.5 : 1 }}
              >
                {isSubmitting ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-white font-bold text-base">Post</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}
