import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooter } from "@/components/LandingFooter";
import { LandingSupport } from "@/components/LandingSupport";
import { Navbar } from "@/components/Navbar";
import { PageNotFoundBlock } from "@/components/PageNotFoundBlock";
import { Recommendations } from "@/components/Recommendations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | JetSim eSIM Cards",
  description:
    "Oops! The page you are looking for cannot be found. Explore JetSim for the best global travel eSIM solutions and stay connected worldwide.",
};

export default function NotFoundPage({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <main className="bg-[#F8F9FB] bg-white-900 overflow-hidden sm:pb-11">
      <div className="bg-text-900 sm:bg-[#F8F9FB] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] pb-4 md:pb-5">
        <LandingContainer className="px-4 xxs:px-6">
          <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
            <Navbar
              howToHref="/#how-to"
              faqHref="/#faq"
              locale={params.locale}
            />
          </div>
        </LandingContainer>
      </div>
      <div className="flex flex-col bg-[#F8F9FB] sm:gap-[10px] md:gap-6 lg:gap-[10px]">
        <PageNotFoundBlock />
        <Recommendations />
        <LandingSupport />
        <LandingFooter />
      </div>
    </main>
  );
}
