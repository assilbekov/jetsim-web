import { clsx } from "@/utils";
import { matchTypographyMediaQuery, TypographyVariants } from "../Typography";

type StepBlockProps = {
  step: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
};

//lg:w-[330px] xl:w-[352px] xxl:w-[412px]
export const StepBlock = ({ step, title, content }: StepBlockProps) => {
  return (
    <div className="w-[212px] xxs:w-[257px] md:w-full p-4 pb-0 xxs:p-6 xxs:pb-0 rounded-xl bg-[#F8F9FB] flex flex-col gap-6 md:gap-10 justify-between relative">
      <div>
        <p
          className={clsx(
            "text-primary-500",
            matchTypographyMediaQuery({
              default: TypographyVariants.Caption,
              md: TypographyVariants.Subheader,
            }),
            "xs:text-xl xs:leading-[26px]"
          )}
        >
          {step}
        </p>
        <h3
          className={clsx(
            matchTypographyMediaQuery({
              default: TypographyVariants.Caption,
              md: TypographyVariants.Subheader,
            }),
            "mt-4 xxs:mt-3 md:mt-4"
          )}
        >
          {title}
        </h3>
      </div>
      {content}
      <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-b from-[rgba(248,249,251,0.00)] to-[#F8F9FB]" />
    </div>
  );
};
