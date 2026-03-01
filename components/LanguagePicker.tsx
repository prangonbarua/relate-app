import { View, Text, TouchableOpacity, FlatList, Modal, SafeAreaView } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../i18n";
import { useUserStore } from "../store/userStore";
import { LANGUAGES } from "../constants/languages";
import { Language, LanguageCode } from "../types";

interface LanguagePickerProps {
  onSelect?: (lang: Language) => void;
}

export function LanguagePicker({ onSelect }: LanguagePickerProps) {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const setLanguage = useUserStore((s) => s.setLanguage);
  const currentCode = useUserStore((s) => s.language);
  const current = LANGUAGES.find((l) => l.code === currentCode);

  const handleSelect = (lang: Language) => {
    setLanguage(lang.code as LanguageCode);
    i18n.changeLanguage(lang.code);
    setVisible(false);
    onSelect?.(lang);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className="flex-row items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl"
      >
        <Text className="text-lg">{current?.flag}</Text>
        <Text className="text-sm font-medium text-gray-700">{current?.nativeName}</Text>
        <Ionicons name="chevron-down" size={14} color="#6B7280" />
      </TouchableOpacity>

      <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
        <SafeAreaView className="flex-1 bg-white">
          <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100">
            <Text className="text-lg font-bold text-gray-900">
              {t("onboarding.language.title")}
            </Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Ionicons name="close" size={24} color="#374151" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={LANGUAGES}
            keyExtractor={(item) => item.code}
            contentContainerStyle={{ padding: 16, gap: 8 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                className={`flex-row items-center gap-4 p-4 rounded-xl ${
                  currentCode === item.code ? "bg-indigo-50" : "bg-gray-50"
                }`}
              >
                <Text className="text-2xl">{item.flag}</Text>
                <View className="flex-1">
                  <Text className="font-semibold text-gray-900">{item.nativeName}</Text>
                  <Text className="text-sm text-gray-500">{item.name}</Text>
                </View>
                {currentCode === item.code && (
                  <Ionicons name="checkmark-circle" size={20} color="#7FB4F9" />
                )}
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}
