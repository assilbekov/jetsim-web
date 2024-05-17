import { LandingContainer } from "./LandingContainer";

export const LandingSupport = () => {
  return (
    <LandingContainer>
      <div className="w-full h-[208px] sm:h-[272px] md:h-[444px] relative bg-[url('/support-background.png')] bg-[bottom_30%_right_55%] bg-cover rounded-none sm:rounded-3xl md:rounded-xl">
        <div className="w-full h-full bg-gradient-to-br from-[rgba(55,18,0,0.2)] to-[rgba(55,18,0,0.00)] rounded-none sm:rounded-3xl md:rounded-xl">
          <div className="flex flex-col justify-between h-full w-full sm:w-1/2 p-6 md:pt-12 md:pb-14 md:pl-14">
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="text-base leading-[22px] text-center sm:text-start md:text-2xl md:leading-[28px] text-text-900 font-medium">
                Support
              </p>
              <h3 className="text-2xl leading-[30px] text-center sm:text-start font-medium md:text-5xl md:leading-[58px] text-text-900">
                Reach out to us anytime, were available 24/7
              </h3>
            </div>
            <div className="text-center sm:text-start">
              <button className="text-base leading-[22px] md:text-xl md:leading-7 py-4 px-8 md:px-6 bg-secondary-500 rounded-full text-text-900 font-medium">
                Send a message
              </button>
            </div>
          </div>
          <div className="hidden sm:block bg-[url('/support-person.png')] bg-cover sm:h-[252px] sm:w-[181px] md:h-[478px] md:w-[340px] absolute right-[12%] md:right-[10%] bottom-0" />
        </div>
      </div>
    </LandingContainer>
  );
};
