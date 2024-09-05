"use client";

import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { useTranslations } from "next-intl";

type TurnOnDataRoamingStepProps = {
  step: number;
};

export const TurnOnDataRoamingStep = ({ step }: TurnOnDataRoamingStepProps) => {
  const t = useTranslations("InstallESimInstructionsDialog");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("TurnOnDataRoamingStep_goTo")}</span>
          <IconWithText
            src="/icons/settings.png"
            alt="settings icon"
            text={t("TurnOnDataRoamingStep_settings")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/mobile-service.svg"
            alt="mobile service icon"
            text={t("TurnOnDataRoamingStep_mobileService")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/primary/qr.svg"
            alt="qr icon"
            text={t("TurnOnDataRoamingStep_selectESIM")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("TurnOnDataRoamingStep_turnOn")}</span>
          <IconWithText
            src="/icons/toggle.svg"
            alt="toggle icon"
            text={t("TurnOnDataRoamingStep_dataRoaming")}
          />
        </InfoRow>
      </div>
    </div>
  );
};
