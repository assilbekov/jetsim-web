import Image from "next/image";
import { Card } from "./Card";
import { Header, HeadersVariant } from "./Header";
import { LandingContainer } from "./LandingContainer";
import Link from "next/link";

type SelectDataPlanProps = {
  selected: boolean;
  label: React.ReactNode;
};

const SelectDataPlan = ({ selected, label }: SelectDataPlanProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-center rounded-full w-6 h-6 border-2 border-[#E6F0F2]">
        {selected && <div className="bg-secondary-500 w-2 h-2 rounded-full" />}
      </div>
      <p>{label}</p>
    </div>
  );
};

type StepProps = {
  step: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
};

const Step = ({ step, title, content }: StepProps) => {
  return (
    <div className="flex flex-col gap-6 p-8 rounded-xl bg-[#F8F9FB]">
      <h3 className="text-[24px] font-medium leading-[28px] text-primary-500">
        {step}
      </h3>
      <Header variant={HeadersVariant.SUBHEADER}>{title}</Header>
      <div className="flex flex-col gap-6 p-6 bg-text-900 rounded-lg">
        {content}
      </div>
    </div>
  );
};

export const SetupJetSim = () => {
  return (
    <LandingContainer>
      <Card className="flex flex-col gap-8">
        <Header variant={HeadersVariant.H2}>
          Set up your JetSim eSIM in 1 minute
        </Header>
        <div className="flex gap-8">
          <Step
            step="01"
            title="Choose destination and select data plan"
            content={
              <>
                <SelectDataPlan label="5 gb" selected />
                <SelectDataPlan label="15 gb" selected={false} />
                <SelectDataPlan label="30 gb" selected={false} />
              </>
            }
          />
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
