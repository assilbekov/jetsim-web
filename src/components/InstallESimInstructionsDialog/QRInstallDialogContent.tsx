import { DialogTitle } from "../Dialog/DialogTitle";
import { Card } from "@/models/Card";
import { QRInstall } from "./QRInstall";
import { ManualInstall } from "./ManualInstall";

type QRInstallDialogContentProps = {
  card: Card;
  onClose: () => void;
};

export const QRInstallDialogContent = ({
  card,
  onClose
}: QRInstallDialogContentProps) => {
  return (
    <>
      <DialogTitle title="How to install eSIM" onClose={onClose} />
      <>
        <QRInstall card={card} />
        <ManualInstall card={card} />
      </>
    </>
  );
};
