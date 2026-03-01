import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../../store/userStore";
import { TRACKS } from "../../constants/tracks";
import { UserTrack } from "../../types";
import { Colors, Radius, Shadow } from "../../constants/theme";

const ICON_MAP: Record<string, keyof typeof Ionicons.glyphMap> = {
  search: "search-outline",
  flag: "flag-outline",
  time: "time-outline",
  star: "star-outline",
};

export default function TrackSelection() {
  const { t } = useTranslation();
  const setTrack = useUserStore((s) => s.setTrack);
  const currentTrack = useUserStore((s) => s.track);

  const handleSelectTrack = (trackId: UserTrack) => {
    setTrack(trackId);
  };

  const handleContinue = () => {
    if (currentTrack) {
      router.push("/(onboarding)/profile");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 24, paddingTop: 48 }} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={20} color={Colors.textSecondary} />
        </TouchableOpacity>

        <Text style={styles.title}>
          {t("onboarding.track.title")}
        </Text>
        <Text style={styles.subtitle}>
          {t("onboarding.track.subtitle")}
        </Text>

        <View style={{ gap: 16, marginBottom: 32 }}>
          {TRACKS.map((track) => {
            const selected = currentTrack === track.id;
            return (
              <TouchableOpacity
                key={track.id}
                onPress={() => handleSelectTrack(track.id)}
                style={[
                  styles.trackCard,
                  selected ? styles.trackCardSelected : styles.trackCardDefault,
                ]}
              >
                <View
                  style={[
                    styles.trackIcon,
                    { backgroundColor: selected ? Colors.primary : Colors.borderLight },
                  ]}
                >
                  <Ionicons
                    name={ICON_MAP[track.icon]}
                    size={22}
                    color={selected ? "#FFFFFF" : Colors.textSecondary}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      styles.trackTitle,
                      { color: selected ? Colors.primaryDark : Colors.text },
                    ]}
                  >
                    {t(track.titleKey)}
                  </Text>
                  <Text style={styles.trackDesc}>
                    {t(track.descriptionKey)}
                  </Text>
                </View>
                {selected && (
                  <Ionicons name="checkmark-circle" size={24} color={Colors.primary} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          onPress={handleContinue}
          disabled={!currentTrack}
          style={[
            styles.continueButton,
            { backgroundColor: currentTrack ? Colors.primary : Colors.borderLight },
          ]}
        >
          <Text
            style={[
              styles.continueText,
              { color: currentTrack ? "#FFFFFF" : Colors.textMuted },
            ]}
          >
            {t("onboarding.track.button")}
          </Text>
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
  trackCard: {
    padding: 20,
    borderRadius: Radius.lg,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  trackCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  trackCardDefault: {
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  trackIcon: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  trackTitle: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 4,
  },
  trackDesc: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  continueButton: {
    paddingVertical: 16,
    borderRadius: Radius.lg,
    alignItems: "center",
    marginBottom: 32,
  },
  continueText: {
    fontWeight: "700",
    fontSize: 16,
  },
});
