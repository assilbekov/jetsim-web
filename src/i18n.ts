import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

// Can be imported from a shared config
const locales = ["en", "de"];

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",
  "/blog": "/blog",

  // If locales use different paths, you can
  // specify each external path per locale.
  "/about": {
    en: "/about",
    de: "/ueber-uns",
  },

  // Dynamic params are supported via square brackets
  "/news/[articleSlug]-[articleId]": {
    en: "/news/[articleSlug]-[articleId]",
    de: "/neuigkeiten/[articleSlug]-[articleId]",
  },

  // Also (optional) catch-all segments are supported
  "/categories/[...slug]": {
    en: "/categories/[...slug]",
    de: "/kategorien/[...slug]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link } = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
});

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
