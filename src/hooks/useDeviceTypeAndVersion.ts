"use client";

import { useEffect, useState } from "react";
import { useDeviceData } from "react-device-detect";

type DeviceData = {
  isIOS: boolean;
  isAndroid: boolean;
  isDesktop: boolean;
  version: string;
};

export const useDeviceTypeAndVersion = (): DeviceData => {
  const [deviceData, setDeviceData] = useState<DeviceData>({
    isIOS: false,
    isAndroid: false,
    isDesktop: true, // Default to desktop
    version: "",
  });
  const detectedData = useDeviceData(window.navigator.userAgent);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDeviceData({
        isIOS: detectedData?.os?.name === "iOS",
        isAndroid: detectedData?.os?.name === "Android",
        isDesktop:
          detectedData?.device?.type === "desktop" ||
          !detectedData?.device?.type, // Consider as desktop if type is undefined
        version: detectedData?.os?.version,
      });
    }
  }, [detectedData]);

  return deviceData;
};
