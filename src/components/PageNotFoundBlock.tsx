import { clsx } from "@/utils";
import { Card } from "./Card";
import { LandingContainer } from "./LandingContainer";
import { TypographyVariants, getTypographyClass } from "./Typography";
import { useTranslations } from "next-intl";

export const PageNotFoundBlock = () => {
  const t = useTranslations("NotFoundPage");
  return (
    <LandingContainer>
      <Card className="lg:px-[120px] lg:py-12 xxl:px-[240px]">
        <div className="flex flex-col gap-4 xs:gap-5 sm:gap-4 lg:gap-5">
          <h1
            className={clsx(
              getTypographyClass(TypographyVariants.Subheader),
              "xxs:font-interTight xxs:text-[34px] xxs:leading-[38px] xxs:font-medium xxs:tracking-[0.68px]",
              "lg:text-[56px] lg:leading-[64px] lg:font-interTight lg:tracking-[1.12px]",
              "text-center"
            )}
          >
            {t("title")}
          </h1>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Caption),
              "lg:font-inter lg:text-xl lg:leading-[26px] lg:font-medium text-text-600",
              "text-center"
            )}
          >
            {t("description")}
          </p>
        </div>
      </Card>
    </LandingContainer>
  );
};
