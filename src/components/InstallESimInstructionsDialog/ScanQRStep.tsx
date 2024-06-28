import QRCode, { QRCodeSVG, QRCodeCanvas } from "qrcode.react";

//import QRCode from "react-qr-code";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { Card } from "@/models/Card";
import {} from "react-device-detect";

type ScanQRStepProps = {
  step: number;
  card: Card;
};

export const ScanQRStep = ({ step, card }: ScanQRStepProps) => {
  const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=${card.lpaCode}`;
  return (
    <div className="flex flex-col gap-5">
      <RoundedLabel>{step}</RoundedLabel>
      <a href={url}>
        <QRCode
          value={url}
          size={140}
          className="self-center w-full aspect-square fill-white max-w-[140px] max-h-[140px]"
        />
      </a>
      <InfoRow>Scan this QR code</InfoRow>
    </div>
  );
};
