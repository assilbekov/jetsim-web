import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

import "./globals.css";
import { QueryContext } from "@/contexts/QueryContext";
import { Inter_Tight, Inter } from "next/font/google";
import { clsx } from "@/utils";
import { ZendeskProvider } from "@/contexts/ZendeskProvider";
import { GA4 } from "@/components/anylitics-scripts/GA4";
import { GTM, GTMNoScript } from "@/components/anylitics-scripts/GTM";
import {
  Facebook,
  FacebookNoScript,
} from "@/components/anylitics-scripts/Facebook";
import { UTMProvider } from "@/contexts/UTMContext";
import { YA, YANoScript } from "@/components/anylitics-scripts/YA";
import { locales } from "@/navigation";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function LocaleLayout({
  children,
  params: { locale },
  ...restProps
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={clsx(interTight.variable, inter.variable)}>
      <head>
        <GA4 />
        <GTM />
        <Facebook />
        <YA />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-itunes-app"
          content="app-id=6504028637, app-argument=https://www.jetsim.app"
        />
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </head>
      <body>
        <FacebookNoScript />
        <GTMNoScript />
        <YANoScript />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <QueryContext>
            <ZendeskProvider>
              <UTMProvider>{children}</UTMProvider>
            </ZendeskProvider>
          </QueryContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  //const locales = ['en', 'es', 'fr']; // List your supported locales
  const paths = [];

  for (const locale of locales) {
    // Generate paths for each locale
    paths.push({ locale });
  }

  return paths;
}
