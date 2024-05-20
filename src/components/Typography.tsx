import { clsx } from "@/utils";

export enum TypographyVariants {
  H1 = "h1",
  H2 = "h2",
  Subheader = "subheader",
  Body = "body",
  Caption = "caption",
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
            "text-text-100",
            "text-2xl leading-[30px] font-inter font-medium",
            "xxs:text-[34px] xxs:leading-[38px] xxs:font-interTight xxs:tracking-[0.68px]",
            "lg:text-[56px] lg:leading-[64px] lg:font-interTight lg:tracking-[1.12px]",
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
            "text-text-100",
            "text-2xl leading-[30px] font-inter font-medium",
            "md:text-[34px] md:leading-[38px] md:font-interTight md:tracking-[0.68px]",
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
            "text-text-100",
            "font-inter text-base leading-[22px] font-medium",
            "md:text-2xl md:leading-[30px] md:font-inter md:font-medium",
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
            "text-text-100",
            "font-inter text-base leading-[22px] font-medium",
            "md:font-inter md:text-xl md:leading-[26px]",
            className || ""
          )}
        >
          {children}
        </p>
      );
    case TypographyVariants.Caption:
      return (
        <p
          className={clsx(
            "text-text-600",
            "font-inter text-base leading-[22px] font-medium",
            className || ""
          )}
        >
          {children}
        </p>
      );
  }
};
