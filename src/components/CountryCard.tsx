"use client";

import { Link } from "@/navigation";
import { Location } from "@/models/Location";
import {
  TypographyVariants,
  getTypographyClass,
  matchTypographyMediaQuery,
} from "./Typography";
import { clsx } from "@/utils";
import { CircledCountryImage } from "./CircledCountryImage";
import { convertLocationBestCost } from "@/converters/location";
import { handleMainPageCountryClickEvent } from "@/gtm-events";

type CountryCardProps = {
  country: Location;
  className?: string;
};

// Fix navigation issue.
export const CountryCard = ({ country, className }: CountryCardProps) => {
  return (
    <Link
      key={country.title}
      className={className}
      href={`/places/${country.placeID}`}
      onClick={() => handleMainPageCountryClickEvent(country.placeID)}
    >
      <div className="flex h-full gap-4 px-5 py-[14px] items-center border-2 border-[#E9F0F2] hover:bg-[#EBEFF0] active:bg-[#C3D4D9] rounded-xl cursor-pointer active:border-[#C3D4D9] transition duration-200 ease-in-out">
        <div className="w-[34px] h-[34px] md:min-w-10 md:min-h-10 flex items-center rounded-full">
          <CircledCountryImage
            countryCode={country.countryCode}
            width={40}
            height={40}
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
          {country.bestCost && (
            <p
              className={clsx(
                "text-text-600",
                getTypographyClass(TypographyVariants.Caption)
              )}
            >
              {convertLocationBestCost(country)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
