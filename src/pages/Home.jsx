import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import image1 from "../assets/main-banner1.png";
import image2 from "../assets/main-banner2.png";
import image3 from "../assets/main-banner3.png";
import image4 from "../assets/main-banner4.png";
import image5 from "../assets/main-banner5.png";
import image6 from "../assets/main-banner6.png";

const bannerImages = [image1, image2, image3, image4, image5, image6];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 4초마다 배너 이미지 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
    </div>
  );
}

export default Home;