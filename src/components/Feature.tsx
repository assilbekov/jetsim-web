import { clsx } from "@/utils";
import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "./Typography";

type FeatureProps = {
  icon: string;
  iconAlt: string;
  title: string;
};

export const Feature = ({ icon, title, iconAlt }: FeatureProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src={icon}
        alt={iconAlt}
        width={24}
        height={24}
        className="w-5 h-5 lg:w-6 lg:h-6"
      />
      <span
        className={clsx(
          "text-text-600",
          getTypographyClass(TypographyVariants.Caption),
          "lg:text-xl lg:leading-[26px]"
        )}
      >
        {title}
      </span>
    </div>
  );
};
