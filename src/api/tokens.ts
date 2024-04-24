export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export const refreshToken = async (refreshToken: string): Promise<Tokens> => {
  const res = await fetch(`https://auth.jetsim.app/api/v1/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });
  const json = await res.json();
  return json;
};
