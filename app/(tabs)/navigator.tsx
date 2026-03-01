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

interface CategoryConfig {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
  lightBg: string;
}

const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  education:           { icon: "school-outline",           color: "#10B981", bg: "#059669", lightBg: "#D1FAE5" },
  stateservices:       { icon: "business-outline",         color: "#F59E0B", bg: "#D97706", lightBg: "#FEF3C7" },
  insurancefunding:    { icon: "shield-checkmark-outline", color: "#6366f1", bg: "#4F46E5", lightBg: "#EEF2FF" },
  therapies:           { icon: "medkit-outline",           color: "#8B5CF6", bg: "#7C3AED", lightBg: "#EDE9FE" },
  immigration:         { icon: "people-outline",           color: "#0EA5E9", bg: "#0284C7", lightBg: "#E0F2FE" },
  federalprograms:     { icon: "flag-outline",             color: "#DC2626", bg: "#DC2626", lightBg: "#FEE2E2" },
  crisissupport:       { icon: "alert-circle-outline",     color: "#EA580C", bg: "#EA580C", lightBg: "#FFF7ED" },
  skillstoteachathome: { icon: "bulb-outline",             color: "#F97316", bg: "#EA580C", lightBg: "#FFF7ED" },
  legalrights:         { icon: "document-text-outline",    color: "#0D9488", bg: "#0D9488", lightBg: "#CCFBF1" },
  familysupport:       { icon: "heart-outline",            color: "#EC4899", bg: "#DB2777", lightBg: "#FCE7F3" },
  multilingualresources: { icon: "language-outline",       color: "#6366f1", bg: "#4F46E5", lightBg: "#EEF2FF" },
};

const DEFAULT_CONFIG: CategoryConfig = {
  icon: "folder-outline",
  color: "#6B7280",
  bg: "#4B5563",
  lightBg: "#F3F4F6",
};

interface ResourceCategory {
  key: string;
  displayName: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
  lightBg: string;
  count: number;
}

export default function NavigatorScreen() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<ResourceCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchCategories() {
      try {
        const data = await api<{ resources: Record<string, Resource[]> }>(
          "/api/resources"
        );
        if (!cancelled) {
          const mapped: ResourceCategory[] = Object.entries(
            data.resources
          ).map(([categoryName, items]) => {
            const key = categoryName.toLowerCase().replace(/[\s&\-]/g, "");
            const config = CATEGORY_CONFIG[key] ?? DEFAULT_CONFIG;
            return {
              key,
              displayName: categoryName,
              ...config,
              count: items.length,
            };
          });
          setCategories(mapped);
        }
      } catch {
        if (!cancelled) {
          setCategories([]);
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

  const handleCategoryPress = (cat: ResourceCategory) => {
    router.push({
      pathname: "/resource-category/[name]",
      params: { name: cat.displayName },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ paddingHorizontal: 24, paddingTop: 28, paddingBottom: 20 }}>
          <Text style={{ fontSize: 26, fontWeight: "700", color: Colors.text, marginBottom: 4 }}>
            {t("navigator.title")}
          </Text>
          <Text style={{ fontSize: 14, color: Colors.textSecondary }}>
            {t("navigator.subtitle")}
          </Text>
        </View>

        {/* Category Grid */}
        <View style={{ paddingHorizontal: 20, paddingBottom: 16 }}>
          {isLoading ? (
            <View style={{ alignItems: "center", paddingVertical: 64 }}>
              <ActivityIndicator size="large" color={Colors.primary} />
              <Text style={{ color: Colors.textMuted, fontSize: 13, marginTop: 12 }}>
                {t("common.loading")}
              </Text>
            </View>
          ) : categories.length === 0 ? (
            <View style={{ alignItems: "center", paddingVertical: 64 }}>
              <Ionicons name="folder-open-outline" size={48} color={Colors.textMuted} />
              <Text style={{ color: Colors.textMuted, fontSize: 13, marginTop: 12 }}>
                No resources available yet
              </Text>
            </View>
          ) : (
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.key}
                  onPress={() => handleCategoryPress(cat)}
                  activeOpacity={0.8}
                  style={{
                    width: "48%",
                    marginBottom: 14,
                    borderRadius: Radius.xl,
                    backgroundColor: cat.lightBg,
                    overflow: "hidden",
                    ...Shadow.soft,
                  }}
                >
                  <View style={{ padding: 16, alignItems: "center", minHeight: 140 }}>
                    <View
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 26,
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
                        backgroundColor: cat.bg + "20",
                      }}
                    >
                      <Ionicons name={cat.icon} size={26} color={cat.bg} />
                    </View>
                    <Text
                      style={{
                        fontWeight: "700",
                        textAlign: "center",
                        fontSize: 13,
                        color: cat.bg,
                        marginBottom: 4,
                      }}
                      numberOfLines={2}
                    >
                      {cat.displayName}
                    </Text>
                    <Text style={{ fontSize: 11, color: Colors.textSecondary }}>
                      {cat.count} {cat.count === 1 ? "resource" : "resources"}
                    </Text>
                  </View>
                  <View style={{ height: 3, backgroundColor: cat.bg }} />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Disclaimer */}
        <View
          style={{
            marginHorizontal: 24,
            marginBottom: 32,
            padding: 16,
            backgroundColor: "#FEF3C7",
            borderRadius: Radius.xl,
            flexDirection: "row",
            gap: 12,
          }}
        >
          <Ionicons name="information-circle-outline" size={18} color="#D97706" />
          <Text style={{ fontSize: 12, color: "#92400E", flex: 1, lineHeight: 20 }}>
            This is general information only. Laws vary by state. For specific
            advice, consult a special education advocate or attorney.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
