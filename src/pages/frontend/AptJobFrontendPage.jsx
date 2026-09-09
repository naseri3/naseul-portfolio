import { useEffect } from "react";
import { Link } from "react-router";
import Icon from "../../components/Icon";
import heroLight from "../../assets/images/front/aptJob/[front] aptJob-main-light.png";
import heroDark from "../../assets/images/front/aptJob/[front] aptJob-main-dark.png";
import codeSearch from "../../assets/images/front/aptJob/[code] APT-Job-01.png";
import codeProfile from "../../assets/images/front/aptJob/[code] APT-Job-02.png";
import level from "../../assets/icons/level.png";
import buttonArrow from "../../assets/icons/btn-arrow.png";
import projectIcon from "../../assets/icons/project.png";
import period from "../../assets/icons/period.png";
import role from "../../assets/icons/role.png";
import challenge from "../../assets/icons/challenge.png";
import solution from "../../assets/icons/solution.png";

const skillAssets = import.meta.glob("../../assets/icons/skills/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});
const skillIcon = (name) =>
  skillAssets[`../../assets/icons/skills/${name}.png`];
const skills = [
  ["html", "HTML"],
  ["css", "CSS"],
  ["scss", "SCSS"],
  ["js", "JavaScript"],
  ["bootstrap", "Bootstrap"],
  ["github", "GitHub"],
  ["netlify", "Netlify"],
];
const implementations = [
  [
    "반응형 채용 플랫폼 UI 구축",
    "Bootstrap의 그리드 시스템과 미디어 쿼리를 활용해 데스크톱부터 모바일까지 자연스럽게 대응하는 화면을 구현했습니다. 화면 크기에 따라 헤더 메뉴와 콘텐츠 레이아웃을 재구성해, 어떤 기기에서도 채용 정보를 편하게 탐색할 수 있도록 설계했습니다.",
  ],
  [
    "다중 조건 기반 채용공고 검색",
    "지역, 직무, 급여, 경력, 공고 상태 등 여러 조건을 조합해 원하는 공고를 찾을 수 있는 상세 검색 기능을 구현했습니다. 선택한 조건은 필터 태그로 즉시 확인하고 개별 삭제하거나 전체 초기화할 수 있어, 탐색 과정을 직관적으로 만들었습니다.",
  ],
  [
    "아파트맵 기반 공고 탐색",
    "지역 단위 지도와 직무 필터를 결합해 주변 채용공고를 확인할 수 있는 아파트맵 화면을 구현했습니다. 목록 중심의 탐색 방식에 지도 기반 탐색을 더해 사용자가 관심 지역의 공고를 빠르게 좁혀볼 수 있도록 했습니다.",
  ],
  [
    "마이페이지 채용 활동 관리",
    "이력서 관리, 지원 현황, 관심 공고, 최근 본 공고를 한곳에서 관리할 수 있는 마이페이지를 구성했습니다. 지원 상태와 관심 공고를 확인하고, 이력서 등록·수정·삭제 흐름까지 연결해 구직 활동을 지속적으로 관리할 수 있도록 구현했습니다.",
  ],
];

export default function AptJobFrontendPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="uiux-case frontend-case">
      <div className="portfolio-container">
        <nav className="case-navigation" aria-label="현재 위치">
          <ol>
            <li>
              <Link to="/frontend">Front-End</Link>
            </li>
            <li aria-current="page">APT Job 프론트엔드 개인 구현</li>
          </ol>
          <Link className="case-back" to="/frontend">
            ← 목록보기
          </Link>
        </nav>
        <section className="case-hero" aria-labelledby="front-detail-title">
          <div className="case-hero__content">
            <p className="case-category">PERSONAL PROJECT · 2025</p>
            <h1 id="front-detail-title">아파트잡 프론트엔드 개인 구현</h1>
            <p className="case-description">
              아파트잡은 서비스를 대상으로 회사 업무와 별개로 진행한 개인
              프로젝트입니다.
              <br />
              채용 정보 탐색과 지원 흐름을 구현하며, 반응형 UI와 JavaScript 기능
              구현 역량을 확장했습니다.
            </p>
            <dl className="case-metadata">
              {[
                [projectIcon, "프로젝트", "개인 구현 프로젝트"],
                [period, "기간", "2025.07 - 2025.12"],
                [role, "역할", "Front-End Developer"],
                [level, "기여도", "프론트엔드 구현 100%"],
              ].map(([icon, label, value]) => (
                <div key={label}>
                  <dt>
                    <span className="case-icon">
                      <img src={icon} alt="" />
                    </span>
                    {label}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="frontend-external">
              <a
                href="https://aptjob-responsive-architecture.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo{" "}
                <img
                  className="frontend-external__arrow"
                  src={buttonArrow}
                  alt=""
                />
              </a>
              <a
                href="https://github.com/naseri3/aptjob-responsive"
                target="_blank"
                rel="noreferrer"
              >
                <img src={skillIcon("github")} alt="" />
                GitHub Repository{" "}
                <img
                  className="frontend-external__arrow"
                  src={buttonArrow}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="case-hero__art">
            <img
              className="case-image--light"
              src={heroLight}
              alt="APT Job PC와 모바일 구현 화면"
            />
            <img
              className="case-image--dark"
              src={heroDark}
              alt="APT Job PC와 모바일 구현 화면"
            />
          </div>
        </section>
        <section className="frontend-stack" aria-labelledby="stack-title">
          <h2 id="stack-title">
            <span className="frontend-section-icon">
              <Icon name="layers" />
            </span>
            TECH STACK
          </h2>
          <ul>
            {skills.map(([name, label]) => (
              <li key={name}>
                <img src={skillIcon(name)} alt="" />
                {label}
              </li>
            ))}
          </ul>
        </section>
        <section
          className="case-section"
          aria-labelledby="implementations-title"
        >
          <h2 id="implementations-title">KEY IMPLEMENTATIONS</h2>
          <div className="frontend-implementations">
            {implementations.map(([title, text], index) => (
              <article className="case-feature" key={title}>
                <h3>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {title}
                </h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="frontend-code-images">
            <img
              src={codeSearch}
              loading="lazy"
              alt="지역 선택 제한과 선택 지역 검사, 필터 초기화를 처리하는 JavaScript 코드"
            />
            <img
              src={codeProfile}
              loading="lazy"
              alt="FileReader와 localStorage를 사용한 프로필 이미지 업로드 코드"
            />
          </div>
        </section>
        <section className="case-section" aria-labelledby="challenge-title">
          <h2 id="challenge-title">CHALLENGE &amp; SOLUTION</h2>
          <div className="case-summary">
            <div>
              <h2>
                <span className="case-icon">
                  <img src={challenge} alt="" />
                </span>
                CHALLENGE
              </h2>
              <p>
                채용 서비스는 공고의 정보량이 많고, 사용자가 지역·직무·경력 등
                다양한 기준으로 빠르게 비교해야 합니다. 특히 데스크톱과
                모바일에서 동일한 정보를 제공하면서도 화면이 복잡해지지 않도록
                정보의 우선순위와 탐색 흐름을 정리하는 과정이 필요했습니다.
              </p>
            </div>
            <div>
              <h2>
                <span className="case-icon">
                  <img src={solution} alt="" />
                </span>
                SOLUTION
              </h2>
              <p>
                공고 탐색의 핵심 조건을 상세 검색 영역에 구조화하고, 선택된
                조건을 필터 태그로 시각화해 현재 검색 상태를 쉽게 파악하도록
                했습니다. 또한 모바일에서는 메뉴와 콘텐츠를 세로 흐름으로
                재배치하고, 카드형 공고 UI를 적용해 작은 화면에서도 핵심 정보와
                상세보기 동선을 명확하게 유지했습니다.
              </p>
            </div>
          </div>
        </section>
        <footer className="case-actions">
          <Link to="/frontend">← 프로젝트 목록 보기</Link>
          <Link to="/frontend/todo-list">다음 프로젝트 보기 →</Link>
        </footer>
      </div>
    </main>
  );
}
