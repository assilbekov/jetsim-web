import { LandingContainer } from "./LandingContainer";

export const LandingSupport = () => {
  return (
    <LandingContainer>
      <div className="w-full h-[444px] relative bg-[url('/support-background.png')] bg-[bottom_30%_right_55%] bg-cover rounded-xl">
        <div className="w-full h-full bg-gradient-to-br from-[rgba(55,18,0,0.2)] to-[rgba(55,18,0,0.00)] rounded-xl">
          <div className="flex flex-col justify-between h-full w-1/2 pt-12 pb-14 pl-14">
            <div className="flex flex-col gap-4">
              <p className="text-text-900 font-medium text-2xl">Support</p>
              <h3 className="text-text-900 text-5xl leading-[58px]">
                Reach out to us anytime, were available 24/7
              </h3>
            </div>
            <div>
              <button className="bg-secondary-500 py-4 px-6 rounded-full text-text-900 text-xl leading-7 font-medium">
                Send a message
              </button>
            </div>
          </div>
          <div className="bg-[url('/support-person.png')] bg-cover h-[478px] w-[340px] absolute right-[10%] bottom-0" />
        </div>
      </div>
    </LandingContainer>
  );
};
