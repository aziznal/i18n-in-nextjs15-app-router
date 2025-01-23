export const Locales = {
  en: { code: "en", nativeName: "English", flag: "🌎" },
  "en-US": { code: "en-US", nativeName: "English (United States)", flag: "🇺🇸" },
  "en-GB": { code: "en-GB", nativeName: "English (Great Britain)", flag: "🇬🇧" },
  de: { code: "de", nativeName: "Deutsch", flag: "🇩🇪" },
  "de-DE": { code: "de-DE", nativeName: "Deutsch (Deutschland)", flag: "🇩🇪" },
};

export type AvailableLocale = keyof typeof Locales;

export function getAvailableLocales() {
  return Object.values(Locales).map(
    ({ code, nativeName, flag }) =>
      ({
        code,
        nativeName,
        flag,
      }) as const,
  );
}

export const DEFAULT_LANGUAGE = Locales.en;

export const LOCALE_COOKIE = "locale";
