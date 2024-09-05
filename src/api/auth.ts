import { authServiceURL, authRedirect } from "@/config";
import { ApiResponse } from "@/models/ApiResponse";
import { Profile } from "@/models/Profile";
import { fetchProtected } from "./protected-apis";
import { isoLanguagesMap } from "@/i18n";

export type SocialAuthLinkResponse = {
  link: string;
};

export const getSocialAuthLink = async (
  provider: string,
  locale: string
): Promise<SocialAuthLinkResponse> => {
  const res = await fetch(
    `${authServiceURL}${provider}/login-link?redirect=${authRedirect}`,
    {
      headers: {
        "Accept-Language": locale || "en-US",
      },
    }
  );
  const json: ApiResponse<SocialAuthLinkResponse> = await res.json();
  return json.payload;
};

export const getProfile = async (locale: string): Promise<Profile> => {
  const res = await fetchProtected(`${authServiceURL}user`, {
    headers: {
      "Accept-Language": locale || "en-US",
    },
  });
  const json: ApiResponse<Profile> = await res.json();
  return json.payload;
};

export const setUserLanguage = async (locale: string): Promise<void> => {
  await fetchProtected(
    "https://auth.jetsim.app/api/v1/user/settings/language",
    {
      body: JSON.stringify({
        languageISOCode:
          isoLanguagesMap[locale as keyof typeof isoLanguagesMap] ?? "",
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale,
      },
      method: "PUT",
    }
  );
};
