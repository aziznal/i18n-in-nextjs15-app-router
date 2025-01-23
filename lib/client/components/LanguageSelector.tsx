"use client";

import { getAvailableLocales } from "@/lib/i18n/common";
import { LOCALE_COOKIE } from "@/lib/i18n/common";
import cookies from "js-cookie";
import { LucideLoader2 } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useMemo, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

export function LanguageSelector() {
  const router = useRouter();

  // enables us to display a loading while the router.replace call is happening
  const [isTransitioning, startTransition] = useTransition();

  const locale = useLocale();

  const languages = useMemo(() => getAvailableLocales(), []);

  const currentActiveLanguage = useMemo(() => {
    return languages.find((lng) => locale === lng.code);
  }, [languages, locale]);

  const selectLanguage = (lng: string) => {
    cookies.set(LOCALE_COOKIE, lng);

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <Select
      defaultValue={currentActiveLanguage?.code}
      onValueChange={(value) => selectLanguage(value)}
    >
      <SelectTrigger
        className="absolute top-6 right-6 w-fit gap-3"
        disabled={isTransitioning}
      >
        <SelectValue />

        {isTransitioning && (
          <LucideLoader2
            className="text-white animate-spin shrink-0 mx-3"
            size="24"
          />
        )}
      </SelectTrigger>

      <SelectContent>
        {getAvailableLocales().map((lng) => (
          <SelectItem value={lng.code} key={lng.code}>
            <div className="flex gap-1">
              <span>{lng.flag}</span>
              <span>{lng.nativeName}</span>
              <span className="text-xs text-gray-500 font-mono">({lng.code})</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
