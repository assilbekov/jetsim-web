import { useTranslations } from "next-intl";
import Link from "next/link";

export const LoginLink = () => {
  const t = useTranslations("MainPage");

  return (
    <div className="h-[52px] w-full sm:w-[195px] md:w-[107px] rounded-[44px] border-2 bg-text-900 border-[#EBEFF0] active:bg-[#C3D4D9] hover:bg-[#EDF1F2] active:border-[#C3D4D9] transition duration-200 ease-in-out">
      <Link
        href="#"
        className="w-full h-full flex justify-center items-center text-text-100 font-medium text-base leading-[22px]"
      >
        <span>{t("login")}</span>
      </Link>
    </div>
  );
};
