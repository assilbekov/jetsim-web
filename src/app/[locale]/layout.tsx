import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";
import { QueryContext } from "@/contexts/QueryContext";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <QueryContext>
          <AuthProvider>{children}</AuthProvider>
        </QueryContext>
      </body>
    </html>
  );
}
