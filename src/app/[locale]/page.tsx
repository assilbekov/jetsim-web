import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingSupport } from "@/components/LandingSupport";
import { Navbar } from "@/components/Navbar";
import { NoPlasticWaste } from "@/components/NoPlasticWaste";
import { Recommendations } from "@/components/Recommendations";
import { SetupJetSim } from "@/components/SetupJetSim";
import { WhyBlock } from "@/components/WhyBlock";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <main className="sm:bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <LandingContainer className="bg-text-900 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] px-4 xxs:px-6">
        <div className="flex flex-col gap-6 mt-2 md:gap-8 xxs:mt-4">
          <Navbar />
          <Hero />
        </div>
      </LandingContainer>
      <div className="w-full h-4 bg-[#F8F9FB]" />
      <div className="flex flex-col sm:gap-4">
        <Recommendations />
        <SetupJetSim />
        <LandingSupport />
        <WhyBlock />
        <NoPlasticWaste />
        <FAQ />
        <LandingFooter />
      </div>
    </main>
  );
}
