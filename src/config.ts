enum backendServices {
  AUTH = "auth",
  SIM = "sim",
  GEO = "geo",
  PAYMENT = "payment",
}

export const clientURL =
  process.env.NODE_ENV === "production"
    ? "https://jetsim-web.vercel.app/"
    : `http://localhost:3000/`;

export const authRedirect = `${clientURL}en/auth/callback`;

const getBackendUrl = (service: backendServices) =>
  `https://${service}.jetsim.app/api/v1/`;

export const {
  authServiceURL,
  simServiceURL,
  geoServiceURL,
  paymentServiceURL,
} = {
  authServiceURL: getBackendUrl(backendServices.AUTH),
  simServiceURL: getBackendUrl(backendServices.SIM),
  geoServiceURL: getBackendUrl(backendServices.GEO),
  paymentServiceURL: getBackendUrl(backendServices.PAYMENT),
};
