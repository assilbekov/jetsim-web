import { HomeLogo } from "@/components/HomeLogo";
import { StripePayment } from "@/components/StripePayment";
import { OrderSummary } from "@/components/StripePayment/OrderSummary";
import {
  TypographyVariants,
  getTypographyClass,
} from "@/components/Typography";
import { clsx } from "@/utils";
import Link from "next/link";
import { PaymentScreenEvent } from "./_components/PaymentScreenEvent";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }: PageProps) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "PagesMetadata",
  });

  return {
    title: t("paymentPageTitle"),
    description: t("paymentPageDescription"),
  };
}

const ListElement = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <li
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "text-text-600 hover:text-text-300 transition duration-200 ease-in-out"
      )}
    >
      <Link href={href || "#"}>{children}</Link>
    </li>
  );
};

type PageProps = {
  searchParams: { packageID: string; placeID: string };
  params: { locale: string };
};

export default function Index({ searchParams, params }: PageProps) {
  unstable_setRequestLocale(params?.locale);
  const t = useTranslations("PaymentPageFooter");
  return (
    <div className="bg-[#F2F4F7]">
      <PaymentScreenEvent />
      <div className="flex flex-col justify-between min-h-screen max-w-[950px] p-6 sm:p-8 pb-11 mx-auto">
        <div>
          <div>
            <HomeLogo />
          </div>
          <div className="flex flex-col sm:flex-row-reverse gap-6 mt-6">
            <OrderSummary
              {...searchParams}
              className="sm:max-w-[300px] sm:h-full"
              locale={params?.locale}
            />
            <StripePayment {...searchParams} locale={params?.locale} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mt-6">
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Body2),
              "text-text-600"
            )}
          >
            {t("allRightsReserved")}
          </p>
          <ul className="flex flex-col sm:flex-row sm:gap-6 gap-3">
            <ListElement href="/privacy-policy">
              {t("privacyPolicy")}
            </ListElement>
            <ListElement href="/terms-of-service">
              {t("termsOfService")}
            </ListElement>
          </ul>
        </div>
      </div>
    </div>
  );
}
