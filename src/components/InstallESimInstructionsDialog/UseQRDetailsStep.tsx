import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { useTranslations } from "next-intl";

type UseQRDetailsStepProps = {
  step: number;
};

export const UseQRDetailsStep = ({ step }: UseQRDetailsStepProps) => {
  const t = useTranslations("InstallESimInstructionsDialog");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("UseQRDetailsStep_goTo")}</span>
          <IconWithText
            src="/icons/settings.png"
            alt="settings icon"
            text={t("UseQRDetailsStep_settings")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/mobile-service.svg"
            alt="mobile service icon"
            text={t("UseQRDetailsStep_mobileService")}
          />
          <ArrowRightImage />
          <span>{t("UseQRDetailsStep_addESIM")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/primary/qr.svg"
            alt="QR code icon"
            text={t("UseQRDetailsStep_useQRCode")}
          />
          <ArrowRightImage />
        </InfoRow>
      </div>
    </div>
  );
};
