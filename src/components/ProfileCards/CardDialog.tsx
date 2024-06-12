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
  setDialog: (model: CardDialogModel | null) => void;
} & CardDialogModel;

const InstallContent = ({ card, setDialog }: CardDialogProps) => {
  return (
    <>
      <DialogTitle onClose={() => setDialog(null)} title="Install eSIM" />
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
    </>
  );
};

export const CardDialog = (props: CardDialogProps) => {
  return (
    <Dialog onClose={() => props.setDialog(null)}>
      <div className="flex flex-col gap-5">
        {{
          [CardDialogType.INSTALL]: <InstallContent {...props} />,
          [CardDialogType.DETAILS]: <></>,
          [CardDialogType.BUY_NEW_PLAN]: <></>,
        }[props.type] || <></>}
      </div>
    </Dialog>
  );
};
