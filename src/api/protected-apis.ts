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
      ...init?.headers,
    },
  });

  if (res.status === 401) {
    const newTokenRes = await fetch(
      "https://sim.jetsim.app/api/v1/auth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: localStorage.getItem("refreshToken"),
        }),
      }
    );
    const { accessToken, refreshToken }: Tokens = await newTokenRes.json();

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return await fetch(input, {
      ...init,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        ...init?.headers,
      },
    });
  }

  return res;
};
