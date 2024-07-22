"use client";

import { Card } from "@/models/Card";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { ScanQRStep } from "./components/ScanQRStep";
import { PlanTextStep } from "./components/PlanTextStep";
import { StyledContent } from "./components/StyledContent";
import { EnterFollowingDataStep } from "./components/EnterFollowingDataStep";
import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";
import { useState } from "react";
import { PixelManualStep } from "./components/PixelManualStep";
import { TurnOnPixelStep } from "./components/TurnOnPixelStep";
import { PixelQRStep } from "./components/PixelQRStep";
import { TurnOnQRPixelStep } from "./components/TurnOnQRPixelStep";
import { SamsungManualStep } from "./components/SamsungComponents/SamsungManualStep";
import { SamsungQRStep } from "./components/SamsungComponents/SamsungQRStep";
import { SamsungMobileDataStep } from "./components/SamsungComponents/SamsungMobileDataStep";
import { SamsungTurnOnStep } from "./components/SamsungComponents/SamsungTurnOnStep";
import { SamsungManualMobileStep } from "./components/DesktopComponents/SamsungManualMobileStep";
import { SamsungManualRoamingStep } from "./components/DesktopComponents/SamsungManualRoamingStep";
import { SamsungScanQRDesktopStep } from "./components/DesktopComponents/SamsungScanQRDesktopStep";
import { PixelScanQRDesktopStep } from "./components/DesktopComponents/PixelScanQRDesktopStep";
import { SamsungQRRoamingStep } from "./components/DesktopComponents/SamsungQRRoamingStep";
import { PixelQRRoamingStep } from "./components/DesktopComponents/PixelQRRoamingStep";
import { PixelTurnOnDesktop } from "./components/DesktopComponents/PixelTurnOnDesktop";

type AndroidContentProps = {
  card: Card;
};

enum AndroidType {
  Samsung = "Samsung",
  GooglePixel = "GooglePixel",
}

export const AndroidContent = ({ card }: AndroidContentProps) => {
  const deviceTypeAndVerion = useDeviceTypeAndVerion();
  const [type, setType] = useState<AndroidType>(AndroidType.Samsung);

  const renderManualBlockMobile = () => {
    if (type === AndroidType.Samsung) {
      return (
        <>
          <SamsungManualStep step={1} />
          <EnterFollowingDataStep step={2} card={card} isAndroid />
          <PlanTextStep step={3}>
            Follow screen instructions to install eSIM
          </PlanTextStep>
          <SamsungManualMobileStep step={4} />
        </>
      );
    }

    return (
      <>
        <PixelManualStep step={1} />
        <EnterFollowingDataStep step={2} card={card} isAndroid />
        <PlanTextStep step={3}>
          Follow screen instructions to install eSIM
        </PlanTextStep>
        <TurnOnPixelStep step={4} />
      </>
    );
  };

  const renderQRBlockMobile = () => {
    if (type === AndroidType.Samsung) {
      return (
        <>
          <ScanQRStep step={1} card={card} />
          <SamsungQRStep step={2} />
          <PlanTextStep step={3}>
            Scan shared QR code and follow screen instructions to install eSIM
          </PlanTextStep>
          <SamsungMobileDataStep step={4} />
          <SamsungTurnOnStep step={5} />
        </>
      );
    }

    return (
      <>
        <ScanQRStep step={1} card={card} />
        <PixelQRStep step={2} />
        <PlanTextStep step={3}>
          Scan this QR code and follow screen instructions to install eSIM
        </PlanTextStep>
        <TurnOnQRPixelStep step={4} />
      </>
    );
  };

  const renderManualDesktop = () => {
    if (type === AndroidType.Samsung) {
      return (
        <>
          <SamsungManualStep step={1} />
          <EnterFollowingDataStep step={2} card={card} isAndroid />
          <PlanTextStep step={3}>
            Follow screen instructions to install eSIM
          </PlanTextStep>
          <SamsungManualMobileStep step={4} />
          <SamsungManualRoamingStep step={5} />
        </>
      );
    }

    return (
      <>
        <PixelManualStep step={1} />
        <EnterFollowingDataStep step={2} card={card} isAndroid />
        <PlanTextStep step={3}>
          Follow screen instructions to install eSIM
        </PlanTextStep>
        <PixelTurnOnDesktop step={4} />
      </>
    );
  };

  const renderQRBlockDesktop = () => {
    if (type === AndroidType.Samsung) {
      return (
        <>
          <SamsungScanQRDesktopStep step={1} />
          <ScanQRStep
            step={2}
            card={card}
            helperText="Scan this QR code and follow screen instructions to install eSIM"
          />
          <SamsungQRRoamingStep step={3} />
        </>
      );
    }
    return (
      <>
        <PixelScanQRDesktopStep step={1} />
        <ScanQRStep
          step={2}
          card={card}
          helperText="Scan this QR code and follow screen instructions to install eSIM"
        />
        <PixelQRRoamingStep step={3} />
      </>
    );
  };

  const renderTopBlock = () => {
    return deviceTypeAndVerion.isDesktop
      ? renderQRBlockDesktop()
      : renderManualBlockMobile();
  };

  const renderBottomBlock = () => {
    return deviceTypeAndVerion.isDesktop
      ? renderManualDesktop()
      : renderQRBlockMobile();
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
          {[AndroidType.Samsung, AndroidType.GooglePixel].map((type) => (
            <option
              key={type}
              value={type}
              className="px-6 py-3 w-full border-solid border-[1px] border-[#E9F0F2]"
            >
              {type}
            </option>
          ))}
        </select>
        {renderTopBlock()}
      </StyledContent>
      <p className="mt-5 mb-4">Or use alternative option</p>
      <StyledContent>{renderBottomBlock()}</StyledContent>
    </div>
  );
};
