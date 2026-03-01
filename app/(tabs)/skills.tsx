import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../../store/apiClient";

interface CategoryConfig {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
}

const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  communication:       { icon: "chatbubbles-outline",  color: "#6366f1", bg: "#EEF2FF" },
  social:              { icon: "people-outline",        color: "#10B981", bg: "#D1FAE5" },
  sensory:             { icon: "hand-left-outline",     color: "#0EA5E9", bg: "#E0F2FE" },
  dailyliving:         { icon: "home-outline",          color: "#F59E0B", bg: "#FEF3C7" },
  motor:               { icon: "walk-outline",          color: "#8B5CF6", bg: "#EDE9FE" },
  behavioremotional:   { icon: "heart-outline",         color: "#EF4444", bg: "#FEE2E2" },
  cognitiveplay:       { icon: "bulb-outline",          color: "#F97316", bg: "#FFF7ED" },
  selfadvocacy:        { icon: "megaphone-outline",     color: "#14B8A6", bg: "#CCFBF1" },
};

const DEFAULT_CONFIG: CategoryConfig = {
  icon: "folder-outline",
  color: "#6B7280",
  bg: "#F3F4F6",
};

interface SkillCategory {
  key: string;
  displayName: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
  count: number;
}

interface Skill {
  id: string;
  skill: string;
  whyItMatters: string;
  steps: string[];
  category: string;
}

export default function SkillsScreen() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [categorySkills, setCategorySkills] = useState<Record<string, Skill[]>>({});
  const [loadingSkills, setLoadingSkills] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCategories() {
      try {
        const data = await api<{ categories: { name: string; count: number }[] }>(
          "/api/skills/categories"
        );
        if (!cancelled) {
          const mapped: SkillCategory[] = data.categories.map((cat) => {
            const key = cat.name.toLowerCase().replace(/[\s-]/g, "");
            const config = CATEGORY_CONFIG[key] ?? DEFAULT_CONFIG;
            return { key, displayName: cat.name, ...config, count: cat.count };
          });
          setCategories(mapped);
        }
      } catch {
        if (!cancelled) {
          setCategories([
            { key: "communication", displayName: "Communication", icon: "chatbubbles-outline", color: "#6366f1", bg: "#EEF2FF", count: 3 },
            { key: "social", displayName: "Social", icon: "people-outline", color: "#10B981", bg: "#D1FAE5", count: 3 },
            { key: "sensory", displayName: "Sensory", icon: "hand-left-outline", color: "#0EA5E9", bg: "#E0F2FE", count: 2 },
            { key: "dailyliving", displayName: "Daily Living", icon: "home-outline", color: "#F59E0B", bg: "#FEF3C7", count: 3 },
            { key: "motor", displayName: "Motor", icon: "walk-outline", color: "#8B5CF6", bg: "#EDE9FE", count: 2 },
          ]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchCategories();
    return () => { cancelled = true; };
  }, []);

  const handleCategoryPress = async (cat: SkillCategory) => {
    if (expandedCategory === cat.key) {
      setExpandedCategory(null);
      return;
    }

    setExpandedCategory(cat.key);

    // Fetch skills for this category if not cached
    if (!categorySkills[cat.displayName]) {
      setLoadingSkills(cat.key);
      try {
        const data = await api<{ skills: Skill[] }>(
          `/api/skills/category/${encodeURIComponent(cat.displayName)}`
        );
        setCategorySkills((prev) => ({ ...prev, [cat.displayName]: data.skills }));
      } catch {
        // silently fail
      } finally {
        setLoadingSkills(null);
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-10 pb-6">
          <Text className="text-2xl font-bold text-gray-900 mb-1">
            {t("skills.title")}
          </Text>
          <Text className="text-sm text-gray-500">{t("skills.subtitle")}</Text>
        </View>

        {/* Categories */}
        <View className="px-6 gap-3 pb-8">
          {isLoading ? (
            <View className="items-center py-12">
              <ActivityIndicator size="large" color="#6366f1" />
              <Text className="text-gray-400 text-sm mt-3">{t("common.loading")}</Text>
            </View>
          ) : (
            categories.map((cat) => {
              const isExpanded = expandedCategory === cat.key;
              const skills = categorySkills[cat.displayName] || [];

              return (
                <View key={cat.key}>
                  <TouchableOpacity
                    onPress={() => handleCategoryPress(cat)}
                    className="p-4 rounded-2xl flex-row items-center gap-4"
                    style={{ backgroundColor: cat.bg }}
                  >
                    <View
                      className="w-11 h-11 rounded-xl items-center justify-center"
                      style={{ backgroundColor: cat.color + "20" }}
                    >
                      <Ionicons name={cat.icon} size={22} color={cat.color} />
                    </View>
                    <View className="flex-1">
                      <Text className="font-bold text-gray-900 text-sm">
                        {cat.displayName}
                      </Text>
                      <Text className="text-xs text-gray-500 mt-0.5">{cat.count} skills</Text>
                    </View>
                    <Ionicons
                      name={isExpanded ? "chevron-down" : "chevron-forward"}
                      size={18}
                      color={cat.color}
                    />
                  </TouchableOpacity>

                  {/* Expanded skills list */}
                  {isExpanded && (
                    <View className="mt-2 ml-4 gap-2">
                      {loadingSkills === cat.key ? (
                        <View className="py-4 items-center">
                          <ActivityIndicator size="small" color={cat.color} />
                        </View>
                      ) : (
                        skills.map((skill) => (
                          <View
                            key={skill.id}
                            className="p-4 bg-white rounded-xl border border-gray-100"
                          >
                            <Text className="font-semibold text-gray-900 text-sm mb-2">
                              {skill.skill}
                            </Text>
                            <Text className="text-xs text-gray-500 leading-5 mb-3">
                              {skill.whyItMatters.slice(0, 150)}...
                            </Text>
                            <View className="gap-1.5">
                              {skill.steps.map((step, i) => (
                                <View key={i} className="flex-row gap-2">
                                  <Text className="text-xs font-bold" style={{ color: cat.color }}>
                                    {i + 1}.
                                  </Text>
                                  <Text className="text-xs text-gray-600 flex-1 leading-5">
                                    {step}
                                  </Text>
                                </View>
                              ))}
                            </View>
                          </View>
                        ))
                      )}
                    </View>
                  )}
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
