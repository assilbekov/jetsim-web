import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type PixelScanQRDesktopStepProps = {
  step: number;
};

export const PixelScanQRDesktopStep = ({
  step,
}: PixelScanQRDesktopStepProps) => {
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
          <span>{t("simText")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("clickOnText")}</span>
          <IconWithText src="/icons/add.svg" alt="add icon" text="" />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/sim_card_download.svg"
            alt="sim card download icon"
            text={t("downloadSimText")}
          />
          <ArrowRightImage />
          <span>{t("yesText")}</span>
        </InfoRow>
        <InfoRow>
          <ArrowRightImage />
          <span>{t("nextText")}</span>
        </InfoRow>
      </div>
    </div>
  );
};
