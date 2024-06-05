"use client";

import { getSocialAuthLink } from "@/api/auth";
import { getAuthSocialCallback, refreshToken } from "@/api/tokens";
import { Tokens } from "@/models/Tokens";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useEffect } from "react";

type AuthContextType = {
  fetchProctedData: (
    callback: (...args: unknown[]) => unknown
  ) => Promise<unknown>;
  updateTokens: (tokens: Tokens) => void;
  socialLogin: (provider: string) => void;
  socialAuthCallback: (provider: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  fetchProctedData: async () => {},
  updateTokens: () => {},
  socialLogin: () => {},
  socialAuthCallback: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const socialLogin = async (provider: string) => {
    const { link } = await getSocialAuthLink(provider);
    router.push(link);
  };

  const socialAuthCallback = async (provider: string) => {
    const { accessToken, refreshToken } = await getAuthSocialCallback(provider);

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    router.push("/en/packages");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/");
  };

  const fetchProctedData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/");
    }

    const res = await fetch("https://sim.jetsim.app/api/v1/packages", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 401) {
      const _refreshToken = localStorage.getItem("refreshToken");
      if (!_refreshToken) {
        router.push("/");
        return;
      }

      const { accessToken } = await refreshToken(_refreshToken);
      localStorage.setItem("accessToken", accessToken);
      fetchProctedData();
    }
  };

  const updateTokens = (tokens: Tokens) => {
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        fetchProctedData,
        socialLogin,
        socialAuthCallback,
        logout,
        updateTokens,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
