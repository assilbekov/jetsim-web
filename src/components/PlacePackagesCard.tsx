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
import { ButtonHTMLAttributes, useState } from "react";
import { Package } from "@/models/Package";
import { Checkbox } from "./Checkbox";

type PlacePackagesCardProps = {
  placeId: string;
};

const mockPackages: Package[] = [
  {
    id: "1",
    name: "Standard",
    cost: {
      price: 10,
      currency: "USD",
    },
    bestChoice: false,
    days: 30,
    traffic: {
      browsingSec: 100000,
      videoSec: 100000,
      musicSec: 100000,
      unit: {
        label: "GB",
        count: 1,
        costPerUnit: {
          price: 10,
          currency: "USD",
        },
      },
    },
  },
  {
    id: "2",
    name: "Unlimited",
    cost: {
      price: 20,
      currency: "USD",
    },
    bestChoice: false,
    days: 30,
    traffic: {
      browsingSec: 100000,
      videoSec: 100000,
      musicSec: 100000,
      unit: {
        label: "GB",
        count: 1,
        costPerUnit: {
          price: 20,
          currency: "USD",
        },
      },
    },
  },
  {
    id: "3",
    name: "Premium",
    cost: {
      price: 30,
      currency: "USD",
    },
    bestChoice: true,
    days: 30,
    traffic: {
      browsingSec: 200000,
      videoSec: 200000,
      musicSec: 200000,
      unit: {
        label: "GB",
        count: 2,
        costPerUnit: {
          price: 15,
          currency: "USD",
        },
      },
    },
  },
  {
    id: "4",
    name: "Business",
    cost: {
      price: 50,
      currency: "USD",
    },
    bestChoice: false,
    days: 30,
    traffic: {
      browsingSec: 300000,
      videoSec: 300000,
      musicSec: 300000,
      unit: {
        label: "GB",
        count: 3,
        costPerUnit: {
          price: 10,
          currency: "USD",
        },
      },
    },
  },
];

type TagButtonsProps = {
  active: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const TagButtons = ({
  children,
  className,
  active,
  ...restProps
}: TagButtonsProps) => {
  return (
    <button
      {...restProps}
      aria-pressed={active}
      className={clsx(
        "py-3 px-[22px] rounded-[32px] text-text-600 aria-pressed:text-text-100 hover:bg-[#E9F0F2] aria-pressed:bg-[#E9F0F2] transition duration-200 ease-in-out",
        getTypographyClass(TypographyVariants.Caption),
        className ?? ""
      )}
    >
      {children}
    </button>
  );
};

type PackageOptionProps = {
  packageEntity: Package;
  selected: boolean;
};

const PackageOption = ({ packageEntity, selected }: PackageOptionProps) => {
  return (
    <label
      aria-selected={selected}
      className="block py-[14px] px-4 rounded-2xl border-[2px] border-[#E9F0F2] hover:border-[#C3D4D9] aria-selected:border-secondary-500 cursor-pointer"
      htmlFor={packageEntity.id}
    >
      <div>
        <div>
          <div>
            <p>
              {packageEntity.traffic.unit.count}{" "}
              {packageEntity.traffic.unit.label}
            </p>
            <p>
              {packageEntity.traffic.unit.costPerUnit.price} /{" "}
              {packageEntity.traffic.unit.label}
            </p>
          </div>
          <div>
            <p>
              {packageEntity.cost.price} {packageEntity.cost.currency}
            </p>
            <p>{packageEntity.days} days</p>
          </div>
        </div>
        <div>
          {packageEntity.bestChoice && <div>Best</div>}{" "}
          <input placeholder="checkbox" />
          <Checkbox id={packageEntity.id} />
        </div>
      </div>
      {selected && (
        <>
          <div className="w-full h-0.5 bg-[#E9F0F2]" />
          <div>
            <div>grid options</div>
            <div>icon</div>
          </div>
        </>
      )}
    </label>
  );
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
  const [tags, setTags] = useState<"standard" | "unlimited">("standard");

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
        <div>
          {mockPackages.map((packageEntity, index) => (
            <PackageOption
              packageEntity={packageEntity}
              selected={index === 2}
            />
          ))}
        </div>
        <div>
          <TagButtons
            active={tags === "standard"}
            onClick={() => setTags("standard")}
          >
            Standard
          </TagButtons>
          <TagButtons
            active={tags === "unlimited"}
            onClick={() => setTags("unlimited")}
          >
            Unlimited
          </TagButtons>
        </div>
        <div className="flex justify-between items-center w-full max-w-[397px] m-auto">
          <Image
            src="/icons/gray/paypal.svg"
            alt="paypal icon"
            width={80.1}
            height={19.8}
            className="w-[72px] h-[18px] xxs:w-[80.1] xxs:h-[19.8px]"
          />
          <Image
            src="/icons/gray/apple-pay.svg"
            alt="apple pay icon"
            width={49.09}
            height={23.1}
            className="w-[44.18px] h-[20.78px] xxs:w-[49.09] xxs:h-[23.1px]"
          />
          <Image
            src="/icons/gray/google-pay.svg"
            alt="google pay icon"
            width={47.7}
            height={19.8}
            className="w-[43px] h-[17.8px] xxs:w-[47.7] xxs:h-[19.8px]"
          />
          <Image
            src="/icons/gray/mastercard.svg"
            alt="mastercard icon"
            width={32.04}
            height={19.8}
            className="w-[28.8px] h-[17.8px] xxs:w-[32.04] xxs:h-[19.8px]"
          />
          <Image
            src="/icons/gray/visa.svg"
            alt="visa icon"
            width={43.8}
            height={14.85}
            className="w-[39.4px] h-[13.36px] xxs:w-[43.8] xxs:h-[14.85px]"
          />
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
