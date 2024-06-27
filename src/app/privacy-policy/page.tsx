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
            title="Privacy policy"
            lastUpdated="June 20, 2024"
            infoBlocks={[
              {
                header: "",
                content: [
                  `GIBCO. LTD., operating under the name Jetsim (hereinafter referred to as "Jetsim," "we," "our"), cares about your privacy. This Privacy Policy describes how we collect, use, share, and protect your personal information ("Personal Data"). This Privacy Policy also discusses your rights and choices regarding your personal information, and how you can contact us and get answers to your questions.`,
                  `By registering an account or otherwise using or visiting Jetsim's website, application, product, software, tool, data channel, and/or service (together, the "Service"), you acknowledge that you understand and accept the terms of this Privacy Policy.`,
                  "This Privacy Policy outlines how we collect, use, disclose, store, and protect your personal information. Please read this Privacy Policy carefully.",
                  <>
                    <p>Contents</p>
                    <ol className="list-decimal ml-8">
                      <li>Applicability of this Privacy Policy</li>
                      <li>
                        How We Collect, Disclose, and Use Personal Information
                      </li>
                      <li>Information Collected</li>
                      <li>Data Storage</li>
                      <li>How We Use Information</li>
                      <li>How We Share Personal Information</li>
                      <li>Your Rights</li>
                      <li>Data Transfer and International Data Transfer</li>
                      <li>Security</li>
                      <li>Changes to the Privacy Policy</li>
                      <li>Children</li>
                      <li>Contact Information</li>
                    </ol>
                  </>,
                ],
              },
              {
                header: "1. Applicability of this Privacy Policy",
                content: [
                  `This Privacy Policy applies to users of Jetsim services worldwide, including users of mobile applications, the Partner platform, websites, features, and other Jetsim services, online and offline interactions with Jetsim (hereinafter, "Services").`,
                  <>
                    <p>
                      This Privacy Policy describes how Jetsim collects and uses
                      data. It applies to all Jetsim users worldwide, except in
                      cases where they use a service for which a separate
                      privacy notice applies.
                    </p>
                    <p>
                      This Privacy Policy specifically applies to the following
                      subjects:
                    </p>
                    <ul className="list-disc ml-4">
                      <li>
                        End Users: Individuals who use the Services and interact
                        directly with them through their Jetsim account for
                        personal purposes.
                      </li>
                      <li>
                        Business Users: Jetsim provides services to
                        organizations (hereinafter, "Business Users") that
                        directly or indirectly provide us with personal
                        information about End Customers in connection with their
                        own business activities.
                      </li>
                      <li>
                        End Customers: Individuals who use services ordered by
                        other Jetsim account holders, such as when conducting
                        business or otherwise transacting with a Business User.
                      </li>
                    </ul>
                  </>,
                ],
              },
              {
                header:
                  "2. How We Collect, Disclose, and Use Personal Information",
                content: [
                  "We collect information about you in various ways depending on how you interact with us and our Services, including:",
                  "• Directly from you: when you provide it to us, such as when creating an account, subscribing to newsletters, placing an order, making a purchase, or contacting us by phone, email, or other means.",
                  "• Automatically: using cookies, server logs, and similar technologies when you interact with our Services and/or email—where permitted by law or with your consent.",
                  "• From other sources: for example, from our affiliates, business partners, service providers, social networks, and other third parties, as well as public sources.",
                  "To ensure an appropriate level of data protection, Jetsim maintains the confidentiality of information systems in accordance with legal requirements, the level of confidentiality, and business importance.",
                  "«Data Controller» is an entity that determines the purposes and means of data processing.",
                  "«Data Processor» is an entity acting on behalf and under the direction of the controller regarding the processing of personal information.",
                ],
              },
              {
                header: "3. Information Collected",
                content: [
                  "Jetsim assumes the role of a data controller, determining the purposes and means of processing personal data. As a data controller, Jetsim is responsible for ensuring that personal data is processed in accordance with applicable data protection laws. Jetsim's activities as a data controller include:",
                  "• Direct Registration: Jetsim is the data controller when users register directly with the service.",
                  "Main activities:",
                  "• Providing Services: using data to provide Jetsim's products and services.",
                  "• Fraud Prevention: monitoring and detecting fraudulent transactions and activities.",
                  "• Compliance with Legal Norms: complying with applicable financial, legal, and regulatory requirements.",
                  "• Improving Services: developing and improving products and services based on data analysis.",
                ],
              },
              {
                header: "4. Jetsim as a Data Processor",
                content: [
                  "When Jetsim provides services on behalf and under the direction of a Business User, the company acts as a data processor. This includes:",
                  "• Business-to-Business Context for End Customers: Jetsim functions as a data processor concerning End Customers and Business Users in a business-to-business context.",
                  "• Providing Services for Business Users: following Business Users' directions, such as account creation and eSIM card issuance to End Customers.",
                  "As a data processor, we recommend users familiarize themselves with the privacy policy of the respective data controller (business user), which provides information on how their data is processed and protected. Jetsim strictly follows the data controller's instructions and is committed to maintaining the confidentiality and security of processed data in accordance with applicable data protection laws and contractual obligations.",
                ],
              },
              {
                header: "Information Collected",
                content: [
                  "Below are examples of the types of information we collect in various contexts and how we use them.",
                ],
              },
              {
                header: "Data Storage",
                content: [
                  "We retain your personal information only for as long as necessary to achieve the purposes outlined in this Privacy Policy, including compliance with legal, accounting, and reporting requirements, unless a longer period is required or permitted by law. To determine the appropriate retention period for personal information, we consider the volume, nature, and level of confidentiality of the information, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your information, whether we can achieve those purposes through other means, and applicable legal requirements.",
                ],
              },
              {
                header: "How We Use Personal Information",
                content: [
                  "Beyond the purposes and methods described above, we also use information in the following ways:",
                  "• To identify you when you visit our websites.",
                  "• To provide products and services and process return requests.",
                  "• To improve our service and product offerings.",
                  "• To facilitate the order placement process.",
                  "• To conduct analyses.",
                  "• To communicate with you, for example, to answer your inquiries, requests, issue reports, or feedback and follow up on them.",
                  "• To send marketing and promotional materials, including information about our products, services, sales, and promotions or those of our business partners.",
                  "• To detect and protect against harmful, misleading, fraudulent, and illegal activities, including policy and term violations, security incidents, and damage to the rights, property, and safety of our company and our users, employees, and others.",
                  "• To debug, identify, and fix errors that impair the intended functionality of our website and services.",
                  "• To comply with legal and regulatory obligations, establish or exercise our rights, and protect against claims.",
                  "• For internal administrative purposes, as well as in dealings with third parties.",
                  "• For other purposes that you may consent to from time to time (which we may request).",
                  "While the above sections outline the main purposes for data collection, it is often the case that there may be multiple purposes. For instance, if you make an online purchase, we collect your information to fulfill our contract with you, but we also retain it for legitimate interests in keeping this information post-transaction to quickly address any questions regarding your order. Therefore, our processing and collecting your information in different instances depend on your consent, contract necessities, legal requirements, and/or legitimate interests in running our business.",
                ],
              },
              {
                header: "How We Share Personal Information",
                content: [
                  "Besides the specific scenarios discussed in other sections of the Privacy Policy, we may disclose personal information as follows:",
                  "• Affiliates and Acquisition Operations: We may transfer information to our corporate affiliates (e.g., parent and subsidiary companies, joint ventures, and other entities under common control). If another company acquires or plans to acquire our company, business, or assets, we will also transfer information to that company, including during negotiations.",
                  "• Disclosure Without Consent: We may disclose information in response to a court order, subpoena, or court directive, as well as in connection with legal processes or to comply with relevant laws. We may also share your information to establish and exercise our rights, defend against claims, investigate, prevent, and take action against potential illegal activities, suspected fraud, threats to personal safety or property, and violations of our policies, and to fulfill your request to ship products and render services through a third-party intermediary.",
                  "• Partner Promotions: We may host promotions with third-party partners. If you decide to participate in a promotion sponsored by a third party, the information you provide will be transmitted to us and to that partner. The use of your information by the partner is not governed by this privacy policy.",
                  "• Service Providers: We may transfer your information to service providers. Service providers help, among other things, administer our site and provide services for smooth business operations, provide technical support, process payments, and assist in order fulfillment.",
                  "• Disclosure With Your Consent: We may disclose your information to third parties if we have received your consent or direction to do so.",
                ],
              },
              {
                header: "Your Rights",
                content: [
                  "Depending on your location and applicable laws, you may have the following rights:",
                  "• Access to Your Data: The right to request that we disclose to you the personal information we collect, use, or disclose about you, as well as the nature of our data operations. In certain limited circumstances, you may also request your personal information in a portable, machine-readable format.",
                  "• Review and Request Corrections: The right to request that we correct inaccuracies in the personal information we hold about you. We rely on you to update and correct your personal information. Our site allows you to change or delete your account profile. If our site does not allow the update or correction of certain information, you may contact us at the address provided below to request changes. Note: We may retain uncorrected information in backup files as required by law.",
                  "• Deletion of Personal Information: The right to request that we delete the personal information we have collected about you.",
                  "• Withdraw Consent at Any Time: The right to withdraw consent for processing your personal information if you have previously given it.",
                  "• Object to Processing of Personal Information: The right to object to the processing of personal information if processing is carried out on a legal basis other than consent.",
                  "Note: Not all the above rights are absolute; the applicability of rights depends on the circumstances. In some cases, we may fulfill a request to a limited extent or deny the request if permitted or required by law or if we cannot properly verify your identity. We do not discriminate against individuals exercising their privacy rights under applicable law. For more details on specific rights, see this section.",
                  "To submit a request to exercise any of the rights described above or appeal a decision we made regarding a data subject rights request, contact us using the information below.",
                  "Note: As required by law, we will need to verify your identity. Depending on the request, we may request information such as your name, your last purchase from us, or the date of your last purchase. We may also ask you to sign a declaration confirming your identity. We will make reasonable efforts to fulfill your request to provide, correct, or delete personal information about you in our records.",
                  "In certain cases, you may appoint an authorized representative to submit requests to exercise certain privacy rights on your behalf. If you are an authorized representative submitting a request on behalf of an individual, you must attach a signed document confirming that you can act on behalf of that person.",
                ],
              },
              {
                header: "How to Unsubscribe from Marketing Emails?",
                content: [
                  "You can unsubscribe from receiving marketing emails by using the unsubscribe feature in the profile settings. To change settings, log into your account and go to profile settings. Enable or disable the 'Receive marketing mail' option. If turned off, your email will be unsubscribed from marketing emails promptly.",
                  "If you have questions about how to opt-out of Jetsim's marketing emails, write to us at support@jetsim.app.",
                ],
              },
              {
                header: "How to Delete an Account?",
                content: [
                  "You can delete your account using the 'Delete Account' function in the profile settings. Log into your account and go to profile settings. Click on 'Delete Account' and confirm your intention. We will process the request without delay or within one month of receipt if subject to special requirements.",
                  "Please note that we may still need to verify your identity and your relationship with us before we can process the request.",
                ],
              },
              {
                header:
                  "When does Jetsim perform data processing after receiving a request to delete or object to processing?",
                content: [
                  "Under certain circumstances, the law may require Jetsim to retain and process your Personal Data even after a request to delete or object to process. For example, Jetsim is required to retain certain personal information to meet legal obligations under the rules regarding payment transaction records.",
                ],
              },
              {
                header: "Data Transfer and International Data Transfer",
                content: [
                  "The Service is owned by Jetsim and may be accessed in Europe and abroad. Therefore, your information may be processed abroad, where privacy laws may be less stringent than those in your country. Nevertheless, we process personal information by applying, as far as possible, the same privacy principles applicable under the laws of the country where we originally received your information. By submitting your personal information, you consent to its transfer, storage, and processing in a country other than your country of residence, including the United States of America. For further information on our measures to apply privacy principles across jurisdictions, you may contact us using the information below.",
                ],
              },
              {
                header: "Security",
                content: [
                  "We follow industry-standard practices to protect your personal information. No method of data transmission over the Internet, through mobile technologies, or electronic storage is completely secure. Given the above and despite our efforts to use physical, electronic, and procedural security measures to protect the confidentiality of information collected online, we cannot guarantee its absolute security.",
                  "Jetsim users are responsible for protecting their passwords and account credentials. If you believe your interaction with us is no longer secure (e.g., you believe your account security has been compromised), please notify us immediately via email at support@jetsim.app.",
                ],
              },
              {
                header: "Changes to the Privacy Policy",
                content: [
                  "We reserve the right to modify this Privacy Policy's terms at any time. If changes are significant or affect how we use your personal information, we will notify you by posting a notice of such changes here on our main page or by sending you an email. We recommend reviewing this Policy whenever you visit one of our websites or applications. The Privacy Policy's effective date and the last modification date are listed herein. The effective date is the date the current version comes into force, and the last modification date indicates the latest substantial change to the current version.",
                ],
              },
              {
                header: "11. Children",
                content: [
                  "Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from minors under 16 without parental consent. Children under 13 should not provide us with their personal information.",
                ],
              },
              {
                header: "12. Contact Information",
                content: [
                  `If you have any questions, comments, appeals, or complaints about our privacy measures or need access to this Privacy Policy in an alternative format due to a disability, contact us at the appropriate address below. We will try to respond to your request and provide additional privacy-related information.
                • support@jetsim.app.`,
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
