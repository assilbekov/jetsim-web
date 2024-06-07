import { Card } from "@/models/Card";
import { Location } from "@/models/Location";
import * as React from "react";
import { CircledCountryImage } from "../CircledCountryImage";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { clsx } from "@/utils";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { ProgressBar } from "./ProgressBar";

type ProfileCardProps = {
  card: Card;
  location: Location;
};

export function ProfileCard({ card, location }: ProfileCardProps) {
  console.log({ card, location });

  const getExpirationText = () => {
    const expirationDate = new Date(card.expiresAt);
    const currentDate = new Date();

    const diffTime = Math.abs(expirationDate.getTime() - currentDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.ceil(diffDays / 30);

    if (expirationDate < currentDate) {
      if (diffMonths > 1) {
        return `Expired ${diffMonths} months ago`;
      }

      return `Expired ${diffDays} days ago`;
    }

    return `Expires in ${diffDays} days`;
  };

  return (
    <div className="flex flex-col justify-between px-6 pt-5 pb-6 bg-white rounded-3xl border-2 border-solid border-slate-200 max-md:px-5">
      <div className="flex gap-4">
        <div className="w-full">
          <h3 className={getTypographyClass(TypographyVariants.Body)}>
            {location.title}
          </h3>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Body2),
              "text-text-600 mt-0.5"
            )}
          >
            {getExpirationText()}
          </p>
        </div>
        <CircledCountryImage
          countryCode={location.countryCode}
          width={40}
          height={40}
          loading="lazy"
        />
      </div>
      <div
        className={clsx(
          getTypographyClass(TypographyVariants.Body),
          "flex justify-between mt-16"
        )}
      >
        <p>14,32 GB</p>
        <p className="text-text-600">16,00</p>
      </div>
      <ProgressBar progress={32} />
      <div className="flex gap-4 justify-between items-center mt-6">
        <PrimaryButton className="w-full">Buy new plan</PrimaryButton>
        <SecondaryButton className="w-full py-[14px]">
          View details
        </SecondaryButton>
      </div>
    </div>
  );
}
