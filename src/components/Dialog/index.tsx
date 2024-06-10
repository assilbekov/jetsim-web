"use client";

import Image from "next/image";
import { useEffect } from "react";

type DialogProps = {
  onClose: () => void;
};

export const Dialog = ({ onClose }: DialogProps) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);

  return (
    <>
      <div className="fixed inset-0 overflow-y-scroll h-screen w-screen z-[9999]">
        <div className=" flex justify-center flex-col items-center mt-[70px] pb-[108px] gap-6">
          <div className="flex flex-col px-6 pt-5 pb-6 bg-white rounded-3xl h-[640px] w-[640px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]">
            <div className="flex gap-0.5 justify-center items-center px-px">
              content
            </div>
          </div>
          <div className="flex flex-col px-6 pt-5 pb-6 bg-white rounded-3xl h-[640px] w-[640px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]">
            <div className="flex gap-0.5 justify-center items-center px-px">
              second content
            </div>
          </div>
        </div>
      </div>

      <button className="fixed right-8 top-8 z-[9999] p-[14px] bg-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]">
        <Image
          src="/icons/gray/close.svg"
          alt="close icon"
          width={28}
          height={28}
        />
      </button>

      <div
        className="fixed inset-0 w-screen h-screen bg-[#7C7D7E]/70 z-[9998]"
        onClick={onClose}
      />
    </>
  );
};
