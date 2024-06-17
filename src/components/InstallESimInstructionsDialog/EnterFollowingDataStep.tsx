import { Card } from "@/models/Card";
import { CopyButton } from "../buttons/CopyButton";
import { RoundedLabel } from "./RoundedLabel";
import { InfoRow } from "./InfoRow";

type EnterFollowingDataStepProps = {
  step: number;
  card: Card;
};

export const EnterFollowingDataStep = ({
  step,
  card,
}: EnterFollowingDataStepProps) => {
  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <InfoRow>
        <span>Enter the following data</span>
      </InfoRow>
      <CopyButton text="LPA:1$consumer.rsp.global" />
    </div>
  );
};
