"use client";

import { clsx } from "@/utils";
import { AccordionPanel } from "../AccordionPanel";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Link, LinkProps } from "@/navigation";
import { useTranslations } from "next-intl";

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

const LinkText = (props: LinkProps) => (
  <Link
    {...props}
    className="text-primary-500 underline hover:text-primary-300 transition-colors duration-200 ease-in-out"
    target="_blank"
  />
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
  const t = useTranslations("CheckCompatibility");

  return (
    <Dialog onClose={onClose}>
      <DialogTitle title={t("title")} onClose={onClose} />
      <div className="flex flex-col gap-4">
        <AccordionPanel title={t("ios_title")} index={0}>
          <div className="w-full flex flex-col gap-4">
            <Paragraph>
              {t("ios_linkText")}{" "}
              <LinkText href="https://support.apple.com/en-jo/guide/deployment/dep36c581d6x/web">
                {t("ios_linkText")}
              </LinkText>
            </Paragraph>

            <ListBlock
              title={t("ios_iPhones_title")}
              elements={[
                t("ios_iPhones_list_0"),
                t("ios_iPhones_list_1"),
                t("ios_iPhones_list_2"),
                t("ios_iPhones_list_3"),
                t("ios_iPhones_list_4"),
                t("ios_iPhones_list_5"),
                t("ios_iPhones_list_6"),
              ]}
            />

            <ListBlock
              title={t("ios_iPads_title")}
              elements={[
                t("ios_iPads_list_0"),
                t("ios_iPads_list_1"),
                t("ios_iPads_list_2"),
                t("ios_iPads_list_3"),
                t("ios_iPads_list_4"),
                t("ios_iPads_list_5"),
              ]}
            />

            <ListBlock
              title={t("ios_notSupported_title")}
              elements={[
                t("ios_notSupported_list_0"),
                t("ios_notSupported_list_1"),
                <>
                  {t("ios_notSupported_list_2")}{" "}
                  <LinkText href="https://support.apple.com/en-us/108898">
                    {t("ios_notSupported_linkText")}
                  </LinkText>
                </>,
              ]}
            />

            <Paragraph>{t("ios_deviceUnlocked")}</Paragraph>

            <Paragraph>
              {t("ios_turkishDevice")}{" "}
              <LinkText href="https://support.apple.com/en-us/109343">
                {t("ios_turkishDevice_linkText")}
              </LinkText>
            </Paragraph>
          </div>
        </AccordionPanel>

        <AccordionPanel title={t("android_title")} index={1}>
          <div className="w-full flex flex-col gap-4">
            <Paragraph>{t("android_deviceUnlocked")}</Paragraph>

            <ListBlock
              title={t("android_samsung_title")}
              elements={[
                t("android_samsung_list_0"),
                t("android_samsung_list_1"),
                t("android_samsung_list_2"),
                t("android_samsung_list_3"),
                t("android_samsung_list_4"),
                t("android_samsung_list_5"),
                t("android_samsung_list_6"),
                t("android_samsung_list_7"),
                t("android_samsung_list_8"),
                t("android_samsung_list_9"),
                t("android_samsung_list_10"),
                t("android_samsung_list_11"),
                t("android_samsung_list_12"),
                t("android_samsung_list_13"),
                t("android_samsung_list_14"),
                t("android_samsung_list_15"),
                t("android_samsung_list_16"),
              ]}
            />

            <ListBlock
              title={t("android_googlePixel_title")}
              elements={[
                t("android_googlePixel_list_0"),
                t("android_googlePixel_list_1"),
                t("android_googlePixel_list_2"),
                t("android_googlePixel_list_3"),
                t("android_googlePixel_list_4"),
              ]}
              postText={
                <>
                  {t("android_googlePixel_linkText")}{" "}
                  <LinkText href="https://support.google.com/pixelphone/answer/9449293?hl=en">
                    {t("android_googlePixel_linkText")}
                  </LinkText>
                </>
              }
            />

            <ListBlock
              title={t("android_xiaomi_title")}
              elements={[
                t("android_xiaomi_list_0"),
                t("android_xiaomi_list_1"),
                t("android_xiaomi_list_2"),
                t("android_xiaomi_list_3"),
                t("android_xiaomi_list_4"),
                t("android_xiaomi_list_5"),
                t("android_xiaomi_list_6"),
                t("android_xiaomi_list_7"),
                t("android_xiaomi_list_8"),
              ]}
              postText={
                <>
                  {t("android_xiaomi_linkText")}{" "}
                  <LinkText href="https://www.mi.com/global/support/esim/">
                    {t("android_xiaomi_linkText")}
                  </LinkText>
                </>
              }
            />

            <ListBlock
              title={t("android_huawei_title")}
              elements={[
                t("android_huawei_list_0"),
                t("android_huawei_list_1"),
                t("android_huawei_list_2"),
              ]}
              postText={
                <>
                  {t("android_huawei_linkText")}{" "}
                  <LinkText href="https://consumer.huawei.com/za/community/details/How-to-use-eSIM-on-your-eligible-Huawei-Phone/topicId_172574/">
                    {t("android_huawei_linkText")}
                  </LinkText>
                </>
              }
            />

            <ListBlock
              title={t("android_sony_title")}
              elements={[
                t("android_sony_list_0"),
                t("android_sony_list_1"),
                t("android_sony_list_2"),
                t("android_sony_list_3"),
                t("android_sony_list_4"),
              ]}
              postText={
                <>
                  {t("android_sony_linkText")}{" "}
                  <LinkText href="https://www.sony.co.uk/electronics/support/articles/00300757">
                    {t("android_sony_linkText")}
                  </LinkText>
                </>
              }
            />

            <ListBlock
              title={t("android_motorola_title")}
              elements={[
                t("android_motorola_list_0"),
                t("android_motorola_list_1"),
                t("android_motorola_list_2"),
                t("android_motorola_list_3"),
                t("android_motorola_list_4"),
                t("android_motorola_list_5"),
                t("android_motorola_list_6"),
                t("android_motorola_list_7"),
                t("android_motorola_list_8"),
                t("android_motorola_list_9"),
                t("android_motorola_list_10"),
                t("android_motorola_list_11"),
                t("android_motorola_list_12"),
                t("android_motorola_list_13"),
                t("android_motorola_list_14"),
                t("android_motorola_list_15"),
                t("android_motorola_list_16"),
                t("android_motorola_list_17"),
                t("android_motorola_list_18"),
                t("android_motorola_list_19"),
              ]}
            />

            <ListBlock
              title={t("android_oppo_title")}
              elements={[
                t("android_oppo_list_0"),
                t("android_oppo_list_1"),
                t("android_oppo_list_2"),
                t("android_oppo_list_3"),
              ]}
            />

            <ListBlock
              title={t("android_honor_title")}
              elements={[
                t("android_honor_list_0"),
                t("android_honor_list_1"),
                t("android_honor_list_2"),
                t("android_honor_list_3"),
                t("android_honor_list_4"),
                t("android_honor_list_5"),
              ]}
              postText={
                <>
                  {t("android_honor_linkText")}{" "}
                  <LinkText href="https://www.honor.com/global/tech/honor-esim/">
                    {t("android_honor_linkText")}
                  </LinkText>
                </>
              }
            />
          </div>
        </AccordionPanel>

        <AccordionPanel title={t("other_title")} index={2}>
          <div className="flex flex-col gap-4">
            <Paragraph>{t("other_content_1")}</Paragraph>
            <Paragraph>{t("other_content_2")}</Paragraph>
          </div>
        </AccordionPanel>
      </div>
    </Dialog>
  );
};
