import { StripeError } from "@stripe/stripe-js";


type ErrorMessageProps = {
  err: StripeError;
};

export const ErrorMessage = ({}: ErrorMessageProps) => {
  return (
    <div className="flex flex-col self-stretch p-4 font-medium bg-white rounded-xl border-2 border-solid border-slate-200 max-w-[224px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c636e3ece5386c716196727cf0e4dfdbb3b1bb4ba8baa0537ae7191aab29f90?apiKey=4d29b65bc77c4658ad8f90690919294c&"
        className="w-8 aspect-square fill-orange-600"
      />
      <div className="mt-3 text-base leading-5 text-slate-950">
        Insufficient balance
      </div>
      <div className="mt-1 text-sm leading-5 text-gray-400">
        Check your balance and try again
      </div>
    </div>
  );
}