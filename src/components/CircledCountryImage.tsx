import Image, { ImageProps } from "next/image";

type CircledCountryImageProps = {
  countryCode: string;
} & Omit<ImageProps, "src" | "alt">;

export const CircledCountryImage = ({
  countryCode,
  ...restProps
}: CircledCountryImageProps) => {
  return (
    <Image
      src={`https://hatscripts.github.io/circle-flags/flags/${countryCode.toLowerCase()}.svg`}
      alt={`Flag of ${countryCode}`}
      {...restProps}
    />
  );
};
