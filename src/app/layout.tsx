import "./globals.css";
import { QueryContext } from "@/contexts/QueryContext";
import { Inter_Tight, Inter } from "next/font/google";
import Head from "next/head";
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(interTight.variable, inter.variable)}>
      <head>
        <title>My App</title>
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=5c4d404b-f742-403a-bd86-b941352f96fc"
        >
          {" "}
        </script>
      </head>
      <body>
        <QueryContext>{children}</QueryContext>
      </body>
    </html>
  );
}
