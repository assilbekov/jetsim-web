import { Card } from "@/models/Card";
import * as React from "react";

type QRCodeInstallProps = {
  card: Card;
};

export const QRCodeInstall = ({}: QRCodeInstallProps) => {
  return (
    <div className="flex flex-col justify-center text-base font-medium leading-6">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4efaec2b1691cb2bc56fc731f91839f75304acc32ac4c5cb5f5958abc423d248?apiKey=4d29b65bc77c4658ad8f90690919294c&"
        className="self-center w-full aspect-square fill-white max-w-[220px]"
      />
      <div className="mt-6 w-full text-2xl leading-8 text-center text-black">
        Scan this QR code from other device
      </div>
      <div className="mt-3 w-full leading-6 text-center text-gray-400">
        Share this QR code to other phone or laptop and scan it from there
      </div>
      <div className="justify-center items-center px-8 py-3 mt-4 w-full text-white bg-orange-600 rounded-[32px]">
        Share a QR code
      </div>
      <div className="justify-center items-center px-8 py-3 mt-4 w-full bg-white border-2 border-solid border-slate-200 rounded-[32px] text-slate-950">
        See instructions
      </div>
    </div>
  );
};
