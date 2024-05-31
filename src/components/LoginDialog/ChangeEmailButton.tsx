import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

export function ChangeEmailButton() {
  return (
    <button
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "px-6 py-4 bg-white border-2 border-solid border-slate-200 rounded-[32px] hover:bg-[#EDF1F2] active:bg-[#C3D4D9] active:border-[#C3D4D9] transition duration-100 ease-in-out",
        "absolute bottom-0 right-0"
      )}
    >
      Change email
    </button>
  );
}
