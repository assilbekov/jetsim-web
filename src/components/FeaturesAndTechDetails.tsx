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
  return (
    <LandingContainer>
      <Card>
        <Typography variant={TypographyVariants.H2}>
          Features and technical details
        </Typography>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xxs:gap-5 sm:gap-y-4 sm:gap-x-8 mt-4 md:mt-6 lg:mt-8">
          <Feature
            imageSrc="/icons/shield.svg"
            imageAlt="shield icon"
            content="No hidden fees, extra costs"
          />
          <Feature
            imageSrc="/icons/no-calls.svg"
            imageAlt="no-calls icon"
            content="Only data plans, without calls and SMS"
          />
          <Feature
            imageSrc="/icons/cell-tower.svg"
            imageAlt="cell tower icon"
            content="3G/4G/LTE/5G depends on the network"
          />
          <Feature
            imageSrc="/icons/sim.svg"
            imageAlt="sim icon"
            content={
              <>
                Compatible with all devices with eSIM
                <CheckCompatibility label="Check  compatibility here" className="mt-0.5" />
              </>
            }
          />
        </div>
      </Card>
    </LandingContainer>
  );
};
