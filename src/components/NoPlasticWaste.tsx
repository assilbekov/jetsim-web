import Image from "next/image";
import { LandingContainer } from "./LandingContainer";

type ChipProps = {
  label: string;
  image: string;
};

const Chip = ({ label, image }: ChipProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-[10px] items-center bg-text-900 px-4 py-2 rounded-full">
        <Image src={image} alt={label} width={24} height={24} />
        <span className="text-primary-500 font-medium text-base leading-[22px]">
          {label}
        </span>
      </div>
    </div>
  );
};

export const NoPlasticWaste = () => {
  return (
    <LandingContainer>
      <div className="w-full bg-[url('/no-waste-background.png')] bg-[bottom_50%_right_55%] bg-cover rounded-none md:rounded-xl">
        <div className="p-6 pb-8 md:py-11 md:px-20 bg-gray-500 bg-opacity-50 rounded-none md:rounded-xl">
          <p className="textbase leading-[22px] md:text-xl md:leading-6 text-text-900 font-medium text-center">
            No more plastic waste
          </p>
          <h3 className="text-2xl leading-[30px] mt-1 md:mt-2 md:text-[34px] md:leading-[38px] text-text-900 font-medium text-center">
            Join us in our mission to save the planet
          </h3>
          <div className="flex flex-col md:flex-row gap-4 md:justify-center mt-4 md:mt-8">
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
