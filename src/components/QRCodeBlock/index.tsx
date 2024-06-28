"use client";

import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";
import { Card } from "@/models/Card";
import { clsx } from "@/utils";
import Image from "next/image";
import QRCode from "qrcode.react";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { SeeInstructionsButton } from "./SeeInstructionsButton";
import { ShareQRCodeButton } from "./ShareQRCodeButton";

type QRCodeBlockProps = {
  size: number;
  card: Card;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      className={clsx(
        getTypographyClass(TypographyVariants.Subheader),
        "md:font-interTight md:text-[34px] md:leading-[38px] md:font-medium md:tracking-[0.68px]",
        "mt-6 mb-3 text-center"
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
        "text-text-600 text-center"
      )}
    >
      {children}
    </p>
  );
};

const QRCodeElement = ({ url, size }: { url: string; size: number }) => {
  return (
    <div>
      <QRCode value={url} size={size} />
    </div>
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
            <QRCodeElement url={url} size={size} />
          </a>
          <Image
            src="/icons/black/union.svg"
            alt="union icon"
            height={52}
            width={37}
            className="mt-4"
          />
        </div>
      );
    }

    if (deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "16.0") {
      return (
        <div>
          <QRCodeElement url={url} size={size} />
          <Image
            src="/icons/black/union.svg"
            alt="union icon"
            height={52}
            width={37}
            className="mt-4"
          />
          <Title>Press and hold on a QR code and select Add eSIM</Title>
          <Description>
            Share this QR code to other phone or laptop and scan it from there
          </Description>
          <SeeInstructionsButton card={card} />
        </div>
      );
    }

    if (deviceTypeAndVerion.isIOS) {
      return (
        <div>
          <QRCodeElement url={url} size={size} />
          <Title>Scan this QR code from other device</Title>
          <Description>
            Share this QR code to other phone or laptop and scan it from there
          </Description>
          <ShareQRCodeButton />
          <SeeInstructionsButton card={card} />
        </div>
      );
    }

    if (deviceTypeAndVerion.isDesktop) {
      return (
        <div>
          <QRCodeElement url={url} size={size} />
          <Title>Install eSIM with QR code</Title>
          <Description>Scan this QR code with your device</Description>
        </div>
      );
    }

    return (
      <div>
        <QRCodeElement url={url} size={size} />
        <Title>Scan this QR code from other device</Title>
        <Description>
          Share this QR code to other phone or laptop and scan it from there
        </Description>
        <SeeInstructionsButton card={card} />
      </div>
    );
  };

  return <div>{renderQRCode()}</div>;
};
