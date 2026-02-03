export const API_LIVE_URL = "https://flintmall.com.ng/api/v1";
export const API_TEST_URL = "https://billwev.pythonanywhere.com/api/v1";
export const API_BASE_URL = API_LIVE_URL;

export const API_ENDPOINTS = {
  // -------- 1. STATIC ENDPOINTS -----------

  // --- AUTHENTICATION & VERIFICATION (POST) ---
  SIGNUP: `${API_BASE_URL}/auth/register/`,
  LOGIN: `${API_BASE_URL}/auth/login/`,
  GOOGLE_SIGNIN: `${API_BASE_URL}/auth/google/`,
  SEND_PHONE_OTP: `${API_BASE_URL}/auth/send-phone-otp/`,
  VERIFY_PHONE_OTP: `${API_BASE_URL}/auth/verify-phone/`,   
  RESEND_PHONE_OTP: `${API_BASE_URL}/auth/resend-phone-otp/`, 
  RESET_PASSWORD_AUTH: `${API_BASE_URL}/auth/password/reset/`, 
  RESET_PASSWORD_OFFLINE: `${API_BASE_URL}/auth/password/reset-offline/`, 
  SEND_RESET_OTP_EMAIL: `${API_BASE_URL}/reset/password/send-email-otp/`, 
  SEND_RESET_OTP_PHONE: `${API_BASE_URL}/reset/password/send-phone-otp/`, 
  CONFIRM_RESET_OTP_PHONE: `${API_BASE_URL}/reset/password/confirm-phone/`, 
  CONFIRM_RESET_OTP_EMAIL: `${API_BASE_URL}/reset/password/confirm-email/`,

  // --- HOME & DISCOVERY (GET) ---
  HOME_DATA_AUTH: `${API_BASE_URL}/home/`,
  HOME_DATA_GUEST: `${API_BASE_URL}/home/offline/`,

  // --- CATEGORIES & ADS (GET) ---
  CATEGORIES_LIST: `${API_BASE_URL}/categories/`,
  ADS_PREMIUM: `${API_BASE_URL}/ads/premium/`, 
  ADS_TRENDING: `${API_BASE_URL}/ads/trending/`,
  AD_TYPES: `${API_BASE_URL}/ads/types/`,

  // --- USER SPECIFIC (GET) ---
  MY_SAVED_ADS: `${API_BASE_URL}/users/me/saved-ads/`,
  MY_ADS: `${API_BASE_URL}/users/me/ads/`,
  MY_CONVERSATIONS: `${API_BASE_URL}/conversations/`, 
  MY_NOTIFICATIONS: `${API_BASE_URL}/notifications/`, 

  // --- ACTIONS (POST/GET) ---
  CREATE_AD: `${API_BASE_URL}/ads/`,
  GET_ALL_MESSAGES: `${API_BASE_URL}/conversations/messages/`,
  SEND_MESSAGE: `${API_BASE_URL}/messages/send/`, 
  MARK_NOTIFICATIONS_READ: `${API_BASE_URL}/notifications/read-all/`, 


  // -------- 2. DYNAMIC ENDPOINTS ----------

  // --- CATEGORY DETAILS ---
  // Load details of a particular category
  CATEGORY_DETAILS: (id) => `${API_BASE_URL}/categories/${id}/`, 
  // Load all subcategories for a particular category
  SUBCATEGORIES: (id) => `${API_BASE_URL}/categories/${id}/subcategories/`, 
  // Load parameters of a particular category
  CATEGORY_PARAMETERS: (id) => `${API_BASE_URL}/categories/${id}/parameters/`, 

  // --- AD DETAILS & ACTIONS ---
  // Load full details of a particular ad 
  AD_DETAILS: (id) => `${API_BASE_URL}/ads/${id}/`, 
  // Load all media/photos for a particular ad 
  AD_MEDIA: (id) => `${API_BASE_URL}/ads/${id}/medias/`, 
  // Load ads similar to a particular ad 
  SIMILAR_ADS: (id) => `${API_BASE_URL}/ads/${id}/similar/`, 
  // List all reviews for a particular ad 
  AD_REVIEWS: (id) => `${API_BASE_URL}/ads/${id}/reviews/`, 
  
  // --- SAVED ADS LOGIC ---
  // Action to save an ad 
  SAVE_AD_ACTION: (id) => `${API_BASE_URL}/ads/${id}/save/`, 
  // Check if an ad is already saved by the user 
  CHECK_AD_SAVED: (id) => `${API_BASE_URL}/ads/${id}/saved/`, 
};