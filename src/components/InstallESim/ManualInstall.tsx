import { Card } from "@/models/Card";
import { CopyButton } from "../buttons/CopyButton";
import { PrimaryButton } from "../buttons/PrimaryButton";

type ManualInstallProps = {
  card: Card;
};

export const ManualInstall = ({ card }: ManualInstallProps) => {
  const [smdp, addr, lpaCode] = card.lpaCode.split("$");
  const smdpAddr = `${smdp}$${addr}`;
  const lpaActivationCode = `$${lpaCode}`;

  return (
    <div>
      <div className="flex flex-col p-6 mt-6 rounded-xl bg-slate-50 leading-[137.5%] text-slate-950">
        <div>SM-DP+ Address</div>
        <div className="mt-1 text-xl leading-7">{smdpAddr}</div>
        <CopyButton className="mt-4 w-full" text={smdpAddr} />
      </div>
      <div className="flex flex-col justify-center p-6 mt-4 rounded-xl bg-slate-50 leading-[137.5%] text-slate-950">
        <div>Activation Code</div>
        <div className="mt-1 text-xl leading-7">{lpaActivationCode}</div>
        <CopyButton className="mt-4 w-full" text={lpaActivationCode} />
      </div>
      <div className="mt-6 text-2xl text-center text-black">
        Use this codes to add eSIM
      </div>
      <div className="mt-3 leading-6 text-center text-gray-400">
        Copy this code when you manully adding eSIM
      </div>
      <PrimaryButton className="mt-4 w-full">See instructions</PrimaryButton>
    </div>
  );
};
