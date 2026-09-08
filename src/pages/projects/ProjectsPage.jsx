import calendarIcon from "../../assets/icons/calendar.png";
import arrowIcon from "../../assets/icons/arrow.png";
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router";
import projectErrorIcon from "../../assets/icons/project-error.png";
import jobImage from "../../assets/images/projects/[project-card] 01-aptJob.png";
import mapImage from "../../assets/images/projects/[project-card] 02-Apt-map.png";
import renewImage from "../../assets/images/projects/[project-card] 03-Renew.png";
import brandImage from "../../assets/images/projects/[project-card] 04-brand-Design.png";
import dataImage from "../../assets/images/projects/[project-card] 05-data-ui.png";
import informationImage from "../../assets/images/projects/[project-card] 06-information-ui.png";
import promotionImage from "../../assets/images/projects/[project-card] 07-promotion-ui.png";
import editorImage from "../../assets/images/projects/[project-card] 08-editor-ui.png";

const projects = [
  {
    id: "apt-job",
    category: "실무 프로젝트 · UIUX",
    title: "아파트잡 UI/UX 디자인",
    description:
      "채용 정보 탐색과 지원 흐름을 설계하고, PC·모바일 UI를 디자인했습니다.",
    date: "2026.02 - 2026.08",
    tools: ["Figma", "Photoshop"],
    image: jobImage,
  },
  {
    id: "apt-map",
    category: "UIUX + Front-End",
    title: "내 주변 공고 검색",
    description:
      "지도 위치를 기반으로 주변 채용 공고를 탐색하는 검색 경험 설계 및 구현",
    date: "2025.10 - 2025.12",
    tools: ["HTML", "SCSS", "JavaScript"],
    image: mapImage,
  },
  {
    id: "apt-renew",
    category: "UIUX + Front-End",
    title: "아파트잡 핵심 화면 리뉴얼",
    description:
      "인덱스, 직무 · 지역 검색, 위탁사 검색 및 상세페이지 1차 리뉴얼",
    date: "2025.05 - 2025.08",
    tools: ["Figma", "HTML", "SCSS", "JavaScript"],
    image: renewImage,
  },
  {
    id: "brand",
    category: "UIUX + Front-End",
    title: "브랜드 채용공고 고도화",
    description:
      "기업별 브랜드 아이덴티티를 반영한 채용공간 UI와 HTML · CSS 화면 개선",
    date: "2019.01 - 2024.01",
    tools: ["Photoshop", "HTML", "CSS", "Illustrator"],
    image: brandImage,
  },
  {
    id: "cti",
    category: "Data Visualizations UI",
    title: "영업 실적 CTI 대시보드",
    description:
      "콜 건수, 매출, 고객 응답률 등을 실시간으로 확인하는 그래프 기반 업무 화면",
    date: "2023.06 - 2024.01",
    tools: ["Figma", "HTML", "SCSS", "JavaScript"],
    image: dataImage,
  },
  {
    id: "guide",
    category: "Information Design",
    title: "브랜드 채용관 제안서 가이드",
    description:
      "영업 담당자, 신규 기업 담당자와 신규 영업자를 위한 상품 제안서 및 이용 가이드",
    date: "2023.03 - 2023.07",
    tools: ["Photoshop", "PowerPoint"],
    image: informationImage,
  },
  {
    id: "promotion",
    category: "Promotion UI",
    title: "프로모션 콘텐츠",
    description: "플랫폼 내 프로모션 콘텐츠의 비주얼 디자인과 퍼블리싱 작업",
    date: "2022.01 - 2022.11",
    tools: ["Photoshop", "HTML", "CSS", "Illustrator"],
    image: promotionImage,
  },
  {
    id: "editor",
    category: "Editor UI",
    title: "알바몬 채용공고 간편 에디터",
    description:
      "알바몬 채용공고 간편 에디터를 활용한 채용공고 페이지 운영 및 화면 수정",
    date: "2016.05 - 2017.02",
    tools: ["Figma", "HTML", "SCSS", "Photoshop"],
    image: editorImage,
  },
];

function ProjectVisual({ project }) {
  const borderless = ["cti", "guide", "promotion", "editor"].includes(project.id);
  return (
    <img className={`project-cover${borderless ? " project-cover--borderless" : ""}`} src={project.image} alt="" loading="lazy" />
  );
}

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const filter = ["uiux", "frontend"].includes(params.get("filter"))
    ? params.get("filter")
    : "all";
  const selected = projects.find(
    (project) => project.id === params.get("project"),
  );
  const dialogRef = useRef(null);
  const visible = projects.filter((project) => {
    const classification = project.category.includes("Front-End")
      ? "frontend"
      : "uiux";
    return filter === "all" || classification === filter;
  });

  function openProject(project) {
    navigate(`/projects/${project.id}`);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected) {
      if (dialog.open) dialog.close();
      return;
    }
    dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
    };
  }, [selected]);

  function closeDetails() {
    setParams((current) => {
      const next = new URLSearchParams(current);
      next.delete("project");
      return next;
    });
  }

  return (
    <main className="projects-page">
      <div className="portfolio-container">
        <section className="projects-intro" aria-labelledby="projects-title">
          <div className="projects-decoration" aria-hidden="true" />
          <div className="projects-intro__copy">
            <p className="projects-eyebrow">PROJECTS</p>
            <h1 id="projects-title">프로젝트 아카이브</h1>
            <p>
              사용자 중심의 경험 설계와 프론트엔드 구현을 통해
              <br />
              실제 문제를 해결한 주요 프로젝트를 소개합니다.
            </p>
          </div>
          <div className="projects-hero-art" aria-hidden="true">
            <div className="art-window art-window--left">
              ▤<span>▯ ▯</span>
            </div>
            <div className="art-window art-window--center">
              <small>○ ○ ○</small>
              <strong>&lt;/&gt;</strong>
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="art-window art-window--right">
              <strong>✓ ◉</strong>
              <i />
              <i />
              <i />
            </div>
            <span className="art-globe">◎</span>
          </div>
        </section>
        <nav className="projects-filters" aria-label="프로젝트 분류">
          {[
            ["all", "All"],
            ["uiux", "UI"],
            ["frontend", "Front-End"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() =>
                setParams(value === "all" ? {} : { filter: value })
              }
            >
              {label}
            </button>
          ))}
        </nav>
        <section className="projects-grid" aria-label="프로젝트 목록">
          {visible.map((project) => (
            <article
              className="project-card"
              key={project.id}
              tabIndex="0"
              role="button"
              aria-label={`${project.title} 상세보기`}
              onClick={(event) => {
                if (event.target.closest("button, a")) return;
                openProject(project);
              }}
              onKeyDown={(event) => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                openProject(project);
              }}
            >
              <p className="project-category">{project.category}</p>
              <ProjectVisual project={project} />
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-date">
                <img src={calendarIcon} alt="" />
                {project.date}
              </p>
              <ul className="project-tools">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <button
                className="project-detail-link"
                type="button"
                aria-label={project.title + " 상세보기"}
                onClick={() => openProject(project)}
              >
                프로젝트 상세보기<img src={arrowIcon} alt="" />
              </button>
            </article>
          ))}
        </section>
        <aside className="projects-notice">
          <img src={projectErrorIcon} alt="" />
          <p>
            각 프로젝트 상세 보기에서 프로젝트 개요와 기간, 사용한 도구 및
            기술을 확인하실 수 있습니다.
          </p>
        </aside>
      </div>
      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onCancel={(event) => {
          event.preventDefault();
          closeDetails();
        }}
      >
        {selected && (
          <>
            <button
              className="project-dialog__close"
              type="button"
              onClick={closeDetails}
              aria-label="상세보기 닫기"
            >
              ×
            </button>
            <p className="project-category">{selected.category}</p>
            <h2 id="project-dialog-title">{selected.title}</h2>
            <ProjectVisual project={selected} />
            <p>{selected.description}</p>
            <p className="project-date">{selected.date}</p>
            <ul className="project-tools">
              {selected.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </>
        )}
      </dialog>
    </main>
  );
}
