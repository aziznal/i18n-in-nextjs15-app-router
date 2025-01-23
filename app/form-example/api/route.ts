import { Locales } from "@/lib/i18n/common";
import { getTranslations } from "next-intl/server";
import { createTranslator } from "next-intl";
import { NextResponse } from "next/server";

import enUS from "@/public/locales/en-US.json";

export async function GET() {
  // normal call to get translations based on inferred locale
  const t = await getTranslations();

  // custom call to get a specific locale's translations
  const t2 = createTranslator({
    locale: Locales["en-US"].code,
    messages: enUS,
  });

  console.log(t);

  return NextResponse.json({
    message1: t("Greeting"),
    message2: t2("Greeting"),
  });
}
