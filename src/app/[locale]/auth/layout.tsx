import { QueryContext } from "@/contexts/QueryContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryContext>{children}</QueryContext>
      </body>
    </html>
  );
}
