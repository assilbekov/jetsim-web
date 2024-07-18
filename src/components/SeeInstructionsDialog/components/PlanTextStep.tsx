import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";

type PlanTextStepProps = {
  step: number;
  children: React.ReactNode;
};

export const PlanTextStep = ({ step, children }: PlanTextStepProps) => {
  return (
    <div className="flex flex-col gap-4">
      <RoundedLabel>{step}</RoundedLabel>
      <InfoRow>
        <span>{children}</span>
      </InfoRow>
    </div>
  );
};
