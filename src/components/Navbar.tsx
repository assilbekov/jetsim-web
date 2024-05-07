import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { HumburgerButton } from "./HumburgerButton";

import "./navbar.css";
import { LoginLink } from "./LoginLink";

export const Navbar = () => {
  const t = useTranslations("MainPage");
  return (
    <header className="flex justify-between">
      <div>
        <Image src="/logo.svg" alt="logo image" width={155} height={36} />
      </div>
      <HumburgerButton />
      <nav
        id="primary-navigation"
        data-visible="false"
        className="primary-navigation flex gap-10 text-text-600"
      >
        <Link href="#">{t("check_compatability")}</Link>
        <Link href="#">{t("how_to")}</Link>
        <Link href="#">{t("support")}</Link>
        <Link href="#">{t("faq")}</Link>
      </nav>
      <LoginLink />
    </header>
  );
};
