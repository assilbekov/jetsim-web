"use client";

import { useEffect } from "react";

export const SupportButton = (props: { children: React.ReactNode }) => {
  // ignore types for now.
  const localWindow: any = typeof window !== "undefined" ? window : null;

  useEffect(() => {
    // Ensure Zendesk widget is loaded
    if (typeof localWindow !== "undefined" && localWindow.zE) {
      console.log("Zendesk Widget is loaded");
    } else {
      console.log("Zendesk Widget is not loaded");
    }
  }, []);

  const handleSupportClick = () => {
    if (localWindow.zE) {
      localWindow.zE("webWidget", "open");
    } else {
      console.error("Zendesk Widget is not loaded");
    }
  };
  return <div onClick={handleSupportClick}>{props.children}</div>;
};
