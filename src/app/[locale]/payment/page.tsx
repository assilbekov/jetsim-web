import { StripePayment } from "@/components/StripePayment";

type PageProps = {
  searchParams: { packageID: string; placeID: string };
};

export default function Index({ searchParams }: PageProps) {
  return (
    <div>
      <StripePayment {...searchParams} />
    </div>
  );
}
