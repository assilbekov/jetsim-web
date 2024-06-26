"use client";

import { createContext, useState, useEffect } from "react";

export const ZendeskContext = createContext(false);

type ZendeskProviderProps = {
  children: React.ReactNode;
};

export function ZendeskProvider({ children }: ZendeskProviderProps) {
  const [isZendeskLoaded, setIsZendeskLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src =
      "https://static.zdassets.com/ekr/snippet.js?key=5c4d404b-f742-403a-bd86-b941352f96fc";
    script.async = true;
    script.onload = () => {
      console.log("Zendesk Widget loaded");
      setIsZendeskLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load Zendesk Widget script");
    };
    document.head.appendChild(script);
  }, []);

  return (
    <ZendeskContext.Provider value={isZendeskLoaded}>
      {children}
    </ZendeskContext.Provider>
  );
}
