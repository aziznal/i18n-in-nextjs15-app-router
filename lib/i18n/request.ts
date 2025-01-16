import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { getAvailableLocales, LOCALE_COOKIE, DEFAULT_LANGUAGE } from "./common";
import acceptLanguageHeaderParser from "accept-language-parser";

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

  const locales = acceptLanguageHeaderParser.parse(rawHeader);

  const supportedLocales = locales.filter((locale) =>
    getAvailableLocales()
      .map((l) => l.code)
      .includes(locale.code),
  );

  if (supportedLocales.length > 0) {
    return supportedLocales[0].code;
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
    messages: (await import(`../../public/locales/${locale}.json`)).default,
  };
});
