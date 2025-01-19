import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "@/lib/client/components/Providers";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { LanguageSelector } from "@/lib/client/components/LanguageSelector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("Metadata.Title"),
    description: t("Metadata.Description"),

    alternates: {
      canonical: "https://i18n-in-nextjs.aziznal.com",
      languages: {
        en: "https://i18n-in-nextjs.aziznal.com/en",
        "en-US": "https://i18n-in-nextjs.aziznal.com/en-US",
        "en-GB": "https://i18n-in-nextjs.aziznal.com/en-GB",
        de: "https://i18n-in-nextjs.aziznal.com/de",
        "de-DE": "https://i18n-in-nextjs.aziznal.com/de-DE",
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const translations = await getMessages();

  return (
    <Providers translations={translations} locale={locale}>
      <html lang={locale} className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}

          <LanguageSelector />
        </body>
      </html>
    </Providers>
  );
}

// TODO: basic demo of some ICU formats and rich text rendering
// TODO: Some type issues in react-email components

// DONE: create language selector
// DONE: get language from user's preferences or fallback to auto-detect
// DONE: typesafetify
// DONE: zod
// Done: should there be a lng param: Yes, probably. Link: https://webmasters.stackexchange.com/questions/403/how-should-i-structure-my-urls-for-both-seo-and-localization/44289?newreg=ec84001177994fcf8db060f884cc7cf3
// DONE: site metadata
// DONE: emails with react-mail
