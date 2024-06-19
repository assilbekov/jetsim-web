import { DialogTitle } from "../Dialog/DialogTitle";
import { Card } from "@/models/Card";
import { QRInstall } from "./QRInstall";
import { ManualInstall } from "./ManualInstall";

type QRInstallDialogContentProps = {
  card: Card;
};

export const QRInstallDialogContent = ({
  card,
}: QRInstallDialogContentProps) => {
  return (
    <>
      <DialogTitle title="How to install eSIM" onClose={() => {}} />
      <>
        <QRInstall card={card} />
        <ManualInstall card={card} />
      </>
    </>
  );
};
