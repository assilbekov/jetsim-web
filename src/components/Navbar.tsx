"use client";

import Link, { LinkProps } from "next/link";
import { HumburgerButton } from "./HumburgerButton";

import "./navbar.css";
import { LoginLink } from "./LoginLink";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "./Typography";
import { HomeLogo } from "./HomeLogo";
import { CookieInfo } from "./CookieInfo";
import { CheckCompatibilityFromHeader } from "./CheckCompatibility";
import { SupportButton } from "./SupportButton";
import { useEffect } from "react";

const StyledLink = (props: LinkProps & { children: React.ReactNode }) => (
  <Link
    {...props}
    className={clsx(
      "text-text-600 hover:text-[#333D40] transition duration-200 ease-in-out",
      getTypographyClass(TypographyVariants.Body)
    )}
  />
);

type NavbarProps = {
  howToHref?: string;
  faqHref?: string;
};

export const Navbar = ({
  howToHref = "#how-to",
  faqHref = "#faq",
}: NavbarProps) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

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
          <CheckCompatibilityFromHeader label="Check compatability" />
          <StyledLink href={howToHref}>How to</StyledLink>
          <SupportButton>
            <StyledLink href="#">Support</StyledLink>
          </SupportButton>
          <StyledLink href={faqHref}>FAQ</StyledLink>
        </div>
        <LoginLink />
      </nav>
      <CookieInfo />
    </header>
  );
};
