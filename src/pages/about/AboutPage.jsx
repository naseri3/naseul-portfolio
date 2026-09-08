import arrowIcon from "../../assets/icons/arrow.png";
import { Link } from "react-router";
import indexAboutIcon from "../../assets/icons/index-about.png";

import aboutUiuxFrontend from "../../assets/icons/about-uiux-frontend.png";
import aboutResponsive from "../../assets/icons/about-responsive.png";
import aboutQuality from "../../assets/icons/about-quality.png";
import aboutProblem from "../../assets/icons/about-problem.png";
import aboutDesign from "../../assets/icons/about-design.png";
import aboutCode from "../../assets/icons/about-code.png";
import selectProject01 from "../../assets/images/about/Select-Projects-01.png";
import selectProject02 from "../../assets/images/about/Select-Projects-02.png";
import selectProject03 from "../../assets/images/about/Select-Projects-03.png";
import selectProject04 from "../../assets/images/about/Select-Projects-04.png";

// 이력서 파일을 public에 저장한 뒤 다운로드 경로를 입력하세요.
const RESUME_URL = "";

const strengths = [
  ["10+", "10+ Years", "다양한 도메인의\n프로젝트 경험", "years"],
  [
    aboutUiuxFrontend,
    "UI/UX + Front-End",
    "디자인부터 코드까지\n처음부터 끝까지",
    "image",
  ],
  [
    aboutResponsive,
    "Responsive",
    "모든 디바이스에서\n일관된 경험 제공",
    "image",
  ],
  [
    aboutQuality,
    "Product Quality",
    "사용성, 접근성, 성능을\n고려한 품질 중심",
    "image",
  ],
];

const projects = [
  {
    title: "아파트잡 UI/UX 디자인",
    to: "/projects/apt-job",
    text: "모바일·디스크톱 환경에 맞춘 반응형 레이아웃 설계",
    image: selectProject01,
  },
  {
    title: "내 주변 공고 검색",
    text: "위치 기반 검색과 필터링으로 빠르고 정확한 탐색 제공",
    image: selectProject02,
  },
  {
    title: "아파트잡 핵심 리뉴얼",
    text: "정보 구조 재설계와 디자인 시스템 적용으로 사용성 개선",
    image: selectProject03,
  },
  {
    title: "영업 실적 CTI 대시보드",
    text: "실시간 데이터 시각화와 운영 효율을 높이는 대시보드 구축",
    image: selectProject04,
  },
];

function MiniIcon({ name }) {
  const paths = {
    download: <path d="M16 3v19m-7-7 7 7 7-7M4 23v6h24v-6" />,
    search: <path d="m21 21 6-6m-3-7a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />,
    pen: <path d="m5 27 16-16 6 6L11 33l-8 2 2-8Zm14-14 6 6" />,
    code: <path d="m10 8-8 8 8 8m12-16 8 8-8 8m-5 5 6-26" />,
    layers: (
      <path d="m16 3 13 7-13 7-13-7 13-7Zm-13 12 13 7 13-7m-26 7 13 7 13-7" />
    ),
    phone: (
      <>
        <rect x="9" y="2" width="14" height="28" rx="3" />
        <path d="M15 25h2" />
      </>
    ),
    shield: (
      <>
        <path d="m16 2 12 4v9c0 8-12 14-12 14S4 23 4 15V6l12-4Z" />
        <path d="m10 15 4 4 8-8" />
      </>
    ),
    user: (
      <>
        <circle cx="16" cy="9" r="5" />
        <path d="M6 29c0-5 4-8 10-8s10 3 10 8" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <main className="about-main">
        <div className="about-hero-decoration" aria-hidden="true" />
        <div className="portfolio-container">
          <section className="about-hero">
            <div className="about-hero__copy">
              <span className="about-label">ABOUT ME</span>
              <h1>
                사용자 경험을 <em>설계</em>하고,
                <br />
                디자인과 코드로 <em>구현</em>합니다.
              </h1>
              <p>
                사용자의 흐름과 서비스 구조를 설계하고
                <br />
                직관적인 UI 디자인과 정교한 퍼블리싱으로 실제 동작하는 제품
                경험을 완성합니다.
              </p>
            </div>
            <div className="about-stat-list">
              {strengths.map(([icon, title, text, type]) => (
                <div className="about-stat" key={title}>
                  <span className="about-stat__icon">
                    {type === "years" ? icon : <img src={icon} alt="" />}
                  </span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="about-skills">
            <div className="about-do">
              <h2>WHAT I DO</h2>
              <div className="about-do__grid">
                {[
                  [
                    aboutProblem,
                    "문제 정의",
                    "사용자와 비즈니스의 문제를 분석하고, 해결 방향을 정의합니다.",
                  ],
                  [
                    aboutDesign,
                    "UI 설계",
                    "사용자 흐름과 인터랙션을 설계하여 직관적인 경험을 만듭니다.",
                  ],
                  [
                    aboutCode,
                    "프론트 구현",
                    "정교한 코드로 디자인을 구현하고, 성능과 접근성을 최적화합니다.",
                  ],
                ].map(([icon, title, text]) => (
                  <article className="about-do-card" key={title}>
                    <span className="about-icon-circle">
                      <img src={icon} alt="" />
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="about-skill-groups">
              <h2>SKILLS</h2>
              <div className="about-skill-columns">
                {[
                  [
                    "UI/UX",
                    ["Figma", "Photoshop", "Wireframing", "UX Research"],
                  ],
                  [
                    "Front-End",
                    [
                      "HTML",
                      "CSS / SCSS",
                      "JavaScript",
                      "React",
                      "Git",
                      "Responsive",
                    ],
                  ],
                  ["AI", ["ChatGPT", "Claude", "Codex"]],
                ].map(([title, items]) => (
                  <div className="about-skill-group" key={title}>
                    <h3>{title}</h3>
                    <div>
                      {items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="about-lower">
            <div className="about-experience">
              <h2>SELECTED EXPERIENCE</h2>
              {[
                [
                  "2025.05 - 2026.08",
                  "이테시스 - 프리랜서 개발자 · UIUX 디자이너",
                  "아파트잡 프로젝트",
                ],
                [
                  "2018.04 - 2024.02",
                  "잡코리아 유한책임회사 - 파트장",
                  "브랜드 채용공고, 프로모션 UI, 대시보드 UI",
                ],
                [
                  "2016.04 - 2018.04",
                  "에케이앤파워 - 매니저",
                  "잡코리아 · 알바몬 채용공고, 브랜드 프로모션 UI, HTML·CSS 구현",
                ],
              ].map(([date, title, text]) => (
                <div className="about-career" key={date}>
                  <time>{date}</time>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-projects">
              <h2>SELECTED PROJECTS</h2>
              <div className="about-project-grid">
                {projects.map((project) => {
                  const Card = project.to ? Link : "article";
                  return (
                    <Card
                      className="about-project-card"
                      key={project.title}
                      {...(project.to ? { to: project.to, "aria-label": project.title + " 상세보기" } : {})}
                    >
                      <img src={project.image} alt="" />
                      <h3>{project.title}</h3>
                      <p>{project.text}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="about-cta">
            <span className="about-icon-circle">
              <img src={indexAboutIcon} alt="" />
            </span>
            <p>
              사용자와 비즈니스의 가치를 연결하는
              <br />
              디자인과 코드, 그 사이에서 균형을 만듭니다.
            </p>
            {RESUME_URL ? (
              <a className="about-cta__primary" href={RESUME_URL} download>
                <MiniIcon name="download" />
                이력서 다운로드
              </a>
            ) : (
              <button
                className="about-cta__primary"
                type="button"
                disabled
                title="이력서 파일 준비 중"
              >
                <MiniIcon name="download" />
                이력서 다운로드
              </button>
            )}
            <Link className="about-cta__outline" to="/projects">
              <img className="portfolio-arrow" src={arrowIcon} alt="" />프로젝트 보기
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
