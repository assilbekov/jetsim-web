import { Dialog } from "../Dialog";
import { ManualInstall } from "./ManualInstall";
import { ManualInstallDialogContent } from "./ManualInstallDialogContent";

enum InstallESimInstructionsType {
  MANUAL = "manual",
  QR = "qr",
  BOTH = "both",
}

type InstallESimInstructionsDialogProps = {
  // TODO
};

export const InstallESimInstructionsDialog = () => {
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
        <ManualInstallDialogContent onClose={() => {}} />
      </div>
    </Dialog>
  );
};
