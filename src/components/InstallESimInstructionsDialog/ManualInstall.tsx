"use client";

import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Card } from "@/models/Card";
import { EnterDetailsManuallyStep } from "./EnterDetailsManuallyStep";
import { TurnOnDataRoamingStep } from "./TurnOnDataRoamingStep";
import { EnterFollowingDataStep } from "./EnterFollowingDataStep";
import { PlanTextStep } from "./PlanTextStep";
import { useTranslations } from "next-intl";

type ManualInstallProps = {
  card: Card;
};

export function ManualInstall({ card }: ManualInstallProps) {
  const t = useTranslations("InstallESimInstructionsDialog");

  return (
    <div
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "flex flex-col gap-8 justify-center self-stretch text-center px-4 py-8 mx-auto w-full rounded-2xl bg-slate-50 max-w-[480px]"
      )}
    >
      <EnterDetailsManuallyStep step={1} />
      <EnterFollowingDataStep step={2} card={card} />
      <PlanTextStep step={3}>
        {t("ManualInstall_plantextstep_label")}
      </PlanTextStep>
      <TurnOnDataRoamingStep step={4} />
    </div>
  );
}
