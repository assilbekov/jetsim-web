"use client";

import { fetchLocations } from "@/api/locations";
import { Location } from "@/models/Location";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

// TODO: add variables for shadow, border
// TODO: use data type for queryInfo
export const Search = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const queryInfo = useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      return fetchLocations(query);
    },
  });

  const handleElementClick = (location: Location) => {
    setOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative z-50">
        <label
          className="md:py-4 md:px-6 px-4 py-3 bg-secondary-500 rounded-[32px] absolute right-3 top-[50%] translate-y-[-50%]"
          htmlFor="search"
        >
          <Image
            src="/airplane.svg"
            width={24}
            height={24}
            alt="airplane icon label"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </label>
        <Image
          src="/pin.svg"
          width={24}
          height={24}
          alt="pin alt"
          className="absolute left-6 md:left-9 top-[49%] translate-y-[-50%] w-5 h-5 md:w-6 md:h-6"
        />
        <input
          className="py-[18px] pl-[52px] pr-[76px] md:py-[26px] md:pl-[76px] md:pr-[90px] w-full text-base md:text-xl leading-5 md:leading-6 font-medium rounded-full border-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] border-[#EBEFF0] outline-text-600"
          type="text"
          value={query}
          id="search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Where do you go? Text"
        />
      </div>
      {open && !!queryInfo.data && (
        <ul className="p-[14px] my-4 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] rounded-3xl border-2 border-[#EBEFF0] z-50 absolute w-full bg-text-900">
          {queryInfo.data.map((location) => (
            <li
              key={location.title}
              onClick={() => handleElementClick(location)}
              className="flex gap-4 p-4 items-center hover:bg-[#EBEFF0] rounded-2xl"
            >
              <Image
                src="/timer.svg"
                width={24}
                height={24}
                alt="airplane icon label"
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xl leading-6 font-medium">
                  {location.title}
                </p>
                <p className="text-base leading-5 text-text-600">from $2/day</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {open && (
        <div className="z-10 fixed inset-0" onClick={() => setOpen(false)} />
      )}
    </div>
  );
};
