import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useUserStore } from "../../store/userStore";
import { LANGUAGES } from "../../constants/languages";
import { Language, LanguageCode } from "../../types";

export default function LanguageSelection() {
  const { t } = useTranslation();
  const setLanguage = useUserStore((s) => s.setLanguage);
  const currentLanguage = useUserStore((s) => s.language);

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang.code as LanguageCode);
    i18n.changeLanguage(lang.code);
    router.push("/(onboarding)/track");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-12">
        <Text className="text-3xl font-bold text-gray-900 mb-2">
          {t("onboarding.language.title")}
        </Text>
        <Text className="text-base text-gray-500 mb-8">
          {t("onboarding.language.subtitle")}
        </Text>

        <FlatList
          data={LANGUAGES}
          keyExtractor={(item) => item.code}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ gap: 12, paddingBottom: 40 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectLanguage(item)}
              className={`flex-1 flex-row items-center gap-3 p-4 rounded-2xl border-2 ${
                currentLanguage === item.code
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-100 bg-gray-50"
              }`}
            >
              <Text className="text-3xl">{item.flag}</Text>
              <View className="flex-1">
                <Text
                  className={`font-semibold text-sm ${
                    currentLanguage === item.code
                      ? "text-indigo-700"
                      : "text-gray-800"
                  }`}
                >
                  {item.nativeName}
                </Text>
                <Text className="text-xs text-gray-400">{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
