import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooterContent } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import { TermsTextBlock } from "@/components/TermsTextBlock";
import { TermsScreenEvent } from "./_components/TermsScreenEvent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | JetSim eSIM Cards",
  description:
    "Explore JetSim's terms of service governing the use of our eSIM cards for seamless global connectivity. Understand our guidelines and obligations to ensure a secure and enjoyable user experience.",
};

export default function Index() {
  return (
    <main className="bg-[#F8F9FB] overflow-hidden">
      <TermsScreenEvent />
      <LandingContainer className="px-6 sm:px-8 pb-11">
        <div className="flex flex-col gap-6 pt-2 md:gap-9 xxs:pt-4 md:pt-6">
          <Navbar howToHref="/#how-to" faqHref="/#faq" />
        </div>
        <div className="flex flex-col gap-4 md:gap-6 mt-4 sm:mt-6">
          <TermsTextBlock
            title="User Agreement"
            lastUpdated="June 20, 2024"
            infoBlocks={[
              {
                header: "General Provisions",
                content: [
                  "1.1. These Terms and Conditions constitute a legally binding agreement (“Agreement”) made between you (the “User“) and GIBCO. LTD (hereinafter referred to as 'Jetsim,' 'we,' 'our'), concerning your purchase of an international data plan relating to a prepaid eSIM, for use on your personal device), from Jetsim.",
                  "1.2. Jetsim shall make available Data Plans which relate to specific countries. Jetsim reserves the right to restrict the availability of such Data Plans in some jurisdictions.",
                  "1.3. By availing of the Service, the User acknowledges that they have an unlocked, eSIM-compatible Device, which is required in order to access the eSIM.",
                  "1.4. By registering on the Website or purchasing the Products, the User acknowledges their agreement with the terms outlined in this Agreement.",
                  "1.5. The Website Administration reserves the right to amend this Agreement without prior notification to Users. The updated version of the Agreement comes into effect from the moment it is published on the Website.",
                  "1.6. The User’s access to and use of the Website must comply with Google's Acceptable Use Policy and all applicable local, state, national, and international laws and regulations.",
                ],
              },
              {
                header: "User Registration",
                content: [
                  "2.1. To purchase Products on the Website, the User must complete the registration process, providing accurate and complete information about themselves.",
                  "2.2. The User is responsible for the accuracy of the information provided and must promptly update it in the event of any changes.",
                  "2.3. The User agrees not to use false identities or impersonate any other person or entity or falsely state or otherwise misrepresent their affiliation with a person or entity.",
                ],
              },
              {
                header: "Product Purchase Procedure",
                content: [
                  "3.1. To place an order, the User selects the desired Product on the Website and completes the order form.",
                  "3.2. Payment for the Products must be made in accordance with the terms stated on the Website.",
                ],
              },
              {
                header: "Rights and Obligations of the Parties",
                content: [
                  "4.1. The User has the right to:",
                  "4.1.1. Use the Website in accordance with the terms of this Agreement.",
                  "4.1.2. Purchase the Products presented on the Website.",
                  "4.1.3. Contact the Website's customer support service for any questions regarding the use of the Website and the purchase of Products.",
                  "4.2. The User is obliged to:",
                  "4.2.1. Not use the Website for illegal purposes.",
                  "4.2.2. Not take any actions aimed at destabilizing the operation of the Website.",
                  "4.2.3. Comply with the applicable laws of their jurisdiction when using the Website and purchasing the Products.",
                  "4.2.4. Not engage in any activity that could harm the performance or functionality of any service or server, or the networks connected to any service or server.",
                  "4.3. The Website Administration has the right to:",
                  "4.3.1. Restrict User access to the Website in case of violation of this Agreement.",
                  "4.3.2. Modify or remove any information provided by the User if it violates the laws of their jurisdiction or the rights of third parties.",
                  "4.3.3. Gather necessary information about the User, in accordance with the Privacy Policy, for the purposes of providing services and for the security of both the User and Website.",
                ],
              },
              {
                header: "Liability",
                content: [
                  "5.1. The Website Administration is not liable for any damage caused to the User as a result of using or being unable to use the Website.",
                  "5.2. The User is responsible for the accuracy of the information provided during registration and order placement.",
                  "5.3. In case of violation of the terms of this Agreement, the Website Administration has the right to take any corresponding measures in accordance with the applicable laws of the User's jurisdiction.",
                ],
              },
              {
                header: "Property Rights",
                content: [
                  "6.1. Except as otherwise indicated, the eSIM is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Application (collectively, the “Content”) and the trade marks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.",
                  "6.2. Except as expressly provided in these Terms and Conditions, no part of the eSIM, no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.",
                ],
              },
              {
                header: "Final Provisions",
                content: [
                  "7.1. This Agreement is governed by the laws of the jurisdiction in which the Website operates, unless otherwise stated.",
                  "7.2. The Service are not intended for use by any person or entity in any jurisdiction or country where such use would be contrary to relevant law or regulation. Accordingly, persons who choose to access the Service from locations that prohibit such use do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.",
                  "7.3. All disputes and disagreements arising in connection with the execution of this Agreement shall be resolved through negotiations. If the parties fail to reach an agreement, the disputes shall be resolved in accordance with the applicable laws of the jurisdiction in which the Website operates.",
                  "7.4. If any provision of this Agreement is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will continue in full force and effect.",
                  "7.5. The User acknowledges and agrees that Google's requirements, including but not limited to those found in their Acceptable Use Policy, must be complied with in all aspects of accessing and using the Website.",
                  "7.6. By using the Website or purchasing Products, the User acknowledges that they have read, understood, and agreed to all terms and conditions stipulated in this Agreement.",
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
