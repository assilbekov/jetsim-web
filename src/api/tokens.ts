import { authServiceURL, authRedirect } from "@/config";
import { Tokens } from "@/models/Tokens";

export const refreshToken = async (refreshToken: string): Promise<Tokens> => {
  const res = await fetch(`${authServiceURL}refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });
  const json = await res.json();
  return json;
};

export const getAuthSocialCallback = async (
  provider: string
): Promise<Tokens> => {
  const res = await fetch(
    `${authServiceURL}${provider}/callback${window.location.search}&redirect=${authRedirect}`
  );
  const json = await res.json();
  return json;
};
