import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

export const TertiaryButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "px-8 py-4 text-text-100 text-center border-none cursor-pointer rounded-[32px] hover:bg-[#C3D4D9] active:bg-[#EDF1F2] transition duration-100 ease-in-out disabled:bg-[#FFE0D1] disabled:cursor-not-allowed",
        props.className ?? ""
      )}
    >
      {children}
    </button>
  );
};
