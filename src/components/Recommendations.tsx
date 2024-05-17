import { useTranslations } from "next-intl";
import { Header, HeadersVariant } from "./Header";
import { LandingContainer } from "./LandingContainer";
import { Location } from "@/models/Location";
import Image from "next/image";
import { Card } from "./Card";
import { clsx } from "@/utils";

const mockCountries: Location[] = [
  {
    title: "United States",
    coordinate: {
      lat: 37.09024,
      lng: -95.712891,
    },
    countryCode: "US",
    bestCost: null,
    placeID: "united-states",
  },
  {
    title: "Australia",
    coordinate: {
      lat: -25.274398,
      lng: 133.775136,
    },
    countryCode: "AU",
    bestCost: null,
    placeID: "australia",
  },
  {
    title: "Brazil",
    coordinate: {
      lat: -14.235004,
      lng: -51.92528,
    },
    countryCode: "BR",
    bestCost: null,
    placeID: "brazil",
  },
  {
    title: "Canada",
    coordinate: {
      lat: 56.130366,
      lng: -106.346771,
    },
    countryCode: "CA",
    bestCost: null,
    placeID: "canada",
  },
  {
    title: "China",
    coordinate: {
      lat: 35.86166,
      lng: 104.195397,
    },
    countryCode: "CN",
    bestCost: null,
    placeID: "china",
  },
  {
    title: "France",
    coordinate: {
      lat: 46.603354,
      lng: 1.888334,
    },
    countryCode: "FR",
    bestCost: null,
    placeID: "france",
  },
  {
    title: "Germany",
    coordinate: {
      lat: 51.16569,
      lng: 10.451526,
    },
    countryCode: "DE",
    bestCost: null,
    placeID: "germany",
  },
  {
    title: "India",
    coordinate: {
      lat: 20.593684,
      lng: 78.96288,
    },
    countryCode: "IN",
    bestCost: null,
    placeID: "india",
  },
  {
    title: "Italy",
    coordinate: {
      lat: 41.87194,
      lng: 12.56738,
    },
    countryCode: "IT",
    bestCost: null,
    placeID: "italy",
  },
  {
    title: "Japan",
    coordinate: {
      lat: 36.204824,
      lng: 138.252924,
    },
    countryCode: "JP",
    bestCost: null,
    placeID: "japan",
  },
  {
    title: "Mexico",
    coordinate: {
      lat: 23.634501,
      lng: -102.552784,
    },
    countryCode: "MX",
    bestCost: null,
    placeID: "mexico",
  },
  {
    title: "Russia",
    coordinate: {
      lat: 61.52401,
      lng: 105.318756,
    },
    countryCode: "RU",
    bestCost: null,
    placeID: "russia",
  },
];

const ALL_COUNTRIES_NUMBER = 150;

type CountryCardProps = {
  country: Location;
  className?: string;
};

const CountryCard = ({ country, className }: CountryCardProps) => {
  return (
    <div
      key={country.title}
      className={clsx(
        "flex gap-4 px-5 py-[14px] items-center border-2 border-[#E9F0F2] hover:bg-[#EBEFF0] rounded-2xl",
        className ?? ""
      )}
    >
      <div className="w-[34px] h-[34px] flex items-center rounded-full">
        <Image
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.countryCode}.svg`}
          width={40}
          height={40}
          alt={`flag of ${country.countryCode}`}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-base leading-[22px] font-medium">{country.title}</p>
        <p className="text-base leading-[22px] font-medium text-text-600">
          from $2/day
        </p>
      </div>
    </div>
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
    <div className="flex gap-4 px-5 py-[14px] items-center justify-between border-2 border-[#E9F0F2] hover:bg-[#EBEFF0] rounded-2xl">
      <div className="flex flex-col gap-0.5">
        <p className="text-base leading-[22px] font-medium">View all</p>
        <p className="text-base leading-[22px] font-medium text-text-600">
          {ALL_COUNTRIES_NUMBER} countries
        </p>
      </div>
      <div className="w-[34px] h-[34px] flex items-center justify-end rounded-full">
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export const Recommendations = () => {
  const t = useTranslations("MainPage");

  return (
    <LandingContainer>
      <Card>
        <Header variant={HeadersVariant.H2}>
          {t("where_do_you_want_to_go")}
        </Header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 md:mt-6 lg-mt-8">
          {mockCountries.slice(0, 11).map((country, index) => (
            <CountryCard
              key={country.title}
              country={country}
              className={(() => {
                switch (true) {
                  case index >= 0 && index < 4:
                    return "";
                  case index >= 4 && index < 7:
                    return "hidden sm:flex";
                  case index >= 7:
                  default:
                    return "hidden lg:flex";
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
