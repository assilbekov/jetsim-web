"use client";

import Image from "next/image";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";

type InfoBoxProps = {
  label: React.ReactNode;
  value: number;
  valuePrefix?: string;
}

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
      </Card>
    </LandingContainer>
  );
};
