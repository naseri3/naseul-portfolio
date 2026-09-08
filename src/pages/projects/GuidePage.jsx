import overviewIcon from "../../assets/icons/project-overview.png";
import roleIcon from "../../assets/icons/project-role.png";
import contributionIcon from "../../assets/icons/project-contribution.png";
import deviceIcon from "../../assets/icons/project-device.png";
import problemIcon from "../../assets/icons/project-problem.png";
import solutionIcon from "../../assets/icons/project-solution.png";
import tasksIcon from "../../assets/icons/project-tasks.png";
import screensIcon from "../../assets/icons/project-screens.png";
import resultsIcon from "../../assets/icons/project-results.png";
import photoshopIcon from "../../assets/icons/skills/Photoshop.png";
import powerPointIcon from "../../assets/icons/skills/powerPoint.png";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import mainImage from "../../assets/images/projects/guide/[ui] confidential-main-light.png";
import darkMainImage from "../../assets/images/projects/guide/[ui] confidential-main-dark.png";
import calendarIcon from "../../assets/icons/calendar.png";
import arrowIcon from "../../assets/icons/arrow.png";

// 실제 Figma 프로토타입 공유 링크를 입력하세요.
// 아래 파일을 src/assets/images/projects/apt-job/에 추가하면 자동으로 표시됩니다.
const screens = [
  { file: "guide-screen-01.png", title: "메인 검색 화면" },
  { file: "guide-screen-02.png", title: "직무별 채용공고" },
  { file: "guide-screen-03.png", title: "제휴 위탁관리본사" },
  { file: "guide-screen-04.png", title: "지원 정보 입력" },
];
const screenImages = import.meta.glob(
  "../../assets/images/projects/guide/*.png",
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
        <span aria-current="page">브랜드 채용관 제안서·가이드</span>
      </nav>
      <section className="project-hero" aria-labelledby="project-title">
        <div className="portfolio-container project-hero__inner">
          <div className="project-hero__copy">
            <span className="project-badge">Information Design</span>
            <h1 id="project-title">브랜드 채용관 제안서·가이드</h1>
            <p className="project-date">
              <img src={calendarIcon} alt="" />
              2023.03 - 2023.07
            </p>
            <p>
              영업자와 신규 기업 담당자가 상품을 빠르게 이해하고 활용할 수 있도록 설계한 정보 디자인 프로젝트
            </p>
          </div>
          <img
            className="project-hero__image"
            src={isDark ? darkMainImage : mainImage}
            alt="브랜드 채용관 제안서·가이드 대표 화면"
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
              "영업용 상품 제안서와 신규 기업 담당자를 위한 서비스 이용 가이드",
            ],
            ["role", "역할", "문서 정보 구조·디자인 담당"],
            ["chart", "기여도", "디자인 100%"],
            ["phone", "사용 환경", "PC · Presentation"],
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
              <span className="project-detail-tool"><img src={photoshopIcon} alt="" />Photoshop</span>
            </div>
            <div className="project-detail-tools__group">
              <span className="project-detail-tools__label">문서</span>
              <span className="project-detail-tool"><img src={powerPointIcon} alt="" />PowerPoint</span>
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
              상품 기능과 운영 절차가 많은 문서에 분산되어 영업자가 고객에게
              일관되게 설명하기 어려웠고, 신규 담당자도 서비스의 전체 구조를
              빠르게 이해하기 어려웠습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="idea" />
              해결 방향
            </h2>
            <p>
              상품 특징과 이용 절차를 단계별로 재구성하고, 텍스트·도식·비교표를
              활용해 목적에 따라 핵심 정보를 빠르게 파악하도록 디자인했습니다.
            </p>
          </article>
          <article>
            <h2>
              <DetailIcon name="settings" />
              주요 작업
            </h2>
            <ul>
              <li>전달받은 PPT와 요구사항 분석</li>
              <li>제안서 정보 구조와 페이지 흐름 설계</li>
              <li>상품 특징 및 도입 효과 시각화</li>
              <li>신규 담당자용 이용 프로세스 구성</li>
              <li>가이드형 슬라이드와 화면 설명 제작</li>
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
                    "../../assets/images/projects/guide/" + screen.file
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
              영업자가 상품의 장점을 체계적으로 설명할 수 있도록 문서의 전달력을
              높였습니다. 정보 디자인은 장식보다 정보의 순서와 강조점을 결정하는
              과정이라는 점을 배웠습니다.
            </p>
          </article>
        </section>
        <nav className="project-bottom-nav" aria-label="프로젝트 탐색">
          <Link to="/projects">
            <img className="project-arrow--back" src={arrowIcon} alt="" />
            프로젝트 목록으로 돌아가기
          </Link>
          <Link className="project-next" to="/projects/promotion">
            다음 프로젝트 보기
            <img src={arrowIcon} alt="" />
          </Link>
        </nav>
      </div>
    </main>
  );
}




