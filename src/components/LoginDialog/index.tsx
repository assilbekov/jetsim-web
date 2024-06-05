import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import Image from "next/image";
import Link from "next/link";
import { SocialLoginButton } from "./SocialLoginButton";
import { EmailLogin } from "./EmailLogin";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@/models/ApiResponse";

type LoginDialogProps = {
  redirectUrl?: string;
  onClose: () => void;
};

export const LoginDialog = ({ onClose, redirectUrl }: LoginDialogProps) => {
  const router = useRouter();
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] flex flex-col px-6 pt-5 pb-6 text-base font-medium bg-white rounded-3xl max-w-[480px] text-slate-950">
        <div className="flex gap-0.5 justify-center items-center px-px text-2xl">
          <h5
            className={clsx(
              getTypographyClass(TypographyVariants.Subheader),
              "w-full"
            )}
          >
            Log in or sign up
          </h5>
          <div
            className="flex cursor-pointer justify-center relative items-center min-w-6 min-h-6 before:absolute before:top-1/2 before:left-1/2 before:w-10 before:h-10 before:-translate-x-1/2 before:-translate-y-1/2"
            onClick={onClose}
          >
            <Image
              loading="lazy"
              src="/icons/gray/close.svg"
              alt="Close icon"
              width={28}
              height={28}
            />
          </div>
        </div>
        <EmailLogin redirectUrl={redirectUrl} />
        <div className="flex gap-4 justify-center items-center mt-5 text-center text-gray-400 whitespace-nowrap leading-[137.5%]">
          <div className="flex-1 shrink-0 self-stretch my-auto h-0.5 bg-slate-200" />
          <div className="self-stretch">or</div>
          <div className="flex-1 shrink-0 self-stretch my-auto h-0.5 bg-slate-200" />
        </div>
        <SocialLoginButton
          icon="/icons/social/google.svg"
          label="Continue with Google"
          onClick={async () => {
            const res = await fetch(
              `https://auth.jetsim.app/api/v1/google/login-link?redirect=${window.location.origin}/auth/callback`
            );
            localStorage.setItem(
              "last_page",
              redirectUrl || window.location.origin
            );
            const json: ApiResponse<{ link: string }> = await res.json();
            router.push(json.payload.link);
          }}
          className="w-full"
        />
        <SocialLoginButton
          icon="/icons/social/apple.svg"
          label="Continue with Apple"
        />
        <div className="font-inter text-base leading-[22px] font-medium text-center text-gray-400 mt-5">
          <span>By continuing you agree to our </span>
          <Link href="/en/terms-of-service">
            <span className="underline">Terms of Service</span>
          </Link>
          <span> and </span>
          <Link href="/en/privacy-policy">
            <span className="underline">Privacy policy</span>
          </Link>
        </div>
      </div>
      <div
        className="fixed inset-0 w-screen h-screen bg-[#7C7D7E]/70 z-[9998]"
        onClick={onClose}
      />
    </>
  );
};
