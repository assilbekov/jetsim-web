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
  const t = useTranslations("SeeInstructionsDialog");

  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goToText")}</span>
          <IconWithText
            src="/icons/settings.png"
            alt="settings icon"
            text={t("settingsText")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/mobile-service.svg"
            alt="mobile service icon"
            text={t("mobileServiceText")}
          />
          <ArrowRightImage />
          <span>{t("addESIMText")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/primary/qr.svg"
            alt="QR code icon"
            text={t("useQRCodeText")}
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>{t("enterDetailsManuallyText")}</span>
        </InfoRow>
      </div>
    </div>
  );
};
