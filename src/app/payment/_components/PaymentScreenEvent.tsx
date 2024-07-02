"use client";

import { handlePaymentScreenEvent } from "@/gtm-events";
import { useEffect } from "react";

export const PaymentScreenEvent = () => {
  useEffect(() => {
    handlePaymentScreenEvent();
  }, []);

  return <></>;
};
