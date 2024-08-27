import Image from "next/image";
import { Card } from "./Card";
import { LandingContainer } from "./LandingContainer";
import {
  Typography,
  TypographyVariants,
  getTypographyClass,
} from "./Typography";
import { clsx } from "@/utils";
import { CheckCompatibility } from "./CheckCompatibility";
import { useTranslations } from "next-intl";

type FeatureProps = {
  imageSrc: string;
  imageAlt: string;
  content: React.ReactNode;
};

const Feature = ({ imageSrc, imageAlt, content }: FeatureProps) => {
  return (
    <div className="flex gap-4 items-start">
      <Image src={imageSrc} alt={imageAlt} width={24} height={24} />
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "min-h-6 flex flex-col justify-center"
        )}
      >
        {content}
      </p>
    </div>
  );
};

export const FeatureAndTechDetails = () => {
  const t = useTranslations("FeatureAndTechDetails");

  return (
    <LandingContainer>
      <Card>
        <Typography variant={TypographyVariants.H2}>
          {t("FeatureAndTechDetails_title")}
        </Typography>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xxs:gap-5 sm:gap-y-4 sm:gap-x-8 mt-4 md:mt-6 lg:mt-8">
          <Feature
            imageSrc="/icons/shield.svg"
            imageAlt="shield icon"
            content={t("FeatureAndTechDetails_noHiddenFees")}
          />
          <Feature
            imageSrc="/icons/no-calls.svg"
            imageAlt="no-calls icon"
            content={t("FeatureAndTechDetails_onlyDataPlans")}
          />
          <Feature
            imageSrc="/icons/cell-tower.svg"
            imageAlt="cell tower icon"
            content={t("FeatureAndTechDetails_network")}
          />
          <Feature
            imageSrc="/icons/sim.svg"
            imageAlt="sim icon"
            content={
              <>
                {t("FeatureAndTechDetails_compatibleDevices")}
                <CheckCompatibility
                  label={t("FeatureAndTechDetails_checkCompatibility")}
                  className="mt-0.5"
                />
              </>
            }
          />
        </div>
      </Card>
    </LandingContainer>
  );
};
