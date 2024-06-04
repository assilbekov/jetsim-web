import { clsx } from "@/utils";
import { ButtonHTMLAttributes } from "react";
import { TypographyVariants, getTypographyClass } from "../Typography";

type TagButtonProps = {
  active: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const TagButton = ({
  children,
  className,
  active,
  ...restProps
}: TagButtonProps) => {
  return (
    <button
      {...restProps}
      aria-pressed={active}
      className={clsx(
        "py-4 px-8 rounded-[44px] text-text-600 aria-pressed:text-text-100 hover:bg-[#E9F0F2] aria-pressed:bg-[#E9F0F2] transition duration-200 ease-in-out",
        getTypographyClass(TypographyVariants.Caption),
        className ?? ""
      )}
    >
      {children}
    </button>
  );
};
