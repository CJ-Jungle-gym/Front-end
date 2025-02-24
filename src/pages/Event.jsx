import React, { useState, useEffect } from "react";
import "../styles/Event.css";
import { getEventProducts } from "../api/event";

import eventBanner from "../assets/homeAssets/event-banner.jpg";
import kpopStar from "../assets/eventAssets/kpop-star.jpg";
import product1 from "../assets/eventAssets/product1.jpg";
import product2 from "../assets/eventAssets/product2.jpg";
import product3 from "../assets/eventAssets/product3.jpg";
import 차은우 from "../assets/eventAssets/차은우.jpg";
import 장원영 from "../assets/eventAssets/장원영.jpg";
import 카리나 from "../assets/eventAssets/카리나.jpg";
import 제니 from "../assets/eventAssets/제니.jpg";
import 변우석 from "../assets/eventAssets/변우석.jpg";
import 정해인 from "../assets/eventAssets/정해인.jpg";
import unknownStar from "../assets/eventAssets/unknown-star.jpg"; // 다가올 스타의 실루엣 이미지

// 이전 콜라보 진행했던 스타들과 제품 (월 정보 추가)
const pastCollaborations = [
  { id: 1, month: "1월", name: "차은우", product: "올리브영 수분 쿠션", image: 차은우 },
  { id: 2, month: "2월", name: "장원영", product: "촉촉 필터 쿠션", image: 장원영 },
  { id: 3, month: "3월", name: "카리나", product: "광채 커버 쿠션", image: 카리나 },
  { id: 4, month: "4월", name: "제니", product: "매끈 피부결 쿠션", image: 제니 },
  { id: 5, month: "5월", name: "변우석", product: "톤업 쿠션", image: 변우석 },
  { id: 6, month: "6월", name: "정해인", product: "핏 블러 쿠션", image: 정해인 },
  { id: 7, month: "7월", name: "???", product: "다가올 스타를 기대하세요!", image: unknownStar },
  // { id: 8, month: "8월", name: "???", product: "다가올 스타를 기대하세요!", image: unknownStar },
  // { id: 9, month: "9월", name: "???", product: "다가올 스타를 기대하세요!", image: unknownStar },
  // { id: 10, month: "10월", name: "???", product: "다가올 스타를 기대하세요!", image: unknownStar },
  // { id: 11, month: "11월", name: "???", product: "다가올 스타를 기대하세요!", image: unknownStar },
  // { id: 12, month: "12월", name: "???", product: "다가올 스타를 기대하세요!", image: unknownStar },

];

const tempProducts = [
  { id: 1, name: "한류 스타 X 올리브영 리미티드 쿠션", price: "₩35,000", image: product1 },
  { id: 2, name: "한류 스타 X 올리브영 스페셜 립스틱", price: "₩29,000", image: product2 },
  { id: 3, name: "한류 스타 X 올리브영 세트 컬렉션", price: "₩59,000", image: product3 },
];

function Event() {
  const [products, setProducts] = useState([]);  // ✅ API에서 받아올 제품 목록
  const [loading, setLoading] = useState(true);  // ✅ 로딩 상태
  const [error, setError] = useState(null);      // ✅ 에러 상태
  const [purchased, setPurchased] = useState({}); // ✅ 구매 여부 저장

  // react-Helmet 대체
  useEffect(() => {
    document.title = "특별 이벤트 | 올리브영 - JG"; // ✅ 페이지 제목 변경

    return () => {
      document.title = "올리브영 온라인몰 - JG"; // ✅ 페이지 떠날 때 기본값으로 변경
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getEventProducts(); // ✅ 백엔드에서 이벤트 제품 가져오기
        setProducts(data.content || []);  // ✅ 백엔드 응답 데이터에서 content 배열 가져오기
      } catch (err) {
        console.error("❌ 이벤트 불러오기 실패:", err);
        setError("이벤트 데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handlePurchase = (id) => {
    if (purchased[id]) {
      alert("이미 구매하셨습니다!");
      return;
    }
    setPurchased((prev) => ({ ...prev, [id]: true }));
    alert("구매 성공! 선착순 제품입니다.");
  };


  return (
    <div className="event-container">
      {/* 상단 배너 */}
      <div className="event-banner">
        <img src={eventBanner} alt="이벤트 배너" className="banner-image" />
      </div>

      {/* 한류 스타 소개 */}
      <div className="star-section">
        <img src={kpopStar} alt="한류 스타" className="star-image" />
        <div className="star-content">
          <h1>🌟 한류 스타 X 올리브영 스페셜 컬렉션 🌟</h1>
          <p>
            한류 스타와 올리브영이 함께한 리미티드 에디션!  
            오직 이번 이벤트에서만 만날 수 있는 특별한 콜라보 제품을 확인해보세요.
          </p>
        </div>
      </div>

      {/* 제품 리스트 */}
      <div className="product-section">
        {loading ? (
          <p>🔄 제품을 불러오는 중...</p>
        ) : error ? (
          <>
            <p className="error-message">⚠️ 문제가 발생하여, 임시 상품으로 대체됩니다.</p>

            {/* 🚀 에러 메시지와 상품 리스트 사이에 줄바꿈 추가 */}
            <div className="product-wrapper">
              <div className="product-section">
                {tempProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                    <button 
                      className="buy-button"
                      onClick={() => handlePurchase(product.id)}
                      disabled={purchased[product.id]}
                    >
                      {purchased[product.id] ? "구매 완료" : "🚀 선착순 구매"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : products.length === 0 ? (
          <div className="noProducts">
            <span className="noProducts-icon">🎁</span>
            <p className="noProducts-text">현재 등록된 이벤트 제품이 없습니다.</p>
            <p className="noProducts-subtext">곧 새로운 제품이 추가될 예정이니 기대해 주세요! 💛</p>
          </div>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}원</p>
              <button 
                className="buy-button"
                onClick={() => handlePurchase(product.id)}
                disabled={purchased[product.id]}
              >
                {purchased[product.id] ? "구매 완료" : "🚀 선착순 구매"}
              </button>
            </div>
          ))
        )}
      </div>

      {/* 이전 콜라보 스타 소개 섹션 */}
      <div className="collab-section">
        <h2 className="collab-title">✨ 지금까지 함께한 한류 스타들 ✨</h2>
        <div className="collab-list">
          {pastCollaborations.map((collab, index) => (
            <div key={collab.id} className={`collab-item ${index === pastCollaborations.length - 1 ? "future-star" : ""}`}>
              <h4 className="collab-month">{collab.month}</h4>
              <img src={collab.image} alt={collab.name} className="collab-image" />
              <div className="collab-info">
                <h3 className="collab-name">{collab.name}</h3>
                <p className="collab-product">{collab.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;