import api from "./api";

// 이벤트 목록 가져오기
export const getEvents = async () => {
  const response = await api.get("/events");
  return response.data;
};

// 특정 이벤트 상세 정보 가져오기
export const getEventDetail = async (eventId) => {
  const response = await api.get(`/events/${eventId}`);
  return response.data;
};