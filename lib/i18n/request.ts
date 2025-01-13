import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { LOCALE_COOKIE } from "./common";

async function getLocaleFromCookie(): Promise<string | undefined> {
  return (await cookies()).get(LOCALE_COOKIE)?.value;
}

export default getRequestConfig(async () => {
  const locale = (await getLocaleFromCookie()) ?? "en";

  return {
    locale,
    messages: (await import(`../../public/locales/${locale}.json`)).default,
  };
});
