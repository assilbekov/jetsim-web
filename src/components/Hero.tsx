import { useTranslations } from "next-intl";
import Image from "next/image";
import { Feature } from "./Feature";

export const Hero = () => {
  const t = useTranslations("MainPage");
  return (
    <div className="flex items-center">
      <Image
        src="/hero_2x.png"
        alt="hero image"
        width={556}
        height={594}
        style={{ width: "42%", height: "auto" }}
      />
      <div className="pt-4 pl-12 pr-16 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="subheader">{t("subheader")}</h3>
          <h1 className="header">{t("header")}</h1>
        </div>
        <div>INPUT</div>
        <div className="flex gap-6 m-auto">
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