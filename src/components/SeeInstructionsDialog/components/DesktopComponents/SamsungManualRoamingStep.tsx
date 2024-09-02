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
  const t = useTranslations("DesktopInstructions");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goTo")}</span>
          <IconWithText
            src="/icons/settings-blue.png"
            alt="settings icon"
            text={t("settings")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/connection-blue.svg"
            alt="wifi icon"
            text={t("connections")}
          />
          <ArrowRightImage />
          <span>{t("mobileNetworks")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("selectEsim")}</span>
          <ArrowRightImage />
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt="toggle icon"
            text={t("dataRoaming")}
          />
        </InfoRow>
      </div>
    </div>
  );
};
