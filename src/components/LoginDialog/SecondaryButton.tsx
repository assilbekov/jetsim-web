import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

export const SecondaryButton = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "px-8 py-4 mt-4 text-white text-center bg-orange-600 cursor-pointer rounded-[32px] hover:bg-secondary-700 active:bg-secondary-300 transition duration-100 ease-in-out"
      )}
    >
      {children}
    </button>
  );
};
