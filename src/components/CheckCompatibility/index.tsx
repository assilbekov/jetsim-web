"use client";

import { useState } from "react";
import { CheckCompatibilityLink } from "./CheckCompatibilityLink";
import { CheckCompatibilityDialog } from "./CheckCompatibilityDialog";

export type CheckCompatibilityProps = {
  label: React.ReactNode;
  className?: string;
};

export const CheckCompatibility = (props: CheckCompatibilityProps) => {
  const [isDialogShow, setIsDialogShow] = useState(true);
  return (
    <>
      <CheckCompatibilityLink
        {...props}
        onClick={() => setIsDialogShow(true)}
      />
      {isDialogShow && (
        <CheckCompatibilityDialog onClose={() => setIsDialogShow(false)} />
      )}
    </>
  );
};
