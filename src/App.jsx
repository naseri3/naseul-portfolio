import { Link, Route, Routes } from "react-router";
import SiteHeader from "./components/SiteHeader";
import FrontendPage from "./pages/frontend/FrontendPage";
import AptJobFrontendPage from "./pages/frontend/AptJobFrontendPage";
import TodoFrontendPage from "./pages/frontend/TodoFrontendPage";
import AptMapFrontendPage from "./pages/frontend/AptMapFrontendPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import UiuxPage, { UiuxDetailPage } from "./pages/uiux/UiuxPage";
import ProjectDetailPage from "./pages/projects/ProjectDetailPage";
import AptMapPage from "./pages/projects/AptMapPage";
import AptRenewPage from "./pages/projects/AptRenewPage";
import BrandPage from "./pages/projects/BrandPage";
import CtiPage from "./pages/projects/CtiPage";
import GuidePage from "./pages/projects/GuidePage";
import PromotionPage from "./pages/projects/PromotionPage";
import EditorPage from "./pages/projects/EditorPage";

function ComingSoon({ title }) {
  return (
    <main className="portfolio-container py-5">
      <h1>{title}</h1>
      <p className="my-4">페이지를 준비하고 있습니다.</p>
      <Link to="/" className="btn btn-outline-primary">
        메인으로 돌아가기
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <>
    <SiteHeader />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/apt-job" element={<ProjectDetailPage />} />
      <Route path="/projects/apt-map" element={<AptMapPage />} />
      <Route path="/projects/apt-renew" element={<AptRenewPage />} />
      <Route path="/projects/brand" element={<BrandPage />} />
      <Route path="/projects/cti" element={<CtiPage />} />
      <Route path="/projects/guide" element={<GuidePage />} />
      <Route path="/projects/promotion" element={<PromotionPage />} />
      <Route path="/projects/editor" element={<EditorPage />} />
      <Route path="/uiux" element={<UiuxPage />} />
      <Route path="/uiux/:projectId" element={<UiuxDetailPage />} />
      <Route path="/frontend/apt-job" element={<AptJobFrontendPage />} />
      <Route path="/frontend/todo-list" element={<TodoFrontendPage />} />
      <Route path="/frontend/apt-map" element={<AptMapFrontendPage />} />
      <Route
        path="/frontend"
        element={<FrontendPage />}
      />
      <Route
        path="*"
        element={<ComingSoon title="페이지를 찾을 수 없습니다." />}
      />
    </Routes>
    </>
  );
}
