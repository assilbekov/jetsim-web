"use client";

import { handleAllDestinationsScreenEvent } from "@/gtm-events";
import { useEffect } from "react";

export const AllDestinationsScreenEvent = () => {
  useEffect(() => {
    handleAllDestinationsScreenEvent();
  }, []);

  return <></>;
};
