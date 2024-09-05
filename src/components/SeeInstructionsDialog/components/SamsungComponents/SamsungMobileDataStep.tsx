import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type SamsungMobileDataStepProps = {
  step: number;
};

export const SamsungMobileDataStep = ({ step }: SamsungMobileDataStepProps) => {
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
          <span>{t("simManager")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("mobileData")}</span>
          <ArrowRightImage />
          <span>{t("scanQRCode")}</span>
          <ArrowRightImage />
        </InfoRow>
      </div>
    </div>
  );
};
