import Image from "next/image";
import { HomeLogo } from "../HomeLogo";
import { BackgroundImage } from "../PlacePackagesCard/BackgroundImage";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

export const InviteFriendsHero = () => {
  return (
    <div className="bg-text-900 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] p-6 sm:p-8 md:py-10 lg:py-6 xl:py-10">
      <div className="w-full xl:w-[1200px] xxl:w-[1440px] mx-auto">
        <div className="flex justify-between gap-8">
          <div className="w-full flex flex-col">
            <HomeLogo />
            <Image
              src="/images/invite-friends-bg.jpg"
              alt="Invite friends hero image"
              width={272}
              height={168}
              className="w-full rounded-xl md:hidden mt-6"
            />
            <h1
              className={clsx(
                getTypographyClass(TypographyVariants.Subheader),
                "xxs:font-interTight xxs:text-[34px] xxs:leading-[38px] xxs:font-medium xxs:tracking-[0.68px]",
                "lg:font-interTight lg:text-[56px] lg:leading-[64px] lg:font-medium lg:tracking-[1.12px]",
                "mt-6 sm:mt-8 md:mt-14"
              )}
            >
              Your friend is giving you $5 off your first eSIM
            </h1>
            <p
              className={clsx(
                getTypographyClass(TypographyVariants.Body2),
                "md:font-inter md:text-xl md:leading-[26px] md:font-medium",
                "text-text-600 mt-4"
              )}
            >
              He will get $5 too. This offer can only be applied to up to 30% of
              your total purchase
            </p>
            <PrimaryButton className="w-full max-w-80 mt-4 xxs:mt-5 sm:mt-8 md:mt-14">
              Get free $5
            </PrimaryButton>
          </div>
          <BackgroundImage
            imageLoaded={true}
            url="/images/invite-friends-bg.jpg"
            alt="Invite friends cover image"
            archFill="#fff"
            //visibilityClassName="hidden sm:block mr-10"
          />
        </div>
      </div>
    </div>
  );
};
