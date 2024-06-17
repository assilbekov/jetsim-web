import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";

type TurnOnDataRoamingStep = {
  step: number;
};

export const TurnOnDataRoamingStep = ({ step }: TurnOnDataRoamingStep) => {
  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div>
        <InfoRow>
          <span>Go to</span>
          <IconWithText
            src="/icons/settings.png"
            alt="settings icon"
            text="Settings"
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/mobile-service.svg"
            alt="mobile service icon"
            text="Mobile Service"
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/primary/qr.svg"
            alt="qr icon"
            text="Select installed eSIM"
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>Turn on</span>
          <IconWithText
            src="/icons/toggle.svg"
            alt="toggle icon"
            text="Data Roaming"
          />
        </InfoRow>
      </div>
    </div>
  );
};
