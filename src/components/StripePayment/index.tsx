"use client";

import { createCard, fetchClientOptions } from "@/api/cards";
import { fetchPackage } from "@/api/packages";
import { Package } from "@/models/Package";
import { Elements } from "@stripe/react-stripe-js";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

type StripePaymentProps = {
  packageID: string;
  placeID: string;
};

export const StripePayment = ({
  placeID = "",
  packageID = "",
}: StripePaymentProps) => {
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
    if (!packageID || !placeID) {
      return;
    }

    createCard(packageID, placeID).then((res) => {
      setClientSecret(res.gatewayTransaction.meta.paymentIntentSecret);
      setCardID(res.cardID);
    });

    fetchPackage(packageID).then((res) => {
      setPackageData(res);
    });
  }, [packageID, placeID]);

  return (
    <div>
      <h1>Payment Page</h1>
      <p>{JSON.stringify(packageData)}</p>
      <p>clientSecret: {JSON.stringify(clientSecret)}</p>
      {stripePromise && clientSecret ? (
        <Elements
          key={clientSecret}
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <CheckoutForm packageID={packageID} cardID={cardID} />
        </Elements>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
