import { useTranslations } from "next-intl";
import { FAQRenderer } from "./FAQRenderer";

export const FAQReferralForCurrent = () => {
  const t = useTranslations("FAQReferralForCurrent");
  const faq = [
    {
      title: t("question1.question"),
      description: t("question1.answer"),
    },
    {
      title: t("question2.question"),
      description: t("question2.answer"),
    },
    {
      title: t("question3.question"),
      description: t("question3.answer"),
    },
    {
      title: t("question4.question"),
      description: t("question4.answer"),
    },
    {
      title: t("question5.question"),
      description: t("question5.answer"),
    },
    {
      title: t("question6.question"),
      description: t("question6.answer"),
    },
  ];
  return <FAQRenderer header={t("title")} faq={faq} />;
};
