export const getUserIP = () => {
  let ip = localStorage.getItem("user_ip");
  if (!ip) {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        ip = data.ip as string;
        localStorage.setItem("user_ip", ip);
      });
  }
  return ip;
};

export const getUserEmail = () => {
  return localStorage.getItem("user_email");
};

export function getDeviceId(): string {
  let deviceId = localStorage.getItem("device_id");
  if (!deviceId) {
    deviceId = "device-" + Math.random().toString(36).substr(2, 16);
    localStorage.setItem("device_id", deviceId);
  }
  return deviceId;
}

function parseJwt(token: string) {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function getUserId(): string | null {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return parseJwt(accessToken).user_uuid;
  }
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

export const getDefaultFields = () => {
  return {
    ip: getUserIP(),
    email: getUserEmail(),
    device_id: getDeviceId(),
    user_id: getUserId(),
    timestamp: getTimestamp(),
    browser_data: getBrowserData(),
    country_id: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
};

// - device_id
// - user_id
// - timestamp
// - browser data - json
// - country/country_id - string
export const handleGTMEvent = (eventName: string, event?: any) => {
  setTimeout(() => {
    (window as any)?.dataLayer.push({
      event: eventName,
      ...getDefaultFields(),
      ...event,
    });
  }, 0);
};

export const trackPurchase = (data: any) => {
  const allFields = { ...getDefaultFields(), ...data };
  const localWindow: any = window;

  // Facebook Pixel
  //FacebookPixel.track("Purchase", allFields);
  // Facebook Pixel Event Tracking
  /* localWindow.fbq("track", "Purchase", {
    category: "Ecommerce",
    label: "Purchase Completed",
    //value: allFields,
    ...allFields,
  }); */

  // Google Analytics (ReactGA)
  /* ReactGA.event({
    category: 'Ecommerce',
    action: 'Purchase',
    label: 'Purchase Completed',
    value: data.value,
  }); */

  // Google Analytics
  localWindow.gtag("event", "purchase", {
    category: "Ecommerce",
    label: "Purchase Completed",
    //value: allFields,
    ...allFields,
    itemss: JSON.stringify(allFields.items),
  });
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
