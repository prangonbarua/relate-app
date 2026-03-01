import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Radius, Shadow } from "../../constants/theme";

export default function CommunityScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 28 }}>
        <Text style={{ fontSize: 26, fontWeight: "700", color: Colors.text, marginBottom: 4 }}>
          {t("community.title")}
        </Text>
        <Text style={{ fontSize: 14, color: Colors.textSecondary, marginBottom: 40 }}>
          {t("community.subtitle")}
        </Text>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingBottom: 80 }}>
          <View
            style={{
              width: 112,
              height: 112,
              borderRadius: Radius.full,
              backgroundColor: Colors.primaryLight,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <Ionicons name="people" size={52} color={Colors.primary} />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: Colors.text,
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            {t("community.coming_soon")}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.textSecondary,
              textAlign: "center",
              lineHeight: 22,
              maxWidth: 280,
              marginBottom: 32,
            }}
          >
            We're building a safe, moderated space for immigrant parents of
            autistic children to connect and support each other.
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              paddingHorizontal: 32,
              paddingVertical: 16,
              borderRadius: Radius.xl,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              ...Shadow.card,
            }}
          >
            <Ionicons name="notifications-outline" size={18} color="white" />
            <Text style={{ color: "white", fontWeight: "700", fontSize: 15 }}>
              {t("community.join_waitlist")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
