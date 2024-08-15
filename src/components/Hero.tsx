import Image from "next/image";
import { Feature } from "./Feature";
import { Search } from "./Search";
import {
  Typography,
  TypographyVariants,
  matchTypographyMediaQuery,
} from "./Typography";
import { clsx } from "@/utils";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex items-center sm:mx-auto xxs:pb-4 md:pb-10 md:px-8">
      <Image
        src="/hero_2x.png"
        alt="hero image"
        width={556}
        height={594}
        className="min-w-[368px] lg:min-w-[455px] xxl:min-w-[581px] h-auto hidden md:block"
      />
      <div className="py-4 gap-4 xxs:gap-5 sm:gap-6 md:pt-4 md:pl-12 md:pr-16 flex flex-col lg:gap-8">
        <div className="flex flex-col gap-3 lg:gap-4">
          <h3
            className={clsx(
              "text-text-600",
              matchTypographyMediaQuery({
                default: TypographyVariants.Caption,
                lg: TypographyVariants.Body,
              }),
              "sm:text-center"
            )}
          >
            {t("title")}
          </h3>
          <Typography
            variant={TypographyVariants.H1}
            className="sm:text-center"
          >
            {t("description")}
          </Typography>
        </div>
        <div>
          <Search />
        </div>
        <div className="sm:justify-center flex flex-wrap flex-col xxs:flex-row gap-y-2 xxs:gap-y-3 gap-x-4 lg:gap-6 md:m-auto">
          <Feature
            icon="/timer.svg"
            iconAlt="timer icon"
            title={t("feature1")}
          />
          <Feature icon="/sim.svg" iconAlt="sim icon" title={t("feature2")} />
          <Feature
            icon="/support.svg"
            iconAlt="support icon"
            title={t("feature3")}
          />
        </div>
      </div>
    </div>
  );
};
