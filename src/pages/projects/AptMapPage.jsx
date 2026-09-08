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
import liveDomeIcon from "../../assets/icons/skills/live-dome.png";
import htmlIcon from "../../assets/icons/skills/html.png";
import scssIcon from "../../assets/icons/skills/scss.png";
import jsIcon from "../../assets/icons/skills/js.png";
import codexIcon from "../../assets/icons/skills/codex.png";
import kakaoIcon from "../../assets/icons/skills/kakao.png";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import mainImage from "../../assets/images/projects/apt-map/[ui] aptMap-main-light.png";
import darkMainImage from "../../assets/images/projects/apt-map/[ui] aptMap-main-dark.png";
import calendarIcon from "../../assets/icons/calendar.png";
import arrowIcon from "../../assets/icons/arrow.png";

// 실제 Figma 프로토타입 공유 링크를 입력하세요.
const PROTOTYPE_URL = "https://www.aptjob.net/subpage/recruit_search_map.html";
// 아래 파일을 src/assets/images/projects/apt-job/에 추가하면 자동으로 표시됩니다.
const screens = [
  { file: "apt-map-screen-01.png", title: "지역·직무 검색" },
  { file: "apt-map-screen-02.png", title: "지도 기반 공고 탐색" },
  { file: "apt-map-screen-03.png", title: "공고 목록 비교" },
  { file: "apt-map-screen-04.png", title: "모바일 지도 화면" },
];
const screenImages = import.meta.glob(
  "../../assets/images/projects/apt-map/*",
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

export default function AptMapPage() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-bs-theme") === "dark",
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.getAttribute("data-bs-theme") === "dark");
    });
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });
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
        <span aria-current="page">내 주변 공고 검색</span>
      </nav>
      <section className="project-hero" aria-labelledby="project-title">
        <div className="portfolio-container project-hero__inner">
          <div className="project-hero__copy">
            <span className="project-badge">UI/UX + Front-End</span>
            <h1 id="project-title">내 주변 공고 검색</h1>
            <p className="project-date">
              <img src={calendarIcon} alt="" />
              2025.10 - 2025.12
            </p>
            <p>
              카카오맵 API를 활용해 사용자 주소를 기준으로 주변 아파트 채용공고를
              탐색할 수 있도록 구현한 PC 웹 검색 화면
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
                <img src={figmaIcon} alt="" />
                Figma Prototype
              </button>
            )}
          </div>
          <img
            className="project-hero__image"
            src={isDark ? darkMainImage : mainImage}
            alt="지도 기반 주변 채용공고 검색 화면"
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
              "지도 위치와 직무 조건을 기반으로 주변 아파트 채용공고를 탐색하는 위치 기반 검색 경험",
            ],
            ["role", "역할", "검색 UI 설계 · 화면 디자인 · 카카오맵 API 연동 · HTML·SCSS·JavaScript 구현"],
            ["chart", "기여도", "기획 10%, 디자인 90%, 프론트엔드 100%"],
            ["phone", "사용 환경", "PC Web · Desktop Fixed Layout · Hard Coding"],
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
            </div>
            <div className="project-detail-tools__group">
              <span className="project-detail-tools__label">API</span>
              <span className="project-detail-tool"><img src={kakaoIcon} alt="" />Kakao Map API</span>
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
              기존 화면에서는 주소 입력, 지도 확인, 직무 선택과 공고 목록이 서로 다른
              영역에 분산되어 사용자가 검색 조건과 결과의 관계를 빠르게 파악하기
              어려웠습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="idea" />
              해결 방향
            </h2>
            <p>
              주소 검색, 직무 필터, 지도와 공고 목록을 하나의 PC 화면 안에서 연결하고,
              공고마다 거리·급여·근무지 정보를 함께 보여주어 위치와 채용 조건을
              비교할 수 있도록 구성했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="settings" />
              주요 작업
            </h2>
            <ul>
              <li>기존 검색 화면의 정보 구조와 사용자 탐색 흐름 분석</li>
              <li>주소 기반 위치 이동 및 직무·검색 조건 영역 설계</li>
              <li>지도와 공고 목록을 결합한 검색 결과 구조 구현</li>
              <li>거리·급여·근무지 정보의 시각적 우선순위 개선</li>
              <li>PC 고정형 화면 HTML·SCSS·JavaScript 하드코딩</li>
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
                    "../../assets/images/projects/apt-map/" + screen.file
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
              지도와 공고 목록을 한 화면에 연결해 위치 기반 탐색 흐름을
              단순화했습니다. PC 고정형 화면에서도 정보가 과도하게 분산되지 않도록
              구조와 시선 흐름을 설계하는 것이 중요하다는 점을 배웠습니다.
            </p>
          </article>
        </section>
        <nav className="project-bottom-nav" aria-label="프로젝트 탐색">
          <Link to="/projects">
            <img className="project-arrow--back" src={arrowIcon} alt="" />
            프로젝트 목록으로 돌아가기
          </Link>
          <Link className="project-next" to="/projects/apt-renew">
            다음 프로젝트 보기
            <img src={arrowIcon} alt="" />
          </Link>
        </nav>
      </div>
    </main>
  );
}
