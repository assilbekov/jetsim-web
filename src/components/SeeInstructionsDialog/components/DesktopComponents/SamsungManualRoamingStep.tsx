import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";

type SamsungManualRoamingStepProps = {
  step: number;
};

export const SamsungManualRoamingStep = ({
  step,
}: SamsungManualRoamingStepProps) => {
  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>Go to</span>
          <IconWithText
            src="/icons/settings-blue.png"
            alt="settings icon"
            text="Settings"
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/connection-blue.svg"
            alt="wifi icon"
            text="Connections"
          />
          <ArrowRightImage />
          <span>Mobile Networks</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>Select installed eSIM</span>
          <ArrowRightImage />
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt="toggle icon"
            text="Data Roaming"
          />
        </InfoRow>
      </div>
    </div>
  );
};
