"use client";

import { SocialLoginButton } from "./SocialLoginButton";
import { EmailLogin } from "./EmailLogin";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@/models/ApiResponse";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { createPortal } from "react-dom";
import { handleLoginGoogleClickEvent } from "@/gtm-events";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";

const StyledLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="underline text-text-600 hover:text-text-300 transition duration-200 ease-in-out"
    >
      {children}
    </Link>
  );
};

type LoginDialogProps = {
  redirectUrl?: string;
  onClose: () => void;
};

export const LoginDialog = ({ onClose, redirectUrl }: LoginDialogProps) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("LoginDialog");

  return createPortal(
    <Dialog
      onClose={onClose}
      dialogClassName="xxs:max-h-[550px] md:h-[500px] md:h-auto md:h-max-auto md:h-fit md:mt-[20vh]"
      dialogContentClassName="md:h-auto"
    >
      <DialogTitle title={t("loginTitle")} onClose={onClose} />
      <div className="w-full">
        <EmailLogin redirectUrl={redirectUrl} />
        <div className="flex gap-4 justify-center items-center mt-5 text-center text-gray-400 whitespace-nowrap leading-[137.5%]">
          <div className="flex-1 shrink-0 self-stretch my-auto h-0.5 bg-slate-200" />
          <div className="self-stretch">{t("orText")}</div>
          <div className="flex-1 shrink-0 self-stretch my-auto h-0.5 bg-slate-200" />
        </div>
        <SocialLoginButton
          icon="/icons/social/google.svg"
          label={t("continueWithGoogle")}
          onClick={async () => {
            handleLoginGoogleClickEvent();
            const res = await fetch(
              `https://auth.jetsim.app/api/v1/google/login-link?redirect=${window.location.origin}/auth/callback`
            );
            localStorage.setItem(
              "last_page",
              redirectUrl || window.location.origin
            );
            localStorage.setItem("last_locale", locale);
            const json: ApiResponse<{ link: string }> = await res.json();
            router.push(json.payload.link);
          }}
          className="w-full"
        />
        <div className="font-inter text-base leading-[22px] font-medium text-center text-gray-400 mt-5">
          <span>{t("byContinuing")} </span>
          <StyledLink href="/terms-of-service">
            {t("termsOfService")}
          </StyledLink>
          <span> {t("andText")} </span>
          <StyledLink href="/privacy-policy">{t("privacyPolicy")}</StyledLink>
        </div>
      </div>
    </Dialog>,
    document.body
  );
};
