"use client";

import Image from "next/image";

export const ProfileInviteFriends = () => {
  return (
    <div>
      <div>
        <Image
          src="/images/invite-friends-bg.jpg"
          alt="Invite friends hero image"
          width={272}
          height={168}
          className="w-full rounded-xl md:hidden mt-6"
        />
      </div>
    </div>
  );
};
