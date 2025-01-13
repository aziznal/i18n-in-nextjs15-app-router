"use client";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

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
