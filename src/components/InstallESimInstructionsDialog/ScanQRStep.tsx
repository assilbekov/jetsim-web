import QRCode from "react-qr-code";
import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
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
      <QRCode
        value={card.lpaCode}
        height={140}
        width={140}
        className="self-center w-full aspect-square fill-white max-w-[140px] max-h-[140px]"
      />
      <InfoRow>Scan this QR code</InfoRow>
    </div>
  );
};
