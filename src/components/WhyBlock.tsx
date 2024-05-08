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
    <div>
      <div>
        <p>{t("why_jetsim")}</p>
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
      <div>Secure Payment Methods</div>
    </div>
  );
};
