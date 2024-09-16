import Image from "next/image";
import { LandingContainer } from "../LandingContainer";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { useTranslations } from "next-intl";

export const DownloadAppLandingBlock = () => {
  const t = useTranslations("DownloadAppLandingBlock");

  return (
    <LandingContainer>
      <div className="w-full bg-gradient-to-b to-[#D9F5FF] from-[#FFFFFF] rounded-none sm:rounded-[20px] flex flex-col sm:flex-row gap-8 p-6 pb-0 sm:pt-10 sm:px-12">
        <div className="sm:w-1/2 xl:w-[60%] sm:flex sm:flex-col sm:justify-between sm:pb-10">
          <div>
            <h5
              className={clsx(getTypographyClass(TypographyVariants.Subheader))}
            >
              {t("title")}
            </h5>
            <p
              className={clsx(
                getTypographyClass(TypographyVariants.Body2),
                "text-text-600 mt-3 mb-6"
              )}
            >
              {t("description")}
            </p>
          </div>
          <a href="https://apps.apple.com/app/id6504028637" target="_blank">
            <Image
              src="/images/download-app-store-app-black.png"
              alt="Download JetSim App"
              width={156}
              height={52}
            />
          </a>
        </div>
        <div className="flex justify-center relative">
          <div className="overflow-hidden h-[312px] xxs:h-[375px] mx-auto">
            <Image
              src="/images/iphone-ios-app-screenshot.png"
              alt="Download JetSim App"
              width={272}
              height={558}
              className="w-[272px] xxs:w-[327px] sm:w-[305px]"
            />
          </div>
          <div className="absolute bottom-0 right-[-140px] hidden md:block">
            <Image
              src="/images/iphone-ios-app-promotion-person.png"
              alt="Download JetSim App promotion person"
              width={156}
              height={52}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </LandingContainer>
  );
};
