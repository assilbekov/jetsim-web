import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooterContent } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import { TermsTextBlock } from "@/components/TermsTextBlock";

export default function Index() {
  return (
    <main className="bg-[#F8F9FB] overflow-hidden">
      <LandingContainer className="px-6 sm:px-8 pb-11">
        <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
          <Navbar howToHref="/#how-to" faqHref="/#faq" />
        </div>
        <div className="flex flex-col gap-4 md:gap-6 mt-4 sm:mt-6">
          <TermsTextBlock
            title="Terms of service"
            lastUpdated="2024-03-25"
            infoBlocks={[
              {
                header: "Introduction",
                content: [
                  "1.1 Terms. Thank you for choosing us. Before starting, please read these Terms and Conditions (“Terms”) carefully. Among other things, the Terms cover the scope of your use of and access to (i) Software (as described below) or website (“Website”) provided by Saily and (ii) eSIM with data service plans (“Data plans”) based on eSIM technology and other related services provided by our Technology Partner (as described below) and sold by Saily (collectively, the “Service” or “Services”).",
                  "1.2 Updates to the Terms. Services might be introducing new features or modifying current ones constantly. In addition, we may need to update the Terms by amending them from time to time (i) to comply with the law; (ii) to comply with orders/recommendations of regulatory authorities; (iii) to add additional functionality, services, features, technologies and/or benefits, or to remove the old ones; (iv) to correct errors and bugs; (v) to clarify the Terms; (vi) to prevent abuse or harm; (vii) for any other valid reason (e.g., for security reasons). You understand and agree that it is your obligation to review the Terms from time to time in order to stay informed on current rules and obligations. Notification of any material changes to the Terms that affect your rights or obligations will be provided in advance of such changes by reasonable means (e.g., via email). Unless it is stated by us otherwise, each update of the Terms comes into force as of the moment when amended Terms are published. Your continued use of the Services will be deemed acceptance thereof. You can also end your relationship with us at any time after the effective date of the updated Terms by closing your Account and/or not accessing Websites and Services.",
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
