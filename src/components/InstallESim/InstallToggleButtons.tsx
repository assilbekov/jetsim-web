"use client";

import { clsx } from "@/utils";
import { TagButton, TagButtonsProps } from "../PlacePackagesCard/TagButton";
import { useTranslations } from "next-intl";

enum InstallMethod {
  QR = "qr",
  MANUAL = "manual",
}

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

type InstallToggleButtonsProps = {
  installMethod: InstallMethod;
  setInstallMethod: (method: InstallMethod) => void;
};

export const InstallToggleButtons = ({
  installMethod,
  setInstallMethod,
}: InstallToggleButtonsProps) => {
  const t = useTranslations("InstallESim");

  return (
    <div className="flex gap-4 justify-center max-w-[360px] w-full mx-auto">
      <StyledTagButton
        active={installMethod === InstallMethod.QR}
        onClick={() => setInstallMethod(InstallMethod.QR)}
      >
        {t("InstallToggleButtons_qr_code_install")}
      </StyledTagButton>
      <StyledTagButton
        active={installMethod === InstallMethod.MANUAL}
        onClick={() => setInstallMethod(InstallMethod.MANUAL)}
      >
        {t("InstallToggleButtons_manual_install")}
      </StyledTagButton>
    </div>
  );
};
