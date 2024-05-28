"use client";

import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { clsx } from "@/utils";

export const PlansHelperInfo = () => {
  return (
    <div className="flex justify-center relative items-center min-w-6 min-h-6 before:absolute before:top-1/2 before:left-1/2 before:w-10 before:h-10 before:-translate-x-1/2 before:-translate-y-1/2">
      <Image
        src="/icons/gray/info.svg"
        alt="info icon"
        width={16}
        height={16}
      />
      <div className="absolute w-72 -right-4 top-12 p-4 pt-[14px] flex gap-2 items-start z-10 rounded-2xl border-[2px] border-[#E9F0F2] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]">
        <div>
          <h6 className={getTypographyClass(TypographyVariants.Caption)}>
            Unlimited plans
          </h6>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Caption),
              "text-text-600 mt-1 font-normal"
            )}
          >
            Unlimited plans are subject to ISP policies and fair use policies,
            which may include data throttling and usage restrictions after a
            certain threshold
          </p>
        </div>
        <Image
          src="/icons/gray/close.svg"
          alt="close icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
