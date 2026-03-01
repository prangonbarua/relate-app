import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Radius, Shadow } from "../../constants/theme";

type CategoryKey = "communication" | "social" | "dailyliving" | "motor";

interface SkillCategory {
  key: CategoryKey;
  icon: keyof typeof Ionicons.glyphMap;
  iconBg: string;
  gradientStart: string;
  gradientEnd: string;
  textColor: string;
  count: number;
}

// Colors taken directly from Figma node 8:3
const CATEGORIES: SkillCategory[] = [
  {
    key: "communication",
    icon: "chatbubble-outline",
    iconBg: "rgba(68,109,255,0.2)",
    gradientStart: "rgba(221,232,255,1)",
    gradientEnd: "rgba(196,216,255,1)",
    textColor: "#2D52CC",
    count: 24,
  },
  {
    key: "social",
    icon: "people-outline",
    iconBg: "rgba(206,26,26,0.2)",
    gradientStart: "rgba(255,245,245,1)",
    gradientEnd: "rgba(255,232,232,1)",
    textColor: "#B84D2A",
    count: 18,
  },
  {
    key: "dailyliving",
    icon: "home-outline",
    iconBg: "rgba(139,92,246,0.2)",
    gradientStart: "rgba(255,252,232,1)",
    gradientEnd: "rgba(255,245,192,1)",
    textColor: "#B59500",
    count: 31,
  },
  {
    key: "motor",
    icon: "fitness-outline",
    iconBg: "rgba(234,179,8,0.2)",
    gradientStart: "rgba(196,225,255,1)",
    gradientEnd: "rgba(168,212,255,1)",
    textColor: "#1A5A8A",
    count: 15,
  },
];

const SUGGESTED = [
  { title: "Making Eye Contact", category: "Communication", time: "5–10 min/day", badge: "Active", badgeBg: "#FFFB44", badgeColor: "#1C1C2E", iconBg: "#DDE8FF" },
  { title: "Asking for Help", category: "Social Skills", time: "3–5 min/day", badge: "New", badgeBg: "#FFF3EE", badgeColor: "#CE1A1A", iconBg: "#FFF3EE" },
  { title: "Following a 2-Step Routine", category: "Daily Living", time: "10 min/day", badge: "Not started", badgeBg: "#F9F6F1", badgeColor: "#6B7280", iconBg: "#F0EBF8" },
];

export default function SkillsScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>

        {/* Header */}
        <View style={{ paddingHorizontal: 24, paddingTop: 28, paddingBottom: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 26, fontWeight: "800", color: Colors.text, letterSpacing: -0.5 }}>
            Teach Skills
          </Text>
          <View style={{ width: 38, height: 38, borderRadius: Radius.md, backgroundColor: Colors.surface, alignItems: "center", justifyContent: "center", ...Shadow.soft }}>
            <Ionicons name="notifications-outline" size={20} color={Colors.text} />
          </View>
        </View>

        {/* Browse Categories */}
        <View style={{ paddingLeft: 24, gap: 12 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: 24 }}>
            <Text style={{ fontSize: 15, fontWeight: "700", color: Colors.text }}>Browse Categories</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, fontWeight: "500", color: Colors.primary }}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* 2×2 grid */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 0 }}>
            {CATEGORIES.map((cat, i) => (
              <TouchableOpacity key={cat.key} style={{ width: "50%", paddingRight: i % 2 === 0 ? 6 : 0, paddingLeft: i % 2 === 1 ? 6 : 0, paddingBottom: 12 }}>
                <LinearGradient
                  colors={[cat.gradientStart, cat.gradientEnd]}
                  start={{ x: 0.13, y: 0.13 }}
                  end={{ x: 1, y: 1 }}
                  style={{ padding: 16, borderRadius: Radius.xl, gap: 8, minHeight: 120 }}
                >
                  <View style={{ width: 40, height: 40, borderRadius: Radius.md, backgroundColor: cat.iconBg, alignItems: "center", justifyContent: "center" }}>
                    <Ionicons name={cat.icon} size={20} color={cat.textColor} />
                  </View>
                  <Text style={{ fontWeight: "700", fontSize: 14, color: cat.textColor }}>{t(`skills.categories.${cat.key}`, cat.key)}</Text>
                  <Text style={{ fontSize: 12, color: cat.textColor, opacity: 0.65 }}>{cat.count} skills</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Suggested */}
        <View style={{ paddingLeft: 24, gap: 12, marginTop: 6 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: 24 }}>
            <Text style={{ fontSize: 15, fontWeight: "700", color: Colors.text }}>Suggested for you</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, fontWeight: "500", color: Colors.primary }}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 10, paddingRight: 24 }}>
            {SUGGESTED.map((skill) => (
              <TouchableOpacity
                key={skill.title}
                style={{ flexDirection: "row", alignItems: "center", gap: 12, backgroundColor: Colors.surface, borderRadius: Radius.lg, padding: 16, ...Shadow.soft }}
              >
                <View style={{ width: 40, height: 40, borderRadius: Radius.md, backgroundColor: skill.iconBg, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Ionicons name="book-outline" size={18} color={Colors.primary} />
                </View>
                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={{ fontSize: 14, fontWeight: "600", color: Colors.text }}>{skill.title}</Text>
                  <Text style={{ fontSize: 12, color: Colors.textMuted }}>{skill.category} · {skill.time}</Text>
                </View>
                <View style={{ paddingHorizontal: 10, paddingVertical: 3, borderRadius: Radius.full, backgroundColor: skill.badgeBg }}>
                  <Text style={{ fontSize: 11, fontWeight: "500", color: skill.badgeColor }}>{skill.badge}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
