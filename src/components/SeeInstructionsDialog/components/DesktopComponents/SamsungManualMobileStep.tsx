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
          <span>{t("simManager")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("mobileData")}</span>
          <ArrowRightImage />
          <span>{t("jetsimEsim")}</span>
        </InfoRow>
      </div>
    </div>
  );
};
