import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { api } from "../../store/apiClient";

interface CategoryConfig {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
  lightBg: string;
}

const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  communication: {
    icon: "chatbubbles-outline",
    color: "#6366f1",
    bg: "#4F46E5",
    lightBg: "#EEF2FF",
  },
  social: {
    icon: "people-outline",
    color: "#10B981",
    bg: "#059669",
    lightBg: "#D1FAE5",
  },
  sensorymotor: {
    icon: "body-outline",
    color: "#0EA5E9",
    bg: "#0284C7",
    lightBg: "#E0F2FE",
  },
  dailyliving: {
    icon: "home-outline",
    color: "#F59E0B",
    bg: "#D97706",
    lightBg: "#FEF3C7",
  },
  emotionalselfadvocacy: {
    icon: "heart-outline",
    color: "#EF4444",
    bg: "#DC2626",
    lightBg: "#FEE2E2",
  },
  cognitiveplay: {
    icon: "bulb-outline",
    color: "#F97316",
    bg: "#EA580C",
    lightBg: "#FFF7ED",
  },
};

const DEFAULT_CONFIG: CategoryConfig = {
  icon: "folder-outline",
  color: "#6B7280",
  bg: "#4B5563",
  lightBg: "#F3F4F6",
};

interface SkillCategory {
  key: string;
  displayName: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
  lightBg: string;
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
        const data = await api<{
          categories: { name: string; count: number }[];
        }>("/api/skills/categories");
        if (!cancelled) {
          const mapped: SkillCategory[] = data.categories.map((cat) => {
            const key = cat.name
              .toLowerCase()
              .replace(/[\s&\-]/g, "");
            const config = CATEGORY_CONFIG[key] ?? DEFAULT_CONFIG;
            return {
              key,
              displayName: cat.name,
              ...config,
              count: cat.count,
            };
          });
          setCategories(mapped);
        }
      } catch {
        if (!cancelled) {
          setCategories([
            {
              key: "communication",
              displayName: "Communication",
              ...CATEGORY_CONFIG.communication,
              count: 10,
            },
            {
              key: "social",
              displayName: "Social",
              ...CATEGORY_CONFIG.social,
              count: 8,
            },
            {
              key: "sensorymotor",
              displayName: "Sensory & Motor",
              ...CATEGORY_CONFIG.sensorymotor,
              count: 12,
            },
            {
              key: "dailyliving",
              displayName: "Daily Living",
              ...CATEGORY_CONFIG.dailyliving,
              count: 8,
            },
            {
              key: "emotionalselfadvocacy",
              displayName: "Emotional & Self-Advocacy",
              ...CATEGORY_CONFIG.emotionalselfadvocacy,
              count: 12,
            },
            {
              key: "cognitiveplay",
              displayName: "Cognitive & Play",
              ...CATEGORY_CONFIG.cognitiveplay,
              count: 7,
            },
          ]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchCategories();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleCategoryPress = (cat: SkillCategory) => {
    router.push({
      pathname: "/skill-category/[name]",
      params: { name: cat.displayName },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-10 pb-4">
          <Text className="text-2xl font-bold text-gray-900 mb-1">
            {t("skills.title")}
          </Text>
          <Text className="text-sm text-gray-500">
            {t("skills.subtitle")}
          </Text>
        </View>

        {/* Category Grid */}
        <View className="px-5 pb-8">
          {isLoading ? (
            <View className="items-center py-16">
              <ActivityIndicator size="large" color="#6366f1" />
              <Text className="text-gray-400 text-sm mt-3">
                {t("common.loading")}
              </Text>
            </View>
          ) : (
            <View className="flex-row flex-wrap justify-between">
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.key}
                  onPress={() => handleCategoryPress(cat)}
                  activeOpacity={0.8}
                  className="mb-4 rounded-2xl overflow-hidden"
                  style={{
                    width: "48%",
                    backgroundColor: cat.lightBg,
                  }}
                >
                  <View className="p-4 items-center" style={{ minHeight: 140 }}>
                    {/* Icon Circle */}
                    <View
                      className="w-14 h-14 rounded-full items-center justify-center mb-3"
                      style={{ backgroundColor: cat.bg + "20" }}
                    >
                      <Ionicons name={cat.icon} size={28} color={cat.bg} />
                    </View>

                    {/* Category Name */}
                    <Text
                      className="font-bold text-center text-sm mb-1"
                      style={{ color: cat.bg }}
                      numberOfLines={2}
                    >
                      {cat.displayName}
                    </Text>

                    {/* Skill Count */}
                    <Text className="text-xs text-gray-500">
                      {cat.count} skills
                    </Text>
                  </View>

                  {/* Bottom accent bar */}
                  <View className="h-1" style={{ backgroundColor: cat.bg }} />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
