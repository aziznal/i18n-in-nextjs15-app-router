import { Page } from "@/lib/client/components/Page";
import {
  LucideArrowDown01,
  LucideComputer,
  LucideFormInput,
  LucideUser,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  const t = useTranslations();

  return (
    <Page>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
        <PageLink
          icon={<LucideComputer className="text-amber-200" />}
          href="/server-example"
        >
          {t("PageLink.ServerExample")}
        </PageLink>

        <PageLink
          icon={<LucideUser className="text-blue-200" />}
          href="/client-example"
        >
          {t("PageLink.ClientExample")}
        </PageLink>

        <PageLink
          icon={<LucideFormInput className="text-emerald-200" />}
          href="/form-example"
        >
          {t("PageLink.FormExample")}
        </PageLink>

        <PageLink
          icon={<LucideArrowDown01 className="text-rose-400" />}
          href="/icu-examples"
        >
          {t("PageLink.ICUExample")}
        </PageLink>
      </div>
    </Page>
  );
}

const PageLink: React.FC<{
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}> = (props) => (
  <Link
    draggable={false}
    className="text-center p-10 border rounded-lg flex flex-col gap-3 items-center justify-center hover:bg-gray-900 hover:shadow-[16px_16px_#626880] hover:-translate-x-4 hover:-translate-y-4 transition-all active:translate-x-0 active:translate-y-0 active:shadow-none"
    href={props.href}
  >
    {props.icon}
    <span>{props.children}</span>
  </Link>
);
