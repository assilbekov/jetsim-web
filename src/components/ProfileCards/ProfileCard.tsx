import { Card, CardStatus } from "@/models/Card";
import { Location } from "@/models/Location";
import * as React from "react";
import { CircledCountryImage } from "../CircledCountryImage";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { clsx } from "@/utils";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { ProgressBar, ProgressBarSignleLine } from "./ProgressBar";

type ProfileCardProps = {
  card: Card;
  location: Location;
};

export function ProfileCard({ card, location }: ProfileCardProps) {
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

  function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

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
      <div className="grid gap-3 mt-6">
        {{
          [CardStatus.Active]: (
            <>
              <PrimaryButton className="w-full">Buy new plan</PrimaryButton>
              <SecondaryButton className="w-full py-[14px]">
                View details
              </SecondaryButton>
            </>
          ),
          [CardStatus.Expired]: (
            <>
              <SecondaryButton className="w-full py-[14px]">
                Buy new plan
              </SecondaryButton>
              <SecondaryButton className="w-full py-[14px]">
                View details
              </SecondaryButton>
            </>
          ),
          [CardStatus.Inactive]: <></>,
          [CardStatus.Paid]: (
            <PrimaryButton className="w-full">Install eSIM</PrimaryButton>
          ),
          [CardStatus.Pending]: <></>,
        }[card.status] || <></>}
      </div>
    </div>
  );
}
