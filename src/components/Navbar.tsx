import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const t = useTranslations("MainPage");
  return (
    <nav className="flex justify-between">
      <div>
        <Image src="/logo.svg" alt="logo image" width={155} height={36} />
      </div>
      <div className="flex gap-10 text-text-600">
        <Link href="#">{t("check_compatability")}</Link>
        <Link href="#">{t("how_to")}</Link>
        <Link href="#">{t("support")}</Link>
        <Link href="#">{t("faq")}</Link>
      </div>
      <div>
        <Link href="#">{t("login")}</Link>
      </div>
    </nav>
  );
};
