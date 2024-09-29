import Image from "next/image";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { ProfileIcon } from "./ProfileIcon";

export const ProfileMenu = () => {
  return (
    <div>
      <SecondaryButton className="flex items-center gap-1.5 h-10 sm:h-11 pr-1.5 pl-3 pt-1.5 pb-1.5 w-20 sm:w-[84px] justify-center ">
        <Image
          src="/icons/black/burger.svg"
          alt="burger icon"
          width={20}
          height={20}
        />
        <ProfileIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </SecondaryButton>
    </div>
  );
};
