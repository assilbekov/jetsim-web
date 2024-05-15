import { clsx } from "@/utils";

export enum TypographyVariants {
  H1 = "h1",
  H2 = "h2",
  Subheader = "subheader",
  Body = "body",
}

type TypographyProps = {
  variant: TypographyVariants;
  children: React.ReactNode;
  className?: string;
};

export const Typography = ({
  variant,
  className,
  children,
}: TypographyProps) => {
  switch (variant) {
    case TypographyVariants.H1:
      return (
        <h1
          className={clsx(
            "text-[56px] font-medium leading-[64px] text-primary-100",
            className || ""
          )}
        >
          {children}
        </h1>
      );
    case TypographyVariants.H2:
      return (
        <h2
          className={clsx(
            "text-[34px] font-medium leading-[38px] text-text-100",
            className || ""
          )}
        >
          {children}
        </h2>
      );
    case TypographyVariants.Subheader:
      return (
        <h3
          className={clsx(
            "text-[20px] font-medium leading-[26px] text-text-100",
            className || ""
          )}
        >
          {children}
        </h3>
      );
    case TypographyVariants.Body:
      return (
        <p
          className={clsx(
            "text-[16px] font-medium leading-[22px] text-text-600",
            className || ""
          )}
        >
          {children}
        </p>
      );
  }
};
