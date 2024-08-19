"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { HumburgerButton } from "./HumburgerButton";
import "./navbar.css";
import { LoginLink } from "./LoginLink";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "./Typography";
import { HomeLogo } from "./HomeLogo";
import { CookieInfo } from "./CookieInfo";
import { SupportButton } from "./SupportButton";
import { Link, LinkProps } from "@/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const StyledLink = (props: LinkProps) => (
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
  hideNav?: boolean;
  locale: string;
};

export const Navbar = ({
  howToHref = "#how-to",
  faqHref = "#faq",
  hideNav = false,
  locale,
}: NavbarProps) => {
  const t = useTranslations("Navbar");

  useEffect(() => {
    const hash = window.location.hash;
    let validID = hash?.split("?")?.[0];

    if (validID) {
      const element = document.querySelector(validID);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // TODO: Refactor to use refs.
  const handleMenuOpenChange = (open: boolean) => {
    const button = document.getElementById("mobile-nav-toggle");
    const navigation = document.getElementById("primary-navigation");
    const navIcon = document.getElementById("humburger-icon");
    const body = document.body;

    if (button && navigation && navIcon) {
      button.setAttribute("aria-expanded", String(open));
      navigation.setAttribute("data-visible", String(open));
      navIcon?.classList.toggle("open", open);
      body.classList.toggle("overflow-hidden", open);
    }
  };

  const handleButtonClick = () => {
    const button = document.getElementById("mobile-nav-toggle");
    if (button) {
      const expanded = button.getAttribute("aria-expanded") === "true";
      handleMenuOpenChange(!expanded);
    }
  };

  const handleMenuClose = () => {
    handleMenuOpenChange(false);
  };

  return (
    <header className="flex justify-between items-center h-[54px]">
      <HomeLogo onClick={handleMenuClose} />
      <HumburgerButton onClick={handleButtonClick} />
      <nav
        id="primary-navigation"
        data-visible="false"
        className="primary-navigation md:bg-[#F8F9FB] flex gap-8 text-text-600 md:w-2/3 md:justify-between sm:min-w-[750px]"
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
          {!hideNav && (
            <>
              <StyledLink href="/all-destinations" onClick={handleMenuClose}>
                {t("destinations")}
              </StyledLink>
              <StyledLink href={howToHref} onClick={handleMenuClose}>
                {t("howItWorks")}
              </StyledLink>
              <SupportButton>
                <StyledLink href="#" onClick={handleMenuClose}>
                  {t("support")}
                </StyledLink>
              </SupportButton>
              <StyledLink href={faqHref} onClick={handleMenuClose}>
                {t("faq")}
              </StyledLink>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <LoginLink locale={locale} />
        </div>
      </nav>
      <CookieInfo />
    </header>
  );
};
