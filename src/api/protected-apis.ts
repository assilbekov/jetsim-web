import { ApiResponse } from "@/models/ApiResponse";
import { Tokens } from "@/models/Tokens";

type Fetch = (
  input: string | URL | globalThis.Request,
  init?: RequestInit
) => Promise<Response>;

export const fetchProtected: Fetch = async (input, init) => {
  const res = await fetch(input, {
    ...init,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (res.status === 401) {
    const newTokenRes = await fetch("https://auth.jetsim.app/api/v1/renew", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
      },
      body: JSON.stringify({
        refreshToken: localStorage.getItem("refreshToken"),
      }),
    });
    const {
      payload: { accessToken, refreshToken },
    }: ApiResponse<Tokens> = await newTokenRes.json();

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return await fetch(input, {
      ...init,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }

  return res;
};
