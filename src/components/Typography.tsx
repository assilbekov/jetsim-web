import { clsx } from "@/utils";

export enum TypographyVariants {
  H1 = "h1",
  H2 = "h2",
  Subheader = "subheader",
  Body = "body",
  Caption = "caption",
}

const getTypographyClass = (variant: TypographyVariants) => {
  switch (variant) {
    case TypographyVariants.H1:
      return "font-interTight text-[56px] leading-[64px] font-medium tracking-[1.12px]";
    case TypographyVariants.H2:
      return "font-interTight text-[34px] leading-[38px] font-medium tracking-[0.68px]";
    case TypographyVariants.Subheader:
      return "font-inter text-2xl leading-[30px] font-medium";
    case TypographyVariants.Body:
      return "font-inter text-xl leading-[26px] font-medium";
    case TypographyVariants.Caption:
      return "font-inter text-base leading-[22px] font-medium";
  }
};

const addTypographyMediaQuery = (
  variant: TypographyVariants,
  screenSize: string
) => {
  const typographyClass = getTypographyClass(variant);
  return typographyClass
    .replace(/\s{2,}/g, " ")
    .trim()
    .split(" ")
    .map((className) => `${screenSize}:${className}`)
    .join(" ");
};

export const matchTypographyMediaQuery = (screenConfigs: {
  [screenSize: string | "default"]: TypographyVariants;
}) => {
  return Object.entries(screenConfigs)
    .map(([screenSize, variant]) =>
      screenSize === "default"
        ? getTypographyClass(variant)
        : addTypographyMediaQuery(variant, screenSize)
    )
    .join(" ");
};

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
