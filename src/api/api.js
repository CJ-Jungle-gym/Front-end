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




/* =============== ✅ 테스트 API =============== */
// 1️⃣ 서버 상태 확인 (health check)
export const checkServerHealth = async () => {
  try {
    const response = await api.get("/health"); // 백엔드에서 `/health` 엔드포인트 확인 필요
    console.log("✅ 서버 상태:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ 서버 연결 실패:", error);
    return null;
  }
};

// 2️⃣ 백엔드에서 로그인 API 테스트
export const loginTest = async () => {
  try {
    const response = await api.post("/api/users/login", {
      username: "testuser",
      password: "testpassword",
    });
    console.log("✅ 로그인 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ 로그인 요청 실패:", error);
    return null;
  }
};

// 3️⃣ 백엔드에서 이벤트 목록 불러오기 테스트
export const fetchEvents = async () => {
  try {
    const response = await api.get("/api/products?page=0&size=5&category=skincare");
    console.log("✅ 이벤트 목록:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ 이벤트 불러오기 실패:", error);
    return null;
  }
};





export default api;