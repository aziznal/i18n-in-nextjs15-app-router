import { useTranslations } from "next-intl";

export default function ServerExamplePage() {
  const t = useTranslations();

  return <div>{t("Greeting")}</div>;
}
