import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";

type CheckCompatibilityDialogProps = {
  onClose: () => void;
};

export const CheckCompatibilityDialog = ({
  onClose,
}: CheckCompatibilityDialogProps) => {
  return (
    <Dialog onClose={onClose}>
      <DialogTitle title="Compatible smartphones with eSIM" onClose={onClose} />
    </Dialog>
  );
};
