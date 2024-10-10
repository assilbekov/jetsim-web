import React from "react";
import { useTranslations } from "next-intl";
import { FAQRenderer } from "./FAQRenderer";

export const FAQReferralForInvited = () => {
  const t = useTranslations("FAQReferralForInvited");

  const faq = [
    {
      title: t("whatIsJetSim.title"),
      description: t("whatIsJetSim.description"),
    },
    {
      title: t("howDoISignUpThroughAReferral.title"),
      description: t("howDoISignUpThroughAReferral.description"),
    },
    {
      title: t("whatBenefitsDoIGetForSigningUpThroughAReferral.title"),
      description: t(
        "whatBenefitsDoIGetForSigningUpThroughAReferral.description"
      ),
    },
    {
      title: t("howDoIClaimMyDiscount.title"),
      description: (
        <>
          <p>{t("howDoIClaimMyDiscount.description")}</p>
          <ul className="list-disc ml-8">
            <li>{t("howDoIClaimMyDiscount.point1")}</li>
            <li>{t("howDoIClaimMyDiscount.point2")}</li>
            <li>{t("howDoIClaimMyDiscount.point3")}</li>
          </ul>
        </>
      ),
    },
    {
      title: t("canIUseJetSimAlongsideMyRegularSimCard.title"),
      description: t("canIUseJetSimAlongsideMyRegularSimCard.description"),
    },
    {
      title: t("howDoIInstallAndActivateMyJetSimEsim.title"),
      description: t("howDoIInstallAndActivateMyJetSimEsim.description"),
    },
  ];

  return <FAQRenderer header={t("frequentlyAskedQuestions")} faq={faq} />;
};
