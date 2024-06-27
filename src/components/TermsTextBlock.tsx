import { clsx } from "@/utils";
import { Card } from "./Card";
import { LandingContainer } from "./LandingContainer";
import { TypographyVariants, getTypographyClass } from "./Typography";

type InfoBlock = {
  header: string;
  content: React.ReactNode[];
};

type TermsTextBlockProps = {
  title: string;
  lastUpdated: string;
  infoBlocks: InfoBlock[];
};

export const TermsTextBlock = ({
  title,
  lastUpdated,
  infoBlocks,
}: TermsTextBlockProps) => {
  return (
    <Card className="border border-[#E6EFF2] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] rounded-[20px] lg:px-[120px] lg:py-12 xxl:px-[240px]">
      <div className="flex flex-col gap-4 xs:gap-5 sm:gap-4 lg:gap-5">
        <h1
          className={clsx(
            getTypographyClass(TypographyVariants.Subheader),
            "xxs:font-interTight xxs:text-[34px] xxs:leading-[38px] xxs:font-medium xxs:tracking-[0.68px]",
            "lg:text-[56px] lg:leading-[64px] lg:font-interTight lg:tracking-[1.12px]"
          )}
        >
          {title}
        </h1>
        <p
          className={clsx(
            getTypographyClass(TypographyVariants.Caption),
            "lg:font-inter lg:text-xl lg:leading-[26px] lg:font-medium text-text-600"
          )}
        >
          Effective Date: {lastUpdated}
        </p>
        <div className="flex flex-col gap-4 xs:gap-5 sm:gap-4 lg:gap-5">
          {infoBlocks.map((block) => (
            <div
              key={block.header}
              className="flex flex-col gap-4 xs:gap-5 sm:gap-4 lg:gap-5"
            >
              {block.header && (
                <h3
                  className={clsx(
                    getTypographyClass(TypographyVariants.Body),
                    "xxs:font-inter xxs:text-2xl xxs:leading-[30px] xxs:font-medium"
                  )}
                >
                  {block.header}
                </h3>
              )}
              <ul className="flex flex-col gap-4 xs:gap-5 sm:gap-4 lg:gap-5">
                {block.content.map((content, index) => (
                  <li
                    key={index}
                    className={clsx(
                      getTypographyClass(TypographyVariants.Caption),
                      "lg:font-inter lg:text-xl lg:leading-[26px] lg:font-medium"
                    )}
                  >
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
