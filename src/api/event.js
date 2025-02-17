import api from "./apiCenter";  // Axios 인스턴스 가져오기

// ✅ 이벤트 제품 목록 불러오기
export const getProducts = async () => {
  try {
    const response = await api.get("/api/products", {
      params: {
        page: 0,       // 첫 번째 페이지
        size: 5,       // 5개씩 가져오기
        category: "skincare" // 스킨케어 카테고리 제품만 가져오기
      }
    });
    return response.data;  // 백엔드에서 받은 데이터 반환
  } catch (error) {
    console.error("❌ 이벤트 제품 불러오기 실패:", error);
    throw error;
  }
};