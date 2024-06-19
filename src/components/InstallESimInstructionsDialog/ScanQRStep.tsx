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
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <QRCode
        value={card.lpaCode}
        className="self-center w-full aspect-square fill-white max-w-[220px]"
      />
      <InfoRow>Scan this QR code</InfoRow>
    </div>
  );
};
