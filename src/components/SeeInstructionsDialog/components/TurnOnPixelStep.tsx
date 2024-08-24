import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { useTranslations } from "next-intl";

type TurnOnPixelStepProps = {
  step: number;
};

export const TurnOnPixelStep = ({ step }: TurnOnPixelStepProps) => {
  const t = useTranslations("SeeInstructionsDialog");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goToText")}</span>
          <IconWithText
            src="/icons/settings-pixel.svg"
            alt="settings icon"
            text={t("settingsText")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/wifi-pixel.svg"
            alt="network and internet icon"
            text={t("networkInternetText")}
          />
          <ArrowRightImage />
          <span>{t("simsText")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("jetsimText")}</span>
          <ArrowRightImage />
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt="toggle icon"
            text={t("useSIMText")}
          />
          <ArrowRightImage />
          <span>{t("yesText")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("useJetSimText")}</span>
          <ArrowRightImage />
          <span>{t("scrollEnableText")}</span>
        </InfoRow>
        <InfoRow>
          <span>{t("turnOnText")}</span>
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt="toggle icon"
            text={t("roamingText")}
          />
        </InfoRow>
      </div>
    </div>
  );
};
