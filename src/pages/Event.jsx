import React from "react";
// import "../assets/event-banner.jpg";

function Event() {
  return (
    <div>
      <img src="/assets/event-banner.jpg" alt="이벤트 배너" style={{ width: "100%" }} />
      <h1>이벤트 페이지</h1>
      <p>올리브영의 다양한 이벤트를 확인해 보세요!</p>

      <div className="event-list">
        <div className="event-item">
          <h2>이벤트 1</h2>
          <p>최대 50% 할인!</p>
        </div>
        <div className="event-item">
          <h2>이벤트 2</h2>
          <p>신상품 런칭 기념 특가!</p>
        </div>
      </div>
    </div>
  );
}

export default Event;