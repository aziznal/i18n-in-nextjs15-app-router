"use client";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import "@/lib/i18n/zod";

export function Providers(props: {
  children: React.ReactNode;
  translations: AbstractIntlMessages;
  locale: string;
}) {
  return (
    <>
      <NextIntlClientProvider
        messages={props.translations}
        locale={props.locale}
      >
        {props.children}
      </NextIntlClientProvider>
    </>
  );
}
