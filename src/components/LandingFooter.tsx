import Image from "next/image";
import { Card } from "./Card";
import { LandingContainer } from "./LandingContainer";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5 className="text-text-100 text-xl leading-[26px] font-medium">{children}</h5>
  );
};

// TOOD: Make list element a link
const ListElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="text-text-600 text-base leading-[22px] font-medium">
      {children}
    </li>
  );
};

const ListBlock = ({ children }: { children: React.ReactNode }) => {
  return <ul className="flex flex-col gap-3">{children}</ul>;
};

const LinksBlock = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-4 w-48">{children}</div>;
};

export const LandingFooter = () => {
  return (
    <LandingContainer className="border-t border-[#E6EFF2]">
      <Card size="lg">
        <div className="flex gap-8 flex-col md:flex-row">
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
                <ListElement>Privacy policy</ListElement>
                <ListElement>Terms of Service</ListElement>
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
    </LandingContainer>
  );
};
