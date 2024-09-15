import { AllDestinations } from "@/components/AllDestinations";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar/Navbar";
import { AllDestinationsScreenEvent } from "@/components/ScreenEvents/AllDestinationsEvent";
import { PageProps } from "@/models/PageProps";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: PageProps) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "PagesMetadata",
  });

  return {
    title: t("allDestinationsTitle"),
    description: t("allDestinationsDescription"),
  };
}

export default function Index({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params?.locale);
  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <AllDestinationsScreenEvent />
      <div className="bg-text-900 sm:bg-[#F8F9FB] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] pb-4 md:pb-5">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar
              howToHref="/#how-to"
              faqHref="/#faq"
              locale={params?.locale}
            />
          </div>
        </LandingContainer>
      </div>
      <div className="flex flex-col bg-[#F8F9FB] sm:gap-[10px] md:gap-6 lg:gap-[10px]">
        <AllDestinations locale={params?.locale} page="All-Destinations" />
        <LandingFooter locale={params?.locale} />
      </div>
    </main>
  );
}
