import QRCode from "qrcode.react";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { Card } from "@/models/Card";

type ScanQRStepProps = {
  step: number;
  card: Card;
};

export const ScanQRStep = ({ step, card }: ScanQRStepProps) => {
  return (
    <div className="flex flex-col gap-5">
      <RoundedLabel>{step}</RoundedLabel>
      <a href={card.lpaCode}>
        <QRCode
          value={card.lpaCode}
          height={140}
          width={140}
          className="self-center w-full aspect-square fill-white max-w-[140px] max-h-[140px]"
        />
      </a>
      <InfoRow>Scan this QR code</InfoRow>
    </div>
  );
};
