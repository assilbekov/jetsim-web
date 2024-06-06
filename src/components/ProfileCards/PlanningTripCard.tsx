import * as React from "react";

export function PlanningTripCard() {
  return (
    <div className="flex flex-col justify-between px-6 pt-5 pb-6 text-base font-medium bg-white rounded-3xl border-2 border-solid border-slate-200 text-slate-950 max-md:px-5">
      <div className="flex justify-center items-center px-16 py-8 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[261px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6222b05246d30831db31d68c203900689f58c3f04aa70f53aaf7b917035f536?apiKey=4d29b65bc77c4658ad8f90690919294c&"
            className="self-center w-12 aspect-square"
          />
          <div className="mx-6 mt-4 text-2xl max-md:mx-2.5">
            Planning new trip?
          </div>
          <div className="mt-2 text-gray-400 leading-[119%]">
            Buy a new plan at affordable price
          </div>
          <div className="justify-center self-center px-8 py-4 mt-4 bg-white border-2 border-solid border-slate-200 leading-[119%] rounded-[32px] max-md:px-5">
            Buy a new plan
          </div>
        </div>
      </div>
    </div>
  );
}
