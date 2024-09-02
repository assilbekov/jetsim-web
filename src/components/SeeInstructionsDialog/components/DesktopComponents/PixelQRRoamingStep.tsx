import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type PixelQRRoamingStepProps = {
  step: number;
};

export const PixelQRRoamingStep = ({ step }: PixelQRRoamingStepProps) => {
  const t = useTranslations("DesktopInstructions");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goTo")}</span>
          <IconWithText
            src="/icons/settings-pixel.svg"
            alt="settings icon"
            text={t("settings")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/wifi-pixel.svg"
            alt="network and internet icon"
            text={t("networkAndInternet")}
          />
          <ArrowRightImage />
          <span>{t("sim")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("jetSim")}</span>
          <ArrowRightImage />
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt="toggle icon"
            text={t("useSim")}
          />
          <ArrowRightImage />
          <span>{t("yes")}</span>
          <ArrowRightImage />
          <span>{t("useJetSim")}</span>
        </InfoRow>
        <InfoRow>
          <span>{t("scrollAndEnable")}</span>
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt="toggle icon"
            text={t("roaming")}
          />
        </InfoRow>
      </div>
    </div>
  );
};
