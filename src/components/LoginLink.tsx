import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const LoginLink = () => {
  const t = useTranslations("MainPage");

  return (
    <div className="h-10 md:h-[52px] w-12 md:w-[101px] rounded-md border-2 bg-text-900 border-[#EBEFF0]">
      <Link href="#" className="w-full h-full flex justify-center items-center">
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
