import { FAQReferralForInvited } from "@/components/FAQ/FAQReferralForInvited";
import { InviteFriendsHowItWorksInvited } from "@/components/InviteFriendsHowItWorks";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar/Navbar";
import { AcceptInvitationHeroBlock } from "@/components/ProfileInviteFriends/AcceptInvitationHeroBlock";
import { Recommendations } from "@/components/Recommendations";
import { WhyBlock } from "@/components/WhyBlock";
import { PageProps } from "@/models/PageProps";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: PageProps) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "PagesMetadata",
  });

  return {
    title: t("inviteFriendsTitle"),
    description: t("inviteFriendsDescription"),
  };
}

export default function Index({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params?.locale);
  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <div className="bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] sm:mb-12">
        <LandingContainer className="p-6">
          <Navbar howToHref="/#how-to" locale={params?.locale} />
          <AcceptInvitationHeroBlock />
        </LandingContainer>
      </div>
      <div className="flex flex-col sm:gap-4 md:gap-6">
        <InviteFriendsHowItWorksInvited />
        <Recommendations locale={params?.locale} page="Main" />
        <WhyBlock showSecurePaymentMethods={false} />
        <FAQReferralForInvited />
        <LandingFooter locale={params?.locale} />
      </div>
    </main>
  );
}
