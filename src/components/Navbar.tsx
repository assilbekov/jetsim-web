import Link, { LinkProps } from "next/link";
import { HumburgerButton } from "./HumburgerButton";

import "./navbar.css";
import { LoginLink } from "./LoginLink";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "./Typography";
import { HomeLogo } from "./HomeLogo";
import { CookieInfo } from "./CookieInfo";

const StyledLink = (props: LinkProps & { children: React.ReactNode }) => (
  <Link
    {...props}
    className={clsx(
      "text-text-600 hover:text-[#333D40] transition duration-200 ease-in-out",
      getTypographyClass(TypographyVariants.Body)
    )}
  />
);

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center h-[54px]">
      <HomeLogo />
      <HumburgerButton />
      <nav
        id="primary-navigation"
        data-visible="false"
        className="primary-navigation md:bg-[#F8F9FB] flex gap-8 text-text-600 md:w-2/3 md:justify-between"
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
          <StyledLink href="#">Check compatability</StyledLink>
          <StyledLink href="#">How to</StyledLink>
          <StyledLink href="#">Support</StyledLink>
          <StyledLink href="#">FAQ</StyledLink>
        </div>
        <LoginLink />
      </nav>
      <CookieInfo />
    </header>
  );
};
