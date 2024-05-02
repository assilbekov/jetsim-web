import { Navbar } from "@/components/Navbar";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main>
      <Navbar />
    </main>
  );
}
