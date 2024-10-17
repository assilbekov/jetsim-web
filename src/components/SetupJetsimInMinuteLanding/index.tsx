"use client";

import React, { useRef, useState, useEffect } from "react";
import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import { useTranslations } from "next-intl";
import {
  getTypographyClass,
  Typography,
  TypographyVariants,
} from "../Typography";
import { StepBlock } from "./StepBlock";
import { StepContent } from "./StepContent";
import Image from "next/image";
import { clsx } from "@/utils";
import { CheckCompatibilityButton } from "../CheckCompatibility";

interface Step {
  number: number;
  title: string;
  content: React.ReactNode;
}

export const SetupJetsimInMinuteLanding: React.FC = () => {
  const t = useTranslations("SetupJetSim");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      checkScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount =
        direction === "left" ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const steps: Step[] = [
    {
      number: 1,
      title: t("step01Title"),
      content: (
        <StepContent>
          <Image
            src="/images/setup-jetsim-langing-1.png"
            alt="Setup Jetsim Langing 1"
            width={368}
            height={323}
            className="w-"
          />
        </StepContent>
      ),
    },
    {
      number: 2,
      title: t("step02Title"),
      content: (
        <StepContent>
          <Image
            src="/images/setup-jetsim-langing-2.png"
            alt="Setup Jetsim Langing 2"
            width={368}
            height={323}
          />
        </StepContent>
      ),
    },
    {
      number: 3,
      title: t("step03Title"),
      content: (
        <StepContent>
          <Image
            src="/images/setup-jetsim-langing-3.png"
            alt="Setup Jetsim Langing 3"
            width={368}
            height={323}
          />
        </StepContent>
      ),
    },
  ];

  return (
    <LandingContainer id="how-to">
      <Card className="flex flex-col gap-5 md:gap-6 lg:gap-8">
        <Typography variant={TypographyVariants.H2}>{t("title")}</Typography>
        <div className="hidden md:flex gap-4">
          {steps.map((step, index) => (
            <StepBlock
              key={index}
              step={step.number}
              title={step.title}
              content={step.content}
            />
          ))}
        </div>
        <div className="relative md:hidden">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide"
          >
            <div
              className="flex w-full justify-between gap-6"
              style={{ width: "max-content" }}
            >
              {steps.map((step, index) => (
                <StepBlock
                  key={index}
                  step={step.number}
                  title={step.title}
                  content={step.content}
                />
              ))}
            </div>
          </div>
          {canScrollLeft && (
            <button
              onClick={() => scrollTo("left")}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full p-2 border-[1.375px] border-[#E9F0F2] hover:bg-[#EBEFF0] active:bg-[#C3D4D9] cursor-pointer hover:border-[#EBEFF0] active:border-[#C3D4D9] transition duration-200 ease-in-out"
            >
              <Image
                src="/icons/black/chevron-right-black.svg"
                alt="Arrow left"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scrollTo("right")}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full p-2 border-[1.375px] border-[#E9F0F2] hover:bg-[#EBEFF0] active:bg-[#C3D4D9] cursor-pointer hover:border-[#EBEFF0] active:border-[#C3D4D9] transition duration-200 ease-in-out"
            >
              <Image
                src="/icons/black/chevron-right-black.svg"
                alt="Arrow right"
                width={24}
                height={24}
              />
            </button>
          )}
        </div>
        <div className="bg-[#F8F9FB] p-4 xxs:p-6 md:px-8 rounded-xl relative overflow-visible">
          <div className="flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-8 w-full">
            <h3 className={clsx(getTypographyClass(TypographyVariants.Subheader), "md:w-[30%]")}>
              {t("checkCompatibilityTitle")}
            </h3>
            <p
              className={clsx(
                "text-text-600 md:w-[40%]",
                getTypographyClass(TypographyVariants.Caption)
              )}
            >
              {t("checkCompatibilityDescription")}
            </p>
            <CheckCompatibilityButton
              label={t("checkCompatibilityButtonLabel")}
              className="mt-3 xxs:mt-4 md:w-[30%] max-h-[52px] flex items-center justify-center"
            />
          </div>
        </div>
      </Card>
    </LandingContainer>
  );
};
