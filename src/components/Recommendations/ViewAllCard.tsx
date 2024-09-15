"use client";

import { handleCountrySelectMainEvent } from "@/gtm-events";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import {
  getTypographyClass,
  matchTypographyMediaQuery,
  TypographyVariants,
} from "../Typography";
import { clsx } from "@/utils";

const ALL_COUNTRIES_NUMBER = 250;

const ArrowRightIcon = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="arrow right">
      <path
        id="background"
        d="M13.625 10.75H4.5V9.25H13.625L9.4375 5.0625L10.5 4L16.5 10L10.5 16L9.4375 14.9375L13.625 10.75Z"
        fill="#00141A"
      />
    </g>
  </svg>
);

export const ViewAllCard = ({ count }: { count: number }) => {
  const t = useTranslations("Recommendations");
  return (
    <Link
      href="/all-destinations"
      onClick={() => {
        handleCountrySelectMainEvent({ country_page: "view_all" });
      }}
    >
      <div className="flex gap-4 px-5 py-[14px] items-center justify-between border-2 border-[#E9F0F2] hover:bg-[#EBEFF0] rounded-2xl cursor-pointer transition duration-200 ease-in-out">
        <div className="flex flex-col gap-0.5">
          <p
            className={matchTypographyMediaQuery({
              default: TypographyVariants.Caption,
              md: TypographyVariants.Body,
            })}
          >
            {t("viewAll")}
          </p>
          <p
            className={clsx(
              "text-text-600",
              getTypographyClass(TypographyVariants.Caption)
            )}
          >
            {t("countries", { count: count || ALL_COUNTRIES_NUMBER })}
          </p>
        </div>
        <div className="w-[34px] h-[34px] flex items-center justify-end rounded-full">
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
};
