"use client";

import { Page } from "@/lib/client/components/Page";
import { useTranslations } from "next-intl";

export default function ClientExamplePage() {
  const t = useTranslations();

  return <Page>{t("Greeting")}</Page>;
}
