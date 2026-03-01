import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";

interface NavSection {
  key: "insurance" | "school" | "state" | "crisis";
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
}

const SECTIONS: NavSection[] = [
  { key: "insurance", icon: "shield-checkmark-outline", color: "#6366f1", bg: "#EEF2FF" },
  { key: "school", icon: "school-outline", color: "#10B981", bg: "#D1FAE5" },
  { key: "state", icon: "business-outline", color: "#F59E0B", bg: "#FEF3C7" },
  { key: "crisis", icon: "alert-circle-outline", color: "#EF4444", bg: "#FEE2E2" },
];

export default function NavigatorScreen() {
  const { t } = useTranslation();

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
          {SECTIONS.map((section) => (
            <TouchableOpacity
              key={section.key}
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
                  {t(`navigator.sections.${section.key}`)}
                </Text>
                <Text className="text-xs text-gray-400 mt-0.5">Tap to explore</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#D1D5DB" />
            </TouchableOpacity>
          ))}
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
