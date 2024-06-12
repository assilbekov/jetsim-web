import { Card } from "@/models/Card";
import { CopyButton } from "../buttons/CopyButton";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";

type CopyCardProps = {
  text: string;
  label: string;
  className?: string;
};

const CopyCard = ({ text, label, className }: CopyCardProps) => {
  return (
    <div className={clsx("p-6 rounded-xl bg-slate-50", className ?? "")}>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "text-text-600"
        )}
      >
        {label}
      </p>
      <p className={clsx(getTypographyClass(TypographyVariants.Body), "mt-1")}>
        {text}
      </p>
      <CopyButton className="mt-4 w-full items-center" text={text} />
    </div>
  );
};

type ManualInstallProps = {
  card: Card;
};

export const ManualInstall = ({ card }: ManualInstallProps) => {
  const [smdp, addr, lpaCode] = card.lpaCode.split("$");
  const smdpAddr = `${smdp}$${addr}`;
  const lpaActivationCode = `$${lpaCode}`;

  return (
    <div>
      <CopyCard text={smdpAddr} label="SM-DP+ Address" />
      <CopyCard
        text={lpaActivationCode}
        label="Activation Code"
        className="mt-4"
      />
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Subheader),
          "mt-6 text-2xl text-center text-black"
        )}
      >
        Use this codes to add eSIM
      </p>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "mt-3 text-center text-text-600"
        )}
      >
        Copy this code when you manully adding eSIM
      </p>
      <PrimaryButton className="mt-4 w-full">See instructions</PrimaryButton>
    </div>
  );
};
