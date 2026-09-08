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
import { useEffect } from "react";
import { Link } from "react-router";
import mainImage from "../../assets/images/projects/apt-job/[ui] aptJob-main-light.png";
import calendarIcon from "../../assets/icons/calendar.png";
import arrowIcon from "../../assets/icons/arrow.png";

// 실제 Figma 프로토타입 공유 링크를 입력하세요.
const PROTOTYPE_URL = "https://www.figma.com/design/wQjz9qj30C1NauuYduPvir/APT-Job?node-id=2-6306&t=dSQLzRQ5AlsHGtFR-1";
// 아래 파일을 src/assets/images/projects/apt-job/에 추가하면 자동으로 표시됩니다.
const screens = [
  { file: "aptJob-screen-01.png", title: "메인 검색 화면" },
  { file: "aptJob-screen-02.png", title: "직무별 채용공고" },
  { file: "aptJob-screen-03.png", title: "제휴 위탁관리본사" },
  { file: "aptJob-screen-04.png", title: "지원 정보 입력" },
];
const screenImages = import.meta.glob(
  "../../assets/images/projects/apt-job/*.png",
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
        <span aria-current="page">아파트잡 UIUX 디자인</span>
      </nav>
      <section className="project-hero" aria-labelledby="project-title">
        <div className="portfolio-container project-hero__inner">
          <div className="project-hero__copy">
            <span className="project-badge">실무 프로젝트 · UI/UX</span>
            <h1 id="project-title">아파트잡 UI/UX 디자인</h1>
            <p className="project-date">
              <img src={calendarIcon} alt="" />
              2026.02 - Present
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
                <img src={figmaIcon} alt="" />
                Figma Prototype
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
            src={mainImage}
            alt="아파트잡 채용 플랫폼의 데스크톱과 모바일 화면"
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
              "아파트 커뮤니티 기반 구인 · 구직을 돕는 반응형 채용 플랫폼",
            ],
            ["role", "역할", "UI/UX 설계 및 화면 디자인"],
            ["chart", "기여도", "기획 45%, 디자인 70%"],
            ["phone", "사용 환경", "Web · Mobile Responsive"],
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
              기존 화면은 프로모션 배너와 표형 공고 목록의 비중이 커서, 사용자가
              원하는 공고를 찾기 위한 탐색 경로를 빠르게 파악하기 어려웠습니다.
              또한 화면 크기에 따라 정보가 유연하게 정리되지 않는 문제가
              있었습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="idea" />
              해결 방향
            </h2>
            <p>
              첫 화면에서 검색과 주요 서비스로 바로 이동할 수 있도록 정보
              우선순위를 재구성했습니다. 공고 정보는 카드형으로 정리해 제목,
              근무지, 급여 등 핵심 내용을 쉽게 비교할 수 있도록 설계했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="settings" />
              주요 작업
            </h2>
            <ul>
              <li>기존 홈 화면의 정보 구조와 사용자 탐색 흐름 재정의</li>
              <li>검색, 주요 바로가기, 공고 카드 영역의 UI/UX 설계</li>
              <li>모바일 · 데스크톱 환경에 맞춘 반응형 레이아웃 구현</li>
              <li>공통 UI를 컴포넌트 단위로 구성해 화면 간 일관성 확보</li>
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
                    "../../assets/images/projects/apt-job/" + screen.file
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
              사용자가 검색과 주요 서비스에 더 빠르게 접근할 수 있는 홈 화면
              구조를 만들었습니다.
              <br />
              화면을 단순히 축소하기보다, 기기별 정보 밀도와 우선순위를 다시
              설계하는 것이 반응형 경험의 핵심임을 배웠습니다.
            </p>
          </article>
        </section>
        <nav className="project-bottom-nav" aria-label="프로젝트 탐색">
          <Link to="/projects">
            <img className="project-arrow--back" src={arrowIcon} alt="" />
            프로젝트 목록으로 돌아가기
          </Link>
          <Link className="project-next" to="/projects/apt-map">
            다음 프로젝트 보기
            <img src={arrowIcon} alt="" />
          </Link>
        </nav>
      </div>
    </main>
  );
}

