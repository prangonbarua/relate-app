import { View, Text, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useUserStore } from "../../store/userStore";
import { useAuthStore } from "../../store/authStore";
import { LANGUAGES } from "../../constants/languages";
import { Language, LanguageCode } from "../../types";
import { Colors, Radius, Shadow } from "../../constants/theme";

export default function LanguageSelection() {
  const { t } = useTranslation();
  const setLanguage = useUserStore((s) => s.setLanguage);
  const currentLanguage = useUserStore((s) => s.language);
  const token = useAuthStore((s) => s.token);

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang.code as LanguageCode);
    i18n.changeLanguage(lang.code);
    // If already logged in (changing language from settings), go back to tabs
    if (token) {
      router.replace("/(tabs)");
    } else {
      router.push("/(onboarding)/auth");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {t("onboarding.language.title")}
        </Text>
        <Text style={styles.subtitle}>
          {t("onboarding.language.subtitle")}
        </Text>

        <FlatList
          data={LANGUAGES}
          keyExtractor={(item) => item.code}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ gap: 12, paddingBottom: 40 }}
          renderItem={({ item }) => {
            const selected = currentLanguage === item.code;
            return (
              <TouchableOpacity
                onPress={() => handleSelectLanguage(item)}
                style={[
                  styles.langCard,
                  selected ? styles.langCardSelected : styles.langCardDefault,
                ]}
              >
                <Text style={{ fontSize: 28 }}>{item.flag}</Text>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      styles.langName,
                      { color: selected ? Colors.primaryDark : Colors.text },
                    ]}
                  >
                    {item.nativeName}
                  </Text>
                  <Text style={styles.langSubName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 32,
  },
  langCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: Radius.lg,
    borderWidth: 2,
  },
  langCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  langCardDefault: {
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  langName: {
    fontWeight: "600",
    fontSize: 14,
  },
  langSubName: {
    fontSize: 12,
    color: Colors.textMuted,
  },
});
