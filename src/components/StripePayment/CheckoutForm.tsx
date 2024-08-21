"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { StripeError } from "@stripe/stripe-js";
import { ErrorMessage } from "./ErrorMessage";
import { useRouter, useSearchParams } from "next/navigation";
import { handlePaymentAttemptEvent, handlePaymentMethodClickEvent, trackPurchase } from "@/gtm-events";
import { useQuery } from "@tanstack/react-query";
import { fetchPackage } from "@/api/packages";

type CheckoutFormProps = {
  packageID: string;
  placeID: string;
  cardID: string;
};

export const CheckoutForm = ({
  cardID,
  packageID,
  placeID,
}: CheckoutFormProps) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();
  const packageInfo = useQuery({
    queryKey: ["packages", packageID],
    queryFn: () => fetchPackage(packageID),
  });

  const [err, setErr] = useState<StripeError | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePaymentAttemptEvent();
    // TODO: Refactor stripe payment methods.
    handlePaymentMethodClickEvent("stripe");

    const isReinstall = searchParams.get("reinstall");

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${
          window.location.origin
        }/payment/completion?cardID=${cardID}${
          isReinstall ? `&reinstall=true` : ``
        }`,
      },
      redirect: "if_required",
    });

    if (paymentIntent) {
      trackPurchase({
        transaction_id: paymentIntent.id,
        value: paymentIntent.amount / 100,
        currency: paymentIntent.currency.toUpperCase(),
        payment_method: paymentIntent.payment_method,
        tax: 0,
        shipping: 0,
        affiliation: "Online Store",
        price: paymentIntent.amount / 100,
        items: [
          {
            item_id: packageInfo.data?.id,
            item_name: packageInfo.data?.name,
            index: 0,
            discount: 0,
            quantity: 1,
            price: paymentIntent.amount / 100,
          },
        ],
        //items: [packageInfo.data],
      });

      router.push(
        `/payment/completion?cardID=${cardID}${
          isReinstall ? `&reinstall=true` : ``
        }`
      );
    }

    if (error) {
      setErr(error);
    }

    setIsProcessing(false);
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <PaymentElement />
      {err && <ErrorMessage err={err} />}
      <PrimaryButton disabled={isProcessing} id="submit" className="w-full">
        {isProcessing ? "Processing..." : "Pay"}
      </PrimaryButton>
    </form>
  );
};
