"use client";

import { useState } from "react";
import { CheckCompatibilityLink } from "./CheckCompatibilityLink";
import { CheckCompatibilityDialog } from "./CheckCompatibilityDialog";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { PrimaryButton } from "../buttons/PrimaryButton";

export type CheckCompatibilityProps = {
  label: React.ReactNode;
  hideIcon?: boolean;
  className?: string;
};

export const CheckCompatibility = (props: CheckCompatibilityProps) => {
  const [isDialogShow, setIsDialogShow] = useState(false);
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

export const CheckCompatibilityButton = (props: CheckCompatibilityProps) => {
  const [isDialogShow, setIsDialogShow] = useState(false);
  return (
    <>
      <PrimaryButton {...props} onClick={() => setIsDialogShow(true)}>
        {props.label}
      </PrimaryButton>
      {isDialogShow && (
        <CheckCompatibilityDialog onClose={() => setIsDialogShow(false)} />
      )}
    </>
  );
};

export const CheckCompatibilityFromHeader = (
  props: CheckCompatibilityProps
) => {
  const [isDialogShow, setIsDialogShow] = useState(false);

  return (
    <>
      <p
        className={clsx(
          "text-text-600 hover:text-[#333D40] transition duration-200 ease-in-out cursor-pointer",
          getTypographyClass(TypographyVariants.Body)
        )}
        onClick={() => setIsDialogShow(true)}
      >
        {props.label}
      </p>
      {isDialogShow && (
        <CheckCompatibilityDialog onClose={() => setIsDialogShow(false)} />
      )}
    </>
  );
};
