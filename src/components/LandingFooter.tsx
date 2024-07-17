import Image from "next/image";
import { Card } from "./Card";
import { LandingContainer } from "./LandingContainer";
import Link from "next/link";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "./Typography";
import { fetchTopCountries } from "@/api/locations";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5 className={getTypographyClass(TypographyVariants.Body)}>{children}</h5>
  );
};

// TOOD: Make list element a link
const ListElement = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <li
      className={clsx(
        "text-text-600 hover:text-text-300 transition duration-200 ease-in-out",
        getTypographyClass(TypographyVariants.Caption)
      )}
    >
      <Link href={href || "#"}>{children}</Link>
    </li>
  );
};

const ListBlock = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex flex-col gap-3">{children}</ul>;
};

const LinksBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 w-full lg:min-w-[260px]">
      {children}
    </div>
  );
};

const AddressBlock = ({ className }: { className: string }) => {
  return (
    <p
      className={clsx(
        getTypographyClass(TypographyVariants.Caption),
        "text-text-600 w-full",
        className ?? ""
      )}
    >
      <p>GIBCO LTD,</p>
      <p>27 OLD GLOUCESTER STREET LONDON UNITED KINGDOM WC1N 3AX</p>
      <p>Company number 14246904</p>
    </p>
  );
};

type LandingFooterProps = {
  containerClassName?: string;
  cardClassName?: string;
};

export const LandingFooterContent = async ({
  cardClassName,
}: LandingFooterProps) => {
  const topCountriesRes = await fetchTopCountries(5);
  return (
    <Card size="lg" className={clsx("sm:py-8", cardClassName ?? "")}>
      <div className="flex gap-8 flex-col lg:flex-row lg:justify-between">
        <div className="w-1/2 flex flex-col justify-between">
          <Image src="/logo.svg" alt="logo image" width={155} height={36} />
          <AddressBlock className="hidden lg:block" />
        </div>
        <div className="flex gap-8 flex-col sm:flex-row">
          <LinksBlock>
            <Title>Top destinations</Title>
            <ListBlock>
              {topCountriesRes.data.map((country) => (
                <ListElement
                  key={country.placeID}
                  href={`/places/${country.placeID}`}
                >
                  {country.title}
                </ListElement>
              ))}
            </ListBlock>
          </LinksBlock>
          <LinksBlock>
            <Title>Legal</Title>
            <ListBlock>
              <ListElement href="/privacy-policy">Privacy Policy</ListElement>
              <ListElement href="/terms-of-service">
                Terms of Service
              </ListElement>
            </ListBlock>
          </LinksBlock>
          <AddressBlock className="lg:hidden" />
        </div>
      </div>
    </Card>
  );
};

export const LandingFooter = ({
  cardClassName,
  containerClassName,
}: LandingFooterProps) => {
  return (
    <LandingContainer
      className={clsx(
        "border-t border-[#E6EFF2] sm:border-none",
        containerClassName ?? ""
      )}
    >
      <LandingFooterContent cardClassName={cardClassName} />
    </LandingContainer>
  );
};
