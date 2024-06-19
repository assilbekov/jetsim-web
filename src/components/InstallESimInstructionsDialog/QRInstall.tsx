import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Card } from "@/models/Card";

type QRInstallProps = {
  card: Card;
};

export const QRInstall = ({card}: QRInstallProps) => {
  return (
    <div
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "flex flex-col justify-center self-stretch text-center px-4 py-8 mx-auto w-full rounded-2xl bg-slate-50 max-w-[480px]"
      )}
    >
      content
    </div>
  );
};
