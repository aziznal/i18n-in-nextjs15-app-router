"use client";

import { useTranslation } from "react-i18next";

export default function ClientExamplePage() {
  const { t } = useTranslation();

  return <div>{t("Greeting")}</div>;
}
