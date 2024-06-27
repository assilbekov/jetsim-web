import "./globals.css";
import { QueryContext } from "@/contexts/QueryContext";
import { Inter_Tight, Inter } from "next/font/google";
import { clsx } from "@/utils";
import { ZendeskProvider } from "@/contexts/ZendeskProvider";

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
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <QueryContext>
          <ZendeskProvider>{children}</ZendeskProvider>
        </QueryContext>
      </body>
    </html>
  );
}
