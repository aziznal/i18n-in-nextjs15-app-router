import { Page } from "@/lib/client/components/Page";
import { LucideComputer, LucideFormInput, LucideUser } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  const t = useTranslations();

  return (
    <Page>
      <div className="flex items-center justify-center gap-6 mb-6">
        <PageLink
          icon={<LucideComputer className="text-amber-500" />}
          href="/server-example"
        >
          {t("PageLink.ServerExample")}
        </PageLink>

        <PageLink
          icon={<LucideUser className="text-blue-500" />}
          href="/client-example"
        >
          {t("PageLink.ClientExample")}
        </PageLink>
      </div>

      <PageLink icon={<LucideFormInput />} href="/form-example">
        {t("PageLink.FormExample")}
      </PageLink>
    </Page>
  );
}

const PageLink: React.FC<{
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}> = (props) => (
  <Link
    className="text-center p-10 border rounded-lg flex flex-col gap-3 items-center justify-center hover:bg-gray-900"
    href={props.href}
  >
    {props.icon}
    <span>{props.children}</span>
  </Link>
);
