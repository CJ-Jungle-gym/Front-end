import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* 상단 메뉴 */}
      <div className="footer-menu">
        <ul>
          <li><a href="https://corp.oliveyoung.com/ko">회사소개</a></li>
          <li><a href="https://career.oliveyoung.com/jobs">채용안내</a></li>
          <li><a href="https://www.oliveyoung.co.kr/store/prvsuser/getPrvsuser.do">가맹점 개설문의</a></li>
          <li><a href="https://oypartner.cj.net/CJOYP/prvsuser/index/index.fo" target="_blank">상품입점 문의</a></li>
          <li><a href="javascript:void(0)">사이버 감사실</a></li>
          <li><a href="javascript:void(0)">고객센터</a></li>
        </ul>
        <div className="footer-select">
          <button>CJ그룹 계열사 바로가기 ▼</button>
        </div>
      </div>

      {/* 메인 정보 */}
      <div className="footer-main">
        <div className="company-info">
          <h2>씨제이올리브영 주식회사</h2>
          <p>대표이사 : 이선정 | 사업자등록번호 : 809-81-01574</p>
          <p>주소 : (04323) 서울특별시 용산구 한강대로 372, 24층 (동자동, KDB타워)</p>
          <p>호스팅사업자 : CJ 올리브네트웍스</p>
          <p>통신판매업신고번호 : 2019-서울용산-1428</p>
          <p><a href="mailto:oliveweb@cj.net">이메일 : oliveweb@cj.net</a></p>
          <p><a href="#">사업자 정보확인 &gt;</a></p>
        </div>
        <div className="legal-info">
          <h3>이용약관 | 법적고지</h3>
          <p><a href="#">개인정보처리방침</a></p>
          <p><a href="#">청소년보호방침</a></p>
          <p><a href="#">고정형 영상정보처리기기 운영/관리 방침</a></p>
          <p><a href="#">이메일무단수집거부</a></p>
        </div>
        <div className="secure-payment">
          <h3>하나은행 구매안전 서비스</h3>
          <p>올리브영은 현금 결제한 금액에 대해 하나은행과 채무지급보증 계약을 체결하여 안전한 거래를 보장하고 있습니다.</p>
          <a href="#">서비스 가입사실 확인 &gt;</a>
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="footer-bottom">
        <p className="footer-notice">
          올리브영 홈페이지에서 판매되는 상품 중에는 올리브영에 입점한 개별 판매자가 판매하는 상품이 포함되어 있습니다. 개별 판매자의 판매 상품의 경우, 올리브영은 통신판매중개자로서 통신판매의 당사자가 아니며 판매자가 등록한 상품정보 및 거래 정보 등에 대하여 책임을 부담하지 않습니다.
        </p>
        <p className="footer-cert">
          정보보호 및 개인정보보호 관리체계 ISMS-P 인증 획득 | 인증 범위 : 온라인 쇼핑몰 운영(올리브영 국내, 올리브영 글로벌, 디플롯) | 유효기간 : 2024.12.04~2027.12.03
        </p>
        <p className="footer-copyright">Copyright ⓒ CJ OliveYoung. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;