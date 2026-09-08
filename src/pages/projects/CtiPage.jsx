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
import { useEffect, useState } from "react";
import { Link } from "react-router";
import mainImage from "../../assets/images/projects/cti/[ui] confidential-main-light.png";
import darkMainImage from "../../assets/images/projects/cti/[ui] confidential-main-dark.png";
import calendarIcon from "../../assets/icons/calendar.png";
import arrowIcon from "../../assets/icons/arrow.png";

// 실제 Figma 프로토타입 공유 링크를 입력하세요.
// 아래 파일을 src/assets/images/projects/apt-job/에 추가하면 자동으로 표시됩니다.
const screens = [
  { file: "cti-screen-01.png", title: "메인 검색 화면" },
  { file: "cti-screen-02.png", title: "직무별 채용공고" },
  { file: "cti-screen-03.png", title: "제휴 위탁관리본사" },
  { file: "cti-screen-04.png", title: "지원 정보 입력" },
];
const screenImages = import.meta.glob(
  "../../assets/images/projects/cti/*.png",
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
        <span aria-current="page">영업 실적 CTI 대시보드</span>
      </nav>
      <section className="project-hero" aria-labelledby="project-title">
        <div className="portfolio-container project-hero__inner">
          <div className="project-hero__copy">
            <span className="project-badge">Data Visualizations UI</span>
            <h1 id="project-title">영업 실적 CTI 대시보드</h1>
            <p className="project-date">
              <img src={calendarIcon} alt="" />
              2023.06 - 2024.01
            </p>
            <p>
              콜 건수, 매출과 고객 응답률을 실시간으로 확인하는 데이터 시각화 기반 업무 화면
            </p>
          </div>
          <img
            className="project-hero__image"
            src={isDark ? darkMainImage : mainImage}
            alt="영업 실적 CTI 대시보드 대표 화면"
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
              "영업 실적과 상담 현황을 한 화면에서 확인하는 그래프 기반 CTI 대시보드",
            ],
            ["role", "역할", "데이터 시각화 UI 디자인 · HTML·CSS·JavaScript 구현"],
            ["chart", "기여도", "기획 0%, 디자인 80%, 프론트엔드 70%"],
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
              콜 건수, 매출, 고객 응답률과 팀별 실적이 여러 자료에 분산되어
              영업 담당자가 현재 상황을 빠르게 파악하기 어려웠습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="idea" />
              해결 방향
            </h2>
            <p>
              핵심 KPI를 첫 화면에 배치하고 시간별 추이와 팀별 비교 정보를 차트와
              표로 구분해 반복 확인이 필요한 지표부터 단계적으로 확인하도록 구성했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="settings" />
              주요 작업
            </h2>
            <ul>
              <li>사용자·업무 분석을 통한 핵심 지표 정의</li>
              <li>대시보드 정보 구조와 화면 흐름 설계</li>
              <li>KPI 카드와 데이터 시각화 패턴 제작</li>
              <li>기간·조직별 기준 필터 UI 설계</li>
              <li>HTML·CSS·JavaScript 기반 대시보드 구현</li>
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
                    "../../assets/images/projects/cti/" + screen.file
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
              실적 정보를 한 화면에서 확인할 수 있도록 구성해 업무 판단 속도와
              관리 효율 향상에 기여했습니다. 많은 데이터를 사용자 관점에서
              우선순위화하는 경험을 쌓았습니다.
            </p>
          </article>
        </section>
        <nav className="project-bottom-nav" aria-label="프로젝트 탐색">
          <Link to="/projects">
            <img className="project-arrow--back" src={arrowIcon} alt="" />
            프로젝트 목록으로 돌아가기
          </Link>
          <Link className="project-next" to="/projects/guide">
            다음 프로젝트 보기
            <img src={arrowIcon} alt="" />
          </Link>
        </nav>
      </div>
    </main>
  );
}




