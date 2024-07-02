import { useState } from "react";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { InstallESimInstructionsDialog } from "../InstallESimInstructionsDialog";
import { Card } from "@/models/Card";
import { handleSuccessPaymentInstructionClick } from "@/gtm-events";

type SeeInstructionsButtonProps = {
  card: Card;
};

export const SeeInstructionsButton = ({ card }: SeeInstructionsButtonProps) => {
  const [instructionsDialogShow, setInstructionsDialogShow] = useState(false);
  return (
    <>
      <SecondaryButton
        className="mt-4 w-full"
        onClick={() => {
          setInstructionsDialogShow(true);
          handleSuccessPaymentInstructionClick();
        }}
      >
        See instructions
      </SecondaryButton>
      {instructionsDialogShow && (
        <InstallESimInstructionsDialog
          card={card}
          onClose={() => setInstructionsDialogShow(false)}
        />
      )}
    </>
  );
};
