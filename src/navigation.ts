import { createSharedPathnamesNavigation } from "next-intl/navigation";
// import {locales, /* ... */} from './config';

export const locales = [
  "en",
  "en-US",
  "fr-FR",
  "de-DE",
  "pl-PL",
  "pt-PT",
  "sr-RS",
  "es-ES",
] as const;

export type LinkProps = {
  href: string | import("url").UrlObject;
  as?: string | import("url").UrlObject;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  //locale?: string | false;
  legacyBehavior?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales /* ... */ });
