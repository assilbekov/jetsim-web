import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { HumburgerButton } from "./HumburgerButton";

import "./navbar.css";
import { LoginLink } from "./LoginLink";

export const Navbar = () => {
  const t = useTranslations("MainPage");
  return (
    <header className="flex justify-between items-center h-[54px]">
      <div className="z-[1001]">
        <Image src="/logo.svg" alt="logo image" width={155} height={36} />
      </div>
      <HumburgerButton />
      <nav
        id="primary-navigation"
        data-visible="false"
        className="primary-navigation flex gap-10 text-text-600 md:w-2/3 md:justify-between"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Link href="#">{t("check_compatability")}</Link>
          <Link href="#">{t("how_to")}</Link>
          <Link href="#">{t("support")}</Link>
          <Link href="#">{t("faq")}</Link>
        </div>
        <LoginLink />
      </nav>
    </header>
  );
};
