"use client";

import { LoginDialog } from "../LoginDialog";
import { useEffect, useState } from "react";
import { ApiResponse } from "@/models/ApiResponse";
import { Tokens } from "@/models/Tokens";
import { handleLoginScreenEvent } from "@/gtm-events";
import { getProfile } from "@/api/auth";

type AuthContainerProps = {
  locale: string;
  renderProps: ({}: {
    handleLogout: () => void;
    handleLoginClick: () => void;
    isLoggedIn: boolean;
  }) => React.ReactNode;
};

export const AuthContainer = ({ locale, renderProps }: AuthContainerProps) => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);

    if (window.location.pathname === `/${locale}/profile`) {
      window.location.href = `/${locale}`;
    }
  };

  const getUserProfile = async () => {
    getProfile(locale).then((profile) => {
      localStorage.setItem("user_email", profile.email);
      localStorage.setItem("user_id", profile.id);
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      handleLogout();
      return;
    }

    fetch("https://auth.jetsim.app/api/v1/check", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Accept-Language": locale,
      },
    }).then((res) => {
      if (res.ok) {
        setIsLoggedIn(true);
        getUserProfile();
        return;
      }

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        handleLogout();
        return;
      }

      fetch("https://auth.jetsim.app/api/v1/renew", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
          "Accept-Language": locale,
        },
        method: "POST",
      }).then(async (res) => {
        if (!res.ok) {
          handleLogout();
          return;
        }

        if (res.ok) {
          setIsLoggedIn(true);
        }

        const {
          payload: { accessToken, refreshToken },
        }: ApiResponse<Tokens> = await res.json();
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        getUserProfile();
        setIsLoggedIn(true);
      });
    });
  }, []);

  const handleLoginClick = () => {
    // This should be tracked on the BE. Maybe
    // (window as any)?.dataLayer.push({ event: "registration" });
    setIsLoginDialogOpen(true);
    handleLoginScreenEvent();
  };

  return (
    <>
      {renderProps({ handleLoginClick, handleLogout, isLoggedIn })}
      {isLoginDialogOpen && (
        <LoginDialog
          redirectUrl={`/${locale}/profile`}
          onClose={() => setIsLoginDialogOpen(false)}
        />
      )}
    </>
  );
};
