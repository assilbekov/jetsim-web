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
import { useState } from "react";
import { PixelManualStep } from "./components/PixelManualStep";
import { TurnOnPixelStep } from "./components/TurnOnPixelStep";
import { PixelQRStep } from "./components/PixelQRStep";
import { TurnOnQRPixelStep } from "./components/TurnOnQRPixelStep";
import { SamsungManualStep } from "./components/SamsungComponents/SamsungManualStep";

type AndroidContentProps = {
  card: Card;
};

enum AndroidType {
  Samsung = "Samsung",
  GooglePixel = "GooglePixel",
  Other = "Other",
}

export const AndroidContent = ({ card }: AndroidContentProps) => {
  const deviceTypeAndVerion = useDeviceTypeAndVerion();
  const [type, setType] = useState<AndroidType>(AndroidType.Samsung);

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
      <StyledContent>
        <select
          className="w-full py-3 px-6 border-solid border-[1px] border-[#E9F0F2] rounded-full"
          value={type}
          onChange={(e) => setType(e.target.value as AndroidType)}
        >
          {[
            AndroidType.Samsung,
            AndroidType.GooglePixel,
            AndroidType.Other,
          ].map((type) => (
            <option
              key={type}
              value={type}
              className="px-6 py-3 w-full border-solid border-[1px] border-[#E9F0F2]"
            >
              {type}
            </option>
          ))}
        </select>
        {type === AndroidType.Samsung ? (
          <SamsungManualStep step={1} />
        ) : (
          <PixelManualStep step={1} />
        )}
        <EnterFollowingDataStep step={2} card={card} isAndroid />
        <PlanTextStep step={3}>
          Follow screen instructions to install eSIM
        </PlanTextStep>
        <TurnOnPixelStep step={4} />
      </StyledContent>
      <p className="mt-5 mb-4">Or use alternative option</p>
      <StyledContent>
        <ScanQRStep step={1} card={card} />
        <PixelQRStep step={2} />
        <PlanTextStep step={3}>
          Scan this QR code and follow screen instructions to install eSIM
        </PlanTextStep>
        <TurnOnQRPixelStep step={4} />
      </StyledContent>
    </div>
  );
};
