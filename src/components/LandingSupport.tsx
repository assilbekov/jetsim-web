import { LandingContainer } from "./LandingContainer";

export const LandingSupport = () => {
  return (
    <LandingContainer>
      <div className="w-full h-[208px] sm:h-[272px] md:h-[276px] lg:h-[340px] xxl:h-[416px] relative bg-[url('/support-background.png')] bg-[bottom_30%_right_55%] bg-cover rounded-none sm:rounded-3xl md:rounded-xl">
        <div className="w-full h-full bg-gradient-to-br from-[rgba(55,18,0,0.2)] to-[rgba(55,18,0,0.00)] rounded-none sm:rounded-3xl md:rounded-xl">
          <div className="flex flex-col justify-between h-full w-full sm:w-1/2 p-6 sm:p-8 sm:pr-4 md:py-6 lg:pt-12 md:pl-14 lg:pl-12 lg:pb-12">
            <div className="flex flex-col gap-2">
              <p className="text-base leading-[22px] text-center sm:text-start lg:text-xl lg:leading-[26px] xxl:text-2xl xxl:leading-[28px] text-text-900 font-medium">
                Support
              </p>
              <h3 className="text-2xl leading-[30px] text-center sm:text-start font-medium md:text-[34px] md:leading-[38px] lg:text-[34px] lg:leading-[38px] xxl:text-5xl xxl:leading-[58px] text-text-900">
                Reach out to us anytime, were available 24/7
              </h3>
            </div>
            <div className="text-center sm:text-start">
              <button className="text-base leading-[22px] md:text-xl md:leading-7 py-4 px-8 md:px-6 bg-secondary-500 rounded-full text-text-900 font-medium">
                Send a message
              </button>
            </div>
          </div>
          <div className="hidden sm:block bg-[url('/support-person.png')] bg-cover sm:h-[252px] sm:w-[181px] md:h-[290px] md:w-[207px] lg:h-[355px] lg:w-[255px] xxl:h-[434px] xxl:w-[308px] absolute right-[12%] bottom-0" />
        </div>
      </div>
    </LandingContainer>
  );
};
