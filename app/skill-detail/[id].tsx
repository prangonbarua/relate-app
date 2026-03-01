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

export default function SkillDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const skillId = id ?? "";

  const [skill, setSkill] = useState<Skill | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchSkill() {
      try {
        // Fetch all skills and find the one matching this id
        const data = await api<{ skills: Skill[] }>("/api/skills");
        if (!cancelled) {
          const found = data.skills.find((s) => s.id === skillId) ?? null;
          setSkill(found);
        }
      } catch {
        if (!cancelled) {
          setSkill(null);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    if (skillId) {
      fetchSkill();
    }

    return () => {
      cancelled = true;
    };
  }, [skillId]);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center">
        <ActivityIndicator size="large" color="#6366f1" />
        <Text className="text-gray-400 text-sm mt-3">Loading skill...</Text>
      </SafeAreaView>
    );
  }

  if (!skill) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center px-6">
        <Ionicons name="alert-circle-outline" size={48} color="#D1D5DB" />
        <Text className="text-gray-400 text-sm mt-3 text-center">
          Skill not found
        </Text>
        <TouchableOpacity onPress={() => router.back()} className="mt-4">
          <Text className="text-indigo-500 font-semibold">Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const style = getCategoryStyle(skill.category);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header with back button */}
        <View
          className="px-5 pt-4 pb-6"
          style={{ backgroundColor: style.lightBg }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center mb-5"
          >
            <Ionicons name="arrow-back" size={22} color={style.color} />
            <Text className="text-sm ml-1" style={{ color: style.color }}>
              Back
            </Text>
          </TouchableOpacity>

          {/* Skill Title */}
          <Text className="text-xl font-bold text-gray-900 mb-3">
            {skill.skill}
          </Text>

          {/* Badges */}
          <View className="flex-row flex-wrap gap-2">
            {/* Category Badge */}
            <View
              className="flex-row items-center px-3 py-1.5 rounded-full"
              style={{ backgroundColor: style.color + "18" }}
            >
              <Ionicons name={style.icon} size={14} color={style.color} />
              <Text
                className="text-xs font-semibold ml-1.5"
                style={{ color: style.color }}
              >
                {skill.category}
              </Text>
            </View>

            {/* Age Range Badge */}
            <View className="flex-row items-center px-3 py-1.5 rounded-full bg-gray-100">
              <Ionicons name="people-outline" size={14} color="#6B7280" />
              <Text className="text-xs font-semibold ml-1.5 text-gray-600">
                Ages {skill.ageRange}
              </Text>
            </View>
          </View>
        </View>

        {/* Why It Matters Section */}
        <View className="px-5 pt-5 pb-4">
          <View className="flex-row items-center mb-3">
            <Ionicons name="heart-circle-outline" size={20} color={style.color} />
            <Text
              className="text-base font-bold ml-2"
              style={{ color: style.color }}
            >
              Why It Matters
            </Text>
          </View>
          <View className="bg-white rounded-2xl p-4 border border-gray-100">
            <Text className="text-sm text-gray-700 leading-6">
              {skill.whyItMatters}
            </Text>
          </View>
        </View>

        {/* Steps Section */}
        <View className="px-5 pt-2 pb-8">
          <View className="flex-row items-center mb-3">
            <Ionicons name="list-outline" size={20} color={style.color} />
            <Text
              className="text-base font-bold ml-2"
              style={{ color: style.color }}
            >
              Steps to Practice
            </Text>
          </View>

          <View className="gap-3">
            {skill.steps.map((step, index) => (
              <View
                key={index}
                className="bg-white rounded-2xl p-4 border border-gray-100 flex-row"
              >
                {/* Step Number */}
                <View
                  className="w-7 h-7 rounded-full items-center justify-center mr-3"
                  style={{ backgroundColor: style.color + "15" }}
                >
                  <Text
                    className="text-xs font-bold"
                    style={{ color: style.color }}
                  >
                    {index + 1}
                  </Text>
                </View>

                {/* Step Text */}
                <Text className="text-sm text-gray-700 leading-6 flex-1">
                  {step}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
