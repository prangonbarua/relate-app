import { Language } from "../types";

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "US" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "ES" },
  { code: "fr", name: "French", nativeName: "Français", flag: "FR" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "BR" },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "SA",
    rtl: true,
  },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "CN" },
  { code: "tl", name: "Filipino", nativeName: "Filipino", flag: "PH" },
  {
    code: "vi",
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
    flag: "VN",
  },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "KR" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "IN" },
  { code: "ht", name: "Haitian Creole", nativeName: "Kreyòl Ayisyen", flag: "HT" },
  { code: "so", name: "Somali", nativeName: "Soomaali", flag: "SO" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "RU" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "BD" },
];
