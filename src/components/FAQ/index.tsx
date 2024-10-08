import { CheckCompatibility } from "../CheckCompatibility";
import { SupportButton } from "../SupportButton";
import { useTranslations } from "next-intl";
import { FAQRenderer } from "./FAQRenderer";

export const FAQ = () => {
  const t = useTranslations("FAQ");

  const faq = [
    {
      title: t("whatIsAnEsimAndHowDoYouUseIt.title"),
      description: t("whatIsAnEsimAndHowDoYouUseIt.description"),
    },
    {
      title: t("howDoIInstallMyEsimFromJetSim.title"),
      description: (
        <>
          <p>{t("howDoIInstallMyEsimFromJetSim.description1")}</p>
          <ol className="list-decimal ml-8">
            <li>{t("howDoIInstallMyEsimFromJetSim.description2")}</li>
            <li>{t("howDoIInstallMyEsimFromJetSim.description3")}</li>
            <li>{t("howDoIInstallMyEsimFromJetSim.description4")}</li>
          </ol>
          <p className="mt-4">
            {t("howDoIInstallMyEsimFromJetSim.description5")}
          </p>
        </>
      ),
    },
    {
      title: t("canIUseMyEsimOnAnyDevice.title"),
      description: (
        <>
          {t("canIUseMyEsimOnAnyDevice.description1")}
          <CheckCompatibility
            label={t("canIUseMyEsimOnAnyDevice.link")}
            className="inline-flex items-center"
            hideIcon
          />{" "}
          {t("canIUseMyEsimOnAnyDevice.description2")}
        </>
      ),
    },
    {
      title: t("howIsEsimBetterThanTraditionalSimCards.title"),
      description: t("howIsEsimBetterThanTraditionalSimCards.description"),
    },
    {
      title: t("onceEsimExpiresCanISwitchBackToAPhysicalSimCard.title"),
      description: t(
        "onceEsimExpiresCanISwitchBackToAPhysicalSimCard.description"
      ),
    },
    {
      title: t("isEsimSecure.title"),
      description: t("isEsimSecure.description"),
    },
    {
      title: t("canIUseBothMySimCardAndAnEsimDuringInternationalTravel.title"),
      description: t(
        "canIUseBothMySimCardAndAnEsimDuringInternationalTravel.description"
      ),
    },
    {
      title: t("shouldIInstallMyEsimInAdvanceBeforeTheTrip.title"),
      description: (
        <>
          <p>{t("shouldIInstallMyEsimInAdvanceBeforeTheTrip.description1")}</p>
          <p>{t("shouldIInstallMyEsimInAdvanceBeforeTheTrip.description2")}</p>
        </>
      ),
    },
    {
      title: t("doINeedToProvideMyIdToUseAJetSimEsim.title"),
      description: t("doINeedToProvideMyIdToUseAJetSimEsim.description"),
    },
    {
      title: t("howManyTimesCanIUseMyEsim.title"),
      description: t("howManyTimesCanIUseMyEsim.description"),
    },
    {
      title: t("canIReinstallMyEsim.title"),
      description: t("canIReinstallMyEsim.description"),
    },
    {
      title: t("canICallOrTextWithJetSimEsim.title"),
      description: t("canICallOrTextWithJetSimEsim.description"),
    },
    {
      title: t("canIShareInternetAccessWithOtherDevices.title"),
      description: t("canIShareInternetAccessWithOtherDevices.description"),
    },
    {
      title: t("whatHappensIfIUseAllMyDataBeforeTheEsimPlanExpires.title"),
      description: (
        <>
          <p>
            {t(
              "whatHappensIfIUseAllMyDataBeforeTheEsimPlanExpires.description1"
            )}
          </p>
          <p>
            {t(
              "whatHappensIfIUseAllMyDataBeforeTheEsimPlanExpires.description2"
            )}
          </p>
        </>
      ),
    },
    {
      title: t("myQrCodeIsntWorkingWhatShouldIDo.title"),
      description: (
        <>
          <p>{t("myQrCodeIsntWorkingWhatShouldIDo.description1")}</p>
          <ol className="list-decimal ml-8">
            <li>
              {t("myQrCodeIsntWorkingWhatShouldIDo.description2")}{" "}
              <CheckCompatibility
                label={t("myQrCodeIsntWorkingWhatShouldIDo.link1")}
                className="inline-flex items-center"
                hideIcon
              />
            </li>
            <li>{t("myQrCodeIsntWorkingWhatShouldIDo.description3")}</li>
            <li>{t("myQrCodeIsntWorkingWhatShouldIDo.description4")}</li>
          </ol>
          <p className="mt-4">
            {t("myQrCodeIsntWorkingWhatShouldIDo.description5")}{" "}
            <SupportButton className="inline text-secondary-500 hover:text-secondary-300 transition-colors duration-200 ease-in-out cursor-pointer">
              {t("myQrCodeIsntWorkingWhatShouldIDo.link2")}
            </SupportButton>
          </p>
        </>
      ),
    },
  ];

  return <FAQRenderer header={t("frequentlyAskedQuestions")} faq={faq} />;
};
