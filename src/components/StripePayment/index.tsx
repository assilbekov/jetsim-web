"use client";

import { createCard, fetchClientOptions } from "@/api/cards";
import { Elements } from "@stripe/react-stripe-js";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { CheckoutForm } from "./CheckoutForm";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Card } from "../Card";
import { clsx } from "@/utils";
import { Skeleton } from "../Skeleton";
import { useTranslations } from "next-intl";

type StripePaymentProps = {
  packageID: string;
  placeID: string;
  locale: string;
};

export const StripePayment = ({
  placeID = "",
  packageID = "",
  locale,
}: StripePaymentProps) => {
  const t = useTranslations("OrderSummary");
  const [stripePromise, setStripePromise] = useState<
    Stripe | PromiseLike<Stripe | null> | null
  >(null);
  const [clientSecret, setClientSecret] = useState("");
  const [cardID, setCardID] = useState("");

  useEffect(() => {
    fetchClientOptions(locale).then((res) => {
      setStripePromise(loadStripe(res.stripePublishableKey));
    });
  }, []);

  useEffect(() => {
    if (!packageID || !placeID) {
      return;
    }

    createCard(packageID, placeID, locale).then((res) => {
      setClientSecret(res.gatewayTransaction.meta.paymentIntentSecret);
      setCardID(res.cardID);
    });
  }, [packageID, placeID]);

  return (
    <Card className="flex flex-col flex-1 justify-center px-6 py-[22px] rounded-[20px] border-2 border-solid border-[#E9F0F2]">
      <h3
        className={clsx(
          getTypographyClass(TypographyVariants.Body),
          "mb-5 sm:text-2xl sm:leading-[30px]"
        )}
      >
        {t("StripePayment_selectPaymentMethod")}
      </h3>
      {stripePromise && clientSecret ? (
        <Elements
          key={clientSecret}
          stripe={stripePromise}
          // TODO: Remove typecasting
          options={{ clientSecret, locale: locale as any }}
        >
          <CheckoutForm
            cardID={cardID}
            packageID={packageID}
            placeID={placeID}
            locale={locale}
          />
        </Elements>
      ) : (
        <Skeleton className="min-w-full min-h-[250px] rounded-[20px]" />
      )}
    </Card>
  );
};
