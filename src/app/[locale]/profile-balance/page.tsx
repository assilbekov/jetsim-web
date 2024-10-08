import { FAQ } from "@/components/FAQ";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingSupport } from "@/components/LandingSupport";
import { Navbar } from "@/components/Navbar/Navbar";
import { ProfileCards } from "@/components/ProfileCards";
import { ProfileInviteFriends } from "@/components/ProfileInviteFriends";
import { Recommendations } from "@/components/Recommendations";
import { ProfileScreenEvent } from "@/components/ScreenEvents/TermsScreenEvent";
import { PageProps } from "@/models/PageProps";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: PageProps) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "PagesMetadata",
  });

  return {
    title: t("profileBalanceTitle"),
    description: t("profileBalanceDescription"),
  };
}

export default function Index({
  params,
}: {
  params: { placeId: string; locale: string };
}) {
  unstable_setRequestLocale(params?.locale);
  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <div className="bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]">
        <LandingContainer className="p-6">
          <Navbar howToHref="/#how-to" locale={params?.locale} />
        </LandingContainer>
      </div>
      <ProfileScreenEvent />
      <div className="flex flex-col bg-[#F8F9FB] gap-4 md:gap-6">
        <ProfileInviteFriends />
        <ProfileCards locale={params?.locale} />
        <LandingSupport />
        <Recommendations locale={params?.locale} page="Main" />
        <FAQ />
        <LandingFooter locale={params?.locale} />
      </div>
    </main>
  );
}
