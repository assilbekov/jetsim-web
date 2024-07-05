import { authServiceURL, authRedirect } from "@/config";
import { ApiResponse } from "@/models/ApiResponse";
import { Profile } from "@/models/Profile";
import { fetchProtected } from "./protected-apis";

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

export const getProfile = async (): Promise<Profile> => {
  const res = await fetchProtected(`${authServiceURL}user`);
  const json: ApiResponse<Profile> = await res.json();
  return json.payload;
};
