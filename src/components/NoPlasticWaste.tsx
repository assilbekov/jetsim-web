import Image from "next/image";
import { LandingContainer } from "./LandingContainer";
import { clsx } from "@/utils";
import {
  TypographyVariants,
  getTypographyClass,
  matchTypographyMediaQuery,
} from "./Typography";

type ChipProps = {
  label: string;
  image: string;
};

const Chip = ({ label, image }: ChipProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-[10px] items-center bg-text-900 px-4 py-2 rounded-full">
        <Image src={image} alt={label} width={24} height={24} />
        <span
          className={clsx(
            "text-primary-500",
            getTypographyClass(TypographyVariants.Caption)
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export const NoPlasticWaste = () => {
  return (
    <LandingContainer>
      <div className="w-full bg-[url('/no-waste-background.png')] bg-[bottom_50%_right_55%] bg-cover rounded-none sm:rounded-[20px]">
        <div className="p-6 pb-8 sm:px-8 sm:pt-8 md:py-11 md:px-20 bg-gray-500 bg-opacity-50 rounded-none sm:rounded-[20px]">
          <p
            className={clsx(
              "text-text-900 text-center",
              matchTypographyMediaQuery({
                default: TypographyVariants.Caption,
                md: TypographyVariants.Body,
              })
            )}
          >
            No more plastic waste
          </p>
          <h3
            className={clsx(
              "mt-1 md:mt-2 text-text-900 text-center",
              matchTypographyMediaQuery({
                default: TypographyVariants.Subheader,
                md: TypographyVariants.H2,
              })
            )}
          >
            Join us in our mission to save the planet
          </h3>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:justify-center mt-4 md:mt-8">
            <Chip label="No plastic SIM cards" image="/no-sim.svg" />
            <Chip label="No packaging" image="/delete.svg" />
            <Chip label="No transport fees" image="/no_transfer.svg" />
            <Chip label="No physical advertising" image="/scan.svg" />
          </div>
        </div>
      </div>
    </LandingContainer>
  );
};
