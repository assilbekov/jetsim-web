import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = [
  "en-US",
  "fr-FR",
  "de-DE",
  "pl-PL",
  "pt-PT",
  "sr-RS",
  "es-ES",
];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

export const isSupportedLocale = (locale: string): boolean => {
  return locales.includes(locale);
};