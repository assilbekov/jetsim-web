import { useTranslations } from "next-intl";
import Image from "next/image";
import { Feature } from "./Feature";
import { Search } from "./Search";

export const Hero = () => {
  const t = useTranslations("MainPage");
  return (
    <div className="flex items-center sm:mx-auto xxs:pb-4 md:pb-10 md:px-8">
      <Image
        src="/hero_2x.png"
        alt="hero image"
        width={556}
        height={594}
        className="w-[368px] lg:w-[455px] xl:w-[581px] h-auto hidden md:block"
      />
      <div className="py-4 gap-4 xxs:gap-5 sm:gap-6 md:pt-4 md:pl-12 md:pr-16 flex flex-col lg:gap-8">
        <div className="flex flex-col gap-3 lg:gap-4">
          <h3 className="sm:text-center text-base leading-[22px] text-text-600 font-medium">
            {t("subheader")}
          </h3>
          <h1 className="sm:text-center xxs:text-3xl xxs:leading-[38px] text-2xl md:text-3xl md:leading-[38px] leading-[30px] font-medium text-text-100">
            {t("header")}
          </h1>
        </div>
        <div>
          <Search />
        </div>
        <div className="sm:justify-center flex flex-wrap flex-col xxs:flex-row gap-y-2 xxs:gap-y-3 gap-x-4 lg:gap-6 md:m-auto">
          <Feature
            icon="/timer.svg"
            iconAlt="timer icon"
            title={t("timer_feature")}
          />
          <Feature
            icon="/sim.svg"
            iconAlt="sim icon"
            title={t("sim_feature")}
          />
          <Feature
            icon="/support.svg"
            iconAlt="support icon"
            title={t("support_feature")}
          />
        </div>
      </div>
    </div>
  );
};
