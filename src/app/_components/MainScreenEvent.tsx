"use client";

import { handleMainPageScreenEvent } from "@/gtm-events";
import { useEffect } from "react";

export const MainScreenEvent = () => {
  useEffect(() => {
    handleMainPageScreenEvent();
  }, []);

  return <></>;
};
