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
import { useDeviceTypeAndVersion } from "@/hooks/useDeviceTypeAndVersion";
import { UseQRDetailsStep } from "./components/UseQRDetailsStep";
import { OpenMyEsim } from "./components/DesktopComponents/OpenMyEsim";
import { useTranslations } from "next-intl";

type IOSContentProps = {
  card: Card;
  locale: string;
};

export const IOSContent = ({ card, locale }: IOSContentProps) => {
  const t = useTranslations("SeeInstructionsDialog");
  const deviceTypeAndVerion = useDeviceTypeAndVersion();

  const renderQRInstallation = () => {
    if (deviceTypeAndVerion.isIOS && deviceTypeAndVerion.version >= "16") {
      return (
        <StyledContent>
          <ScanQRStep step={1} card={card} />
          <PlanTextStep step={2}>
            {t("followScreenInstructionsESIM")}
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
            {t("followScreenInstructionsESIM")}
          </PlanTextStep>
          <TurnOnDataRoamingStep step={4} />
        </StyledContent>
      );
    }

    return (
      <StyledContent>
        <ScanQRStep step={1} card={card} />
        <UseQRDetailsStep step={2} />
        <PlanTextStep step={3}>{t("scanSharedQRCode")}</PlanTextStep>
        <PlanTextStep step={4}>
          {t("followScreenInstructionsESIM")}
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
      <p className="mt-5 mb-4">{t("alternativeOptionText")}</p>
      <StyledContent>
        <EnterDetailsManuallyStep step={1} />
        <EnterFollowingDataStep step={2} card={card} />
        <PlanTextStep step={3}>
          {t("followScreenInstructionsESIM")}
        </PlanTextStep>
        <TurnOnDataRoamingStep step={4} />
      </StyledContent>
      {deviceTypeAndVerion.isDesktop && (
        <>
          <p className="mt-5 mb-4">{t("ios175LaterText")}</p>
          <StyledContent>
            <OpenMyEsim step={1} locale={locale} />
            <TurnOnDataRoamingStep step={2} />
          </StyledContent>
        </>
      )}
    </div>
  );
};
