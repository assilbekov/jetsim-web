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

function extractUTMParams(urlString: string): UTMParams {
  const utmParams: UTMParams = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  };
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  // Function to extract key-value pairs from a query string
  const extractParams = (query: string) => {
    return query.split("&").reduce((params: Record<string, string>, pair) => {
      const [key, value] = pair.split("=");
      if (key && value) {
        params[decodeURIComponent(key).toLowerCase()] =
          decodeURIComponent(value);
      }
      return params;
    }, {});
  };

  // Extract all possible query strings
  const queries = urlString.split(/[?#]/).slice(1);

  // Process each query string
  queries.forEach((query) => {
    const params = extractParams(query);
    utmKeys.forEach((key) => {
      if (params[key] && !utmParams[key as keyof UTMParams]) {
        utmParams[key as keyof UTMParams] = params[key];
      }
    });
  });

  return utmParams;
}

export const UTMProvider = ({ children }: { children: React.ReactNode }) => {
  const [utms, setUtms] = useState<UTMParams | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const utmParams = extractUTMParams(window.location.href);
    setUtms(utmParams);
    localStorage.setItem("utm_source", utmParams.utm_source);
    localStorage.setItem("utm_medium", utmParams.utm_medium);
    localStorage.setItem("utm_campaign", utmParams.utm_campaign);
    localStorage.setItem("utm_term", utmParams.utm_term);
    localStorage.setItem("utm_content", utmParams.utm_content);
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
