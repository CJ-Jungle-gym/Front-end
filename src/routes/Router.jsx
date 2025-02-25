import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Event from "../pages/Event";
import MainLayout from "../layouts/MainLayout";

// 현재 호스트명 확인
const hostname = window.location.hostname;

// 이벤트 도메인일 경우(true)와 운영계일 경우(false) 구분
const isEventEnvironment = hostname === "event.junglegymstore.shop";

function Router() {
  return (
    <Routes>
      {isEventEnvironment ? (
        // 이벤트계에서는 이벤트 페이지만 제공하고, 다른 경로는 이벤트 페이지로 리디렉트
        <>
          <Route path="/event" element={<MainLayout><Event /></MainLayout>} />
          <Route path="/" element={<Navigate to="/event" replace />} />
          <Route path="*" element={<Navigate to="/event" replace />} />
        </>
      ) : (
        // 운영계에서는 홈과 로그인 페이지 제공. 이벤트 페이지 접근 시 홈이나 에러 처리
        <>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
          <Route path="/event" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      )}
    </Routes>
  );
}

export default Router;