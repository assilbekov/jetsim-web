"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const router = useRouter();
  useQuery({
    queryKey: ["callback"],
    queryFn: async () => {
      const res = await fetch(
        `https://auth.jetsim.app/api/v1/google/callback${window.location.search}&redirect=http://localhost:3000/auth/callback`
      );
      const json = await res.json();
      const lastPage = localStorage.getItem("last_page");
      router.push(lastPage ?? "/");
      console.log({ json, lastPage });
      return

      const { accessToken, refreshToken } = json;
      const simRes = await fetch(`https://sim.jetsim.app/api/v1/packages`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const simJson = await simRes.json();
      console.log(simJson);
      debugger;
    },
    staleTime: 1000,
  });

  return (
    <div>
      <h1>Callback: {JSON.stringify({})}</h1>
      <h1>Search param: {JSON.stringify({})}</h1>
    </div>
  );
}
