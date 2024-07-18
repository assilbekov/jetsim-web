"use client";

import { Card } from "@/models/Card";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { useState } from "react";
import { useDeviceTypeAndVerion } from "@/hooks/useDeviceTypeAndVerion";
import { TagButton, TagButtonsProps } from "../PlacePackagesCard/TagButton";
import { clsx } from "@/utils";
import Image from "next/image";
import { IOSContent } from "./IOSContent";

const StyledTagButton = (props: TagButtonsProps) => {
  return (
    <TagButton
      {...props}
      className={clsx(
        "border-2 border-solid border-[#E9F0F2] pl-1 pr-1 flex-1 w-full flex justify-center items-center gap-2",
        props.className ?? ""
      )}
    />
  );
};

type SeeInstructionsDialogProps = {
  card: Card;
  onClose: () => void;
};

enum DeviceType {
  iOS = "iOS",
  android = "android",
}

export const SeeInstructionsDialog = ({
  card,
  onClose,
}: SeeInstructionsDialogProps) => {
  const { isAndroid } = useDeviceTypeAndVerion();
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    return isAndroid ? DeviceType.android : DeviceType.iOS;
  });

  return (
    <Dialog onClose={onClose}>
      <DialogTitle title="How to install eSIM" onClose={onClose} />
      <div className="w-full flex gap-3">
        <StyledTagButton
          active={deviceType === DeviceType.iOS}
          onClick={() => setDeviceType(DeviceType.iOS)}
        >
          <Image
            src="/icons/black/apple.svg"
            alt="apple icon"
            height={20}
            width={20}
          />
          iOS
        </StyledTagButton>
        <StyledTagButton
          active={deviceType === DeviceType.android}
          onClick={() => setDeviceType(DeviceType.android)}
        >
          <Image
            src="/icons/black/android.svg"
            alt="android icon"
            height={20}
            width={20}
          />
          Android
        </StyledTagButton>
      </div>
      {deviceType === DeviceType.iOS ? <IOSContent card={card} /> : null}
    </Dialog>
  );
};
