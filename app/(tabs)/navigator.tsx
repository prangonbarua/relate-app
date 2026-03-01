import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Radius, Shadow } from "../../constants/theme";

interface NavSection {
  key: "insurance" | "school" | "state" | "crisis";
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  bg: string;
}

const SECTIONS: NavSection[] = [
  { key: "insurance", icon: "shield-checkmark-outline", color: "#2E9E8E", bg: "#E8F5F3" },
  { key: "school", icon: "school-outline", color: "#10B981", bg: "#D1FAE5" },
  { key: "state", icon: "business-outline", color: "#F59E0B", bg: "#FEF3C7" },
  { key: "crisis", icon: "alert-circle-outline", color: "#EF4444", bg: "#FEE2E2" },
];

export default function NavigatorScreen() {
  const { t } = useTranslation();

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

        {/* Sections */}
        <View style={{ paddingHorizontal: 24, gap: 14, paddingBottom: 24 }}>
          {SECTIONS.map((section) => (
            <TouchableOpacity
              key={section.key}
              style={{
                padding: 18,
                borderRadius: Radius.xl,
                backgroundColor: Colors.surface,
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                ...Shadow.card,
              }}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: Radius.lg,
                  backgroundColor: section.bg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name={section.icon} size={22} color={section.color} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "600", color: Colors.text, fontSize: 15 }}>
                  {t(`navigator.sections.${section.key}`)}
                </Text>
                <Text style={{ fontSize: 12, color: Colors.textMuted, marginTop: 2 }}>
                  Tap to explore
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Disclaimer */}
        <View
          style={{
            marginHorizontal: 24,
            marginBottom: 32,
            padding: 14,
            backgroundColor: "#FFFBEB",
            borderRadius: Radius.xl,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Ionicons name="information-circle-outline" size={18} color="#D97706" />
          <Text style={{ fontSize: 12, color: "#92400E", flex: 1, lineHeight: 18 }}>
            This is general information only. Laws vary by state. For specific
            advice, consult a special education advocate or attorney.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
