import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type PixelManualStepProps = {
  step: number;
};

export const SamsungManualStep = ({ step }: PixelManualStepProps) => {
  const t = useTranslations("SeeInstructionsDialog");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goToText")}</span>
          <IconWithText
            src="/icons/settings-blue.png"
            alt="settings icon"
            text={t("settingsText")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/connection-blue.svg"
            alt="wifi icon"
            text={t("connectionsText")}
          />
          <ArrowRightImage />
          <span>{t("simManagerText")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/plus-green.svg"
            alt="add icon"
            text={t("addESIMText")}
          />
          <ArrowRightImage />
          <span>{t("scanQRCodeText")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("enterActivationCodeText")}</span>
          <ArrowRightImage />
          <span>{t("addText")}</span>
        </InfoRow>
      </div>
    </div>
  );
};
