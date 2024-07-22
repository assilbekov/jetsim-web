import { ArrowRightImage } from "../ArrowRightImage";
import { IconWithText } from "../IconWithText";
import { InfoRow } from "../InfoRow";
import { RoundedLabel } from "../RoundedLabel";

type PixelQRRoamingStepProps = {
  step: number;
};

export const PixelQRRoamingStep = ({ step }: PixelQRRoamingStepProps) => {
  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
        <InfoRow>
          <span>Go to</span>
          <IconWithText
            src="/icons/settings-pixel.svg"
            alt="settings icon"
            text="Settings"
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/wifi-pixel.svg"
            alt="network and internet icon"
            text="Network & Internet"
          />
          <ArrowRightImage />
          <span>SIM</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>JetSim</span>
          <ArrowRightImage />
          <IconWithText src="/icons/add.svg" alt="add icon" text="Use SIM" />
          <ArrowRightImage />
          <span>Yes</span>
          <ArrowRightImage />
          <span>Use JetSim</span>
        </InfoRow>
        <InfoRow>
          <span>Scroll and enable</span>
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt="toggle icon"
            text="Roaming"
          />
        </InfoRow>
      </div>
    </div>
  );
};
