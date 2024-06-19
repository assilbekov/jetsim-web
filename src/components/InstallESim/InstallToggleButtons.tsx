import { clsx } from "@/utils";
import { TagButton, TagButtonsProps } from "../PlacePackagesCard/TagButton";

const StyledTagButton = (props: TagButtonsProps) => {
  return (
    <TagButton
      {...props}
      className={clsx(
        "border-2 border-solid border-[#E9F0F2] pl-1 pr-1 flex-1",
        props.className ?? ""
      )}
    />
  );
};

export enum InstallMethod {
  QR = "qr",
  MANUAL = "manual",
}

type InstallToggleButtons = {
  installMethod: InstallMethod;
  setInstallMethod: (method: InstallMethod) => void;
};

export const InstallToggleButtons = ({
  installMethod,
  setInstallMethod,
}: InstallToggleButtons) => {
  return (
    <div className="flex gap-4 justify-center max-w-[360px] w-full mx-auto">
      <StyledTagButton
        active={installMethod === InstallMethod.QR}
        onClick={() => setInstallMethod(InstallMethod.QR)}
      >
        QR code install
      </StyledTagButton>
      <StyledTagButton
        active={installMethod === InstallMethod.MANUAL}
        onClick={() => setInstallMethod(InstallMethod.MANUAL)}
      >
        Manual install
      </StyledTagButton>
    </div>
  );
};
