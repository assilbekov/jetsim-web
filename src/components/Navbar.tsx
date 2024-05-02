import { useTranslations } from "next-intl";
import Link from "next/link";

export const Navbar = () => {
  const t = useTranslations("MainPage");
  return (
    <nav className="flex justify-between">
      <div>Logo</div>
      <div className="flex gap-10">
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
