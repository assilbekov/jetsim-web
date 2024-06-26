"use client";

import { ZendeskContext } from "@/contexts/ZendeskProvider";
import { useContext } from "react";

export const SupportButton = (props: { children: React.ReactNode }) => {
  const isZendeskLoaded = useContext(ZendeskContext);
  // ignore types for now.
  const localWindow: any = typeof window !== "undefined" ? window : null;

  const handleSupportClick = () => {
    try {
      if (isZendeskLoaded && localWindow.zE) {
        localWindow.zE("webWidget", "open");
      } else {
        console.error("Zendesk Widget is not loaded");
      }
    } catch (error) {
      console.error("Error opening Zendesk Widget:", error);
    }
  };

  return <div onClick={handleSupportClick}>{props.children}</div>;
};
