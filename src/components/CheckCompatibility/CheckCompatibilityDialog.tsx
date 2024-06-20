import { clsx } from "@/utils";
import { AccordionPanel } from "../AccordionPanel";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { TypographyVariants, getTypographyClass } from "../Typography";
import Link, { LinkProps } from "next/link";

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

const LinkText = (props: LinkProps & { children: React.ReactNode }) => (
  <Link {...props} className="text-primary-500 underline" />
);

type ListBlockProps = {
  title?: React.ReactNode;
  elements: React.ReactNode[];
  postText?: React.ReactNode;
};

const ListBlock = ({ title, elements, postText }: ListBlockProps) => (
  <div className="flex flex-col gap-1">
    {title && <Subheader>{title}</Subheader>}
    <ul className="list-disc list-outside pl-5">
      {elements.map((element, index) => (
        <li
          key={index}
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "text-text-100"
          )}
        >
          {element}
        </li>
      ))}
    </ul>
    {postText && <Paragraph>{postText}</Paragraph>}
  </div>
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
      <AccordionPanel title="iOS" index={0}>
        <div className="w-full flex flex-col gap-4">
          <Paragraph>
            Visit the{" "}
            <LinkText href="https://support.apple.com/en-jo/guide/deployment/dep36c581d6x/web">
              Apple website
            </LinkText>{" "}
            to learn more about eSIM
          </Paragraph>

          <ListBlock
            title="iPhones"
            elements={[
              "iPhone 15 models",
              "iPhone 14 models",
              "iPhone 13 models",
              "iPhone 12 models",
              "iPhone 11 models",
              "iPhone X models",
              "iPhone SE (2nd generation) and up",
            ]}
          />

          <ListBlock
            title="iPads"
            elements={[
              "iPad Pro 13-inch and 11-inch (M4) models",
              "iPad Air 13-inch and 11-inch (M2) models",
              "iPad Pro (3rd generation) or later 11-inch, 12.9-inch models",
              "iPad mini (5th generation) or later",
              "iPad Air (3rd generation) or later",
              "iPad (7th generation) or later",
            ]}
          />

          <ListBlock
            title="Not supported"
            elements={[
              "All iPhones bellow iPhone 8 and iPhone SE (1st generation)",
              "WiFi only iPads",
              <>
                Not all Dual SIM phones are supported. Learn more on the{" "}
                <LinkText href="https://support.apple.com/en-us/108898">
                  Apple Support website
                </LinkText>
              </>,
            ]}
          />

          <Paragraph>
            Your device must be unlocked and the iOS version must be updated
            to 14.1 or newer. You can check with your carrier to see if there
            is anything you can do to unlock the eSIM in your device.
          </Paragraph>

          <Paragraph>
            Your device must be unlocked and the iOS version must be updated to
            14.1 or newer. You can check with your carrier to see if there is
            anything you can do to unlock the eSIM in your device.
          </Paragraph>
        </div>
      </AccordionPanel>
      <AccordionPanel title="Other" index={2}>
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
