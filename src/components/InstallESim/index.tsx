"use client";

import { Card } from "@/models/Card";
import Image from "next/image";
import * as React from "react";
import { TagButton } from "../buttons/TagButton";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { CopyButton } from "../buttons/CopyButton";
import { ManualInstall } from "./ManualInstall";
import { QRCodeInstall } from "./QRCodeInstall";

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
      <div className="flex gap-3 p-4 bg-white rounded-xl border-2 border-solid border-slate-200">
        <Image
          loading="lazy"
          src="/icons/info.svg"
          alt="info icon"
          width={40}
          height={40}
          className="shrink-0 self-start w-10 aspect-square"
        />
        <div className="flex flex-col flex-1">
          <div className="leading-[137.5%] text-slate-950">
            You need to install eSIM again
          </div>
          <div className="leading-6 text-gray-400">
            Current eSIM will remain active until it expires
          </div>
        </div>
      </div>
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
