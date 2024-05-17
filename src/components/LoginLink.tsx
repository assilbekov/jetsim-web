import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const LoginLink = () => {
  const t = useTranslations("MainPage");

  return (
    <div className="h-10 md:h-[52px] w-12 md:w-[107px] rounded-md md:rounded-[44px] border-2 bg-text-900 border-[#EBEFF0]">
      <Link href="#" className="w-full h-full flex justify-center items-center text-text-100 font-medium text-base leading-[22px]">
        <span className="md:block hidden">{t("login")}</span>
        <Image
          src="/login.svg"
          alt="login icon"
          width={20}
          height={20}
          className="md:hidden block"
        />
      </Link>
    </div>
  );
};
