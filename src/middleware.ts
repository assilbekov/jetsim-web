import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "en-US",

  localeDetection: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/.well-known/apple-app-site-association', // Ensure .well-known path is accessible
    '/((?!api|_next|.*\\..*).*)', // Matches other paths excluding API, _next, and static files
    //`/(en-US|fr-FR|de-DE|pl-PL|pt-PT|sr-RS|es-ES|it-IT|tr-TR)/:path*`,
  ],
};
