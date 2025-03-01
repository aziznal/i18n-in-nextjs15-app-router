import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { getAvailableLocales, LOCALE_COOKIE, DEFAULT_LANGUAGE } from "./common";
import acceptLanguageHeaderParser from "accept-language-parser";
import { getTranslationsByLocale } from "./server-utils";

async function getLocaleFromCookie(): Promise<string | undefined> {
  return (await cookies()).get(LOCALE_COOKIE)?.value;
}

async function getLocaleFromHeaders(): Promise<string> {
  // potential shapes:
  // - empty
  // - one locale: en
  // - multiple locales: en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7

  const rawHeader = (await headers()).get("accept-language");

  if (!rawHeader) return DEFAULT_LANGUAGE.code;

  const locales = acceptLanguageHeaderParser.parse(rawHeader).map((l) => {
    if (l.region) return `${l.code}-${l.region}`;
    return l.code;
  });

  const supportedLocales = locales.filter((locale) =>
    getAvailableLocales()
      .map((l) => l.code)
      .includes(locale),
  );

  if (supportedLocales.length > 0) {
    return supportedLocales[0];
  }

  // on the off case the accept-language header is missing
  return DEFAULT_LANGUAGE.code;
}

export default getRequestConfig(async () => {
  let locale: string | undefined;

  locale = await getLocaleFromCookie();

  if (!locale) {
    locale = await getLocaleFromHeaders();
  }

  return {
    locale,
    messages: await getTranslationsByLocale({ locale }),

    // can also be inferred just like the locale
    timeZone: "Europe/Istanbul",
  };
});
