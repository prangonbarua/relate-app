import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { useUserStore } from "./userStore";

// Android emulator uses 10.0.2.2 for localhost, iOS simulator uses localhost
const getBaseUrl = () => {
  if (__DEV__) {
    if (Platform.OS === "android") return "http://10.0.2.2:3001";
    return "http://localhost:3001";
  }
  return "http://localhost:3001";
};

const BASE_URL = getBaseUrl();

async function getToken(): Promise<string | null> {
  return AsyncStorage.getItem("auth-token");
}

export async function api<T = any>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = await getToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  const language = useUserStore.getState().language;
  if (language) {
    headers["Accept-Language"] = language;
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Request failed" }));
    throw new Error(error.error || `HTTP ${response.status}`);
  }

  return response.json();
}
