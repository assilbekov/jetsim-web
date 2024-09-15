import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import { Typography, TypographyVariants } from "../Typography";
import { fetchTopCountries } from "@/api/locations";
import { CountryCard } from "../CountryCard";
import { useTranslations } from "next-intl";
import { ViewAllCard } from "./ViewAllCard";

const Title = () => {
  const t = useTranslations("Recommendations");
  return <Typography variant={TypographyVariants.H2}>{t("title")}</Typography>;
};

export const Recommendations = async ({
  locale,
  page,
}: {
  locale: string;
  page: "Main" | "All-Destinations";
}) => {
  const topCountries = await fetchTopCountries(11, locale);

  return (
    <LandingContainer>
      <Card>
        <Title />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 md:mt-6 lg:mt-8">
          {topCountries.data.slice(0, 11).map((country, index) => (
            <CountryCard
              key={country.title}
              country={country}
              page={page}
              className={(() => {
                switch (true) {
                  case index >= 0 && index < 4:
                    return "";
                  case index >= 4 && index < 7:
                    return "hidden sm:block";
                  case index >= 7:
                  default:
                    return "hidden lg:block";
                }
              })()}
            />
          ))}
          <ViewAllCard count={topCountries.total} />
        </div>
      </Card>
    </LandingContainer>
  );
};
