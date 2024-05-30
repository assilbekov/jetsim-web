import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "./Typography";
import Image from "next/image";

type SocialLoginButtonProps = {
  icon: string;
  label: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const SocialLoginButton = ({ icon, label }: SocialLoginButtonProps) => {
  return (
    <button className="flex gap-2 items-center cursor-pointer justify-center px-5 py-4 mt-3 border-2 border-solid border-slate-200 rounded-[32px] hover:bg-[#EDF1F2] active:bg-[#C3D4D9] active:border-[#C3D4D9] transition duration-100 ease-in-out">
      <img loading="lazy" src={icon} className="shrink-0 w-6 aspect-square" />
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

export const LoginDialog = () => {
  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] flex flex-col px-6 pt-5 pb-6 text-base font-medium bg-white rounded-3xl max-w-[480px] text-slate-950">
        <div className="flex gap-0.5 justify-center items-center px-px text-2xl">
          <div className="flex-1">Log in or sign up</div>
          <div></div>
        </div>
        <div className="justify-center px-6 py-4 mt-6 whitespace-nowrap bg-white border-2 border-solid border-slate-200 leading-[137.5%] rounded-[32px]">
          12345@gmail.com
        </div>
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
        <div className="mt-5 leading-6 text-center text-gray-400 underline">
          <span className="text-gray-400">By continuing you agree to our </span>
          <span className="text-gray-400 underline">Terms of Service</span>
          <span className="text-gray-400"> and </span>
          <span className="text-gray-400 underline">Privacy policy</span>
        </div>
      </div>
      <div className="fixed inset-0 w-screen h-screen bg-[#7C7D7E]/70 z-[9998]" />
    </>
  );
};
