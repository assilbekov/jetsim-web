import { FAQ } from "@/components/FAQ";
import { FeatureAndTechDetails } from "@/components/FeaturesAndTechDetails";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingSupport } from "@/components/LandingSupport";
import { Navbar } from "@/components/Navbar";
import { PlacePackagesCard } from "@/components/PlacePackagesCard";
import { SetupJetSim } from "@/components/SetupJetSim";
import { WhyBlock } from "@/components/WhyBlock";
import { CountryScreenEvent } from "./_components/CountryScreenEvent";
import { Metadata } from "next";
import { fetchLocation } from "@/api/locations";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type PageProps = {
  params: { placeId: string; locale: string };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "PagesMetadata",
  });
  const location = await fetchLocation(params.placeId, params?.locale);

  return {
    title: t("placePageTitle", { title: location.title }),
    description: t("placePageDescription", { title: location.title }),
  };
}

export default function Index({ params }: PageProps) {
  unstable_setRequestLocale(params?.locale);
  return (
    <main className="bg-[#F8F9FB] bg-white-900 md:overflow-x-hidden sm:pb-11">
      <CountryScreenEvent countryId={params.placeId} />
      <div className="bg-text-900 sm:bg-[#F8F9FB] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] pb-4 md:pb-5">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar locale={params?.locale} />
          </div>
        </LandingContainer>
      </div>
      <div className="flex flex-col bg-[#F8F9FB] gap-4 md:gap-6">
        <PlacePackagesCard placeId={params.placeId} locale={params?.locale} />
        <FeatureAndTechDetails />
        <WhyBlock showSecurePaymentMethods={false} />
        <SetupJetSim />
        <LandingSupport />
        <FAQ />
        <LandingFooter locale={params?.locale} />
      </div>
    </main>
  );
}
