import { AllDestinations } from "@/components/AllDestinations";
import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import { AllDestinationsScreenEvent } from "@/components/ScreenEvents/AllDestinationsEvent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global eSIM Cards for All Destinations | JetSim",
  description:
    "Discover JetSim's global eSIM cards for seamless connectivity to all destinations. Explore our diverse eSIM plans designed for international travelers, ensuring reliable internet access wherever you roam. Stay connected effortlessly with JetSim's innovative eSIM solutions.",
};

export default function Index() {
  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <AllDestinationsScreenEvent />
      <div className="bg-text-900 sm:bg-[#F8F9FB] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] pb-4 md:pb-5">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar howToHref="/#how-to" faqHref="/#faq" />
          </div>
        </LandingContainer>
      </div>
      <div className="flex flex-col bg-[#F8F9FB] sm:gap-[10px] md:gap-6 lg:gap-[10px]">
        <AllDestinations page="All-Destinations" />
        <LandingFooter />
      </div>
    </main>
  );
}
