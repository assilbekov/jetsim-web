import { clsx } from "@/utils";
import { Card } from "../Card";
import { LandingContainer } from "../LandingContainer";
import { TypographyVariants, getTypographyClass } from "../Typography";
import { Search } from "../Search";

export const AllDestinations = () => {
  return (
    <LandingContainer>
      <Card>
        <h1
          className={clsx(
            getTypographyClass(TypographyVariants.H2),
            "md:font-interTight md:text-[56px] md:leading-[64px] md:font-medium md:tracking-[1.12px] text-center"
          )}
        >
          All destinations
        </h1>
        <h3
          className={clsx(
            getTypographyClass(TypographyVariants.Body),
            "md:text-2xl md:leading-[30px] text-center mt-4 mb-6 md:m-9"
          )}
        >
          Explore data plans across 150+ countries for seamless and secure
          internet access on the go
        </h3>
        <Search />
      </Card>
    </LandingContainer>
  );
};
