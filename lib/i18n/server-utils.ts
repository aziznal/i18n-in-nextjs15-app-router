export function getTranslationsByLocale(args: { locale: string }) {
  return import(`../../public/locales/${args.locale}.json`).then(
    (res) => res.default,
  );
}
