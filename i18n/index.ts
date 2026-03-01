import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";
import ar from "./locales/ar.json";
import zh from "./locales/zh.json";
import tl from "./locales/tl.json";
import vi from "./locales/vi.json";
import ko from "./locales/ko.json";
import hi from "./locales/hi.json";
import am from "./locales/am.json";
import so from "./locales/so.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  pt: { translation: pt },
  ar: { translation: ar },
  zh: { translation: zh },
  tl: { translation: tl },
  vi: { translation: vi },
  ko: { translation: ko },
  hi: { translation: hi },
  am: { translation: am },
  so: { translation: so },
};

const deviceLanguage = getLocales()[0]?.languageCode ?? "en";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: deviceLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
