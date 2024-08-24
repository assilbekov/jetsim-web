import { authServiceURL, authRedirect } from "@/config";
import { ApiResponse } from "@/models/ApiResponse";
import { Tokens } from "@/models/Tokens";

export const refreshToken = async (refreshToken: string): Promise<Tokens> => {
  const res = await fetch(`${authServiceURL}refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en-US",
    },
    body: JSON.stringify({ refreshToken }),
  });
  const json: ApiResponse<Tokens> = await res.json();
  return json.payload;
};

export const getAuthSocialCallback = async (
  provider: string
): Promise<Tokens> => {
  const res = await fetch(
    `${authServiceURL}${provider}/callback${window.location.search}&redirect=${authRedirect}`,
    {
      headers: {
        "Accept-Language": "en-US",
      },
    }
  );
  const json: ApiResponse<Tokens> = await res.json();
  return json.payload;
};
