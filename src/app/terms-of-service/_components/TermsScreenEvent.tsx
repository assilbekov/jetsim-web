"use client";

import { handleTermsScreenEvent } from "@/gtm-events";
import { useEffect } from "react";

export const TermsScreenEvent = () => {
  useEffect(() => {
    handleTermsScreenEvent();
  }, []);

  return <></>;
};
