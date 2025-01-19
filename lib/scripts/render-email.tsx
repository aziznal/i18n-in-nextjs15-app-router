import { ExampleEmail } from "@/emails/example-email";
import { render } from "@react-email/render";
import { NextIntlClientProvider } from "next-intl";
import { getTranslationsByLocale } from "../i18n/server-utils";

async function run() {
  const messages = await getTranslationsByLocale({
    locale: "de",
  });

  const result = await render(
    <>
      <NextIntlClientProvider
        locale="de"
        messages={messages}
        timeZone="Europe/Istanbul"
      >
        <ExampleEmail />
      </NextIntlClientProvider>
    </>,
    { pretty: true },
  );

  console.log(result);
}

run();
