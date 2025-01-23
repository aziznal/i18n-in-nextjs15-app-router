import { cn } from "@/lib/utils";
import { LucideChevronLeft } from "lucide-react";
import Link from "next/link";

export function Page(props: {
  children: React.ReactNode;
  showBackButton?: boolean;
  showBorder?: boolean;
}) {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center">
      <div className="px-4 sm:min-w-[300px] max-w-[700px]">
        {props.showBackButton && (
          <Link
            href=".."
            className="text-xs text-gray-500 flex gap-1 items-center mb-2 self-start"
          >
            <LucideChevronLeft size="16" />
            <span>Back</span>
          </Link>
        )}

        <div className={cn(props.showBorder && "p-6 border rounded-lg w-full")}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
