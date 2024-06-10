import { HomeLogo } from "@/components/HomeLogo";
import { StripePayment } from "@/components/StripePayment";
import { OrderSummary } from "@/components/StripePayment/OrderSummary";
import {
  TypographyVariants,
  getTypographyClass,
} from "@/components/Typography";
import { clsx } from "@/utils";
import Link from "next/link";

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
    <div className="p-6 pb-11 bg-[#F2F4F7]">
      <div>
        <HomeLogo />
      </div>
      <div className="mt-6">
        <OrderSummary {...searchParams} />
        <StripePayment {...searchParams} />
      </div>
      <div className="flex flex-col gap-6 mt-6">
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "text-text-600"
          )}
        >
          2024 JetSIM. All rights reserved
        </p>
        <ul className="flex flex-col gap-3">
          <ListElement href="/en/privacy-policy">Privacy policy</ListElement>
          <ListElement href="/en/terms-of-service">
            Terms of Service
          </ListElement>
          <ListElement>COF Agreement</ListElement>
        </ul>
      </div>
    </div>
  );
}
