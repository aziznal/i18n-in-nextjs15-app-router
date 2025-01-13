"use client";

import { I18nextProvider } from "react-i18next";

import { i18next } from "@/lib/i18n/i18n-client";

export function Providers(props: { children: React.ReactNode }) {
  return (
    <>
      <I18nextProvider i18n={i18next}>{props.children}</I18nextProvider>
    </>
  );
}
