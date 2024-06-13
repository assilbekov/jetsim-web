import { clsx } from "@/utils";
import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";

type ReinstallESimProps = {
  className?: string;
};

export const ReinstallESim = ({ className }: ReinstallESimProps) => {
  return (
    <div
      className={clsx(
        "flex gap-3 items-start p-4 rounded-xl border-2 border-solid border-[#E9F0F2]",
        className ?? ""
      )}
    >
      <Image
        loading="lazy"
        src="/icons/info.svg"
        alt="info icon"
        width={40}
        height={40}
      />
      <div>
        <h6 className={getTypographyClass(TypographyVariants.Body2)}>
          You need to install eSIM again
        </h6>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "text-text-600 mt-0.5"
          )}
        >
          Current eSIM will remain active until it expires
        </p>
      </div>
    </div>
  );
};
