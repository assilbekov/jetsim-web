"use client";

import Image from "next/image";
import { TertiaryButton } from "../buttons/TertiaryButton";
import { useState } from "react";
import { Dialog } from "../Dialog";
import { DialogTitle } from "../Dialog/DialogTitle";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Link } from "@/navigation";
import { useParams } from "next/navigation";

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
];

type LanguageBlockProps = {
  active: boolean;
  language: Language;
};

const LanguageBlock = ({ active, language }: LanguageBlockProps) => {
  return (
    <Link
      // TODO: Remove typecasting and root navigation.
      locale={language.code as any}
      href="/"
      className={clsx(
        "px-5 py-4 rounded-2xl border-2 border-solid border-transparent hover:border-[#E9F0F2] transition duration-200 ease-in-out cursor-pointer",
        active ? "border-[#E9F0F2] bg-[#E9F0F2]" : ""
      )}
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

export const LanguageSwitcher = () => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TertiaryButton
        className="pt-3 pb-3 pl-3 pr-3"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/icons/black/language.svg"
          alt="language icon"
          width={20}
          height={20}
        />
      </TertiaryButton>
      {isOpen && (
        <Dialog onClose={() => setIsOpen(false)}>
          <DialogTitle
            title="Choose a language and region"
            onClose={() => setIsOpen(false)}
          />
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
            {languagesList.map((language) => (
              <LanguageBlock
                active={params.locale === language.code}
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
