import { ExampleEmail } from "@/emails/example-email";
import { render } from "@react-email/render";
import { createTranslator } from "next-intl";
import { getTranslationsByLocale } from "../i18n/server-utils";

async function run() {
  const messages = await getTranslationsByLocale({
    locale: "de",
  });

  const t = createTranslator({
    locale: "de",
    messages: messages,
    timeZone: "Europe/Istanbul",
  });

  const result = await render(<ExampleEmail t={t} />, { pretty: true });

  console.log(result);
}

run();
