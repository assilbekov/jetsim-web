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

const InstructionStep = ({ step }: { step: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex items-center justify-center rounded-full min-w-6 h-6 border-2 border-[#E6F0F2]">
        <p className="font-base leading-4 font-medium">{step}</p>
      </div>
      <div className="w-full h-3 rounded-full bg-[#E6F0F2]" />
    </div>
  );
};

const DisabledToggle = ({ checked }: { checked: boolean }) => {
  return (
    <label className="inline-flex items-center cursor-default">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        disabled
        checked={checked}
      />
      <div className="relative w-10 h-6 bg-[rgba(120,120,128,0.16)] rounded-full peer dark:bg-text-900 peer-checked:after:translate-x-[82%] rtl:peer-checked:after:-translate-x-[82%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-text-900 after:border-text-900 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-text-900 peer-checked:bg-secondary-500"></div>
    </label>
  );
};

const DataRoaming = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-full h-4 rounded-full bg-[#E6F0F2]" />
      <DisabledToggle checked={false} />
    </div>
  );
};

const DataRoamingActive = () => {
  return (
    <div className="flex gap-4 items-center justify-between">
      <p className="font-base font-medium text-text-100 leading-[22px]">
        Data roaming
      </p>
      <DisabledToggle checked />
    </div>
  );
};

type StepProps = {
  step: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
};

const StepContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-text-900 rounded-lg">
      {children}
    </div>
  );
};

const Step = ({ step, title, content }: StepProps) => {
  return (
    <div className="flex flex-col gap-6 p-8 rounded-xl bg-[#F8F9FB]">
      <h3 className="text-[24px] font-medium leading-[28px] text-primary-500">
        {step}
      </h3>
      <Header variant={HeadersVariant.SUBHEADER}>{title}</Header>
      {content}
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
              <StepContent>
                <SelectDataPlan label="5 gb" selected />
                <SelectDataPlan label="15 gb" selected={false} />
                <SelectDataPlan label="30 gb" selected={false} />
              </StepContent>
            }
          />
          <Step
            step="02"
            title="Follow the instruction and install eSIM"
            content={
              <StepContent>
                <InstructionStep step="1" />
                <InstructionStep step="2" />
                <InstructionStep step="3" />
              </StepContent>
            }
          />
          <Step
            step="03"
            title="Activate your data roaming on arrival"
            content={
              <div className="flex flex-col gap-4 p-6 pb-1 bg-text-900 rounded-lg">
                <DataRoamingActive />
                <div className="h-0.5 w-full bg-[#E6F0F2]" />
                <DataRoaming />
                <div className="h-0.5 w-full bg-[#E6F0F2]" />
                <DataRoaming />
              </div>
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
