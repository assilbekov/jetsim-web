"use client";

import { Card } from "@/models/Card";
import QRCode, {QRCodeSVG, QRCodeCanvas} from "qrcode.react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { useRef } from "react";

type QRCodeInstallProps = {
  card: Card;
  onSeeInstructionsClick: () => void;
};

export const QRCodeInstall = ({
  card,
  onSeeInstructionsClick,
}: QRCodeInstallProps) => {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleShare = () => {
    const canvas = qrRef?.current?.querySelector("canvas");
    const url = canvas?.toDataURL("image/png");
    const a = document.createElement("a");
    if (!url) return;
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <div className="flex flex-col justify-center text-base font-medium leading-6">
      <div ref={qrRef} className="flex justify-center">
        <QRCode
          id="qrCodeCanvas"
          value={card.lpaCode}
          size={220}
          className="self-center w-full aspect-square fill-white max-w-[220px]"
        />
      </div>
      {card.lpaCode}
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Subheader),
          "mt-6 text-center text-text-100"
        )}
      >
        Scan this QR code from other device 1
      </p>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "mt-3 w-full text-text-600 text-center"
        )}
      >
        Share this QR code to other phone or laptop and scan it from there
      </p>
      <PrimaryButton className="mt-4" onClick={handleShare}>
        Share a QR code
      </PrimaryButton>
      <SecondaryButton className="mt-4" onClick={onSeeInstructionsClick}>
        See instructions
      </SecondaryButton>
    </div>
  );
};
