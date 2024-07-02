export function getDeviceId(): string {
  let deviceId = localStorage.getItem("device_id");
  if (!deviceId) {
    deviceId = "device-" + Math.random().toString(36).substr(2, 16);
    localStorage.setItem("device_id", deviceId);
  }
  return deviceId;
}

export function getUserId(): string | null {
  return localStorage.getItem("user_id");
}

export function getTimestamp(): string {
  return new Date().toISOString();
}

export function getBrowserData(): string {
  return JSON.stringify({
    userAgent: navigator.userAgent,
    language: navigator.language || (navigator as any)?.userLanguage,
    screenResolution: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    platform: navigator.platform,
    cookiesEnabled: navigator.cookieEnabled,
    javaEnabled: navigator.javaEnabled(),
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
}

// - device_id
// - user_id
// - timestamp
// - browser data - json
// - country/country_id - string
export const handleGTMEvent = (eventName: string, event: any) => {
  const defaultFields = {
    device_id: getDeviceId(),
    user_id: getUserId(),
    timestamp: getTimestamp(),
    browser_data: getBrowserData(),
  };

  (window as any)?.dataLayer.push({
    event: eventName,
    ...defaultFields,
    ...event,
  });
};
