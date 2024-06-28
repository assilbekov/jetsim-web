"use client";

import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";
import { Card } from "@/models/Card";
import { clsx } from "@/utils";
import Image from "next/image";
import QRCode from "qrcode.react";
import { TypographyVariants, getTypographyClass } from "../Typography";

type QRCodeBlockProps = {
  size: number;
  card: Card;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className={clsx(
        getTypographyClass(TypographyVariants.Subheader),
        "md:font-interTight md:text-[34px] md:leading-[38px] md:font-medium md:tracking-[0.68px]"
      )}
    >
      {children}
    </p>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "md:font-inter md:text-xl md:leading-[26px] md:font-medium",
        "text-text-600"
      )}
    >
      {children}
    </p>
  );
};

export const QRCodeBlock = ({ card, size }: QRCodeBlockProps) => {
  const deviceTypeAndVerion = useDeviceTypeAndVerion();

  const url = `https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=${card.lpaCode}`;

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
          <Title>Press and hold on a QR code and select Add eSIM</Title>
          <Description>
            Share this QR code to other phone or laptop and scan it from there
          </Description>
        </div>
      );
    }

    if (deviceTypeAndVerion.isIOS) {
      return (
        <div>
          <QRCode value={url} size={size} />
          <Title>Scan this QR code from other device</Title>
          <Description>
            Share this QR code to other phone or laptop and scan it from there
          </Description>
        </div>
      );
    }

    if (deviceTypeAndVerion.isDesktop) {
      return (
        <div>
          <QRCode value={url} size={size} />
          <Title>Install eSIM with QR code</Title>
          <Description>Scan this QR code with your device</Description>
        </div>
      );
    }

    return (
      <div>
        <QRCode value={url} size={size} />
        <Title>Scan this QR code from other device</Title>
        <Description>
          Share this QR code to other phone or laptop and scan it from there
        </Description>
      </div>
    );
  };

  return <div>{renderQRCode()}</div>;
};
