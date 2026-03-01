import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { api } from "../../store/apiClient";

interface Skill {
  id: string;
  skill: string;
  whyItMatters: string;
  steps: string[];
  category: string;
  ageRange: string;
}

interface CategoryStyle {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
  lightBg: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  communication: {
    icon: "chatbubbles-outline",
    color: "#4F46E5",
    bg: "#4F46E5",
    lightBg: "#EEF2FF",
  },
  social: {
    icon: "people-outline",
    color: "#059669",
    bg: "#059669",
    lightBg: "#D1FAE5",
  },
  sensorymotor: {
    icon: "body-outline",
    color: "#0284C7",
    bg: "#0284C7",
    lightBg: "#E0F2FE",
  },
  dailyliving: {
    icon: "home-outline",
    color: "#D97706",
    bg: "#D97706",
    lightBg: "#FEF3C7",
  },
  emotionalselfadvocacy: {
    icon: "heart-outline",
    color: "#DC2626",
    bg: "#DC2626",
    lightBg: "#FEE2E2",
  },
  cognitiveplay: {
    icon: "bulb-outline",
    color: "#EA580C",
    bg: "#EA580C",
    lightBg: "#FFF7ED",
  },
};

const DEFAULT_STYLE: CategoryStyle = {
  icon: "folder-outline",
  color: "#6B7280",
  bg: "#4B5563",
  lightBg: "#F3F4F6",
};

function getCategoryStyle(categoryName: string): CategoryStyle {
  const key = categoryName.toLowerCase().replace(/[\s&\-]/g, "");
  return CATEGORY_STYLES[key] ?? DEFAULT_STYLE;
}

export default function SkillCategoryScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const categoryName = name ?? "";
  const style = getCategoryStyle(categoryName);

  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchSkills() {
      try {
        const data = await api<{ skills: Skill[] }>(
          `/api/skills/category/${encodeURIComponent(categoryName)}`
        );
        if (!cancelled) {
          setSkills(data.skills);
        }
      } catch {
        if (!cancelled) {
          setSkills([]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    if (categoryName) {
      fetchSkills();
    }

    return () => {
      cancelled = true;
    };
  }, [categoryName]);

  const handleSkillPress = (skill: Skill) => {
    router.push({
      pathname: "/skill-detail/[id]",
      params: { id: skill.id },
    });
  };

  const getDescriptionPreview = (text: string): string => {
    if (text.length <= 80) return text;
    return text.slice(0, 80).trimEnd() + "...";
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View
        className="px-5 pt-4 pb-5"
        style={{ backgroundColor: style.lightBg }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-4"
        >
          <Ionicons name="arrow-back" size={22} color={style.color} />
          <Text className="text-sm ml-1" style={{ color: style.color }}>
            Categories
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center">
          <View
            className="w-12 h-12 rounded-full items-center justify-center mr-3"
            style={{ backgroundColor: style.color + "20" }}
          >
            <Ionicons name={style.icon} size={24} color={style.color} />
          </View>
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-900">
              {categoryName}
            </Text>
            <Text className="text-sm text-gray-500 mt-0.5">
              {skills.length} {skills.length === 1 ? "skill" : "skills"}
            </Text>
          </View>
        </View>
      </View>

      {/* Skills List */}
      <ScrollView className="flex-1 px-5 pt-4" showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <View className="items-center py-16">
            <ActivityIndicator size="large" color={style.color} />
            <Text className="text-gray-400 text-sm mt-3">
              Loading skills...
            </Text>
          </View>
        ) : skills.length === 0 ? (
          <View className="items-center py-16">
            <Ionicons name="search-outline" size={48} color="#D1D5DB" />
            <Text className="text-gray-400 text-sm mt-3">
              No skills available yet
            </Text>
          </View>
        ) : (
          <View className="gap-3 pb-8">
            {skills.map((skill) => (
              <TouchableOpacity
                key={skill.id}
                onPress={() => handleSkillPress(skill)}
                activeOpacity={0.7}
                className="bg-white rounded-2xl p-4 border border-gray-100"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.05,
                  shadowRadius: 3,
                  elevation: 1,
                }}
              >
                <View className="flex-row items-start">
                  {/* Category Icon */}
                  <View
                    className="w-9 h-9 rounded-lg items-center justify-center mr-3 mt-0.5"
                    style={{ backgroundColor: style.color + "15" }}
                  >
                    <Ionicons
                      name={style.icon}
                      size={18}
                      color={style.color}
                    />
                  </View>

                  {/* Content */}
                  <View className="flex-1">
                    <Text className="font-bold text-gray-900 text-sm mb-1">
                      {skill.skill}
                    </Text>
                    <Text className="text-xs text-gray-500 leading-5">
                      {getDescriptionPreview(skill.whyItMatters)}
                    </Text>
                  </View>

                  {/* Chevron */}
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color="#D1D5DB"
                    style={{ marginTop: 4 }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
