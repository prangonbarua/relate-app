import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";

export default function CommunityScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-10">
        <Text className="text-2xl font-bold text-gray-900 mb-1">
          {t("community.title")}
        </Text>
        <Text className="text-sm text-gray-500 mb-10">
          {t("community.subtitle")}
        </Text>

        {/* Placeholder illustration area */}
        <View className="flex-1 items-center justify-center pb-20">
          <View className="w-28 h-28 rounded-full bg-indigo-50 items-center justify-center mb-6">
            <Ionicons name="people" size={52} color="#6366f1" />
          </View>

          <Text className="text-xl font-bold text-gray-900 mb-2 text-center">
            {t("community.coming_soon")}
          </Text>
          <Text className="text-sm text-gray-500 text-center leading-6 max-w-xs mb-8">
            We're building a safe, moderated space for immigrant parents of
            autistic children to connect and support each other.
          </Text>

          <TouchableOpacity className="bg-indigo-500 px-8 py-4 rounded-2xl flex-row items-center gap-2">
            <Ionicons name="notifications-outline" size={18} color="white" />
            <Text className="text-white font-bold text-base">
              {t("community.join_waitlist")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
