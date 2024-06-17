import { Card } from "@/models/Card";
import { Dialog } from "../Dialog";
import { ManualInstall } from "./ManualInstall";
import { ManualInstallDialogContent } from "./ManualInstallDialogContent";

enum InstallESimInstructionsType {
  MANUAL = "manual",
  QR = "qr",
  BOTH = "both",
}

type InstallESimInstructionsDialogProps = {
  type?: InstallESimInstructionsType;
  card: Card;
};

export const InstallESimInstructionsDialog = ({
  type = InstallESimInstructionsType.BOTH,
  card,
}: InstallESimInstructionsDialogProps) => {
  return (
    <Dialog
      //onClose={() => props.setDialog(null)}
      onClose={() => {}} // TODO
      dialogClassName={
        //props.type === CardDialogType.DETAILS
        true ? "md:h-auto md:h-max-auto md:h-fit" : ""
      }
      //dialogContentClassName={props.type === CardDialogType.DETAILS ? "md:h-auto" : ""}
    >
      <div className="flex flex-col gap-5 w-full">
        <ManualInstallDialogContent card={card} onClose={() => {}} />
      </div>
    </Dialog>
  );
};
