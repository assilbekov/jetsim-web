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
            Your device must be unlocked and the iOS version must be updated to
            14.1 or newer. You can check with your carrier to see if there is
            anything you can do to unlock the eSIM in your device.
          </Paragraph>

          <Paragraph>
            If you have a Turkish-produced device refer to{" "}
            <LinkText href="https://support.apple.com/en-us/109343">
              this instructions
            </LinkText>
          </Paragraph>
        </div>
      </AccordionPanel>

      <AccordionPanel title="Android" index={1}>
        <div className="w-full flex flex-col gap-4">
          <Paragraph>
            Your device must be unlocked. You can check with your carrier to see
            if there is anything you can do to unlock the eSIM in your device.
            Within one device model there can be devices both with eSIM
            technology and without. Please check your device before the
            purchase.
          </Paragraph>

          <ListBlock
            title="Samsung"
            elements={[
              "Galaxy A55",
              "Galaxy A54",
              "Galaxy A35",
              "Galaxy S24, S24+, S24 Ultra",
              "Galaxy S23, S23+, S23 Ultra, S23 FE",
              "Galaxy S22 5G, S22+ 5G, S22 Ultra 5G",
              "Galaxy S21 5G, S21+ 5G, S21 Ultra 5G (US versions of S21 are not compatible with eSIM)",
              "Galaxy S20, S20 5G, S20+, S20+ 5G, S20 Ultra, S20 Ultra 5G (US versions of S20 and S20 FE 4G/5G are not compatible with eSIM)",
              "Galaxy Note20, Note20 5G, Note20 Ultra 5G (US and Hong Kong versions of Note 20 Ultra are not compatible with eSIM)",
              "Galaxy Xcover7",
              "Galaxy Fold",
              "Galaxy Z Fold4",
              "Galaxy Z Fold3 5G",
              "Galaxy Z Fold2 5G",
              "Galaxy Z Flip4",
              "Galaxy Z Flip3 5G",
              "Galaxy Z Flip and Z Flip 5G (US versions of Z Flip 5G are not compatible with eSIM)",
            ]}
          />

          <ListBlock
            title="Google Pixel"
            elements={[
              "Pixel 7, 7 Pro",
              "Pixel 6, 6a, 6 Pro",
              "Pixel 5, 5a 5G",
              "Pixel 4, 4a, 4 XL, 4a 5G",
              "Pixel 3, 3a*, 3 XL, 3a XL",
            ]}
            postText={
              <>
                Visit{" "}
                <LinkText href="https://support.google.com/pixelphone/answer/9449293?hl=en">
                  Google website
                </LinkText>{" "}
                to learn more about eSIM
              </>
            }
          />

          <ListBlock
            title="Xiaomi"
            elements={[
              "Xiaomi 12T Pro",
              "Xiaomi 13 Pro",
              "Xiaomi 13",
              "Xiaomi 13 Lite",
              "Xiaomi 13T",
              "Xiaomi 13T Pro",
              "Redmi Note 13 Pro 5G",
              "Redmi Note 13 Pro+ 5G",
              "Xiaomi 14",
            ]}
            postText={
              <>
                Visit{" "}
                <LinkText href="https://www.mi.com/global/support/esim/">
                  Xiaomi website
                </LinkText>{" "}
                to learn more about eSIM
              </>
            }
          />
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
