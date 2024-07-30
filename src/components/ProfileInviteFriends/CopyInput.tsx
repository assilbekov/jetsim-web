"use client";

import { clsx } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { TypographyVariants, getTypographyClass } from "../Typography";

type CopyInputProps = {
  value: string;
};

export const CopyInput = ({ value }: CopyInputProps) => {
  const [content, setContent] = useState("Copy");

  return (
    <div className="relative">
      <label
        className="flex items-center justify-center h-[56px] w-[56px] xxs:w-[84px] md:py-4 md:px-6 px-4 py-3 bg-secondary-500 rounded-[32px] absolute right-0.5 md:right-4 top-[50%] translate-y-[-50%] hover:bg-secondary-700 active:bg-[#620] cursor-pointer transition duration-150 ease-in-out"
        htmlFor="copy-invite-link"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setContent("Copied!");
          setTimeout(() => setContent("Copy"), 500);
        }}
      >
        {content === "Copied!" ? (
          <p
            className={clsx(
              getTypographyClass(TypographyVariants.Caption),
              "absolute text-white text-xs md:text-sm"
            )}
          >
            Copied!
          </p>
        ) : (
          <Image
            src="/icons/white/copy.svg"
            width={24}
            height={24}
            alt="airplane icon label"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        )}
      </label>
      <input
        className="py-[18px] xxs:py-[22px] pl-[24px] xxs:pl-8 pr-[76px] md:py-[26px] md:pr-[90px] w-full text-base md:text-xl leading-5 md:leading-6 font-medium rounded-full border-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] border-[#EBEFF0] outline-text-600"
        type="text"
        id="copy-invite-link"
        placeholder={value}
        autoComplete="off"
        disabled
      />
    </div>
  );
};
