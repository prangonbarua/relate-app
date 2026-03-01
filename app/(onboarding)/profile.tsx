import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../../store/userStore";
import { useChildStore } from "../../store/childStore";
import { useAuthStore } from "../../store/authStore";
import { api } from "../../store/apiClient";
import { CommunicationLevel } from "../../types";
import { Colors, Radius } from "../../constants/theme";

const COMMUNICATION_LEVELS: CommunicationLevel[] = [
  "nonverbal",
  "minimal",
  "emerging",
  "conversational",
];

export default function ProfileBuilder() {
  const { t } = useTranslation();
  const completeOnboarding = useUserStore((s) => s.completeOnboarding);
  const existingProfile = useChildStore((s) => s.profile);
  const setProfile = useChildStore((s) => s.setProfile);
  const user = useAuthStore((s) => s.user);

  const [name, setName] = useState(existingProfile?.name || "");
  const [age, setAge] = useState(existingProfile?.age ? String(existingProfile.age) : "");
  const [communicationLevel, setCommunicationLevel] =
    useState<CommunicationLevel>(existingProfile?.communicationLevel || "emerging");
  const [triggers, setTriggers] = useState(existingProfile?.triggers.join(", ") || "");
  const [loves, setLoves] = useState(existingProfile?.loves.join(", ") || "");

  const handleSave = async () => {
    const profileData = {
      name: name.trim(),
      age: parseInt(age) || 0,
      communicationLevel,
      triggers: triggers
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      loves: loves
        .split(",")
        .map((l) => l.trim())
        .filter(Boolean),
    };
    setProfile(profileData);

    // Also save to backend
    try {
      await api("/api/profile", {
        method: "PUT",
        body: JSON.stringify(profileData),
      });
    } catch {
      // Profile saved locally even if backend fails
    }

    completeOnboarding();
    router.replace("/(tabs)");
  };

  const handleSkip = () => {
    completeOnboarding();
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 24, paddingTop: 48 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={20} color={Colors.textSecondary} />
        </TouchableOpacity>

        <Text style={styles.title}>
          {t("onboarding.profile.title")}
        </Text>
        <Text style={styles.subtitle}>
          {t("onboarding.profile.subtitle")}
        </Text>

        {/* Name */}
        <View style={styles.field}>
          <Text style={styles.label}>
            {t("onboarding.profile.name")}
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder={t("onboarding.profile.namePlaceholder")}
            placeholderTextColor={Colors.textMuted}
            style={styles.input}
          />
        </View>

        {/* Age */}
        <View style={styles.field}>
          <Text style={styles.label}>
            {t("onboarding.profile.age")}
          </Text>
          <TextInput
            value={age}
            onChangeText={setAge}
            placeholder={t("onboarding.profile.agePlaceholder")}
            placeholderTextColor={Colors.textMuted}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        {/* Communication Level */}
        <View style={styles.field}>
          <Text style={styles.label}>
            {t("onboarding.profile.communication.label")}
          </Text>
          <View style={styles.chipRow}>
            {COMMUNICATION_LEVELS.map((level) => {
              const selected = communicationLevel === level;
              return (
                <TouchableOpacity
                  key={level}
                  onPress={() => setCommunicationLevel(level)}
                  style={[
                    styles.chip,
                    selected ? styles.chipSelected : styles.chipDefault,
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      { color: selected ? "#FFFFFF" : Colors.textSecondary },
                    ]}
                  >
                    {t(`onboarding.profile.communication.${level}`)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Triggers */}
        <View style={styles.field}>
          <Text style={styles.label}>
            {t("onboarding.profile.triggers")}
          </Text>
          <TextInput
            value={triggers}
            onChangeText={setTriggers}
            placeholder={t("onboarding.profile.triggersPlaceholder")}
            placeholderTextColor={Colors.textMuted}
            multiline
            numberOfLines={3}
            style={[styles.input, { textAlignVertical: "top" }]}
          />
        </View>

        {/* Loves */}
        <View style={{ marginBottom: 32 }}>
          <Text style={styles.label}>
            {t("onboarding.profile.loves")}
          </Text>
          <TextInput
            value={loves}
            onChangeText={setLoves}
            placeholder={t("onboarding.profile.lovesPlaceholder")}
            placeholderTextColor={Colors.textMuted}
            multiline
            numberOfLines={3}
            style={[styles.input, { textAlignVertical: "top" }]}
          />
        </View>

        {/* Buttons */}
        <TouchableOpacity
          onPress={handleSave}
          style={styles.saveButton}
        >
          <Text style={styles.saveText}>
            {t("onboarding.profile.save")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>{t("onboarding.profile.skip")}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  backButton: {
    marginBottom: 24,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: Colors.background,
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
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: Radius.md,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.text,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  chipSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  chipDefault: {
    backgroundColor: Colors.background,
    borderColor: Colors.borderLight,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "500",
  },
  saveButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: Radius.lg,
    alignItems: "center",
    marginBottom: 12,
  },
  saveText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  skipButton: {
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 32,
  },
  skipText: {
    color: Colors.textMuted,
    fontSize: 14,
  },
});
