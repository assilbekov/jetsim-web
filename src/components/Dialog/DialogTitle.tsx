import Image from "next/image";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { clsx } from "@/utils";

type DialogTitleProps = {
  title: React.ReactNode;
  onClose: () => void;
};

export const DialogTitle = ({ title, onClose }: DialogTitleProps) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h5
        className={clsx(
          getTypographyClass(TypographyVariants.Subheader),
          "text-text-100"
        )}
      >
        {title}
      </h5>
      <div
        className="relative p-4 -mr-4 transition duration-200 ease-in-out hover:bg-[#EBEFF0] active:bg-[#C3D4D9] cursor-pointer rounded-full"
        onClick={onClose}
      >
        <Image
          src="/icons/gray/close.svg"
          alt="close icon"
          width={24}
          height={24}
          className="min-w-6 min-h-6 w-6 h-6"
        />
      </div>
    </div>
  );
};
