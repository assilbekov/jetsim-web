import { DialogTitle } from "../Dialog/DialogTitle";
import { ManualInstall } from "./ManualInstall";

type ManualInstallDialogContentProps = {
  onClose: () => void;
};

export const ManualInstallDialogContent = ({
  onClose,
}: ManualInstallDialogContentProps) => {
  return (
    <>
      <DialogTitle onClose={onClose} title="Install eSIM" />
      <ManualInstall />
    </>
  );
};
