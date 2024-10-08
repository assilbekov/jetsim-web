import { CompletionSuccess } from "@/components/CompletionSuccess";
import { ThanksForPurchase } from "@/components/CompletionSuccess/ThanksForPurchase";
import { FAQ } from "@/components/FAQ";
import { BeforeInstallation } from "@/components/InstallESim/BeforeInstallation";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingSupport } from "@/components/LandingSupport";
import { Navbar } from "@/components/Navbar/Navbar";
import { FinishedScreenEvent } from "./_components/FinishedScreenEvent";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { PageProps } from "@/models/PageProps";
import { DownloadAppLandingBlock } from "@/components/DownloadAppLandingBlock";

export async function generateMetadata({ params }: PageProps) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "PagesMetadata",
  });

  return {
    title: t("paymentCompletionTitle"),
    description: t("paymentCompletionDescription"),
  };
}

export default function Completion({
  searchParams,
  params,
}: {
  searchParams: { cardID: string };
  params: { locale: string };
}) {
  unstable_setRequestLocale(params?.locale);
  const cardID = searchParams.cardID ?? "";

  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <FinishedScreenEvent />
      <div className="bg-text-900 sm:bg-[#F8F9FB] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] pb-4 md:pb-5">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar hideNav locale={params?.locale} />
          </div>
        </LandingContainer>
      </div>
      <div className="flex flex-col bg-[#F8F9FB] gap-4 md:gap-6">
        <ThanksForPurchase />
        <CompletionSuccess cardID={cardID} locale={params.locale} />
        <BeforeInstallation />
        <LandingSupport />
        <FAQ />
        <DownloadAppLandingBlock />
        <LandingFooter locale={params?.locale} />
      </div>
    </main>
  );
}
