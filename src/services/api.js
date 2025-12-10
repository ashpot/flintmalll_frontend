export const API_LIVE_URL = "https://flintmall.com/api/v1/rest-auth";
export const API_LOCAL_URL = "http://127.0.0.1:8000/api/v1/rest-auth";
export const API_TEST_URL = "https://billwev.pythonanywhere.com/api/v1/rest-auth";

export const API_BASE_URL = API_TEST_URL;

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/signin/`,
  HOMEDATA: `${API_BASE_URL}/home/`,
  HOMEDATA_OFFLINE: `${API_BASE_URL}/home_offline/`,
  SIGNUP: `${API_BASE_URL}/signup/`,
  CATEGORIES: `${API_BASE_URL}/categories/`,
  SUBCATEGORIES: `${API_BASE_URL}/sub_categories/`,
  CATEGORY_PARAMETERS: `${API_BASE_URL}/category_parameters/`,
  CATEGORY_DETAILS: `${API_BASE_URL}/category_details/`,
  SUBCATEGORY_DETAILS: `${API_BASE_URL}/subcategory_details/`,
  SIMILAR_ADS: `${API_BASE_URL}/similar_ads/`,
  TRENDING_ADS: `${API_BASE_URL}/trending_ads/`,
  PREMIUM_ADS: `${API_BASE_URL}/premium_ads/`,
};
