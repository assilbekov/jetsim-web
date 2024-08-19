import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type SamsungTurnOnStepProps = {
  step: number;
};

export const SamsungTurnOnStep = ({ step }: SamsungTurnOnStepProps) => {
  const t = useTranslations();

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
        </InfoRow>
        <InfoRow>
          <ArrowRightImage />
          <span>{t("turnOnText")}</span>
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
