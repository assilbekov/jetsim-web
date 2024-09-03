"use client";

import { getProfile, setUserLanguage } from "@/api/auth";
import { UTMContext } from "@/contexts/UTMContext";
import { ApiResponse } from "@/models/ApiResponse";
import { Tokens } from "@/models/Tokens";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const { utmsSearchParams } = useContext(UTMContext);
  useQuery({
    queryKey: ["callback"],
    queryFn: async () => {
      const locale = localStorage.getItem("last_locale") || "en-US";
      const res = await fetch(
        `https://auth.jetsim.app/api/v1/google/callback${
          window.location.search
        }&redirect=${window.location.origin}/auth/callback${
          utmsSearchParams ? `&${utmsSearchParams}` : ""
        }`,
        { headers: { "Accept-Language": locale } }
      );
      const {
        payload: { accessToken, refreshToken, meta },
      }: ApiResponse<Tokens> = await res.json();
      const lastPage = localStorage.getItem("last_page");

      if (meta?.newUser) {
        (window as any)?.dataLayer.push({ event: "registration" });
      }

      router.push(lastPage ?? "/");

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      setUserLanguage(locale);

      getProfile(locale).then((profile) => {
        localStorage.setItem("user_email", profile.email);
        localStorage.setItem("user_id", profile.id);
      });
    },
    staleTime: 1000,
  });

  return <div>Loading...</div>;
}
