"use client";

import { handleProfileScreenEvent } from "@/gtm-events";
import { useEffect } from "react";

export const ProfileScreenEvent = () => {
  useEffect(() => {
    handleProfileScreenEvent();
  }, []);

  return <></>;
};
