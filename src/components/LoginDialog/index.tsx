import Link from "next/link";
import { SocialLoginButton } from "./SocialLoginButton";
import { EmailLogin } from "./EmailLogin";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@/models/ApiResponse";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { createPortal } from "react-dom";

type LoginDialogProps = {
  redirectUrl?: string;
  onClose: () => void;
};

export const LoginDialog = ({ onClose, redirectUrl }: LoginDialogProps) => {
  const router = useRouter();
  return createPortal(
    <Dialog
      onClose={onClose}
      dialogClassName="xxs:max-h-[550px] md:max-h-[500px]"
    >
      <DialogTitle title="Log in or sign up" onClose={onClose} />
      <div className="w-full">
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
          className="w-full"
        />
        <div className="font-inter text-base leading-[22px] font-medium text-center text-gray-400 mt-5">
          <span>By continuing you agree to our </span>
          <Link href="/terms-of-service">
            <span className="underline">Terms of Service</span>
          </Link>
          <span> and </span>
          <Link href="/privacy-policy">
            <span className="underline">Privacy policy</span>
          </Link>
        </div>
      </div>
    </Dialog>,
    document.body
  );
};
