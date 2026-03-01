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

interface Resource {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string;
  steps: string[];
  icon: string;
  sources?: string[];
}

interface CategoryStyle {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
  lightBg: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  education: {
    icon: "school-outline",
    color: "#059669",
    bg: "#059669",
    lightBg: "#D1FAE5",
  },
  stateservices: {
    icon: "business-outline",
    color: "#D97706",
    bg: "#D97706",
    lightBg: "#FEF3C7",
  },
  insurancefunding: {
    icon: "shield-checkmark-outline",
    color: "#5A9AE6",
    bg: "#5A9AE6",
    lightBg: "#EBF3FE",
  },
  therapies: {
    icon: "medkit-outline",
    color: "#7C3AED",
    bg: "#7C3AED",
    lightBg: "#EDE9FE",
  },
  immigration: {
    icon: "people-outline",
    color: "#0284C7",
    bg: "#0284C7",
    lightBg: "#E0F2FE",
  },
  federalprograms: {
    icon: "flag-outline",
    color: "#DC2626",
    bg: "#DC2626",
    lightBg: "#FEE2E2",
  },
  crisissupport: {
    icon: "alert-circle-outline",
    color: "#EA580C",
    bg: "#EA580C",
    lightBg: "#FFF7ED",
  },
  skillstoteachathome: {
    icon: "bulb-outline",
    color: "#EA580C",
    bg: "#EA580C",
    lightBg: "#FFF7ED",
  },
  legalrights: {
    icon: "document-text-outline",
    color: "#0D9488",
    bg: "#0D9488",
    lightBg: "#CCFBF1",
  },
  familysupport: {
    icon: "heart-outline",
    color: "#DB2777",
    bg: "#DB2777",
    lightBg: "#FCE7F3",
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

export default function ResourceCategoryScreen() {
  const { t } = useTranslation();
  const { name } = useLocalSearchParams<{ name: string }>();
  const categoryName = name ?? "";
  const style = getCategoryStyle(categoryName);

  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchResources() {
      try {
        const data = await api<{ category: string; resources: Resource[] }>(
          `/api/resources/category/${encodeURIComponent(categoryName)}`
        );
        if (!cancelled) {
          setResources(data.resources);
        }
      } catch {
        if (!cancelled) {
          setResources([]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    if (categoryName) {
      fetchResources();
    }

    return () => {
      cancelled = true;
    };
  }, [categoryName]);

  const handleResourcePress = (resource: Resource) => {
    router.push({
      pathname: "/resource-detail/[id]",
      params: { id: resource.id },
    });
  };

  const getSummaryPreview = (text: string): string => {
    if (text.length <= 100) return text;
    return text.slice(0, 100).trimEnd() + "...";
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
              {t("resource.count", { count: resources.length })}
            </Text>
          </View>
        </View>
      </View>

      {/* Resources List */}
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
              {t("resource.loading_resources")}
            </Text>
          </View>
        ) : resources.length === 0 ? (
          <View style={{ alignItems: "center", paddingVertical: 64 }}>
            <Ionicons name="search-outline" size={48} color="#D1D5DB" />
            <Text
              style={{
                color: Colors.textMuted,
                fontSize: 14,
                marginTop: 12,
              }}
            >
              {t("resource.no_resources")}
            </Text>
          </View>
        ) : (
          <View style={{ gap: 12, paddingBottom: 32 }}>
            {resources.map((resource) => (
              <TouchableOpacity
                key={resource.id}
                onPress={() => handleResourcePress(resource)}
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
                  {/* Resource Icon */}
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
                      name={
                        (resource.icon as keyof typeof Ionicons.glyphMap) ??
                        style.icon
                      }
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
                      {resource.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: Colors.textSecondary,
                        lineHeight: 20,
                      }}
                    >
                      {getSummaryPreview(resource.summary)}
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
