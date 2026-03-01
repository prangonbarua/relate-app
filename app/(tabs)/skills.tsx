import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { api } from "../../store/apiClient";
import { Colors, Radius, Shadow } from "../../constants/theme";

interface CategoryConfig {
  icon: keyof typeof Ionicons.glyphMap;
  gradientBg: string;
  textColor: string;
  iconBg: string;
}

const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  communication:           { icon: "chatbubble-outline", gradientBg: "#DDE8FF", textColor: "#2D52CC", iconBg: "rgba(68,109,255,0.2)" },
  social:                  { icon: "people-outline",     gradientBg: "#FFF5F5", textColor: "#B84D2A", iconBg: "rgba(206,26,26,0.2)" },
  sensorymotor:            { icon: "body-outline",       gradientBg: "#C4E1FF", textColor: "#1A5A8A", iconBg: "rgba(14,165,233,0.2)" },
  dailyliving:             { icon: "home-outline",       gradientBg: "#FFFCE8", textColor: "#B59500", iconBg: "rgba(139,92,246,0.2)" },
  emotionalselfadvocacy:   { icon: "heart-outline",      gradientBg: "#FFF0F0", textColor: "#B91C1C", iconBg: "rgba(239,68,68,0.2)" },
  cognitiveplay:           { icon: "bulb-outline",       gradientBg: "#FFF7ED", textColor: "#C2410C", iconBg: "rgba(249,115,22,0.2)" },
};

const DEFAULT_CONFIG: CategoryConfig = {
  icon: "folder-outline",
  gradientBg: "#F3F4F6",
  textColor: "#6B7280",
  iconBg: "rgba(107,114,128,0.2)",
};

interface SkillCategory {
  key: string;
  displayName: string;
  config: CategoryConfig;
  count: number;
}

export default function SkillsScreen() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchCategories() {
      try {
        const data = await api<{ categories: { name: string; count: number }[] }>(
          "/api/skills/categories"
        );
        if (!cancelled) {
          const mapped: SkillCategory[] = data.categories.map((cat) => {
            const key = cat.name.toLowerCase().replace(/[\s&\-]/g, "");
            const config = CATEGORY_CONFIG[key] ?? DEFAULT_CONFIG;
            return { key, displayName: cat.name, config, count: cat.count };
          });
          setCategories(mapped);
        }
      } catch {
        if (!cancelled) setCategories([]);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchCategories();
    return () => { cancelled = true; };
  }, []);

  const handleCategoryPress = (cat: SkillCategory) => {
    router.push({
      pathname: "/skill-category/[name]",
      params: { name: cat.displayName },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
        {/* Header */}
        <View style={{ paddingHorizontal: 24, paddingTop: 28, paddingBottom: 20 }}>
          <Text style={{ fontSize: 26, fontWeight: "800", color: Colors.text, letterSpacing: -0.5 }}>
            {t("skills.title")}
          </Text>
          <Text style={{ fontSize: 14, color: Colors.textSecondary, marginTop: 4 }}>
            {t("skills.subtitle")}
          </Text>
        </View>

        {/* Category Grid */}
        <View style={{ paddingHorizontal: 20 }}>
          {isLoading ? (
            <View style={{ alignItems: "center", paddingVertical: 64 }}>
              <ActivityIndicator size="large" color={Colors.primary} />
              <Text style={{ color: Colors.textMuted, fontSize: 13, marginTop: 12 }}>
                {t("common.loading")}
              </Text>
            </View>
          ) : (
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {categories.map((cat, i) => (
                <TouchableOpacity
                  key={cat.key}
                  onPress={() => handleCategoryPress(cat)}
                  activeOpacity={0.8}
                  style={{
                    width: "50%",
                    paddingRight: i % 2 === 0 ? 6 : 0,
                    paddingLeft: i % 2 === 1 ? 6 : 0,
                    paddingBottom: 12,
                  }}
                >
                  <View
                    style={{
                      padding: 16,
                      borderRadius: Radius.xl,
                      backgroundColor: cat.config.gradientBg,
                      minHeight: 130,
                      gap: 8,
                      ...Shadow.soft,
                    }}
                  >
                    <View
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: Radius.md,
                        backgroundColor: cat.config.iconBg,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons name={cat.config.icon} size={22} color={cat.config.textColor} />
                    </View>
                    <Text style={{ fontWeight: "700", fontSize: 14, color: cat.config.textColor }}>
                      {cat.displayName}
                    </Text>
                    <Text style={{ fontSize: 12, color: cat.config.textColor, opacity: 0.65 }}>
                      {t("skills.skill_count", { count: cat.count })}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
