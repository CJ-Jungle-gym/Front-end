import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test("Footer가 정상적으로 렌더링되어야 한다", () => {
  render(<Footer />);
  
  expect(screen.getByText("씨제이올리브영 주식회사")).toBeInTheDocument();
  expect(screen.getByText("이용약관 | 법적고지")).toBeInTheDocument();
  expect(screen.getByText(/하나은행 구매안전 서비스/)).toBeInTheDocument();
});

test("회사소개 링크가 올바르게 존재해야 한다", () => {
  render(<Footer />);
  
  const companyLink = screen.getByText("회사소개");
  expect(companyLink.closest("a")).toHaveAttribute("href", "https://corp.oliveyoung.com/ko");
});

test("고객센터 및 법적 정보 링크들이 존재해야 한다", () => {
  render(<Footer />);
  
  expect(screen.getByText("개인정보처리방침")).toBeInTheDocument();
  expect(screen.getByText("청소년보호방침")).toBeInTheDocument();
  expect(screen.getByText("이메일무단수집거부")).toBeInTheDocument();
});