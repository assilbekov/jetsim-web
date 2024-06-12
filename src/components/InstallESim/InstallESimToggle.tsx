"use client";

import { useState } from "react";
import { InstallToggleButtons } from "./InstallToggleButtons";

enum InstallMethod {
  QR = "qr",
  MANUAL = "manual",
}

type InstallESimToggleProps = {
  QRContent: React.ReactNode;
  ManualContent: React.ReactNode;
};

export const InstallESimToggle = ({
  QRContent,
  ManualContent,
}: InstallESimToggleProps) => {
  const [installMethod, setInstallMethod] = useState<InstallMethod>(
    InstallMethod.QR
  );

  return (
    <>
      <InstallToggleButtons
        installMethod={installMethod}
        setInstallMethod={setInstallMethod}
      />
      {installMethod === InstallMethod.QR ? QRContent : ManualContent}
    </>
  );
};
