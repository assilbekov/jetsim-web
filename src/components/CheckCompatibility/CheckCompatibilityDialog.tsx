import { clsx } from "@/utils";
import { AccordionPanel } from "../AccordionPanel";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { TypographyVariants, getTypographyClass } from "../Typography";
import Link, { LinkProps } from "next/link";
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

const LinkText = (props: LinkProps & { children: React.ReactNode }) => (
  <Link
    {...props}
    className="text-primary-500 underline hover:text-primary-300 transition-colors duration-200 ease-in-out"
    target="_blank"
  />
);

const ListItem = ({ text }: { text: string }) => (
  <li
    className={clsx(
      getTypographyClass(TypographyVariants.Body2),
      "text-text-100"
    )}
  >
    {text}
  </li>
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
        <ListItem key={index} text={element as string} />
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
        <AccordionPanel title={t("ios_accordion_title")} index={0}>
          <div className="w-full flex flex-col gap-4">
            <Paragraph>
              {t("visit_apple_start")}
              <LinkText href="https://support.apple.com/en-jo/guide/deployment/dep36c581d6x/web">
                {t("apple_website")}
              </LinkText>
              {t("visit_apple_end")}
            </Paragraph>

            <ListBlock
              title={t("iphones")}
              elements={[
                t("iphone_model_1"),
                t("iphone_model_2"),
                t("iphone_model_3"),
                t("iphone_model_4"),
                t("iphone_model_5"),
                t("iphone_model_6"),
                t("iphone_model_7"),
              ]}
            />

            <ListBlock
              title={t("ipads")}
              elements={[
                t("ipad_model_1"),
                t("ipad_model_2"),
                t("ipad_model_3"),
                t("ipad_model_4"),
                t("ipad_model_5"),
                t("ipad_model_6"),
              ]}
            />

            <ListBlock
              title={t("not_supported")}
              elements={[
                t("not_supported_model_1"),
                t("not_supported_model_2"),
                <>
                  {t("not_supported_model_3")}
                  <LinkText href="https://support.apple.com/en-us/108898">
                    {t("apple_support")}
                  </LinkText>
                </>,
              ]}
            />

            <Paragraph>{t("unlocked_ios")}</Paragraph>

            <Paragraph>
              {t("turkish_device_start")}
              <LinkText href="https://support.apple.com/en-us/109343">
                {t("instructions")}
              </LinkText>
            </Paragraph>
          </div>
        </AccordionPanel>

        <AccordionPanel title={t("android_accordion_title")} index={1}>
          <div className="w-full flex flex-col gap-4">
            <Paragraph>{t("unlocked_android")}</Paragraph>

            <ListBlock
              title={t("samsung")}
              elements={[
                t("samsung_model_1"),
                t("samsung_model_2"),
                t("samsung_model_3"),
                t("samsung_model_4"),
                t("samsung_model_5"),
                t("samsung_model_6"),
                t("samsung_model_7"),
                t("samsung_model_8"),
                t("samsung_model_9"),
                t("samsung_model_10"),
                t("samsung_model_11"),
                t("samsung_model_12"),
                t("samsung_model_13"),
                t("samsung_model_14"),
                t("samsung_model_15"),
                t("samsung_model_16"),
              ]}
            />

            <ListBlock
              title={t("google_pixel")}
              elements={[
                t("pixel_model_1"),
                t("pixel_model_2"),
                t("pixel_model_3"),
                t("pixel_model_4"),
                t("pixel_model_5"),
              ]}
              postText={
                <>
                  {t("visit_google_start")}
                  <LinkText href="https://support.google.com/pixelphone/answer/9449293?hl=en">
                    {t("google_website")}
                  </LinkText>
                  {t("visit_google_end")}
                </>
              }
            />

            <ListBlock
              title={t("xiaomi")}
              elements={[
                t("xiaomi_model_1"),
                t("xiaomi_model_2"),
                t("xiaomi_model_3"),
                t("xiaomi_model_4"),
                t("xiaomi_model_5"),
                t("xiaomi_model_6"),
                t("xiaomi_model_7"),
                t("xiaomi_model_8"),
                t("xiaomi_model_9"),
              ]}
              postText={
                <>
                  {t("visit_xiaomi_start")}
                  <LinkText href="https://www.mi.com/global/support/esim/">
                    {t("xiaomi_website")}
                  </LinkText>
                  {t("visit_xiaomi_end")}
                </>
              }
            />

            <ListBlock
              title={t("huawei")}
              elements={[
                t("huawei_model_1"),
                t("huawei_model_2"),
                t("huawei_model_3"),
              ]}
              postText={
                <>
                  {t("visit_huawei_start")}
                  <LinkText href="https://consumer.huawei.com/za/community/details/How-to-use-eSIM-on-your-eligible-Huawei-Phone/topicId_172574/">
                    {t("huawei_website")}
                  </LinkText>
                  {t("visit_huawei_end")}
                </>
              }
            />

            <ListBlock
              title={t("sony")}
              elements={[
                t("sony_model_1"),
                t("sony_model_2"),
                t("sony_model_3"),
                t("sony_model_4"),
                t("sony_model_5"),
                t("sony_model_6"),
              ]}
              postText={
                <>
                  {t("visit_sony_start")}
                  <LinkText href="https://www.sony.co.uk/electronics/support/articles/00300757">
                    {t("sony_website")}
                  </LinkText>
                  {t("visit_sony_end")}
                </>
              }
            />

            <ListBlock
              title={t("motorola")}
              elements={[
                t("motorola_model_1"),
                t("motorola_model_2"),
                t("motorola_model_3"),
                t("motorola_model_4"),
                t("motorola_model_5"),
                t("motorola_model_6"),
                t("motorola_model_7"),
                t("motorola_model_8"),
                t("motorola_model_9"),
                t("motorola_model_10"),
                t("motorola_model_11"),
                t("motorola_model_12"),
                t("motorola_model_13"),
                t("motorola_model_14"),
                t("motorola_model_15"),
                t("motorola_model_16"),
                t("motorola_model_17"),
                t("motorola_model_18"),
                t("motorola_model_19"),
              ]}
            />

            <ListBlock
              title={t("oppo")}
              elements={[
                t("oppo_model_1"),
                t("oppo_model_2"),
                t("oppo_model_3"),
                t("oppo_model_4"),
              ]}
            />

            <ListBlock
              title={t("honor")}
              elements={[
                t("honor_model_1"),
                t("honor_model_2"),
                t("honor_model_3"),
                t("honor_model_4"),
                t("honor_model_5"),
                t("honor_model_6"),
              ]}
              postText={
                <>
                  {t("visit_honor_start")}
                  <LinkText href="https://www.honor.com/global/tech/honor-esim/">
                    {t("honor_website")}
                  </LinkText>
                  {t("visit_honor_end")}
                </>
              }
            />
          </div>
        </AccordionPanel>

        <AccordionPanel title={t("other_accordion_title")} index={2}>
          <div className="flex flex-col gap-4">
            <Paragraph>{t("check_compatibility")}</Paragraph>
            <Paragraph>{t("additional_info")}</Paragraph>
          </div>
        </AccordionPanel>
      </div>
    </Dialog>
  );
};
