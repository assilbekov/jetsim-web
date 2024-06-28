"use client";

import { Card } from "@/models/Card";
import { deviceDetect, useDeviceData } from "react-device-detect";
import QRCode, { QRCodeSVG, QRCodeCanvas } from "qrcode.react";

// import QRCode from "react-qr-code";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { useRef } from "react";
import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";
import { QRCodeBlock } from "../QRCodeBlock";

type QRCodeInstallProps = {
  card: Card;
  onSeeInstructionsClick: () => void;
};

export const QRCodeInstall = ({
  card,
  onSeeInstructionsClick,
}: QRCodeInstallProps) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const deviceData = useDeviceData(window.navigator.userAgent);
  const deviceTypeAndVerion = useDeviceTypeAndVerion();

  const handleShare = () => {
    const canvas = qrRef?.current?.querySelector("canvas");
    const url = canvas?.toDataURL("image/png");
    const a = document.createElement("a");
    if (!url) return;
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=${card.lpaCode}`;

  return (
    <div>
      <QRCodeBlock size={220} card={card} />
    </div>
  )

  return (
    <div className="flex flex-col justify-center text-base font-medium leading-6">
      <div ref={qrRef} className="flex justify-center">
        {deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "17.5" ? (
          <a href={url}>
            <QRCode
              value={url}
              size={220}
              className="self-center w-full aspect-square fill-white max-w-[220px]"
            />
          </a>
        ) : (
          <QRCodeCanvas
            value={url}
            size={220}
            className="self-center w-full aspect-square fill-white max-w-[220px]"
          />
        )}
      </div>
      <p>deviceData: {JSON.stringify(deviceData)}</p>
      <p>deviceTypeAndVerion: {JSON.stringify(deviceTypeAndVerion)}</p>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Subheader),
          "mt-6 text-center text-text-100"
        )}
      >
        Scan this QR code from other device
      </p>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "mt-3 w-full text-text-600 text-center"
        )}
      >
        Share this QR code to other phone or laptop and scan it from there
      </p>
      {!deviceTypeAndVerion.isDesktop && (
        <PrimaryButton className="mt-4" onClick={handleShare}>
          Share a QR code
        </PrimaryButton>
      )}
      <SecondaryButton className="mt-4" onClick={onSeeInstructionsClick}>
        See instructions
      </SecondaryButton>
    </div>
  );
};
