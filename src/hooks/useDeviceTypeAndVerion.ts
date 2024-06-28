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
    isIOS: deviceData.os.name === "iOS",
    isAndroid: deviceData.os.name === "Android",
    isDesktop: deviceData.device.type !== "mobile",
    version: deviceData.os.version,
  };
};
