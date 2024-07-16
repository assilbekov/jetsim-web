"use client";

import { ZendeskContext } from "@/contexts/ZendeskProvider";
import { useContext } from "react";

export const SupportButton = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isZendeskLoaded = useContext(ZendeskContext);
  // ignore types for now.
  const localWindow: any = typeof window !== "undefined" ? window : null;

  const handleSupportClick = () => {
    try {
      const launcher = document.getElementById('launcher');
      
      if (launcher) {
        launcher.style.display = 'block';
      }

      if (isZendeskLoaded && localWindow.zE) {
        localWindow.zE("messenger", "open");
      } else {
        console.error("Zendesk Widget is not loaded");
      }
    } catch (error) {
      console.error("Error opening Zendesk Widget:", error);
    }
  };

  return (
    <div onClick={handleSupportClick} className={props.className}>
      {props.children}
    </div>
  );
};
