export const Languages: Record<string, { nativeName: string }> = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

export function getAvailableLanguages() {
  return Object.entries(Languages).map(
    ([locale, { nativeName }]) =>
      ({
        locale,
        nativeName,
      }) as const,
  );
}

export const LOCALE_COOKIE = "locale";
