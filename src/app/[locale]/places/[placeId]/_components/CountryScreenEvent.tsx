"use client";

import { handleCountryPageScreenEvent } from "@/gtm-events";
import { useEffect } from "react";

type CountryScreenEventProps = {
  countryId: string;
};

export const CountryScreenEvent = ({ countryId }: CountryScreenEventProps) => {
  useEffect(() => {
    handleCountryPageScreenEvent(countryId);
  }, []);

  return <></>;
};
