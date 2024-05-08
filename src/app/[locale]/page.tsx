import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Recommendations } from "@/components/Recommendations";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main className="xl:max-w-[1440px] lg:max-w-[1200px] w-screen xs:px-8 xs:py-6 px-4 py-4 m-auto">
      <div className="flex flex-col gap-8">
        <Navbar />
        <Hero />
      </div>
      <Recommendations />
    </main>
  );
}
