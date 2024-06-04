import { Card } from "@/models/Card";
import QRCode from "react-qr-code";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

type QRCodeInstallProps = {
  card: Card;
};

export const QRCodeInstall = ({ card }: QRCodeInstallProps) => {
  return (
    <div className="flex flex-col justify-center text-base font-medium leading-6">
      <QRCode
        value={card.lpaCode}
        className="self-center w-full aspect-square fill-white max-w-[220px]"
      />
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
      <PrimaryButton className="mt-4">Share a QR code</PrimaryButton>
      <SecondaryButton className="mt-4">See instructions</SecondaryButton>
    </div>
  );
};
