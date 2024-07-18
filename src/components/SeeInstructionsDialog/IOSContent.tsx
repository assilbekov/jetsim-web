import { Card } from "@/models/Card";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { ScanQRStep } from "./components/ScanQRStep";
import { PlanTextStep } from "./components/PlanTextStep";
import { TurnOnDataRoamingStep } from "../InstallESimInstructionsDialog/TurnOnDataRoamingStep";
import { StyledContent } from "./components/StyledContent";
import { EnterDetailsManuallyStep } from "./components/EnterDetailsManuallyStep";
import { EnterFollowingDataStep } from "./components/EnterFollowingDataStep";

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
      <StyledContent>
        <ScanQRStep step={1} card={card} />
        <PlanTextStep step={2}>
          Follow screen instructions to install eSIM
        </PlanTextStep>
        <TurnOnDataRoamingStep step={3} />
      </StyledContent>
      <p className="mt-5 mb-4">Or use alternative option</p>
      <StyledContent>
        <EnterDetailsManuallyStep step={1} />
        <EnterFollowingDataStep step={2} card={card} />
        <PlanTextStep step={3}>
          Follow screen instructions to install eSIM
        </PlanTextStep>
        <TurnOnDataRoamingStep step={4} />
      </StyledContent>
    </div>
  );
};
