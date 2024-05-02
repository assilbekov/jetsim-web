import Image from "next/image";

type FeatureProps = {
  icon: string;
  iconAlt: string;
  title: string;
};

export const Feature = ({ icon, title, iconAlt }: FeatureProps) => {
  return (
    <div>
      <Image src={icon} alt={iconAlt} width={24} height={24} />
      <span>{title}</span>
    </div>
  );
};
