"use client";

import { useEffect } from "react";

type DialogProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Dialog = ({ onClose, children }: DialogProps) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    }
  }, []);

  return (
    <>
      <div className="fixed bottom-0 left-0 overflow-y-scroll h-screen w-screen z-[9999]">
        <div className=" flex justify-center flex-col items-center mt-[32px] gap-6 animate-mobile-dialog">
          <div className="flex flex-col relative bg-white rounded-3xl rounded-b-none w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] py-5 px-6 pb-20">
            {children}
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
