export default function App() {
  return (
    <main className="portfolio-container py-5">
      <h1 className="mb-3">NASEUL LIM®</h1>

      <p className="mb-4">
        UI/UX · Front-End Portfolio
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {["About Me", "UI/UX", "Front-End"].map((title) => (
          <div className="col" key={title}>
            <div className="border rounded-3 p-4 h-100">
              <h2 className="h4">{title}</h2>
              <p className="mb-0">
                포트폴리오 페이지 준비 중입니다.
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}