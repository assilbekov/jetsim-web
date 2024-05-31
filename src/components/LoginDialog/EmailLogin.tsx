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
  const [isCodeValid, setIsCodeValid] = useState(false);
  const isEmailValid = useMemo(() => validateEmail(email), [email]);
  const [step, setStep] = useState<LoginStep>(LoginStep.Email);

  const handleEmailSubmit = async (_: React.FormEvent<HTMLFormElement>) => {
    const response = await fetch("https://auth.jetsim.app/api/v1/email", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      setStep(LoginStep.Code);
    }
  };

  const handleCodeSubmit = async (_: React.FormEvent<HTMLFormElement>) => {
    const response = await fetch("https://auth.jetsim.app/api/v1/code", {
      method: "POST",
      body: JSON.stringify({ code }),
    });
    if (response.ok) {
      console.log("Logged in!");
      return;
    }
    setIsCodeValid(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmailValid) return;

    if (step === LoginStep.Email) {
      await handleEmailSubmit(e);
    } else {
      await handleCodeSubmit(e);
    }
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
          value={step === LoginStep.Email ? email : code}
          onChange={(e) =>
            LoginStep.Email === step
              ? setEmail(e.target.value)
              : setCode(e.target.value)
          }
        />
        {step === LoginStep.Code && (
          <div className="absolute bottom-0 right-0 flex gap-4 items-center">
            {isCodeValid && (
              <p
                className={clsx(
                  getTypographyClass(TypographyVariants.Caption),
                  "text-[#F00]"
                )}
              >
                Wrong code
              </p>
            )}
            <ChangeEmailButton />
          </div>
        )}
      </div>

      <SecondaryButton
        disabled={step === LoginStep.Code ? !code : !isEmailValid}
        type="submit"
        className="w-full"
      >
        Continue{step === LoginStep.Email ? " with code" : ""}
      </SecondaryButton>
    </form>
  );
};
