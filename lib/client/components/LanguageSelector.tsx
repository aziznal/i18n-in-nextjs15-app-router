"use client";

import { getAvailableLocales } from "@/lib/i18n/common";
import { LOCALE_COOKIE } from "@/lib/i18n/common";
import { cn } from "@/lib/utils";
import cookies from "js-cookie";
import { LucideLoader2 } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

function getStyleByLocale(locale: string) {
  switch (locale) {
    case "en":
      return {
        normal: "border-blue-500 hover:bg-blue-500",
        active:
          "outline-offset-2 outline outline-2 outline-blue-500 bg-blue-500",
      };

    case "de":
      return {
        normal: "border-amber-500 hover:bg-amber-500",
        active:
          "outline-offset-2 outline outline-2 outline-amber-500 bg-amber-500 text-black",
      };

    default:
      return {
        normal: "",
        active: "bg-gray-500",
      };
  }
}

export function LanguageSelector() {
  const router = useRouter();

  // enables us to display a loading while the router.replace call is happening
  const [isTransitioning, startTransition] = useTransition();

  const locale = useLocale();

  const selectLanguage = (lng: string) => {
    cookies.set(LOCALE_COOKIE, lng);

    startTransition(() => {
      router.refresh();
    });
  };

  if (isTransitioning) {
    return (
      <LucideLoader2
        className="text-white animate-spin shrink-0 top-4 right-4 absolute"
        size="24"
      />
    );
  }

  return (
    <div className="absolute top-6 right-6 flex gap-3 text-xs leading-none whitespace-nowrap overflow-x-auto max-w-[90vw] p-3">
      {getAvailableLocales().map((lng) => (
        <div
          className={cn(
            "p-2 border font-mono cursor-pointer rounded-lg transition-colors font-bold",
            getStyleByLocale(lng.code).normal,
            locale === lng.code && getStyleByLocale(lng.code).active,
          )}
          key={lng.code}
          onClick={() => selectLanguage(lng.code)}
        >
          {lng.nativeName}
        </div>
      ))}
    </div>
  );
}
