import { clsx } from "@/utils";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";
import { TypographyVariants, getTypographyClass } from "../Typography";
import Image from "next/image";

type InfoElementProps = {
  src: string;
  alt: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

const InfoElement = ({ src, alt, title, description }: InfoElementProps) => {
  return (
    <div className="flex-1">
      <Image
        loading="lazy"
        src={src}
        alt={alt}
        width={48}
        height={48}
        className="mx-auto"
      />
      <h6
        className={clsx(
          getTypographyClass(TypographyVariants.Subheader),
          "text-center mt-4"
        )}
      >
        {title}
      </h6>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Body),
          "text-center text-text-600 mt-1"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export const BeforeInstallationContent = () => {
  return (
    <div className="py-2 md:py-0">
      <h6
        className={clsx(
          getTypographyClass(TypographyVariants.Body2),
          "md:text-xl md:leading-[26px] text-text-600 text-center"
        )}
      >
        What you need to know
      </h6>
      <h5
        className={clsx(
          getTypographyClass(TypographyVariants.Subheader),
          "md:font-interTight md:text-[34px] md:leading-[38px] md:tracking-[0.68px] text-center mt-1 md:mt-2"
        )}
      >
        Before installation
      </h5>
      <div className="shrink-0 my-6 md:my-10 h-0.5 border border-solid border-[#E9F0F2]" />
      <div className="flex flex-col md:flex-row gap-8">
        <InfoElement
          src="/icons/primary/play_circle.svg"
          alt="Don't interrupt installation"
          title="Don't interrupt installation"
          description="Ensure stable internet connection for activation"
        />
        <InfoElement
          src="/icons/primary/language.svg"
          alt="Activate data roaming"
          title="Activate data roaming"
          description="to start using the internet"
        />
        <InfoElement
          src="/icons/primary/label_off.svg"
          alt="Don't delete the eSIM"
          title="Don't delete the eSIM"
          description="You can only scan the code once"
        />
      </div>
    </div>
  );
};

export function BeforeInstallation() {
  return (
    <LandingContainer>
      <Card>
        <BeforeInstallationContent />
      </Card>
    </LandingContainer>
  );
}
