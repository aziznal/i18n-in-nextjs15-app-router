import { LucideChevronLeft } from "lucide-react";
import Link from "next/link";

export function Page(props: {
  children: React.ReactNode;
  showBackButton?: boolean;
}) {
  return (
    <div className="mx-auto w-fit min-h-[100dvh] flex flex-col items-center justify-center">
      {props.showBackButton && (
        <Link
          href=".."
          className="text-xs text-gray-500 flex gap-1 items-center mb-2 self-start"
        >
          <LucideChevronLeft size="16" />
          <span>Back</span>
        </Link>
      )}

      {props.children}
    </div>
  );
}
