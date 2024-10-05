import Image from "next/image";
import { Typography, TypographyVariants } from "../Typography";

type DiscountBadgeProps = {
  discount: number;
};

export const DiscountBadge = ({ discount }: DiscountBadgeProps) => {
  return (
    <div className="relative h-[24px] w-[61px] bg-[url('/images/discount-bg.png')] bg-no-repeat bg-cover flex items-center justify-center">
      <Typography
        variant={TypographyVariants.Caption}
        className="font-semibold text-[#00B5F2]"
      >
        -{discount}%
      </Typography>
    </div>
  );
};
