import axios from "axios";

// 기본 API 주소 (운영계)
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// 이벤트계 API 주소
const EVENT_API_URL = import.meta.env.VITE_EVENT_API_URL;

// 운영계 API 인스턴스
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 이벤트계 API 인스턴스
export const eventApi = axios.create({
  baseURL: EVENT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 요청 시 토큰 자동 추가
[api, eventApi].forEach((instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
});

export default api;