import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate(); // 페이지 이동을 위한 Hook
  const [showToday, setShowToday] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [showRecent, setShowRecent] = useState(false);

  return (
    <header className="header">
      {/* 상단 네비게이션 */}
      <div className="top-nav">
        <button onClick={() => navigate("/signup")}>회원가입</button> | 
        <button onClick={() => navigate("/login")}>로그인</button> | 
        <button onClick={() => navigate("/cart")}>장바구니</button> | 
        <button onClick={() => navigate("/orders")}>주문배송</button> | 
        <button onClick={() => navigate("/support")}>고객센터</button> | 
        <button onClick={() => navigate("/stores")}>올영매장</button> | 
        <button onClick={() => navigate("/global")}>Global</button>
      </div>

      {/* 메인 헤더 */}
      <div className="main-header">
        <img 
            src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" 
            alt="올리브영 로고" 
            className="logo"
            onClick={() => navigate("/")} 
            style={{ cursor: "pointer" }} // ✅ 클릭 가능한 스타일 추가
        />

        <div className="search-bar">
          <input type="text" placeholder="상품, 브랜드, 성분 검색" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="extra-nav">
          {/* 오늘드림 */}
          <div 
            className="extra-item"
            onMouseEnter={() => setShowToday(true)}
            onMouseLeave={() => setShowToday(false)}
          >
            <span className="mymenu_layer">오늘드림</span> |
            {showToday && (
              <div className="dropdown-content">
                <p className="dTxt">배송지를 등록하고 오늘드림으로 구매 가능한 상품을 확인하세요!</p>
                <button className="btn-address">새 배송지 추가</button>
              </div>
            )}
          </div>

          {/* 올영매장찾기 */}
          <div 
            className="extra-item"
            onMouseEnter={() => setShowStore(true)}
            onMouseLeave={() => setShowStore(false)}
          >
            <span className="mymenu_layer">올영매장찾기 ⌵</span> |
            {showStore && (
              <div className="dropdown-content">
                <p className="store_desc">지금 찾는 상품, <span>가까운 매장에서 재고 확인</span><br />올영매장에서 재고 확인하고, 빠르게 픽업 주문까지!</p>
                <button className="mymenu_btn">로그인</button>
              </div>
            )}
          </div>

          {/* 최근 본 상품 */}
          <div 
            className="extra-item"
            onMouseEnter={() => setShowRecent(true)}
            onMouseLeave={() => setShowRecent(false)}
          >
            <span className="mymenu_layer">최근 본 상품 ⌵</span>
            {showRecent && (
              <div className="dropdown-content">
                <p className="recent_tit">전체 <span>0</span>개</p>
                <p className="no_data">최근 본 상품이 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 메인 네비게이션 바 */}
      <nav className="main-nav">
        <button className="category-btn">카테고리</button>
        <button>오특</button>
        <button>랭킹</button>
        <button>헬스+</button>
        <button>LUXE EDIT</button>
        <button>기획전</button>
        <button>세일</button>
        <button>기프트카드</button>
        <button>멤버십/쿠폰</button>
        <button>이벤트</button>
      </nav>
    </header>
  );
}

export default Header;