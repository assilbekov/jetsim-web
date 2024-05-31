import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "./Typography";
import Image from "next/image";
import Link from "next/link";

type SocialLoginButtonProps = {
  icon: string;
  label: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const SocialLoginButton = ({ icon, label }: SocialLoginButtonProps) => {
  return (
    <button className="flex gap-2 items-center cursor-pointer justify-center px-5 py-4 mt-3 border-2 border-solid border-slate-200 rounded-[32px] hover:bg-[#EDF1F2] active:bg-[#C3D4D9] active:border-[#C3D4D9] transition duration-100 ease-in-out">
      <Image
        loading="lazy"
        src={icon}
        width={24}
        height={24}
        alt={`${label} icon`}
        className="shrink-0 w-6 aspect-square"
      />
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "flex-1 text-center"
        )}
      >
        {label}
      </p>
    </button>
  );
};

export const SecondaryButton = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "px-8 py-4 mt-4 text-white text-center bg-orange-600 cursor-pointer rounded-[32px] hover:bg-secondary-700 active:bg-secondary-300 transition duration-100 ease-in-out"
      )}
    >
      {children}
    </button>
  );
};

type LoginDialogProps = {
  onClose: () => void;
};

export const LoginDialog = ({ onClose }: LoginDialogProps) => {
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
        <input
          className={clsx(
            getTypographyClass(TypographyVariants.Caption),
            "px-6 py-4 mt-6 whitespace-nowrap border-2 border-solid border-slate-200 rounded-[32px]"
          )}
          placeholder="Enter email"
        />
        <SecondaryButton>Continue with email</SecondaryButton>
        <div className="flex gap-4 justify-center items-center mt-5 text-center text-gray-400 whitespace-nowrap leading-[137.5%]">
          <div className="flex-1 shrink-0 self-stretch my-auto h-0.5 bg-slate-200" />
          <div className="self-stretch">or</div>
          <div className="flex-1 shrink-0 self-stretch my-auto h-0.5 bg-slate-200" />
        </div>
        <SocialLoginButton
          icon="/icons/social/google.svg"
          label="Continue with Google"
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
