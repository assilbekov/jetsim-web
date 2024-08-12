import { LandingContainer } from "./LandingContainer";
import { Card } from "./Card";
import { clsx } from "@/utils";
import {
  Typography,
  TypographyVariants,
  getTypographyClass,
  matchTypographyMediaQuery,
} from "./Typography";
import { fetchTopCountries } from "@/api/locations";
import { CountryCard } from "./CountryCard";
import { Link } from "@/navigation";

const ALL_COUNTRIES_NUMBER = 150;

const ArrowRightIcon = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="arrow right">
      <path
        id="background"
        d="M13.625 10.75H4.5V9.25H13.625L9.4375 5.0625L10.5 4L16.5 10L10.5 16L9.4375 14.9375L13.625 10.75Z"
        fill="#00141A"
      />
    </g>
  </svg>
);

const ViewAllCard = ({ count }: { count: number }) => {
  return (
    <Link href="/all-destinations">
      <div className="flex gap-4 px-5 py-[14px] items-center justify-between border-2 border-[#E9F0F2] hover:bg-[#EBEFF0] rounded-2xl cursor-pointer transition duration-200 ease-in-out">
        <div className="flex flex-col gap-0.5">
          <p
            className={matchTypographyMediaQuery({
              default: TypographyVariants.Caption,
              md: TypographyVariants.Body,
            })}
          >
            View all
          </p>
          <p
            className={clsx(
              "text-text-600",
              getTypographyClass(TypographyVariants.Caption)
            )}
          >
            {count || ALL_COUNTRIES_NUMBER} countries
          </p>
        </div>
        <div className="w-[34px] h-[34px] flex items-center justify-end rounded-full">
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
};

export const Recommendations = async () => {
  const topCountries = await fetchTopCountries(11);

  return (
    <LandingContainer>
      <Card>
        <Typography variant={TypographyVariants.H2}>
          Where are you going?
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 md:mt-6 lg:mt-8">
          {topCountries.data.slice(0, 11).map((country, index) => (
            <CountryCard
              key={country.title}
              country={country}
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
