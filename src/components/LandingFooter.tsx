import Image from "next/image";
import { Card } from "./Card";
import { LandingContainer } from "./LandingContainer";
import Link from "next/link";
import { clsx } from "@/utils";
import { TypographyVariants, getTypographyClass } from "./Typography";

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
  return <div className="flex flex-col gap-4 w-48">{children}</div>;
};

type LandingFooterProps = {
  containerClassName?: string;
  cardClassName?: string;
};

export const LandingFooterContent = ({ cardClassName }: LandingFooterProps) => {
  return (
    <Card size="lg" className={clsx("sm:py-8", cardClassName ?? "")}>
      <div className="flex gap-8 flex-col lg:flex-row">
        <div className="w-1/2">
          <Image src="/logo.svg" alt="logo image" width={155} height={36} />
        </div>
        <div className="flex gap-8 flex-col sm:flex-row">
          <LinksBlock>
            <Title>Top destinations</Title>
            <ListBlock>
              <ListElement>Europe</ListElement>
              <ListElement>USA</ListElement>
              <ListElement>Turkey</ListElement>
              <ListElement>Spain</ListElement>
              <ListElement>France</ListElement>
            </ListBlock>
          </LinksBlock>
          <LinksBlock>
            <Title>Legal</Title>
            <ListBlock>
              <ListElement href="/privacy-policy">
                Privacy policy
              </ListElement>
              <ListElement href="/terms-of-service">
                Terms of Service
              </ListElement>
              <ListElement>COF Agreement</ListElement>
            </ListBlock>
          </LinksBlock>
          <LinksBlock>
            <Title>More</Title>
            <ListBlock>
              <ListElement>Blog</ListElement>
              <ListElement>About us</ListElement>
              <ListElement>Contacts</ListElement>
              <ListElement>Refund Policy</ListElement>
            </ListBlock>
          </LinksBlock>
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
