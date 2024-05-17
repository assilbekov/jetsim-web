import { useTranslations } from "next-intl";
import { Header, HeadersVariant } from "./Header";
import Image from "next/image";
import { LandingContainer } from "./LandingContainer";
import { Card } from "./Card";

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
      <Header variant={HeadersVariant.SUBHEADER}>{title}</Header>
      <p className="text-base leading-[22px] md:text-xl md:leading-[26px] mt-0.5 text-text-600 font-medium">
        {description}
      </p>
    </div>
  );
};

export const WhyBlock = () => {
  const t = useTranslations("MainPage");
  return (
    <LandingContainer>
      <Card size="md" className="xxs:p-8">
        <div className="flex flex-col gap-6 md:gap-10">
          <div>
            <p className="text-base leading-[22px] mb-1 md:text-xl md:leading-[26px] md:mb-[10px] text-text-600 font-medium">
              {t("why_jetsim")}
            </p>
            <Header variant={HeadersVariant.H2}>
              {t("internet_everywhere_with")}
            </Header>
          </div>
          <div className="grid grid-cols-1 xxs:grid-cols-2 gap-4 md:gap-8 md:flex-row md:justify-between">
            <FeatureBlock
              iconSrc="/wallet.svg"
              iconAlt="wallet icon"
              title={t("affordable")}
              description={t("data_plans_tailored_for_you")}
            />
            <FeatureBlock
              iconSrc="/done.svg"
              iconAlt="done icon"
              title={t("no_hidden_fees")}
              description={t("internet_without_extra_costs")}
            />
            <FeatureBlock
              iconSrc="/no-sim.svg"
              iconAlt="no sim icon"
              title={t("no_plastic_sim")}
              description={t("hassle_free_online_installation")}
            />
            <FeatureBlock
              iconSrc="/no-id.svg"
              iconAlt="no id icon"
              title={t("no_id_required")}
              description={t("just_buy_and_start_using")}
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-14">
            <div className="h-0.5 w-full bg-[#D9D9D9]" />
            <div className="h-[94px] md:h-[42px] flex flex-col gap-4 justify-between items-center">
              <p className="text-base leading-[22px] w-full md:text-2xl md:leading-[30px] text-text-600 font-medium">
                {t("secure_payment_methods")}
              </p>
              <div className="flex gap-4 md:gap-12 flex-wrap">
                <Image
                  src="/paypal-pay.svg"
                  alt="paypal pay icon"
                  width={146}
                  height={36}
                  className="w-[83.2px] h-[20.6px]"
                />
                <Image
                  src="/apple-pay.svg"
                  alt="apple pay icon"
                  width={90}
                  height={42}
                  className="w-[51px] h-[24px]"
                />
                <Image
                  src="/google-pay.svg"
                  alt="google pay icon"
                  width={75}
                  height={31}
                  className="w-[41.3px] h-[17.6px]"
                />
                <Image
                  src="/mastercard-pay.svg"
                  alt="mastercard pay icon"
                  width={64}
                  height={40}
                  className="w-[36.6px] h-[22.86px]"
                />
                <Image
                  src="/visa-pay.svg"
                  alt="visa pay icon"
                  width={83}
                  height={28}
                  className="w-[47.2px] h-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </LandingContainer>
  );
};
