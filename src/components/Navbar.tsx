import { useTranslations } from "next-intl";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { HumburgerButton } from "./HumburgerButton";

import "./navbar.css";
import { LoginLink } from "./LoginLink";

const StyledLink = (props: LinkProps & { children: React.ReactNode }) => (
  <Link
    {...props}
    className="text-xl font-medium leading-[26px] text-text-600"
  />
);

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
        className="primary-navigation flex gap-8 text-text-600 md:w-2/3 md:justify-between"
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
          <StyledLink href="#">{t("check_compatability")}</StyledLink>
          <StyledLink href="#">{t("how_to")}</StyledLink>
          <StyledLink href="#">{t("support")}</StyledLink>
          <StyledLink href="#">{t("faq")}</StyledLink>
        </div>
        <LoginLink />
      </nav>
    </header>
  );
};
