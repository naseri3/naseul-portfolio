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
import mainImage from "../../assets/images/projects/promotion/[ui] confidential-main-light.png";
import darkMainImage from "../../assets/images/projects/promotion/[ui] confidential-main-dark.png";
import calendarIcon from "../../assets/icons/calendar.png";
import arrowIcon from "../../assets/icons/arrow.png";

// 실제 Figma 프로토타입 공유 링크를 입력하세요.
// 아래 파일을 src/assets/images/projects/apt-job/에 추가하면 자동으로 표시됩니다.
const screens = [
  { file: "promotion-screen-01.png", title: "메인 검색 화면" },
  { file: "promotion-screen-02.png", title: "직무별 채용공고" },
  { file: "promotion-screen-03.png", title: "제휴 위탁관리본사" },
  { file: "promotion-screen-04.png", title: "지원 정보 입력" },
];
const screenImages = import.meta.glob(
  "../../assets/images/projects/promotion/*.png",
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
        <span aria-current="page">프로모션 콘텐츠</span>
      </nav>
      <section className="project-hero" aria-labelledby="project-title">
        <div className="portfolio-container project-hero__inner">
          <div className="project-hero__copy">
            <span className="project-badge">Promotion UI</span>
            <h1 id="project-title">프로모션 콘텐츠</h1>
            <p className="project-date">
              <img src={calendarIcon} alt="" />
              2022.01 - 2022.11
            </p>
            <p>
              분기별 공개채용 기업의 브랜드 메시지를 반영한 프로모션 페이지와 마케팅 콘텐츠 제작
            </p>
          </div>
          <img
            className="project-hero__image"
            src={isDark ? darkMainImage : mainImage}
            alt="프로모션 콘텐츠 대표 화면"
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
              "공개채용 기업을 위한 브랜드 프로모션 디자인과 HTML·CSS 퍼블리싱",
            ],
            ["role", "역할", "프로모션 UI 디자인 · 퍼블리싱"],
            ["chart", "기여도", "기획 0%, 디자인 100%, 프론트엔드 10%"],
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
              기업마다 채용 메시지와 브랜드 표현 방식이 달라 짧은 기간 안에 맞춤
              프로모션을 제작해야 했으며, 캠페인의 주목도와 정보 전달력을 함께
              확보해야 했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="idea" />
              해결 방향
            </h2>
            <p>
              기업의 브랜드 컬러와 메시지를 분석해 프로모션 콘셉트를 정하고,
              재사용 가능한 블록으로 구성해 랜딩·메일링·배너에서도 일관된 경험이
              이어지도록 설계했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="settings" />
              주요 작업
            </h2>
            <ul>
              <li>프로모션 요구사항과 브랜드 방향성 정리</li>
              <li>캠페인 메시지와 페이지 흐름 구성</li>
              <li>프로모션 히어로 및 콘텐츠 블록 디자인</li>
              <li>메일링·쿠폰·배너 등 연계 콘텐츠 제작</li>
              <li>HTML·CSS 퍼블리싱 및 운영 수정 지원</li>
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
                    "../../assets/images/projects/promotion/" + screen.file
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
              브랜드 경험을 강화하고 다양한 프로모션 채널에서 일관된 메시지를
              전달했습니다. 반복 운영되는 콘텐츠일수록 재사용성과 확장성을
              고려해야 한다는 점을 배웠습니다.
            </p>
          </article>
        </section>
        <nav className="project-bottom-nav" aria-label="프로젝트 탐색">
          <Link to="/projects">
            <img className="project-arrow--back" src={arrowIcon} alt="" />
            프로젝트 목록으로 돌아가기
          </Link>
          <Link className="project-next" to="/projects/editor">
            다음 프로젝트 보기
            <img src={arrowIcon} alt="" />
          </Link>
        </nav>
      </div>
    </main>
  );
}




