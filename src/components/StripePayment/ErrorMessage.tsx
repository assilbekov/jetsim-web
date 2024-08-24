import { StripeError } from "@stripe/stripe-js";
import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { clsx } from "@/utils";
import { useTranslations } from "next-intl";

type ErrorMessageProps = {
  err: StripeError;
};

export const ErrorMessage = ({ err }: ErrorMessageProps) => {
  const t = useTranslations("OrderSummary");

  return (
    <div className="flex flex-col p-4 gap-3 xs:flex-row xs:gap-4 md:px-6 md:py-5 rounded-xl border-2 border-solid border-slate-200">
      <Image
        src="/icons/error-rounded-primary.svg"
        alt="error icon"
        width={32}
        height={32}
      />
      <div>
        <h6 className={getTypographyClass(TypographyVariants.Body2)}>
          {t("ErrorMessage_paymentFailed")}
        </h6>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Caption),
            "text-text-600 mt-1"
          )}
        >
          {err.message}
        </p>
      </div>
    </div>
  );
};
