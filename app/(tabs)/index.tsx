import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { DailyCard } from "../../components/DailyCard";
import { useChildStore } from "../../store/childStore";
import { DailyCard as DailyCardType } from "../../types";
import { Colors, Radius, Shadow } from "../../constants/theme";

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

const QUICK_ACTIONS = [
  { icon: "compass-outline" as const, label: "Resources", route: "/(tabs)/navigator" },
  { icon: "people-outline" as const, label: "Community", route: "/(tabs)/community" },
  { icon: "sparkles-outline" as const, label: "Ask AI", route: "/(tabs)/assistant" },
];

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
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 28,
            paddingBottom: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 22, fontWeight: "700", color: Colors.text }}>
              {greeting}
            </Text>
            {streak > 0 && (
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginTop: 4 }}>
                <Text style={{ fontSize: 16 }}>🔥</Text>
                <Text style={{ fontSize: 13, color: Colors.textSecondary }}>
                  {t("home.streak", { count: streak })}
                </Text>
              </View>
            )}
          </View>

          {/* Crisis button */}
          <TouchableOpacity
            onPress={() => router.push("/crisis")}
            style={{
              backgroundColor: Colors.dangerLight,
              borderWidth: 1,
              borderColor: "#FCA5A5",
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderRadius: Radius.lg,
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Ionicons name="alert-circle-outline" size={15} color={Colors.danger} />
            <Text style={{ color: Colors.danger, fontSize: 12, fontWeight: "600" }}>
              {t("home.crisis")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 24,
            gap: 10,
            marginBottom: 24,
          }}
        >
          {QUICK_ACTIONS.map((action) => (
            <TouchableOpacity
              key={action.label}
              onPress={() => router.push(action.route as Parameters<typeof router.push>[0])}
              style={{
                flex: 1,
                backgroundColor: Colors.surface,
                borderRadius: Radius.lg,
                paddingVertical: 14,
                alignItems: "center",
                gap: 6,
                ...Shadow.card,
              }}
            >
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: Radius.md,
                  backgroundColor: Colors.primaryLight,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name={action.icon} size={18} color={Colors.primary} />
              </View>
              <Text style={{ fontSize: 11, fontWeight: "600", color: Colors.textSecondary }}>
                {action.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Daily Card */}
        <View style={{ paddingHorizontal: 24, paddingBottom: 32 }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "700",
              color: Colors.textSecondary,
              textTransform: "uppercase",
              letterSpacing: 0.8,
              marginBottom: 12,
            }}
          >
            Today's Skill
          </Text>
          <DailyCard card={PLACEHOLDER_CARD} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
