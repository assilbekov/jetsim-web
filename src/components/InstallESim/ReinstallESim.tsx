import { clsx } from "@/utils";
import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";

export const ReinstallESim = () => {
  return (
    <div className="flex gap-3 items-start p-4 rounded-xl border-2 border-solid border-[#E9F0F2]">
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
