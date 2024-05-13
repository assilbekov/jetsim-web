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
    <main className="flex flex-col gap-20 xs:pb-6 pb-4 bg-[#F8F9FB]">
      <LandingContainer className="bg-text-900">
        <div className="flex flex-col gap-8 mt-4">
          <Navbar />
          <Hero />
        </div>
      </LandingContainer>
      <SetupJetSim />
      <Recommendations />
      <WhyBlock />
      <LandingSupport />
      <NoPlasticWaste />
      <FAQ />
      <LandingFooter />
    </main>
  );
}
