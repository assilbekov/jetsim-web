enum backendServices {
  AUTH = "auth",
  SIM = "sim",
}

export const clientURL =
  process.env.NODE_ENV === "production"
    ? "https://jetsim-web.vercel.app/"
    : `http://localhost:3000/`;

export const authRedirect = `${clientURL}en/auth/callback`;

const getBackendUrl = (service: backendServices) =>
  `https://${service}.jetsim.app/api/v1/`;

export const { authServiceURL, simServiceURL } = {
  authServiceURL: getBackendUrl(backendServices.AUTH),
  simServiceURL: getBackendUrl(backendServices.SIM),
};
