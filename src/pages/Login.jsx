import React from "react";
// import "../assets/login-bg.jpg"; // 배경 이미지

function Login() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/login-bg.jpg)",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
        <h2>로그인</h2>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
      </div>
    </div>
  );
}

export default Login;