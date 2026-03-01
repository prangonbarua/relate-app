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
  sources?: string[];
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

export default function SkillDetailScreen() {
  const { t } = useTranslation();
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
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.background,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#7FB4F9" />
        <Text
          style={{ color: Colors.textMuted, fontSize: 14, marginTop: 12 }}
        >
          {t("skill.loading")}
        </Text>
      </SafeAreaView>
    );
  }

  if (!skill) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.background,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <Ionicons name="alert-circle-outline" size={48} color="#D1D5DB" />
        <Text
          style={{
            color: Colors.textMuted,
            fontSize: 14,
            marginTop: 12,
            textAlign: "center",
          }}
        >
          {t("skill.not_found")}
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginTop: 16 }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontWeight: "600",
            }}
          >
            {t("common.go_back")}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const catStyle = getCategoryStyle(skill.category);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header with back button */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: 24,
            backgroundColor: catStyle.lightBg,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Ionicons name="arrow-back" size={22} color={catStyle.color} />
            <Text
              style={{ fontSize: 14, marginLeft: 4, color: catStyle.color }}
            >
              {t("common.back")}
            </Text>
          </TouchableOpacity>

          {/* Skill Title */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: Colors.text,
              marginBottom: 12,
            }}
          >
            {skill.skill}
          </Text>

          {/* Badges */}
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}
          >
            {/* Category Badge */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: Radius.full,
                backgroundColor: catStyle.color + "18",
              }}
            >
              <Ionicons
                name={catStyle.icon}
                size={14}
                color={catStyle.color}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  marginLeft: 6,
                  color: catStyle.color,
                }}
              >
                {skill.category}
              </Text>
            </View>

            {/* Age Range Badge */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: Radius.full,
                backgroundColor: Colors.borderLight,
              }}
            >
              <Ionicons name="people-outline" size={14} color="#6B7280" />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  marginLeft: 6,
                  color: Colors.textSecondary,
                }}
              >
                {t("skill.ages", { range: skill.ageRange })}
              </Text>
            </View>
          </View>
        </View>

        {/* Why It Matters Section */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Ionicons
              name="heart-circle-outline"
              size={20}
              color={catStyle.color}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginLeft: 8,
                color: catStyle.color,
              }}
            >
              {t("skill.why_it_matters")}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.surface,
              borderRadius: Radius.xl,
              padding: 16,
              borderWidth: 1,
              borderColor: Colors.borderLight,
              ...Shadow.soft,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: Colors.textSecondary,
                lineHeight: 24,
              }}
            >
              {skill.whyItMatters}
            </Text>
          </View>
        </View>

        {/* Steps Section */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 8,
            paddingBottom: 32,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Ionicons
              name="list-outline"
              size={20}
              color={catStyle.color}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginLeft: 8,
                color: catStyle.color,
              }}
            >
              {t("skill.steps_to_practice")}
            </Text>
          </View>

          <View style={{ gap: 12 }}>
            {skill.steps.map((step, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: Colors.surface,
                  borderRadius: Radius.xl,
                  padding: 16,
                  borderWidth: 1,
                  borderColor: Colors.borderLight,
                  flexDirection: "row",
                  ...Shadow.soft,
                }}
              >
                {/* Step Number */}
                <View
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: Radius.full,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 12,
                    backgroundColor: catStyle.color + "15",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: catStyle.color,
                    }}
                  >
                    {index + 1}
                  </Text>
                </View>

                {/* Step Text */}
                <Text
                  style={{
                    fontSize: 14,
                    color: Colors.textSecondary,
                    lineHeight: 24,
                    flex: 1,
                  }}
                >
                  {step}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sources Section */}
        {skill.sources && skill.sources.length > 0 && (
          <View
            style={{
              paddingHorizontal: 20,
              paddingBottom: 32,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={catStyle.color}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginLeft: 8,
                  color: catStyle.color,
                }}
              >
                {t("common.sources")}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: Colors.surface,
                borderRadius: Radius.xl,
                padding: 16,
                borderWidth: 1,
                borderColor: Colors.borderLight,
                gap: 8,
                ...Shadow.soft,
              }}
            >
              {skill.sources.map((source, index) => (
                <View
                  key={index}
                  style={{ flexDirection: "row", alignItems: "flex-start" }}
                >
                  <Ionicons
                    name="bookmark"
                    size={12}
                    color={Colors.textMuted}
                    style={{ marginTop: 2, marginRight: 8 }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: Colors.textMuted,
                      lineHeight: 18,
                      flex: 1,
                    }}
                  >
                    {source}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
