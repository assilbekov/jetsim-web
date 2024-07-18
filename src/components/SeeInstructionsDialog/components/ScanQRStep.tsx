import QRCode, { QRCodeCanvas } from "qrcode.react";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { Card } from "@/models/Card";
import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";

type ScanQRStepProps = {
  step: number;
  card: Card;
};

export const ScanQRStep = ({ step, card }: ScanQRStepProps) => {
  const deviceTypeAndVerion = useDeviceTypeAndVerion();
  const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=${card.lpaCode}`;
  return (
    <div className="flex flex-col gap-5">
      <RoundedLabel>{step}</RoundedLabel>
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
          value={url}
          size={140}
          className="self-center w-full aspect-square fill-white max-w-[140px]"
        />
      )}
      <InfoRow>Scan this QR code</InfoRow>
    </div>
  );
};
