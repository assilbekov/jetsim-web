import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooterContent } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import { TermsTextBlock } from "@/components/TermsTextBlock";
import { TermsScreenEvent } from "./_components/TermsScreenEvent";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Terms of Service | JetSim eSIM Cards",
  description:
    "Explore JetSim's terms of service governing the use of our eSIM cards for seamless global connectivity. Understand our guidelines and obligations to ensure a secure and enjoyable user experience.",
};

export default function Index({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("TermsOfService");

  return (
    <main className="bg-[#F8F9FB] overflow-hidden">
      <TermsScreenEvent />
      <LandingContainer className="px-6 sm:px-8 pb-11">
        <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
          <Navbar howToHref="/#how-to" faqHref="/#faq" locale={params.locale} />
        </div>
        <div className="flex flex-col gap-4 md:gap-6 mt-4 sm:mt-6">
          <TermsTextBlock
            title={t("termsTextBlockTitle")}
            lastUpdated={t("termsTextBlockLastUpdated")}
            infoBlocks={[
              {
                header: t("generalProvisionsHeader"),
                content: [
                  t("generalProvisionsContent1"),
                  t("generalProvisionsContent2"),
                  t("generalProvisionsContent3"),
                  t("generalProvisionsContent4"),
                  t("generalProvisionsContent5"),
                  t("generalProvisionsContent6"),
                ],
              },
              {
                header: t("userRegistrationHeader"),
                content: [
                  t("userRegistrationContent1"),
                  t("userRegistrationContent2"),
                  t("userRegistrationContent3"),
                ],
              },
              {
                header: t("productPurchaseProcedureHeader"),
                content: [
                  t("productPurchaseProcedureContent1"),
                  t("productPurchaseProcedureContent2"),
                ],
              },
              {
                header: t("rightsAndObligationsHeader"),
                content: [
                  t("rightsAndObligationsContent1"),
                  t("rightsAndObligationsContent2"),
                  t("rightsAndObligationsContent3"),
                  t("rightsAndObligationsContent4"),
                  t("rightsAndObligationsContent5"),
                  t("rightsAndObligationsContent6"),
                  t("rightsAndObligationsContent7"),
                  t("rightsAndObligationsContent8"),
                  t("rightsAndObligationsContent9"),
                  t("rightsAndObligationsContent10"),
                  t("rightsAndObligationsContent11"),
                  t("rightsAndObligationsContent12"),
                  t("rightsAndObligationsContent13"),
                ],
              },
              {
                header: t("liabilityHeader"),
                content: [
                  t("liabilityContent1"),
                  t("liabilityContent2"),
                  t("liabilityContent3"),
                ],
              },
              {
                header: t("propertyRightsHeader"),
                content: [
                  t("propertyRightsContent1"),
                  t("propertyRightsContent2"),
                ],
              },
              {
                header: t("finalProvisionsHeader"),
                content: [
                  t("finalProvisionsContent1"),
                  t("finalProvisionsContent2"),
                  t("finalProvisionsContent3"),
                  t("finalProvisionsContent4"),
                  t("finalProvisionsContent5"),
                  t("finalProvisionsContent6"),
                ],
              },
            ]}
          />
          <LandingFooterContent cardClassName="border border-[#E6EFF2] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] rounded-[20px]" />
        </div>
      </LandingContainer>
    </main>
  );
}
