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
      <div className="bg-text-900 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar />
            <Hero />
          </div>
        </LandingContainer>
      </div>
      <div className="w-full h-4 md:h-5 bg-[#F8F9FB]" />
      <div className="flex flex-col sm:gap-4 md:gap-6">
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
