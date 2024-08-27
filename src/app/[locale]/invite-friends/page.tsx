import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
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
      {/* <InviteFriendsHero /> */}
      {/* <MainScreenEvent /> */}
      <div className="bg-text-900 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] mb-4 md:mb-5 mt-10">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar locale={params?.locale} />
            <Hero locale={params?.locale} page="Main" />
          </div>
        </LandingContainer>
      </div>
      <div className="flex flex-col sm:gap-4 md:gap-6">
        {/* <HowToGetBonusFromInvitingFriends /> */}
        <Recommendations locale={params?.locale} page="Main" />
        <WhyBlock />
        <FAQ />
        <LandingFooter locale={params?.locale} />
      </div>
    </main>
  );
}
