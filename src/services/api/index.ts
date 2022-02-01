import Axios from "axios";
import camelCaseKeys from "camelcase-keys";
import snakeCaseKeys from "snakecase-keys";

const RIBON_API = "https://api.ribon.io";

export const baseURL = process.env.REACT_APP_RIBON_API || RIBON_API;
export const API_SCOPE = "/api/v1";

const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

api.interceptors.request.use((request) =>
  request?.data
    ? { ...request, data: snakeCaseKeys(request?.data, { deep: true }) }
    : request,
);

api.interceptors.response.use(
  (response) => ({
    ...response,
    data: camelCaseKeys(response.data, { deep: true }),
  }),
  (error) => Promise.reject(error),
);

api.interceptors.request.use((config) => {
  const authHeaders = {};
  // eslint-disable-next-line no-param-reassign
  config.headers = { ...authHeaders, ...config.headers };

  return config;
});

export default api;
