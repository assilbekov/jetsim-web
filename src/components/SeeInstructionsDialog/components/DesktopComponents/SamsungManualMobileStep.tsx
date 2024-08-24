import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type SamsungManualMobileStepProps = {
  step: number;
};

export const SamsungManualMobileStep = ({
  step,
}: SamsungManualMobileStepProps) => {
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
          <span>{t("simManagerText")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("mobileDataText")}</span>
          <ArrowRightImage />
          <span>{t("jetSimEsimText")}</span>
        </InfoRow>
      </div>
    </div>
  );
};
