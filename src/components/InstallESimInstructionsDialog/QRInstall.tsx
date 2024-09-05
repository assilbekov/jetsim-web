import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Card } from "@/models/Card";
import { UseQRDetailsStep } from "./UseQRDetailsStep";
import { ScanQRStep } from "./ScanQRStep";
import { PlanTextStep } from "./PlanTextStep";
import { TurnOnDataRoamingStep } from "./TurnOnDataRoamingStep";
import { useTranslations } from "next-intl";

type QRInstallProps = {
  card: Card;
};

export const QRInstall = ({ card }: QRInstallProps) => {
  const t = useTranslations("InstallESimInstructionsDialog");

  return (
    <div
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "flex flex-col gap-8 justify-center self-stretch text-center px-4 py-8 mx-auto w-full rounded-2xl bg-slate-50 max-w-[480px]"
      )}
    >
      <UseQRDetailsStep step={1} />
      <ScanQRStep step={2} card={card} />
      <PlanTextStep step={3}>{t("QRInstall_planTextStep")}</PlanTextStep>
      <TurnOnDataRoamingStep step={4} />
    </div>
  );
};
