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
export const handleGTMEvent = (eventName: string, event?: any) => {
  setTimeout(() => {
    const defaultFields = {
      device_id: getDeviceId(),
      user_id: getUserId(),
      timestamp: getTimestamp(),
      browser_data: getBrowserData(),
      country_id: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    (window as any)?.dataLayer.push({
      event: eventName,
      ...defaultFields,
      ...event,
    });
  }, 0);
};

export const handleMainPageScreenEvent = () => {
  handleGTMEvent("main_screen");
};

export const handleMainPageCountryClickEvent = (countryId: string) => {
  handleGTMEvent("main_country_click", { counry_page: countryId });
};

export const handleCountryPageScreenEvent = (countryId: string) => {
  handleGTMEvent("country_screen", { counry_page: countryId });
};

export const handleCountryPageCheckoutEvent = (
  countryId: string,
  package_id: string
) => {
  handleGTMEvent("country_checkout_click", {
    counry_page: countryId,
    tariff: package_id,
  });
};

export const handleLoginScreenEvent = () => {
  handleGTMEvent("login_screen");
};

export const handleLoginEmailClickEvent = () => {
  handleGTMEvent("login_email_click");
};

export const handleLoginEmailCodeClickEvent = () => {
  handleGTMEvent("login_email_second_click");
};

export const handleLoginGoogleClickEvent = () => {
  handleGTMEvent("login_google_click");
};

export const handleLoginAppleClickEvent = () => {
  handleGTMEvent("login_apple_click");
};

export const handlePaymentScreenEvent = () => {
  handleGTMEvent("payment_screen");
};

export const handlePaymentMethodClickEvent = (payment_type: string) => {
  handleGTMEvent("payment_click", { payment_type });
};

export const handleSuccessPaymentScreenEvent = () => {
  handleGTMEvent("finished_payment_screen");
};

export const handleSuccessPaymentManualClick = () => {
  handleGTMEvent("finished_payment_manual_click");
};

export const handleSuccessPaymentInstructionClick = () => {
  handleGTMEvent("finished_payment_instruction_click");
};

export const handleInstructionsScreenEvent = () => {
  handleGTMEvent("instruction_screen");
};

export const handleTermsScreenEvent = () => {
  handleGTMEvent("terms_screen");
};

export const handleProfileScreenEvent = () => {
  handleGTMEvent("profile_screen");
};

export const handleProfileInstallClickEvent = () => {
  handleGTMEvent("profile_install_click");
};

export const handleProfileBuyClickEvent = () => {
  handleGTMEvent("profile_buy_click");
};

export const handleProfileCountryClickEvent = (countryId: string) => {
  handleGTMEvent("profile_country_click", { county_page: countryId });
};
