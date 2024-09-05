import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type PixelTurnOnDesktopProps = {
  step: number;
};

export const PixelTurnOnDesktop = ({ step }: PixelTurnOnDesktopProps) => {
  const t = useTranslations("DesktopInstructions"); // Hook for translations

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
          <span>{t("sims")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("jetsim")}</span>
          <ArrowRightImage />
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
