"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type UTM = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  //utm_content: string;
};

type UTMContextType = {
  utms: UTM | null;
  utmsSearchParams: string;
};

export const UTMContext = createContext<UTMContextType>({
  utms: null,
  utmsSearchParams: "",
});

export const UTMProvider = ({ children }: { children: React.ReactNode }) => {
  const [utms] = useState<UTM | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const urlParams = new URLSearchParams(window?.location.search);
    const utm_source =
      urlParams.get("utm_source") || sessionStorage.getItem("utm_source") || "";
    const utm_medium =
      urlParams.get("utm_medium") || sessionStorage.getItem("utm_medium") || "";
    const utm_campaign =
      urlParams.get("utm_campaign") ||
      sessionStorage.getItem("utm_campaign") ||
      "";
    const utm_term =
      urlParams.get("utm_term") || sessionStorage.getItem("utm_term") || "";

    return { utm_source, utm_medium, utm_campaign, utm_term };
  });

  const utmsSearchParams = utms
    ? Object.entries(utms)
        .map(([k, v]) => {
          if (v) {
            return `${k}=${v}`;
          }
          return "";
        })
        .filter(Boolean)
        .join("&")
    : "";

  return (
    <UTMContext.Provider value={{ utms, utmsSearchParams }}>
      {children}
    </UTMContext.Provider>
  );
};

export const useUTM = () => useContext(UTMContext);
