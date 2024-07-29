import { FAQ } from "@/components/FAQ";
import { HowToGetBonusFromInvitingFriends } from "@/components/HowToGetBonusFromInvitingFriends";
import { InviteFriendsHero } from "@/components/InviteFriendsHero";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingSupport } from "@/components/LandingSupport";
import { Navbar } from "@/components/Navbar";
import { ProfileCards } from "@/components/ProfileCards";
import { ProfileInviteFriends } from "@/components/ProfileInviteFriends";
import { Recommendations } from "@/components/Recommendations";
import { ProfileScreenEvent } from "@/components/ScreenEvents/TermsScreenEvent";
import { Metadata } from "next";

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
  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <LandingContainer className="p-6 bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]">
        <Navbar howToHref="/#how-to" />
      </LandingContainer>
      <ProfileScreenEvent />
      <div className="flex flex-col bg-[#F8F9FB] gap-4 md:gap-6">
        <ProfileInviteFriends />
        <ProfileCards />
        <LandingSupport />
        <Recommendations />
        <FAQ />
        <LandingFooter />
      </div>
    </main>
  );
}
