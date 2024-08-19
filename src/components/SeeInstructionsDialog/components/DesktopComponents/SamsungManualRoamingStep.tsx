import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type SamsungManualRoamingStepProps = {
  step: number;
};

export const SamsungManualRoamingStep = ({
  step,
}: SamsungManualRoamingStepProps) => {
  const t = useTranslations("InstructionsDesktopComponents");

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
          <span>{t("mobileNetworksText")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("selectInstalledEsimText")}</span>
          <ArrowRightImage />
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt="toggle icon"
            text={t("dataRoamingText")}
          />
        </InfoRow>
      </div>
    </div>
  );
};
