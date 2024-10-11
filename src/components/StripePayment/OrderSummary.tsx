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
import { convertDaysText } from "@/converters/texts";
import { useTranslations } from "next-intl";

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
  locale: string;
};

export const OrderSummary = ({
  packageID,
  placeID,
  className,
  locale,
}: OrderSummaryProps) => {
  const t = useTranslations("OrderSummary");
  const [location, setLocation] = useState<Location | null>(null);
  const [packageData, setPackageData] = useState<Package | null>(null);

  useEffect(() => {
    fetchLocation(placeID, locale).then((res) => {
      setLocation(res);
    });
  }, [placeID]);

  useEffect(() => {
    fetchPackage(packageID, locale).then((res) => {
      setPackageData(res);

      localStorage.setItem(
        "orderSummary",
        JSON.stringify({
          value: res.cost.price / 100,
          currency: res.cost.currency,
          price: res.cost.price / 100,
          items: [
            {
              item_id: res.id,
              item_name: res.name,
              price: res.cost.price / 100,
            },
          ],
        })
      );
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
        {t("orderSummaryTitle")}
      </h3>
      <OrderElement
        title={t("countryTitle")}
        value={
          <div className="flex gap-2 items-start">
            <CircledCountryImage
              countryCode={location.countryCode}
              width={16}
              height={16}
              className="inline mt-0.5"
            />
            <span className="text-wrap">{location.title}</span>
          </div>
        }
      />
      <OrderElement
        title={t("dataTitle")}
        value={
          packageData.traffic.isUnlimited
            ? t("unlimitedText")
            : `${packageData.traffic.unit.count} ${packageData.traffic.unit.label}`
        }
      />
      <OrderElement
        title={t("durationTitle")}
        value={convertDaysText(packageData.days, t("day"), t("days"))}
      />
      <OrderElement
        title={t("priceTitle")}
        value={convertPrice(packageData.cost.price, packageData.cost.currency)}
      />
    </Card>
  );
};
