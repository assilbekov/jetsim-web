"use client";

import QRCode, { QRCodeCanvas } from "qrcode.react";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";
import { Card } from "@/models/Card";
import { useDeviceTypeAndVersion } from "@/hooks/useDeviceTypeAndVersion";
import { useTranslations } from "next-intl";

type ScanQRStepProps = {
  step: number;
  card: Card;
};

export const ScanQRStep = ({ step, card }: ScanQRStepProps) => {
  const deviceTypeAndVerion = useDeviceTypeAndVersion();
  const t = useTranslations("InstallESimInstructionsDialog");
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
          value={card.lpaCode}
          size={140}
          className="self-center w-full aspect-square fill-white max-w-[140px]"
        />
      )}
      <InfoRow>{t("ScanQRStep_scanInstruction")}</InfoRow>
    </div>
  );
};
