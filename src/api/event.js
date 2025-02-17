import api from "./api";

// ✅ 이벤트 제품 목록 가져오기
export const getEvents = async () => {
  try {
    const response = await api.get("/api/products"); // ✅ 실제 백엔드 엔드포인트 확인 필요
    return response.data; // ✅ 받아온 데이터 반환
  } catch (error) {
    console.error("❌ 이벤트 목록 가져오기 실패:", error);
    throw error;
  }
};