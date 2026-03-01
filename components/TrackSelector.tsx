import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { TRACKS } from "../constants/tracks";
import { UserTrack } from "../types";

interface TrackSelectorProps {
  selectedTrack: UserTrack | null;
  onSelect: (track: UserTrack) => void;
}

const ICON_MAP: Record<string, keyof typeof Ionicons.glyphMap> = {
  search: "search-outline",
  flag: "flag-outline",
  time: "time-outline",
  star: "star-outline",
};

export function TrackSelector({ selectedTrack, onSelect }: TrackSelectorProps) {
  const { t } = useTranslation();

  return (
    <View className="gap-3">
      {TRACKS.map((track) => (
        <TouchableOpacity
          key={track.id}
          onPress={() => onSelect(track.id)}
          className={`p-4 rounded-2xl border-2 flex-row items-center gap-3 ${
            selectedTrack === track.id
              ? "border-indigo-500 bg-indigo-50"
              : "border-gray-100 bg-gray-50"
          }`}
        >
          <View
            className={`w-10 h-10 rounded-xl items-center justify-center ${
              selectedTrack === track.id ? "bg-indigo-500" : "bg-gray-200"
            }`}
          >
            <Ionicons
              name={ICON_MAP[track.icon]}
              size={18}
              color={selectedTrack === track.id ? "white" : "#6B7280"}
            />
          </View>
          <View className="flex-1">
            <Text
              className={`font-semibold text-sm ${
                selectedTrack === track.id ? "text-indigo-700" : "text-gray-900"
              }`}
            >
              {t(track.titleKey)}
            </Text>
            <Text className="text-xs text-gray-500 mt-0.5" numberOfLines={2}>
              {t(track.descriptionKey)}
            </Text>
          </View>
          {selectedTrack === track.id && (
            <Ionicons name="checkmark-circle" size={20} color="#6366f1" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
