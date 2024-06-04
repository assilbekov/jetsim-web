"use client";

import { Card } from "@/models/Card";
import Image from "next/image";
import * as React from "react";
import { TagButton } from "../buttons/TagButton";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { CopyButton } from "../buttons/CopyButton";

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

  const [smdp, addr, lpaCode] = card.lpaCode.split("$");
  const smdpAddr = `${smdp}$${addr}`;
  const lpaActivationCode = `$${lpaCode}`;

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
      <div className="flex flex-col p-6 mt-6 rounded-xl bg-slate-50 leading-[137.5%] text-slate-950">
        <div>SM-DP+ Address</div>
        <div className="mt-1 text-xl leading-7">{smdpAddr}</div>
        <CopyButton className="mt-4 w-full" text={smdpAddr} />
      </div>
      <div className="flex flex-col justify-center p-6 mt-4 rounded-xl bg-slate-50 leading-[137.5%] text-slate-950">
        <div>Activation Code</div>
        <div className="mt-1 text-xl leading-7">{lpaActivationCode}</div>
        <CopyButton className="mt-4 w-full" text={lpaActivationCode} />
      </div>
      <div className="mt-6 text-2xl text-center text-black">
        Use this codes to add eSIM
      </div>
      <div className="mt-3 leading-6 text-center text-gray-400">
        Copy this code when you manully adding eSIM
      </div>
      <PrimaryButton className="mt-4">See instructions</PrimaryButton>
    </div>
  );
};
