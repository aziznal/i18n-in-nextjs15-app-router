"use client";

import { I18nextProvider } from "react-i18next";

import "@/lib/i18n/i18n-client";
import i18next from "i18next";

export function Providers(props: { children: React.ReactNode }) {
  return (
    <>
      <I18nextProvider i18n={i18next}>{props.children}</I18nextProvider>
    </>
  );
}
