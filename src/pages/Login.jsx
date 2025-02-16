import React from "react";
import "../styles/Login.css";
import cjOneLogo from "../assets/cjone-logo.png";
import kakaoIcon from "../assets/kakao-icon.png";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">로그인</h2>

        {/* 로그인 폼 */}
        <form className="login-form">
          <input type="text" placeholder="CJ ONE 통합회원 아이디" className="login-input" />
          <input type="password" placeholder="비밀번호 (8~12자, 영문+숫자+특수문자)" className="login-input" />

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