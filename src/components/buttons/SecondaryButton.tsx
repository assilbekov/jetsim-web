import React, { forwardRef } from "react";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

export const SecondaryButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "px-8 py-4 text-text-100 text-center cursor-pointer rounded-[32px] bg-white border-2 border-[#E9F0F2] hover:bg-[#C3D4D9] hover:border-[#C3D4D9] active:bg-[#EDF1F2] active:border-[#EDF1F2] transition duration-100 ease-in-out disabled:bg-[#FFE0D1] disabled:cursor-not-allowed",
        props.className ?? ""
      )}
    >
      {children}
    </button>
  );
});

SecondaryButton.displayName = "SecondaryButton";
