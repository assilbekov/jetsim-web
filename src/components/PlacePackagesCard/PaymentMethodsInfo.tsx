import Image from "next/image";

export const PaymentMethodsInfo = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-[397px] m-auto">
      <Image
        src="/icons/gray/paypal.svg"
        alt="paypal icon"
        width={80.1}
        height={19.8}
        className="w-[72px] h-[18px] xxs:w-[80.1] xxs:h-[19.8px]"
      />
      <Image
        src="/icons/gray/apple-pay.svg"
        alt="apple pay icon"
        width={49.09}
        height={23.1}
        className="w-[44.18px] h-[20.78px] xxs:w-[49.09] xxs:h-[23.1px]"
      />
      <Image
        src="/icons/gray/google-pay.svg"
        alt="google pay icon"
        width={47.7}
        height={19.8}
        className="w-[43px] h-[17.8px] xxs:w-[47.7] xxs:h-[19.8px]"
      />
      <Image
        src="/icons/gray/mastercard.svg"
        alt="mastercard icon"
        width={32.04}
        height={19.8}
        className="w-[28.8px] h-[17.8px] xxs:w-[32.04] xxs:h-[19.8px]"
      />
      <Image
        src="/icons/gray/visa.svg"
        alt="visa icon"
        width={43.8}
        height={14.85}
        className="w-[39.4px] h-[13.36px] xxs:w-[43.8] xxs:h-[14.85px]"
      />
    </div>
  );
};
