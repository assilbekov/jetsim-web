"use client";

import Image from "next/image";
import { TertiaryButton } from "../buttons/TertiaryButton";
import { useState } from "react";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Link, usePathname } from "@/navigation";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { setUserLanguage } from "@/api/auth";

type Language = {
  country: string;
  language: string;
  code: string;
};

const languagesList: Language[] = [
  {
    country: "United States",
    language: "English",
    code: "en-US",
  },
  {
    country: "France",
    language: "Français",
    code: "fr-FR",
  },
  {
    country: "Deutschland",
    language: "Deutsch",
    code: "de-DE",
  },
  {
    country: "Polska",
    language: "Polski",
    code: "pl-PL",
  },
  {
    country: "Portugal",
    language: "Português",
    code: "pt-PT",
  },
  {
    country: "Србија",
    language: "Српски",
    code: "sr-RS",
  },
  {
    country: "España",
    language: "Español",
    code: "es-ES",
  },
  {
    country: "Italia",
    language: "Italiano",
    code: "it-IT",
  },
  {
    country: "Türkiye",
    language: "Türkçe",
    code: "tr-TR",
  },
];

type LanguageBlockProps = {
  active: boolean;
  language: Language;
};

const LanguageBlock = ({ active, language }: LanguageBlockProps) => {
  const pathname = usePathname();

  return (
    <Link
      // TODO: Remove typecasting and root navigation.
      locale={language.code as any}
      href={`${pathname}${window.location.search || ""}`}
      className={clsx(
        "px-5 py-4 rounded-2xl border-2 border-solid border-[#E9F0F2] md:border-none hover:border-[#E9F0F2] transition duration-200 ease-in-out cursor-pointer",
        active ? "border-[#E9F0F2] bg-[#E9F0F2]" : ""
      )}
      onClick={() => {
        // If user is logged in, set the user language
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          setUserLanguage(language.code);
        }
      }}
    >
      <h5
        className={clsx(
          getTypographyClass(TypographyVariants.Body),
          "md:font-inter md:text-[16px] md:leading-[19px] md:font-medium text-text-100"
        )}
      >
        {language.language}
      </h5>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Body2),
          "text-text-600 mt-1"
        )}
      >
        {language.country}
      </p>
    </Link>
  );
};

type LanguageSwitcherProps = {
  renderProps?: ({
    selectedLanguage,
    handleDialogOpen,
  }: {
    selectedLanguage: Language;
    handleDialogOpen: () => void;
  }) => React.ReactNode;
};

export const LanguageSwitcher = ({ renderProps }: LanguageSwitcherProps) => {
  const params = useParams();
  const t = useTranslations("LanguageSwitcher");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);

    // Get the navigation element by ID
    const navElement = document.getElementById("primary-navigation");

    if (navElement) {
      // Toggle classes
      navElement.classList.remove("overflow-auto");
      navElement.classList.add("overflow-hidden");
    }
  };

  // TODO: Too many workarounds to handle the overflow of the body.
  // Find a better way to handle this.
  const handleClose = () => {
    setIsOpen(false);

    // Get the navigation element by ID
    const navElement = document.getElementById("primary-navigation");
    const body = document.body;

    if (navElement) {
      // Toggle classes
      navElement.classList.remove("overflow-hidden");
      navElement.classList.add("overflow-auto");
    }

    if (body && body.clientWidth < 1024) {
      setTimeout(() => {
        body.classList.add("overflow-hidden");
      }, 0)
    }
  }

  return (
    <>
      {renderProps ? (
        renderProps({
          handleDialogOpen: handleOpen,
          selectedLanguage:
            languagesList.find((l) => l.code === params?.locale) ??
            languagesList[0],
        })
      ) : (
        <TertiaryButton
          className="pt-3 pb-3 pl-3 pr-3 h-11 w-11"
          onClick={handleOpen}
        >
          <Image
            src="/icons/black/language.svg"
            alt="language icon"
            width={20}
            height={20}
          />
        </TertiaryButton>
      )}
      {isOpen && (
        <Dialog onClose={handleClose} mdHeightAuto>
          <DialogTitle title={t("title")} onClose={handleClose} />
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
            {languagesList.map((language) => (
              <LanguageBlock
                active={params?.locale === language.code}
                key={language.code}
                language={language}
              />
            ))}
          </div>
        </Dialog>
      )}
    </>
  );
};
