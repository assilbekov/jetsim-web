import { FAQ } from "@/components/FAQ";
import { FeatureAndTechDetails } from "@/components/FeaturesAndTechDetails";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingSupport } from "@/components/LandingSupport";
import { Navbar } from "@/components/Navbar";
import { PlacePackagesCard } from "@/components/PlacePackagesCard";
import { SetupJetSim } from "@/components/SetupJetSim";
import { WhyBlock } from "@/components/WhyBlock";
import { useTranslations } from "next-intl";

export default function Index({ params }: { params: { placeId: string } }) {
  const t = useTranslations("Index");
  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <div className="bg-text-900 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] mb-4 md:mb-5">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar />
          </div>
        </LandingContainer>
      </div>
      <div className="flex flex-col sm:gap-4 md:gap-6">
        <PlacePackagesCard placeId={params.placeId} />
        <FeatureAndTechDetails />
        <WhyBlock />
        <SetupJetSim />
        <LandingSupport />
        <FAQ />
        <LandingFooter />
      </div>
    </main>
  );
}