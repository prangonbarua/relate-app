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

export interface DailyCard {
  id: string;
  skill: string;
  whyItMatters: string;
  steps: string[];
  category: string;
  date: string;
  track?: UserTrack;
}

export interface GenerateCardRequest {
  track?: UserTrack;
  profile?: Partial<ChildProfile>;
  language?: string;
  date?: string;
}
