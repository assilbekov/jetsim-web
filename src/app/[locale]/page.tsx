import { Hero } from "@/components/Hero";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingSupport } from "@/components/LandingSupport";
import { Navbar } from "@/components/Navbar";
import { Recommendations } from "@/components/Recommendations";
import { WhyBlock } from "@/components/WhyBlock";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main className="flex flex-col gap-20 xs:py-6 py-4">
      <LandingContainer>
        <div className="flex flex-col gap-8">
          <Navbar />
          <Hero />
        </div>
      </LandingContainer>
      <Recommendations />
      <WhyBlock />
      <LandingSupport />
    </main>
  );
}
