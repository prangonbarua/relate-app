import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

interface CrisisStep {
  key: "step1" | "step2" | "step3";
  icon: keyof typeof Ionicons.glyphMap;
}

const STEPS: CrisisStep[] = [
  { key: "step1", icon: "shield-outline" },
  { key: "step2", icon: "volume-mute-outline" },
  { key: "step3", icon: "heart-outline" },
];

export default function CrisisScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex-1 bg-red-600">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-8 pb-6">
          {/* Close button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="self-end w-10 h-10 rounded-full bg-red-500 items-center justify-center mb-8"
          >
            <Ionicons name="close" size={20} color="white" />
          </TouchableOpacity>

          {/* Header */}
          <View className="items-center mb-10">
            <View className="w-20 h-20 rounded-full bg-red-500 items-center justify-center mb-5">
              <Ionicons name="heart" size={36} color="white" />
            </View>
            <Text className="text-white text-2xl font-bold text-center mb-2">
              {t("crisis.title")}
            </Text>
            <Text className="text-red-200 text-base text-center leading-6">
              {t("crisis.subtitle")}
            </Text>
          </View>

          {/* Steps */}
          <View className="gap-4 mb-8">
            {STEPS.map((step, index) => (
              <View
                key={step.key}
                className="bg-red-500 rounded-2xl p-5"
              >
                <View className="flex-row items-center gap-3 mb-3">
                  <View className="w-10 h-10 rounded-xl bg-red-400 items-center justify-center">
                    <Ionicons name={step.icon} size={20} color="white" />
                  </View>
                  <Text className="text-white font-bold text-base flex-1">
                    {t(`crisis.${step.key}.title`)}
                  </Text>
                </View>
                <Text className="text-red-100 text-sm leading-6">
                  {t(`crisis.${step.key}.description`)}
                </Text>
              </View>
            ))}
          </View>

          {/* Support line button */}
          <TouchableOpacity className="bg-white py-4 rounded-2xl items-center mb-4 flex-row justify-center gap-2">
            <Ionicons name="call-outline" size={18} color="#DC2626" />
            <Text className="text-red-600 font-bold text-base">
              {t("crisis.call_support")}
            </Text>
          </TouchableOpacity>

          {/* Close / I'm OK */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="border border-red-400 py-4 rounded-2xl items-center"
          >
            <Text className="text-red-200 font-semibold text-base">
              {t("crisis.close")}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
