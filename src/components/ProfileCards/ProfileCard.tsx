import { Card, CardStatus } from "@/models/Card";
import { Location } from "@/models/Location";
import * as React from "react";
import { CircledCountryImage } from "../CircledCountryImage";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { clsx, formatBytes } from "@/utils";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { ProgressBar, ProgressBarSignleLine } from "./ProgressBar";

type ProfileCardProps = {
  card: Card;
  location: Location;
  onInstallClick: (card: Card, location: Location) => void;
  onDetailsClick: (card: Card, location: Location) => void;
  onBuyNewPlanClick: (card: Card, location: Location) => void;
};

export function ProfileCard({
  card,
  location,
  onBuyNewPlanClick,
  onDetailsClick,
  onInstallClick,
}: ProfileCardProps) {
  const getExpirationText = () => {
    const expirationDate = new Date(card.expiresAt);
    const currentDate = new Date();

    const diffTime = Math.abs(expirationDate.getTime() - currentDate.getTime());
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.round(diffDays / 30);

    if (expirationDate < currentDate) {
      if (diffMonths > 1) {
        return `Expired ${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
      }

      return `Expired ${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    }

    return `Expires in ${diffDays} day${diffDays > 1 ? "s" : ""}`;
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
        {{
          [CardStatus.Active]: (
            <>
              <p>{formatBytes(card.trafficRemainingBytes)}</p>
              <p className="text-text-600">
                {formatBytes(card.trafficTotalBytes)}
              </p>
            </>
          ),
          [CardStatus.Expired]: <></>,
          [CardStatus.Inactive]: <></>,
          [CardStatus.Paid]: <p>{formatBytes(card.trafficTotalBytes)}</p>,
          [CardStatus.Pending]: <></>,
        }[card.status] || <></>}
      </div>
      {{
        [CardStatus.Active]: (
          <ProgressBar
            progress={
              (card.trafficRemainingBytes * 100) / card.trafficTotalBytes
            }
            className="mt-3"
          />
        ),
        [CardStatus.Expired]: <></>,
        [CardStatus.Inactive]: <></>,
        [CardStatus.Paid]: (
          <ProgressBarSignleLine
            progress={
              (card.trafficTotalBytes - card.trafficRemainingBytes) /
              card.trafficTotalBytes
            }
            className="mt-3"
          />
        ),
        [CardStatus.Pending]: <></>,
      }[card.status] || <></>}
      <div className="mt-6">
        {{
          [CardStatus.Active]: (
            <div className="flex flex-col gap-3 xxs:flex-row xxs:gap-4">
              <PrimaryButton
                className="w-full pr-1 pl-1"
                onClick={() => onBuyNewPlanClick(card, location)}
              >
                Buy new plan
              </PrimaryButton>
              <SecondaryButton
                className="w-full py-[14px] pr-1 pl-1"
                onClick={() => onDetailsClick(card, location)}
              >
                View details
              </SecondaryButton>
            </div>
          ),
          [CardStatus.Expired]: (
            <div className="flex flex-col gap-3 xxs:flex-row xxs:gap-4">
              <SecondaryButton
                className="w-full py-[14px] pr-1 pl-1"
                onClick={() => onBuyNewPlanClick(card, location)}
              >
                Buy new plan
              </SecondaryButton>
              <SecondaryButton
                className="w-full py-[14px] pr-1 pl-1"
                onClick={() => onDetailsClick(card, location)}
              >
                View details
              </SecondaryButton>
            </div>
          ),
          [CardStatus.Paid]: (
            <PrimaryButton
              className="w-full"
              onClick={() => onInstallClick(card, location)}
            >
              Install eSIM
            </PrimaryButton>
          ),
          [CardStatus.Inactive]: <></>,
          [CardStatus.Pending]: <></>,
        }[card.status] || <></>}
      </div>
    </div>
  );
}
