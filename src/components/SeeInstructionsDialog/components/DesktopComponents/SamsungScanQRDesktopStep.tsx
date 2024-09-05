import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";
import { useTranslations } from "next-intl";

type SamsungScanQRDesktopStepProps = {
  step: number;
};

export const SamsungScanQRDesktopStep = ({
  step,
}: SamsungScanQRDesktopStepProps) => {
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
          <IconWithText
            src="/icons/plus-green.svg"
            alt="add icon"
            text={t("addEsim")}
          />
          <ArrowRightImage />
          <span>{t("scanQrCode")}</span>
          <ArrowRightImage />
        </InfoRow>
      </div>
    </div>
  );
};
