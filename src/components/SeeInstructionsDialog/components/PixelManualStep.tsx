import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { useTranslations } from "next-intl";

type PixelManualStepProps = {
  step: number;
};

export const PixelManualStep = ({ step }: PixelManualStepProps) => {
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
          <span>{t("sim")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("clickOn")}</span>
          <IconWithText src="/icons/add.svg" alt={t("addAlt")} text="" />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/sim_card_download.svg"
            alt={t("simDownloadAlt")}
            text={t("simDownload")}
          />
          <ArrowRightImage />
          <span>{t("yes")}</span>
        </InfoRow>
        <InfoRow>
          <ArrowRightImage />
          <span>{t("next")}</span>
          <ArrowRightImage />
          <span>{t("needHelp")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("enterDetailsManually")}</span>
        </InfoRow>
      </div>
    </div>
  );
};
