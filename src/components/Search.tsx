"use client";

import { useQuery } from "@tanstack/react-query";
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
        <label htmlFor="search">Search</label>
        <input
          className="py-7 pl-[76px] w-full text-xl font-medium rounded-full border-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] border-[#EBEFF0] outline-text-600"
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
