import axios from "axios";
import { API_BASE_URL } from "./api";

const authHttp = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

authHttp.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) config.headers.Authorization = `Token ${token}`;
  return config;
});

authHttp.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.error ||
      error.response?.data?.message ||
      "Something went wrong. Please try again.";
    return Promise.reject({ ...error, message });
  }
);

export default authHttp;