"use client";

import Link from "next/link";
import { LoginDialog } from "./LoginDialog";
import { useEffect, useState } from "react";
import { ApiResponse } from "@/models/ApiResponse";
import { Tokens } from "@/models/Tokens";
import { useRouter } from "next/navigation";

export const LoginLink = () => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      <div className="h-[52px] w-full sm:w-[195px] md:w-[107px] rounded-[44px] border-2 bg-text-900 border-[#EBEFF0] active:bg-[#C3D4D9] hover:bg-[#EDF1F2] active:border-[#C3D4D9] transition duration-200 ease-in-out">
        <Link
          href="#"
          className="w-full h-full flex justify-center items-center text-text-100 font-medium text-base leading-[22px]"
          onClick={(e) => {
            e.preventDefault();
            if (isLoggedIn) {
              router.push("/en/profile");
              return;
            }
            setIsDialogOpen(true);
          }}
        >
          <span>{isLoggedIn ? "My eSIMs" : "Login"}</span>
        </Link>
      </div>
      {isDialogOpen && <LoginDialog onClose={() => setIsDialogOpen(false)} />}
    </>
  );
};
