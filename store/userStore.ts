import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageCode, UserTrack } from "../types";

interface UserState {
  language: LanguageCode;
  track: UserTrack | null;
  hasCompletedOnboarding: boolean;
  setLanguage: (language: LanguageCode) => void;
  setTrack: (track: UserTrack) => void;
  completeOnboarding: () => void;
  reset: () => void;
}

const initialState = {
  language: "en" as LanguageCode,
  track: null as UserTrack | null,
  hasCompletedOnboarding: false,
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setLanguage: (language) => set({ language }),
      setTrack: (track) => set({ track }),
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      reset: () => set(initialState),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
