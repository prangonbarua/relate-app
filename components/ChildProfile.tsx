import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { ChildProfile as ChildProfileType } from "../types";

interface ChildProfileProps {
  profile: ChildProfileType;
  compact?: boolean;
}

export function ChildProfile({ profile, compact = false }: ChildProfileProps) {
  const { t } = useTranslation();

  if (compact) {
    return (
      <View className="flex-row items-center gap-3 bg-indigo-50 rounded-2xl px-4 py-3">
        <View className="w-10 h-10 rounded-full bg-indigo-200 items-center justify-center">
          <Text className="text-indigo-700 font-bold text-base">
            {profile.name ? profile.name[0].toUpperCase() : "?"}
          </Text>
        </View>
        <View>
          <Text className="font-semibold text-gray-900">{profile.name}</Text>
          <Text className="text-xs text-gray-500">
            Age {profile.age} · {t(`onboarding.profile.communication.${profile.communicationLevel}`)}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="bg-white rounded-2xl border border-gray-100 p-5">
      {/* Avatar + name */}
      <View className="flex-row items-center gap-4 mb-5">
        <View className="w-16 h-16 rounded-full bg-indigo-100 items-center justify-center">
          <Text className="text-indigo-600 font-bold text-2xl">
            {profile.name ? profile.name[0].toUpperCase() : "?"}
          </Text>
        </View>
        <View>
          <Text className="text-xl font-bold text-gray-900">
            {profile.name || "Your Child"}
          </Text>
          <Text className="text-sm text-gray-500">Age {profile.age}</Text>
        </View>
      </View>

      {/* Communication level */}
      <View className="mb-4">
        <Text className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
          {t("onboarding.profile.communication.label")}
        </Text>
        <View className="bg-indigo-50 px-3 py-2 rounded-xl self-start">
          <Text className="text-indigo-700 text-sm font-medium">
            {t(`onboarding.profile.communication.${profile.communicationLevel}`)}
          </Text>
        </View>
      </View>

      {/* Triggers */}
      {profile.triggers.length > 0 && (
        <View className="mb-4">
          <Text className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            {t("onboarding.profile.triggers")}
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {profile.triggers.map((trigger, i) => (
              <View key={i} className="bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                <Text className="text-red-600 text-xs">{trigger}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Loves */}
      {profile.loves.length > 0 && (
        <View>
          <Text className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            {t("onboarding.profile.loves")}
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {profile.loves.map((love, i) => (
              <View key={i} className="bg-green-50 border border-green-100 px-3 py-1 rounded-full flex-row items-center gap-1">
                <Ionicons name="heart-outline" size={10} color="#16A34A" />
                <Text className="text-green-700 text-xs">{love}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
