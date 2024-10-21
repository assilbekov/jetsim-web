"use client";

import Odometer from "react-odometerjs";
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
import { convertDaysText } from "@/converters/texts";
import { useTranslations } from "next-intl";
import { ToggleSwitch } from "../inputs/ToggleSwitch";
import "odometer/themes/odometer-theme-default.css";

interface PricingProps {
  originalPrices: number[];
  discountedPrices: number[];
}

const Pricing: React.FC<PricingProps> = ({
  originalPrices,
  discountedPrices,
}) => {
  const [isDiscounted, setIsDiscounted] = useState(false);
  const prices = isDiscounted ? discountedPrices : originalPrices;

  return (
    <div className="flex flex-col items-center">
      {prices.map((price, index) => (
        <Odometer
          key={index}
          value={price}
          format="(.ddd),dd"
          className="text-2xl"
          duration={150}
        />
      ))}
      <ToggleSwitch checked={isDiscounted} onChange={setIsDiscounted} />
    </div>
  );
};

// Define the price data type
type PriceData = {
  original: number;
  discounted: number;
};

const PriceDisplay: React.FC = () => {
  const [showDiscount, setShowDiscount] = useState(false);

  const prices: PriceData[] = [
    { original: 15.0, discounted: 12.0 },
    { original: 18.5, discounted: 15.5 },
    { original: 26.2, discounted: 22.2 },
    { original: 54.1, discounted: 45.1 },
  ];

  const handleToggle = (checked: boolean) => {
    setShowDiscount(checked);
  };

  return (
    <div className="font-sans text-2xl">
      <div className="space-y-4">
        {prices.map((price, index) => (
          <div key={index} className="price p-2 flex items-center">
            <span className="currency mr-1">$</span>
            <Odometer
              value={showDiscount ? price.discounted : price.original}
              format="(,ddd).dd"
              duration={150}
              theme="minimal"
            />
            <span className="unit ml-1"> / GB</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <ToggleSwitch checked={showDiscount} onChange={handleToggle} />
        <span className="ml-2">
          {showDiscount ? "Discounted" : "Original"} Prices
        </span>
      </div>
    </div>
  );
};

const OdometerComponent = () => {
  const [value, setValue] = useState(1233244);

  useEffect(() => {
    const timeoutId = setTimeout(() => setValue(4323441), 10);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Odometer
      value={value}
      format="(.ddd),dd"
      className="text-2xl"
      duration={150}
    />
  );
};

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

type TotalPriceProps = {
  totalPrice: number;
  fullPrice: number;
  currency: string;
  rewardsBalance: number;
  className?: string;
};

export const TotalPrice = ({
  totalPrice,
  fullPrice,
  currency,
  rewardsBalance,
  className,
}: TotalPriceProps) => {
  const t = useTranslations("OrderSummary");
  const [isRewardsUsed, setIsRewardsUsed] = useState(false);

  /* if (!packageData || !location) {
    return (
      <Skeleton className="min-w-full min-h-[250px] rounded-[20px] sm:max-w-[300px] sm:min-w-[300px]" />
    );
  } */

  return (
    <Card
      className={clsx(
        "flex flex-col justify-center px-6 py-[22px] rounded-[20px] border-2 border-solid border-[#E9F0F2]",
        className ?? ""
      )}
    >
      <div>
        <h3 className={getTypographyClass(TypographyVariants.Body)}>
          {t("totalPrice")}
        </h3>
        <Odometer
          value={isRewardsUsed ? totalPrice : fullPrice}
          format="(.ddd),dd"
          className="text-2xl"
          duration={150}
        />
        <span>{convertPrice(totalPrice, currency)}</span>
      </div>
      <OrderElement
        title={t("fullPrice")}
        value={convertPrice(fullPrice, currency)}
      />
      <OrderElement
        title={t("Rewards –30%")}
        value={-convertPrice(rewardsBalance, currency)}
      />
      <div>
        <div>
          <h6>Use rewards</h6>
          <p>Balance $30</p>
        </div>
        <ToggleSwitch checked={isRewardsUsed} onChange={setIsRewardsUsed} />
      </div>
    </Card>
  );
};
