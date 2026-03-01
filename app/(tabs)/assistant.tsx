import { useState, useRef, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Radius, Shadow } from "../../constants/theme";
import { streamChat, checkOllamaHealth, Message } from "../../services/ollama";

interface ChatMessage extends Message {
  id: string;
}

const SUGGESTIONS = [
  "What is an IEP and how do I request one?",
  "How do I apply for Regional Center services?",
  "My child won't eat — any tips?",
  "How can I teach my child to communicate?",
];

export default function AssistantScreen() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [ollamaReady, setOllamaReady] = useState<boolean | null>(null);
  const scrollRef = useRef<ScrollView>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    checkOllamaHealth().then(setOllamaReady);
  }, []);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 80);
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming) return;

      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        role: "user",
        content: trimmed,
      };
      const assistantId = (Date.now() + 1).toString();
      const assistantMsg: ChatMessage = {
        id: assistantId,
        role: "assistant",
        content: "",
      };

      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setInput("");
      setIsStreaming(true);
      scrollToBottom();

      const history: Message[] = [...messages, userMsg].map(({ role, content }) => ({
        role,
        content,
      }));

      abortRef.current = new AbortController();

      await streamChat(
        history,
        (chunk) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: m.content + chunk } : m
            )
          );
          scrollToBottom();
        },
        () => setIsStreaming(false),
        (err) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: `⚠️ ${err}` }
                : m
            )
          );
          setIsStreaming(false);
        },
        abortRef.current.signal
      );
    },
    [isStreaming, messages, scrollToBottom]
  );

  const handleStop = () => {
    abortRef.current?.abort();
    setIsStreaming(false);
  };

  const isEmpty = messages.length === 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: 12,
            backgroundColor: Colors.surface,
            borderBottomWidth: 1,
            borderBottomColor: Colors.border,
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: Radius.full,
              backgroundColor: Colors.primaryLight,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="sparkles" size={20} color={Colors.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 17, fontWeight: "700", color: Colors.text }}>
              Relate Assistant
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <View
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 4,
                  backgroundColor:
                    ollamaReady === null
                      ? Colors.textMuted
                      : ollamaReady
                      ? Colors.success
                      : Colors.danger,
                }}
              />
              <Text style={{ fontSize: 12, color: Colors.textSecondary }}>
                {ollamaReady === null
                  ? "Connecting…"
                  : ollamaReady
                  ? "Qwen 2.5 · Local"
                  : "Ollama offline"}
              </Text>
            </View>
          </View>
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollRef}
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 16, paddingBottom: 8 }}
          showsVerticalScrollIndicator={false}
        >
          {isEmpty && (
            <View style={{ alignItems: "center", paddingTop: 32, paddingBottom: 24 }}>
              <View
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: Radius.full,
                  backgroundColor: Colors.primaryLight,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <Ionicons name="sparkles" size={34} color={Colors.primary} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: Colors.text,
                  marginBottom: 8,
                }}
              >
                How can I help?
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.textSecondary,
                  textAlign: "center",
                  lineHeight: 22,
                  maxWidth: 280,
                  marginBottom: 28,
                }}
              >
                Ask me anything about autism, school services, resources, or
                teaching your child new skills.
              </Text>

              {/* Suggestion chips */}
              <View style={{ width: "100%", gap: 10 }}>
                {SUGGESTIONS.map((s) => (
                  <TouchableOpacity
                    key={s}
                    onPress={() => sendMessage(s)}
                    style={{
                      backgroundColor: Colors.surface,
                      borderWidth: 1,
                      borderColor: Colors.border,
                      borderRadius: Radius.lg,
                      padding: 14,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      ...Shadow.card,
                    }}
                  >
                    <Text
                      style={{ fontSize: 14, color: Colors.text, flex: 1, lineHeight: 20 }}
                    >
                      {s}
                    </Text>
                    <Ionicons name="arrow-forward" size={16} color={Colors.textMuted} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {messages.map((msg) => (
            <View
              key={msg.id}
              style={{
                marginBottom: 12,
                alignItems: msg.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              {msg.role === "assistant" && (
                <View
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: Radius.full,
                    backgroundColor: Colors.primaryLight,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 4,
                  }}
                >
                  <Ionicons name="sparkles" size={14} color={Colors.primary} />
                </View>
              )}
              <View
                style={{
                  maxWidth: "82%",
                  backgroundColor:
                    msg.role === "user" ? Colors.primary : Colors.surface,
                  borderRadius: Radius.xl,
                  borderBottomRightRadius: msg.role === "user" ? Radius.sm : Radius.xl,
                  borderBottomLeftRadius: msg.role === "assistant" ? Radius.sm : Radius.xl,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  ...(msg.role === "assistant" ? Shadow.card : {}),
                }}
              >
                {msg.content ? (
                  <Text
                    style={{
                      fontSize: 15,
                      color: msg.role === "user" ? "#fff" : Colors.text,
                      lineHeight: 22,
                    }}
                  >
                    {msg.content}
                  </Text>
                ) : (
                  <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
                    <ActivityIndicator size="small" color={Colors.primary} />
                    <Text style={{ fontSize: 13, color: Colors.textMuted }}>
                      Thinking…
                    </Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input bar */}
        <View
          style={{
            backgroundColor: Colors.surface,
            borderTopWidth: 1,
            borderTopColor: Colors.border,
            paddingHorizontal: 16,
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 10,
          }}
        >
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Ask anything…"
            placeholderTextColor={Colors.textMuted}
            multiline
            maxLength={1000}
            style={{
              flex: 1,
              backgroundColor: Colors.background,
              borderRadius: Radius.xl,
              paddingHorizontal: 16,
              paddingVertical: 10,
              fontSize: 15,
              color: Colors.text,
              maxHeight: 120,
              lineHeight: 22,
            }}
            onSubmitEditing={() => sendMessage(input)}
          />
          <TouchableOpacity
            onPress={isStreaming ? handleStop : () => sendMessage(input)}
            disabled={!isStreaming && !input.trim()}
            style={{
              width: 44,
              height: 44,
              borderRadius: Radius.full,
              backgroundColor:
                isStreaming
                  ? Colors.danger
                  : input.trim()
                  ? Colors.primary
                  : Colors.border,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name={isStreaming ? "stop" : "arrow-up"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
