"use client";

import { useRouter } from "next/navigation";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { ChangeEmailButton } from "./ChangeEmailButton";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useContext,
  useMemo,
  useState,
} from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { Tokens } from "@/models/Tokens";
import { ApiResponse } from "@/models/ApiResponse";
import {
  handleLoginEmailClickEvent,
  handleLoginEmailCodeClickEvent,
  handleRegistrationEvent,
} from "@/gtm-events";
import { getProfile, setUserLanguage } from "@/api/auth";
import { UTMContext } from "@/contexts/UTMContext";
import { useLocale, useTranslations } from "next-intl";

const validateEmail = (email: string): boolean => {
  return Boolean(
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};

const StyledInput = ({
  value,
  onChange,
  placeholder,
  className,
  ...restProps
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      {...restProps}
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "px-6 py-4 mt-6 whitespace-nowrap border-2 border-solid border-slate-200 rounded-[32px] w-full",
        className ?? ""
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

enum LoginStep {
  Email,
  Code,
}

type EmailLoginProps = {
  redirectUrl?: string;
};

export const EmailLogin = ({ redirectUrl }: EmailLoginProps) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("LoginDialog");
  const { utmsSearchParams } = useContext(UTMContext);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeInvalid, setIsCodeInvalid] = useState(false);
  const isEmailValid = useMemo(() => validateEmail(email), [email]);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [step, setStep] = useState<LoginStep>(LoginStep.Email);

  const handleEmailSubmit = async (_: React.FormEvent<HTMLFormElement>) => {
    handleLoginEmailClickEvent();
    const response = await fetch("https://auth.jetsim.app/api/v1/email", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale,
      },
    });
    if (response.ok) {
      setStep(LoginStep.Code);
      setCode("");
      setIsCodeInvalid(false);
    }
  };

  const handleCodeSubmit = async (_: React.FormEvent<HTMLFormElement>) => {
    handleLoginEmailCodeClickEvent();
    const response = await fetch(
      `https://auth.jetsim.app/api/v1/email/check-code${
        utmsSearchParams ? `?${utmsSearchParams}` : ""
      }`,
      {
        method: "POST",
        body: JSON.stringify({ code, email }),
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": locale,
        },
      }
    );
    if (response.ok) {
      const json: ApiResponse<Tokens> = await response.json();

      setUserLanguage(locale);

      if (json.payload?.meta?.newUser) {
        handleRegistrationEvent({email});
      }

      localStorage.setItem("accessToken", json.payload?.accessToken);
      localStorage.setItem("refreshToken", json.payload?.refreshToken);
      localStorage.setItem("user_email", email);
      getProfile(locale).then((profile) => {
        localStorage.setItem("user_email", profile.email);
        localStorage.setItem("user_id", profile.id);
      });

      if (redirectUrl) {
        router.push(redirectUrl);
      }

      return;
    }
    setIsCodeInvalid(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmailValid) return;
    setIsFormLoading(true);

    if (step === LoginStep.Email) {
      await handleEmailSubmit(e);
    } else {
      await handleCodeSubmit(e);
    }
    setIsFormLoading(false);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="relative">
        {step === LoginStep.Email ? (
          <StyledInput
            key="email"
            placeholder={t("enterEmail")}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <StyledInput
            key="code"
            placeholder={t("enterVerificationCode")}
            value={code}
            onChange={(e) => {
              const input = e.target.value;
              // Allow only digits and limit to 6 characters
              if (/^\d{0,6}$/.test(input)) {
                setCode(input);
              }
            }}
            className={isCodeInvalid ? "border-[#F00]" : ""}
          />
        )}
        {step === LoginStep.Code && (
          <div className="absolute bottom-[17px] right-6 flex gap-4 items-center">
            {isCodeInvalid && (
              <p
                className={clsx(
                  getTypographyClass(TypographyVariants.Caption),
                  "text-[#F00]"
                )}
              >
                {t("wrongCode")}
              </p>
            )}
          </div>
        )}
      </div>

      {step === LoginStep.Code && (
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Body2),
            "text-text-600 mt-2 w-full"
          )}
        >
          {t("verificationCodeSent", { email })}{" "}
          <ChangeEmailButton
            onClick={() => {
              setStep(LoginStep.Email);
              setCode("");
              setIsCodeInvalid(false);
            }}
            type="button"
          />
        </p>
      )}

      <PrimaryButton
        disabled={
          isFormLoading || step === LoginStep.Code ? !code : !isEmailValid
        }
        type="submit"
        className="w-full mt-4"
      >
        {t(step === LoginStep.Email ? "continueWithCode" : "continue")}
      </PrimaryButton>
    </form>
  );
};
