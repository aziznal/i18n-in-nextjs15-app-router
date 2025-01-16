export const Locales = {
  en: { code: "en", nativeName: "English" },
  "en-US": { code: "en-US", nativeName: "English (United States)" },
  "en-GB": { code: "en-GB", nativeName: "English (Great Britain)" },
  de: { code: "de", nativeName: "Deutsch" },
  "de-DE": { code: "de-DE", nativeName: "Deutsch (Deutschland)" },
};

export function getAvailableLocales() {
  return Object.values(Locales).map(
    ({ code, nativeName }) =>
      ({
        code,
        nativeName,
      }) as const,
  );
}

export const DEFAULT_LANGUAGE = Locales.en;

export const LOCALE_COOKIE = "locale";
