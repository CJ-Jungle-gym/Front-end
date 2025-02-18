import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

// 📌 기본적인 Header 컴포넌트 렌더링 테스트
test("Header가 정상적으로 렌더링되어야 한다", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByAltText("올리브영 로고")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("상품, 브랜드, 성분 검색")).toBeInTheDocument();
  expect(screen.getByText("회원가입")).toBeInTheDocument();
});

// 📌 로고를 클릭했을 때, 홈("/")으로 이동하는지 확인
test("로고 클릭 시 홈(/)으로 이동해야 한다", () => {
  const { container } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const logo = screen.getByAltText("올리브영 로고");
  fireEvent.click(logo);

  expect(container.innerHTML).toContain("올리브영");
});