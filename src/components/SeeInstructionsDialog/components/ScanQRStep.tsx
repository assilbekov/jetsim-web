import QRCode, { QRCodeCanvas } from "qrcode.react";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { Card } from "@/models/Card";
import { useDeviceTypeAndVersion } from "@/hooks/useDeviceTypeAndVersion";
import { ArrowRightImage } from "./ArrowRightImage";
import { ShareQRCodeButton } from "@/components/QRCodeBlock/ShareQRCodeButton";
import { clsx } from "@/utils";
import {
  TypographyVariants,
  getTypographyClass,
} from "@/components/Typography";
import { useTranslations } from "next-intl";

type ScanQRStepProps = {
  step: number;
  card: Card;
  helperText?: string;
};

export const ScanQRStep = ({ step, card, helperText }: ScanQRStepProps) => {
  const t = useTranslations("SeeInstructions");
  const deviceTypeAndVerion = useDeviceTypeAndVersion();
  const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=${card.lpaCode}`;

  const renderHelperText = () => {
    if (helperText) return helperText;

    if (deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "16") {
      return (
        <>
          <span>
            {t("tap")}
            {deviceTypeAndVerion.version >= "17.5"
              ? ""
              : ` ${t("andHold")}`}{" "}
            {t("onQR")}
          </span>
          <ArrowRightImage />
          <span>{t("addEsim")}</span>
        </>
      );
    }

    if (!deviceTypeAndVerion.isDesktop) {
      return (
        <div>
          <p>{t("shareQRCode")}</p>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Caption),
              "mt-1 w-full text-text-600 text-center"
            )}
          >
            {t("alternativeMethod")}
          </p>
          <ShareQRCodeButton />
        </div>
      );
    }

    return t("scanQRCode");
  };

  return (
    <div className="flex flex-col gap-5">
      <RoundedLabel>{step}</RoundedLabel>
      <div className="p-6 self-center bg-white rounded-[20px] border-solid border-[1px] border-[#E9F0F2]">
        {deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "17.5" ? (
          <a href={url}>
            <QRCode
              value={url}
              size={140}
              className="self-center w-full aspect-square fill-white max-w-[140px]"
            />
          </a>
        ) : (
          <QRCodeCanvas
            value={card.lpaCode}
            size={140}
            className="self-center w-full aspect-square fill-white max-w-[140px]"
          />
        )}
      </div>
      <InfoRow>{renderHelperText()}</InfoRow>
    </div>
  );
};
