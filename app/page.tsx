import i18next from "i18next";
import { LucideComputer, LucideUser } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100dvh] gap-6">
      <PageLink
        icon={<LucideComputer className="text-amber-500" />}
        href="/server-example"
      >
        {i18next.t("PageLink.ServerExample")}
      </PageLink>

      <PageLink
        icon={<LucideUser className="text-blue-500" />}
        href="/client-example"
      >
        {i18next.t("PageLink.ClientExample")}
      </PageLink>
    </div>
  );
}

const PageLink: React.FC<{
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}> = (props) => (
  <Link
    className="p-10 border rounded-lg flex flex-col gap-3 items-center justify-center hover:bg-gray-900"
    href={props.href}
  >
    {props.icon}
    <span>{props.children}</span>
  </Link>
);
