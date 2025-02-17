import React, { useState, useEffect } from "react";
import { login } from "../api/auth";
import "../styles/Login.css";
import cjOneLogo from "../assets/loginAssets/cjone-logo.png";
import kakaoIcon from "../assets/loginAssets/kakao-icon.png";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");


  // react-Helmet 대체
  useEffect(() => {
    document.title = "로그인 | 올리브영 - JG"; // ✅ 페이지 제목 변경

    return () => {
      document.title = "올리브영 온라인몰 - JG"; // ✅ 페이지 떠날 때 기본값으로 변경
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleLogin = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
  
    try {
      const loginData = {
        username: formData.username,
        password: formData.password
      };
  
      const response = await login(loginData); // 로그인 API 호출
      console.log("✅ 로그인 성공:", response); // 응답 확인
  
      alert("로그인 성공!");
      window.location.href = "/"; // 메인 페이지 이동
    } catch (error) {
      console.error("❌ 로그인 실패:", error.response?.data || error.message);
      setErrorMessage("로그인 실패! 아이디 또는 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">로그인</h2>

        {/* 로그인 폼 */}
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="CJ ONE 통합회원 아이디"
            value={formData.username}
            onChange={handleChange}
            className="login-input"
          />
          <input 
            type="password"
            name="password"
            placeholder="비밀번호 (8~12자, 영문+숫자+특수문자)" 
            value={formData.password}
            onChange={handleChange}
            className="login-input" 
          />

          <div className="login-options">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkbox-text">아이디 저장</span>
            </label>
            <div className="find-links">
              <a href="#">아이디 찾기</a>
              <span>|</span>
              <a href="#">비밀번호 찾기</a>
            </div>
          </div>

          <button type="submit" className="login-button">로그인</button>
          <button type="button" className="kakao-button">
            <img src={kakaoIcon} alt="카카오 로그인" className="kakao-icon" />
            카카오로 로그인
          </button>
        </form>

        {/* CJ ONE 회원가입 안내 */}
        <div className="cj-one-section">
          <img src={cjOneLogo} alt="CJ ONE" className="cj-one-logo" />
          <p className="cj-one-text">
            CJ ONE 통합회원으로 가입하고<br />
            올리브영에서 편안한 쇼핑하세요
          </p>
          <button className="signup-button">회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default Login;