"use client";

import { fetchLocation, fetchLocationCover } from "@/api/locations";
import { useQuery } from "@tanstack/react-query";
import { LandingContainer } from "./LandingContainer";
import { Card } from "./Card";
import Image from "next/image";
import {
  TypographyVariants,
  getTypographyClass,
  matchTypographyMediaQuery,
} from "./Typography";
import { clsx } from "@/utils";

type PlacePackagesCardProps = {
  placeId: string;
};

export const PlacePackagesCard = ({ placeId }: PlacePackagesCardProps) => {
  const locationQuery = useQuery({
    queryKey: ["place-packages", placeId],
    queryFn: async () => fetchLocation(placeId),
  });
  const locationCoverQuery = useQuery({
    queryKey: ["place-packages-cover", placeId],
    queryFn: async () => fetchLocationCover(placeId),
  });

  return (
    <LandingContainer>
      <Card className="flex gap-4 flex-col">
        <div className="flex flex-col gap-1 xxs:gap-2">
          <div className="flex gap-1 xxs:gap-[10px] xs:gap-4 sm:gap-6 items-center">
            <h3
              className={clsx(
                matchTypographyMediaQuery({
                  default: TypographyVariants.Subheader,
                  xxs: TypographyVariants.H2,
                }),
                "w-full"
              )}
            >
              eSIM for {locationQuery.data?.title}
            </h3>
            <Image
              src={`https://hatscripts.github.io/circle-flags/flags/${locationQuery.data?.countryCode.toLowerCase()}.svg`}
              width={36}
              height={36}
              alt={`flag of ${locationQuery.data?.countryCode}`}
              className="w-7 h-7 xxs:w-9 xxs:h-9"
            />
          </div>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Caption),
              "text-text-600"
            )}
          >
            Unlimited and standard plans for travellers and remote workers
          </p>
        </div>
        <button
          className={clsx(
            "w-full py-3 xxs:py-4 px-8 bg-secondary-500 rounded-[32px] text-text-900 hover:bg-secondary-300 active:bg-secondary-700 transition duration-200 ease-in-out",
            getTypographyClass(TypographyVariants.Caption)
          )}
        >
          Go to checkout
        </button>
      </Card>
    </LandingContainer>
  );
};
