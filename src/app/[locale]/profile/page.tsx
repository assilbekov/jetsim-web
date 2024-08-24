import { FAQ } from "@/components/FAQ";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingSupport } from "@/components/LandingSupport";
import { Navbar } from "@/components/Navbar";
import { ProfileCards } from "@/components/ProfileCards";
import { Recommendations } from "@/components/Recommendations";
import { ProfileScreenEvent } from "@/components/ScreenEvents/TermsScreenEvent";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "User Profile | JetSim eSIM Cards",
  description:
    "Manage your JetSim account and personal preferences with ease on our user profile page. Update your information and explore our eSIM services tailored for global travelers.",
};

export default function Index({
  params,
}: {
  params: { placeId: string; locale: string };
}) {
  unstable_setRequestLocale(params?.locale);
  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <ProfileScreenEvent />
      <div className="bg-text-900 sm:bg-[#F8F9FB] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] pb-4 md:pb-5">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar howToHref="/#how-to" locale={params?.locale} />
          </div>
        </LandingContainer>
      </div>
      <div className="flex flex-col bg-[#F8F9FB] gap-4 md:gap-6">
        <ProfileCards locale={params?.locale} />
        <LandingSupport />
        <Recommendations locale={params?.locale} />
        <FAQ />
        <LandingFooter locale={params?.locale} />
      </div>
    </main>
  );
}
