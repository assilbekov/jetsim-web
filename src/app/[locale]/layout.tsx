import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";
import { QueryContext } from "@/contexts/QueryContext";
import { Inter_Tight, Inter } from "next/font/google";
import { clsx } from "@/utils";

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

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={clsx(interTight.variable, inter.variable)}>
      <body>
        <QueryContext>
          <AuthProvider>{children}</AuthProvider>
        </QueryContext>
      </body>
    </html>
  );
}
