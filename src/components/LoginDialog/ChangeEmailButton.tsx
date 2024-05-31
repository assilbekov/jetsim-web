import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

export const ChangeEmailButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      {...props}
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "px-6 py-4 bg-white border-2 border-solid border-slate-200 rounded-[32px] hover:bg-[#EDF1F2] active:bg-[#C3D4D9] active:border-[#C3D4D9] transition duration-100 ease-in-out",
        props.className ?? ""
      )}
    >
      Change email
    </button>
  );
};
