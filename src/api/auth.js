import api from "./api";

// 로그인 요청
export const login = async (loginData) => {
  const response = await api.post("/auth/login", loginData);
  localStorage.setItem("token", response.data.token); // 토큰 저장
  return response.data;
};

// 로그아웃 요청
export const logout = async () => {
  await api.post("/auth/logout");
  localStorage.removeItem("token"); // 토큰 삭제
};

// 회원가입 요청
export const register = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};