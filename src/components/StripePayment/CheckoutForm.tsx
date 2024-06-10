import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";

export const CheckoutForm = ({ cardID }: { cardID: string }) => {
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
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <PaymentElement />
      <div id="message">{message}</div>
      <PrimaryButton disabled={isProcessing} id="submit" className="w-full">
        {isProcessing ? "Processing..." : "Pay"}
      </PrimaryButton>
    </form>
  );
};
