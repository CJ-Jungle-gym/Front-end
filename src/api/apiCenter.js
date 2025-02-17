import axios from "axios";

// 환경 변수에서 API 기본 URL 가져오기
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 로그인 유지 (쿠키 인증 사용 시)
});

// 요청 인터셉터 (토큰 자동 추가)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 (에러 처리)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API 응답 오류:", error);
    return Promise.reject(error);
  }
);

export default api;