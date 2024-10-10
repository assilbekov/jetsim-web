import React from "react";
import { useTranslations } from "next-intl";
import { FAQRenderer } from "./FAQRenderer";

export const FAQReferralForCurrent = () => {
  const t = useTranslations("FAQReferralForCurrent");

  const faq = [
    {
      title: t("howDoesThisWork.title"),
      description: t("howDoesThisWork.description"),
    },
    {
      title: t("whoCanGetTheReward.title"),
      description: (
        <>
          <p>{t("whoCanGetTheReward.description")}</p>
          <ul className="list-disc ml-8">
            <li>{t("whoCanGetTheReward.point1")}</li>
            <li>{t("whoCanGetTheReward.point2")}</li>
          </ul>
        </>
      ),
    },
    {
      title: t("whenWillIReceiveMyReward.title"),
      description: t("whenWillIReceiveMyReward.description"),
    },
    {
      title: t("howDoIApplyTheReward.title"),
      description: (
        <>
          <p>{t("howDoIApplyTheReward.description1")}</p>
          <p>{t("howDoIApplyTheReward.description2")}</p>
        </>
      ),
    },
    {
      title: t("howDoIFindMyReferralLink.title"),
      description: t("howDoIFindMyReferralLink.description"),
    },
    {
      title: t("isThereALimitToHowManyFriendsICanRefer.title"),
      description: t("isThereALimitToHowManyFriendsICanRefer.description"),
    },
  ];

  return <FAQRenderer header={t("yourQuestionsAnswered")} faq={faq} />;
};
