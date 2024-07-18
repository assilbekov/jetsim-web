import { Card } from "@/models/Card";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { ScanQRStep } from "./components/ScanQRStep";
import { PlanTextStep } from "./components/PlanTextStep";
import { TurnOnDataRoamingStep } from "../InstallESimInstructionsDialog/TurnOnDataRoamingStep";

type IOSContentProps = {
  card: Card;
};

export const IOSContent = ({ card }: IOSContentProps) => {
  return (
    <div
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "w-full text-center"
      )}
    >
      <div className="flex flex-col gap-8 justify-center self-stretch py-8 mx-auto w-full rounded-2xl bg-slate-50">
        <ScanQRStep step={1} card={card} />
        <PlanTextStep step={2}>
          Follow screen instructions to install eSIM
        </PlanTextStep>
        <TurnOnDataRoamingStep step={3} />
      </div>
      <p>Or use alternative option</p>
    </div>
  );
};
