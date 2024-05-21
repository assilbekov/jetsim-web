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
    <div className="flex flex-col sm:mt-auto gap-6 p-4 md:p-6 bg-text-900 rounded-lg">
      {children}
    </div>
  );
};

const Step = ({ step, title, content }: StepProps) => {
  return (
    <div className="flex flex-col gap-3 xs:gap-4 p-4 xs:py-5 xs:px-6 md:gap-6 md:p-8 rounded-xl bg-[#F8F9FB]">
      <p className="font-base md:text-[24px] font-medium leading-[22px] md:leading-[28px] text-primary-500">
        {step}
      </p>
      <h3 className="font-base md:text-[24px] font-medium leading-[22px] md:leading-[28px] text-text-100">
        {title}
      </h3>
      {content}
    </div>
  );
};

export const SetupJetSim = () => {
  return (
    <LandingContainer className="border-t-2 border-[#E9F0F2] xxs:border-t-0">
      <Card className="flex flex-col gap-5 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-4 xxs:gap-5 sm:gap-6 lg:gap-8">
          <Header variant={HeadersVariant.H2}>
            Set up your JetSim eSIM in 1 minute
          </Header>
          <div className="flex flex-col sm:flex-row gap-5 md:gap-8">
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
                <div className="flex flex-col gap-4 p-4 md:p-6 pb-1 bg-text-900 rounded-lg">
                  <DataRoamingActive />
                  <div className="h-0.5 w-full bg-[#E6F0F2]" />
                  <DataRoaming />
                  <div className="h-0.5 w-full bg-[#E6F0F2]" />
                  <DataRoaming />
                </div>
              }
            />
          </div>
        </div>
        <div className="bg-[#F8F9FB] p-4 xxs:p-6 md:px-8 rounded-xl relative overflow-visible">
          <div className="flex flex-col gap-4 md:gap-4 lg:gap-8 w-full md:w-[60%] lg:w-3/4">
            <h3 className="text-2xl font-medium leading-[30px] text-text-100">
              Ensure your phone is compatible with eSIM technology
            </h3>
            <div>
              <p className="text-base font-medium leading-[22px] text-[#95A2A6]">
                Most current phones, tablets, and watches support eSIM, its
                possible your device only supports physical SIM cards
              </p>
              <Link
                href="#"
                className="flex group gap-1 mt-3 xxs:mt-4 text-secondary-500 hover:text-secondary-300 text-base font-medium leading-[22px] transition duration-200 ease-in-out"
              >
                Check compatibility
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="arrow right">
                    <path
                      id="background"
                      d="M13.625 10.75H4.5V9.25H13.625L9.4375 5.0625L10.5 4L16.5 10L10.5 16L9.4375 14.9375L13.625 10.75Z"
                      className="fill-secondary-500 group-hover:fill-secondary-300 transition duration-200 ease-in-out"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
          <div className="bg-[url('/setup-esim.png')] bg-contain bg-no-repeat bg-right-bottom h-[110%] w-[32%] lg:w-[23%] absolute right-[5%] bottom-0 hidden md:block" />
        </div>
      </Card>
    </LandingContainer>
  );
};
