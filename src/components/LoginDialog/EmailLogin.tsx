"use client";

import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { ChangeEmailButton } from "./ChangeEmailButton";
import { SecondaryButton } from "./SecondaryButton";
import { useMemo, useState } from "react";

const validateEmail = (email: string): boolean => {
  return Boolean(
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};

export const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const isEmailValid = useMemo(() => validateEmail(email), [email]);
  return (
    <div className="w-full">
      <div className="relative">
        <input
          className={clsx(
            getTypographyClass(TypographyVariants.Caption),
            "px-6 py-4 mt-6 whitespace-nowrap border-2 border-solid border-slate-200 rounded-[32px] w-full"
          )}
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="absolute bottom-0 right-0 flex gap-4 items-center">
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Caption),
              "text-[#F00]"
            )}
          >
            Wrong code
          </p>
          <ChangeEmailButton />
        </div>
      </div>

      <SecondaryButton disabled={!isEmailValid} className="w-full">
        Continue with email
      </SecondaryButton>
    </div>
  );
};
