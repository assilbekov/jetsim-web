"use client";

import { fetchLocation } from "@/api/locations";
import { fetchPackage } from "@/api/packages";
import { Location } from "@/models/Location";
import { Package } from "@/models/Package";
import { useEffect, useState } from "react";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { CircledCountryImage } from "../CircledCountryImage";
import { convertPrice } from "@/converters/prices";
import { Skeleton } from "../Skeleton";
import { Card } from "../Card";
import { clsx } from "@/utils";

type OrderElementProps = {
  title: React.ReactNode;
  value: React.ReactNode;
  className?: string;
};

const OrderElement = ({ title, value }: OrderElementProps) => {
  return (
    <div className="font-inter text-sm leading-[18px] font-medium sm:text-[16px] sm:leading-[19px]">
      <div className="shrink-0 mt-3 h-0.5 bg-[#E9F0F2]" />
      <div className="flex gap-5 justify-between mt-3 whitespace-nowrap">
        <p>{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

type OrderSummaryProps = {
  placeID: string;
  packageID: string;
  className?: string;
};

export const OrderSummary = ({
  packageID,
  placeID,
  className,
}: OrderSummaryProps) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [packageData, setPackageData] = useState<Package | null>(null);

  console.log({ location, packageData });

  useEffect(() => {
    fetchLocation(placeID).then((res) => {
      setLocation(res);
    });
  }, [placeID]);

  useEffect(() => {
    fetchPackage(packageID).then((res) => {
      setPackageData(res);
    });
  }, [packageID]);

  if (!packageData || !location) {
    return (
      <Skeleton className="min-w-full min-h-[250px] rounded-[20px] sm:max-w-[300px] sm:min-w-[300px]" />
    );
  }

  return (
    <Card
      className={clsx(
        "flex flex-col justify-center px-6 py-[22px] rounded-[20px] border-2 border-solid border-[#E9F0F2]",
        className ?? ""
      )}
    >
      <h3 className={getTypographyClass(TypographyVariants.Body)}>
        Order Summary
      </h3>
      <OrderElement
        title="Country"
        value={
          <div className="flex gap-2 items-center">
            <CircledCountryImage
              countryCode={location.countryCode}
              width={16}
              height={16}
            />
            <p>{location.title}</p>
          </div>
        }
      />
      <OrderElement
        title="Data"
        value={
          packageData.traffic.isUnlimited
            ? "∞"
            : `${packageData.traffic.unit.count} ${packageData.traffic.unit.label}`
        }
      />
      <OrderElement title="Duration" value={`${packageData.days} days`} />
      <OrderElement
        title="Price"
        value={convertPrice(packageData.cost.price, packageData.cost.currency)}
      />
    </Card>
  );
};
