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
      <div className="fixed bottom-0 left-0 overflow-y-scroll h-screen w-screen z-[9999]">
        <div className=" flex justify-center flex-col items-center mt-[32px] gap-6 animate-mobile-dialog">
          <div className="flex flex-col relative bg-white rounded-3xl rounded-b-none h-[1640px] w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]">
            <div className="flex gap-0.5 justify-center items-center px-px">
              content
            </div>
            <button className="absolute right-8 top-8 z-[9999] p-[14px] bg-white rounded-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]" onClick={onClose}>
              <Image
                src="/icons/gray/close.svg"
                alt="close icon"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 w-screen h-screen bg-[#7C7D7E]/70 z-[9998]"
        onClick={onClose}
      />
    </>
  );
};
