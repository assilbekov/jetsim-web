enum backendServices {
  AUTH = "auth",
  SIM = "sim",
}

const getBackendUrl = (service: backendServices) =>
  `https://${service}.jetsim.app/api/v1/`;

export const { authServiceURL, simServiceURL } = {
  authServiceURL: getBackendUrl(backendServices.AUTH),
  simServiceURL: getBackendUrl(backendServices.SIM),
};
