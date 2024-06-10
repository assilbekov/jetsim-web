import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";

export const CheckoutForm = ({
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
      <p>
        packageID: {packageID}, cardID: {cardID}
      </p>
    </form>
  );
};
