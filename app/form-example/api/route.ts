import { Locales } from "@/lib/i18n/common";
import { getTranslations } from "next-intl/server";
import { createTranslator } from "next-intl";
import { NextResponse } from "next/server";

import enUS from "@/public/locales/en-US.json";

export async function GET() {
  const t = await getTranslations();

  const t2 = createTranslator({
    locale: Locales["en-US"].code,
    
    // @ts-expect-error -- error here is not very clear because things seem to still work despite it.
    messages: enUS,
  });

  console.log(t);

  return NextResponse.json({
    message1: t("Greeting"),
    message2: t2("Greeting"),
  });
}
