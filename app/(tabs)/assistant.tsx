import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../../store/apiClient";
import { useUserStore } from "../../store/userStore";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  sources?: { file?: string; heading?: string; title?: string }[];
  created_at?: string;
}

// Strip Qwen3 <think>...</think> reasoning blocks from responses
function cleanAIResponse(text: string): string {
  return text.replace(/<think>[\s\S]*?<\/think>\s*/g, "").trim();
}

const SUGGESTED_PROMPTS = [
  "What are early signs of autism?",
  "How do I request an IEP?",
  "ABA therapy explained",
];

export default function AssistantScreen() {
  const { t } = useTranslation();
  const language = useUserStore((s) => s.language);
  const scrollRef = useRef<ScrollView>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);

  // Fetch chat history on mount
  useEffect(() => {
    let cancelled = false;

    async function fetchHistory() {
      try {
        const data = await api<{ messages: ChatMessage[] }>("/api/chat/history");
        if (!cancelled) {
          setMessages(data.messages.map((m) => ({
            ...m,
            content: m.role === "assistant" ? cleanAIResponse(m.content) : m.content,
          })));
        }
      } catch {
        // Silently fail — start with empty chat
      } finally {
        if (!cancelled) {
          setIsLoadingHistory(false);
        }
      }
    }

    fetchHistory();
    return () => { cancelled = true; };
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const data = await api<{ reply: string; sources: { file?: string; heading?: string }[] }>(
        "/api/chat",
        {
          method: "POST",
          body: JSON.stringify({ message: trimmed, language }),
        }
      );
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: cleanAIResponse(data.reply),
        sources: data.sources,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={90}
      >
        {/* Header */}
        <View className="px-6 pt-6 pb-4 bg-white border-b border-gray-100">
          <Text className="text-xl font-bold text-gray-900">AI Assistant</Text>
          <Text className="text-xs text-gray-400 mt-1">
            Ask questions about autism, therapy, and your rights
          </Text>
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollRef}
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 16 }}
        >
          {isLoadingHistory ? (
            <View className="items-center py-12">
              <ActivityIndicator size="large" color="#6366f1" />
              <Text className="text-gray-400 text-sm mt-3">{t("common.loading")}</Text>
            </View>
          ) : (
            <>
              {/* Suggested prompts (shown when no messages) */}
              {messages.length === 0 && (
                <View className="items-center py-8">
                  <View className="w-16 h-16 rounded-full bg-indigo-50 items-center justify-center mb-4">
                    <Ionicons name="chatbubble-ellipses" size={28} color="#6366f1" />
                  </View>
                  <Text className="text-base font-semibold text-gray-700 mb-1">
                    How can I help?
                  </Text>
                  <Text className="text-xs text-gray-400 mb-6 text-center px-8">
                    I can answer questions about autism, therapies, school rights, and more.
                  </Text>
                  <View className="gap-2 w-full px-2">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <TouchableOpacity
                        key={prompt}
                        onPress={() => handleSuggestedPrompt(prompt)}
                        className="bg-white border border-indigo-100 rounded-2xl px-4 py-3 flex-row items-center gap-2"
                      >
                        <Ionicons name="sparkles-outline" size={14} color="#6366f1" />
                        <Text className="text-sm text-indigo-700 flex-1">{prompt}</Text>
                        <Ionicons name="arrow-forward" size={14} color="#A5B4FC" />
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}

              {/* Chat messages */}
              {messages.map((msg, index) => (
                <View
                  key={index}
                  className={`mb-3 max-w-[85%] ${
                    msg.role === "user" ? "self-end" : "self-start"
                  }`}
                >
                  <View
                    className={`px-4 py-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-indigo-500 rounded-br-md"
                        : "bg-white border border-gray-100 rounded-bl-md"
                    }`}
                  >
                    <Text
                      className={`text-sm leading-6 ${
                        msg.role === "user" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {msg.content}
                    </Text>
                  </View>

                  {/* Source citations for AI messages */}
                  {msg.role === "assistant" && msg.sources && msg.sources.length > 0 && (
                    <View className="mt-2 ml-1 gap-1">
                      {msg.sources.slice(0, 3).map((source, si) => (
                        <View key={si} className="flex-row items-center gap-1.5">
                          <Ionicons name="document-text-outline" size={10} color="#A5B4FC" />
                          <Text className="text-xs text-indigo-400" numberOfLines={1}>
                            {source.heading || source.file || source.title || "Source"}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <View className="self-start mb-3 max-w-[85%]">
                  <View className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 flex-row items-center gap-2">
                    <ActivityIndicator size="small" color="#6366f1" />
                    <Text className="text-xs text-gray-400">Thinking...</Text>
                  </View>
                </View>
              )}
            </>
          )}
        </ScrollView>

        {/* Input bar */}
        <View className="px-4 pb-4 pt-2 bg-white border-t border-gray-100">
          {/* Suggested prompt chips (shown when there are messages) */}
          {messages.length > 0 && !isLoading && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-2"
              contentContainerStyle={{ gap: 8 }}
            >
              {SUGGESTED_PROMPTS.map((prompt) => (
                <TouchableOpacity
                  key={prompt}
                  onPress={() => handleSuggestedPrompt(prompt)}
                  className="bg-indigo-50 px-3 py-1.5 rounded-full"
                >
                  <Text className="text-xs text-indigo-600">{prompt}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          <View className="flex-row items-end gap-2">
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type a message..."
              placeholderTextColor="#9CA3AF"
              multiline
              maxLength={2000}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 text-sm max-h-[100px]"
              onSubmitEditing={() => sendMessage(inputText)}
              blurOnSubmit={false}
            />
            <TouchableOpacity
              onPress={() => sendMessage(inputText)}
              disabled={!inputText.trim() || isLoading}
              className="bg-indigo-500 w-11 h-11 rounded-xl items-center justify-center"
              style={{ opacity: !inputText.trim() || isLoading ? 0.5 : 1 }}
            >
              <Ionicons name="send" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
