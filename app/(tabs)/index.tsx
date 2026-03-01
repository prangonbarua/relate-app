import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { DailyCard } from "../../components/DailyCard";
import { useChildStore } from "../../store/childStore";
import { DailyCard as DailyCardType } from "../../types";

// Placeholder card — will come from API once backend is wired
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

          {/* Crisis button */}
          <TouchableOpacity
            onPress={() => router.push("/crisis")}
            className="bg-red-50 border border-red-200 px-4 py-2 rounded-xl flex-row items-center gap-2"
          >
            <Ionicons name="alert-circle-outline" size={16} color="#DC2626" />
            <Text className="text-red-600 text-xs font-semibold">
              {t("home.crisis")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Daily Card */}
        <View className="px-6 pb-8">
          <DailyCard card={PLACEHOLDER_CARD} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
