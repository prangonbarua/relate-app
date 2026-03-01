import { Track } from "../types";

export const TRACKS: Track[] = [
  {
    id: "pre-diagnosis",
    titleKey: "tracks.pre_diagnosis.title",
    descriptionKey: "tracks.pre_diagnosis.description",
    icon: "search",
  },
  {
    id: "newly-diagnosed",
    titleKey: "tracks.newly_diagnosed.title",
    descriptionKey: "tracks.newly_diagnosed.description",
    icon: "flag",
  },
  {
    id: "on-waitlist",
    titleKey: "tracks.on_waitlist.title",
    descriptionKey: "tracks.on_waitlist.description",
    icon: "time",
  },
  {
    id: "older-child",
    titleKey: "tracks.older_child.title",
    descriptionKey: "tracks.older_child.description",
    icon: "star",
  },
];
