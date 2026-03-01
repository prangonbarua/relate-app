import { useCallback } from "react";
import { Tabs, useRouter, useSegments } from "expo-router";
import { useTranslation } from "react-i18next";
import { InteractiveMenu, InteractiveMenuItem } from "../../components/ui/modern-mobile-menu";
import { Colors } from "../../constants/theme";

const TAB_ROUTES = ["index", "skills", "navigator", "community", "assistant"] as const;
type TabRoute = typeof TAB_ROUTES[number];

function CustomTabBar() {
  const { t } = useTranslation();
  const router = useRouter();
  const segments = useSegments();

  const menuItems: InteractiveMenuItem[] = [
    { label: t("tabs.home"),      icon: "home-outline" },
    { label: t("tabs.skills"),    icon: "compass-outline" },
    { label: t("tabs.navigator"), icon: "book-outline" },
    { label: t("tabs.community"), icon: "people-outline" },
    { label: t("tabs.assistant"), icon: "sparkles-outline" },
  ];

  // Derive active index from current route segment
  const activeRoute = segments[segments.length - 1] as TabRoute | undefined;
  const initialIndex = TAB_ROUTES.indexOf((activeRoute ?? "index") as TabRoute);

  const handleSelect = useCallback(
    (index: number) => {
      const route = TAB_ROUTES[index];
      router.push(route === "index" ? "/(tabs)" : (`/(tabs)/${route}` as Parameters<typeof router.push>[0]));
    },
    [router]
  );

  return (
    <InteractiveMenu
      items={menuItems}
      accentColor={Colors.tabActive}
      onSelect={handleSelect}
      initialIndex={initialIndex >= 0 ? initialIndex : 0}
    />
  );
}

export default function TabsLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      tabBar={() => <CustomTabBar />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index"     options={{ title: t("tabs.home") }} />
      <Tabs.Screen name="navigator" options={{ title: t("tabs.navigator") }} />
      <Tabs.Screen name="skills"    options={{ title: t("tabs.skills") }} />
      <Tabs.Screen name="community" options={{ title: t("tabs.community") }} />
      <Tabs.Screen name="assistant" options={{ title: t("tabs.assistant") }} />
    </Tabs>
  );
}
