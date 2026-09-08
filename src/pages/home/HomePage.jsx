import { Link } from "react-router";

import indexAboutIcon from "../../assets/icons/index-about.png";
import indexUiuxIcon from "../../assets/icons/index-uiux.png";
import indexFrontendIcon from "../../assets/icons/index-frontend.png";

import Icon from "../../components/Icon";
import ActionButtons from "../../components/ActionButtons";

const cards = [
  {
    number: "01",
    title: "About Me",
    description: "경험, 가치관, 그리고 일하는 방식을 소개합니다.",
    icon: indexAboutIcon,
    to: "/about",
  },
  {
    number: "02",
    title: "UI/UX Designer",
    description: "사용자 중심의 설계로 유의미한 경험을 만듭니다.",
    icon: indexUiuxIcon,
    to: "/uiux",
    purple: true,
  },
  {
    number: "03",
    title: "Front-End Developer",
    description: "견고한 코드로 높은 품질의 웹 경험을 구현합니다.",
    icon: indexFrontendIcon,
    to: "/frontend",
  },
];

const strengths = [
  {
    title: "10년 이상 경험",
    description: "다양한 도메인과 규모의 프로젝트 리딩 경험",
    icon: "experience",
  },
  {
    title: "Design to Code",
    description: "디자인 인텐트를 이해하고 정확하게 구현",
    icon: "layers",
    purple: true,
  },
  {
    title: "제품 품질 중심",
    description: "사용성, 접근성, 성능을 고려한 지속 가능한 품질 추구",
    icon: "shield",
  },
  {
    title: "Responsive Execution",
    description: "다양한 환경과 디바이스에서 일관된 경험 제공",
    icon: "phone",
    purple: true,
  },
];

export default function HomePage() {
  return (
    <div className="portfolio-home">
      <main className="home-main">
        <div className="home-decoration" aria-hidden="true" />

        <div className="portfolio-container home-content">
          <section className="home-intro" aria-labelledby="home-title">
            <span className="home-eyebrow">2026 PORTFOLIO</span>

            <h1 id="home-title">
              사용자 경험을 설계하고,
              <br />
              코드로 <em>완성도 높은 가치</em>를 만듭니다.
            </h1>

            <p>
              디자인 인텐트와 구현 품질을 연결하여 제품의 본질적인 가치를
              구현합니다.
            </p>
          </section>

          <section aria-label="포트폴리오 둘러보기">
            <div className="row g-4 home-card-grid">
              {cards.map((card) => (
                <div className="col-12 col-lg-4" key={card.to}>
                  <Link
                    to={card.to}
                    className={`home-card ${card.purple ? "home-card--purple" : ""}`}
                  >
                    <span className="home-card__number">{card.number}</span>

                    <span className="home-icon-circle">
                      <img src={card.icon} alt="" />
                    </span>

                    <h2>{card.title}</h2>
                    <p>{card.description}</p>

                    <span className="home-card__arrow">
                      <Icon name="arrow" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="home-strengths" aria-label="핵심 역량">
            <div className="row g-0">
              {strengths.map((item) => (
                <div className="col-12 col-md-6 col-xl-3" key={item.title}>
                  <div className="home-strength">
                    <span
                      className={`home-icon-circle ${item.purple ? "home-icon-circle--purple" : ""}`}
                    >
                      <Icon name={item.icon} />
                    </span>

                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="home-closing" aria-label="이력서 및 연락처">
            <p>
              저는 문제를 정의하고, 해결책을 설계하며, 결과로 증명하는
              사람입니다.
            </p>
            <ActionButtons />
          </section>
        </div>
      </main>
    </div>
  );
}

