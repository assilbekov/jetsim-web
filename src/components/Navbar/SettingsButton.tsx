import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

export const SettingsButton = ({
  children,
  className,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...restProps}
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "flex border-b-2 w-full items-center gap-2 text-text-100 border-gray-200 last:border-0 p-4 hover:bg-[#C3D4D9] active:bg-[#EDF1F2] transition duration-100 ease-in-out disabled:bg-[#FFE0D1] disabled:cursor-not-allowed first:rounded-t-2xl last:rounded-b-2xl",
        className ?? ""
      )}
    >
      {children}
    </button>
  );
};
