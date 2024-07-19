import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";

type PixelManualStepProps = {
  step: number;
};

export const SamsungManualStep = ({ step }: PixelManualStepProps) => {
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
          <IconWithText
            src="/icons/plus-green.svg"
            alt="add icon"
            text="Add eSIM"
          />
          <ArrowRightImage />
          <span>Scan QR code</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>Enter activation code</span>
          <ArrowRightImage />
          <span>Add</span>
        </InfoRow>
      </div>
    </div>
  );
};
