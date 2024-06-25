import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { StripeError } from "@stripe/stripe-js";
import { ErrorMessage } from "./ErrorMessage";
import { useSearchParams } from "next/navigation";

export const CheckoutForm = ({ cardID }: { cardID: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();

  const [err, setErr] = useState<StripeError | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isReinstall = searchParams.get("reinstall");

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${
          window.location.origin
        }/payment/completion?cardID=${cardID}${
          isReinstall ? `&reinstall=true` : ``
        }`,
      },
    });

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
