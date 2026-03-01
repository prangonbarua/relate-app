import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useChildStore } from "../store/childStore";
import { useUserStore } from "../store/userStore";
import { useAuthStore } from "../store/authStore";
import { LANGUAGES } from "../constants/languages";
import i18n from "../i18n";
import { LanguageCode } from "../types";
import { useTranslation } from "react-i18next";
import { Colors, Radius, Shadow } from "../constants/theme";

export default function SettingsScreen() {
  const profile = useChildStore((s) => s.profile);
  const clearProfile = useChildStore((s) => s.clearProfile);
  const reset = useUserStore((s) => s.reset);
  const language = useUserStore((s) => s.language);
  const setLanguage = useUserStore((s) => s.setLanguage);
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const { t } = useTranslation();
  const [showLanguagePicker, setShowLanguagePicker] = useState(false);

  const handleSelectLanguage = (code: LanguageCode) => {
    setLanguage(code);
    i18n.changeLanguage(code);
    setShowLanguagePicker(false);
  };

  const handleLogout = () => {
    Alert.alert(t("settings.logout_alert_title"), t("settings.logout_alert_message"), [
      { text: t("common.cancel"), style: "cancel" },
      {
        text: t("settings.logout_confirm"),
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.clear();
          clearProfile();
          logout();
          reset();
          router.replace("/");
        },
      },
    ]);
  };

  const handleClearChat = () => {
    Alert.alert(t("settings.clear_chat_alert_title"), t("settings.clear_chat_alert_message"), [
      { text: t("common.cancel"), style: "cancel" },
      {
        text: t("settings.clear_chat_confirm"),
        style: "destructive",
        onPress: () => {
          Alert.alert(t("settings.clear_chat_done_title"), t("settings.clear_chat_done_message"));
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
          <Ionicons name="close" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t("settings.title")}</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Child Profile Section */}
        <View style={styles.sectionHeader}>
          <Text numberOfLines={1} style={styles.sectionLabel}>
            {t("settings.child_profile")}
          </Text>
        </View>

        <View style={styles.card}>
          {profile ? (
            <>
              <View style={styles.cardRow}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarText}>
                    {profile.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.profileName}>{profile.name}</Text>
                  <Text style={styles.profileMeta}>
                    {t("onboarding.profile.age")} {profile.age} · {profile.communicationLevel}
                  </Text>
                </View>
              </View>

              {profile.loves.length > 0 && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{t("settings.loves")}</Text>
                  <Text style={styles.detailValue}>{profile.loves.join(", ")}</Text>
                </View>
              )}

              {profile.triggers.length > 0 && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{t("settings.triggers")}</Text>
                  <Text style={styles.detailValue}>{profile.triggers.join(", ")}</Text>
                </View>
              )}

              <TouchableOpacity
                onPress={() => {
                  router.back();
                  setTimeout(() => router.push("/(onboarding)/profile"), 300);
                }}
                style={styles.editRow}
              >
                <Ionicons name="create-outline" size={16} color={Colors.primary} />
                <Text style={styles.editText}>{t("settings.edit_profile")}</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => {
                router.back();
                setTimeout(() => router.push("/(onboarding)/profile"), 300);
              }}
              style={styles.setupRow}
            >
              <View style={styles.addCircle}>
                <Ionicons name="add" size={20} color={Colors.primary} />
              </View>
              <Text style={styles.editText}>{t("settings.setup_profile")}</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* App Settings */}
        <View style={styles.sectionHeader}>
          <Text numberOfLines={1} style={styles.sectionLabel}>
            {t("settings.section_app")}
          </Text>
        </View>

        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => setShowLanguagePicker(true)}
            style={[styles.cardRow, { borderBottomWidth: 1, borderBottomColor: Colors.background }]}
          >
            <Ionicons name="language-outline" size={20} color={Colors.primary} />
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>{t("settings.language")}</Text>
              <Text style={styles.rowSubtitle}>
                {LANGUAGES.find((l) => l.code === language)?.nativeName ?? language.toUpperCase()}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={Colors.borderLight} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClearChat} style={styles.cardRow}>
            <Ionicons name="chatbubble-outline" size={20} color={Colors.primary} />
            <Text style={[styles.rowTitle, { flex: 1 }]}>{t("settings.clear_chat")}</Text>
            <Ionicons name="chevron-forward" size={16} color={Colors.borderLight} />
          </TouchableOpacity>
        </View>

        {/* Account */}
        <View style={styles.sectionHeader}>
          <Text numberOfLines={1} style={styles.sectionLabel}>
            {t("settings.section_account")}
          </Text>
        </View>

        <View style={[styles.card, { marginBottom: 24 }]}>
          <View style={[styles.cardRow, { borderBottomWidth: 1, borderBottomColor: Colors.background }]}>
            <Ionicons name="person-outline" size={20} color={Colors.primary} />
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>{user?.name || "User"}</Text>
              <Text style={styles.rowSubtitle}>{user?.email || ""}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={handleLogout} style={styles.cardRow}>
            <Ionicons name="log-out-outline" size={20} color={Colors.danger} />
            <Text style={[styles.rowTitle, { flex: 1, color: Colors.danger }]}>{t("settings.logout")}</Text>
          </TouchableOpacity>
        </View>

        {/* App info */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>{t("settings.version")}</Text>
        </View>
      </ScrollView>

      {/* Language picker modal */}
      <Modal
        visible={showLanguagePicker}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowLanguagePicker(false)}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.headerTitle, { flex: 1 }]}>{t("settings.language")}</Text>
            <TouchableOpacity
              onPress={() => setShowLanguagePicker(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color={Colors.text} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={LANGUAGES}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectLanguage(item.code as LanguageCode)}
                style={[styles.cardRow, { borderBottomWidth: 1, borderBottomColor: Colors.background }]}
              >
                <Text style={{ fontSize: 24 }}>{item.flag}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.rowTitle}>{item.nativeName}</Text>
                  <Text style={styles.rowSubtitle}>{item.name}</Text>
                </View>
                {language === item.code && (
                  <Ionicons name="checkmark-circle" size={20} color={Colors.primary} />
                )}
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text,
    flex: 1,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  card: {
    marginHorizontal: 24,
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: "hidden",
  },
  cardRow: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: "700",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
  },
  profileMeta: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  detailRow: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.background,
  },
  detailLabel: {
    fontSize: 12,
    color: Colors.textMuted,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: Colors.text,
  },
  editRow: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.background,
  },
  editText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "500",
  },
  setupRow: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  addCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  rowTitle: {
    fontSize: 14,
    color: Colors.text,
  },
  rowSubtitle: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  changeLink: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    paddingBottom: 32,
  },
  footerText: {
    fontSize: 12,
    color: Colors.textMuted,
  },
});
