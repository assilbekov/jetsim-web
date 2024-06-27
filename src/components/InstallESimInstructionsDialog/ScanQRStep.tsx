//import QRCode, {QRCodeSVG, QRCodeCanvas} from "qrcode.react";

import QRCode from "react-qr-code";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { Card } from "@/models/Card";
import {} from "react-device-detect";

type ScanQRStepProps = {
  step: number;
  card: Card;
};

export const ScanQRStep = ({ step, card }: ScanQRStepProps) => {
  return (
    <div className="flex flex-col gap-5">
      <RoundedLabel>{step}</RoundedLabel>
      <QRCode
        value={card.lpaCode}
        height={140}
        size={140}
        width={140}
        className="self-center w-full aspect-square fill-white max-w-[140px] max-h-[140px]"
      />
      <InfoRow>Scan this QR code 12</InfoRow>
    </div>
  );
};
