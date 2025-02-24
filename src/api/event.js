import { eventApi } from "./apiCenter";

// 이벤트 제품 목록 불러오기 (이벤트계 API 호출)
export const getEventProducts = async () => {
  try {
    const response = await eventApi.get("/api/products", {
      params: {
        page: 0,
        size: 5,
        category: "skincare",
      },
    });
    return response.data;
  } catch (error) {
    console.error("❌ 이벤트 제품 불러오기 실패:", error);
    throw error;
  }
};