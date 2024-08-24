"use client";

import { clsx } from "@/utils";
import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";
import { useTranslations } from "next-intl";

export const ThanksForPurchase = () => {
  const t = useTranslations("ThanksForPurchase");

  return (
    <LandingContainer>
      <Card className="px-4 pt-10 pb-14">
        <Image
          src="/icons/primary/success-circled.svg"
          alt={t("image_alt")}
          width={64}
          height={64}
          className="self-center mx-auto"
        />
        <h3
          className={clsx(
            getTypographyClass(TypographyVariants.Subheader),
            "md:font-interTight md:text-[34px] md:leading-[38px] md:tracking-[0.68px] text-center mt-4 md:mt-6"
          )}
        >
          {t("title")}
        </h3>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "md:text-xl md:leading-[26px] mt-2 md:mt-3 text-center text-text-600"
          )}
        >
          {t("message")}
        </p>
      </Card>
    </LandingContainer>
  );
};
