import { LandingContainer } from "../LandingContainer";
import { Card } from "../Card";
import { AccordionPanel } from "../AccordionPanel";
import { Typography, TypographyVariants } from "../Typography";

type FAQRendererProps = {
  header: React.ReactNode;
  faq: {
    title: React.ReactNode;
    description: React.ReactNode;
  }[];
};

export const FAQRenderer = ({ header, faq }: FAQRendererProps) => {
  const faqLeft = faq.slice(0, Math.ceil(faq.length / 2));
  const faqRight = faq.slice(Math.ceil(faq.length / 2));
  return (
    <LandingContainer id="faq">
      <Card size="md">
        <Typography variant={TypographyVariants.H2}>{header}</Typography>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-6 lg:mt-8">
          <div className="flex gap-4 flex-col flex-wrap justify-start box-border w-full">
            {faqLeft.map((item, index) => (
              <AccordionPanel key={index} title={item.title} index={index}>
                {item.description}
              </AccordionPanel>
            ))}
          </div>
          <div className="flex gap-4 flex-col flex-wrap justify-start box-border w-full">
            {faqRight.map((item, index) => (
              <AccordionPanel key={index} title={item.title} index={index}>
                {item.description}
              </AccordionPanel>
            ))}
          </div>
        </div>
      </Card>
    </LandingContainer>
  );
};
