"use client";

import Image from "next/image";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import { HelperText } from "../HelperText";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { CopyInput } from "./CopyInput";
import { ProfileInviteImage } from "./ProfileInviteImage";
import { useTranslations } from "next-intl";

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

export const ProfileInviteFriends = () => {
  const t = useTranslations("ProfileBalanceInvitation");

  return (
    <LandingContainer>
      <Card className="p-6 pt-0 xxs:pt-0 sm:hidden">
        <Image
          src="/images/invite-friends-bg.jpg"
          alt="Invite friends hero image"
          width={272}
          height={168}
          className="w-full rounded-xl"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5 mb-4">
          <InfoBox label={t("rewards")} value={0} valuePrefix="$" />
          <InfoBox
            label={t("pending")}
            value={10}
            valuePrefix="$"
            helperText={t("pendingHelperText")}
          />
          <InfoBox
            label={t("friendsInvited")}
            value={2}
            rootClassName="col-span-2 sm:col-span-1"
          />
        </div>
        <div className="mb-5">
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
              "text-text-600 mt-3 xs:mt-4"
            )}
          >
            {t("description")}
          </p>
        </div>
        <CopyInput value="jetsim.app/invite/12345" />
      </Card>
      <div className="hidden sm:block">
        <div className="grid grid-cols-2 xxs:grid-cols-3 gap-3 mt-5 mb-4">
          <InfoBox
            label={t("rewards")}
            value={0}
            valuePrefix="$"
            rootClassName="bg-text-900"
          />
          <InfoBox
            label={t("pending")}
            value={10}
            valuePrefix="$"
            helperText="It's how much you will earn if your friend buys a plan. Remind your friend to get their $5 reward to buy an eSIM with a discount!"
            rootClassName="bg-text-900"
          />
          <InfoBox
            label={t("friendsInvited")}
            value={2}
            rootClassName="col-span-2 xxs:col-span-1 bg-text-900"
          />
        </div>
        <Card className="flex justify-between gap-6 lg:gap-8">
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
            <CopyInput value="jetsim.app/invite/12345" />
          </div>
          <div className="w-[400px] h-[400px]">
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
        </Card>
      </div>
    </LandingContainer>
  );
};
