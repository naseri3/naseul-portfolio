import arrowIcon from "../assets/icons/arrow.png";
export default function Icon({ name }) {
  if (name === "arrow") return <img className="portfolio-arrow" src={arrowIcon} alt="" />;
  if (name === "experience") {
    return <span className="experience-number">10+</span>;
  }

  const paths = {
    person: (
      <>
        <circle cx="24" cy="16" r="8" />
        <path d="M10 41v-3a14 14 0 0 1 28 0v3" />
      </>
    ),
    pen: (
      <>
        <path d="m8 40 5-23L28 8l12 12-9 15-23 5Z" />
        <path d="m8 40 13-13M24 11l13 13" />
        <circle cx="24" cy="24" r="4" />
      </>
    ),
    code: (
      <>
        <path d="m15 12-11 12 11 12M33 12l11 12-11 12M28 5 20 43" />
      </>
    ),
    layers: (
      <path d="m24 6 19 10-19 10L5 16 24 6ZM5 24l19 10 19-10M5 32l19 10 19-10" />
    ),
    shield: (
      <>
        <path d="m24 5 17 6v13c0 10-17 19-17 19S7 34 7 24V11l17-6Z" />
        <path d="m16 24 6 6 11-12" />
      </>
    ),
    phone: (
      <>
        <rect x="13" y="5" width="22" height="38" rx="4" />
        <path d="M23 36h2" />
      </>
    ),
    download: <path d="M24 5v26M13 20l11 11 11-11M7 32v10h34V32" />,
  };

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
