import { clsx } from "@/utils";
import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { SecondaryButton } from "../buttons/SecondaryButton";

export function PlanningTripCard() {
  return (
    <div className="flex flex-col justify-center h-[300px] py-5 px-6 items-center rounded-3xl border-2 border-solid border-[#E9F0F2]">
      <div className="flex flex-col gap-4 max-w-full w-[261px] text-center">
        <Image
          src="/icons/globe.svg"
          alt="Globe icon"
          width={48}
          height={48}
          loading="lazy"
          className="self-center aspect-square"
        />
        <div className="text-center">
          <h5 className={getTypographyClass(TypographyVariants.Subheader)}>
            Planning new trip?
          </h5>
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Body2),
              "mt-2 text-text-600"
            )}
          >
            Buy a new plan at affordable price
          </p>
        </div>
        <SecondaryButton className="w-[190px] py-[14px] mx-auto">
          View details
        </SecondaryButton>
      </div>
    </div>
  );
}
