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
import illustratorIcon from "../../assets/icons/skills/Illustrator.png";
import htmlIcon from "../../assets/icons/skills/html.png";
import cssIcon from "../../assets/icons/skills/css.png";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import mainImage from "../../assets/images/projects/brand/[ui] brand-main-light.png";
import darkMainImage from "../../assets/images/projects/brand/[ui] brand-main-dark.png";
import calendarIcon from "../../assets/icons/calendar.png";
import arrowIcon from "../../assets/icons/arrow.png";

// 실제 Figma 프로토타입 공유 링크를 입력하세요.
// 아래 파일을 src/assets/images/projects/apt-job/에 추가하면 자동으로 표시됩니다.
const screens = [
  { file: "brand-screen-01.png", title: "메인 검색 화면" },
  { file: "brand-screen-02.png", title: "직무별 채용공고" },
  { file: "brand-screen-03.png", title: "제휴 위탁관리본사" },
  { file: "brand-screen-04.png", title: "지원 정보 입력" },
];
const screenImages = import.meta.glob(
  "../../assets/images/projects/brand/*.png",
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
        <span aria-current="page">브랜드 채용공고 고도화</span>
      </nav>
      <section className="project-hero" aria-labelledby="project-title">
        <div className="portfolio-container project-hero__inner">
          <div className="project-hero__copy">
            <span className="project-badge">UI/UX + Front-End</span>
            <h1 id="project-title">브랜드 채용공고 고도화</h1>
            <p className="project-date">
              <img src={calendarIcon} alt="" />
              2019.01 - 2024.01
            </p>
            <p>
              기업별 브랜드 아이덴티티를 반영한 고객 맞춤형 고급 채용공고 디자인 및 화면 개선
            </p>
          </div>
          <img
            className="project-hero__image"
            src={isDark ? darkMainImage : mainImage}
            alt="브랜드 채용공고 고도화 대표 화면"
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
              "기업 브랜드 특성에 맞춘 채용공고 디자인 제작·운영",
            ],
            ["role", "역할", "UI 디자인 · HTML·CSS 구현 · 유지보수"],
            ["chart", "기여도", "기획 0%, 디자인 100%, 프론트엔드 15%"],
            ["phone", "사용 환경", "Mobile · Tablet · Desktop"],
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
              <span className="project-detail-tool"><img src={illustratorIcon} alt="" />Illustrator</span>
            </div>
            <div className="project-detail-tools__group">
              <span className="project-detail-tools__label">Front-End</span>
              <span className="project-detail-tool"><img src={htmlIcon} alt="" />HTML</span>
              <span className="project-detail-tool"><img src={cssIcon} alt="" />CSS</span>
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
              서로 다른 기업의 브랜드 특성을 제한된 채용공고 구조 안에서 표현해야
              했으며, 브랜드 이미지와 정보 전달력을 동시에 유지해야 했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="idea" />
              해결 방향
            </h2>
            <p>
              기업별 컬러·이미지·타이포그래피를 분석해 브랜드 특성이 드러나는
              화면을 제작하고, 반복되는 구조는 유지하면서 차별화된 비주얼을 적용했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="settings" />
              주요 작업
            </h2>
            <ul>
              <li>기업 브랜드 아이덴티티와 채용 메시지 분석</li>
              <li>브랜드별 채용공고 비주얼 콘셉트 설계</li>
              <li>채용 정보의 위계와 콘텐츠 흐름 구성</li>
              <li>HTML·CSS 기반 화면 제작 및 운영 수정</li>
              <li>지사·대행사 제작물 품질 점검</li>
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
                    "../../assets/images/projects/brand/" + screen.file
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
              브랜드 경험의 완성도를 높이면서도 채용 정보와 지원 경로가 명확하게
              전달되도록 구성했습니다. 브랜드 특성과 정보 구조를 함께 고려하는
              역량을 쌓았습니다.
            </p>
          </article>
        </section>
        <nav className="project-bottom-nav" aria-label="프로젝트 탐색">
          <Link to="/projects">
            <img className="project-arrow--back" src={arrowIcon} alt="" />
            프로젝트 목록으로 돌아가기
          </Link>
          <Link className="project-next" to="/projects/cti">
            다음 프로젝트 보기
            <img src={arrowIcon} alt="" />
          </Link>
        </nav>
      </div>
    </main>
  );
}




