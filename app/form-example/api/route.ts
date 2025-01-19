import { Locales } from "@/lib/i18n/common";
import { getTranslations } from "next-intl/server";
import { createTranslator } from "next-intl";
import { NextRequest, NextResponse } from "next/server";

import enUS from "@/public/locales/en-US.json";

export async function GET(request: NextRequest, response: NextResponse) {
  const t = await getTranslations();

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
