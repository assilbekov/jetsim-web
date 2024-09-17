"use client";

import { Card } from "@/models/Card";
import { CopyButton } from "../buttons/CopyButton";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { clsx, convertLPACodeToBlocks } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { useDeviceTypeAndVersion } from "@/hooks/useDeviceTypeAndVersion";
import { useTranslations } from "next-intl";

type CopyCardProps = {
  text: string;
  label: string;
  className?: string;
};

const CopyCard = ({ text, label, className }: CopyCardProps) => {
  return (
    <div className={clsx("p-6 rounded-xl bg-slate-50", className ?? "")}>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "text-text-600"
        )}
      >
        {label}
      </p>
      <p className={clsx(getTypographyClass(TypographyVariants.Body), "mt-1")}>
        {text}
      </p>
      <CopyButton className="mt-4 w-full items-center" text={text} />
    </div>
  );
};

type ManualInstallProps = {
  card: Card;
  onSeeInstructionsClick: () => void;
};

export const ManualInstall = ({
  card,
  onSeeInstructionsClick,
}: ManualInstallProps) => {
  const t = useTranslations("InstallESim");
  const deviceTypeAndVerion = useDeviceTypeAndVersion();
  const { addr, activationCodeAndroid, activationCodeIOS } =
    convertLPACodeToBlocks(card.lpaCode);

  return (
    <div>
      {deviceTypeAndVerion.isAndroid ? (
        <CopyCard
          text={activationCodeAndroid}
          label={t("CopyCard_activation_code_label")}
        />
      ) : (
        <>
          <CopyCard text={addr} label={t("CopyCard_smdp_address_label")} />
          <CopyCard
            text={activationCodeIOS}
            label={t("CopyCard_activation_code_label")}
            className="mt-4"
          />
        </>
      )}
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Subheader),
          "mt-6 text-2xl text-center text-black"
        )}
      >
        {t("ManualInstall_use_codes_title")}
      </p>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "mt-3 text-center text-text-600"
        )}
      >
        {t("ManualInstall_copy_code_instructions")}
      </p>
      <PrimaryButton className="mt-4 w-full" onClick={onSeeInstructionsClick}>
        {t("ManualInstall_see_instructions_button")}
      </PrimaryButton>
    </div>
  );
};
