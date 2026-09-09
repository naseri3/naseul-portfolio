
import { Link } from "react-router";
import aptJob from "../../assets/images/front/Front-portfolio-01.png";
import todoList from "../../assets/images/front/Front-portfolio-02.png";
import aptMap from "../../assets/images/front/Front-portfolio-03.png";
import arrow from "../../assets/icons/arrow.png";
import codeIcon from "../../assets/icons/about-code.png";

const projects = [
  {
    id: "apt-job",
    title: "APT Job 프론트엔드 개인 구현",
    category: "WEB APPLICATION",
    image: aptJob,
    description:
      "아파트 채용 정보 탐색과 지원 흐름을 웹 환경으로 구현한 채용 플랫폼",
    tags: ["Responsive", "JavaScript", "HTML / SCSS", "Git"],
  },
  {
    id: "todo-list",
    title: "Todo List",
    category: "APPLICATION",
    image: todoList,
    description:
      "할 일 등록과 상태 변경, 폴더 관리를 직관적으로 구현한 생산성 웹 앱",
    tags: ["React", "JavaScript", "LocalStorage", "Git"],
  },
  {
    id: "apt-map",
    title: "내 주변 공고 검색",
    category: "LOCATION-BASED WEB",
    image: aptMap,
    description:
      "지도와 목록을 함께 활용해 주변 채용 공고를 탐색할 수 있도록 구현한 웹 서비스",
    tags: ["Kakao Map API", "JavaScript", "HTML / SCSS"],
  },
];

export default function FrontendPage() {
  return (
    <main className="uiux-page frontend-page">
      <div className="portfolio-container">
        <section className="uiux-intro" aria-labelledby="frontend-title">
          <p className="uiux-eyebrow">FRONT-END PORTFOLIO</p>
          <h1 id="frontend-title">코드로 완성한 개발 프로젝트</h1>
          <p className="uiux-intro__description">
            사용자 경험을 설계하고, 견고한 코드로 아이디어를 현실로 만듭니다.
          </p>
          <p className="uiux-count">{projects.length} PROJECTS</p>
        </section>
        <section className="uiux-grid" aria-label="프론트엔드 프로젝트 목록">
          {projects.map((project, index) => (
            <article className="uiux-card" key={project.id} id={project.id}>
              <div className="uiux-card__visual">
                <span className="uiux-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <img
                  className="uiux-card__image"
                  src={project.image}
                  alt={`${project.title} 구현 화면`}
                />
              </div>
              <h2><Link className="frontend-card-link" to={`/frontend/${project.id}`}>{project.title}</Link></h2>
              <p className="uiux-card__category">{project.category}</p>
              <p className="uiux-card__description">{project.description}</p>
              <ul className="uiux-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="uiux-card__open" aria-hidden="true"><img src={arrow} alt="" /></span>
            </article>
          ))}
        </section>
        <p className="frontend-note">
          <span className="frontend-note__icon" aria-hidden="true">
            <img src={codeIcon} alt="" />
          </span>
          <span>더 나은 사용자 경험과 견고한 코드를 만들기 위해 끊임없이 고민하고 구현합니다.</span>
        </p>
      </div>

    </main>
  );
}
