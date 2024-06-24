import { Card as CardModel } from "@/models/Card";
import { ManualInstall } from "./ManualInstall";
import { QRCodeInstall } from "./QRCodeInstall";
import { ReinstallESim } from "./ReinstallESim";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";
import { InstallESimToggle } from "./InstallESimToggle";

type InstallESimProps = {
  card: CardModel;
  onSeeInstructionsClick: () => void;
};

export const InstallESim = ({
  card,
  onSeeInstructionsClick,
}: InstallESimProps) => {
  return (
    <LandingContainer>
      <Card>
        <div className="max-w-[453px] mx-auto flex flex-col gap-8">
          <ReinstallESim />
          <InstallESimToggle
            QRContent={
              <QRCodeInstall
                card={card}
                onSeeInstructionsClick={onSeeInstructionsClick}
              />
            }
            ManualContent={
              <ManualInstall
                card={card}
                onSeeInstructionsClick={onSeeInstructionsClick}
              />
            }
          />
        </div>
      </Card>
    </LandingContainer>
  );
};
