"use client";

import { Card } from "@/models/Card";
import Image from "next/image";
import * as React from "react";
import { TagButton } from "../buttons/TagButton";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { CopyButton } from "../buttons/CopyButton";
import { ManualInstall } from "./ManualInstall";
import { QRCodeInstall } from "./QRCodeInstall";
import { ReinstallESim } from "./ReinstallESim";

enum InstallMethod {
  QR = "qr",
  MANUAL = "manual",
}

type InstallESimProps = {
  card: Card;
};

export const InstallESim = ({ card }: InstallESimProps) => {
  const [installMethod, setInstallMethod] = React.useState<InstallMethod>(
    InstallMethod.QR
  );

  return (
    <div className="flex flex-col justify-center self-stretch p-6 mx-auto w-full text-base font-medium bg-white max-w-[480px]">
      <ReinstallESim />
      <div className="flex gap-4 justify-center mt-6 leading-[137.5%] text-slate-950">
        <TagButton
          active={installMethod === InstallMethod.QR}
          onClick={() => setInstallMethod(InstallMethod.QR)}
        >
          QR code install
        </TagButton>
        <TagButton
          active={installMethod === InstallMethod.MANUAL}
          onClick={() => setInstallMethod(InstallMethod.MANUAL)}
        >
          Manual install
        </TagButton>
      </div>
      {installMethod === InstallMethod.QR ? (
        <QRCodeInstall card={card} />
      ) : (
        <ManualInstall card={card} />
      )}
    </div>
  );
};
