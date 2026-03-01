import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../../store/userStore";
import { useChildStore } from "../../store/childStore";
import { CommunicationLevel } from "../../types";

const COMMUNICATION_LEVELS: CommunicationLevel[] = [
  "nonverbal",
  "minimal",
  "emerging",
  "conversational",
];

export default function ProfileBuilder() {
  const { t } = useTranslation();
  const completeOnboarding = useUserStore((s) => s.completeOnboarding);
  const setProfile = useChildStore((s) => s.setProfile);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [communicationLevel, setCommunicationLevel] =
    useState<CommunicationLevel>("emerging");
  const [triggers, setTriggers] = useState("");
  const [loves, setLoves] = useState("");

  const handleSave = () => {
    setProfile({
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
    });
    completeOnboarding();
    router.replace("/(tabs)");
  };

  const handleSkip = () => {
    completeOnboarding();
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-6 pt-12"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="mb-6 w-10 h-10 items-center justify-center rounded-full bg-gray-100"
        >
          <Ionicons name="arrow-back" size={20} color="#374151" />
        </TouchableOpacity>

        <Text className="text-3xl font-bold text-gray-900 mb-2">
          {t("onboarding.profile.title")}
        </Text>
        <Text className="text-base text-gray-500 mb-8">
          {t("onboarding.profile.subtitle")}
        </Text>

        {/* Name */}
        <View className="mb-5">
          <Text className="text-sm font-semibold text-gray-700 mb-2">
            {t("onboarding.profile.name")}
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder={t("onboarding.profile.namePlaceholder")}
            placeholderTextColor="#9CA3AF"
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-base"
          />
        </View>

        {/* Age */}
        <View className="mb-5">
          <Text className="text-sm font-semibold text-gray-700 mb-2">
            {t("onboarding.profile.age")}
          </Text>
          <TextInput
            value={age}
            onChangeText={setAge}
            placeholder={t("onboarding.profile.agePlaceholder")}
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-base"
          />
        </View>

        {/* Communication Level */}
        <View className="mb-5">
          <Text className="text-sm font-semibold text-gray-700 mb-2">
            {t("onboarding.profile.communication.label")}
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {COMMUNICATION_LEVELS.map((level) => (
              <TouchableOpacity
                key={level}
                onPress={() => setCommunicationLevel(level)}
                className={`px-4 py-2 rounded-full border ${
                  communicationLevel === level
                    ? "bg-indigo-500 border-indigo-500"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    communicationLevel === level ? "text-white" : "text-gray-600"
                  }`}
                >
                  {t(`onboarding.profile.communication.${level}`)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Triggers */}
        <View className="mb-5">
          <Text className="text-sm font-semibold text-gray-700 mb-2">
            {t("onboarding.profile.triggers")}
          </Text>
          <TextInput
            value={triggers}
            onChangeText={setTriggers}
            placeholder={t("onboarding.profile.triggersPlaceholder")}
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={3}
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-base"
            style={{ textAlignVertical: "top" }}
          />
        </View>

        {/* Loves */}
        <View className="mb-8">
          <Text className="text-sm font-semibold text-gray-700 mb-2">
            {t("onboarding.profile.loves")}
          </Text>
          <TextInput
            value={loves}
            onChangeText={setLoves}
            placeholder={t("onboarding.profile.lovesPlaceholder")}
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={3}
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-base"
            style={{ textAlignVertical: "top" }}
          />
        </View>

        {/* Buttons */}
        <TouchableOpacity
          onPress={handleSave}
          className="bg-indigo-500 py-4 rounded-2xl items-center mb-3"
        >
          <Text className="text-white font-bold text-base">
            {t("onboarding.profile.save")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSkip} className="py-3 items-center mb-8">
          <Text className="text-gray-400 text-sm">{t("onboarding.profile.skip")}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
