"use client";

import { clsx } from "@/utils";
import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { useTranslations } from "next-intl";

type ReinstallESimProps = {
  className?: string;
};

export const ReinstallESim = ({ className }: ReinstallESimProps) => {
  const t = useTranslations("InstallESim");

  return (
    <div
      className={clsx(
        "flex gap-3 items-start p-4 rounded-xl border-2 border-solid border-[#E9F0F2]",
        className ?? ""
      )}
    >
      <Image
        loading="lazy"
        src="/icons/info.svg"
        alt={t("image_alt")}
        width={40}
        height={40}
      />
      <div>
        <h6 className={getTypographyClass(TypographyVariants.Body2)}>
          {t("title")}
        </h6>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "text-text-600 mt-0.5"
          )}
        >
          {t("message")}
        </p>
      </div>
    </div>
  );
};
