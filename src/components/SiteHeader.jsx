import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import darkModeIcon from "../assets/icons/dark-mode.png";
import lightModeIcon from "../assets/icons/light-mode.png";
import mobileMenuIcon from "../assets/icons/mobile-menu.png";
import Icon from "./Icon";
import ActionButtons from "./ActionButtons";

export default function SiteHeader() {
  const location = useLocation();
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // 저장이 제한된 환경에서도 테마 전환은 유지한다.
    }
  }, [theme]);

  useEffect(() => {
    const dialog = menuRef.current;
    if (!dialog) return;

    if (!menuOpen) {
      if (dialog?.open) dialog.close();
      return;
    }

    if (!dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const desktop = window.matchMedia("(min-width: 768px)");

    function closeOnDesktop() {
      if (desktop.matches) setMenuOpen(false);
    }

    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();

    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.body.style.overflow = previousOverflow;

      if (dialog.open) dialog.close();
    };
  }, [menuOpen]);


  useEffect(() => {
    menuRef.current?.close();
  }, [location.key]);

  return (
      <header className="home-header site-header">
        <div className="portfolio-container home-header__inner">
          <Link to="/" className="home-logo" aria-label="NASEUL LIM 메인">
            NASEUL LIM<sup>®</sup>
          </Link>

          <div className="home-header__controls">
            <nav className="home-desktop-nav" aria-label="주요 메뉴">
              <Link to="/about">About</Link>
              <Link to="/uiux">UI/UX</Link>
              <Link to="/frontend">Front-End</Link>
            </nav>

            <button
              type="button"
              className="home-theme-toggle"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            >
              <img src={isDark ? lightModeIcon : darkModeIcon} alt="" />
              <span>{isDark ? "Light" : "Dark"}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              className="home-menu-toggle"
              aria-label="메뉴 열기"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              aria-controls="home-mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <img src={mobileMenuIcon} alt="" />
            </button>
          </div>
        </div>

        <dialog
          ref={menuRef}
          id="home-mobile-menu"
          className="mobile-menu-panel"
          aria-label="전체 메뉴"
          onClose={() => setMenuOpen(false)}
          onCancel={(event) => {
            event.preventDefault();
            setMenuOpen(false);
          }}
        >
          <div className="mobile-menu-panel__inner">
            <div className="mobile-menu-panel__header">
              <Link to="/" className="home-logo" onClick={() => setMenuOpen(false)}>
                NASEUL LIM<sup>®</sup>
              </Link>
              <button
                type="button"
                className="mobile-menu-panel__close"
                aria-label="메뉴 닫기"
                onClick={() => setMenuOpen(false)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="m3 3 18 18M21 3 3 21" />
                </svg>
              </button>
            </div>
            <nav className="mobile-menu-panel__nav" aria-label="주요 메뉴">
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                <span className="mobile-menu-panel__icon"><Icon name="person" /></span>
                About
              </Link>
              <Link to="/uiux" onClick={() => setMenuOpen(false)}>
                <span className="mobile-menu-panel__icon"><Icon name="pen" /></span>
                UIUX
              </Link>
              <Link to="/frontend" onClick={() => setMenuOpen(false)}>
                <span className="mobile-menu-panel__icon"><Icon name="code" /></span>
                Front-End
              </Link>
            </nav>
            <div className="mobile-menu-panel__bottom">
              <ActionButtons />
            </div>
          </div>
        </dialog>
      </header>
  );
}
