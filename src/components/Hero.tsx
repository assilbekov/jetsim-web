import { useTranslations } from "next-intl";
import Image from "next/image";
import { Feature } from "./Feature";

export const Hero = () => {
  const t = useTranslations("MainPage");
  return (
    <div className="flex gap-12 items-center">
      <Image
        src="/hero_2x.png"
        alt="hero image"
        width={556}
        height={594}
        style={{ width: "42%", height: "auto" }}
      />
      <div>
        <h3>{t("subheader")}</h3>
        <h1>{t("header")}</h1>
        <div>INPUT</div>
        <div>
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
