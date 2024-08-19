"use client";

import { useTranslations } from "next-intl";
import { PrimaryButton } from "../buttons/PrimaryButton";

export const ShareQRCodeButton = () => {
  const t = useTranslations("QRCodeBlock");

  const handleShare = () => {
    const canvas = document
      .getElementById("qr-code-id")
      ?.querySelector("canvas");
    //qrRef?.current?.querySelector("canvas");
    const url = canvas?.toDataURL("image/png");
    const a = document.createElement("a");
    if (!url) return;
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <PrimaryButton className="mt-4 w-full" onClick={handleShare}>
      {t("shareQRCode")}
    </PrimaryButton>
  );
};
