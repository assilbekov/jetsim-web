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
import { SecondaryButton } from "../buttons/SecondaryButton";

enum DialogType {
  Success = "success",
  ErrorAlreadyApplied = "errorAlreadyApplied",
  ErrorCanNotApplyToYourself = "errorCanNotApplyToYourself",
  ErrorAlreadyMadePurchase = "errorAlreadyMadePurchase",
  Empty = "",
}

export const AcceptRefDialog = () => {
  const t = useTranslations("AcceptRefDialog");
  const searchParams = useSearchParams();
  const inviteId = searchParams.get("inviteId");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState<DialogType>(DialogType.Empty);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    switch (inviteId) {
      case "success":
        setDialogType(DialogType.Success);
        setIsOpen(true);
        break;
      case "errorAlreadyApplied":
        setDialogType(DialogType.ErrorAlreadyApplied);
        setIsOpen(true);
        break;
      case "errorCanNotApplyToYourself":
        setDialogType(DialogType.ErrorCanNotApplyToYourself);
        setIsOpen(true);
        break;
      case "errorAlreadyMadePurchase":
        setDialogType(DialogType.ErrorAlreadyMadePurchase);
        setIsOpen(true);
        break;
      default:
        setDialogType(DialogType.Empty);
        break;
    }
  }, []);

  const renderDialogContent = () => {
    switch (dialogType) {
      case DialogType.Success:
        return (
          <>
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
                  "text-text-100"
                )}
              >
                {t("success.title")}
              </h5>
              <p
                className={clsx(
                  getTypographyClass(TypographyVariants.Body2),
                  "text-text-600 mt-2"
                )}
              >
                {t("success.description")}
              </p>
            </div>
            <PrimaryButton>{t("success.button")}</PrimaryButton>
            <p
              className={clsx(
                getTypographyClass(TypographyVariants.Body2),
                "text-text-600"
              )}
            >
              {t("success.terms")}
            </p>
          </>
        );

      case DialogType.ErrorAlreadyApplied:
        return (
          <>
            <Image
              src="/icons/primary/mood_bad.svg"
              alt="error icon"
              width={48}
              height={48}
            />
            <div>
              <h5
                className={clsx(
                  getTypographyClass(TypographyVariants.Subheader),
                  "text-text-100"
                )}
              >
                {t("errorAlreadyApplied.title")}
              </h5>
              <p
                className={clsx(
                  getTypographyClass(TypographyVariants.Body2),
                  "text-text-600 mt-2"
                )}
              >
                {t("errorAlreadyApplied.description")}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <PrimaryButton className="w-full">
                {t("errorAlreadyApplied.buttonOk")}
              </PrimaryButton>
              <SecondaryButton className="w-full">
                {t("errorAlreadyApplied.buttonClose")}
              </SecondaryButton>
            </div>
          </>
        );

      case DialogType.ErrorCanNotApplyToYourself:
        return (
          <>
            <Image
              src="/icons/primary/mood_bad.svg"
              alt="error icon"
              width={48}
              height={48}
            />
            <div>
              <h5
                className={clsx(
                  getTypographyClass(TypographyVariants.Subheader),
                  "text-text-100"
                )}
              >
                {t("errorCanNotApplyToYourself.title")}
              </h5>
              <p
                className={clsx(
                  getTypographyClass(TypographyVariants.Body2),
                  "text-text-600 mt-2"
                )}
              >
                {t("errorCanNotApplyToYourself.description")}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <PrimaryButton className="w-full">
                {t("errorCanNotApplyToYourself.buttonOk")}
              </PrimaryButton>
              <SecondaryButton className="w-full">
                {t("errorCanNotApplyToYourself.buttonClose")}
              </SecondaryButton>
            </div>
          </>
        );

      case DialogType.ErrorAlreadyMadePurchase:
        return (
          <>
            <Image
              src="/icons/primary/mood_bad.svg"
              alt="error icon"
              width={48}
              height={48}
            />
            <div>
              <h5
                className={clsx(
                  getTypographyClass(TypographyVariants.Subheader),
                  "text-text-100"
                )}
              >
                {t("errorAlreadyMadePurchase.title")}
              </h5>
              <p
                className={clsx(
                  getTypographyClass(TypographyVariants.Body2),
                  "text-text-600 mt-2"
                )}
              >
                {t("errorAlreadyMadePurchase.description")}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <PrimaryButton className="w-full">
                {t("errorAlreadyMadePurchase.buttonOk")}
              </PrimaryButton>
              <SecondaryButton className="w-full">
                {t("errorAlreadyMadePurchase.buttonClose")}
              </SecondaryButton>
            </div>
          </>
        )

      default:
        return null;
    }
  };

  if (!isOpen || dialogType === DialogType.Empty) return null;

  return (
    <Dialog
      onClose={handleClose}
      dialogClassName={clsx(
        "md:w-[360px]",
        dialogType !== DialogType.Success && "md:h-[450px]"
      )}
      mdHeightAuto
    >
      <DialogTitle title={""} onClose={handleClose} />
      <div className="flex flex-col justify-between items-center gap-4 -mt-12 text-center h-full">
        {renderDialogContent()}
      </div>
    </Dialog>
  );
};
