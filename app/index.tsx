import { Redirect } from "expo-router";
import { useUserStore } from "../store/userStore";
import { useAuthStore } from "../store/authStore";

export default function Index() {
  const hasCompletedOnboarding = useUserStore(
    (s) => s.hasCompletedOnboarding
  );
  const token = useAuthStore((s) => s.token);

  if (hasCompletedOnboarding && token) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(onboarding)" />;
}
