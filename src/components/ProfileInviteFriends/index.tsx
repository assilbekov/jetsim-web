"use client";

import Image from "next/image";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import { HelperText } from "../HelperText";
import { clsx } from "@/utils";

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
  return (
    <LandingContainer>
      <Card className="p-6 pt-0 xxs:pt-0">
        <Image
          src="/images/invite-friends-bg.jpg"
          alt="Invite friends hero image"
          width={272}
          height={168}
          className="w-full rounded-xl"
        />
        <div className="grid grid-cols-2 xxs:grid-cols-3 gap-3">
          <InfoBox label="Pending" value={0} valuePrefix="$" />
          <InfoBox
            label="Pending"
            value={10}
            valuePrefix="$"
            helperText="It's how much you will earn if your friend buys a plan. Remind your friend to get their $5 reward to buy an eSIM with a discount!"
          />
          <InfoBox
            label="Pending"
            value={2}
            rootClassName="col-span-2 xxs:col-span-1"
          />
        </div>
      </Card>
    </LandingContainer>
  );
};
