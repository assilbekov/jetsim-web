import { clsx } from "@/utils";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Search } from "../Search";
import { AllDestinationsList } from "./AllDestinationsList";
import { useTranslations } from "next-intl";

export const AllDestinations = ({
  locale,
  page,
}: {
  locale: string;
  page: "Main" | "All-Destinations";
}) => {
  const t = useTranslations("AllDestinations");
  return (
    <LandingContainer>
      <Card className="xxxs:px-6 xxs:py-4 xs:py-6 lg:pt-12">
        <div className="xl:mx-[120px] xxl:mx-[240px]">
          <h1
            className={clsx(
              getTypographyClass(TypographyVariants.H2),
              "md:font-interTight md:text-[56px] md:leading-[64px] md:font-medium md:tracking-[1.12px] text-center"
            )}
          >
            {t("title")}
          </h1>
          <h3
            className={clsx(
              getTypographyClass(TypographyVariants.Body),
              "md:text-2xl md:leading-[30px] text-center mt-4 mb-6 md:mb-9 text-text-600"
            )}
          >
            {t("description")}
          </h3>
          <Search locale={locale} page={page} />
        </div>
        <AllDestinationsList locale={locale} page={page} />
      </Card>
    </LandingContainer>
  );
};
