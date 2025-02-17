import api from "./apiCenter";

// 로그인 요청 (사용자 입력 값 기반)
export const login = async (loginData) => {
  try {
    const response = await api.post("/api/users/login", loginData);
    localStorage.setItem("token", response.data.token); // 토큰 저장
    return response.data;
  } catch (error) {
    console.error("❌ 로그인 요청 실패:", error.response?.data || error.message);
    throw error;
  }
};

// 로그아웃 요청
export const logout = async () => {
  await api.post("/api/users/logout");
  localStorage.removeItem("token"); // 토큰 삭제
};

// 회원가입 요청
export const register = async (userData) => {
  const response = await api.post("/api/users/signup", userData);
  return response.data;
};