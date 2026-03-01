import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../../store/apiClient";

interface Resource {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string;
  steps: string[];
  icon: string;
}

interface NavSection {
  key: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
}

const SECTION_CONFIG: Record<string, { icon: keyof typeof Ionicons.glyphMap; color: string; bg: string }> = {
  "Education":          { icon: "school-outline",            color: "#10B981", bg: "#D1FAE5" },
  "State Services":     { icon: "business-outline",          color: "#F59E0B", bg: "#FEF3C7" },
  "Insurance & Funding":{ icon: "shield-checkmark-outline",  color: "#6366f1", bg: "#EEF2FF" },
  "Therapies":          { icon: "medkit-outline",            color: "#8B5CF6", bg: "#EDE9FE" },
  "Immigration":        { icon: "people-outline",            color: "#0EA5E9", bg: "#E0F2FE" },
  "Federal Programs":   { icon: "flag-outline",              color: "#DC2626", bg: "#FEE2E2" },
  "Therapy Types":      { icon: "fitness-outline",           color: "#7C3AED", bg: "#EDE9FE" },
  "Crisis Support":     { icon: "alert-circle-outline",      color: "#EA580C", bg: "#FFF7ED" },
  "Legal Rights":       { icon: "document-text-outline",     color: "#0D9488", bg: "#CCFBF1" },
  "Family Support":          { icon: "heart-outline",             color: "#EC4899", bg: "#FCE7F3" },
  "Skills to Teach at Home": { icon: "bulb-outline",               color: "#F97316", bg: "#FFF7ED" },
};

const DEFAULT_SECTION_CONFIG = { icon: "folder-outline" as keyof typeof Ionicons.glyphMap, color: "#6B7280", bg: "#F3F4F6" };

const FALLBACK_SECTIONS: NavSection[] = [
  { key: "Education", icon: "school-outline", color: "#10B981", bg: "#D1FAE5" },
  { key: "State Services", icon: "business-outline", color: "#F59E0B", bg: "#FEF3C7" },
  { key: "Insurance & Funding", icon: "shield-checkmark-outline", color: "#6366f1", bg: "#EEF2FF" },
  { key: "Therapies", icon: "medkit-outline", color: "#8B5CF6", bg: "#EDE9FE" },
  { key: "Immigration", icon: "people-outline", color: "#0EA5E9", bg: "#E0F2FE" },
  { key: "Federal Programs", icon: "flag-outline", color: "#DC2626", bg: "#FEE2E2" },
  { key: "Therapy Types", icon: "fitness-outline", color: "#7C3AED", bg: "#EDE9FE" },
  { key: "Crisis Support", icon: "alert-circle-outline", color: "#EA580C", bg: "#FFF7ED" },
  { key: "Legal Rights", icon: "document-text-outline", color: "#0D9488", bg: "#CCFBF1" },
  { key: "Family Support", icon: "heart-outline", color: "#EC4899", bg: "#FCE7F3" },
  { key: "Skills to Teach at Home", icon: "bulb-outline", color: "#F97316", bg: "#FFF7ED" },
];

export default function NavigatorScreen() {
  const { t } = useTranslation();
  const [resources, setResources] = useState<Resource[]>([]);
  const [sections, setSections] = useState<NavSection[]>(FALLBACK_SECTIONS);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchResources() {
      try {
        const data = await api<{ resources: Record<string, Resource[]> }>("/api/resources");
        if (!cancelled) {
          // Flatten grouped resources into a flat array
          const allResources: Resource[] = [];
          const derivedSections: NavSection[] = [];
          for (const [category, items] of Object.entries(data.resources)) {
            allResources.push(...items);
            const config = SECTION_CONFIG[category] ?? DEFAULT_SECTION_CONFIG;
            derivedSections.push({ key: category, ...config });
          }
          setResources(allResources);
          if (derivedSections.length > 0) {
            setSections(derivedSections);
          }
        }
      } catch {
        // Keep fallback sections, empty resources
        if (!cancelled) {
          setResources([]);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchResources();
    return () => { cancelled = true; };
  }, []);

  const getResourcesForSection = (sectionKey: string): Resource[] => {
    return resources.filter((r) => r.category === sectionKey);
  };

  const toggleSection = (key: string) => {
    setExpandedSection((prev) => (prev === key ? null : key));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-10 pb-6">
          <Text className="text-2xl font-bold text-gray-900 mb-1">
            {t("navigator.title")}
          </Text>
          <Text className="text-sm text-gray-500">{t("navigator.subtitle")}</Text>
        </View>

        {/* Sections */}
        <View className="px-6 gap-4 pb-8">
          {isLoading ? (
            <View className="items-center py-12">
              <ActivityIndicator size="large" color="#6366f1" />
              <Text className="text-gray-400 text-sm mt-3">{t("common.loading")}</Text>
            </View>
          ) : (
            sections.map((section) => {
              const sectionResources = getResourcesForSection(section.key);
              const isExpanded = expandedSection === section.key;

              return (
                <View key={section.key}>
                  <TouchableOpacity
                    onPress={() => toggleSection(section.key)}
                    className="p-5 rounded-2xl border border-gray-100 flex-row items-center gap-4"
                  >
                    <View
                      className="w-12 h-12 rounded-xl items-center justify-center"
                      style={{ backgroundColor: section.bg }}
                    >
                      <Ionicons name={section.icon} size={22} color={section.color} />
                    </View>
                    <View className="flex-1">
                      <Text className="font-semibold text-gray-900 text-base">
                        {section.key}
                      </Text>
                      <Text className="text-xs text-gray-400 mt-0.5">
                        {sectionResources.length > 0
                          ? `${sectionResources.length} resource${sectionResources.length !== 1 ? "s" : ""}`
                          : "Tap to explore"}
                      </Text>
                    </View>
                    <Ionicons
                      name={isExpanded ? "chevron-down" : "chevron-forward"}
                      size={18}
                      color="#D1D5DB"
                    />
                  </TouchableOpacity>

                  {/* Expanded resource list */}
                  {isExpanded && sectionResources.length > 0 && (
                    <View className="mt-2 ml-4 gap-3">
                      {sectionResources.map((resource) => (
                        <View
                          key={resource.id}
                          className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                        >
                          <Text className="font-semibold text-gray-900 text-sm mb-1">
                            {resource.title}
                          </Text>
                          <Text className="text-xs text-gray-500 leading-5">
                            {resource.summary}
                          </Text>
                          {resource.steps && resource.steps.length > 0 && (
                            <View className="mt-3 gap-2">
                              {resource.steps.map((step, i) => (
                                <View key={i} className="flex-row gap-2">
                                  <Text className="text-xs text-indigo-500 font-bold">{i + 1}.</Text>
                                  <Text className="text-xs text-gray-600 flex-1 leading-5">{step}</Text>
                                </View>
                              ))}
                            </View>
                          )}
                        </View>
                      ))}
                    </View>
                  )}

                  {isExpanded && sectionResources.length === 0 && (
                    <View className="mt-2 ml-4 p-4 bg-gray-50 rounded-xl">
                      <Text className="text-xs text-gray-400 text-center">
                        No resources available yet
                      </Text>
                    </View>
                  )}
                </View>
              );
            })
          )}
        </View>

        {/* Disclaimer */}
        <View className="mx-6 mb-8 p-4 bg-amber-50 rounded-2xl flex-row gap-3">
          <Ionicons name="information-circle-outline" size={18} color="#D97706" />
          <Text className="text-xs text-amber-700 flex-1 leading-5">
            This is general information only. Laws vary by state. For specific
            advice, consult a special education advocate or attorney.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
