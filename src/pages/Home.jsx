import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import image1 from "../assets/homeAssets/main-banner1.png";
import image2 from "../assets/homeAssets/main-banner2.png";
import image3 from "../assets/homeAssets/main-banner3.png";
import image4 from "../assets/homeAssets/main-banner4.png";
import image5 from "../assets/homeAssets/main-banner5.png";
import image6 from "../assets/homeAssets/main-banner6.png";
import image7 from "../assets/homeAssets/main-banner7.png";
import image8 from "../assets/homeAssets/main-banner8.png";
import image9 from "../assets/homeAssets/main-banner9.png";
import image10 from "../assets/homeAssets/main-banner10.png";
import image11 from "../assets/homeAssets/main-banner11.png";
import eventBanner from "../assets/homeAssets/event-banner.jpg";

const bannerImages = [
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 현재 호스트명에 따라 운영계와 이벤트계를 구분
  const hostname = window.location.hostname;
  const isProd = hostname === "prod.junglegymstore.shop";

  const handleEventClick = () => {
    if (isProd) {
      // 운영계에서는 외부 이벤트 도메인으로 리디렉션
      window.location.href = "http://event.junglegymstore.shop/event";
    } else {
      // 이벤트계나 개발 환경에서는 내부 라우팅 사용
      navigate("/event");
    }
  };

  return (
    <div className="home">
      {/* 배너 영역 */}
      <section className="banner-container">
        <div className="banner-wrapper">
          {bannerImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`배너 ${index + 1}`}
              className={`banner-image ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </section>

      {/* 🌟 콜라보 이벤트 섹션 🌟 */}
      <section className="collab-event">
        <div className="event-bg">
          <img src={eventBanner} alt="한류 스타 X 올리브영" className="event-image" />
          <div className="event-content">
            <h2 className="event-title">한류 스타 ✖ 올리브영</h2>
            <p className="event-description">
              매달 한류 스타와 함께하는 특별한 콜라보레이션!<br />
              오직 올리브영에서만 만나볼 수 있는 한정판 굿즈와 혜택을 놓치지 마세요.
            </p>
            <button className="event-button" onClick={handleEventClick}>
              이벤트 확인하기 →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;