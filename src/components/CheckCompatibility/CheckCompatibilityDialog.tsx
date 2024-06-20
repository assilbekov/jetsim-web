import { clsx } from "@/utils";
import { AccordionPanel } from "../AccordionPanel";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { TypographyVariants, getTypographyClass } from "../Typography";

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p
    className={clsx(
      getTypographyClass(TypographyVariants.Body2),
      "text-text-100"
    )}
  >
    {children}
  </p>
);

const Subheader = ({ children }: { children: React.ReactNode }) => (
  <h6
    className={clsx(
      getTypographyClass(TypographyVariants.Body),
      "text-text-100"
    )}
  >
    {children}
  </h6>
);

type CheckCompatibilityDialogProps = {
  onClose: () => void;
};

export const CheckCompatibilityDialog = ({
  onClose,
}: CheckCompatibilityDialogProps) => {
  return (
    <Dialog onClose={onClose}>
      <DialogTitle title="Compatible smartphones with eSIM" onClose={onClose} />
      <AccordionPanel title="Other" index={0}>
        <div className="flex flex-col gap-4">
          <Paragraph>
            To check if a specific device supports eSIM, visit the official
            website of the device's manufacturer. Look for specifications or
            features of the device to see if eSIM is mentioned.
          </Paragraph>
          <Paragraph>
            Additionally, you can refer to user manuals or contact customer
            support for confirmation. Keep in mind that eSIM compatibility may
            vary depending on the device model, region, and carrier, so it's
            essential to verify this information before making a purchase or
            activation.
          </Paragraph>
        </div>
      </AccordionPanel>
    </Dialog>
  );
};
