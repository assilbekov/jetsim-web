import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

type SocialLoginButtonProps = {
  icon: string;
  label: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const SocialLoginButton = ({ icon, label }: SocialLoginButtonProps) => {
  return (
    <button className="flex gap-2 items-center cursor-pointer justify-center px-5 py-4 mt-3 border-2 border-solid border-slate-200 rounded-[32px] hover:bg-[#EDF1F2] active:bg-[#C3D4D9] active:border-[#C3D4D9] transition duration-100 ease-in-out">
      <img loading="lazy" src={icon} className="shrink-0 w-6 aspect-square" />
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
