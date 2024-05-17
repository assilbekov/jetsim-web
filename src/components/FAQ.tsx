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
    {
      title: "Is eSIM secure?",
      description:
        "eSIM is designed with security in mind and offers several security features to protect your cellular plan and personal information. eSIM uses a secure element to store your SIM profile securely, and it encrypts communication between your device and the cellular network. eSIM also provides additional security features, such as remote SIM provisioning and the ability to lock your eSIM remotely in case of theft or loss.",
    },
    {
      title: "Can I use eSIM for international travel?",
      description:
        "Yes, you can use eSIM for international travel. eSIM allows you to add an extra line for traveling abroad, so you can use a local cellular plan while keeping your primary number active. This can help you avoid expensive roaming charges and stay connected while traveling. Many cellular providers offer international eSIM plans that provide data, voice, and text services in multiple countries.",
    },
    {
      title: "How do I know if my device supports eSIM?",
      description:
        "Most modern smartphones, tablets, smartwatches, and laptops support eSIM. To check if your device supports eSIM, you can refer to the manufacturer's specifications or contact the manufacturer directly. You can also check with your cellular provider to see if they offer eSIM plans and if your device is compatible with their eSIM service.",
    },
    {
      title: "Can I use eSIM with any cellular provider?",
      description:
        "eSIM is supported by a wide range of cellular providers worldwide. However, not all cellular providers offer eSIM plans, so it's essential to check if your provider supports eSIM before purchasing an eSIM plan. You can contact your cellular provider to inquire about their eSIM offerings and verify if your device is compatible with their eSIM service.",
    },
    {
      title: "How do I switch my cellular plan to eSIM?",
      description:
        "To switch your cellular plan to eSIM, you need to contact your cellular provider and request an eSIM activation. Your provider will provide you with a QR code that contains the necessary information to activate your eSIM. Once you scan the QR code, your eSIM will be activated, and you can start using your cellular plan on your device. Your provider may also offer assistance in transferring your existing number and plan to eSIM.",
    },
    {
      title: "Can I use eSIM with a prepaid plan?",
      description:
        "Yes, you can use eSIM with a prepaid plan. Many cellular providers offer eSIM plans for prepaid customers, allowing you to activate and manage your prepaid plan on your device using eSIM. With eSIM, you can enjoy the flexibility of prepaid plans without the need for a physical SIM card. You can contact your cellular provider to inquire about their eSIM offerings for prepaid customers.",
    },
  ];

  const faqLeft = faq.slice(0, Math.ceil(faq.length / 2));
  const faqRight = faq.slice(Math.ceil(faq.length / 2));
  return (
    <LandingContainer>
      <Card size="md">
        <Header variant={HeadersVariant.H2}>Frequently Asked Questions</Header>
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
