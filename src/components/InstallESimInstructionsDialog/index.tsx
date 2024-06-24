import { Card } from "@/models/Card";
import { Dialog } from "../Dialog";
import { ManualInstall } from "./ManualInstall";
import { ManualInstallDialogContent } from "./ManualInstallDialogContent";
import { HowToInstallDialogContent } from "./HowToInstallDialogContent";
import { QRInstallDialogContent } from "./QRInstallDialogContent";

enum InstallESimInstructionsType {
  MANUAL = "manual",
  QR = "qr",
  BOTH = "both",
}

type InstallESimInstructionsDialogProps = {
  type?: InstallESimInstructionsType;
  card: Card;
  onClose: () => void;
};

export const InstallESimInstructionsDialog = ({
  type = InstallESimInstructionsType.BOTH,
  card,
  onClose,
}: InstallESimInstructionsDialogProps) => {
  return (
    <Dialog
      onClose={onClose}
      dialogClassName={
        //props.type === CardDialogType.DETAILS
        true ? "md:h-auto md:h-max-auto md:h-fit" : ""
      }
      //dialogContentClassName={props.type === CardDialogType.DETAILS ? "md:h-auto" : ""}
    >
      <div className="flex flex-col gap-5 w-full">
        {{
          [InstallESimInstructionsType.MANUAL]: (
            <ManualInstallDialogContent card={card} onClose={onClose} />
          ),
          [InstallESimInstructionsType.QR]: (
            <QRInstallDialogContent card={card} onClose={onClose} />
          ),
          [InstallESimInstructionsType.BOTH]: (
            <HowToInstallDialogContent card={card} onClose={onClose} />
          ),
        }[type] || <></>}
      </div>
    </Dialog>
  );
};
