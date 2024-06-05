import { authServiceURL, authRedirect } from "@/config";
import { ApiResponse } from "@/models/ApiResponse";

export type SocialAuthLinkResponse = {
  link: string;
};

export const getSocialAuthLink = async (
  provider: string
): Promise<SocialAuthLinkResponse> => {
  const res = await fetch(
    `${authServiceURL}${provider}/login-link?redirect=${authRedirect}`
  );
  const json: ApiResponse<SocialAuthLinkResponse> = await res.json();
  return json.payload;
};
