import * as React from "react";

export function ProfileCard() {
  return (
    <div className="flex flex-col justify-between px-6 pt-5 pb-6 bg-white rounded-3xl border-2 border-solid border-slate-200 max-w-[588px] max-md:px-5">
      <div className="flex gap-4 font-medium max-md:flex-wrap">
        <div className="flex flex-col flex-1 max-md:max-w-full">
          <div className="text-2xl text-slate-950 max-md:max-w-full">
            Turkey
          </div>
          <div className="mt-1 text-base leading-5 text-gray-400 max-md:max-w-full">
            Expires in 4 days
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b3fa2ceeaf60cb3c683d0f16de7db8e7b01612fe5477afbc942b840f808245a?apiKey=4d29b65bc77c4658ad8f90690919294c&"
          className="shrink-0 my-auto w-10 aspect-square"
        />
      </div>
      <div className="flex gap-3 mt-20 text-2xl font-medium text-slate-950 max-md:flex-wrap max-md:mt-10">
        <div className="flex-1 max-md:max-w-full">14,32 GB</div>
        <div>16,00</div>
      </div>
      <div className="flex gap-3 mt-3 max-md:flex-wrap">
        <div className="flex-1 shrink-0 h-1.5 bg-sky-500 rounded-[100px]" />
        <div className="flex-1 shrink-0 h-1.5 bg-sky-500 rounded-[100px]" />
        <div className="flex-1 shrink-0 h-1.5 bg-sky-500 rounded-[100px]" />
        <div className="flex-1 shrink-0 h-1.5 rounded-[100px]" />
        <div className="flex-1 shrink-0 h-1.5 bg-slate-200 rounded-[100px]" />
      </div>
      <div className="flex gap-4 mt-6 text-base font-medium leading-5 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-1 justify-center items-center px-8 py-4 text-white bg-orange-600 rounded-[32px] max-md:px-5">
          Buy new plan
        </div>
        <div className="flex-1 justify-center items-center px-8 py-4 bg-white border-2 border-solid border-slate-200 rounded-[32px] text-slate-950 max-md:px-5">
          View details
        </div>
      </div>
    </div>
  );
}