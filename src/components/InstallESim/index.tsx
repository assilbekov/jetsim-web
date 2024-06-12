import { Card as CardModel } from "@/models/Card";
import { ManualInstall } from "./ManualInstall";
import { QRCodeInstall } from "./QRCodeInstall";
import { ReinstallESim } from "./ReinstallESim";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";
import { InstallESimToggle } from "./InstallESimToggle";

type InstallESimProps = {
  card: CardModel;
};

export const InstallESim = ({ card }: InstallESimProps) => {
  return (
    <LandingContainer>
      <Card>
        <div className="max-w-[453px] mx-auto">
          <ReinstallESim />
          <InstallESimToggle
            QRContent={<QRCodeInstall card={card} />}
            ManualContent={<ManualInstall card={card} />}
          />
        </div>
      </Card>
    </LandingContainer>
  );
};
