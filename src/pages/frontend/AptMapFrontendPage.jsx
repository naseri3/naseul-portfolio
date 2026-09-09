import { useEffect } from "react";
import { Link } from "react-router";
import Icon from "../../components/Icon";
import heroLight from "../../assets/images/front/aptMap/[front] aptMap-main-light.png";
import heroDark from "../../assets/images/front/aptMap/[front] aptMap-main-dark.png";
import codeSearch from "../../assets/images/front/aptMap/[code] APT-Map-01.png";
import codeProfile from "../../assets/images/front/aptMap/[code] APT-Map-02.png";
import level from "../../assets/icons/level.png";
import buttonArrow from "../../assets/icons/btn-arrow.png";
import projectIcon from "../../assets/icons/project.png";
import period from "../../assets/icons/period.png";
import role from "../../assets/icons/role.png";
import challenge from "../../assets/icons/challenge.png";
import solution from "../../assets/icons/solution.png";

const skillAssets = import.meta.glob("../../assets/icons/skills/*.png", { eager: true, query: "?url", import: "default" });
const skillIcon = name => skillAssets[`../../assets/icons/skills/${name}.png`];
const skills = [["html", "HTML"], ["css", "CSS"], ["scss", "SCSS"], ["js", "JavaScript"], ["bootstrap", "Bootstrap"], ["github", "GitHub"], ["kakao", "Kakao Map API"]];
const implementations = [
  ["주소 기반 주변 공고 탐색", "사용자가 입력한 주소를 기준으로 주변 채용공고를 확인할 수 있도록 구성했습니다. 근무지까지의 직선거리를 함께 제공해 출퇴근 거리까지 고려한 공고 탐색이 가능합니다."],
  ["지도와 공고 목록 연동", "지도 위 공고 위치와 목록 데이터를 연결해 위치와 상세 정보를 함께 확인할 수 있도록 구현했습니다. 목록의 지도 보기 기능을 통해 원하는 공고의 위치를 빠르게 확인할 수 있습니다."],
  ["다중 직무 필터링", "소장, 관리과장, 시설기사, 전기직 등 여러 직무를 중복 선택할 수 있는 필터 기능을 구성했습니다. 관심 직무만 선택해 지도와 목록의 공고를 효율적으로 좁혀볼 수 있습니다."],
  ["핵심 정보 중심 공고 리스트", "공고 제목, 직무, 급여, 단지명, 세대수, 등록일, 마감일, 거리를 목록에 구조화해 제공했습니다. 사용자가 공고를 비교할 때 필요한 정보를 한 화면에서 빠르게 확인할 수 있도록 설계했습니다."],
];

export default function AptMapFrontendPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="uiux-case frontend-case frontend-case--map">
      <div className="portfolio-container">
        <nav className="case-navigation" aria-label="현재 위치">
          <ol><li><Link to="/frontend">Front-End</Link></li><li aria-current="page">내 주변 공고 검색</li></ol>
          <Link className="case-back" to="/frontend">← 목록보기</Link>
        </nav>
        <section className="case-hero" aria-labelledby="front-detail-title">
          <div className="case-hero__content">
            <p className="case-category">LOCATION-BASED WEB · 2025</p>
            <h1 id="front-detail-title">내 주변에서 찾는<br />더 가까운 채용공고</h1>
            <p className="case-description">주소를 기준으로 근무지까지의 거리를 확인하고, 직무 조건에 맞는 아파트 채용공고를 지도와 목록에서 함께 탐색할 수 있는 서비스입니다.</p>
            <dl className="case-metadata">
              {[[projectIcon, "프로젝트", "실무 프로젝트"], [period, "기간", "2025.10 - 2025.12"], [role, "역할", "Front-End Developer"], [level, "기여도", "100%"]].map(([icon, label, value]) => (
                <div key={label}><dt><span className="case-icon"><img src={icon} alt="" /></span>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
            <div className="frontend-external frontend-external--single">
              <a href="https://www.aptjob.net/subpage/recruit_search_map.html" target="_blank" rel="noreferrer">Live Demo <img className="frontend-external__arrow" src={buttonArrow} alt="" /></a>
            </div>
          </div>
          <div className="case-hero__art">
            <img className="case-image--light" src={heroLight} alt="지도와 채용 공고 목록이 연동된 내 주변 공고 검색 화면" />
            <img className="case-image--dark" src={heroDark} alt="지도와 채용 공고 목록이 연동된 내 주변 공고 검색 화면" />
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
            <img src={codeSearch} loading="lazy" alt="주소별 공고 그룹화와 최신 공고 선택 코드" />
            <img src={codeProfile} loading="lazy" alt="Kakao Map 마커 생성과 공고 상세 패널 연결 코드" />
          </div>
        </section>
        <section className="case-section" aria-labelledby="challenge-title">
          <h2 id="challenge-title">CHALLENGE &amp; SOLUTION</h2>
          <div className="case-summary">
            <div><h2><span className="case-icon"><img src={challenge} alt="" /></span>CHALLENGE</h2><p>주변 공고 검색은 단순히 위치를 보여주는 것을 넘어, 사용자가 거리와 직무, 공고 정보를 함께 비교할 수 있어야 합니다. 지도와 목록 중 한쪽 정보만 강조될 경우 탐색 흐름이 끊길 수 있어, 두 영역을 자연스럽게 연결하고 많은 정보를 직관적으로 보여주는 방식이 필요했습니다.</p></div>
            <div><h2><span className="case-icon"><img src={solution} alt="" /></span>SOLUTION</h2><p>주소를 기준으로 지도의 탐색 범위를 설정하고, 각 공고에 근무지까지의 직선거리를 표시해 위치 정보를 실질적인 선택 기준으로 활용할 수 있도록 했습니다. 또한 다중 직무 필터와 지도 보기 기능을 제공해 사용자가 지도에서 위치를 확인한 뒤 목록에서 급여·마감일·단지 정보를 비교하는 흐름을 만들었습니다.</p></div>
          </div>
        </section>
        <footer className="case-actions">
          <Link to="/frontend/todo-list">← 이전 프로젝트 보기</Link>
          <Link to="/frontend">프로젝트 목록 보기 →</Link>
        </footer>
      </div>
    </main>
  );
}
