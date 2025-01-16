import { LucideChevronLeft } from "lucide-react";
import Link from "next/link";

export function Page(props: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-fit min-h-[100dvh] flex flex-col items-center justify-center">
      <Link
        href=".."
        className="w-full text-xs text-gray-500 flex gap-1 items-center mb-2"
      >
        <LucideChevronLeft size="16" />
        <span>Back</span>
      </Link>

      {props.children}
    </div>
  );
}
