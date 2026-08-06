import authHttp from "./authHttp";
import { API_ENDPOINTS } from "./api";

export const adminRegister = async ({ full_name, username, email, password, password2 }) => {
  const { data } = await authHttp.post(API_ENDPOINTS.ADMIN_REGISTER, {
    full_name, username, email, password, password2,
  });
  if (data.token) localStorage.setItem("adminToken", data.token);
  if (data.user) localStorage.setItem("adminUser", JSON.stringify(data.user));
  return data;
};

export const adminLogin = async ({ username, password }) => {
  const { data } = await authHttp.post(API_ENDPOINTS.ADMIN_LOGIN, {
    username, password,
  });
  if (data.token) localStorage.setItem("adminToken", data.token);
  if (data.user) localStorage.setItem("adminUser", JSON.stringify(data.user));
  return data;
};

export const adminLogout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
};

// Reads the cached admin user from localStorage. Returns null if not signed in
// or if the stored value is somehow corrupted.
export const getStoredAdminUser = () => {
  try {
    const raw = localStorage.getItem("adminUser");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const adminForgotPassword = async ({ email }) => {
  const { data } = await authHttp.post(API_ENDPOINTS.ADMIN_FORGOT_PASSWORD, { email });
  return data;
};

export const adminResetPassword = async ({ email, password, password2 }) => {
  const { data } = await authHttp.post(API_ENDPOINTS.ADMIN_RESET_PASSWORD, {
    email,
    password,
    password2,
  });
  return data;
};

export const getDashboardStats = async () => {
  const { data } = await authHttp.get(`${API_ENDPOINTS.ADMIN_DASHBOARD}`);
  console.log(data)
  return data;
};

export const getAllUsers = async () => {
  const { data } = await authHttp.get(API_ENDPOINTS.ADMIN_USERS_LIST);
  return data;
};

export const getUserDetails = async (id) => {
  const { data } = await authHttp.get(API_ENDPOINTS.ADMIN_USER_DETAILS(id));
  return data;
};

export const blockUser = async (id) => {
  const { data } = await authHttp.post(API_ENDPOINTS.ADMIN_BLOCK_USER(id));
  return data;
};

export const getAllAds = async () => {
  const { data } = await authHttp.get(API_ENDPOINTS.ADMIN_ADS_LIST);
  return data;
};

export const getAdDetails = async (id) => {
  const { data } = await authHttp.get(API_ENDPOINTS.ADMIN_AD_DETAILS(id));
  return data;
};

export const approveAd = async (id) => {
  const { data } = await authHttp.post(API_ENDPOINTS.ADMIN_APPROVE_AD(id));
  console.log(data)
  return data;
};

export const rejectAd = async (id) => {
  const { data } = await authHttp.post(API_ENDPOINTS.ADMIN_REJECT_AD(id));
  console.log(data)
  return data;
};

export const confirmResetOtp = async ({ email, otp_code }) => {
  const { data } = await authHttp.post(API_ENDPOINTS.ADMIN_CONFIRM_RESET_OTP, {
    email,
    otp_code,
  });
  return data;
};