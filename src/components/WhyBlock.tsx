import Image from "next/image";
import { LandingContainer } from "./LandingContainer";
import { Card } from "./Card";
import { clsx } from "@/utils";
import {
  Typography,
  TypographyVariants,
  matchTypographyMediaQuery,
} from "./Typography";

type FeatureBlockProps = {
  iconSrc: string;
  iconAlt: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

const FeatureBlock = ({
  iconSrc,
  iconAlt,
  title,
  description,
}: FeatureBlockProps) => {
  return (
    <div className="flex-1">
      <Image
        src={iconSrc}
        width={48}
        height={48}
        alt={iconAlt}
        className="mb-[6px] w-7 h-7 md:w-12 md:h-12 md:mb-4"
      />
      <h3
        className={matchTypographyMediaQuery({
          default: TypographyVariants.Caption,
          md: TypographyVariants.Subheader,
        })}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "mt-0.5 md:mt-1 text-text-600",
          matchTypographyMediaQuery({
            default: TypographyVariants.Caption,
            md: TypographyVariants.Body,
          })
        )}
      >
        {description}
      </p>
    </div>
  );
};

type WhyBlockProps = {
  showSecurePaymentMethods?: boolean;
};

export const WhyBlock = ({
  showSecurePaymentMethods = true,
}: WhyBlockProps) => {
  return (
    <LandingContainer>
      <Card size="md" className="xxs:p-8 xs:p-6 md:p-8">
        <div className="flex flex-col gap-6 md:gap-10">
          <div>
            {/* <p
              className={clsx(
                "mb-1 md:mb-[10px] text-text-600",
                matchTypographyMediaQuery({
                  default: TypographyVariants.Caption,
                  md: TypographyVariants.Body,
                })
              )}
            >
              Why JetSim?
            </p> */}
            <Typography variant={TypographyVariants.H2}>
              Use internet everywhere with JetSim
            </Typography>
          </div>
          <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <FeatureBlock
              iconSrc="/wallet.svg"
              iconAlt="wallet icon"
              title="Affordable"
              description="Data plans tailored to&nbsp; your needs"
            />
            <FeatureBlock
              iconSrc="/done.svg"
              iconAlt="done icon"
              title="No hidden fees"
              description="Internet without extra costs"
            />
            <FeatureBlock
              iconSrc="/no-sim.svg"
              iconAlt="no sim icon"
              title="No plastic SIM"
              description="hassle-free online installation"
            />
            <FeatureBlock
              iconSrc="/no-id.svg"
              iconAlt="no id icon"
              title="No ID required"
              description="Just buy and start using"
            />
          </div>
          {showSecurePaymentMethods && (
            <div className="flex flex-col gap-6 md:gap-12">
              <div className="h-0.5 w-full bg-[#E9F0F2]" />
              <div className="flex flex-col lg:flex-row gap-4 md:gap-6 justify-between items-center">
                <p
                  className={clsx(
                    "w-full text-text-600",
                    matchTypographyMediaQuery({
                      default: TypographyVariants.Caption,
                      md: TypographyVariants.Subheader,
                    })
                  )}
                >
                  Secure payment methods
                </p>
                <div className="flex gap-4 sm:gap-5 md:gap-12 md:justify-between lg:min-w-[646px] flex-wrap w-full items-center">
                  <Image
                    src="/paypal-pay.svg"
                    alt="paypal pay icon"
                    width={146}
                    height={36}
                    className="w-[83.2px] h-[20.6px] sm:w-[111px] sm:h-[27.43px] md:w-[145.636px] md:h-[36px]"
                  />
                  <Image
                    src="/apple-pay.svg"
                    alt="apple pay icon"
                    width={90}
                    height={42}
                    className="w-[51px] h-[24px] sm:w-[68px] sm:h-[32px] md:w-[89.25px] md:h-[42px]"
                  />
                  <Image
                    src="/google-pay.svg"
                    alt="google pay icon"
                    width={75}
                    height={31}
                    className="w-[41.3px] h-[17.6px] sm:w-[55.1px] sm:h-[23px] md:w-[72.27px] md:h-[30px]"
                  />
                  <Image
                    src="/mastercard-pay.svg"
                    alt="mastercard pay icon"
                    width={64}
                    height={40}
                    className="w-[36.6px] h-[22.86px] sm:w-[48.76px] sm:h-[30.476px] md:w-[64px] md:h-[40px]"
                  />
                  <Image
                    src="/visa-pay.svg"
                    alt="visa pay icon"
                    width={83}
                    height={28}
                    className="w-[47.2px] h-[16px] sm:w-[63px] sm:h-[21.3px] md:w-[82.6px] md:h-[28px]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </LandingContainer>
  );
};
