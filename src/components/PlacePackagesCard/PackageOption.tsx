"use client";

import { Package, PackageTagEnum } from "@/models/Package";
import Image from "next/image";
import { Checkbox } from "../Checkbox";
import { clsx } from "@/utils";
import { BestBadge } from "./BestBadge";
import { PlansHelperInfo } from "./PlansHelperInfo";
import { convertPrice } from "@/converters/prices";
import { convertSecondsToHours } from "@/converters/times";
import { convertDaysText } from "@/converters/texts";
import { useTranslations } from "next-intl";

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
  tag: PackageTagEnum;
  onSelect: (packageEntity: Package) => void;
};

export const PackageOption = ({
  packageEntity,
  onSelect,
  selected,
  tag,
}: PackageOptionProps) => {
  const t = useTranslations("PackageOption");

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
              {tag === PackageTagEnum.UNLIMITED
                ? convertDaysText(
                    packageEntity.days,
                    t("dayText"),
                    t("daysText")
                  )
                : `${packageEntity.traffic.unit.count} ${packageEntity.traffic.unit.label}`}
            </BoldText>
            <SecondaryText>
              {tag === PackageTagEnum.UNLIMITED
                ? t("unlimitedGB")
                : convertDaysText(
                    packageEntity.days,
                    t("dayText"),
                    t("daysText")
                  )}
            </SecondaryText>
          </TextContainer>
          <TextContainer className="xxs:min-w-20">
            <BoldText>
              {convertPrice(
                packageEntity.cost.price,
                packageEntity.cost.currency
              )}
            </BoldText>
            {tag === PackageTagEnum.STANDARD && (
              <SecondaryText>
                {`${convertPrice(
                  packageEntity.traffic.unit.costPerUnit.price,
                  packageEntity.cost.currency
                )} / ${packageEntity.traffic.unit.label}`}
              </SecondaryText>
            )}
          </TextContainer>
        </div>
        <div className="flex gap-3 items-start">
          {packageEntity.bestChoice && <BestBadge />}
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
                label={
                  tag === PackageTagEnum.UNLIMITED
                    ? t("browsingUnlimited")
                    : t("browsingHours", {
                        hours: convertSecondsToHours(
                          packageEntity.traffic.browsingSec
                        ),
                      })
                }
              />
              <BrowsingFeature
                imageAlt="music icon"
                imageSrc="/icons/music.svg"
                label={
                  tag === PackageTagEnum.UNLIMITED
                    ? t("musicUnlimited")
                    : t("musicHours", {
                        hours: convertSecondsToHours(
                          packageEntity.traffic.musicSec
                        ),
                      })
                }
              />
              <BrowsingFeature
                imageAlt="video icon"
                imageSrc="/icons/video.svg"
                label={
                  tag === PackageTagEnum.UNLIMITED
                    ? t("videoUnlimited")
                    : t("videoHours", {
                        hours: convertSecondsToHours(
                          packageEntity.traffic.videoSec
                        ),
                      })
                }
              />
            </div>
            <PlansHelperInfo tag={tag} />
          </div>
        </>
      )}
    </label>
  );
};
