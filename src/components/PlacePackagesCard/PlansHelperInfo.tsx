"use client";

import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { clsx } from "@/utils";
import { useState } from "react";
import { PackageTagEnum } from "@/models/Package";
import { useTranslations } from "next-intl";

type PlansHelperInfoProps = {
  tag: PackageTagEnum;
};

export const PlansHelperInfo = ({ tag }: PlansHelperInfoProps) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("PlacePackagesCard");

  const handleToggle = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setOpen(!open);
  };

  return (
    <div className="relative">
      <div
        className="flex justify-center relative items-center min-w-6 min-h-6 before:absolute before:top-1/2 before:left-1/2 before:w-10 before:h-10 before:-translate-x-1/2 before:-translate-y-1/2"
        onClick={handleToggle}
      >
        <Image
          src="/icons/gray/info.svg"
          alt="info icon"
          width={16}
          height={16}
        />
      </div>
      {open && (
        <>
          <div className="absolute w-72 -right-4 top-12 p-4 pt-[14px] flex gap-2 items-start z-10 rounded-2xl border-[2px] border-[#E9F0F2] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)]">
            <div>
              <h6 className={getTypographyClass(TypographyVariants.Caption)}>
                {tag === PackageTagEnum.STANDARD
                  ? t("calculatedBasedOn")
                  : t("unlimitedPlans")}
              </h6>
              {tag === PackageTagEnum.STANDARD ? (
                <div className="mt-0.5">
                  {[t("browsing"), t("music"), t("video")].map((text) => (
                    <p
                      key={text}
                      className={clsx(
                        getTypographyClass(TypographyVariants.Caption),
                        "text-text-600 mt-0.5 font-normal"
                      )}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              ) : (
                <p
                  className={clsx(
                    getTypographyClass(TypographyVariants.Caption),
                    "text-text-600 mt-1 font-normal"
                  )}
                >
                  {t("unlimitedPlansInfo")}
                </p>
              )}
            </div>
            <div
              className="flex justify-center relative items-center min-w-6 min-h-6 before:absolute before:top-1/2 before:left-1/2 before:w-10 before:h-10 before:-translate-x-1/2 before:-translate-y-1/2"
              onClick={handleToggle}
            >
              <Image
                src="/icons/gray/close.svg"
                alt="close icon"
                width={24}
                height={24}
                className="absolute w"
              />
            </div>
          </div>
          <div className="fixed inset-0" onClick={handleToggle} />
        </>
      )}
    </div>
  );
};
