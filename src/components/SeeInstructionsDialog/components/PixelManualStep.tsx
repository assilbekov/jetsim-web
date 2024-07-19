import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";

type PixelManualStepProps = {
  step: number;
};

export const PixelManualStep = ({ step }: PixelManualStepProps) => {
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
          <span>Click on</span>
          <IconWithText src="/icons/add.svg" alt="add icon" text="" />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/sim_card_download.svg"
            alt="sim card download icon"
            text="Download a SIM instead"
          />
          <ArrowRightImage />
          <span>Yes</span>
        </InfoRow>
        <InfoRow>
          <ArrowRightImage />
          <span>Next</span>
          <ArrowRightImage />
          <span>Need help?</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>Enter Details Manually</span>
        </InfoRow>
      </div>
    </div>
  );
};
