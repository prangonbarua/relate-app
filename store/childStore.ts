import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ChildProfile, LogEntry } from "../types";

interface ChildState {
  profile: ChildProfile | null;
  logs: LogEntry[];
  setProfile: (profile: ChildProfile) => void;
  updateProfile: (updates: Partial<ChildProfile>) => void;
  clearProfile: () => void;
  addLog: (entry: LogEntry) => void;
}

export const useChildStore = create<ChildState>()(
  persist(
    (set, get) => ({
      profile: null,
      logs: [],
      setProfile: (profile) => set({ profile }),
      updateProfile: (updates) => {
        const current = get().profile;
        if (current) {
          set({ profile: { ...current, ...updates } });
        }
      },
      clearProfile: () => set({ profile: null }),
      addLog: (entry) => set({ logs: [...get().logs, entry] }),
    }),
    {
      name: "child-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
