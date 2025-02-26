import api from "./apiCenter";

const COGNITO_DOMAIN = import.meta.env.VITE_COGNITO_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_COGNITO_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_COGNITO_REDIRECT_URI;
const LOGOUT_URI = import.meta.env.VITE_COGNITO_LOGOUT_URI;

// 🔹 Cognito 로그인 URL 생성
export const getLoginUrl = () => 
  `${COGNITO_DOMAIN}/login?client_id=${CLIENT_ID}&response_type=code&scope=openid+email&redirect_uri=${REDIRECT_URI}`;


// 🔹 Cognito 로그아웃 URL 생성
export const getLogoutUrl = () => 
  `${COGNITO_DOMAIN}/logout?client_id=${CLIENT_ID}&logout_uri=${LOGOUT_URI}`;

// 🔐 코드 기반 토큰 교환
export const exchangeCodeForToken = async (authCode) => {
  try {
    const response = await axios.post(
      `${COGNITO_DOMAIN}/oauth2/token`,
      new URLSearchParams({
        grant_type: "authorization_code",
        client_id: CLIENT_ID,
        code: authCode,
        redirect_uri: REDIRECT_URI,
      }).toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const { id_token, access_token } = response.data;
    localStorage.setItem("token", access_token);
    localStorage.setItem("idToken", id_token);
    return response.data;
  } catch (error) {
    console.error("❌ 토큰 교환 실패:", error.response?.data || error.message);
    throw error;
  }
};


// 로그아웃
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("idToken");
  window.location.href = getLogoutUrl();
};



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

// // 로그아웃 요청
// export const logout = async () => {
//   await api.post("/api/users/logout");
//   localStorage.removeItem("token"); // 토큰 삭제
// };

// 회원가입 요청
export const register = async (userData) => {
  const response = await api.post("/api/users/signup", userData);
  return response.data;
};