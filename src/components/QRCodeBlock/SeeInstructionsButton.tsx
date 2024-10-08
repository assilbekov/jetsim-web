import { useState } from "react";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { InstallESimInstructionsDialog } from "../InstallESimInstructionsDialog";
import { Card } from "@/models/Card";
import { handleSuccessPaymentInstructionClick, handleSuccessPaymentManualClick } from "@/gtm-events";
import { SeeInstructionsDialog } from "../SeeInstructionsDialog";
import { useTranslations } from "next-intl";

type SeeInstructionsButtonProps = {
  card: Card;
  locale: string;
};

export const SeeInstructionsButton = ({
  card,
  locale,
}: SeeInstructionsButtonProps) => {
  const t = useTranslations("QRCodeBlock");
  const [instructionsDialogShow, setInstructionsDialogShow] = useState(false);

  return (
    <>
      <SecondaryButton
        className="mt-4 w-full"
        onClick={() => {
          setInstructionsDialogShow(true);
          handleSuccessPaymentInstructionClick();
          handleSuccessPaymentManualClick();
        }}
      >
        {t("seeInstructions")}
      </SecondaryButton>
      {/* {instructionsDialogShow && (
        <InstallESimInstructionsDialog
          card={card}
          onClose={() => setInstructionsDialogShow(false)}
        />
      )} */}
      {instructionsDialogShow && (
        <SeeInstructionsDialog
          card={card}
          onClose={() => setInstructionsDialogShow(false)}
          locale={locale}
        />
      )}
    </>
  );
};
