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
import { useTranslation } from "react-i18next";
import { api } from "../../store/apiClient";
import { Colors, Radius, Shadow } from "../../constants/theme";

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
    color: "#5A9AE6",
    bg: "#5A9AE6",
    lightBg: "#EBF3FE",
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
  const { t } = useTranslation();
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
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 20,
          backgroundColor: style.lightBg,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}
        >
          <Ionicons name="arrow-back" size={22} color={style.color} />
          <Text style={{ fontSize: 14, marginLeft: 4, color: style.color }}>
            {t("common.categories")}
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: Radius.full,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
              backgroundColor: style.color + "20",
            }}
          >
            <Ionicons name={style.icon} size={24} color={style.color} />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: Colors.text,
              }}
            >
              {categoryName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Colors.textSecondary,
                marginTop: 2,
              }}
            >
              {t("skills.skill_count", { count: skills.length })}
            </Text>
          </View>
        </View>
      </View>

      {/* Skills List */}
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 20, paddingTop: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {isLoading ? (
          <View style={{ alignItems: "center", paddingVertical: 64 }}>
            <ActivityIndicator size="large" color={style.color} />
            <Text
              style={{
                color: Colors.textMuted,
                fontSize: 14,
                marginTop: 12,
              }}
            >
              {t("skill.loading_skills")}
            </Text>
          </View>
        ) : skills.length === 0 ? (
          <View style={{ alignItems: "center", paddingVertical: 64 }}>
            <Ionicons name="search-outline" size={48} color="#D1D5DB" />
            <Text
              style={{
                color: Colors.textMuted,
                fontSize: 14,
                marginTop: 12,
              }}
            >
              {t("skill.no_skills")}
            </Text>
          </View>
        ) : (
          <View style={{ gap: 12, paddingBottom: 32 }}>
            {skills.map((skill) => (
              <TouchableOpacity
                key={skill.id}
                onPress={() => handleSkillPress(skill)}
                activeOpacity={0.7}
                style={{
                  backgroundColor: Colors.surface,
                  borderRadius: Radius.xl,
                  padding: 16,
                  borderWidth: 1,
                  borderColor: Colors.borderLight,
                  ...Shadow.soft,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                  {/* Category Icon */}
                  <View
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: Radius.lg,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                      marginTop: 2,
                      backgroundColor: style.color + "15",
                    }}
                  >
                    <Ionicons
                      name={style.icon}
                      size={18}
                      color={style.color}
                    />
                  </View>

                  {/* Content */}
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontWeight: "700",
                        color: Colors.text,
                        fontSize: 14,
                        marginBottom: 4,
                      }}
                    >
                      {skill.skill}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: Colors.textSecondary,
                        lineHeight: 20,
                      }}
                    >
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
