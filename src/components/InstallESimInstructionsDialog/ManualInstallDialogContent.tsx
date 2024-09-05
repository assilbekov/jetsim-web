import { Card } from "@/models/Card";
import { DialogTitle } from "../Dialog/DialogTitle";
import { ManualInstall } from "./ManualInstall";
import { QRInstall } from "./QRInstall";
import { useTranslations } from "next-intl";

type ManualInstallDialogContentProps = {
  onClose: () => void;
  card: Card;
};

export const ManualInstallDialogContent = ({
  onClose,
  card,
}: ManualInstallDialogContentProps) => {
  const t = useTranslations("InstallESimInstructionsDialog");

  return (
    <>
      <DialogTitle
        onClose={onClose}
        title={t("ManualInstallDialogContent_dialogtitle")}
      />
      <QRInstall card={card} />
      <ManualInstall card={card} />
    </>
  );
};
