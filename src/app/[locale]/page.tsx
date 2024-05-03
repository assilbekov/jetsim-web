import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main className="max-w-[1440px] px-8 py-6 m-auto flex flex-col gap-8">
      <Navbar />
      <Hero />
    </main>
  );
}
