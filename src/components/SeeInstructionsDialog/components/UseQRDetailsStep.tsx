import { useTranslations } from "next-intl";
import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";

type UseQRDetailsStepProps = {
  step: number;
};

export const UseQRDetailsStep = ({ step }: UseQRDetailsStepProps) => {
  const t = useTranslations("SeeInstructionsDialog");
  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>{t("goto")}</span>
          <IconWithText
            src="/icons/settings.png"
            alt="settings icon"
            text="Settings"
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/mobile-service.svg"
            alt="mobile service icon"
            text="Mobile Service"
          />
          <ArrowRightImage />
          <span>{t("addESim")}</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/primary/qr.svg"
            alt="QR code icon"
            text="Use QR Code"
          />
          <ArrowRightImage />
        </InfoRow>
      </div>
    </div>
  );
};
