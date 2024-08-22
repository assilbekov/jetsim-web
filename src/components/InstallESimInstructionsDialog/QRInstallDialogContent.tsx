import { DialogTitle } from "../Dialog/DialogTitle";
import { Card } from "@/models/Card";
import { QRInstall } from "./QRInstall";
import { ManualInstall } from "./ManualInstall";
import { useTranslations } from "next-intl";

type QRInstallDialogContentProps = {
  card: Card;
  onClose: () => void;
};

export const QRInstallDialogContent = ({
  card,
  onClose
}: QRInstallDialogContentProps) => {
  const t = useTranslations("InstallESimInstructionsDialog");

  return (
    <>
      <DialogTitle title={t("QRInstallDialogContent_title")} onClose={onClose} />
      <>
        <QRInstall card={card} />
        <ManualInstall card={card} />
      </>
    </>
  );
};
