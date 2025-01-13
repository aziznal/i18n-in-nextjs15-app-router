"use client";

import { useTranslations } from "next-intl";

export default function ClientExamplePage() {
  const t = useTranslations();

  return <div>{t("Greeting")}</div>;
}
