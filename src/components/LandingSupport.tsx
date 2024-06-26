import { clsx } from "@/utils";
import { LandingContainer } from "./LandingContainer";
import {
  TypographyVariants,
  getTypographyClass,
  matchTypographyMediaQuery,
} from "./Typography";
import Image from "next/image";
import { SupportButton } from "./SupportButton";

export const LandingSupport = () => {
  return (
    <LandingContainer>
      <div className="w-full h-[208px] sm:h-[272px] md:h-[276px] lg:h-[340px] xxl:h-[416px] relative bg-[url('/support-background.png')] bg-[bottom_30%_right_55%] bg-cover rounded-none sm:rounded-3xl md:rounded-xl">
        <div className="w-full h-full bg-gradient-to-br from-[rgba(55,18,0,0.2)] to-[rgba(55,18,0,0.00)] rounded-none sm:rounded-3xl md:rounded-xl">
          <div className="flex flex-col justify-between h-full w-full sm:w-1/2 py-6 px-4 sm:p-8 sm:pr-0 md:py-6 lg:pt-12 md:pl-14 lg:pl-12 lg:pb-12">
            <div className="flex flex-col gap-2">
              <p
                className={clsx(
                  "text-center sm:text-start text-text-900",
                  matchTypographyMediaQuery({
                    default: TypographyVariants.Caption,
                    md: TypographyVariants.Body,
                  }),
                  "xxl:text-2xl xxl:leading-[30px]"
                )}
              >
                Support
              </p>
              <h3
                className={clsx(
                  "text-center sm:text-start text-text-900",
                  matchTypographyMediaQuery({
                    default: TypographyVariants.Subheader,
                    md: TypographyVariants.H2,
                  }),
                  "xxl:font-interTight xxl:text-[56px] xxl:leading-[64px] xxl:tracking-[1.12px]"
                )}
              >
                Reach out to us anytime, were available 24/7
              </h3>
            </div>
            <div className="text-center sm:text-start">
              <SupportButton>
                <button
                  className={clsx(
                    "py-4 px-8 md:px-6 bg-secondary-500 active:bg-secondary-300 hover:bg-secondary-700 rounded-full text-text-900 transition duration-200 ease-in-out",
                    getTypographyClass(TypographyVariants.Caption)
                  )}
                >
                  Send a message
                </button>
              </SupportButton>
            </div>
          </div>
          <div className="hidden sm:block bg-[url('/support-person.png')] bg-cover sm:h-[252px] sm:w-[181px] md:h-[290px] md:w-[207px] lg:h-[355px] lg:w-[255px] xxl:h-[434px] xxl:w-[308px] absolute right-[12%] bottom-0" />
          {/* <Image src="/support-person.png" alt="support person image" style={{objectFit: "cover"}} width={255} height={434} className="hidden sm:block sm:h-[252px] sm:w-[181px] md:h-[290px] md:w-[207px] lg:h-[355px] lg:w-[255px] xxl:h-[434px] xxl:w-[308px] absolute right-[12%] bottom-0" /> */}
        </div>
      </div>
    </LandingContainer>
  );
};
