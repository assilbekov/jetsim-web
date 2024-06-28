"use client";

import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";
import Image from "next/image";
import QRCode from "qrcode.react";

type QRCodeBlockProps = {
  value: string;
  size: number;
};

export const QRCodeBlock = ({ value, size }: QRCodeBlockProps) => {
  const deviceTypeAndVerion = useDeviceTypeAndVerion();

  const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=${value}`;

  const renderQRCode = () => {
    if (deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "17.5") {
      return (
        <div>
          <a href={url}>
            <QRCode value={url} size={size} height={52} width={37} />
          </a>
          <Image src="/icons/black/union.svg" alt="union icon" />
        </div>
      );
    }

    if (deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "16.0") {
      return (
        <div>
          <QRCode value={url} size={size} />
          <Image
            src="/icons/black/union.svg"
            alt="union icon"
            height={52}
            width={37}
          />
          <p>Press and hold on a QR code and select Add eSIM</p>
          <p>
            Share this QR code to other phone or laptop and scan it from there
          </p>
        </div>
      );
    }

    if (deviceTypeAndVerion.isIOS) {
      return (
        <div>
          <QRCode value={url} size={size} />
          <p>Scan this QR code from other device</p>
          <p>
            Share this QR code to other phone or laptop and scan it from there
          </p>
        </div>
      );
    }

    if (deviceTypeAndVerion.isDesktop) {
      return (
        <div>
          <QRCode value={url} size={size} />
          <p>Install eSIM with QR code</p>
          <p>Scan this QR code with your device</p>
        </div>
      );
    }

    return (
      <div>
        <QRCode value={url} size={size} />
        <p>Scan this QR code from other device</p>
        <p>
          Share this QR code to other phone or laptop and scan it from there
        </p>
      </div>
    );
  };

  return <div>{renderQRCode()}</div>;
};
