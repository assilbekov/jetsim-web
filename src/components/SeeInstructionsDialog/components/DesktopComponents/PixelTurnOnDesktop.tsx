import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type PixelTurnOnDesktopProps = {
  step: number;
};

export const PixelTurnOnDesktop = ({ step }: PixelTurnOnDesktopProps) => {
  const t = useTranslations("InstructionsDesktopComponents");

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
          <span>{t("jetSimText")}</span>
          <ArrowRightImage />
          <span>{t("scrollAndEnableText")}</span>
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
