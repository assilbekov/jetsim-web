import Image from "next/image";

type FeatureProps = {
  icon: string;
  iconAlt: string;
  title: string;
};

export const Feature = ({ icon, title, iconAlt }: FeatureProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={icon} alt={iconAlt} width={24} height={24} />
      <span className="featureText">{title}</span>
    </div>
  );
};
