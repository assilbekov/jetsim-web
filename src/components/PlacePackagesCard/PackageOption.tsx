import { convertCurrencyCodeToSymbol } from "@/convertCurrency";
import { Package } from "@/models/Package";
import Image from "next/image";
import { Checkbox } from "../Checkbox";
import { clsx } from "@/utils";

const BoldText = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="font-inter font-bold text-text-100 leading-tight text-base xxs:text-2xl">
      {children}
    </p>
  );
};

const TextContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-0.5 xxs:gap-1 xxs:min-w-[75px]",
        className ?? ""
      )}
    >
      {children}
    </div>
  );
};

const SecondaryText = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="font-inter font-medium text-text-600 leading-[18px] text-sm">
      {children}
    </p>
  );
};

type BrowsingFeatureProps = {
  label: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
};

const BrowsingFeature = ({
  label,
  imageAlt,
  imageSrc,
}: BrowsingFeatureProps) => {
  return (
    <div className="flex gap-1 items-center">
      <Image src={imageSrc} alt={imageAlt} width={20} height={20} />
      <p className="font-inter text-sm leading-[18px] font-medium">{label}</p>
    </div>
  );
};

type PackageOptionProps = {
  packageEntity: Package;
  selected: boolean;
  onSelect: (packageEntity: Package) => void;
};

export const PackageOption = ({
  packageEntity,
  onSelect,
  selected,
}: PackageOptionProps) => {
  return (
    <label
      aria-selected={selected}
      className="flex flex-col gap-3 py-[14px] px-4 rounded-2xl border-[2px] border-[#E9F0F2] hover:border-[#C3D4D9] aria-selected:border-secondary-500 cursor-pointer transition duration-200 ease-in-out"
      htmlFor={packageEntity.id}
    >
      <div className="flex gap-6">
        <div className="flex gap-6 w-full">
          <TextContainer>
            <BoldText>
              {packageEntity.traffic.unit.count}{" "}
              {packageEntity.traffic.unit.label}
            </BoldText>
            <SecondaryText>
              {convertCurrencyCodeToSymbol(packageEntity.cost.currency)}
              {packageEntity.traffic.unit.costPerUnit.price} /{" "}
              {packageEntity.traffic.unit.label}
            </SecondaryText>
          </TextContainer>
          <TextContainer className="xxs:min-w-20">
            <BoldText>
              {convertCurrencyCodeToSymbol(packageEntity.cost.currency)}
              {packageEntity.cost.price}
            </BoldText>
            <SecondaryText>{packageEntity.days} days</SecondaryText>
          </TextContainer>
        </div>
        <div className="flex gap-3 items-start">
          {packageEntity.bestChoice && (
            <div className="flex justify-center items-center bg-[url('/best-rectangle.svg')] bg-cover bg-no-repeat w-[60px] h-[24px] overflow-visible mt-0.5">
              <span className="text-text-900 text-sm leading-[18px] tracking-[0.56px] font-medium">
                BEST
              </span>
            </div>
          )}{" "}
          <Checkbox
            id={packageEntity.id}
            checked={selected}
            onChange={() => onSelect(packageEntity)}
          />
        </div>
      </div>
      {selected && (
        <>
          <div className="w-full h-0.5 bg-[#E9F0F2]" />
          <div className="flex gap-3 items-start">
            <div className="flex w-full flex-wrap gap-x-3 gap-y-2">
              <BrowsingFeature
                imageAlt="browsing icon"
                imageSrc="/icons/browse.svg"
                label="60h browsing"
              />
              <BrowsingFeature
                imageAlt="music icon"
                imageSrc="/icons/music.svg"
                label="30h music"
              />
              <BrowsingFeature
                imageAlt="video icon"
                imageSrc="/icons/video.svg"
                label="20h video"
              />
            </div>
            <div className="flex justify-center items-center min-w-6 min-h-6">
              <Image
                src="/icons/gray/info.svg"
                alt="info icon"
                width={16}
                height={16}
              />
            </div>
          </div>
        </>
      )}
    </label>
  );
};
