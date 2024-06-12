import { Card } from "@/models/Card";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { ReinstallESim } from "../InstallESim/ReinstallESim";
import { InstallESimToggle } from "../InstallESim/InstallESimToggle";
import { InfoCard } from "./InfoCard";
import { QRCodeInstall } from "../InstallESim/QRCodeInstall";
import { ManualInstall } from "../InstallESim/ManualInstall";
import { BeforeInstallationContent } from "../InstallESim/BeforeInstallation";
import { Location } from "@/models/Location";

export enum CardDialogType {
  INSTALL = "install",
  DETAILS = "details",
  BUY_NEW_PLAN = "buy-new-plan",
}

export type CardDialogModel = {
  type: CardDialogType;
  card: Card;
  location: Location;
};

type CardDialogProps = {
  card: Card;
  location: Location;
  setDialog: (model: CardDialogModel | null) => void;
};

export const CardDialog = ({
  card,
  location,
  setDialog,
}: CardDialogProps) => {
  return (
    <Dialog onClose={() => setDialog(null)}>
      <div className="flex flex-col gap-5">
        <DialogTitle
          onClose={() => setDialog(null)}
          title="Install eSIM"
        />
        <ReinstallESim />
        <InstallESimToggle
          QRContent={
            <InfoCard>
              <QRCodeInstall card={card} />
            </InfoCard>
          }
          ManualContent={
            <InfoCard>
              <ManualInstall card={card} />
            </InfoCard>
          }
        />
        <InfoCard>
          <BeforeInstallationContent />
        </InfoCard>
      </div>
    </Dialog>
  );
};
