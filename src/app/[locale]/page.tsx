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
import { MainScreenEvent } from "../_components/MainScreenEvent";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateMetadata(): Metadata {
  return {
    title: "Buy International eSIM | Global Travel Internet - JetSim",
    description:
      "Discover JetSim's eSIM cards for seamless global travel internet. Buy international eSIMs for reliable connectivity wherever you go.",
  };
}

export default function Index({
  params,
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <MainScreenEvent />
      <div className="bg-text-900 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] mb-4 md:mb-5">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar locale={params.locale} />
            <Hero locale={params.locale} />
          </div>
        </LandingContainer>
      </div>
      <div className="flex flex-col sm:gap-4 md:gap-6">
        <Recommendations locale={params.locale} />
        <SetupJetSim />
        <LandingSupport />
        <WhyBlock />
        <NoPlasticWaste />
        <FAQ />
        <LandingFooter locale={params.locale} />
      </div>
    </main>
  );
}

