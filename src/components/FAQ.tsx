import { Header, HeadersVariant } from "./Header";
import { LandingContainer } from "./LandingContainer";
import { Card } from "./Card";
import { AccordionPanel } from "./AccordionPanel";

export const FAQ = () => {
  const faq = [
    {
      title: "What is an eSIM and how to get use of JetSim?",
      description:
        "eSIM, or embedded SIM (the same as a digital SIM card, electronic SIM card, or virtual SIM card), is a cloud-based mobile number that allows users to activate and manage multiple cellular plans on a single device. It eliminates the need for a physical SIM card and provides the convenience of having multiple cellular providers on a single device. eSIM also offers additional features, such as the ability to add an extra line for traveling abroad and separate data plans for personal and business purposes.",
    },
    {
      title: "How do I activate my eSIM?",
      description:
        "To activate your eSIM, you need to scan a QR code provided by your cellular provider. The QR code contains the necessary information to activate your eSIM, such as your phone number and plan details. Once you scan the QR code, your eSIM will be activated, and you can start using your cellular plan on your device.",
    },
    {
      title: "Can I use eSIM on any device?",
      description:
        "eSIM is supported on a wide range of devices, including smartphones, tablets, smartwatches, and laptops. However, not all devices are eSIM compatible, so it's essential to check if your device supports eSIM before purchasing an eSIM plan. Most modern devices support eSIM, but it's always best to verify with the manufacturer or cellular provider.",
    },
    {
      title: "What are the benefits of using eSIM?",
      description:
        "eSIM offers several benefits over traditional SIM cards, including the ability to activate and manage multiple cellular plans on a single device, the convenience of not having to swap physical SIM cards, and the flexibility to add an extra line for traveling abroad. eSIM also provides additional security features, such as remote SIM provisioning and the ability to lock your eSIM remotely in case of theft or loss.",
    },
    {
      title: "Can I switch back to a physical SIM card after using eSIM?",
      description:
        "Yes, you can switch back to a physical SIM card after using eSIM. Most devices that support eSIM also have a physical SIM card slot, allowing you to switch between eSIM and physical SIM cards as needed. If you decide to switch back to a physical SIM card, you can contact your cellular provider to obtain a physical SIM card and activate it on your device.",
    },
  ];
  return (
    <LandingContainer>
      <Card>
        <Header variant={HeadersVariant.H2}>Frequently Asked Questions</Header>
        <div className="mt-8 flex gap-4 flex-col flex-wrap justify-start box-border">
          {faq.map((item, index) => (
            <AccordionPanel key={item.title} title={item.title} index={index}>
              {item.description}
            </AccordionPanel>
          ))}
        </div>
      </Card>
    </LandingContainer>
  );
};
