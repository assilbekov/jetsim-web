"use client";

import { createContext, useState } from "react";

type ZendeskContextType = {
  isChatLoaded: boolean;
  handleButtonClick: () => void;
};

export const ZendeskContext = createContext<ZendeskContextType>({
  isChatLoaded: false,
  handleButtonClick: () => {},
});

type ZendeskProviderProps = {
  children: React.ReactNode;
};

export function ZendeskProvider({ children }: ZendeskProviderProps) {
  const [isChatLoaded, setIsChatLoaded] = useState(false);

  const loadZendeskScript = () => {
    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src =
      "https://static.zdassets.com/ekr/snippet.js?key=5c4d404b-f742-403a-bd86-b941352f96fc";
    script.async = true;
    script.onload = () => {
      console.log("Zendesk Widget loaded");
      const localWindow: any = typeof window !== "undefined" ? window : null;
      setIsChatLoaded(true);
      localWindow.zE("messenger", "open");
    };
    script.onerror = () => {
      console.error("Failed to load Zendesk Widget script");
    };
    document.head.appendChild(script);
  };

  const handleButtonClick = () => {
    if (!isChatLoaded) {
      loadZendeskScript();
    } else {
      const localWindow: any = typeof window !== "undefined" ? window : null;
      localWindow.zE("messenger", "open");
      localWindow.zE("webWidget", "show");
    }
  };

  /* useEffect(() => {
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
  }, []); */

  return (
    <ZendeskContext.Provider
      value={{
        isChatLoaded,
        handleButtonClick,
      }}
    >
      {children}
    </ZendeskContext.Provider>
  );
}
