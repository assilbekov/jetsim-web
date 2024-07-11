"use client";

import { createContext, useContext, useEffect, useState } from "react";

type UTM = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  //utm_content: string;
};

type UTMContextType = {
  utms: UTM | null;
  setUtms: (utms: UTM) => void;
};

const UTMContext = createContext<UTMContextType>({
  utms: null,
  setUtms: () => {},
});

export const UTMProvider = ({ children }: { children: React.ReactNode }) => {
  const [utms, setUtms] = useState<UTM | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
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
    //const utm_content = urlParams.get('utm_content');

    sessionStorage.setItem("utm_source", utm_source);
    sessionStorage.setItem("utm_medium", utm_medium);
    sessionStorage.setItem("utm_campaign", utm_campaign);
    sessionStorage.setItem("utm_term", utm_term);

    setUtms({ utm_source, utm_medium, utm_campaign, utm_term });
  }, []);

  return (
    <UTMContext.Provider value={{ utms, setUtms }}>
      {children}
    </UTMContext.Provider>
  );
};

export const useUTM = () => useContext(UTMContext);
