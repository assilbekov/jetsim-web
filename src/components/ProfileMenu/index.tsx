"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { ProfileIcon } from "./ProfileIcon";
import { Link, LinkProps } from "@/navigation";
import { clsx } from "@/utils";
import { getTypographyClass, TypographyVariants } from "../Typography";
import { useTranslations } from "next-intl";
import { SettingsButton } from "../Navbar/SettingsButton";

const StyledLink = (props: LinkProps) => (
  <Link
    {...props}
    className={clsx(
      "text-text-600 hover:text-[#333D40] transition duration-200 ease-in-out block",
      getTypographyClass(TypographyVariants.Body2)
    )}
  />
);

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("ProfileMenu");

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
          "absolute top-10 right-0 bg-white p-4 rounded-md shadow-md",
          "transform transition-all duration-200 ease-in-out origin-top-right",
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="lg:hidden border-[2px] border-solid border-[#E9F0F2] rounded-2xl">
          <SettingsButton
            className="border-b-2 last:border-b-2 last:rounded-b-none"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/icons/black/sim.svg"
              alt="sim icon"
              width={12}
              height={16}
              className="w-5 h-5"
            />
            {t("myEsims")}
          </SettingsButton>
          <SettingsButton
            className="border-b-2 last:border-b-2 last:rounded-b-none"
            onClick={() => setIsOpen(false)}
          >
            {t("allDestinations")}
          </SettingsButton>
        </div>
        <div className="flex flex-col gap-4 p-6 lg:p-0 border-[2px] lg:border-none border-solid border-[#E9F0F2] rounded-2xl lg:flex-row lg:gap-8 items-start lg:items-center">
          <StyledLink href="/all-destinations" onClick={() => setIsOpen(false)}>
            {t("allDestinations")}
          </StyledLink>
          <StyledLink href="/all-destinations" onClick={() => setIsOpen(false)}>
            {t("allDestinations")}
          </StyledLink>
          <StyledLink href="/all-destinations" onClick={() => setIsOpen(false)}>
            {t("allDestinations")}
          </StyledLink>
          <StyledLink href="/all-destinations" onClick={() => setIsOpen(false)}>
            {t("allDestinations")}
          </StyledLink>
        </div>
      </div>
    </div>
  );
};
