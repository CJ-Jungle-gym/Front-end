import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/MainLayout.css";

function MainLayout({ children }) {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    content: false,
    footer: false
  });

  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div className="layout">
      <div ref={headerRef} data-section="header" className={`header-wrapper ${visibleSections.header ? "visible" : ""}`}>
        <Header />
      </div>
      <main ref={contentRef} data-section="content" className={`content ${visibleSections.content ? "visible" : ""}`}>
        {children}
      </main>
      <div ref={footerRef} data-section="footer" className={`footer-wrapper ${visibleSections.footer ? "visible" : ""}`}>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;