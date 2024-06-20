"use client";

import Link from "next/link";
import { LoginDialog } from "./LoginDialog";
import { useEffect, useState } from "react";
import { ApiResponse } from "@/models/ApiResponse";
import { Tokens } from "@/models/Tokens";
import { SecondaryButton } from "./buttons/SecondaryButton";
import Image from "next/image";

export const LoginLink = () => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);

    if (window.location.pathname === "/profile") {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    fetch("https://auth.jetsim.app/api/v1/check", {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((res) => {
      if (res.ok) {
        setIsLoggedIn(true);
        return;
      }

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) return;

      fetch("https://auth.jetsim.app/api/v1/renew", {
        headers: { Authorization: `Bearer ${refreshToken}` },
        method: "POST",
      }).then(async (res) => {
        if (!res.ok) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
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
        setIsLoggedIn(true);
      });
    });
  }, []);

  return (
    <>
      <div>
        {isLoggedIn ? (
          <div className="flex flex-col gap-4 md:flex-row">
            <Link href="/profile" className="w-full">
              <SecondaryButton className="pl-1 pr-1 min-w-[140px] w-full">
                My eSIMs
              </SecondaryButton>
            </Link>
            <SecondaryButton
              className="flex justify-center gap-2 pl-1 pr-1 md:min-w-[84px]"
              onClick={handleLogout}
            >
              <Image
                src="/icons/black/logout.svg"
                alt="Logout icon"
                width={20}
                height={20}
              />
              <span className="md:hidden">Log out</span>
            </SecondaryButton>
          </div>
        ) : (
          <SecondaryButton
            className="w-full"
            onClick={() => setIsLoginDialogOpen(true)}
          >
            Login
          </SecondaryButton>
        )}
      </div>
      {isLoginDialogOpen && (
        <LoginDialog
          redirectUrl="/profile"
          onClose={() => setIsLoginDialogOpen(false)}
        />
      )}
    </>
  );
};
