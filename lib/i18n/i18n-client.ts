import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import * as en from "@/public/locales/en.json";

i18next
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",

    resources: {
      en: {
        translation: en,
      },
    },

  });

export { i18next };
