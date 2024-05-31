import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { ButtonHTMLAttributes } from "react";
import Image from "next/image";

type SocialLoginButtonProps = {
  icon: string;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SocialLoginButton = ({
  icon,
  label,
  className,
  ...restProps
}: SocialLoginButtonProps) => {
  return (
    <button
      {...restProps}
      className={clsx(
        "flex gap-2 items-center cursor-pointer justify-center px-5 py-4 mt-3 border-2 border-solid border-slate-200 rounded-[32px] hover:bg-[#EDF1F2] active:bg-[#C3D4D9] active:border-[#C3D4D9] transition duration-100 ease-in-out",
        className ?? ""
      )}
    >
      <Image
        loading="lazy"
        src={icon}
        width={24}
        height={24}
        alt={`${label} icon`}
        className="shrink-0 w-6 aspect-square"
      />
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "flex-1 text-center"
        )}
      >
        {label}
      </p>
    </button>
  );
};
