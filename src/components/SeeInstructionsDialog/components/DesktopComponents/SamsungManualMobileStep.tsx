import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";

type SamsungManualMobileStepProps = {
  step: number;
};

export const SamsungManualMobileStep = ({
  step,
}: SamsungManualMobileStepProps) => {
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
          <span>SIM manager</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>Mobile Data</span>
          <ArrowRightImage />
          <span>JetSim eSIM</span>
        </InfoRow>
      </div>
    </div>
  );
};
