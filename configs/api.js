import { getCookie, setCookie } from "@/utils/cookie";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    // console.log(request)
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginalRequest = error.config;
    console.log(error);
    if (error.response.status === 401 && !orginalRequest._retry) {
      orginalRequest._retry = true;
      const res = await getNewTokens();
      if (res?.response?.status === 201) {
        setCookie("accessToken", res?.response?.data.accessToken, 3000);
        setCookie("refreshToken", res?.response?.data.refreshToken, 3600);
        return api(orginalRequest);
      } else {
        setCookie("accessToken", "", 0);
        setCookie("refreshToken", "", 0);
      }
    }
    return Promise.reject(error.response.data);
  }
);

export default api;

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/refresh-token`,
      { refreshToken }
    );
    return { response };
  } catch (error) {
    return { error };
  }
};
