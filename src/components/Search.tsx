"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

export const Search = () => {
  const [query, setQuery] = useState("");
  const queryInfo = useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      if (!query) return [];
      const response = await fetch(
        `https://sim.jetsim.app/api/v1/locations?query=${query}`
      );
      return response.json();
    },
  });

  return (
    <div>
      <div className="relative">
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
          className="absolute left-9 top-[49%] translate-y-[-50%] w-5 h-5 md:w-6 md:h-6"
        />
        <input
          className="py-[26px] pl-[76px] pr-[90px] w-full text-xl font-medium rounded-full border-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] border-[#EBEFF0] outline-text-600 leading-6"
          type="text"
          value={query}
          id="search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search for a location"
        />
      </div>
      <ul>
        {queryInfo.data?.map((location: any) => (
          <li key={location.title}>{location.title}</li>
        ))}
      </ul>
    </div>
  );
};
