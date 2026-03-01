import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { DailyCard } from "../../components/DailyCard";
import { useChildStore } from "../../store/childStore";
import { api } from "../../store/apiClient";
import { DailyCard as DailyCardType } from "../../types";

// Fallback card for offline / API failure
const PLACEHOLDER_CARD: DailyCardType = {
  id: "card-001",
  skill: "Joint Attention: Follow the Leader",
  whyItMatters:
    "Joint attention — looking at the same thing together — is the foundation of language and social connection. When you follow your child's lead, you're building the neural pathways for communication.",
  steps: [
    "Watch what your child is focused on right now. Don't redirect — just observe.",
    "Move so you're in their line of sight at eye level. Narrate what they're doing: 'You're spinning the wheel!'",
    "Pause and wait 5 seconds. See if they look at you. If they do, smile and respond warmly.",
    "Repeat 2–3 times, always following their interest rather than yours.",
  ],
  category: "Communication",
  date: new Date().toISOString(),
};

function getTimeOfDay(): "morning" | "afternoon" | "evening" {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
}

export default function HomeScreen() {
  const { t } = useTranslation();
  const profile = useChildStore((s) => s.profile);
  const logs = useChildStore((s) => s.logs);

  const [card, setCard] = useState<DailyCardType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchDailyCard() {
      try {
        const data = await api<{ card: DailyCardType }>("/api/skills/daily");
        if (!cancelled) {
          setCard(data.card);
        }
      } catch {
        // Fall back to placeholder on error
        if (!cancelled) {
          setCard(PLACEHOLDER_CARD);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchDailyCard();
    return () => { cancelled = true; };
  }, []);

  const timeOfDay = getTimeOfDay();
  const streak = logs.filter((l) => l.result !== "skip").length;

  const greeting = profile?.name
    ? t("home.greeting", { timeOfDay: t(`home.timeOfDay.${timeOfDay}`), name: profile.name })
    : t("home.greeting_no_name", { timeOfDay: t(`home.timeOfDay.${timeOfDay}`) });

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-10 pb-6 flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-900">{greeting}</Text>
            {streak > 0 && (
              <View className="flex-row items-center gap-1 mt-1">
                <Text className="text-lg">🔥</Text>
                <Text className="text-sm text-gray-500">
                  {t("home.streak", { count: streak })}
                </Text>
              </View>
            )}
          </View>

          {/* Settings */}
          <TouchableOpacity
            onPress={() => router.push("/settings")}
            className="w-10 h-10 rounded-xl bg-gray-100 items-center justify-center"
          >
            <Ionicons name="settings-outline" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Daily Card */}
        <View className="px-6 pb-8">
          {isLoading ? (
            <View className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 items-center justify-center">
              <ActivityIndicator size="large" color="#6366f1" />
              <Text className="text-gray-400 text-sm mt-3">{t("common.loading")}</Text>
            </View>
          ) : (
            <DailyCard card={card ?? PLACEHOLDER_CARD} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
