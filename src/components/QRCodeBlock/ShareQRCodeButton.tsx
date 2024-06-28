"use client";

import { PrimaryButton } from "../buttons/PrimaryButton";

export const ShareQRCodeButton = () => {
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
    <PrimaryButton className="mt-4" onClick={handleShare}>
      Share a QR code
    </PrimaryButton>
  );
};
