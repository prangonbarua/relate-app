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
  StyleSheet,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../../store/apiClient";
import { useUserStore } from "../../store/userStore";
import { Colors, Radius, Shadow } from "../../constants/theme";

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

export default function AssistantScreen() {
  const { t } = useTranslation();
  const suggestedPrompts = [
    t("assistant.prompt_1"),
    t("assistant.prompt_2"),
    t("assistant.prompt_3"),
  ];
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
        content: t("assistant.error"),
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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex}
        keyboardVerticalOffset={90}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t("assistant.title")}</Text>
          <Text style={styles.headerSubtitle}>
            {t("assistant.subtitle")}
          </Text>
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollRef}
          style={styles.flex}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {isLoadingHistory ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={Colors.primary} />
              <Text style={styles.loadingText}>{t("common.loading")}</Text>
            </View>
          ) : (
            <>
              {/* Suggested prompts (shown when no messages) */}
              {messages.length === 0 && (
                <View style={styles.emptyState}>
                  <View style={styles.emptyIcon}>
                    <Ionicons name="chatbubble-ellipses" size={28} color={Colors.primary} />
                  </View>
                  <Text style={styles.emptyTitle}>
                    {t("assistant.how_can_i_help")}
                  </Text>
                  <Text style={styles.emptySubtitle}>
                    {t("assistant.intro")}
                  </Text>
                  <View style={styles.promptList}>
                    {suggestedPrompts.map((prompt) => (
                      <TouchableOpacity
                        key={prompt}
                        onPress={() => handleSuggestedPrompt(prompt)}
                        style={styles.promptCard}
                      >
                        <Ionicons name="sparkles-outline" size={14} color={Colors.primary} />
                        <Text numberOfLines={2} style={styles.promptText}>{prompt}</Text>
                        <Ionicons name="arrow-forward" size={14} color={Colors.primaryLight} />
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}

              {/* Chat messages */}
              {messages.map((msg, index) => (
                <View
                  key={index}
                  style={[
                    styles.messageBubbleWrapper,
                    msg.role === "user" ? styles.userBubbleWrapper : styles.assistantBubbleWrapper,
                  ]}
                >
                  <View
                    style={[
                      styles.messageBubble,
                      msg.role === "user" ? styles.userBubble : styles.assistantBubble,
                    ]}
                  >
                    <Text
                      style={[
                        styles.messageText,
                        msg.role === "user" ? styles.userMessageText : styles.assistantMessageText,
                      ]}
                    >
                      {msg.content}
                    </Text>
                  </View>

                  {/* Source citations for AI messages */}
                  {msg.role === "assistant" && msg.sources && msg.sources.length > 0 && (
                    <View style={styles.sourcesContainer}>
                      {msg.sources.slice(0, 3).map((source, si) => (
                        <View key={si} style={styles.sourceRow}>
                          <Ionicons name="document-text-outline" size={10} color={Colors.primary} />
                          <Text style={styles.sourceText} numberOfLines={1}>
                            {source.heading || source.file || source.title || t("assistant.source")}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <View style={[styles.messageBubbleWrapper, styles.assistantBubbleWrapper]}>
                  <View style={[styles.messageBubble, styles.assistantBubble, styles.thinkingBubble]}>
                    <ActivityIndicator size="small" color={Colors.primary} />
                    <Text style={styles.thinkingText}>{t("assistant.thinking")}</Text>
                  </View>
                </View>
              )}
            </>
          )}
        </ScrollView>

        {/* Input bar */}
        <View style={styles.inputBar}>
          {/* Suggested prompt chips (shown when there are messages) */}
          {messages.length > 0 && !isLoading && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.chipScroll}
              contentContainerStyle={styles.chipContainer}
            >
              {suggestedPrompts.map((prompt) => (
                <TouchableOpacity
                  key={prompt}
                  onPress={() => handleSuggestedPrompt(prompt)}
                  style={styles.chip}
                >
                  <Text numberOfLines={1} style={styles.chipText}>{prompt}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          <View style={styles.inputRow}>
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              placeholder={t("assistant.placeholder")}
              placeholderTextColor={Colors.textMuted}
              multiline
              maxLength={2000}
              style={styles.textInput}
              onSubmitEditing={() => sendMessage(inputText)}
              blurOnSubmit={false}
            />
            <TouchableOpacity
              onPress={() => sendMessage(inputText)}
              disabled={!inputText.trim() || isLoading}
              style={[
                styles.sendButton,
                { opacity: !inputText.trim() || isLoading ? 0.5 : 1 },
              ]}
            >
              <Ionicons name="send" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flex: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text,
  },
  headerSubtitle: {
    fontSize: 12,
    color: Colors.textMuted,
    marginTop: 4,
  },
  scrollContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  loadingContainer: {
    alignItems: "center",
    paddingVertical: 48,
  },
  loadingText: {
    color: Colors.textMuted,
    fontSize: 14,
    marginTop: 12,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 32,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 12,
    color: Colors.textMuted,
    marginBottom: 24,
    textAlign: "center",
    paddingHorizontal: 32,
  },
  promptList: {
    gap: 8,
    width: "100%",
    paddingHorizontal: 8,
  },
  promptCard: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.primaryLight,
    borderRadius: Radius.lg,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    ...Shadow.soft,
  },
  promptText: {
    fontSize: 14,
    color: Colors.primary,
    flex: 1,
  },
  messageBubbleWrapper: {
    marginBottom: 12,
    maxWidth: "85%",
  },
  userBubbleWrapper: {
    alignSelf: "flex-end",
  },
  assistantBubbleWrapper: {
    alignSelf: "flex-start",
  },
  messageBubble: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: Radius.lg,
  },
  userBubble: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: Radius.sm,
  },
  assistantBubble: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderBottomLeftRadius: Radius.sm,
    ...Shadow.soft,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 22,
  },
  userMessageText: {
    color: "#FFFFFF",
  },
  assistantMessageText: {
    color: Colors.text,
  },
  sourcesContainer: {
    marginTop: 8,
    marginLeft: 4,
    gap: 4,
  },
  sourceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  sourceText: {
    fontSize: 11,
    color: Colors.primary,
  },
  thinkingBubble: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  thinkingText: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  inputBar: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  chipScroll: {
    marginBottom: 8,
  },
  chipContainer: {
    gap: 8,
  },
  chip: {
    backgroundColor: Colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.full,
  },
  chipText: {
    fontSize: 12,
    color: Colors.primary,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: Radius.lg,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: Colors.text,
    fontSize: 14,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: Colors.primary,
    width: 44,
    height: 44,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
});
