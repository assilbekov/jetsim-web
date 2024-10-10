import { clsx } from "@/utils";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";
import { getTypographyClass, TypographyVariants } from "../Typography";
import Image from "next/image";
import { useTranslations } from "next-intl";

type InfoBlockProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const InfoBlock = ({ title, description, icon }: InfoBlockProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 md:flex-col md:items-start md:gap-0 p-5 sm:p-6 lg:p-8 bg-[#F5F9FA] rounded-xl">
      <div className="mb-4 sm:mb-0 md:mb-5 lg:mb-6">{icon}</div>
      <div>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "sm:font-inter sm:text-xl sm:leading-[26px]",
            "md:font-inter md:text-2xl md:leading-[30px]"
          )}
        >
          {title}
        </p>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "md:font-inter md:text-xl md:leading-[26px]",
            "text-text-600 mt-1"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

type InviteFriendsHowItWorksProps = {
  title: string;
  infoBlocks: InfoBlockProps[];
};

const InviteFriendsHowItWorks = ({
  title,
  infoBlocks,
}: InviteFriendsHowItWorksProps) => {
  return (
    <LandingContainer>
      <Card>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Subheader),
            "md:font-interTight md:text-[34px] md:leading-[38px] font-medium md:tracking-[0.68px]",
            "mb-5 md:mb-6 lg:mb-8"
          )}
        >
          {title}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {infoBlocks.map((block, index) => (
            <InfoBlock
              key={index}
              title={block.title}
              description={block.description}
              icon={block.icon}
            />
          ))}
        </div>
      </Card>
    </LandingContainer>
  );
};

export const InviteFriendsHowItWorksProfileBalance = () => {
  const t = useTranslations("InviteFriendsHowItWorksProfileBalance");
  return (
    <InviteFriendsHowItWorks
      title={t("title")}
      infoBlocks={[
        {
          title: t("shareYourUniqueLink"),
          description: t("shareYourUniqueLinkDescription"),
          icon: (
            <Image
              src="/icons/primary/share.svg"
              alt="Share icon"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          ),
        },
        {
          title: t("friendGets4"),
          description: t("friendGets4Description"),
          icon: (
            <Image
              src="/icons/primary/account_balance_wallet.svg"
              alt="Wallet icon"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          ),
        },
        {
          title: t("youGet4Too"),
          description: t("youGet4TooDescription"),
          icon: (
            <Image
              src="/icons/primary/mood.svg"
              alt="Mood icon"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          ),
        },
      ]}
    />
  );
};

export const InviteFriendsHowItWorksInvited = () => {
  const t = useTranslations("InviteFriendsHowItWorksInvited");
  return (
    <InviteFriendsHowItWorks
      title={t("title")}
      infoBlocks={[
        {
          title: t("selectYourCountry"),
          description: t("selectYourCountryDescription"),
          icon: (
            <Image
              src="/icons/primary/travel_explore.svg"
              alt="Travel explore icon"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          ),
        },
        {
          title: t("enjoyYourReward"),
          description: t("enjoyYourRewardDescription"),
          icon: (
            <Image
              src="/icons/primary/account_balance_wallet.svg"
              alt="Wallet icon"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          ),
        },
        {
          title: t("referMoreFriends"),
          description: t("referMoreFriendsDescription"),
          icon: (
            <Image
              src="/icons/primary/mood.svg"
              alt="Mood icon"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          ),
        },
      ]}
    />
  );
};
