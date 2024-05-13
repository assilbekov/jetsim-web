import Image from "next/image";
import { Card } from "./Card";
import { Header, HeadersVariant } from "./Header";
import { LandingContainer } from "./LandingContainer";
import Link from "next/link";

const Step = () => {
  return <div>Step 1</div>;
};

export const SetupJetSim = () => {
  return (
    <LandingContainer>
      <Card className="flex flex-col gap-8">
        <Header variant={HeadersVariant.H2}>
          Set up your JetSim eSIM in 1 minute
        </Header>
        <div>
          <Step />
          <Step />
          <Step />
        </div>
        <div className="bg-[#F8F9FB] py-6 px-8 rounded-xl relative overflow-visible">
          <div className="flex gap-8 w-3/4">
            <Header variant={HeadersVariant.SUBHEADER}>
              Ensure your phone is compatible with eSIM technology
            </Header>
            <div>
              <p className="text-base font-medium leading-[22px] text-[#95A2A6]">
                Most current phones, tablets, and watches support eSIM, it's
                possible your device only supports physical SIM cards
              </p>
              <Link
                href="#"
                className="flex gap-1 mt-4 text-secondary-500 text-base font-medium leading-[22px]"
              >
                Check compatibility
                <Image
                  src="/arrow-right.svg"
                  alt="arrow right"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="bg-[url('/setup-esim.png')] bg-contain bg-no-repeat bg-right-bottom h-[110%] w-[23%] absolute right-[5%] bottom-0" />
        </div>
      </Card>
    </LandingContainer>
  );
};
