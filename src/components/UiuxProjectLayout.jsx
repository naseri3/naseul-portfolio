import { Link } from "react-router";
import Icon from "./Icon";
import figma from "../assets/icons/skills/figma.png";

// Optional assets are discovered at build time; adding a named PNG needs no code edit.
const assets = import.meta.glob(
  [
    "../assets/icons/uiux/**/*.png",
    "../assets/images/uiux/**/*.{png,jpg,jpeg,webp}",
    "../assets/icons/{project,period,role,platform,problem,solution,process-research,process-architecture,process-design,process-prototype}.png",
  ],
  { eager: true, query: "?url", import: "default" },
);
const resolveAsset = (path) => assets[`../assets/${path}`];
const fallbackIcons = {
  project: "person",
  period: "layers",
  role: "person",
  platform: "phone",
  problem: "layers",
  solution: "shield",
  "process-research": "person",
  "process-architecture": "layers",
  "process-design": "pen",
  "process-prototype": "phone",
};

function DetailIcon({ name, className = "" }) {
  const image =
    resolveAsset(`icons/uiux/${name}.png`) || resolveAsset(`icons/${name}.png`);
  return (
    <span className={`case-icon ${className}`} aria-hidden="true">
      {image ? (
        <img src={image} alt="" />
      ) : (
        <Icon name={fallbackIcons[name] || "layers"} />
      )}
    </span>
  );
}

export default function UiuxProjectLayout({ project }) {
  const projectAsset = (name) => {
    if (!name) return undefined;
    const folder = project.assetFolder || project.id;
    const exact = resolveAsset(`images/uiux/${folder}/${name}`);
    if (exact) return exact;

    // Feature assets may be supplied as PNG while the current files are JPG.
    const fallback = name.endsWith(".png")
      ? name.replace(/\.png$/, ".jpg")
      : name.endsWith(".jpg")
        ? name.replace(/\.jpg$/, ".png")
        : null;
    return fallback
      ? resolveAsset(`images/uiux/${folder}/${fallback}`)
      : undefined;
  };
  const logo = projectAsset(project.logo);
  const systemIcons = [project.designSystem?.icons]
    .flat()
    .filter(Boolean)
    .map((name) => ({ name, src: projectAsset(name) }))
    .filter((item) => item.src);
  return (
    <main className="uiux-case">
      <div className="portfolio-container">
        <nav className="case-navigation" aria-label="현재 위치">
          <ol>
            <li>
              <Link to="/uiux">UIUX</Link>
            </li>
            <li aria-current="page">{project.title}</li>
          </ol>
          <Link className="case-back" to="/uiux">
            ← 목록보기
          </Link>
        </nav>
        <section className="case-hero" aria-labelledby="case-title">
          <div className="case-hero__content">
            <div
              className={`case-hero__heading${project.logo ? " case-hero__heading--logo" : ""}`}
            >
              {project.logo && (
                <div className="case-logo">
                  {logo ? (
                    <img src={logo} alt={`${project.title} 로고`} />
                  ) : (
                    <span>{project.title}</span>
                  )}
                </div>
              )}
              <div>
                <p className="case-category">{project.category}</p>
                <h1 id="case-title">{project.headline || project.title}</h1>
                <p className="case-description">{project.description}</p>
                <ul className="case-tags">
                  {project.contribution && (
                    <li className="case-tags__primary">
                      기여도 : {project.contribution}
                    </li>
                  )}
                  {project.tags?.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            {project.metadata && (
              <dl className="case-metadata">
                {project.metadata.map((item) => (
                  <div key={item.label}>
                    <dt>
                      <DetailIcon name={item.icon} />
                      {item.label}
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <div className="case-hero__art">
            <img
              className={project.heroDark ? "case-image--light" : ""}
              src={project.heroLight || project.image}
              alt={`${project.title} 주요 화면`}
            />
            {project.heroDark && (
              <img
                className="case-image--dark"
                src={project.heroDark}
                alt={`${project.title} 주요 화면`}
              />
            )}
          </div>
        </section>
        {(project.problem || project.solution) && (
          <section className="case-summary" aria-label="문제와 해결 방향">
            {[
              ["problem", "PROBLEM"],
              ["solution", "SOLUTION"],
            ].map(
              ([key, label]) =>
                project[key] && (
                  <div key={key}>
                    <h2>
                      <DetailIcon name={key} />
                      {label}
                    </h2>
                    <p>{project[key]}</p>
                  </div>
                ),
            )}
          </section>
        )}
        {project.features && (
          <section className="case-section" aria-labelledby="case-features">
            <h2 id="case-features">KEY FEATURES</h2>
            <div className="case-features">
              {project.features.map((item, index) => {
                const image = projectAsset(item.image);
                return (
                  <article className="case-feature" key={item.title}>
                    <h3>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item.title}
                    </h3>
                    <p>{item.text}</p>
                    {image && (
                      <img
                        src={image}
                        alt={`${item.title} 화면`}
                        loading="lazy"
                      />
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}
        {project.process && (
          <section className="case-section" aria-labelledby="case-process">
            <h2 id="case-process">DESIGN PROCESS</h2>
            <ol className="case-process">
              {project.process.map((item) => (
                <li key={item.title}>
                  <DetailIcon name={item.icon} className="case-process__icon" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </section>
        )}
        {project.designSystem && (
          <section className="case-section" aria-labelledby="case-system">
            <h2 id="case-system">DESIGN SYSTEM</h2>
            <div className="case-system">
              <div>
                <h3>COLOR</h3>
                <ul className="case-colors">
                  {project.designSystem.colors.map((color) => (
                    <li key={color}>
                      <span style={{ backgroundColor: color }} />
                      <span>{color}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>TYPOGRAPHY</h3>
                <p
                  className="case-type"
                  style={{ fontFamily: project.designSystem.font }}
                >
                  가나다Aa
                </p>
                <p>{project.designSystem.font}</p>
              </div>
              <div>
                <h3>BUTTON</h3>
                <div
                  className="case-button-sample"
                  style={{
                    background: project.designSystem.primary,
                    color: "#fff",
                  }}
                >
                  메인 버튼
                </div>
                <div
                  className="case-button-sample"
                  style={{
                    background: project.designSystem.secondary,
                    color: project.designSystem.secondaryText || "#111",
                  }}
                >
                  {project.designSystem.secondaryLabel || "서브 버튼"}
                </div>
              </div>
              <div>
                <h3>ICONS</h3>
                {systemIcons.length ? (
                  <div className="case-system__icon-rows">
                    {systemIcons.map((item, index) => (
                      <img
                        className="case-system__icons"
                        key={item.name}
                        src={item.src}
                        alt={`${project.title} 디자인 시스템 아이콘 모음 ${index + 1}`}
                        style={
                          project.designSystem.iconWidth
                            ? { width: project.designSystem.iconWidth }
                            : undefined
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <div className="case-system__pending">아이콘 준비 중</div>
                )}
              </div>
            </div>
          </section>
        )}
        <footer className="case-actions">
          {project.prototypeUrl ? (
            <a href={project.prototypeUrl} target="_blank" rel="noreferrer">
              ← <img src={figma} alt="" />
              Figma Prototype 보러가기
            </a>
          ) : (
            <span className="case-actions__pending" aria-disabled="true">
              <img src={figma} alt="" />
              Figma Prototype 링크 준비 중
            </span>
          )}
          {project.next && (
            <Link
              to={project.next.to}
              aria-label={`다음 프로젝트 ${project.next.title} 보기`}
            >
              다음 프로젝트 보기 <span aria-hidden="true">→</span>
            </Link>
          )}
        </footer>
      </div>
    </main>
  );
}
