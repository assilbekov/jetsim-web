"use client";

import { fetchLocations, fetchTopCountries } from "@/api/locations";
import { Location } from "@/models/Location";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// TODO: add variables for shadow, border
// TODO: use data type for queryInfo
export const Search = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const queryInfo = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: async () => {
      return fetchLocations(debouncedQuery);
    },
    staleTime: 1000 * 60 * 60,
  });
  const topCountriesInfo = useQuery({
    queryKey: ["topCountries"],
    queryFn: async () => {
      return fetchTopCountries(11);
    },
    staleTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleElementClick = (location: Location) => {
    setOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative z-50">
        <label
          className="flex items-center justify-center h-[54px] w-[84px] md:py-4 md:px-6 px-4 py-3 bg-secondary-500 rounded-[32px] absolute right-2 md:right-4 top-[50%] translate-y-[-50%] hover:bg-secondary-700 active:bg-[#620] cursor-pointer transition duration-150 ease-in-out"
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
          className="absolute hidden xxs:block left-6 md:left-9 top-[49%] translate-y-[-50%] w-5 h-5 md:w-6 md:h-6"
        />
        <input
          className="py-[24px] pl-[24px] xxs:pl-[56px] pr-[76px] md:py-[26px] md:pl-[76px] md:pr-[90px] w-full text-base md:text-xl leading-5 md:leading-6 font-medium rounded-full border-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] border-[#EBEFF0] outline-text-600"
          type="text"
          value={query}
          id="search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Where do you go?"
        />
      </div>
      {open && !!queryInfo.data && !!topCountriesInfo.data && (
        <ul className="p-[14px] my-4 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] rounded-3xl border-2 border-[#EBEFF0] z-50 absolute w-full bg-text-900">
          {(queryInfo.data?.length
            ? queryInfo.data
            : topCountriesInfo.data.data.slice(0, 4)
          ).map((location) => (
            <Link key={location.title} href={`/en/places/${location.placeID}`}>
              <li
                onClick={() => handleElementClick(location)}
                className="flex gap-4 p-4 items-center hover:bg-[#EBEFF0] rounded-xl cursor-pointer transition duration-200 ease-in-out"
              >
                <div className="min-w-10 min-h-10 flex items-center rounded-full">
                  <Image
                    src={`https://hatscripts.github.io/circle-flags/flags/${location.countryCode.toLowerCase()}.svg`}
                    width={40}
                    height={40}
                    alt={`flag of ${location.countryCode}`}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xl leading-6 font-medium">
                    {location.title}
                  </p>
                  <p className="text-base leading-5 text-text-600">
                    from $2/day
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
      {open && (
        <div className="z-10 fixed inset-0" onClick={() => setOpen(false)} />
      )}
    </div>
  );
};
