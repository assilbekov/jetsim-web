import "./globals.css";
import { QueryContext } from "@/contexts/QueryContext";
import { Inter_Tight, Inter } from "next/font/google";
import { clsx } from "@/utils";
import { ZendeskProvider } from "@/contexts/ZendeskProvider";
import { GoogleAnalyticsProvider } from "@/contexts/GoogleAnalyticsContext";

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
      <body>
        <QueryContext>
          <ZendeskProvider>
            <GoogleAnalyticsProvider>{children}</GoogleAnalyticsProvider>
          </ZendeskProvider>
        </QueryContext>
      </body>
    </html>
  );
}
