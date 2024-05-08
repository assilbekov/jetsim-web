import { useTranslations } from "next-intl";
import { Header, HeadersVariant } from "./Header";
import Image from "next/image";

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
    <div>
      <Image src={iconSrc} width={48} height={48} alt={iconAlt} />
      <h6 className="text-text-100 text-2xl leading-10 tracking-[0.48px] font-medium mt-4">
        {title}
      </h6>
      <p className="mt-0.5 text-text-100 text-xl leading-6 font-medium">
        {description}
      </p>
    </div>
  );
};

export const WhyBlock = () => {
  const t = useTranslations("MainPage");
  return (
    <div className="flex flex-col gap-12 bg-[#F7F9FA] p-14">
      <div>
        <p className="text-text-600 text-2xl font-medium mb-[10px]">
          {t("why_jetsim")}
        </p>
        <Header variant={HeadersVariant.H2}>
          {t("internet_everywhere_with")}
        </Header>
      </div>
      <div className="flex gap-32">
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
      <div className="flex flex-col gap-14">
        <div className="h-0.5 w-full bg-[#D9D9D9]" />
        <div className="flex justify-between items-center h-[42px]">
          <p className="text-text-600 text-2xl font-medium">
            {t("secure_payment_methods")}
          </p>
          <div className="flex gap-12">
            <Image
              src="/paypal-pay.svg"
              alt="paypal pay icon"
              width={146}
              height={36}
            />
            <Image
              src="/apple-pay.svg"
              alt="apple pay icon"
              width={90}
              height={42}
            />
            <Image
              src="/google-pay.svg"
              alt="google pay icon"
              width={75}
              height={31}
            />
            <Image
              src="/mastercard-pay.svg"
              alt="mastercard pay icon"
              width={64}
              height={40}
            />
            <Image
              src="/visa-pay.svg"
              alt="visa pay icon"
              width={83}
              height={28}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
