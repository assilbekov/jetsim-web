"use client";

import { ZendeskContext } from "@/contexts/ZendeskProvider";
import { useContext } from "react";

export const SupportButton = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  const {handleButtonClick} = useContext(ZendeskContext);
  return (
    <div onClick={handleButtonClick} className={props.className}>
      {props.children}
    </div>
  );
};
