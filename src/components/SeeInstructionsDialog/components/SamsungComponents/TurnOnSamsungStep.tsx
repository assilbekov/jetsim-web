import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type TurnOnSamsungStepProps = {
  step: number;
};

export const TurnOnSamsungStep = ({ step }: TurnOnSamsungStepProps) => {
  const t = useTranslations("SamsungInstructions"); // Hook for translations

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goTo")}</span>
          <IconWithText
            src="/icons/settings-blue.png"
            alt={t("settingsAlt")}
            text={t("settingsText")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/connection-blue.svg"
            alt={t("wifiAlt")}
            text={t("connectionsText")}
          />
          <ArrowRightImage />
          <span>{t("mobileNetworks")}</span>
        </InfoRow>
        <InfoRow>
          <ArrowRightImage />
          <span>{t("selectInstalledESIM")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("turnOn")}</span>
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt={t("toggleAlt")}
            text={t("dataRoamingText")}
          />
        </InfoRow>
      </div>
    </div>
  );
};
