import { useTranslations } from "next-intl";
import { LandingContainer } from "./LandingContainer";
import { Location } from "@/models/Location";
import Image from "next/image";
import { Card } from "./Card";
import { clsx } from "@/utils";
import {
  Typography,
  TypographyVariants,
  getTypographyClass,
  matchTypographyMediaQuery,
} from "./Typography";
import { fetchTopCountries } from "@/api/locations";
import Link from "next/link";

const ALL_COUNTRIES_NUMBER = 150;

type CountryCardProps = {
  country: Location;
  className?: string;
};

// Fix navigation issue.
const CountryCard = ({ country, className }: CountryCardProps) => {
  return (
    <Link
      key={country.title}
      className={className}
      href={`/en/places/${country.placeID}`}
    >
      <div className="flex gap-4 px-5 py-[14px] items-center border-2 border-[#E9F0F2] hover:bg-[#EBEFF0] active:bg-[#C3D4D9] rounded-xl cursor-pointer active:border-[#C3D4D9] transition duration-200 ease-in-out">
        <div className="w-[34px] h-[34px] md:w-10 md:h-10 flex items-center rounded-full">
          <Image
            src={`https://hatscripts.github.io/circle-flags/flags/${country.countryCode.toLowerCase()}.svg`}
            width={40}
            height={40}
            alt={`flag of ${country.countryCode}`}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <p
            className={matchTypographyMediaQuery({
              default: TypographyVariants.Caption,
              md: TypographyVariants.Body,
            })}
          >
            {country.title}
          </p>
          <p
            className={clsx(
              "text-text-600",
              getTypographyClass(TypographyVariants.Caption)
            )}
          >
            from $2/day
          </p>
        </div>
      </div>
    </Link>
  );
};

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

const ViewAllCard = () => {
  return (
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
          {ALL_COUNTRIES_NUMBER} countries
        </p>
      </div>
      <div className="w-[34px] h-[34px] flex items-center justify-end rounded-full">
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export const Recommendations = async () => {
  const t = useTranslations("MainPage");
  const topCountries = await fetchTopCountries(11);

  return (
    <LandingContainer>
      <Card>
        <Typography variant={TypographyVariants.H2}>
          {t("where_do_you_want_to_go")}
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
          <ViewAllCard />
        </div>
      </Card>
    </LandingContainer>
  );
};
