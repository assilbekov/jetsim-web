import QRCode, { QRCodeCanvas } from "qrcode.react";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { Card } from "@/models/Card";
import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";
import { ArrowRightImage } from "./ArrowRightImage";
import { ShareQRCodeButton } from "@/components/QRCodeBlock/ShareQRCodeButton";
import { clsx } from "@/utils";
import {
  TypographyVariants,
  getTypographyClass,
} from "@/components/Typography";

type ScanQRStepProps = {
  step: number;
  card: Card;
  helperText?: string;
};

export const ScanQRStep = ({ step, card, helperText }: ScanQRStepProps) => {
  const deviceTypeAndVerion = useDeviceTypeAndVerion();
  const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=${card.lpaCode}`;

  const renderHelperText = () => {
    if (helperText) return helperText;

    if (deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "16") {
      return (
        <>
          <span>
            Tap {deviceTypeAndVerion.version >= "17.5" ? "" : "and hold "}on QR
            code
          </span>
          <ArrowRightImage />
          <span>Add eSIM</span>
        </>
      );
    }

    if (!deviceTypeAndVerion.isDesktop) {
      return (
        <div>
          <p>Share the QR code to a different screen</p>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Caption),
              "mt-1 w-full text-text-600 text-center"
            )}
          >
            Or use alternative method bellow
          </p>
          <ShareQRCodeButton />
        </div>
      );
    }

    return "Scan this QR code";
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
