import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { useTranslations } from "next-intl";

type UseQRDetailsStepProps = {
  step: number;
};

export const UseQRDetailsStep = ({ step }: UseQRDetailsStepProps) => {
  const t = useTranslations("SeeInstructions");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goTo")}</span>
          <IconWithText
            src="/icons/settings.png"
            alt={t("settingsIconAlt")}
            text={t("settings_setting")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/mobile-service.svg"
            alt={t("mobileServiceIconAlt")}
            text={t("mobileService_setting")}
          />
          <ArrowRightImage />
          <span>{t("addESIM_setting")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/primary/qr.svg"
            alt={t("qrCodeIconAlt")}
            text={t("useQRCode_setting")}
          />
          <ArrowRightImage />
        </InfoRow>
      </div>
    </div>
  );
};
