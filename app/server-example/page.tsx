import { Page } from "@/lib/client/components/Page";
import { useTranslations } from "next-intl";

export default function ServerExamplePage() {
  const t = useTranslations();

  return (
    <Page showBackButton showBorder>
      {t("Greeting")}
    </Page>
  );
}
