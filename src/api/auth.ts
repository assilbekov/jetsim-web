import { authServiceURL, authRedirect } from "@/config";

export type SocialAuthLinkResponse = {
  url: string;
};

export const getSocialAuthLink = async (
  provider: string
): Promise<SocialAuthLinkResponse> => {
  const res = await fetch(
    `${authServiceURL}${provider}/login-link?redirect=${authRedirect}`
  );
  const json = await res.json();
  return json;
};
