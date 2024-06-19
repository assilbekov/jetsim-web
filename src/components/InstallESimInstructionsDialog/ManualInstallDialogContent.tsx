import { Card } from "@/models/Card";
import { DialogTitle } from "../Dialog/DialogTitle";
import { ManualInstall } from "./ManualInstall";
import { QRInstall } from "./QRInstall";

type ManualInstallDialogContentProps = {
  onClose: () => void;
  card: Card;
};

export const ManualInstallDialogContent = ({
  onClose,
  card,
}: ManualInstallDialogContentProps) => {
  return (
    <>
      <DialogTitle onClose={onClose} title="Install eSIM" />
      <QRInstall card={card} />
      <ManualInstall card={card} />
    </>
  );
};
