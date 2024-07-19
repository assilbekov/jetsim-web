import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";

type TurnOnPixelStepProps = {
  step: number;
};

export const TurnOnPixelStep = ({ step }: TurnOnPixelStepProps) => {
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
          <span>SIMs</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>JetSim</span>
          <ArrowRightImage />
          <IconWithText
            src="/icons/toggle-blue.svg"
            alt="toggle icon"
            text="Use SIM"
          />
          <ArrowRightImage />
          <span>Yes</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>Use JetSim</span>
          <ArrowRightImage />
          <span>Scroll and enable</span>
        </InfoRow>
        <InfoRow>
          <span>Turn on</span>
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
