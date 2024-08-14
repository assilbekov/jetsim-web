export const sendAnalyticsEvent = async (eventName: string, event?: any) => {
  const { device_id } = event;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "User-Agent": navigator.userAgent,
    "Device-Id": device_id,
  };

  const userToken = localStorage.getItem("accessToken");
  if (userToken) {
    headers["Authorization"] = `Bearer ${userToken}`;
  }

  await fetch("https://user-event.jetsim.app/api/v1/event", {
    headers,
    method: "POST",
    body: JSON.stringify({
      event: eventName,
      params: event,
    }),
  });
  debugger
};
