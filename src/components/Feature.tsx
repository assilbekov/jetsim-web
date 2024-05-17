import Image from "next/image";

type FeatureProps = {
  icon: string;
  iconAlt: string;
  title: string;
};

export const Feature = ({ icon, title, iconAlt }: FeatureProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={icon} alt={iconAlt} width={24} height={24} className="w-5 h5 xxs:w-6 xxs:h-6" />
      <span className="text-base font-medium leading-[22px] text-text-600">{title}</span>
    </div>
  );
};
