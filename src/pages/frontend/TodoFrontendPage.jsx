import { useEffect } from "react";
import { Link } from "react-router";
import Icon from "../../components/Icon";
import heroLight from "../../assets/images/front/todoList/[front] todolist-main-light.png";
import heroDark from "../../assets/images/front/todoList/[front] todolist-main-dark.png";
import codeSearch from "../../assets/images/front/todoList/[code] todolist-01.png";
import codeProfile from "../../assets/images/front/todoList/[code] todolist-02.png";
import level from "../../assets/icons/level.png";
import buttonArrow from "../../assets/icons/btn-arrow.png";
import projectIcon from "../../assets/icons/project.png";
import period from "../../assets/icons/period.png";
import role from "../../assets/icons/role.png";
import challenge from "../../assets/icons/challenge.png";
import solution from "../../assets/icons/solution.png";

const skillAssets = import.meta.glob("../../assets/icons/skills/*.png", { eager: true, query: "?url", import: "default" });
const skillIcon = name => skillAssets[`../../assets/icons/skills/${name}.png`];
const skills = [["react", "React"], ["html", "HTML"], ["css", "CSS"], ["scss", "SCSS"], ["js", "JavaScript"], ["bootstrap", "Bootstrap"], ["github", "GitHub"], ["netlify", "Netlify"]];
const implementations = [
  ["폴더 기반 할 일 관리", "폴더 생성·수정·삭제와 색상 선택 기능을 구현해 할 일을 주제별로 분류할 수 있도록 했습니다. 폴더마다 전체·완료된 할 일 개수와 최근 수정일을 표시해 작업 현황을 빠르게 파악할 수 있습니다."],
  ["할 일 CRUD 및 상태 필터링", "할 일의 생성·수정·삭제·완료 처리를 구현하고, 중요도를 높음·중간·낮음으로 구분했습니다. 전체·진행 중·완료 상태 필터와 검색 기능을 제공해 필요한 작업을 빠르게 찾을 수 있도록 구성했습니다."],
  ["로그인 상태별 이용 흐름", "Firebase Authentication을 활용한 Google 로그인을 구현하고, 비로그인 사용자도 기본 기능을 이용할 수 있도록 설계했습니다. 비로그인 상태에서는 폴더와 할 일 생성 개수를 제한하고 안내 모달을 제공해 서비스 이용 정책을 화면에 반영했습니다."],
  ["데이터 유지와 사용자 맞춤 설정", "폴더·할 일·테마 설정은 LocalStorage에 저장해 새로고침 후에도 작업 상태가 유지되도록 했습니다. 프로필 이미지는 IndexedDB에 분리 저장하고, 라이트·다크모드 전환 및 설정 유지 기능으로 개인화된 사용 경험을 제공했습니다."],
];

export default function TodoFrontendPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="uiux-case frontend-case frontend-case--todo">
      <div className="portfolio-container">
        <nav className="case-navigation" aria-label="현재 위치">
          <ol><li><Link to="/frontend">Front-End</Link></li><li aria-current="page">Todo List</li></ol>
          <Link className="case-back" to="/frontend">← 목록보기</Link>
        </nav>
        <section className="case-hero" aria-labelledby="front-detail-title">
          <div className="case-hero__content">
            <p className="case-category">APPLICATION · 2026</p>
            <h1 id="front-detail-title">할일을 더 선명하게 정리하는<br />나만의 Todo List</h1>
            <p className="case-description">TodoList는 폴더별 할 일과 진행 상태를 관리할 수 있는 반응형 웹 애플리케이션입니다.<br />로그인 흐름과 다크모드를 제공해 사용자 환경에 맞는 일정 관리를 지원합니다.</p>
            <dl className="case-metadata">
              {[[projectIcon, "프로젝트", "개인 프로젝트"], [period, "기간", "2026.07 - 2026.08"], [role, "역할", "Front-End Developer"], [level, "기여도", "100%"]].map(([icon, label, value]) => (
                <div key={label}><dt><span className="case-icon"><img src={icon} alt="" /></span>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
            <div className="frontend-external">
              <a href="https://team-todolist.netlify.app/" target="_blank" rel="noreferrer">Live Demo <img className="frontend-external__arrow" src={buttonArrow} alt="" /></a>
              <a href="https://github.com/naseri3/TodoList" target="_blank" rel="noreferrer"><img src={skillIcon("github")} alt="" />GitHub Repository <img className="frontend-external__arrow" src={buttonArrow} alt="" /></a>
            </div>
          </div>
          <div className="case-hero__art">
            <img className="case-image--light" src={heroLight} alt="Todo List 모바일 구현 화면" />
            <img className="case-image--dark" src={heroDark} alt="Todo List 모바일 구현 화면" />
          </div>
        </section>
        <section className="frontend-stack" aria-labelledby="stack-title">
          <h2 id="stack-title"><span className="frontend-section-icon"><Icon name="layers" /></span>TECH STACK</h2>
          <ul>{skills.map(([name, label]) => <li key={name}><img src={skillIcon(name)} alt="" />{label}</li>)}</ul>
        </section>
        <section className="case-section" aria-labelledby="implementations-title">
          <h2 id="implementations-title">KEY IMPLEMENTATIONS</h2>
          <div className="frontend-implementations">{implementations.map(([title, text], index) => (
            <article className="case-feature" key={title}><h3><span>{String(index + 1).padStart(2, "0")}</span>{title}</h3><p>{text}</p></article>
          ))}</div>
          <div className="frontend-code-images">
            <img src={codeSearch} loading="lazy" alt="React 상태 관리와 LocalStorage 저장 코드" />
            <img src={codeProfile} loading="lazy" alt="할 일 업데이트와 상태별 검색 필터링 코드" />
          </div>
        </section>
        <section className="case-section" aria-labelledby="challenge-title">
          <h2 id="challenge-title">CHALLENGE &amp; SOLUTION</h2>
          <div className="case-summary">
            <div><h2><span className="case-icon"><img src={challenge} alt="" /></span>CHALLENGE</h2><p>비로그인 사용자도 즉시 할 일을 관리할 수 있으면서, 로그인 사용자는 더 자유롭게 서비스를 이용할 수 있도록 상태별 이용 정책을 설계해야 했습니다. 또한 폴더, 할 일, 테마, 프로필 이미지처럼 성격이 다른 데이터를 새로고침 이후에도 유지하면서 모바일 환경에서도 복잡하지 않은 관리 화면을 구성하는 것이 과제였습니다.</p></div>
            <div><h2><span className="case-icon"><img src={solution} alt="" /></span>SOLUTION</h2><p>사용자 인증 상태에 따라 생성 가능한 폴더와 할 일 개수를 분기하고, 제한에 도달한 경우 모달을 통해 다음 행동을 안내했습니다. 반복적으로 변경되는 폴더·할 일·테마 데이터는 LocalStorage에 저장하고, 용량이 큰 프로필 이미지는 IndexedDB로 분리해 관리했습니다. 모바일 중심의 반응형 레이아웃과 다크모드를 적용해 화면 크기와 사용 환경이 달라져도 일관된 사용성을 유지했습니다.</p></div>
          </div>
        </section>
        <footer className="case-actions">
          <Link to="/frontend/apt-job">← 이전 프로젝트 보기</Link>
          <Link to="/frontend/apt-map">다음 프로젝트 보기 →</Link>
        </footer>
      </div>
    </main>
  );
}
