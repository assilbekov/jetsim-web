"use client";

import { Card as CardModel } from "@/models/Card";
import { ManualInstall } from "./ManualInstall";
import { QRCodeInstall } from "./QRCodeInstall";
import { ReinstallESim } from "./ReinstallESim";
import { InstallToggleButtons } from "./InstallToggleButtons";
import { useState } from "react";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";

enum InstallMethod {
  QR = "qr",
  MANUAL = "manual",
}

type InstallESimProps = {
  card: CardModel;
};

export const InstallESim = ({ card }: InstallESimProps) => {
  const [installMethod, setInstallMethod] = useState<InstallMethod>(
    InstallMethod.QR
  );

  return (
    <LandingContainer>
      <Card>
        <div className="max-w-[453px] mx-auto">
          <ReinstallESim />
          <InstallToggleButtons
            installMethod={installMethod}
            setInstallMethod={setInstallMethod}
          />
          {installMethod === InstallMethod.QR ? (
            <QRCodeInstall card={card} />
          ) : (
            <ManualInstall card={card} />
          )}
        </div>
      </Card>
    </LandingContainer>
  );
};
