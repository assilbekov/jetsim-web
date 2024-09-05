import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { useTranslations } from "next-intl";

type EnterDetailsManuallyStepProps = {
  step: number;
};

export const EnterDetailsManuallyStep = ({
  step,
}: EnterDetailsManuallyStepProps) => {
  const t = useTranslations("SeeInstructions");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goTo")}</span>
          <IconWithText
            src="/icons/settings.png"
            alt={t("settingsAlt")}
            text={t("settingsText")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/mobile-service.svg"
            alt={t("mobileServiceAlt")}
            text={t("mobileServiceText")}
          />
          <ArrowRightImage />
          <span>{t("addESIM")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/primary/qr.svg"
            alt={t("qrCodeAlt")}
            text={t("useQRCode")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("enterDetailsManually")}</span>
        </InfoRow>
      </div>
    </div>
  );
};
