import { useEffect } from "react";
import UiuxProjectLayout from "../../components/UiuxProjectLayout";
import { aptJobDetail, composeDetail, herbalFaceFoodDetail, todoListDetail, yveningDetail } from "../../data/js/uiuxDetails";
import { Link, useParams } from "react-router";
import compose from "../../assets/images/uiux/UIUX-portfolio-01.png";
import yvening from "../../assets/images/uiux/UIUX-portfolio-02.png";
import herbal from "../../assets/images/uiux/UIUX-portfolio-03.png";
import aptJob from "../../assets/images/uiux/UIUX-portfolio-04.png";
import todo from "../../assets/images/uiux/UIUX-portfolio-05.png";
import plus from "../../assets/icons/pluse.png";
import arrow from "../../assets/icons/arrow.png";

const projects = [
  {
    id: "compose",
    title: "Compose",
    category: "MOBILE APP",
    image: compose,
    description:
      "메뉴 탐색, 주문, 멤버십 혜택, 매장 찾기를 하나의 흐름으로 설계한 커피 프랜차이즈 앱",
    tags: ["UX 설계", "UI 디자인", "프로토타입"],
  },
  {
    id: "yvening",
    title: "Yvening",
    category: "MOBILE COMMERCE",
    image: yvening,
    description:
      "향수 탐색과 구매, 멤버십, 커뮤니티 경험을 연결한 프래그런스 브랜드 앱",
    tags: ["UI 설계", "커머스 UX", "프로토타입"],
  },
  {
    id: "herbal-face-food",
    title: "Herbal Face Food",
    category: "MOBILE COMMERCE",
    image: herbal,
    description:
      "제품 탐색부터 브랜드 스토리, 구매, 피부 상담까지 연결한 스킨케어 앱",
    tags: ["UX 설계", "UI 디자인", "브랜드 경험"],
  },
  {
    id: "apt-job",
    title: "APT Job",
    category: "WEB · MOBILE",
    image: aptJob,
    description:
      "조건별 채용 공고 검색과 이력서 작성, 지원 현황 관리를 돕는 아파트 채용 플랫폼",
    tags: ["정보구조 설계", "UI 디자인", "UX 설계"],
  },
  {
    id: "todo-list",
    title: "Todo List",
    category: "MOBILE APP",
    image: todo,
    description:
      "리스트, 상태, 폴더, 계정 관리를 통해 일상을 정리하는 할 일 관리 앱",
    tags: ["UX 설계", "UI 디자인", "프로토타입"],
  },
];

export default function UiuxPage() {
  return (
    <main className="uiux-page">
      <div className="portfolio-container">
        <section className="uiux-intro" aria-labelledby="uiux-title">
          <p className="uiux-eyebrow">UI/UX PORTFOLIO</p>
          <h1 id="uiux-title">사용자 경험을 설계한 프로젝트</h1>
          <p className="uiux-intro__description">
            사용자 중심의 설계로 문제를 정의하고, 직관적인 경험으로 가치를
            만듭니다.
          </p>
          <p className="uiux-count">{projects.length} PROJECTS</p>
        </section>
        <section className="uiux-grid" aria-label="UI/UX 프로젝트 목록">
          {projects.map((project, index) => (
            <Link className="uiux-card" key={project.id} to={`/uiux/${project.id}`} aria-label={`${project.title} 프로젝트 보기`}>
              <div className="uiux-card__visual">
                <span className="uiux-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <img
                  className="uiux-card__image"
                  src={project.image}
                  alt={`${project.title} 디자인 화면`}
                />
              </div>
              <h2>{project.title}</h2>
              <p className="uiux-card__category">{project.category}</p>
              <p className="uiux-card__description">{project.description}</p>
              <ul className="uiux-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="uiux-card__open" aria-hidden="true">
                <img src={arrow} alt="" />
              </span>
            </Link>
          ))}
          <aside className="uiux-upcoming">
            <img src={plus} alt="" className="uiux-upcoming__icon" />
            <h2>더 많은 프로젝트가 준비 중입니다.</h2>
            <p>새로운 경험과 가치를 만드는 여정은 계속됩니다.</p>
          </aside>
        </section>
      </div>
    </main>
  );
}

export function UiuxDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  useEffect(() => { window.scrollTo(0, 0); }, [projectId]);

  if (!project) return <main className="portfolio-container py-5"><h1>프로젝트를 찾을 수 없습니다.</h1><Link to="/uiux">UI/UX 프로젝트 목록</Link></main>;
  const detail = projectId === "compose"
    ? composeDetail
    : projectId === "yvening"
      ? yveningDetail
      : projectId === "herbal-face-food"
        ? herbalFaceFoodDetail
        : projectId === "apt-job"
          ? aptJobDetail
          : projectId === "todo-list"
            ? todoListDetail
          : project;
  return <UiuxProjectLayout project={detail} />;
}
