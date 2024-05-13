import { LandingContainer } from "./LandingContainer";

export const NoPlasticWaste = () => {
  return (
    <LandingContainer>
      <div className="w-full bg-[url('/no-waste-background.png')] bg-[bottom_50%_right_55%] bg-cover rounded-xl">
        <div className="flex flex-col justify-between h-full w-1/2 pt-12 pb-14 pl-14">
          <div className="flex flex-col gap-4">
            <p className="text-text-900 font-medium text-2xl">No more plastic waste</p>
            <h3 className="text-text-900 text-5xl leading-[58px]">
            Join us in our mission to save the planet
            </h3>
          </div>
        </div>
      </div>
    </LandingContainer>
  );
};
