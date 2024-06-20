"use client";

import { fetchLocation, fetchLocationCover } from "@/api/locations";
import { useQuery } from "@tanstack/react-query";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import {
  TypographyVariants,
  getTypographyClass,
  matchTypographyMediaQuery,
} from "../Typography";
import { clsx } from "@/utils";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "../Skeleton";
import "./styles.css";
import { useState } from "react";
import { BackgroundImage } from "./BackgroundImage";
import { LoginDialog } from "../LoginDialog";
import { CircledCountryImage } from "../CircledCountryImage";
import { PaymentMethodsInfo } from "./PaymentMethodsInfo";
import { SelectPackagesBuyForm } from "./SelectPackagesBuyForm";

type PlacePackagesCardProps = {
  placeId: string;
  locale: string;
};

export const PlacePackagesCard = ({ placeId }: PlacePackagesCardProps) => {
  const searchParams = useSearchParams();

  const [loginRedirectUrl, setLoginRedirectUrl] = useState<string>("");

  const locationQuery = useQuery({
    queryKey: ["place-packages", placeId],
    queryFn: async () => {
      const locs = await fetchLocation(placeId);
      return locs;
    },
    staleTime: 1000 * 60 * 5,
  });
  const locationCoverQuery = useQuery({
    queryKey: ["place-packages-cover", placeId],
    queryFn: async () => {
      return await fetchLocationCover(placeId);
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const handleCheckout = (selectedPackageId: string) => {
    if (!selectedPackageId) return;

    const accessToken = localStorage.getItem("accessToken");
    const redirectUrl = `${
      window.location.origin
    }/payment?packageID=${selectedPackageId}&placeID=${placeId}&${searchParams.toString()}`;

    if (!accessToken) {
      return setLoginRedirectUrl(redirectUrl);
    }

    window.location.href = redirectUrl;
  };

  return (
    <LandingContainer className="md:flex">
      <Card className="flex gap-4 flex-col pt-0 pb-6 md:min-w-[494px] md:w-[494px] z-[1]">
        <div className="flex flex-col gap-1 xxs:gap-2">
          <div className="flex gap-1 xxs:gap-[10px] xs:gap-4 sm:gap-6 items-center">
            <h3
              className={clsx(
                matchTypographyMediaQuery({
                  default: TypographyVariants.Subheader,
                  xxs: TypographyVariants.H2,
                }),
                "w-full flex gap-2"
              )}
            >
              eSIM for{" "}
              {locationQuery.isFetched ? (
                locationQuery.data?.title
              ) : (
                <Skeleton className="min-w-40 xxs:min-w-40 rounded-lg" />
              )}
            </h3>
            {!locationQuery.isFetched ? (
              <Skeleton className="min-w-7 min-h-7 xxs:min-w-9 xxs:min-h-9 rounded-full" />
            ) : (
              <CircledCountryImage
                countryCode={locationQuery.data?.countryCode || ""}
                width={36}
                height={36}
                className="w-7 h-7 xxs:w-9 xxs:h-9"
              />
            )}
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
        <SelectPackagesBuyForm
          placeId={placeId}
          infoContent={<PaymentMethodsInfo />}
          onSubmit={handleCheckout}
          updateSearchParams
        />
      </Card>
      <BackgroundImage
        imageLoaded={locationCoverQuery.isFetched}
        url={locationCoverQuery.data?.url || "/support-background.png"}
        alt={`${placeId} cover image`}
      />
      {loginRedirectUrl && (
        <LoginDialog
          onClose={() => setLoginRedirectUrl("")}
          redirectUrl={loginRedirectUrl}
        />
      )}
    </LandingContainer>
  );
};
