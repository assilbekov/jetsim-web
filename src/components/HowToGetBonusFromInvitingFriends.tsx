import { clsx } from "@/utils";
import { Card } from "./Card";
import { LandingContainer } from "./LandingContainer";
import {
  Typography,
  TypographyVariants,
  getTypographyClass,
  matchTypographyMediaQuery,
} from "./Typography";
import { CheckCompatibility } from "./CheckCompatibility";

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
      <p className={getTypographyClass(TypographyVariants.Caption)}>{label}</p>
    </div>
  );
};

const InstructionStep = ({ step }: { step: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex items-center justify-center rounded-full min-w-6 h-6 border-2 border-[#E6F0F2]">
        <p className={getTypographyClass(TypographyVariants.Caption)}>{step}</p>
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
      <p className={getTypographyClass(TypographyVariants.Caption)}>
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
      <p
        className={clsx(
          "text-primary-500",
          matchTypographyMediaQuery({
            default: TypographyVariants.Caption,
            md: TypographyVariants.Subheader,
          }),
          "xs:text-xl xs:leading-[26px]"
        )}
      >
        {step}
      </p>
      <h3
        className={matchTypographyMediaQuery({
          default: TypographyVariants.Caption,
          md: TypographyVariants.Subheader,
        })}
      >
        {title}
      </h3>
      {content}
    </div>
  );
};

export const HowToGetBonusFromInvitingFriends = () => {
  return (
    <LandingContainer
      className="border-t-2 border-[#E9F0F2] xxs:border-t-0"
      id="how-to"
    >
      <Card className="flex flex-col gap-5 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-4 xxs:gap-5 sm:gap-6 lg:gap-8">
          <Typography variant={TypographyVariants.H2}>
            Set up your JetSim eSIM in 1 minute
          </Typography>
          <div className="flex flex-col sm:flex-row gap-5 md:gap-8">
            <Step
              step="01"
              title="Choose your destination and select a data plan"
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
              title="Follow the instructions to install your eSIM"
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
          <div className="flex flex-col lg:flex-row gap-4 md:gap-4 lg:gap-8 w-full md:w-[60%] lg:w-3/4">
            <h3 className={getTypographyClass(TypographyVariants.Subheader)}>
              See if your phone supports eSIM technology
            </h3>
            <div>
              <p
                className={clsx(
                  "text-text-600",
                  getTypographyClass(TypographyVariants.Caption)
                )}
              >
                Most phones, tablets, and watches support eSIM. However, your
                device might only support physical SIM cards.
              </p>
              <CheckCompatibility
                label="Check compatibility"
                className="mt-3 xxs:mt-4"
              />
            </div>
          </div>
          <div className="bg-[url('/setup-esim.png')] bg-contain bg-no-repeat bg-right-bottom h-[110%] w-[32%] lg:w-[23%] absolute right-[5%] bottom-0 hidden md:block" />
        </div>
      </Card>
    </LandingContainer>
  );
};
