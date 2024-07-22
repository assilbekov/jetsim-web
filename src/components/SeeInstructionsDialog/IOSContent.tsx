"use client";

import { Card } from "@/models/Card";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { ScanQRStep } from "./components/ScanQRStep";
import { PlanTextStep } from "./components/PlanTextStep";
import { TurnOnDataRoamingStep } from "../InstallESimInstructionsDialog/TurnOnDataRoamingStep";
import { StyledContent } from "./components/StyledContent";
import { EnterDetailsManuallyStep } from "./components/EnterDetailsManuallyStep";
import { EnterFollowingDataStep } from "./components/EnterFollowingDataStep";
import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";
import { UseQRDetailsStep } from "./components/UseQRDetailsStep";

type IOSContentProps = {
  card: Card;
};

export const IOSContent = ({ card }: IOSContentProps) => {
  const deviceTypeAndVerion = useDeviceTypeAndVerion();

  const renderQRInstallation = () => {
    if (deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "16") {
      return (
        <StyledContent>
          <ScanQRStep step={1} card={card} />
          <PlanTextStep step={2}>
            Follow screen instructions to install eSIM
          </PlanTextStep>
          <TurnOnDataRoamingStep step={3} />
        </StyledContent>
      );
    }

    if (deviceTypeAndVerion.isDesktop) {
      return (
        <StyledContent>
          <UseQRDetailsStep step={1} />
          <ScanQRStep step={2} card={card} />
          <PlanTextStep step={3}>
            Follow screen instructions to install eSIM
          </PlanTextStep>
          <TurnOnDataRoamingStep step={4} />
        </StyledContent>
      );
    }

    return (
      <StyledContent>
        <ScanQRStep step={1} card={card} />
        <UseQRDetailsStep step={2} />
        <PlanTextStep step={3}>
          Scan shared QR code from other screen with this phone
        </PlanTextStep>
        <PlanTextStep step={4}>
          Follow screen instructions to install eSIM
        </PlanTextStep>
        <TurnOnDataRoamingStep step={5} />
      </StyledContent>
    );
  };

  return (
    <div
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "w-full text-center"
      )}
    >
      {renderQRInstallation()}
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
