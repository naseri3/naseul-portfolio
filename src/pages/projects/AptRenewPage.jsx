import overviewIcon from "../../assets/icons/project-overview.png";
import roleIcon from "../../assets/icons/project-role.png";
import contributionIcon from "../../assets/icons/project-contribution.png";
import deviceIcon from "../../assets/icons/project-device.png";
import problemIcon from "../../assets/icons/project-problem.png";
import solutionIcon from "../../assets/icons/project-solution.png";
import tasksIcon from "../../assets/icons/project-tasks.png";
import screensIcon from "../../assets/icons/project-screens.png";
import resultsIcon from "../../assets/icons/project-results.png";
import figmaIcon from "../../assets/icons/skills/figma.png";
import photoshopIcon from "../../assets/icons/skills/Photoshop.png";
import htmlIcon from "../../assets/icons/skills/html.png";
import scssIcon from "../../assets/icons/skills/scss.png";
import jsIcon from "../../assets/icons/skills/js.png";
import codexIcon from "../../assets/icons/skills/codex.png";
import claudeIcon from "../../assets/icons/skills/claude.png";
import liveDomeIcon from "../../assets/icons/skills/live-dome.png";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import mainImage from "../../assets/images/projects/apt-renew/[ui] renew-main-light.png";
import darkMainImage from "../../assets/images/projects/apt-renew/[ui] renew-main-dark.png";
import calendarIcon from "../../assets/icons/calendar.png";
import arrowIcon from "../../assets/icons/arrow.png";

// 실제 Figma 프로토타입 공유 링크를 입력하세요.
const PROTOTYPE_URL = "https://www.aptjob.net/";
// 아래 파일을 src/assets/images/projects/apt-job/에 추가하면 자동으로 표시됩니다.
const screens = [
  { file: "apt-renew-screen-01.png", title: "메인 검색 화면" },
  { file: "apt-renew-screen-02.png", title: "직무별 채용공고" },
  { file: "apt-renew-screen-03.png", title: "제휴 위탁관리본사" },
  { file: "apt-renew-screen-04.png", title: "지원 정보 입력" },
];
const screenImages = import.meta.glob(
  "../../assets/images/projects/apt-renew/*.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const detailIcons = {
  document: overviewIcon,
  role: roleIcon,
  chart: contributionIcon,
  phone: deviceIcon,
  question: problemIcon,
  idea: solutionIcon,
  settings: tasksIcon,
  monitor: screensIcon,
  star: resultsIcon,
};

function DetailIcon({ name }) {
  return <img src={detailIcons[name]} alt="" />;
}

export default function ProjectDetailPage() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-bs-theme") === "dark",
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.getAttribute("data-bs-theme") === "dark");
    });
    observer.observe(root, { attributes: true, attributeFilter: ["data-bs-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="project-detail">
      <nav
        className="portfolio-container project-breadcrumb"
        aria-label="현재 위치"
      >
        <Link to="/">HOME</Link>
        <span aria-hidden="true">&gt;</span>
        <Link to="/projects">Project</Link>
        <span aria-hidden="true">&gt;</span>
        <span aria-current="page">아파트잡 핵심 화면 리뉴얼</span>
      </nav>
      <section className="project-hero" aria-labelledby="project-title">
        <div className="portfolio-container project-hero__inner">
          <div className="project-hero__copy">
            <span className="project-badge">UI/UX + Front-End</span>
            <h1 id="project-title">아파트잡 핵심 화면 리뉴얼</h1>
            <p className="project-date">
              <img src={calendarIcon} alt="" />
              2025.05 - 2025.08
            </p>
            <p>
              모바일부터 데스크톱까지, 같은 서비스 경험을 이어주는 반응형 채용
              플랫폼 구축
            </p>
            {PROTOTYPE_URL ? (
              <a
                className="project-prototype"
                href={PROTOTYPE_URL}
                target="_blank"
                rel="noreferrer"
              >
                <img src={liveDomeIcon} alt="" />
                Live Dome
              </a>
            ) : (
              <button
                className="project-prototype"
                type="button"
                disabled
                title="프로토타입 링크 준비 중"
              >
                <img src={liveDomeIcon} alt="" />
                Live Dome
              </button>
            )}
          </div>
          <img
            className="project-hero__image"
            src={isDark ? darkMainImage : mainImage}
            alt="아파트잡 핵심 화면 리뉴얼 대표 화면"
            fetchPriority="high"
          />
        </div>
      </section>
      <div className="portfolio-container project-content">
        <section className="project-panel project-summary" aria-label="프로젝트 정보">
          {[
            [
              "document",
              "프로젝트 개요",
              "인덱스·지역·직무·위탁사 검색과 상세 페이지의 UI/UX 1차 리뉴얼",
            ],
            ["role", "역할", "UI/UX 디자인 전반 · 프론트엔드 개발 단독 수행"],
            ["chart", "기여도", "기획 10%, 디자인 90%, 프론트엔드 100%"],
            ["phone", "사용 환경", "PC Web · Desktop"],
          ].map(([icon, title, text]) => (
            <div className="project-summary__item" key={title}>
              <span className="project-summary__icon">
                <DetailIcon name={icon} />
              </span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </section>
        <section
          className="project-panel project-detail-tools"
          aria-labelledby="project-detail-tools-title"
        >
          <h2 id="project-detail-tools-title">사용 툴 / 기술</h2>
          <div>
            <div className="project-detail-tools__group">
              <span className="project-detail-tools__label">Design</span>
              <span className="project-detail-tool"><img src={figmaIcon} alt="" />Figma</span>
              <span className="project-detail-tool"><img src={photoshopIcon} alt="" />Photoshop</span>
            </div>
            <div className="project-detail-tools__group">
              <span className="project-detail-tools__label">Front-End</span>
              <span className="project-detail-tool"><img src={htmlIcon} alt="" />HTML</span>
              <span className="project-detail-tool"><img src={scssIcon} alt="" />SCSS</span>
              <span className="project-detail-tool"><img src={jsIcon} alt="" />JavaScript</span>
            </div>
            <div className="project-detail-tools__group">
              <span className="project-detail-tools__label">AI</span>
              <span className="project-detail-tool"><img src={codexIcon} alt="" />Codex</span>
              <span className="project-detail-tool"><img src={claudeIcon} alt="" />Claude</span>
            </div>
          </div>
        </section>
        <section
          className="project-panel project-process"
          aria-label="문제와 해결 과정"
        >
          <article>
            <h2>
              <DetailIcon name="question" />
              문제 정의
            </h2>
            <p>
              검색 목적이 다른 기능들이 유사한 위치에 배치되어 사용자가 원하는
              탐색 경로를 빠르게 선택하기 어려웠습니다. 화면마다 UI 규칙도 달라
              서비스 전체의 일관성이 부족했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="idea" />
              해결 방향
            </h2>
            <p>
              인덱스에서 주요 검색 기능으로 바로 이동할 수 있도록 정보 우선순위를
              재정리하고, 반복되는 검색·버튼·목록 요소를 공통 패턴으로 설계했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="settings" />
              주요 작업
            </h2>
            <ul>
              <li>인덱스와 주요 검색 화면의 정보 구조 재정비</li>
              <li>지역·직무·위탁사 검색 흐름 개선</li>
              <li>검색 조건과 결과 목록의 위계 조정</li>
              <li>상세 페이지 정보 구조 개선</li>
              <li>공통 UI 패턴을 HTML·SCSS·JavaScript로 구현</li>
            </ul>
          </article>
        </section>
        <section
          className="project-panel project-results"
          aria-label="주요 화면과 결과"
        >
          <div className="project-screens">
            <h2>
              <DetailIcon name="monitor" />
              주요 화면
            </h2>
            <div className="project-screens__grid">
              {screens.map((screen) => {
                const src =
                  screenImages[
                    "../../assets/images/projects/apt-renew/" + screen.file
                  ];
                return (
                  <figure key={screen.file}>
                    {src ? (
                      <a
                        href={src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={screen.title + " 크게 보기"}
                      >
                        <img src={src} alt={screen.title} loading="lazy" />
                      </a>
                    ) : (
                      <div className="project-screen-placeholder">
                        <DetailIcon name="monitor" />
                        <span>{screen.title}</span>
                      </div>
                    )}
                  </figure>
                );
              })}
            </div>
          </div>
          <article className="project-learnings">
            <h2>
              <DetailIcon name="star" />
              결과 / 배운 점
            </h2>
            <p>
              검색 목적별 진입 경로를 명확하게 만들고 주요 정보의 탐색 효율을
              개선했습니다. 공통 UI 규칙을 먼저 정리하면 여러 화면을 일관되게
              운영할 수 있다는 점을 확인했습니다.
            </p>
          </article>
        </section>
        <nav className="project-bottom-nav" aria-label="프로젝트 탐색">
          <Link to="/projects">
            <img className="project-arrow--back" src={arrowIcon} alt="" />
            프로젝트 목록으로 돌아가기
          </Link>
          <Link className="project-next" to="/projects/brand">
            다음 프로젝트 보기
            <img src={arrowIcon} alt="" />
          </Link>
        </nav>
      </div>
    </main>
  );
}




