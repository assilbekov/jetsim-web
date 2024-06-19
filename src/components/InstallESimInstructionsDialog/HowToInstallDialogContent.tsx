"use client";

import { useState } from "react";
import { DialogTitle } from "../Dialog/DialogTitle";
import {
  InstallToggleButtons,
  InstallMethod,
} from "../InstallESim/InstallToggleButtons";
import { Card } from "@/models/Card";
import { QRInstall } from "./QRInstall";
import { ManualInstall } from "./ManualInstall";

type HowToInstallDialogContentProps = {
  card: Card;
};

export const HowToInstallDialogContent = ({
  card,
}: HowToInstallDialogContentProps) => {
  const [installMethod, setInstallMethod] = useState<InstallMethod>(
    InstallMethod.QR
  );

  return (
    <>
      <DialogTitle title="How to install eSIM" onClose={() => {}} />
      <InstallToggleButtons
        installMethod={installMethod}
        setInstallMethod={setInstallMethod}
      />
      {installMethod === InstallMethod.QR ? (
        <>
          <QRInstall card={card} />
          <ManualInstall card={card} />
        </>
      ) : (
        <ManualInstall card={card} />
      )}
    </>
  );
};
