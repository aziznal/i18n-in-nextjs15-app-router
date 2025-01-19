import en from "@/public/locales/en.json";

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

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends TranslationKeys {}
}
