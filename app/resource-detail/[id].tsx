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
    color: "#4F46E5",
    bg: "#4F46E5",
    lightBg: "#EEF2FF",
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

export default function ResourceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const resourceId = id ?? "";

  const [resource, setResource] = useState<Resource | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchResource() {
      try {
        const data = await api<{ resource: Resource }>(
          `/api/resources/${encodeURIComponent(resourceId)}`
        );
        if (!cancelled) {
          setResource(data.resource);
        }
      } catch {
        if (!cancelled) {
          setResource(null);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    if (resourceId) {
      fetchResource();
    }

    return () => {
      cancelled = true;
    };
  }, [resourceId]);

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
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text
          style={{
            color: Colors.textMuted,
            fontSize: 14,
            marginTop: 12,
          }}
        >
          Loading resource...
        </Text>
      </SafeAreaView>
    );
  }

  if (!resource) {
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
          Resource not found
        </Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 16 }}>
          <Text
            style={{
              color: Colors.primary,
              fontWeight: "600",
            }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const style = getCategoryStyle(resource.category);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header with back button */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: 24,
            backgroundColor: style.lightBg,
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
            <Ionicons name="arrow-back" size={22} color={style.color} />
            <Text style={{ fontSize: 14, marginLeft: 4, color: style.color }}>
              Back
            </Text>
          </TouchableOpacity>

          {/* Resource Title */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: Colors.text,
              marginBottom: 12,
            }}
          >
            {resource.title}
          </Text>

          {/* Category Badge */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: Radius.full,
                backgroundColor: style.color + "18",
              }}
            >
              <Ionicons name={style.icon} size={14} color={style.color} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  marginLeft: 6,
                  color: style.color,
                }}
              >
                {resource.category}
              </Text>
            </View>
          </View>
        </View>

        {/* Summary Section */}
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
              name="information-circle-outline"
              size={20}
              color={style.color}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginLeft: 8,
                color: style.color,
              }}
            >
              Summary
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.surface,
              borderRadius: Radius.xl,
              padding: 16,
              borderWidth: 1,
              borderColor: Colors.borderLight,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#374151",
                lineHeight: 24,
              }}
            >
              {resource.summary}
            </Text>
          </View>
        </View>

        {/* Details Section */}
        {resource.details ? (
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 8,
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
                name="document-text-outline"
                size={20}
                color={style.color}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginLeft: 8,
                  color: style.color,
                }}
              >
                Details
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.surface,
                borderRadius: Radius.xl,
                padding: 16,
                borderWidth: 1,
                borderColor: Colors.borderLight,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#374151",
                  lineHeight: 24,
                }}
              >
                {resource.details}
              </Text>
            </View>
          </View>
        ) : null}

        {/* Steps Section */}
        {resource.steps && resource.steps.length > 0 ? (
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 8,
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
              <Ionicons name="list-outline" size={20} color={style.color} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginLeft: 8,
                  color: style.color,
                }}
              >
                Steps
              </Text>
            </View>

            <View style={{ gap: 12 }}>
              {resource.steps.map((step, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: Colors.surface,
                    borderRadius: Radius.xl,
                    padding: 16,
                    borderWidth: 1,
                    borderColor: Colors.borderLight,
                    flexDirection: "row",
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
                      backgroundColor: style.color + "15",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "700",
                        color: style.color,
                      }}
                    >
                      {index + 1}
                    </Text>
                  </View>

                  {/* Step Text */}
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#374151",
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
        ) : null}

        {/* Sources Section */}
        {resource.sources && resource.sources.length > 0 ? (
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
                name="bookmark-outline"
                size={20}
                color={style.color}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginLeft: 8,
                  color: style.color,
                }}
              >
                Sources
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.surface,
                borderRadius: Radius.xl,
                padding: 16,
                borderWidth: 1,
                borderColor: Colors.borderLight,
              }}
            >
              {resource.sources.map((source, index) => (
                <Text
                  key={index}
                  style={{
                    fontSize: 12,
                    color: Colors.textMuted,
                    lineHeight: 20,
                    marginBottom: 4,
                  }}
                >
                  {source}
                </Text>
              ))}
            </View>
          </View>
        ) : (
          <View style={{ paddingBottom: 32 }} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
