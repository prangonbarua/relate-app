import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";

type CategoryKey = "communication" | "sensory" | "behavior" | "sleep" | "feeding" | "selfcare";

interface SkillCategory {
  key: CategoryKey;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
  count: number;
}

const CATEGORIES: SkillCategory[] = [
  { key: "communication", icon: "chatbubbles-outline", color: "#6366f1", bg: "#EEF2FF", count: 12 },
  { key: "sensory", icon: "hand-left-outline", color: "#0EA5E9", bg: "#E0F2FE", count: 8 },
  { key: "behavior", icon: "heart-outline", color: "#10B981", bg: "#D1FAE5", count: 10 },
  { key: "sleep", icon: "moon-outline", color: "#8B5CF6", bg: "#EDE9FE", count: 6 },
  { key: "feeding", icon: "nutrition-outline", color: "#F59E0B", bg: "#FEF3C7", count: 7 },
  { key: "selfcare", icon: "sparkles-outline", color: "#EC4899", bg: "#FCE7F3", count: 9 },
];

export default function SkillsScreen() {
  const { t } = useTranslation();

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

        {/* Category Grid */}
        <View className="px-6 flex-row flex-wrap gap-4 pb-8">
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              className="w-[47%] p-5 rounded-2xl"
              style={{ backgroundColor: cat.bg }}
            >
              <View
                className="w-11 h-11 rounded-xl items-center justify-center mb-3"
                style={{ backgroundColor: cat.color + "20" }}
              >
                <Ionicons name={cat.icon} size={22} color={cat.color} />
              </View>
              <Text className="font-bold text-gray-900 text-sm mb-1">
                {t(`skills.categories.${cat.key}`)}
              </Text>
              <Text className="text-xs text-gray-500">{cat.count} skills</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Coming Soon Banner */}
        <View className="mx-6 mb-8 p-4 bg-indigo-50 rounded-2xl flex-row items-center gap-3">
          <Ionicons name="rocket-outline" size={20} color="#6366f1" />
          <Text className="text-sm text-indigo-700 flex-1">
            {t("skills.coming_soon")}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
