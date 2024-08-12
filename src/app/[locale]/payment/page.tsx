import { HomeLogo } from "@/components/HomeLogo";
import { StripePayment } from "@/components/StripePayment";
import { OrderSummary } from "@/components/StripePayment/OrderSummary";
import {
  TypographyVariants,
  getTypographyClass,
} from "@/components/Typography";
import { clsx } from "@/utils";
import Link from "next/link";
import { PaymentScreenEvent } from "./_components/PaymentScreenEvent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | JetSim eSIM Cards",
  description:
    "Complete your purchase of JetSim eSIM cards and enjoy seamless global travel internet. Secure and fast checkout process to keep you connected worldwide.",
};

const ListElement = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <li
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "text-text-600 hover:text-text-300 transition duration-200 ease-in-out"
      )}
    >
      <Link href={href || "#"}>{children}</Link>
    </li>
  );
};

type PageProps = {
  searchParams: { packageID: string; placeID: string };
};

export default function Index({ searchParams }: PageProps) {
  return (
    <div className="bg-[#F2F4F7]">
      <PaymentScreenEvent />
      <div className="flex flex-col justify-between min-h-screen max-w-[950px] p-6 sm:p-8 pb-11 mx-auto">
        <div>
          <div>
            <HomeLogo />
          </div>
          <div className="flex flex-col sm:flex-row-reverse gap-6 mt-6">
            <OrderSummary
              {...searchParams}
              className="sm:max-w-[300px] sm:h-full"
            />
            <StripePayment {...searchParams} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mt-6">
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Body2),
              "text-text-600"
            )}
          >
            2024 JetSIM. All rights reserved
          </p>
          <ul className="flex flex-col sm:flex-row sm:gap-6 gap-3">
            <ListElement href="/privacy-policy">Privacy policy</ListElement>
            <ListElement href="/terms-of-service">Terms of Service</ListElement>
          </ul>
        </div>
      </div>
    </div>
  );
}
