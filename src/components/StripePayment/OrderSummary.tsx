"use client";

import { fetchLocation } from "@/api/locations";
import { fetchPackage } from "@/api/packages";
import { Location } from "@/models/Location";
import { Package } from "@/models/Package";
import { useEffect, useState } from "react";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { CircledCountryImage } from "../CircledCountryImage";
import { convertCurrencyCodeToSymbol } from "@/convertCurrency";
import { Skeleton } from "../Skeleton";
import { Card } from "../Card";

type OrderElementProps = {
  title: React.ReactNode;
  value: React.ReactNode;
  className?: string;
};

const OrderElement = ({ title, value }: OrderElementProps) => {
  return (
    <div className="font-inter text-sm leading-[18px] font-medium">
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
};

export const OrderSummary = ({ packageID, placeID }: OrderSummaryProps) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [packageData, setPackageData] = useState<Package | null>(null);

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
    return <Skeleton className="min-w-full min-h-[250px] rounded-[20px]" />;
  }

  return (
    <Card className="flex flex-col justify-center px-6 py-[22px] rounded-[20px] border-2 border-solid border-[#E9F0F2]">
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
        value={`${packageData.traffic.unit.count} ${packageData.traffic.unit.label}`}
      />
      <OrderElement title="Duration" value={`${packageData.days} days`} />
      <OrderElement
        title="Price"
        value={`${convertCurrencyCodeToSymbol(packageData.cost.currency)} ${
          packageData.cost.price
        }`}
      />
    </Card>
  );
};