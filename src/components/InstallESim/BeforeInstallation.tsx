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
    <div>
      <Image loading="lazy" src={src} alt={alt} width={48} height={48} />
      <h6
        className={clsx(
          getTypographyClass(TypographyVariants.Subheader),
          "text-center"
        )}
      >
        {title}
      </h6>
      <p
        className={clsx(
          getTypographyClass(TypographyVariants.Body),
          "text-center text-text-600"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export function BeforeInstallation() {
  return (
    <LandingContainer>
      <Card>
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
            "md:font-interTight md:text-[34px] md:leading-[38px] md:tracking-[0.68px] text-center mt-1 md:mt-3"
          )}
        >
          Before installation
        </h5>
        <div className="shrink-0 my-6 md:my-10 h-0.5 border border-solid border-[#E9F0F2]" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aeca28351a6a1412f7993d69a50b1b7f597c42453a0b45de337a5a1bbee60bb?apiKey=4d29b65bc77c4658ad8f90690919294c&"
          className="self-center mt-6 w-12 aspect-square"
        />
        <div className="mt-4 text-slate-950">Don’t interrupt installation</div>
        <div className="mt-1 text-xl leading-7">
          Ensure stable internet connection for activation
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e2bd1110925a648e8c940824125dcd9c4785af342e7b3604cb4dfea98c1bb35?apiKey=4d29b65bc77c4658ad8f90690919294c&"
          className="self-center mt-8 w-12 aspect-square"
        />
        <div className="mt-4 text-slate-950">Activate Data Roaming</div>
        <div className="mt-1 text-xl leading-7">
          to start using the internet
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f93443058bd09fc3ea6ea318a02a7d4d772108274ed61186c12b6c5b3a9d2b4f?apiKey=4d29b65bc77c4658ad8f90690919294c&"
          className="self-center mt-8 w-12 aspect-square"
        />
        <div className="mt-4 text-slate-950">Don’t delete the eSIM</div>
        <div className="mt-1 text-xl leading-7">
          You can only scan the code once
        </div>
      </Card>
    </LandingContainer>
  );
}
