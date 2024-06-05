"use client";

import { createCard, fetchClientOptions } from "@/api/cards";
import { fetchPackage } from "@/api/packages";
import { Package } from "@/models/Package";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { FormEvent, useEffect, useState } from "react";

const CheckoutForm = ({
  packageID,
  cardID,
}: {
  packageID: string;
  cardID: string;
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/en/payment/completion?cardID=${cardID}`,
      },
    });

    if (error) {
      setMessage(error.message ?? "An unknown error occurred");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <button disabled={isProcessing} id="submit">
        <PaymentElement />
        <span id="button-text">
          {isProcessing ? "Processing..." : "Pay now"}
        </span>
      </button>
      <div id="message">{message}</div>
    </form>
  );
};

export default function Index({
  searchParams,
}: {
  searchParams: { packageID: string };
}) {
  const packageID = searchParams.packageID ?? "";

  const [stripePromise, setStripePromise] = useState<
    Stripe | PromiseLike<Stripe | null> | null
  >(null);
  const [clientSecret, setClientSecret] = useState("");
  const [cardID, setCardID] = useState("");
  const [packageData, setPackageData] = useState<Package | null>(null);

  useEffect(() => {
    fetchClientOptions().then((res) => {
      setStripePromise(loadStripe(res.stripePublishableKey));
    });
  }, []);

  useEffect(() => {
    createCard(packageID).then((res) => {
      setClientSecret(res.gatewayTransaction.meta.paymentIntentSecret);
      setCardID(res.cardID);
    });

    fetchPackage(packageID).then((res) => {
      setPackageData(res);
    });
  }, [packageID]);

  return (
    <div>
      <h1>Payment Page</h1>
      <p>{JSON.stringify(packageData)}</p>
      {stripePromise && clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm packageID={packageID} cardID={cardID} />
        </Elements>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
