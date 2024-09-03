"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { HumburgerButton } from "./HumburgerButton";
import "./navbar.css";
import { LoginLink } from "../LoginLink";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { HomeLogo } from "../HomeLogo";
import { CookieInfo } from "../CookieInfo";
import { SupportButton } from "../SupportButton";
import { Link, LinkProps } from "@/navigation";
import { LanguageSwitcher } from "../LanguageSwitcher";
import Image from "next/image";
import { SettingsButton } from "./SettingsButton";
import { AuthContainer } from "../Auth/AuthContainer";

const StyledLink = (props: LinkProps) => (
  <Link
    {...props}
    className={clsx(
      "text-text-600 hover:text-[#333D40] transition duration-200 ease-in-out block",
      getTypographyClass(TypographyVariants.Body2)
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
  locale = "en-US",
}: NavbarProps) => {
  const t = useTranslations("Navbar");
  const loginTranslations = useTranslations("Login");

  useEffect(() => {
    const hash = window.location.hash;
    let validID = hash?.split("?")?.[0];

    try {
      if (validID) {
        const element = document.querySelector(validID);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    window.onerror = function (message, source, lineno, colno, error) {
      const maxReloads = 3;
      const reloadKey = "reload_attempts";

      // Get the current reload count from localStorage
      let reloadAttempts = parseInt(localStorage.getItem(reloadKey) || "") || 0;

      if (reloadAttempts < maxReloads) {
        // Increment the reload count
        reloadAttempts += 1;
        localStorage.setItem(reloadKey, String(reloadAttempts));

        console.warn(
          `Reloading the page. Attempt ${reloadAttempts} of ${maxReloads}`
        );
        // Reload the page
        window.location.reload();
      } else {
        console.error("Maximum reload attempts reached. Not reloading.");
        // Optional: Show a message to the user
        alert("Something went wrong. Please try again later.");
      }
    };
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
    <header className="flex justify-between items-center h-[54px] mt-2 lg:mt-0">
      <div className="block z-[1001] lg:hidden">
        <HomeLogo onClick={handleMenuClose} />
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden xxs:block z-[1001] lg:hidden">
          <LanguageSwitcher />
        </div>
        <HumburgerButton onClick={handleButtonClick} />
      </div>
      <nav
        id="primary-navigation"
        data-visible="false"
        className="primary-navigation md:bg-[#F8F9FB] flex gap-8 text-text-600 md:w-full md:justify-between sm:min-w-[750px]"
      >
        <div className="lg:hidden border-[2px] border-solid border-[#E9F0F2] rounded-2xl">
          {
            <AuthContainer
              locale={locale}
              renderProps={({ isLoggedIn, handleLoginClick, handleLogout }) => {
                return (
                  <>
                    {isLoggedIn ? (
                      <Link href="/profile" className="w-full">
                        <SettingsButton>
                          <Image
                            src="/icons/black/sim.svg"
                            alt="sim icon"
                            width={12}
                            height={16}
                            className="w-5 h-5"
                          />
                          {loginTranslations("myEsims")}
                        </SettingsButton>
                      </Link>
                    ) : (
                      <SettingsButton onClick={handleLoginClick}>
                        <Image
                          src="/icons/black/logout.svg"
                          alt="logout icon"
                          width={14}
                          height={14}
                          className="w-5 h-5"
                        />
                        {loginTranslations("login")}
                      </SettingsButton>
                    )}
                    <LanguageSwitcher
                      renderProps={({ selectedLanguage, handleDialogOpen }) => {
                        return (
                          <SettingsButton onClick={handleDialogOpen}>
                            <Image
                              src="/icons/black/language.svg"
                              alt="language icon"
                              width={17}
                              height={17}
                              className="w-5 h-5"
                            />
                            {selectedLanguage.language}
                          </SettingsButton>
                        );
                      }}
                    />
                    {isLoggedIn && (
                      <SettingsButton onClick={handleLogout}>
                        <Image
                          src="/icons/black/logout.svg"
                          alt="logout icon"
                          width={14}
                          height={14}
                          className="w-5 h-5"
                        />
                        {loginTranslations("logout")}
                      </SettingsButton>
                    )}
                  </>
                );
              }}
            />
          }
        </div>
        <div className="hidden lg:flex items-center">
          <HomeLogo onClick={handleMenuClose} />
        </div>
        {!hideNav && (
          <div className="flex flex-col gap-4 p-6 lg:p-0 border-[2px] lg:border-none border-solid border-[#E9F0F2] rounded-2xl lg:flex-row lg:gap-8 items-start lg:items-center">
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
          </div>
        )}
        <div className="lg:flex items-center gap-2 hidden">
          <LanguageSwitcher />
          <LoginLink locale={locale} />
        </div>
      </nav>
      <CookieInfo />
    </header>
  );
};
