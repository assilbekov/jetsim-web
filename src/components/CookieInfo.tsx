"use client";

import { useEffect, useState } from "react";
import { SecondaryButton } from "./buttons/SecondaryButton";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "./Typography";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export const CookieInfo = () => {
  const t = useTranslations();
  const [isCookieAccepted, setIsCookieAccepted] = useState(true);

  useEffect(() => {
    const isCookieAccepted = localStorage.getItem("isCookieAccepted");
    if (!isCookieAccepted) {
      setIsCookieAccepted(false);
    }
  }, []);

  if (isCookieAccepted) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 bg-white w-full md:w-[650px] md:right-6 md:bottom-6 md:border-[1px] md:rounded-xl flex justify-between items-center gap-4 border-t-[1px] border-[#E6EFF2] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] px-6 py-4 z-[10]">
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Caption),
          "text-text-600"
        )}
      >
        {t.rich("CookieInfo_message", {
          privacyPolicy: (
            <Link
              href="/privacy-policy"
              className="underline text-text-600 hover:text-text-300 transition-colors duration-200 ease-in-out"
            >
              {t("CookieInfo_privacyPolicy")}
            </Link>
          ) as any,
        })}
      </p>
      <SecondaryButton
        className="pt-3 pb-3 text-sm leading-[18px] md:text-sm md:leading-[18px]"
        onClick={() => {
          localStorage.setItem("isCookieAccepted", "true");
          setIsCookieAccepted(true);
        }}
      >
        {t("CookieInfo_closeButton")}
      </SecondaryButton>
    </div>
  );
};
