export const clsx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function convertDateToISO(dateTimeString: string) {
  const [date] = dateTimeString.split(" ");
  const [YYYY, MM, DD] = date.split("-");

  return `${DD}.${MM}.${YYYY}`;
}

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

// - device_id (если сможем сразу раздеять уникальные посещения)
// - user_id (если есть)
// - timestamp
// - browser data - json
// - country/country_id (если есть в куках)
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
