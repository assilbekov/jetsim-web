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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(interTight.variable, inter.variable)}>
      <head>
        <GA4 />
        <GTM />
        <Facebook />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <GTMNoScript />
        <FacebookNoScript />
        <QueryContext>
          <ZendeskProvider>{children}</ZendeskProvider>
        </QueryContext>
      </body>
    </html>
  );
}
