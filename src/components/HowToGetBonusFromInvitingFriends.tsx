import { clsx } from "@/utils";
import { Card } from "./Card";
import { LandingContainer } from "./LandingContainer";
import {
  Typography,
  TypographyVariants,
  matchTypographyMediaQuery,
} from "./Typography";
import Image from "next/image";

type InfoBlockProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  content: React.ReactNode;
};

const InfoBlock = ({ imgSrc, imgAlt, title, content }: InfoBlockProps) => {
  return (
    <div className="flex flex-col flex-1 gap-4 sm:gap-5 lg:gap-6 p-5 sm:p-6 lg:p-8 rounded-xl bg-[#F8F9FB]">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={32}
        height={32}
        className="w-8 h-8 sm:h-10 sm:w-10"
      />
      <div>
        <h3
          className={matchTypographyMediaQuery({
            default: TypographyVariants.Body2,
            sm: TypographyVariants.Body,
            md: TypographyVariants.Subheader,
          })}
        >
          {title}
        </h3>
        <p
          className={clsx(
            matchTypographyMediaQuery({
              default: TypographyVariants.Body2,
              sm: TypographyVariants.Body,
            }),
            "text-text-600 mt-1 md:mt-2 xxl:mt-[10px]"
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export const HowToGetBonusFromInvitingFriends = () => {
  return (
    <LandingContainer
      className="border-t-2 border-[#E9F0F2] xxs:border-t-0"
      id="how-to"
    >
      <Card className="flex flex-col gap-5 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-4 xxs:gap-5 sm:gap-6 lg:gap-8">
          <Typography variant={TypographyVariants.H2}>
            Set up your JetSim eSIM in 1 minute
          </Typography>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-5 md:gap-8">
            <InfoBlock
              imgSrc="/icons/primary/travel_explore.svg"
              imgAlt="Travel explore icon"
              title="Select country"
              content="Where you want to go and user internet"
            />
            <InfoBlock
              imgSrc="/icons/primary/account_balance_wallet.svg"
              imgAlt="Account balance wallet icon"
              title="Discount already here"
              content="You'll get a $5 discount, but no more than 30%"
            />
            <InfoBlock
              imgSrc="/icons/primary/mood.svg"
              imgAlt="Mood icon"
              title="Refer more friends"
              content="Share your link to your friend to get another $5"
            />
          </div>
        </div>
      </Card>
    </LandingContainer>
  );
};
