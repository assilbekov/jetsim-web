"use client";

import { ApiResponse } from "@/models/ApiResponse";
import { Tokens } from "@/models/Tokens";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function CallbackPage() {
  const router = useRouter();
  useQuery({
    queryKey: ["callback"],
    queryFn: async () => {
      const res = await fetch(
        `https://auth.jetsim.app/api/v1/google/callback${window.location.search}&redirect=${window.location.origin}/auth/callback`
      );
      const {
        payload: { accessToken, refreshToken },
      }: ApiResponse<Tokens> = await res.json();
      const lastPage = localStorage.getItem("last_page");
      router.push(lastPage ?? "/");

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    },
    staleTime: 1000,
  });

  return <div>Loading...</div>;
}
