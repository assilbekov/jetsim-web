"use client";

import { createContext, useContext, useEffect, useState } from "react";

type UTMParams = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
};

type UTMContextType = {
  utms: UTMParams | null;
  utmsSearchParams: string;
};

export const UTMContext = createContext<UTMContextType>({
  utms: null,
  utmsSearchParams: "",
});

const getUtmParam = (urlParams: URLSearchParams, utmTag: string) => {
  let utmVal = urlParams.get(utmTag);

  if (utmVal) {
    sessionStorage.setItem(utmTag, utmVal);
    return utmVal;
  }

  return sessionStorage.getItem(utmTag) || "";
};

export const UTMProvider = ({ children }: { children: React.ReactNode }) => {
  const [utms, setUtms] = useState<UTMParams | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: getUtmParam(urlParams, "utm_source"),
      utm_medium: getUtmParam(urlParams, "utm_medium"),
      utm_campaign: getUtmParam(urlParams, "utm_campaign"),
      utm_term: getUtmParam(urlParams, "utm_term"),
      utm_content: getUtmParam(urlParams, "utm_content"),
    };
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const newUtms = {
      utm_source: getUtmParam(urlParams, "utm_source"),
      utm_medium: getUtmParam(urlParams, "utm_medium"),
      utm_campaign: getUtmParam(urlParams, "utm_campaign"),
      utm_term: getUtmParam(urlParams, "utm_term"),
      utm_content: getUtmParam(urlParams, "utm_content"),
    };
    setUtms(newUtms);
  }, []);

  const utmsSearchParams = utms
    ? Object.entries(utms)
        .map(([k, v]) => (v ? `${k}=${v}` : ""))
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
