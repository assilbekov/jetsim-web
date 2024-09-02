import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { useTranslations } from "next-intl";

type TurnOnQRPixelStepProps = {
  step: number;
};

export const TurnOnQRPixelStep = ({ step }: TurnOnQRPixelStepProps) => {
  const t = useTranslations("SeeInstructions");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goTo")}</span>
          <IconWithText
            src="/icons/settings-pixel.svg"
            alt={t("settingsIconAlt")}
            text={t("settings_setting")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/wifi-pixel.svg"
            alt={t("networkInternetIconAlt")}
            text={t("networkInternet_setting")}
          />
          <ArrowRightImage />
          <span>{t("sims_setting")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("jetSim")}</span>
          <ArrowRightImage />
          <span>{t("scrollEnable")}</span>
        </InfoRow>
        <InfoRow>
          <span>{t("turnOn")}</span>
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt={t("toggleIconAlt")}
            text={t("roaming_setting")}
          />
        </InfoRow>
      </div>
    </div>
  );
};
