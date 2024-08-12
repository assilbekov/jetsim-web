import { RoundedLabel } from "../RoundedLabel";
import { InfoRow } from "../InfoRow";
import { CopyButton } from "@/components/buttons/CopyButton";
import { Link } from "@/navigation";

type CopyBlockProps = {
  text: string;
  label: string;
};

const CopyBlock = ({ text, label }: CopyBlockProps) => {
  return (
    <div className="flex flex-col gap-4 items-center p-4 bg-white rounded-xl">
      <div>
        <p className="text-text-600 mb-2">{label}</p>
        <Link href={text}>{text}</Link>
      </div>
      <CopyButton text={text} />
    </div>
  );
};

type OpenMyEsimProps = {
  step: number;
};

export const OpenMyEsim = ({ step }: OpenMyEsimProps) => {
  return (
    <div className="flex flex-col gap-4">
      <RoundedLabel>{step}</RoundedLabel>
      <InfoRow>
        <span>
          Open “My eSIMs” page from your phone and click “Install eSIM“
        </span>
      </InfoRow>
      <CopyBlock text="https://www.jetsim.app/profile" label="SM-DP+ Address" />
    </div>
  );
};
