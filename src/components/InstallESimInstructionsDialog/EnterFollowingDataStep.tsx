import { Card } from "@/models/Card";
import { CopyButton } from "../buttons/CopyButton";
import { RoundedLabel } from "./RoundedLabel";
import { InfoRow } from "./InfoRow";
import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";

type CopyBlockProps = {
  text: string;
  label: string;
};

const CopyBlock = ({ text, label }: CopyBlockProps) => {
  return (
    <div className="flex flex-col gap-4 items-center p-4 bg-white rounded-xl">
      <div>
        <p className="text-text-600">{label}</p>
        {text}
      </div>
      <CopyButton text={text} />
    </div>
  );
};

type EnterFollowingDataStepProps = {
  step: number;
  card: Card;
};

export const EnterFollowingDataStep = ({
  step,
  card,
}: EnterFollowingDataStepProps) => {
  const deviceTypeAndVerion = useDeviceTypeAndVerion();
  const [smdp, addr, lpaCode] = card.lpaCode.split("$");
  const smdpAddr = `${smdp}$${addr}`;
  const lpaActivationCode = `$${lpaCode}`;

  return (
    <div className="flex flex-col gap-4">
      <RoundedLabel>{step}</RoundedLabel>
      <InfoRow>
        <span>Enter the following data</span>
      </InfoRow>
      {deviceTypeAndVerion.isAndroid ? (
        <CopyBlock text={card.lpaCode} label="Activation Code" />
      ) : (
        <>
          <CopyBlock text={smdpAddr} label="SM-DP+ Address" />
          <CopyBlock text={lpaActivationCode} label="Activation Code" />
        </>
      )}
    </div>
  );
};
