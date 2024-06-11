import { clsx } from "@/utils";
import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";

export const ThanksForPurchase = () => {
  return (
    <LandingContainer>
      <Card className="px-4 pt-10 pb-14">
        <Image
          src="/icons/primary/success-circled.svg"
          alt="success icon"
          width={64}
          height={64}
          className="self-center mx-auto"
        />
        <h3
          className={clsx(
            getTypographyClass(TypographyVariants.Subheader),
            "md:font-interTight md:text-[34px] md:leading-[38px] md:tracking-[0.68px] text-center mt-4 md:mt-6"
          )}
        >
          Thank you for purchase!
        </h3>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "md:text-xl md:leading-[26px] mt-2 md:mt-3 text-center text-text-600"
          )}
        >
          Check your email for the receipt.
        </p>
      </Card>
    </LandingContainer>
  );
};
