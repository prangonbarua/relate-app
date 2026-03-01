export type LanguageCode =
  | "en"
  | "es"
  | "fr"
  | "pt"
  | "ar"
  | "zh"
  | "tl"
  | "vi"
  | "ko"
  | "hi"
  | "ht"
  | "so"
  | "ru"
  | "bn";

export type UserTrack =
  | "pre-diagnosis"
  | "newly-diagnosed"
  | "on-waitlist"
  | "older-child";

export type CommunicationLevel =
  | "nonverbal"
  | "minimal"
  | "emerging"
  | "conversational";

export interface ChildProfile {
  name: string;
  age: number;
  communicationLevel: CommunicationLevel;
  triggers: string[];
  loves: string[];
}

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

export interface Track {
  id: UserTrack;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

export interface DailyCard {
  id: string;
  skill: string;
  whyItMatters: string;
  steps: string[];
  category: string;
  date: string;
}

export interface LogEntry {
  cardId: string;
  date: string;
  result: "success" | "partial" | "skip";
  notes?: string;
}
