import Icon from "./Icon";
const RESUME_URL = "";
const CONTACT_EMAIL = "limnaseul52278@gmail.com";

export default function ActionButtons() {
  return (
    <div className="home-actions">
      {RESUME_URL ? (
        <a
          className="home-action home-action--primary"
          href={RESUME_URL}
          download
        >
          <Icon name="download" />
          이력서 다운로드
        </a>
      ) : (
        <button
          className="home-action home-action--primary"
          type="button"
          disabled
        >
          <Icon name="download" />
          이력서 준비 중
        </button>
      )}

      {CONTACT_EMAIL ? (
        <a
          className="home-action home-action--outline"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          연락하기
          <Icon name="arrow" />
        </a>
      ) : (
        <button
          className="home-action home-action--outline"
          type="button"
          disabled
        >
          연락처 준비 중
          <Icon name="arrow" />
        </button>
      )}
    </div>
  );
}
