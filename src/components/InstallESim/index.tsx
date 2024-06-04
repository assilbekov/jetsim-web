import { Card } from "@/models/Card";
import * as React from "react";

type InstallESimProps = {
  card: Card;
};

export const InstallESim = ({ card }: InstallESimProps) => {
  return (
    <div className="flex flex-col justify-center self-stretch p-6 mx-auto w-full text-base font-medium bg-white max-w-[480px]">
      <div className="flex gap-3 p-4 bg-white rounded-xl border-2 border-solid border-slate-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78eb07c90d3daf2aec5ef0fa97acc78bbaadf9e4c17a3b5e2f9e762f7811f19d?apiKey=4d29b65bc77c4658ad8f90690919294c&"
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
        <div className="flex-1 justify-center px-5 py-4 bg-white border-2 border-solid border-slate-200 rounded-[44px]">
          QR code install
        </div>
        <div className="flex-1 justify-center px-6 py-4 bg-slate-200 rounded-[44px]">
          Manual install
        </div>
      </div>
      <div className="flex flex-col p-6 mt-6 rounded-xl bg-slate-50 leading-[137.5%] text-slate-950">
        <div>SM-DP+ Address</div>
        <div className="mt-1 text-xl leading-7">LPA:1$consumer.rsp.global</div>
        <div className="flex justify-center items-center px-6 py-4 mt-4 w-full whitespace-nowrap bg-white border-2 border-solid border-slate-200 rounded-[32px]">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/94e8a4203ef3620181c8062e68d328fc065e4a94bc077b825d8963814b366b52?apiKey=4d29b65bc77c4658ad8f90690919294c&"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div>Copy</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 mt-4 rounded-xl bg-slate-50 leading-[137.5%] text-slate-950">
        <div>Activation Code</div>
        <div className="mt-1 text-xl leading-7">$TN202307101635430B87FF83</div>
        <div className="flex justify-center items-center px-6 py-4 mt-4 w-full whitespace-nowrap bg-white border-2 border-solid border-slate-200 rounded-[32px]">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/94e8a4203ef3620181c8062e68d328fc065e4a94bc077b825d8963814b366b52?apiKey=4d29b65bc77c4658ad8f90690919294c&"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div>Copy</div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-2xl text-center text-black">
        Use this codes to add eSIM
      </div>
      <div className="mt-3 leading-6 text-center text-gray-400">
        Copy this code when you manully adding eSIM
      </div>
      <div className="justify-center items-center px-8 py-4 mt-4 text-white bg-orange-600 leading-[137.5%] rounded-[32px]">
        See instructions
      </div>
    </div>
  );
};
