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

enum LoginStep {
  Email,
  Code,
}

export const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const isEmailValid = useMemo(() => validateEmail(email), [email]);
  const [step, setStep] = useState<LoginStep>(LoginStep.Email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmailValid) return;

    console.log("Submitted email:", email);
    const response = await fetch("https://auth.jetsim.app/api/v1/email", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      setStep(LoginStep.Code);
    }
    const data = await response.json();
    console.log("Response:", data);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
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
        {step === LoginStep.Code && (
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
        )}
      </div>

      <SecondaryButton
        disabled={!isEmailValid}
        type="submit"
        className="w-full"
      >
        Continue with email
      </SecondaryButton>
    </form>
  );
};
