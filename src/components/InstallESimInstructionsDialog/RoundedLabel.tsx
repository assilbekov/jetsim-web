import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

type RoundedLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export const RoundedLabel = ({ children, className }: RoundedLabelProps) => (
  <div
    className={clsx(
      getTypographyClass(TypographyVariants.Body),
      "w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto",
      className ?? ""
    )}
  >
    {children}
  </div>
);
