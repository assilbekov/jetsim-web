"use client";

import { createCard, fetchClientOptions } from "@/api/cards";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { FormEvent, useEffect, useState } from "react";

const CheckoutForm = () => {
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
        return_url: `${window.location.origin}/en/payment/completion`,
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

export default function Index() {
  const packageID = "d64f19c9-cf5d-57cb-9be6-7de56a8e706a";
  //const accessToken = localStorage.getItem("accessToken");

  const [stripePromise, setStripePromise] = useState<
    Stripe | PromiseLike<Stripe | null> | null
  >(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetchClientOptions().then((res) => {
      setStripePromise(loadStripe(res.stripePublishableKey));
    });
  }, []);

  useEffect(() => {
    createCard(packageID).then((res) => {
      setClientSecret(res.gatewayTransaction.meta.paymentIntentSecret);
    });
  }, []);

  return (
    <div>
      <h1>Payment Page</h1>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
