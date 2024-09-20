import { useTranslations } from "next-intl";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";
import {
  getTypographyClass,
  Typography,
  TypographyVariants,
} from "../Typography";
import { clsx } from "@/utils";
import Image from "next/image";

const CarrierBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-2 border-[#E9F0F2] rounded-xl flex justify-center items-center h-[90px] md:h-[140px] lg:h-[180px]">
      {children}
    </div>
  );
};

export const CarriersLandingBlock = () => {
  const t = useTranslations("CarriersLandingBlock");
  return (
    <LandingContainer>
      <Card className="flex flex-col gap-5 md:gap-6 lg:gap-8">
        <Typography variant={TypographyVariants.H2}>{t("title")}</Typography>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "text-text-600 md:font-inter md:text-xl md:leading-[26px]"
          )}
        >
          {t("description")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <CarrierBlock>
            <Image
              src="/images/carriers/at-t.png"
              alt="AT&T"
              width={130.556}
              height={54.04}
              className="w-[73.438px] h-[30.397px] md:w-[97.917px] md:h-[40.53px] lg:w-[130.556px] lg:h-[54.04px] fill-transparent"
            />
          </CarrierBlock>
          <CarrierBlock>
            <Image
              src="/images/carriers/t-mobile.svg"
              alt="T-Mobile"
              width={168.5}
              height={40}
              className="w-[94.5px] h-[24px] md:w-[128.5px] md:h-[32px] lg:w-[168.5px] lg:h-[40px]"
            />
          </CarrierBlock>
          <CarrierBlock>
            <Image
              src="/images/carriers/vodafone.png"
              alt="Vodafone"
              width={193.204}
              height={47.823}
              className="w-[110.404px] h-[28.823px] md:w-[147.204px] md:h-[40.823px] lg:w-[193.204px] lg:h-[47.823px]"
            />
          </CarrierBlock>
          <CarrierBlock>
            <Image
              src="/images/carriers/union-orange.png"
              alt="Orange"
              width={80.342}
              height={80.343}
              className="w-[45.342px] h-[45.343px] md:w-[60.342px] md:h-[60.343px] lg:w-[80.342px] lg:h-[80.343px]"
            />
          </CarrierBlock>
          <CarrierBlock>
            <Image
              src="/images/carriers/tele-2.png"
              alt="Tele-2"
              width={98.515}
              height={37.302}
              className="w-[55.515px] h-[20.302px] md:w-[74.515px] md:h-[28.302px] lg:w-[98.515px] lg:h-[37.302px]"
            />
          </CarrierBlock>
          <CarrierBlock>
            <Image
              src="/images/carriers/t-telefonica.png"
              alt="Telefonica"
              width={170.728}
              height={41.175}
              className="w-[95.728px] h-[24.175px] md:w-[127.728px] md:h-[32.175px] lg:w-[170.728px] lg:h-[41.175px]"
            />
          </CarrierBlock>
          <CarrierBlock>
            <Image
              src="/images/carriers/verizon.png"
              alt="Telefonica"
              width={135.82}
              height={30.447}
              className="w-[76.82px] h-[19.447px] md:w-[102.82px] md:h-[26.447px] lg:w-[135.82px] lg:h-[30.447px]"
            />
          </CarrierBlock>
          <CarrierBlock>
            <p
              className={clsx(
                getTypographyClass(TypographyVariants.Body2),
                "md:font-inter md:text-xl md:leading-[26px] max-w-[90%] text-center"
              )}
            >
              {t("otherCarriers")}
            </p>
          </CarrierBlock>
        </div>
      </Card>
    </LandingContainer>
  );
};
