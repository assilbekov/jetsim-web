"use client";

import Odometer from "react-odometerjs";
import { useState } from "react";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { convertCurrencyCodeToSymbol, convertPrice } from "@/converters/prices";
import { Card } from "../Card";
import { clsx } from "@/utils";
import { useTranslations } from "next-intl";
import { ToggleSwitch } from "../inputs/ToggleSwitch";
import "odometer/themes/odometer-theme-default.css";

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

  return (
    <Card
      className={clsx(
        "flex flex-col justify-center px-6 py-[22px] rounded-[20px] border-2 border-solid border-[#E9F0F2]",
        className ?? ""
      )}
    >
      <div
        className={clsx(
          "flex justify-between items-center",
          getTypographyClass(TypographyVariants.Body)
        )}
      >
        <span>{t("total")}</span>
        <span className="flex items-center">
          {convertCurrencyCodeToSymbol(currency)}
          <Odometer
            value={(isRewardsUsed ? totalPrice : fullPrice) / 100}
            format="(.ddd),dd"
            duration={150}
          />
        </span>
      </div>
      <div
        className={clsx(
          "flex justify-between items-center text-[#95A2A6] mt-2",
          getTypographyClass(TypographyVariants.Body2)
        )}
      >
        <span>Price</span>
        <span>{convertPrice(fullPrice, currency)}</span>
      </div>
      <div
        className={clsx(
          "flex justify-between items-center text-[#95A2A6] mt-1",
          getTypographyClass(TypographyVariants.Body2)
        )}
      >
        <span>Rewards</span>
        <span>{convertPrice(rewardsBalance, currency)}</span>
      </div>
      <div className="shrink-0 my-5 h-0.5 bg-[#E9F0F2]" />
      <div className="flex justify-between items-center">
        <div>
          <h6 className={getTypographyClass(TypographyVariants.Body)}>
            Use rewards
          </h6>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Body2),
              "text-[#95A2A6] mt-1"
            )}
          >
            Balance $30
          </p>
        </div>
        <ToggleSwitch checked={isRewardsUsed} onChange={setIsRewardsUsed} />
      </div>
    </Card>
  );
};
