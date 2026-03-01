import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../../store/userStore";
import { TRACKS } from "../../constants/tracks";
import { UserTrack } from "../../types";

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
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 pt-12" showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mb-6 w-10 h-10 items-center justify-center rounded-full bg-gray-100"
        >
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>

        <Text className="text-3xl font-bold text-gray-900 mb-2">
          {t("onboarding.track.title")}
        </Text>
        <Text className="text-base text-gray-500 mb-8">
          {t("onboarding.track.subtitle")}
        </Text>

        <View className="gap-4 mb-8">
          {TRACKS.map((track) => (
            <TouchableOpacity
              key={track.id}
              onPress={() => handleSelectTrack(track.id)}
              className={`p-5 rounded-2xl border-2 flex-row items-center gap-4 ${
                currentTrack === track.id
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-100 bg-gray-50"
              }`}
            >
              <View
                className={`w-12 h-12 rounded-xl items-center justify-center ${
                  currentTrack === track.id ? "bg-indigo-500" : "bg-gray-200"
                }`}
              >
                <Ionicons
                  name={ICON_MAP[track.icon]}
                  size={22}
                  color={currentTrack === track.id ? "white" : "#6B7280"}
                />
              </View>
              <View className="flex-1">
                <Text
                  className={`font-bold text-base mb-1 ${
                    currentTrack === track.id ? "text-indigo-700" : "text-gray-900"
                  }`}
                >
                  {t(track.titleKey)}
                </Text>
                <Text className="text-sm text-gray-500 leading-5">
                  {t(track.descriptionKey)}
                </Text>
              </View>
              {currentTrack === track.id && (
                <Ionicons name="checkmark-circle" size={24} color="#6366f1" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={handleContinue}
          disabled={!currentTrack}
          className={`py-4 rounded-2xl items-center mb-8 ${
            currentTrack ? "bg-indigo-500" : "bg-gray-200"
          }`}
        >
          <Text
            className={`font-bold text-base ${
              currentTrack ? "text-white" : "text-gray-400"
            }`}
          >
            {t("onboarding.track.button")}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
