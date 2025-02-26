import React, { useEffect } from "react";
import { exchangeCodeForToken } from "../api/auth";
import { useNavigate } from "react-router-dom";

function AuthHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get("code");

      if (authCode) {
        try {
          await exchangeCodeForToken(authCode);
          navigate("/");  // 로그인 성공 시 홈으로 이동
        } catch (error) {
          console.error("로그인 처리 중 오류 발생:", error);
        }
      }
    };

    handleAuth();
  }, []);

  return <div>로그인 처리 중입니다...</div>;
}

export default AuthHandler;