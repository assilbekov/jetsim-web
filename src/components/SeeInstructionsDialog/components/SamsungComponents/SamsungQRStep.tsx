import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type SamsungQRStepProps = {
  step: number;
};

export const SamsungQRStep = ({ step }: SamsungQRStepProps) => {
  const t = useTranslations("SamsungInstructions");

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
          <IconWithText
            src="/icons/plus-green.svg"
            alt={t("addIconAlt")}
            text={t("addEsimText")}
          />
          <ArrowRightImage />
          <span>{t("scanQRCode")}</span>
        </InfoRow>
      </div>
    </div>
  );
};
