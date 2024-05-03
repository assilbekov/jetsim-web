import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";
import { QueryContext } from "@/contexts/QueryContext";
import { Inter_Tight } from 'next/font/google'
 
const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
})

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={interTight.className}>
      <body>
        <QueryContext>
          <AuthProvider>{children}</AuthProvider>
        </QueryContext>
      </body>
    </html>
  );
}
