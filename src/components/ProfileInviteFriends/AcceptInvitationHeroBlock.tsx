"use client";

import Image from "next/image";
import { HelperText } from "../HelperText";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { CopyInput } from "./CopyInput";
import { ProfileInviteImage } from "./ProfileInviteImage";
import { useTranslations } from "next-intl";
import { PrimaryButton } from "../buttons/PrimaryButton";

type InfoBoxProps = {
  label: React.ReactNode;
  value: number;
  valuePrefix?: string;
  helperText?: React.ReactNode;
  rootClassName?: string;
};

const InfoBox = ({
  label,
  value,
  valuePrefix,
  helperText,
  rootClassName,
}: InfoBoxProps) => {
  return (
    <div
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "px-3 py-[10px] border-2 rounded-xl border-solid border-[#E9F0F2]",
        rootClassName || ""
      )}
    >
      <div className="flex justify-between">
        <p>{label}</p>
        {helperText && <HelperText title={label} description={helperText} />}
      </div>
      <p className={clsx(value ? "text-primary-500" : "text-text-100")}>
        {valuePrefix || ""}
        {value}
      </p>
    </div>
  );
};

export const AcceptInvitationHeroBlock = () => {
  const t = useTranslations("AcceptInvitationHeroBlock");

  return (
    <>
      <div className="pt-6 md:hidden">
        <Image
          src="/images/invite-friends-bg.jpg"
          alt="Invite friends hero image"
          width={272}
          height={168}
          className="w-full rounded-xl"
        />
        <div className="mt-6 mb-4 xxs:mt-5">
          <h5
            className={clsx(
              getTypographyClass(TypographyVariants.Subheader),
              "xxs:font-interTight xxs:text-[34px] xxs:leading-[38px] xxs:font-medium xxs:tracking-[0.68px]"
            )}
          >
            {t("title")}
          </h5>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Body2),
              "text-text-600 mt-4"
            )}
          >
            {t("description")}
          </p>
        </div>
        <PrimaryButton
          onClick={() => {
            console.log("clicked");
          }}
          className="w-full"
        >
          {t("button")}
        </PrimaryButton>
      </div>
      <div className="hidden md:block mt-6 lg:max-w-[1080px] xl:max-w-[1320px] mx-auto">
        <div className="flex justify-between gap-6 lg:gap-8">
          <div className="flex flex-col justify-between gap-4 w-[calc(100%-600px)]">
            <div>
              <h5
                className={clsx(
                  getTypographyClass(TypographyVariants.H2),
                  "lg:font-interTight lg:text-[56px] lg:leading-[64px] lg:font-medium lg:tracking-[1.12px]"
                )}
              >
                {t("title")}
              </h5>
              <p
                className={clsx(
                  getTypographyClass(TypographyVariants.Body),
                  "text-text-600 mt-3 lg:mt-6"
                )}
              >
                {t("description")}
              </p>
            </div>
            <PrimaryButton
              onClick={() => {
                console.log("clicked");
              }}
              className="w-[318px] mb-10"
            >
              {t("button")}
            </PrimaryButton>
          </div>
          <div className="flex justify-center items-center lg:w-[500px]">
            <div className="w-[430px] h-[400px]">
              <ProfileInviteImage
                imageLoaded={true}
                url="/images/invite-friends-bg.jpg"
                alt="Invite friends cover image"
                archFill="#fff"
                imgWidth={400}
                imgHeight={400}
                //visibilityClassName="hidden sm:block mr-10"a
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
