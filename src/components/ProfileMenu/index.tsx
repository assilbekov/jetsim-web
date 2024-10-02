import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { ProfileIcon } from "./ProfileIcon";
import { Link, LinkProps } from "@/navigation";
import { clsx } from "@/utils";
import { getTypographyClass, TypographyVariants } from "../Typography";
import { useLocale, useTranslations } from "next-intl";
import { SettingsButton } from "../Navbar/SettingsButton";
import { AuthContainer } from "../Auth/AuthContainer";
import { SupportButton } from "../SupportButton";

const StyledLink = (props: LinkProps) => (
  <Link
    {...props}
    className={clsx(
      "text-text-600 hover:text-[#333D40] transition duration-200 ease-in-out block",
      getTypographyClass(TypographyVariants.Body2)
    )}
  />
);

export const ProfileMenu = ({
  howToHref = "#how-to",
  faqHref = "#faq",
}: {
  howToHref?: string;
  faqHref?: string;
}) => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const loginTranslations = useTranslations("Login");
  const navbarTranslations = useTranslations("Navbar");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <SecondaryButton
        className="flex items-center gap-1.5 h-10 sm:h-11 pr-1.5 pl-3 pt-1.5 pb-1.5 w-20 sm:w-[84px] justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/icons/black/burger.svg"
          alt="burger icon"
          width={20}
          height={20}
        />
        <ProfileIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </SecondaryButton>
      <div
        className={clsx(
          "fixed sm:absolute inset-0 top-20 sm:inset-auto sm:top-12 sm:right-0 bg-white z-[9999]",
          "sm:w-80 md:w-96 lg:w-64",
          "transform transition-all duration-300 ease-in-out",
          "sm:origin-top-right",
          isOpen
            ? "translate-x-0 sm:translate-x-0 opacity-100 sm:scale-100"
            : "translate-x-full sm:translate-x-0 opacity-0 sm:scale-95 pointer-events-none"
        )}
      >
        <div className="h-full sm:h-auto overflow-y-auto p-4 sm:p-0">
          <AuthContainer
            locale={locale}
            renderProps={({ isLoggedIn, handleLoginClick, handleLogout }) => (
              <div className="border-[2px] border-solid border-[#E9F0F2] rounded-2xl mb-4 lg:mb-0">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/profile"
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <SettingsButton className="border-b-2 last:border-b-2 last:rounded-b-none">
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
                    <SettingsButton
                      onClick={() => {
                        setIsOpen(false);
                        handleLogout();
                      }}
                    >
                      <Image
                        src="/icons/black/logout.svg"
                        alt="logout icon"
                        width={14}
                        height={14}
                        className="w-5 h-5"
                      />
                      {loginTranslations("logout")}
                    </SettingsButton>
                  </>
                ) : (
                  <SettingsButton
                    onClick={() => {
                      setIsOpen(false);
                      handleLoginClick();
                    }}
                    className="xxs:border-none"
                  >
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
              </div>
            )}
          />
          <div className="flex flex-col gap-4 p-6 lg:p-0 border-[2px] lg:border-none border-solid border-[#E9F0F2] rounded-2xl lg:flex-row lg:gap-8 items-start lg:items-center lg:hidden">
            <StyledLink
              href="/all-destinations"
              onClick={() => setIsOpen(false)}
            >
              {navbarTranslations("destinations")}
            </StyledLink>
            <StyledLink href={howToHref} onClick={() => setIsOpen(false)}>
              {navbarTranslations("howItWorks")}
            </StyledLink>
            <SupportButton>
              <StyledLink href="#" onClick={() => setIsOpen(false)}>
                {navbarTranslations("support")}
              </StyledLink>
            </SupportButton>
            <StyledLink href={faqHref} onClick={() => setIsOpen(false)}>
              {navbarTranslations("faq")}
            </StyledLink>
          </div>
        </div>
      </div>
    </div>
  );
};
