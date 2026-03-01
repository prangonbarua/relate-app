import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// Android emulator uses 10.0.2.2 for localhost, iOS simulator uses localhost
const getBaseUrl = () => {
  if (__DEV__) {
    if (Platform.OS === "android") return "http://10.0.2.2:3001";
    return "http://localhost:3001";
  }
  return "http://localhost:3001";
};

const BASE_URL = getBaseUrl();

let autoLoginInProgress: Promise<string | null> | null = null;

async function getToken(): Promise<string | null> {
  const existing = await AsyncStorage.getItem("auth-token");
  if (existing) return existing;

  // Auto-login with demo account for hackathon demo
  if (autoLoginInProgress) return autoLoginInProgress;

  autoLoginInProgress = (async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "maria@demo.com", password: "demo123" }),
      });
      if (res.ok) {
        const data = await res.json();
        await AsyncStorage.setItem("auth-token", data.token);
        return data.token as string;
      }
    } catch {
      // Backend not reachable — continue without token
    }
    return null;
  })();

  const token = await autoLoginInProgress;
  autoLoginInProgress = null;
  return token;
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
