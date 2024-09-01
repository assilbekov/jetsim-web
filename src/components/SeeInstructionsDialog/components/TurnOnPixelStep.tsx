import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { useTranslations } from "next-intl";

type TurnOnPixelStepProps = {
  step: number;
};

export const TurnOnPixelStep = ({ step }: TurnOnPixelStepProps) => {
  const t = useTranslations("SeeInstructions");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goTo")}</span>
          <IconWithText
            src="/icons/settings-pixel.svg"
            alt={t("settingsAlt")}
            text={t("settings")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/wifi-pixel.svg"
            alt={t("networkAlt")}
            text={t("network")}
          />
          <ArrowRightImage />
          <span>{t("sims")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("jetSim")}</span>
          <ArrowRightImage />
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt={t("toggleAlt")}
            text={t("useSim")}
          />
          <ArrowRightImage />
          <span>{t("yes")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("useJetSim")}</span>
          <ArrowRightImage />
          <span>{t("scrollEnable")}</span>
        </InfoRow>
        <InfoRow>
          <span>{t("turnOn")}</span>
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt={t("toggleAlt")}
            text={t("roaming")}
          />
        </InfoRow>
      </div>
    </div>
  );
};
