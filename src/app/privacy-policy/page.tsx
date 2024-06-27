import { LandingContainer } from "@/components/LandingContainer";
import { LandingFooterContent } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import { TermsTextBlock } from "@/components/TermsTextBlock";

const TableCell = ({ children }: { children: React.ReactNode }) => {
  return <td className="w-1/3 align-top py-2 px-4">{children}</td>;
};

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
                  `By registering an account or otherwise using or visiting Jetsim&apos;s website, application, product, software, tool, data channel, and/or service (together, the "Service"), you acknowledge that you understand and accept the terms of this Privacy Policy.`,
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
                        organizations (hereinafter, &quot;Business Users&quot;)
                        that directly or indirectly provide us with personal
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
                  <>
                    <p>
                      We collect information about you in various ways depending
                      on how you interact with us and our Services, including:
                    </p>
                    <ul className="list-disc ml-4">
                      <li>
                        Directly from you: when you provide it to us, such as
                        when creating an account, subscribing to newsletters,
                        placing an order, making a purchase, or contacting us by
                        phone, email, or other means.
                      </li>
                      <li>
                        Automatically: using cookies, server logs, and similar
                        technologies when you interact with our Services and/or
                        email—where permitted by law or with your consent.
                      </li>
                      <li>
                        From other sources: for example, from our affiliates,
                        business partners, service providers, social networks,
                        and other third parties, as well as public sources.
                      </li>
                    </ul>
                  </>,
                  "To ensure an appropriate level of data protection, Jetsim maintains the confidentiality of information systems in accordance with legal requirements, the level of confidentiality, and business importance.",
                  "«Data Controller» is an entity that determines the purposes and means of data processing.",
                  `"Data Processor" is an entity acting on behalf and under the direction of the controller regarding the processing of personal information`,
                  <>
                    <h6 className="text-text-600">
                      Jetsim as a Data Controller
                    </h6>
                    <p>
                      Jetsim assumes the role of a data controller, determining
                      the purposes and means of processing personal data. As a
                      data controller, Jetsim is responsible for ensuring that
                      personal data is processed in accordance with applicable
                      data protection laws. Jetsim&apos;s activities as a data
                      controller include:
                    </p>
                    <ul className="list-disc ml-4">
                      <li>
                        Direct Registration: Jetsim is the data controller when
                        users register directly with the service.
                      </li>
                    </ul>
                    <p>Main activities:</p>
                    <ul className="list-disc ml-4">
                      <li>
                        Providing Services: using data to provide Jetsim&apos;s
                        products and services.
                      </li>
                      <li>
                        Fraud Prevention: monitoring and detecting fraudulent
                        transactions and activities.
                      </li>
                      <li>
                        Compliance with Legal Norms: complying with applicable
                        financial, legal, and regulatory requirements.
                      </li>
                      <li>
                        Improving Services: developing and improving products
                        and services based on data analysis.
                      </li>
                    </ul>
                  </>,
                  <>
                    <h6 className="text-text-600">
                      Jetsim as a Data Processor
                    </h6>
                    <p>
                      When Jetsim provides services on behalf and under the
                      direction of a Business User, the company acts as a data
                      processor. This includes:
                    </p>
                    <ul className="list-disc ml-4">
                      <li>
                        Business-to-Business Context for End Customers: Jetsim
                        functions as a data processor concerning End Customers
                        and Business Users in a business-to-business context.
                      </li>
                      <li>
                        Providing Services for Business Users: following
                        Business Users&apos; directions, such as account
                        creation and eSIM card issuance to End Customers.
                      </li>
                    </ul>
                  </>,
                  "As a data processor, we recommend users familiarize themselves with the privacy policy of the respective data controller (business user), which provides information on how their data is processed and protected. Jetsim strictly follows the data controller&apos;s instructions and is committed to maintaining the confidentiality and security of processed data in accordance with applicable data protection laws and contractual obligations.",
                ],
              },
              {
                header: "3. Information Collected",
                content: [
                  <p key="inf">
                    Below are examples of the types of information we collect in
                    various contexts and how we use them.
                  </p>,
                  <table key="table" className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="w-1/3 align-top py-2 px-4">Context</th>
                        <th className="w-1/3 align-top py-2 px-4">
                          Types of Data
                        </th>
                        <th className="w-1/3 align-top py-2 px-4">
                          Main Purpose of Data Collection and Use
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <TableCell>Account Registration</TableCell>
                        <TableCell>
                          When you create an account, we collect your name and
                          contact information, including your email address. We
                          also collect information regarding your activities
                          when you log into the account.
                        </TableCell>
                        <TableCell>
                          We have a legitimate interest in providing our users
                          with account-related features. Accounts facilitate
                          order placement and allow you to track transaction
                          history and settings. We also process this information
                          to fulfill our contract with you.
                        </TableCell>
                      </tr>
                      <tr>
                        <TableCell>Business Users</TableCell>
                        <TableCell>
                          We collect the name and contact information, including
                          email address, phone number, and physical address, of
                          the employees of our Business Users we may interact
                          with.
                        </TableCell>
                        <TableCell>
                          We have a legitimate interest in contacting and
                          communicating with our clients on regular business
                          administration matters, such as project management,
                          service provision, and billing.
                        </TableCell>
                      </tr>
                      <tr>
                        <TableCell>
                          Necessary Online Tracking Technologies
                        </TableCell>
                        <TableCell>
                          We use cookies. &quot;Cookies&quot; are small files
                          with information that a site stores on a
                          computer&apos;s hard drive when browsing the site.
                          These tracking technologies may collect information
                          about your browser type, operating system, IP address
                          (an identifier automatically assigned to your computer
                          when using the Internet), domain name, clicks,
                          referral site, and/or date and time stamps regarding
                          visitors.
                        </TableCell>
                        <TableCell>
                          We have a legitimate interest in ensuring the
                          efficient operation of the website.
                        </TableCell>
                      </tr>
                      <tr>
                        <TableCell>Demographic Information</TableCell>
                        <TableCell>
                          We collect personal information, such as your age and
                          location.
                        </TableCell>
                        <TableCell>
                          We have a legitimate interest in analyzing user
                          characteristics and providing personalized services.
                        </TableCell>
                      </tr>
                      <tr>
                        <TableCell>Feedback and Support</TableCell>
                        <TableCell>
                          If you leave feedback or seek support, we collect your
                          name and email address, as well as other content you
                          send, to respond to you.
                        </TableCell>
                        <TableCell>
                          We have a legitimate interest in receiving and
                          responding to your feedback, issue reports, and
                          inquiries.
                        </TableCell>
                      </tr>
                      <tr>
                        <TableCell>Mobile Devices</TableCell>
                        <TableCell>
                          We collect information from your mobile device, such
                          as unique identifiers transmitted by the device when
                          visiting a site.
                        </TableCell>
                        <TableCell>
                          We have a legitimate interest in identifying unique
                          visitors and tracking site visits.
                        </TableCell>
                      </tr>
                      <tr>
                        <TableCell>Placing Orders</TableCell>
                        <TableCell>
                          When you place an order, we collect your name, billing
                          address, shipping address, email address, phone
                          number, and payment card number.
                        </TableCell>
                        <TableCell>
                          We use this information to fulfill the contract of
                          providing our services.
                        </TableCell>
                      </tr>
                      <tr>
                        <TableCell>Partner Promotions</TableCell>
                        <TableCell>
                          We collect information you provide as part of a
                          co-branded promotion with another company.
                        </TableCell>
                        <TableCell>
                          We have a legitimate interest in conducting
                          promotions.
                        </TableCell>
                      </tr>
                      <tr>
                        <TableCell>Surveys</TableCell>
                        <TableCell>
                          When you participate in a survey, we collect
                          information your provide during the survey. If a
                          survey is conducted by a third-party service provider,
                          the collection, use, and disclosure of your
                          information is subject to the privacy policy of that
                          third-party provider.
                        </TableCell>
                        <TableCell>
                          We have a legitimate interest in analyzing your
                          opinion and collecting information related to our
                          organization.
                        </TableCell>
                      </tr>
                    </tbody>
                  </table>,
                  "Jetsim assumes the role of a data controller, determining the purposes and means of processing personal data. As a data controller, Jetsim is responsible for ensuring that personal data is processed in accordance with applicable data protection laws. Jetsim&apos;s activities as a data controller include:",
                  "• Direct Registration: Jetsim is the data controller when users register directly with the service.",
                  "Main activities:",
                  "• Providing Services: using data to provide Jetsim&apos;s products and services.",
                  "• Fraud Prevention: monitoring and detecting fraudulent transactions and activities.",
                  "• Compliance with Legal Norms: complying with applicable financial, legal, and regulatory requirements.",
                  "• Improving Services: developing and improving products and services based on data analysis.",
                ],
              },
              {
                header: "4. Data Storage",
                content: [
                  "We retain your personal information only for as long as necessary to achieve the purposes outlined in this Privacy Policy, including compliance with legal, accounting, and reporting requirements, unless a longer period is required or permitted by law. To determine the appropriate retention period for personal information, we consider the volume, nature, and level of confidentiality of the information, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your information, whether we can achieve those purposes through other means, and applicable legal requirements.",
                ],
              },
              {
                header: "5. How We Use Personal Information",
                content: [
                  <>
                    <p>
                      Beyond the purposes and methods described above, we also
                      use information in the following ways:
                    </p>
                    <ul className="list-disc ml-4">
                      <li>To identify you when you visit our websites.</li>
                      <li>
                        To provide products and services and process return
                        requests.
                      </li>
                      <li>To improve our service and product offerings.</li>
                      <li>To facilitate the order placement process.</li>
                      <li>To conduct analyses.</li>
                      <li>
                        To communicate with you, for example, to answer your
                        inquiries, requests, issue reports, or feedback and
                        follow up on them.
                      </li>
                      <li>
                        To send marketing and promotional materials, including
                        information about our products, services, sales, and
                        promotions or those of our business partners.
                      </li>
                      <li>
                        To detect and protect against harmful, misleading,
                        fraudulent, and illegal activities, including policy and
                        term violations, security incidents, and damage to the
                        rights, property, and safety of our company and our
                        users, employees, and others.
                      </li>
                      <li>
                        To debug, identify, and fix errors that impair the
                        intended functionality of our website and services.
                      </li>
                      <li>
                        To comply with legal and regulatory obligations,
                        establish or exercise our rights, and protect against
                        claims.
                      </li>
                      <li>
                        For internal administrative purposes, as well as in
                        dealings with third parties.
                      </li>
                      <li>
                        For other purposes that you may consent to from time to
                        time (which we may request).
                      </li>
                    </ul>
                  </>,
                  "While the above sections outline the main purposes for data collection, it is often the case that there may be multiple purposes. For instance, if you make an online purchase, we collect your information to fulfill our contract with you, but we also retain it for legitimate interests in keeping this information post-transaction to quickly address any questions regarding your order. Therefore, our processing and collecting your information in different instances depend on your consent, contract necessities, legal requirements, and/or legitimate interests in running our business.",
                ],
              },
              {
                header: "6. How We Share Personal Information",
                content: [
                  <>
                    <p>
                      Besides the specific scenarios discussed in other sections
                      of the Privacy Policy, we may disclose personal
                      information as follows:
                    </p>
                    <ul className="list-disc ml-4">
                      <li>
                        Affiliates and Acquisition Operations. We may transfer
                        information to our corporate affiliates (e.g., parent
                        and subsidiary companies, joint ventures, and other
                        entities under common control). If another company
                        acquires or plans to acquire our company, business, or
                        assets, we will also transfer information to that
                        company, including during negotiations.
                      </li>
                      <li>
                        Disclosure Without Consent. We may disclose information
                        in response to a court order, subpoena, or court
                        directive, as well as in connection with legal processes
                        or to comply with relevant laws. We may also share your
                        information to establish and exercise our rights, defend
                        against claims, investigate, prevent, and take action
                        against potential illegal activities, suspected fraud,
                        threats to personal safety or property, and violations
                        of our policies, and to fulfill your request to ship
                        products and render services through a third-party
                        intermediary.
                      </li>
                      <li>
                        Partner Promotions. We may host promotions with
                        third-party partners. If you decide to participate in a
                        promotion sponsored by a third party, the information
                        you provide will be transmitted to us and to that
                        partner. The use of your information by the partner is
                        not governed by this privacy policy.
                      </li>
                      <li>
                        Service Providers. We may transfer your information to
                        service providers. Service providers help, among other
                        things, administer our site and provide services for
                        smooth business operations, provide technical support,
                        process payments, and assist in order fulfillment.
                      </li>
                      <li>
                        Disclosure With Your Consent. We may disclose your
                        information to third parties if we have received your
                        consent or direction to do so.
                      </li>
                    </ul>
                  </>,
                ],
              },
              {
                header: "7. Your Rights ",
                content: [
                  <>
                    <p>
                      Depending on your location and applicable laws, you may
                      have the following rights:
                    </p>
                    <ul className="list-disc ml-4">
                      <li>
                        Access to Your Data. The right to request that we
                        disclose to you the personal information we collect,
                        use, or disclose about you, as well as the nature of our
                        data operations. In certain limited circumstances, you
                        may also request your personal information in a
                        portable, machine-readable format.
                      </li>
                      <li>
                        Review and Request Corrections. The right to request
                        that we correct inaccuracies in the personal information
                        we hold about you. We rely on you to update and correct
                        your personal information. Our site allows you to change
                        or delete your account profile. If our site does not
                        allow the update or correction of certain information,
                        you may contact us at the address provided below to
                        request changes. Note: We may retain uncorrected
                        information in backup files as required by law.
                      </li>
                      <li>
                        Deletion of Personal Information. The right to request
                        that we delete the personal information we have
                        collected about you.
                      </li>
                      <li>
                        Withdraw Consent at Any Time. The right to withdraw
                        consent for processing your personal information if you
                        have previously given it.
                      </li>
                      <li>
                        Object to Processing of Personal Information. The right
                        to object to the processing of personal information if
                        processing is carried out on a legal basis other than
                        consent.
                      </li>
                    </ul>
                    <p>
                      Note: Not all the above rights are absolute; the
                      applicability of rights depends on the circumstances. In
                      some cases, we may fulfill a request to a limited extent
                      or deny the request if permitted or required by law or if
                      we cannot properly verify your identity. We do not
                      discriminate against individuals exercising their privacy
                      rights under applicable law. For more details on specific
                      rights, see this section.
                    </p>
                  </>,
                  "To submit a request to exercise any of the rights described above or appeal a decision we made regarding a data subject rights request, contact us using the information below.",
                  "Note: As required by law, we will need to verify your identity. Depending on the request, we may request information such as your name, your last purchase from us, or the date of your last purchase. We may also ask you to sign a declaration confirming your identity. We will make reasonable efforts to fulfill your request to provide, correct, or delete personal information about you in our records.",
                  "In certain cases, you may appoint an authorized representative to submit requests to exercise certain privacy rights on your behalf. If you are an authorized representative submitting a request on behalf of an individual, you must attach a signed document confirming that you can act on behalf of that person.",
                  <>
                    <h6 className="text-text-600">
                      How to Unsubscribe from Marketing Emails?
                    </h6>
                    <p>
                      You can unsubscribe from receiving marketing emails by
                      using the unsubscribe feature in the profile settings. To
                      change settings, log into your account and go to profile
                      settings. Enable or disable the &quot;Receive marketing
                      mail&quot; option. If turned off, your email will be
                      unsubscribed from marketing emails promptly.
                    </p>
                  </>,
                  "If you have questions about how to opt-out of Jetsim&apos;s marketing emails, write to us at support@jetsim.app.",
                  <>
                    <h6 className="text-text-600">
                      How to Delete an Account?{" "}
                    </h6>
                    <p>
                      You can delete your account using the &quot;Delete
                      Account&quot; function in the profile settings. Log into
                      your account and go to profile settings. Click on
                      &quot;Delete Account&quot; and confirm your intention. We
                      will process the request without delay or within one month
                      of receipt if subject to special requirements.
                    </p>
                  </>,
                  "Please note that we may still need to verify your identity and your relationship with us before we can process the request.",
                  <>
                    <h6 className="text-text-600">
                      When does Jetsim perform data processing after receiving a
                      request to delete or object to processing?{" "}
                    </h6>
                    <p>
                      Under certain circumstances, the law may require Jetsim to
                      retain and process your Personal Data even after a request
                      to delete or object to process. For example, Jetsim is
                      required to retain certain personal information to meet
                      legal obligations under the rules regarding payment
                      transaction records.
                    </p>
                  </>,
                ],
              },
              {
                header: "8. Data Transfer and International Data Transfer",
                content: [
                  "The Service is owned by Jetsim and may be accessed in Europe and abroad. Therefore, your information may be processed abroad, where privacy laws may be less stringent than those in your country. Nevertheless, we process personal information by applying, as far as possible, the same privacy principles applicable under the laws of the country where we originally received your information. By submitting your personal information, you consent to its transfer, storage, and processing in a country other than your country of residence, including the United States of America. For further information on our measures to apply privacy principles across jurisdictions, you may contact us using the information below.",
                ],
              },
              {
                header: "9. Security",
                content: [
                  "We follow industry-standard practices to protect your personal information. No method of data transmission over the Internet, through mobile technologies, or electronic storage is completely secure. Given the above and despite our efforts to use physical, electronic, and procedural security measures to protect the confidentiality of information collected online, we cannot guarantee its absolute security.",
                  "Jetsim users are responsible for protecting their passwords and account credentials. If you believe your interaction with us is no longer secure (e.g., you believe your account security has been compromised), please notify us immediately via email at support@jetsim.app.",
                ],
              },
              {
                header: "10. Changes to the Privacy Policy",
                content: [
                  "We reserve the right to modify this Privacy Policy&apos;s terms at any time. If changes are significant or affect how we use your personal information, we will notify you by posting a notice of such changes here on our main page or by sending you an email. We recommend reviewing this Policy whenever you visit one of our websites or applications. The Privacy Policy&apos;s effective date and the last modification date are listed herein. The effective date is the date the current version comes into force, and the last modification date indicates the latest substantial change to the current version.",
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
