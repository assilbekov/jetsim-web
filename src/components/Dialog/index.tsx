"use client";

import { clsx } from "@/utils";
import { useEffect } from "react";

type DialogProps = {
  children: React.ReactNode;
  onClose: () => void;
  dialogClassName?: string;
  dialogContentClassName?: string;
  mdHeightAuto?: boolean;
};

export const Dialog = ({
  onClose,
  children,
  dialogClassName,
  dialogContentClassName,
  mdHeightAuto,
}: DialogProps) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div
        className={clsx(
          "fixed bottom-0 left-0 h-[calc(100vh-100px)] md:max-h-[calc(100vh-50px)] w-screen md:w-[576px] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[9999] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]",
          dialogClassName ?? "",
          // This is a workaround for the dialog height issue on a desktop
          // https://www.notion.so/02d11b8b261c43169da6074dc13010c3?pvs=25. P-4
          mdHeightAuto ? "md:h-auto" : "md:h-full"
        )}
      >
        <div
          className={clsx(
            "h-full animate-mobile-dialog bg-white rounded-3xl rounded-b-none md:rounded-b-3xl pt-3",
            dialogContentClassName ?? ""
          )}
        >
          <div className="flex flex-col items-center gap-6 max-h-full overflow-y-scroll pt-4 px-6 pb-20 md:pb-5">
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
