import { useEffect } from "react";
import { I18nManager } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useUserStore } from "../store/userStore";
import "../global.css";
import "../i18n";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const language = useUserStore((s) => s.language);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    const shouldBeRTL = language === "ar";
    if (shouldBeRTL !== I18nManager.isRTL) {
      I18nManager.allowRTL(shouldBeRTL);
      I18nManager.forceRTL(shouldBeRTL);
    }
  }, [language]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="settings"
        options={{ presentation: "modal", animation: "slide_from_bottom" }}
      />
      <Stack.Screen name="post/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="skill-category/[name]" options={{ headerShown: false }} />
      <Stack.Screen name="skill-detail/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="resource-category/[name]" options={{ headerShown: false }} />
      <Stack.Screen name="resource-detail/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
