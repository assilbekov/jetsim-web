import Image from "next/image";
import { Feature } from "./Feature";
import { Search } from "./Search";
import {
  Typography,
  TypographyVariants,
  matchTypographyMediaQuery,
} from "./Typography";
import { clsx } from "@/utils";

export const Hero = ({ page }: { page: "Main" | "All-Destinations"; }) => {
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
            Stay connected anywhere with eSIM
          </h3>
          <Typography
            variant={TypographyVariants.H1}
            className="sm:text-center"
          >
            Reliable, affordable worldwide internet with JetSim eSIM
          </Typography>
        </div>
        <div>
          <Search page={page} />
        </div>
        <div className="sm:justify-center flex flex-wrap flex-col xxs:flex-row gap-y-2 xxs:gap-y-3 gap-x-4 lg:gap-6 md:m-auto">
          <Feature icon="/timer.svg" iconAlt="timer icon" title="1 min setup" />
          <Feature
            icon="/sim.svg"
            iconAlt="sim icon"
            title="Keep current SIM"
          />
          <Feature
            icon="/support.svg"
            iconAlt="support icon"
            title="24/7 support"
          />
        </div>
      </div>
    </div>
  );
};
