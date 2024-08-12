"use client";

import { handleSuccessPaymentScreenEvent } from "@/gtm-events";
import { useEffect } from "react";

export const FinishedScreenEvent = () => {
  useEffect(() => {
    handleSuccessPaymentScreenEvent();
  }, []);

  return <></>;
};
