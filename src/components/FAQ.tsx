import { LandingContainer } from "./LandingContainer";
import { Card } from "./Card";
import { AccordionPanel } from "./AccordionPanel";
import { Typography, TypographyVariants } from "./Typography";
import Link from "next/link";
import { CheckCompatibility } from "./CheckCompatibility";

export const FAQ = () => {
  const faq = [
    {
      title: "What is an eSIM and how do you use it?",
      description:
        "An eSIM is an electronic, or virtual, SIM card. You can use it along with your physical SIM card, if necessary. To start using an eSIM, activate it by scanning a provided QR code (or use manual setup).",
    },
    {
      title: "How do I install my eSIM from JetSim?",
      description: (
        <>
          <p>
            Once you complete a purchase, you receive a QR code. Then, follow
            these steps:
          </p>
          <ol className="list-decimal ml-8">
            <li>
              Scan the QR code to activate an eSIM or use an instruction for
              manual setup.
            </li>
            <li>Turn on data roaming on your eSIM upon arrival.</li>
            <li>Use your cellular plan!</li>
          </ol>
          <p className="mt-4">
            If you can't scan the QR code, try sending it to another device or
            install it manually (instructions are provided along with the code).
          </p>
        </>
      ),
    },
    {
      title: "Can I use my eSIM on any device?",
      description: (
        <>
          JetSim eSIM is compatible with the majority of smartphones,
          smartwatches, and tablets. However, if you have any doubts, please
          check compatibility before buying an eSIM. You can check it{" "}
          <CheckCompatibility
            label="here"
            className="inline-flex items-center"
            hideIcon
          />{" "}
          or contact your cellular provider to learn more.
        </>
      ),
    },
    {
      title: "How is eSIM better than traditional SIM cards?",
      description:
        "With an eSIM, you can start using local mobile networks right upon arrival, even before going through passport control. You can buy and install an eSIM in a few minutes, without standing in long lines at the airport shops to buy a physical SIM card, and it is usually a more pocket-friendly solution. Also, no need to provide your passport for verification.",
    },
    {
      title: "Once eSIM expires, can I switch back to a physical SIM card?",
      description:
        "Yes, you can switch back to a physical SIM whenever you need it. Don't uninstall an active eSIM if you want to use it later because you can only install it once.",
    },
    {
      title: "Is eSIM secure?",
      description:
        "JetSim uses modern encryption technologies to secure the connection between your device and a cellular network.",
    },
    {
      title: "Can I use both my SIM card and an eSIM during international travel?",
      description:
        "Yes, you can use your physical SIM card and an eSIM simultaneously. Your primary phone number will remain active, and you'll be able to receive calls and SMS. However, note that you'll be charged according to your mobile operator's pricing in this case, which is why eSIM can be a more suitable option.",
    },
    {
      title: "Should I install my eSIM in advance, before the trip?",
      description:
        `Note that JetSim's data plan becomes active once you purchase it even if you don't start using it right away, so plan the use accordingly. We recommend purchasing and installing your eSIM once you arrive at your destination.
        Note that you need to connect to Wi-Fi or mobile data to install an eSIM. If you believe you may not have access to Wi-Fi when you arrive, it's better to activate your eSIM in advance.
        `,
    },
    {
      title: "Do I need to provide my ID to use a JetSim eSIM?",
      description:
        "JetSim doesn't request your ID before or after a purchase. You can buy an eSIM and start using it right away.",
    },
    {
      title: "How many times can I use my eSIM?",
      description:
        "You can use your QR code to install an eSIM only once and only on any device.",
    },
    {
      title: "Can I reinstall my eSIM?",
      description:
        "No, you can only scan the QR code once. If you uninstall your eSIM, you have to buy a new plan and install it from scratch.",
    },
  ];

  const faqLeft = faq.slice(0, Math.ceil(faq.length / 2));
  const faqRight = faq.slice(Math.ceil(faq.length / 2));
  return (
    <LandingContainer id="faq">
      <Card size="md">
        <Typography variant={TypographyVariants.H2}>
          Frequently Asked Questions
        </Typography>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-6 lg:mt-8">
          <div className="flex gap-4 flex-col flex-wrap justify-start box-border">
            {faqLeft.map((item, index) => (
              <AccordionPanel key={item.title} title={item.title} index={index}>
                {item.description}
              </AccordionPanel>
            ))}
          </div>
          <div className="flex gap-4 flex-col flex-wrap justify-start box-border">
            {faqRight.map((item, index) => (
              <AccordionPanel key={item.title} title={item.title} index={index}>
                {item.description}
              </AccordionPanel>
            ))}
          </div>
        </div>
      </Card>
    </LandingContainer>
  );
};
