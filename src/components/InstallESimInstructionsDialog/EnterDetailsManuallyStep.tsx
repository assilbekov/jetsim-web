import { ArrowRightImage } from "./ArrowRightImage";
import { IconWithText } from "./IconWithText";
import { InfoRow } from "./InfoRow";
import { RoundedLabel } from "./RoundedLabel";

type EnterDetailsManuallyStep = {
  step: number;
};

export const EnterDetailsManuallyStep = ({
  step,
}: EnterDetailsManuallyStep) => {
  return (
    <div>
      <RoundedLabel>{step}</RoundedLabel>
      <div className="mt-4 flex flex-col gap-[10px]">
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
          <span>Add eSIM</span>
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <IconWithText
            src="/icons/primary/qr.svg"
            alt="QR code icon"
            text="Use QR Code"
          />
          <ArrowRightImage />
        </InfoRow>
        <InfoRow>
          <span>Enter Details Manually</span>
        </InfoRow>
      </div>
    </div>
  );
};
