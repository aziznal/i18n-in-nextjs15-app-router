import type en from "@/public/locales/en.json";
import { Formats, TranslationValues } from "next-intl";

type TranslationKeys = typeof en;

// Helper type to deeply get keys from nested objects
type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]: `${K & string}${T[K] extends object
        ? `.${DeepKeys<T[K]>}`
        : ""}`;
    }[keyof T]
  : never;

/** All available translation keys in flattened dot notation */
export type TranslationKey = DeepKeys<TranslationKeys>;

// ISSUES:
// - We are dependent on next-intl to provide us the TranslationValues and Formats types.
export type TranslationFunction = (
  key: TranslationKey,
  values?: TranslationValues,
  formats?: Formats,
) => string;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends TranslationKeys {}
}
