import { useDeviceData } from "react-device-detect";

type DeviceData = {
  isIOS: boolean;
  isAndroid: boolean;
  isDesktop: boolean;
  version: string;
};

export const useDeviceTypeAndVerion = (): DeviceData => {
  const deviceData = useDeviceData(window.navigator.userAgent);

  return {
    isIOS: deviceData.osName === "iOS",
    isAndroid: deviceData.osName === "Android",
    isDesktop: deviceData.deviceType === "desktop",
    version: deviceData.osVersion,
  };
};
