"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import Image from "next/image";
import { getTypographyClass, TypographyVariants } from "../Typography";
import { clsx } from "@/utils";
import { useTranslations } from "next-intl";
import { PrimaryButton } from "../buttons/PrimaryButton";

export const AcceptRefDialog = () => {
  const t = useTranslations("AcceptRefDialog");
  const searchParams = useSearchParams();
  const inviteId = searchParams.get("inviteId");
  const [isOpen, setIsOpen] = useState(true);

  console.log({ inviteId });

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (inviteId) {
      // setIsOpen(true);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <Dialog onClose={handleClose} dialogClassName="md:w-[360px]" mdHeightAuto>
      <DialogTitle title={""} onClose={handleClose} />
      <div className="flex flex-col items-center gap-4 -mt-12 text-center">
        <Image
          src="/icons/primary/featured_seasonal_and_gifts.svg"
          alt="gift icon"
          width={48}
          height={48}
        />
        <div>
          <h5
            className={clsx(
              getTypographyClass(TypographyVariants.Subheader),
              "text-text-100 mt-2"
            )}
          >
            {t("success.title")}
          </h5>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Caption),
              "text-text-600"
            )}
          >
            {t("success.description")}
          </p>
        </div>
        <PrimaryButton>{t("success.button")}</PrimaryButton>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Caption),
            "text-text-600"
          )}
        >
          {t("success.terms")}
        </p>
      </div>
    </Dialog>
  );
};
